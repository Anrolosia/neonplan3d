// The locating setup assistant: scanners into rooms, devices to track, the calibration walk, and a live check.
// Lab only for now (texts German/English inline; the 18 languages come with the release).

import { css, html, LitElement, nothing } from "lit";
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { doorPairs, locateRooms, roomAt, type LocateRoom } from "./graph.ts";

interface Scanner {
  source: string;
  name: string;
  kind: string;
  device_id: string | null;
  area_id: string | null;
  scanning: boolean;
}
interface Device {
  id: string;
  name: string;
  kind: "irk" | "ibeacon" | "mac";
  key: string;
  person: string | null;
  icon: string | null;
}
interface Config {
  enabled: boolean;
  admins_only: boolean;
  devices: Device[];
  scanner_rooms: Record<string, string>;
  scanners: Scanner[];
  bluetooth: boolean;
  private_ble: { title: string; key: string }[];
  samples: Record<string, Record<string, number>>;
  scanner_hints: Record<string, string>;
}
interface Nearby {
  address: string;
  rssi: number;
  name: string | null;
  ibeacon: string | null;
  apple: boolean;
  random: boolean;
}
interface Live {
  running: boolean;
  devices: { id: string; name: string; room?: string | null; name_room?: string; probability?: number; last_seen?: number | null }[];
  calibration: { room: string; left: number; count: Record<string, number> } | null;
}
type Step = "scanners" | "devices" | "walk" | "live";

const DE = {
  title: "Ortung einrichten",
  lab: "Labor",
  close: "Schließen",
  s_scanners: "1 · Empfänger",
  s_devices: "2 · Geräte",
  s_walk: "3 · Einlernen",
  s_live: "4 · Live",
  no_bt: "Home Assistant hat kein Bluetooth eingerichtet. Shelly (Gen2/3: Bluetooth-Scan passiv), ESPHome-Bluetooth-Proxys oder ein USB-Stick genügen.",
  scanners_intro: "Das sind alle Bluetooth-Empfänger, die Home Assistant kennt. Sag bei jedem, in welchem Raum er steht.",
  not_placed: "– Raum wählen –",
  hint_room: "Signal sagt: {room} – übernehmen",
  coverage: "Räume ohne eigenen Empfänger – das Einlernen macht sie trotzdem erkennbar:",
  devices_intro: "Welche Geräte sollen geortet werden? Am besten das, was du immer dabei hast – die Uhr am Handgelenk ist ideal.",
  known_keys: "iPhone und Apple Watch mit Schlüssel (aus „Private BLE Device“ in Home Assistant):",
  add: "Hinzufügen",
  added: "✓ dabei",
  remove: "Entfernen",
  person: "Person",
  none: "keine",
  near_title: "Gerät in der Nähe suchen",
  near_intro: "Halte das Gerät direkt an einen Empfänger. Android: in der Home-Assistant-App „BLE-Sender“ einschalten. Schlüsselanhänger: kurz drücken.",
  near_empty: "Noch nichts Starkes in der Nähe …",
  walk_intro: "Geh in jeden Raum, tippe ihn an und lauf 90 Sekunden langsam herum – auch in die Ecken. Nimm alle Geräte mit.",
  learning: "Lerne {room} … noch {left} s",
  stop: "Abbrechen",
  samples: "{n} Proben",
  quality: "Trefferquote prüfen",
  quality_result: "Trefferquote: {p}",
  relearn_all: "Alles neu einlernen",
  live_intro: "So sieht NeonPlan dich gerade. Lauf herum und schau, ob es stimmt.",
  enabled: "Ortung eingeschaltet",
  admins_only: "Personen nur für Admins zeigen",
  not_heard: "nicht gehört",
  next: "Weiter",
  need_device: "Erst ein Gerät hinzufügen.",
};
const EN: typeof DE = {
  title: "Set up locating",
  lab: "Lab",
  close: "Close",
  s_scanners: "1 · Scanners",
  s_devices: "2 · Devices",
  s_walk: "3 · Learn",
  s_live: "4 · Live",
  no_bt: "Home Assistant has no Bluetooth set up. Shelly (Gen2/3: Bluetooth scanning passive), ESPHome Bluetooth proxies or a USB adapter will do.",
  scanners_intro: "These are all Bluetooth scanners Home Assistant knows. Tell NeonPlan which room each one is in.",
  not_placed: "– pick a room –",
  hint_room: "Signals say: {room} – use it",
  coverage: "Rooms without a scanner of their own – learning makes them recognisable anyway:",
  devices_intro: "Which devices should be located? Best what you always carry – a watch on the wrist is ideal.",
  known_keys: "iPhone and Apple Watch with a key (from \"Private BLE Device\" in Home Assistant):",
  add: "Add",
  added: "✓ added",
  remove: "Remove",
  person: "Person",
  none: "none",
  near_title: "Find a device nearby",
  near_intro: "Hold the device right next to a scanner. Android: switch on \"BLE Transmitter\" in the Home Assistant app. Key tags: press once.",
  near_empty: "Nothing strong nearby yet …",
  walk_intro: "Go into every room, tap it and walk around slowly for 90 seconds – into the corners too. Carry all devices.",
  learning: "Learning {room} … {left} s left",
  stop: "Cancel",
  samples: "{n} samples",
  quality: "Check accuracy",
  quality_result: "Accuracy: {p}",
  relearn_all: "Learn everything anew",
  live_intro: "This is where NeonPlan sees you now. Walk around and check.",
  enabled: "Locating on",
  admins_only: "Show people to admins only",
  not_heard: "not heard",
  next: "Next",
  need_device: "Add a device first.",
};

export class LocateSetup extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    _step: { state: true },
    _cfg: { state: true },
    _near: { state: true },
    _live: { state: true },
    _quality: { state: true },
    _error: { state: true },
  };

  declare hass: HomeAssistant;
  declare building: Building;
  declare _step: Step;
  declare _cfg: Config | null;
  declare _near: Nearby[];
  declare _live: Live | null;
  declare _quality: Record<string, { overall: number | null; rooms: Record<string, number> }> | null;
  declare _error: string;

  constructor() {
    super();
    // reactive fields are declared, not initialised as class fields (that would hide Lit's accessors)
    this._step = "scanners";
    this._cfg = null;
    this._near = [];
    this._live = null;
    this._quality = null;
    this._error = "";
  }
  private timer = 0;
  private unsub: (() => void) | null = null;

  private get t(): typeof DE {
    return this.hass?.language?.startsWith("de") ? DE : EN;
  }

  private tr(text: string, vars: Record<string, string | number>): string {
    return text.replace(/\{(\w+)\}/g, (_m, k: string) => String(vars[k] ?? ""));
  }

  private get rooms(): LocateRoom[] {
    return locateRooms(this.building);
  }

  connectedCallback(): void {
    super.connectedCallback();
    this.load().catch((e: unknown) => (this._error = `load: ${(e as Error)?.stack ?? String(e)}`));
    this.timer = window.setInterval(() => void this.tick(), 1000);
    void this.hass.connection
      .subscribeMessage<Live>((live) => (this._live = live), { type: "neonplan3d/locate/subscribe" })
      .then((u) => (this.unsub = u))
      .catch(() => undefined);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    window.clearInterval(this.timer);
    this.unsub?.();
  }

  private async call<T>(msg: Record<string, unknown>): Promise<T | null> {
    try {
      this._error = "";
      return await this.hass.callWS<T>(msg);
    } catch (e) {
      this._error = (e as { message?: string }).message ?? String(e);
      return null;
    }
  }

  private async load(): Promise<void> {
    const cfg = await this.call<Config>({ type: "neonplan3d/locate/config" });
    if (!cfg) return;
    // scanners not placed yet: the room of their device in the plan (a placed switch of a Shelly), else its area
    const rooms = { ...cfg.scanner_rooms };
    let guessed = false;
    for (const s of cfg.scanners) {
      if (rooms[s.source]) continue;
      const guess = this.guessRoom(s) ?? cfg.scanner_hints?.[s.source] ?? null;
      if (guess) {
        rooms[s.source] = guess;
        guessed = true;
      }
    }
    this._cfg = { ...cfg, scanner_rooms: rooms };
    if (guessed) await this.save({ scanner_rooms: rooms });
  }

  /**
   * The room a scanner most likely stands in: a pin or a piece of furniture of its device in the plan (a Shelly's
   * switch, the washing machine with the plug's power sensor), its Home Assistant area, or a room named in its name
   * ("PC Büro Steckdose", "bluetooth-proxy-kueche"). After the calibration walk the signals tell as well (backend).
   */
  private guessRoom(s: Scanner): string | null {
    const ofDevice = (entity: unknown) => typeof entity === "string" && !!s.device_id && this.hass.entities?.[entity]?.device_id === s.device_id;
    if (s.device_id) {
      for (const f of this.building.floors) {
        for (const p of f.placements) {
          const room = ofDevice(p.entity_id) ? roomAt(this.building, f.id, p.x, p.z) : null;
          if (room) return room;
        }
        for (const m of f.furniture) {
          if (!Object.values(m).some(ofDevice)) continue;
          const room = roomAt(this.building, f.id, m.x, m.z);
          if (room) return room;
        }
      }
    }
    // the Home Assistant area of the scanner's device (found by name when the backend did not find it by address)
    const deviceId =
      s.device_id ?? Object.values(this.hass.devices ?? {}).find((d) => [d.name_by_user, d.name].some((n) => n && n.toLowerCase() === s.name.toLowerCase()))?.id ?? null;
    const entityAreas = deviceId ? Object.values(this.hass.entities ?? {}).filter((e) => e.device_id === deviceId && e.area_id).map((e) => e.area_id!) : [];
    const area = s.area_id ?? (deviceId ? this.hass.devices?.[deviceId]?.area_id : null) ?? entityAreas[0] ?? null;
    if (area) {
      const room = this.rooms.find((r) => r.area_id === area);
      if (room) return room.id;
    }
    const plain = (text: string) =>
      text
        .toLowerCase()
        .replace(/ä/g, "ae")
        .replace(/ö/g, "oe")
        .replace(/ü/g, "ue")
        .replace(/ß/g, "ss")
        .replace(/[^a-z0-9]+/g, " ");
    const name = ` ${plain(s.name)} `;
    const hits = this.rooms.filter((r) => plain(r.name).trim().length >= 3 && name.includes(plain(r.name).trim()));
    // the longest name wins ("badezimmer" over "bad"); a name on two floors is no answer
    hits.sort((a, b) => plain(b.name).length - plain(a.name).length);
    if (hits.length && hits.filter((r) => plain(r.name) === plain(hits[0].name)).length === 1) return hits[0].id;
    return null;
  }

  /** Every save sends the plan's rooms and doors along, so the service always knows the current plan. */
  private async save(changes: Record<string, unknown>): Promise<void> {
    let doors: [string, string][] = [];
    try {
      doors = doorPairs(this.building);
    } catch (e) {
      console.warn("NeonPlan locate: no door graph", e);
    }
    const cfg = await this.call<Config>({
      type: "neonplan3d/locate/configure",
      rooms: this.rooms,
      doors,
      ...changes,
    });
    if (cfg) this._cfg = { ...cfg, scanner_rooms: { ...cfg.scanner_rooms } };
  }

  private async tick(): Promise<void> {
    if (this._step === "devices") {
      const res = await this.call<{ devices: Nearby[] }>({ type: "neonplan3d/locate/nearby" });
      if (res) this._near = res.devices;
    }
    if (this._step === "walk") {
      // the countdown and the sample counts come from here (the live state only changes when a room changes)
      const res = await this.call<{ calibration: Live["calibration"]; samples: Config["samples"] }>({ type: "neonplan3d/locate/calibrate", action: "status" });
      if (res && this._cfg) {
        this._cfg = { ...this._cfg, samples: res.samples };
        this._live = { ...(this._live ?? { running: true, devices: [] }), calibration: res.calibration };
      }
    }
  }

  protected render() {
    const t = this.t;
    const cfg = this._cfg;
    const steps: [Step, string][] = [
      ["scanners", t.s_scanners],
      ["devices", t.s_devices],
      ["walk", t.s_walk],
      ["live", t.s_live],
    ];
    return html`<div class="box" role="dialog" aria-label=${t.title}>
      <header>
        <b>📡 ${t.title} <small>${t.lab}</small></b>
        <button class="x" @click=${() => this.remove()} aria-label=${t.close}>✕</button>
      </header>
      <nav>${steps.map(([s, label]) => html`<button class=${this._step === s ? "on" : ""} @click=${() => (this._step = s)}>${label}</button>`)}</nav>
      ${this._error ? html`<pre class="err">${this._error}</pre>` : nothing}
      ${!cfg ? html`<p>…</p>` : !cfg.bluetooth ? html`<p>${t.no_bt}</p>` : this.renderStep(cfg)}
    </div>`;
  }

  private renderStep(cfg: Config) {
    switch (this._step) {
      case "scanners":
        return this.renderScanners(cfg);
      case "devices":
        return this.renderDevices(cfg);
      case "walk":
        return this.renderWalk(cfg);
      default:
        return this.renderLive(cfg);
    }
  }

  private roomSelect(value: string | null, onPick: (room: string | null) => void) {
    const floors = [...new Set(this.rooms.map((r) => r.floor))];
    return html`<select @change=${(e: Event) => onPick((e.target as HTMLSelectElement).value || null)}>
      <option value="" ?selected=${!value}>${this.t.not_placed}</option>
      ${floors.map((f) => html`<optgroup label=${f}>${this.rooms.filter((r) => r.floor === f).map((r) => html`<option value=${r.id} ?selected=${r.id === value}>${r.name}</option>`)}</optgroup>`)}
    </select>`;
  }

  private renderScanners(cfg: Config) {
    const t = this.t;
    const covered = new Set(Object.values(cfg.scanner_rooms));
    const bare = this.rooms.filter((r) => !covered.has(r.id));
    return html`<p>${t.scanners_intro}</p>
      <ul class="list">
        ${cfg.scanners.map(
          (s) => html`<li>
            <span><b>${s.name}</b><small>${s.kind === "shelly" ? "Shelly" : s.kind === "esphome" ? "ESPHome" : "Bluetooth"}</small></span>
            ${this.roomSelect(cfg.scanner_rooms[s.source] ?? null, (room) => {
              const next = { ...cfg.scanner_rooms };
              if (room) next[s.source] = room;
              else delete next[s.source];
              void this.save({ scanner_rooms: next });
            })}
            ${cfg.scanner_hints?.[s.source] && cfg.scanner_hints[s.source] !== cfg.scanner_rooms[s.source]
              ? html`<button class="ghost" @click=${() => void this.save({ scanner_rooms: { ...cfg.scanner_rooms, [s.source]: cfg.scanner_hints[s.source] } })}>
                  ${this.tr(t.hint_room, { room: this.rooms.find((r) => r.id === cfg.scanner_hints[s.source])?.name ?? "" })}
                </button>`
              : nothing}
          </li>`,
        )}
      </ul>
      ${bare.length ? html`<p class="hint">${t.coverage} ${bare.map((r) => r.name).join(", ")}</p>` : nothing}
      <p class="end"><button class="primary" @click=${() => (this._step = "devices")}>${t.next} →</button></p>`;
  }

  private personSelect(value: string | null, onPick: (p: string | null) => void) {
    const persons = Object.keys(this.hass.states).filter((id) => id.startsWith("person."));
    return html`<select @change=${(e: Event) => onPick((e.target as HTMLSelectElement).value || null)}>
      <option value="" ?selected=${!value}>${this.t.person}: ${this.t.none}</option>
      ${persons.map((p) => html`<option value=${p} ?selected=${p === value}>${(this.hass.states[p].attributes.friendly_name as string) ?? p}</option>`)}
    </select>`;
  }

  private addDevice(cfg: Config, device: Omit<Device, "id" | "person" | "icon">): void {
    const id = `${device.kind}_${device.key.replace(/[^a-z0-9]/gi, "").slice(-10).toLowerCase()}`;
    if (cfg.devices.some((d) => d.id === id)) return;
    void this.save({ devices: [...cfg.devices, { ...device, id, person: null, icon: null }] });
  }

  private renderDevices(cfg: Config) {
    const t = this.t;
    const has = (key: string) => cfg.devices.some((d) => d.key.toLowerCase() === key.toLowerCase());
    const setDevice = (id: string, patch: Partial<Device>) => void this.save({ devices: cfg.devices.map((d) => (d.id === id ? { ...d, ...patch } : d)) });
    return html`<p>${t.devices_intro}</p>
      ${cfg.devices.length
        ? html`<ul class="list">
            ${cfg.devices.map(
              (d) => html`<li>
                <input .value=${d.name} @change=${(e: Event) => setDevice(d.id, { name: (e.target as HTMLInputElement).value })} />
                ${this.personSelect(d.person, (p) => setDevice(d.id, { person: p }))}
                <button @click=${() => void this.save({ devices: cfg.devices.filter((x) => x.id !== d.id) })}>${t.remove}</button>
              </li>`,
            )}
          </ul>`
        : nothing}
      ${cfg.private_ble.length
        ? html`<p>${t.known_keys}</p>
            <ul class="list">
              ${cfg.private_ble.map(
                (p) => html`<li>
                  <span>${p.title}</span>
                  ${has(p.key) ? html`<small>${t.added}</small>` : html`<button @click=${() => this.addDevice(cfg, { name: p.title, kind: "irk", key: p.key })}>${t.add}</button>`}
                </li>`,
              )}
            </ul>`
        : nothing}
      <h4>${t.near_title}</h4>
      <p class="hint">${t.near_intro}</p>
      <ul class="list">
        ${this._near.length
          ? this._near
              .filter((n) => n.ibeacon || !n.random)
              .slice(0, 8)
              .map(
                (n) => html`<li>
                  <span><b>${n.name ?? (n.ibeacon ? "iBeacon" : n.address)}</b><small>${n.rssi} dBm${n.ibeacon ? " · iBeacon" : ""}</small></span>
                  ${has(n.ibeacon ?? n.address)
                    ? html`<small>${t.added}</small>`
                    : html`<button @click=${() => this.addDevice(cfg, n.ibeacon ? { name: n.name ?? "iBeacon", kind: "ibeacon", key: n.ibeacon } : { name: n.name ?? n.address, kind: "mac", key: n.address })}>${t.add}</button>`}
                </li>`,
              )
          : html`<li><small>${t.near_empty}</small></li>`}
      </ul>
      <p class="end"><button class="primary" ?disabled=${!cfg.devices.length} @click=${() => (this._step = "walk")}>${t.next} →</button></p>`;
  }

  private renderWalk(cfg: Config) {
    const t = this.t;
    const cal = this._live?.calibration ?? null;
    if (!cfg.devices.length) return html`<p>${t.need_device}</p>`;
    const count = (room: string) => Math.min(...cfg.devices.map((d) => cfg.samples[d.id]?.[room] ?? 0));
    const floors = [...new Set(this.rooms.map((r) => r.floor))];
    const q = this._quality;
    return html`<p>${t.walk_intro}</p>
      ${cal
        ? html`<div class="learning">
            ${this.tr(t.learning, { room: this.rooms.find((r) => r.id === cal.room)?.name ?? "", left: cal.left })}
            <div class="bar"><i style="width:${Math.round(((90 - cal.left) / 90) * 100)}%"></i></div>
            <button @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "stop" })}>${t.stop}</button>
          </div>`
        : nothing}
      ${floors.map(
        (f) => html`<h4>${f}</h4>
          <div class="rooms">
            ${this.rooms
              .filter((r) => r.floor === f)
              .map((r) => {
                const n = count(r.id);
                const acc = q ? Math.min(...cfg.devices.map((d) => q[d.id]?.rooms[r.id] ?? 1)) : null;
                return html`<button
                  class=${cal?.room === r.id ? "on" : n >= 30 ? "done" : ""}
                  ?disabled=${!!cal}
                  @click=${async () => {
                    const res = await this.call<{ calibration: Live["calibration"] }>({ type: "neonplan3d/locate/calibrate", action: "start", room: r.id, seconds: 90 });
                    if (res) this._live = { ...(this._live ?? { running: true, devices: [] }), calibration: res.calibration };
                  }}
                >
                  ${n >= 30 ? "✓ " : ""}${r.name}<small>${this.tr(t.samples, { n })}${acc !== null ? ` · ${Math.round(acc * 100)} %` : ""}</small>
                </button>`;
              })}
          </div>`,
      )}
      <p class="end">
        <button @click=${async () => (this._quality = await this.call({ type: "neonplan3d/locate/quality" }))}>${t.quality}</button>
        ${q
          ? html`<b>${this.tr(t.quality_result, {
              p: cfg.devices.map((d) => `${d.name} ${q[d.id]?.overall != null ? Math.round(q[d.id].overall! * 100) : "–"} %`).join(" · "),
            })}</b>`
          : nothing}
        <button class="primary" @click=${() => (this._step = "live")}>${t.next} →</button>
      </p>
      <p class="end"><button class="ghost" @click=${() => void this.call({ type: "neonplan3d/locate/calibrate", action: "clear" }).then(() => this.load())}>${t.relearn_all}</button></p>`;
  }

  private renderLive(cfg: Config) {
    const t = this.t;
    const live = this._live;
    const name = (id: string | null | undefined) => this.rooms.find((r) => r.id === id)?.name;
    return html`<p>${t.live_intro}</p>
      <label class="row"><input type="checkbox" .checked=${cfg.enabled} @change=${(e: Event) => void this.save({ enabled: (e.target as HTMLInputElement).checked })} /> ${t.enabled}</label>
      <label class="row"><input type="checkbox" .checked=${cfg.admins_only} @change=${(e: Event) => void this.save({ admins_only: (e.target as HTMLInputElement).checked })} /> ${t.admins_only}</label>
      <ul class="list big">
        ${(live?.devices ?? []).map(
          (d) => html`<li>
            <span><b>${d.name}</b></span>
            <span>${d.room ? html`<b class="room">${name(d.room)}</b> <small>${Math.round((d.probability ?? 0) * 100)} %</small>` : html`<small>${t.not_heard}</small>`}</span>
          </li>`,
        )}
      </ul>`;
  }

  static styles = css`
    :host {
      position: fixed;
      inset: 0;
      z-index: 10000;
      display: grid;
      place-items: center;
      background: #02060fcc;
      font: 14px/1.4 system-ui, sans-serif;
      color: #e6f7ff;
    }
    .box {
      width: min(640px, calc(100vw - 16px));
      max-height: calc(100vh - 16px);
      overflow: auto;
      background: #0b1120;
      border: 1px solid #37e0ff66;
      border-radius: 14px;
      padding: 14px;
      box-shadow: 0 10px 40px #000a;
    }
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    header small {
      font-weight: 400;
      color: #ffb86b;
      margin-left: 6px;
    }
    nav {
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      margin: 10px 0;
    }
    button,
    select,
    input {
      font: inherit;
      color: #e6f7ff;
      background: #16233d;
      border: 1px solid #37e0ff44;
      border-radius: 8px;
      padding: 7px 10px;
    }
    button {
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.5;
      cursor: default;
    }
    button.on,
    button.primary {
      background: #37e0ff;
      color: #04121c;
      font-weight: 700;
    }
    button.done {
      border-color: #5dd39e;
    }
    button.ghost {
      background: transparent;
    }
    .x {
      background: transparent;
      border: none;
      font-size: 18px;
    }
    .list {
      list-style: none;
      padding: 0;
      margin: 8px 0;
      display: grid;
      gap: 6px;
    }
    .list li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
      background: #101a2e;
      border-radius: 10px;
      padding: 8px 10px;
    }
    .list li span {
      display: flex;
      flex-direction: column;
    }
    .list.big li {
      font-size: 16px;
    }
    small {
      opacity: 0.75;
      font-size: 12px;
    }
    .rooms {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .rooms button {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      min-width: 120px;
    }
    .learning {
      background: #13233f;
      border: 1px solid #37e0ff;
      border-radius: 10px;
      padding: 10px;
      margin: 8px 0;
      font-weight: 700;
    }
    .bar {
      height: 8px;
      background: #0b1120;
      border-radius: 4px;
      margin: 8px 0;
      overflow: hidden;
    }
    .bar i {
      display: block;
      height: 100%;
      background: #37e0ff;
    }
    .hint {
      opacity: 0.8;
      font-size: 13px;
    }
    .end {
      display: flex;
      gap: 8px;
      align-items: center;
      justify-content: flex-end;
      flex-wrap: wrap;
    }
    .row {
      display: flex;
      gap: 8px;
      align-items: center;
      margin: 6px 0;
    }
    .room {
      color: #37e0ff;
    }
    .err {
      color: #ff8fa3;
      white-space: pre-wrap;
      font-size: 12px;
    }
    h4 {
      margin: 12px 0 4px;
    }
  `;
}

if (!customElements.get("fp3d-locate-setup")) customElements.define("fp3d-locate-setup", LocateSetup);
