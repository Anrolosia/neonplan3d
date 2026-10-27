// Static card (proof of concept): a floor exported with `neonplanExportStatic()`, stacked as pictures – no WebGL,
// so it runs on wall tablets that cannot draw the 3D view smoothly. Config: `url` of the exported JSON file.
// Pins look and act like the 3D view's: lights, switches and fans toggle (asking first when the device is marked so),
// everything else opens its details.

import { css, html, LitElement, nothing } from "lit";
import { unsafeHTML } from "lit/directives/unsafe-html.js";
import { kindOf, TOGGLE_KINDS } from "./devices.ts";
import { translate } from "./i18n.ts";
import { openMoreInfo, toggleEntity } from "./markers.ts";
import type { StaticLayer, StaticManifest, StaticPin } from "./static-export.ts";
import { tokens } from "./styles.ts";
import type { HomeAssistant } from "./types.ts";

const ACTIVE = new Set(["on", "open", "opening", "playing", "cleaning", "unlocked"]);

class NeonplanStaticCard extends LitElement {
  static properties = { hass: { attribute: false }, _manifest: { state: true } };
  declare hass: HomeAssistant;
  private declare _manifest: StaticManifest | null;
  private url = "";

  setConfig(config: { url?: string }): void {
    if (!config.url) throw new Error("url is required");
    if (config.url === this.url) return;
    this.url = config.url;
    this._manifest = null;
    void fetch(config.url)
      .then((r) => r.json())
      .then((m: StaticManifest) => (this._manifest = m));
  }

  getCardSize(): number {
    return 6;
  }

  private shown(l: StaticLayer): boolean {
    const s = this.hass.states[l.entity];
    return !!s && l.states.includes(s.state);
  }

  /** The 3D view's tap on a device pin, without its menus. */
  private tap(p: StaticPin): void {
    const kind = kindOf(p.id);
    if (kind && TOGGLE_KINDS.has(kind)) {
      const name = String(this.hass.states[p.id]?.attributes.friendly_name ?? p.name);
      if (p.confirm && !confirm(translate(this.hass, "confirm_switch", { name }))) return;
      void toggleEntity(this.hass, p.id);
    } else openMoreInfo(this, p.id);
  }

  render() {
    const m = this._manifest;
    if (!m || !this.hass) return nothing;
    // opened doors first, the lights' glow over them
    const layers = [...m.layers.filter((l) => l.blend === "normal"), ...m.layers.filter((l) => l.blend === "lighten")];
    const pct = (v: number) => `${(v * 100).toFixed(3)}%`;
    return html`<ha-card>
      <div class="stage" style="aspect-ratio: ${m.width} / ${m.height}; background-image: ${m.background ?? "none"}">
        <img src=${m.base} alt="" />
        ${layers.map((l) => {
          if (!this.shown(l)) return nothing;
          const brightness = Number(this.hass.states[l.entity].attributes.brightness);
          const opacity = l.blend === "lighten" && brightness > 0 ? Math.max(0.35, brightness / 255) : 1;
          return html`<img
            src=${l.src}
            alt=""
            style="left: ${pct(l.x)}; top: ${pct(l.y)}; width: ${pct(l.w)}; height: ${pct(l.h)}; mix-blend-mode: ${l.blend}; opacity: ${opacity}"
          />`;
        })}
        ${m.pins.map((p) => {
          const s = this.hass.states[p.id];
          const on = !!s && ACTIVE.has(s.state);
          const na = !s || s.state === "unavailable";
          if (p.hidden) return html`<button class="tap" style="left: ${pct(p.x)}; top: ${pct(p.y)}" title=${p.name} @click=${() => this.tap(p)}></button>`;
          return html`<button class="fp3d-dev ${on ? "fp3d-dev-on" : ""} ${na ? "fp3d-dev-na" : ""}" style="left: ${pct(p.x)}; top: ${pct(p.y)}" title=${p.name} @click=${() => this.tap(p)}>
            <span class="fp3d-dev-icon">${unsafeHTML(on && p.iconOn ? p.iconOn : p.icon)}</span>
          </button>`;
        })}
      </div>
    </ha-card>`;
  }

  static styles = [
    tokens,
    css`
      ha-card {
        overflow: hidden;
      }
      .stage {
        position: relative;
        width: 100%;
        isolation: isolate;
      }
      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      .tap {
        position: absolute;
        transform: translate(-50%, -50%);
        width: 44px;
        height: 44px;
        border: 0;
        padding: 0;
        background: none;
        cursor: pointer;
      }
      /* the 3D view's device pins */
      .fp3d-dev {
        position: absolute;
        transform: translate(-50%, -50%);
        display: inline-flex;
        padding: 4px;
        border-radius: 999px;
        border: 1px solid var(--fp3d-line);
        background: var(--fp3d-chrome);
        color: var(--fp3d-muted);
        cursor: pointer;
        touch-action: manipulation;
      }
      .fp3d-dev-icon {
        display: grid;
        place-items: center;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(91, 124, 255, 0.14);
      }
      .fp3d-dev-icon svg {
        width: 18px;
        height: 18px;
      }
      .fp3d-dev-on {
        color: #2a1a00;
        border-color: transparent;
        background: var(--fp3d-warm);
        box-shadow: 0 0 16px var(--fp3d-warm);
      }
      .fp3d-dev-on .fp3d-dev-icon {
        background: rgba(255, 255, 255, 0.28);
      }
      .fp3d-dev-na {
        opacity: 0.45;
      }
    `,
  ];
}

if (!customElements.get("neonplan3d-static-card")) customElements.define("neonplan3d-static-card", NeonplanStaticCard);
