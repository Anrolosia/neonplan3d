// Module loader: code the shop delivers as a signed pack (not part of this repository) runs inside NeonPlan through
// a small, versioned interface. A module is an ES module whose default export is a `NeonModule`; the backend
// checked its signature and binding like a furniture pack's, so what runs here is what we signed.

import type { Building } from "./model.ts";
import type { HomeAssistant } from "./types.ts";

/** The loader interface this NeonPlan speaks; a module written for a newer one is left alone. */
export const MODULE_API = 1;

/** A spoken question's answer: what to say, and what to show in the house. */
export interface VoiceAnswer {
  /** The answer (shown as a bubble, spoken when `speak` is not false); empty when only something is shown. */
  text?: string;
  speak?: boolean;
  /** Where to fly: a device by its entity, a piece of furniture, a room or a floor. */
  focus?: { entity?: string; furnitureId?: string; roomId?: string; floorId?: string } | null;
  /** Devices that flash in 3D (the open windows, the appliances running). */
  highlight?: string[];
  /** A tour: the view flies to each stop in turn (an open window, a running appliance) and stays a moment; a tap ends it. */
  tour?: { entity?: string; furnitureId?: string; openingId?: string }[];
}

/** A piece of furniture or a placed device the house knows, with where it stands. */
export interface SpokenDevice {
  /** The entity, or "furniture:<id>". */
  id: string;
  entity: string | null;
  name: string;
  /** Every name it answers to. */
  names: string[];
  room: string;
  floorId: string;
  roomId: string | null;
  /** Its power sensor, when it has one. */
  power: string | null;
  type: string;
}

/** A door, window, garage door or roof window of the plan, by one of its entities (contact, blind, lock …). */
export interface SpokenOpening {
  /** The opening's id in the plan (for a tour stop). */
  id: string;
  entity: string;
  kind: "door" | "window" | "garage" | "roof_window";
  /** The kind's word in the user's language ("Fenster"), or the roof window's own name. */
  name: string;
  room: string;
  floorId: string;
  roomId: string | null;
  /** As the 3D view shows it: standing open (a sash, a door, a garage door), or only tilted. */
  open: boolean;
  tilted: boolean;
}

/** What a module may ask the host for. */
export interface ModuleHost {
  api: typeof MODULE_API;
  hass(): HomeAssistant;
  building(): Building | null;
  /** The language of the user ("de", "en-GB" …). */
  language(): string;
  /** The devices and furniture of the plan, each with its room. */
  devices(): SpokenDevice[];
  /** The one a sentence names ("die Waschmaschine", "der Fernseher im Wohnzimmer"), by the host's own matching. */
  findDevice(sentence: string): SpokenDevice | null;
  /** The doors and windows of the plan with their rooms, one entry per linked entity (the plan names them better than Home Assistant's contact sensors do). */
  openings(): SpokenOpening[];
  /** Consumers drawing power right now (from the plan's sensors), highest first. */
  consumers(): { id: string; entity: string | null; name: string; watts: number }[];
}

export interface NeonModule {
  api: number;
  id: string;
  /** Voice: a spoken sentence the host did not understand itself; null leaves it to Assist. */
  voice?(sentence: string, host: ModuleHost): Promise<VoiceAnswer | null> | VoiceAnswer | null;
}

interface Loaded {
  id: string;
  release: number;
  module: NeonModule;
}

const loaded = new Map<string, Loaded>();
const loading = new Map<string, Promise<Loaded | null>>();
/** Object URLs of the code, revoked when a module is replaced. */
const urls = new Map<string, string>();

/** Packs that carry a module, as the pack list shows them (the code is fetched apart). */
export interface ModulePack {
  id: string;
  release?: number;
  module?: { api: number; kind: string };
}

async function fetchCode(hass: HomeAssistant, packId: string): Promise<{ code: string; release: number; api: number }> {
  return hass.callWS({ type: "neonplan3d/modules/code", pack_id: packId });
}

async function load(hass: HomeAssistant, pack: ModulePack): Promise<Loaded | null> {
  const got = await fetchCode(hass, pack.id);
  if (got.api !== MODULE_API) return null;
  const url = URL.createObjectURL(new Blob([got.code], { type: "text/javascript" }));
  try {
    const mod = (await import(/* @vite-ignore */ url)) as { default?: NeonModule };
    const module = mod.default;
    if (!module || module.api !== MODULE_API || typeof module.id !== "string") return null;
    const old = urls.get(pack.id);
    if (old) URL.revokeObjectURL(old);
    urls.set(pack.id, url);
    const entry = { id: pack.id, release: got.release, module };
    loaded.set(pack.id, entry);
    return entry;
  } catch (err) {
    URL.revokeObjectURL(url);
    throw err;
  }
}

/**
 * Load the modules of the installed packs (once per pack and release); packs gone are dropped. Errors of one
 * module never stop the others – a broken module is simply not there.
 */
export async function syncModules(hass: HomeAssistant, packs: readonly ModulePack[]): Promise<void> {
  const wanted = new Map(packs.filter((p) => p.module && p.module.api === MODULE_API).map((p) => [p.id, p]));
  for (const id of [...loaded.keys()]) if (!wanted.has(id)) loaded.delete(id);
  await Promise.all(
    [...wanted.values()].map((p) => {
      const have = loaded.get(p.id);
      if (have && have.release === (p.release ?? 1)) return Promise.resolve(have);
      let job = loading.get(p.id);
      if (!job) {
        job = load(hass, p)
          .catch((err) => {
            console.warn(`NeonPlan 3D: module ${p.id} did not load`, err);
            return null;
          })
          .finally(() => loading.delete(p.id));
        loading.set(p.id, job);
      }
      return job;
    }),
  );
}

/** The loaded modules (for the extensions page and tests). */
export function loadedModules(): readonly { id: string; release: number }[] {
  return [...loaded.values()].map((m) => ({ id: m.id, release: m.release }));
}

/** Ask the voice modules in turn; the first answer wins. */
export async function moduleVoice(sentence: string, host: ModuleHost): Promise<VoiceAnswer | null> {
  for (const m of loaded.values()) {
    if (!m.module.voice) continue;
    try {
      const answer = await m.module.voice(sentence, host);
      if (answer) return answer;
    } catch (err) {
      console.warn(`NeonPlan 3D: module ${m.id} failed on "${sentence}"`, err);
    }
  }
  return null;
}

/** For tests: register a module without loading code. */
export function registerModule(module: NeonModule, release = 1): void {
  loaded.set(module.id, { id: module.id, release, module });
}

export function clearModules(): void {
  loaded.clear();
}
