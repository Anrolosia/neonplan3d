// Microphone probe ("?fp3d_mic=1" in the address): does talking to NeonPlan work on this device? It checks step by step
// what a wall tablet needs – a secure page, the microphone, a level, Home Assistant's Assist with speech to text –
// records one sentence, lets Assist write it down and shows which room NeonPlan would open for it. Nothing is
// switched: the pipeline ends after speech to text.

import { LitElement, css, html, nothing } from "lit";
import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { findPlace } from "./commands.ts";

type Step = { ok: boolean | null; text: string };

interface Pipeline {
  id: string;
  name: string;
  language: string;
  stt_engine: string | null;
}

interface RunEvent {
  type: string;
  data?: { runner_data?: { stt_binary_handler_id?: number }; stt_output?: { text?: string }; code?: string; message?: string };
}

/** Speech goes to Assist as 16-bit mono at 16 kHz. */
const RATE = 16000;
/** The longest sentence recorded (ms); Assist usually ends earlier, at the first pause. */
const LONGEST = 7000;

const TEXT = {
  de: {
    title: "Mikrofon-Probe",
    intro: "Prüft, ob du auf diesem Gerät mit NeonPlan sprechen kannst. Es wird nichts geschaltet.",
    secure_ok: "Sichere Verbindung (https)",
    secure_no: "Keine sichere Verbindung: Über http:// gibt der Browser das Mikrofon nicht frei. Öffne Home Assistant über https (Nabu Casa, eigenes Zertifikat, Reverse Proxy).",
    api_ok: "Der Browser kann ein Mikrofon ansprechen",
    api_no: "Dieser Browser bietet keinen Mikrofonzugriff an (WebView zu alt oder Seite nicht sicher).",
    start: "Mikrofon freigeben",
    mic_ok: "Mikrofon freigegeben",
    mic_denied: "Mikrofon verweigert. Fully Kiosk: Einstellungen → Web Content Settings → Mikrofonzugriff einschalten (Plus-Lizenz) und in Android Fully das Mikrofon erlauben.",
    mic_none: "Kein Mikrofon gefunden.",
    mic_other: "Mikrofon nicht nutzbar",
    level: "Pegel – sprich etwas, der Balken muss sich bewegen",
    pipe_ok: "Assist-Pipeline",
    pipe_no: "Keine Assist-Pipeline mit Spracherkennung gefunden. Einstellungen → Sprachassistenten: eine Spracherkennung wählen (z. B. Home Assistant Cloud, Whisper oder Speech-to-Phrase).",
    talk: "Sprechen (z. B. „Zeig das Wohnzimmer“)",
    listening: "Ich höre zu …",
    heard: "Erkannt",
    nothing: "Nichts erkannt",
    took: "Dauer",
    would: "NeonPlan würde zeigen",
    would_none: "Kein Raum, keine Etage im Satz gefunden",
    house: "das ganze Haus",
    close: "Schließen",
  },
  en: {
    title: "Microphone probe",
    intro: "Checks whether you can talk to NeonPlan on this device. Nothing is switched.",
    secure_ok: "Secure connection (https)",
    secure_no: "No secure connection: over http:// the browser does not give out the microphone. Open Home Assistant over https (Nabu Casa, own certificate, reverse proxy).",
    api_ok: "The browser can use a microphone",
    api_no: "This browser offers no microphone access (WebView too old, or the page is not secure).",
    start: "Allow the microphone",
    mic_ok: "Microphone allowed",
    mic_denied: "Microphone denied. Fully Kiosk: Settings → Web Content Settings → enable microphone access (Plus licence), and allow Fully the microphone in Android.",
    mic_none: "No microphone found.",
    mic_other: "Microphone not usable",
    level: "Level – say something, the bar must move",
    pipe_ok: "Assist pipeline",
    pipe_no: "No Assist pipeline with speech to text found. Settings → Voice assistants: choose a speech-to-text engine (e.g. Home Assistant Cloud, Whisper or Speech-to-Phrase).",
    talk: "Talk (e.g. “Show the living room”)",
    listening: "Listening …",
    heard: "Heard",
    nothing: "Nothing heard",
    took: "Took",
    would: "NeonPlan would show",
    would_none: "No room or floor found in the sentence",
    house: "the whole house",
    close: "Close",
  },
};

/** Float samples at `from` Hz to 16-bit samples at 16 kHz (each output sample the mean of its input stretch). */
export function toPcm16(input: Float32Array, from: number): Int16Array {
  const ratio = from / RATE;
  const n = Math.floor(input.length / ratio);
  const out = new Int16Array(n);
  for (let i = 0; i < n; i++) {
    const a = Math.floor(i * ratio);
    const b = Math.max(a + 1, Math.floor((i + 1) * ratio));
    let sum = 0;
    for (let k = a; k < b && k < input.length; k++) sum += input[k];
    const v = Math.max(-1, Math.min(1, sum / (b - a)));
    out[i] = v < 0 ? v * 0x8000 : v * 0x7fff;
  }
  return out;
}

export class MicProbe extends LitElement {
  static properties = {
    hass: { attribute: false },
    building: { attribute: false },
    _steps: { state: true },
    _level: { state: true },
    _busy: { state: true },
    _result: { state: true },
  };

  declare hass: HomeAssistant | undefined;
  declare building: Building | null;
  private declare _steps: Step[];
  private declare _level: number;
  private declare _busy: boolean;
  private declare _result: Step[];
  private stream: MediaStream | null = null;
  private ctx: AudioContext | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private meterTimer: ReturnType<typeof setInterval> | undefined;
  private pipeline: Pipeline | null = null;

  constructor() {
    super();
    this.building = null;
    this._steps = [];
    this._level = 0;
    this._busy = false;
    this._result = [];
  }

  private get t() {
    return (this.hass?.language ?? navigator.language).toLowerCase().startsWith("de") ? TEXT.de : TEXT.en;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const t = this.t;
    const api = !!navigator.mediaDevices?.getUserMedia;
    this._steps = [
      { ok: window.isSecureContext, text: window.isSecureContext ? t.secure_ok : t.secure_no },
      { ok: api, text: api ? t.api_ok : t.api_no },
    ];
    void this.findPipeline();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    clearInterval(this.meterTimer);
    this.stream?.getTracks().forEach((tr) => tr.stop());
    void this.ctx?.close();
    this.stream = null;
    this.ctx = null;
  }

  private async findPipeline(): Promise<void> {
    const t = this.t;
    try {
      const res = await this.hass!.callWS<{ pipelines: Pipeline[]; preferred_pipeline: string | null }>({ type: "assist_pipeline/pipeline/list" });
      const preferred = res.pipelines.find((p) => p.id === res.preferred_pipeline) ?? res.pipelines[0];
      const withStt = preferred?.stt_engine ? preferred : res.pipelines.find((p) => p.stt_engine);
      this.pipeline = withStt ?? null;
      this.add(withStt ? { ok: true, text: `${t.pipe_ok}: ${withStt.name} (${withStt.language}, ${withStt.stt_engine})` } : { ok: false, text: t.pipe_no });
    } catch (err) {
      this.add({ ok: false, text: `${t.pipe_no} (${String((err as Error)?.message ?? err)})` });
    }
  }

  private add(step: Step): void {
    this._steps = [...this._steps, step];
  }

  private async allow(): Promise<void> {
    const t = this.t;
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
    } catch (err) {
      const name = (err as DOMException)?.name ?? "";
      this.add({ ok: false, text: name === "NotAllowedError" || name === "SecurityError" ? t.mic_denied : name === "NotFoundError" ? t.mic_none : `${t.mic_other}: ${name || String(err)}` });
      return;
    }
    const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    this.ctx = new Ctx();
    this.source = this.ctx.createMediaStreamSource(this.stream);
    const analyser = this.ctx.createAnalyser();
    analyser.fftSize = 512;
    this.source.connect(analyser);
    const buf = new Float32Array(analyser.fftSize);
    this.meterTimer = setInterval(() => {
      analyser.getFloatTimeDomainData(buf);
      let peak = 0;
      for (const v of buf) peak = Math.max(peak, Math.abs(v));
      this._level = Math.min(1, peak * 2.5);
    }, 100);
    this.add({ ok: true, text: `${t.mic_ok} (${this.stream.getAudioTracks()[0]?.label || "?"}, ${this.ctx.sampleRate} Hz)` });
  }

  /** Record one sentence and let Assist write it down (the pipeline stops after speech to text). */
  private async talk(): Promise<void> {
    const hass = this.hass;
    const ctx = this.ctx;
    const source = this.source;
    const socket = (hass?.connection as unknown as { socket?: WebSocket })?.socket;
    if (!hass || !ctx || !source || !this.pipeline || !socket) return;
    const t = this.t;
    this._busy = true;
    this._result = [{ ok: null, text: t.listening }];
    if (ctx.state === "suspended") await ctx.resume();
    const began = performance.now();
    let handler: number | null = null;
    const early: Int16Array[] = [];
    let done = false;
    const send = (pcm: Int16Array | null) => {
      if (handler === null) return;
      const bytes = pcm ? new Uint8Array(pcm.buffer, pcm.byteOffset, pcm.byteLength) : new Uint8Array(0);
      const msg = new Uint8Array(1 + bytes.length);
      msg[0] = handler;
      msg.set(bytes, 1);
      socket.send(msg);
    };
    // ScriptProcessor: old, but every WebView of an old wall tablet has it (AudioWorklet not)
    const proc = ctx.createScriptProcessor(4096, 1, 1);
    proc.onaudioprocess = (e) => {
      if (done) return;
      const pcm = toPcm16(e.inputBuffer.getChannelData(0), ctx.sampleRate);
      if (handler === null) early.push(pcm);
      else send(pcm);
    };
    source.connect(proc);
    proc.connect(ctx.destination);
    let unsub: (() => Promise<void>) | null = null;
    const finish = (step: Step[]) => {
      if (done) return;
      done = true;
      clearTimeout(limit);
      source.disconnect(proc);
      proc.disconnect();
      void unsub?.();
      this._result = step;
      this._busy = false;
    };
    const limit = setTimeout(() => send(null), LONGEST);
    try {
      unsub = await hass.connection.subscribeMessage<RunEvent>(
        (ev) => {
          if (ev.type === "run-start") {
            handler = ev.data?.runner_data?.stt_binary_handler_id ?? null;
            for (const pcm of early.splice(0)) send(pcm);
          } else if (ev.type === "stt-end") {
            const text = ev.data?.stt_output?.text?.trim() ?? "";
            const took = `${t.took}: ${((performance.now() - began) / 1000).toFixed(1)} s`;
            const place = text && this.building ? findPlace(text, this.building) : null;
            const where = place ? (place.kind === "house" ? t.house : place.name) : null;
            finish([
              { ok: !!text, text: text ? `${t.heard}: „${text}“ · ${took}` : `${t.nothing} · ${took}` },
              ...(text ? [{ ok: !!where, text: where ? `${t.would}: ${where}` : t.would_none }] : []),
            ]);
          } else if (ev.type === "error") {
            finish([{ ok: false, text: `Assist: ${ev.data?.code ?? ""} ${ev.data?.message ?? ""}`.trim() }]);
          } else if (ev.type === "run-end") {
            finish(this._result.length && this._result[0].ok !== null ? this._result : [{ ok: false, text: t.nothing }]);
          }
        },
        { type: "assist_pipeline/run", start_stage: "stt", end_stage: "stt", input: { sample_rate: RATE }, pipeline: this.pipeline.id },
      );
    } catch (err) {
      finish([{ ok: false, text: `Assist: ${String((err as Error)?.message ?? err)}` }]);
    }
  }

  private close(): void {
    this.dispatchEvent(new CustomEvent("close", { bubbles: true, composed: true }));
  }

  render() {
    const t = this.t;
    const mark = (s: Step) => html`<li class=${s.ok === null ? "wait" : s.ok ? "ok" : "no"}><span>${s.ok === null ? "…" : s.ok ? "✔" : "✖"}</span> ${s.text}</li>`;
    const ready = this._steps[0]?.ok && this._steps[1]?.ok;
    return html`<div class="box" role="dialog">
      <h3>🎙️ ${t.title}</h3>
      <p>${t.intro}</p>
      <ul>
        ${this._steps.map(mark)}
      </ul>
      ${this.stream
        ? html`<div class="meter" title=${t.level}><i style="width:${Math.round(this._level * 100)}%"></i></div>
            <small>${t.level}</small>`
        : nothing}
      <ul>
        ${this._result.map(mark)}
      </ul>
      <div class="row">
        ${!this.stream ? html`<button ?disabled=${!ready} @click=${() => void this.allow()}>${t.start}</button>` : nothing}
        ${this.stream ? html`<button ?disabled=${this._busy || !this.pipeline} @click=${() => void this.talk()}>${t.talk}</button>` : nothing}
        <button @click=${() => this.close()}>${t.close}</button>
      </div>
    </div>`;
  }

  static styles = css`
    :host {
      position: absolute;
      inset: 0;
      z-index: 30;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(4, 8, 16, 0.6);
    }
    .box {
      width: min(520px, calc(100% - 32px));
      max-height: calc(100% - 32px);
      overflow: auto;
      padding: 16px 18px;
      border-radius: 14px;
      background: rgba(12, 20, 34, 0.96);
      border: 1px solid rgba(0, 229, 255, 0.45);
      color: #e6f7ff;
      font: 14px/1.4 system-ui, sans-serif;
    }
    h3 {
      margin: 0 0 6px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 8px 0;
    }
    li {
      display: flex;
      gap: 8px;
      margin: 4px 0;
    }
    li.ok span {
      color: #3dff9a;
    }
    li.no span {
      color: #ff5a6a;
    }
    .meter {
      height: 10px;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.12);
      overflow: hidden;
    }
    .meter i {
      display: block;
      height: 100%;
      background: #00e5ff;
      transition: width 0.1s;
    }
    small {
      opacity: 0.7;
    }
    .row {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-top: 10px;
    }
    button {
      padding: 8px 12px;
      border-radius: 18px;
      border: 1px solid rgba(0, 229, 255, 0.6);
      background: rgba(0, 229, 255, 0.12);
      color: inherit;
      font: inherit;
      cursor: pointer;
    }
    button:disabled {
      opacity: 0.4;
    }
  `;
}

if (!customElements.get("fp3d-mic-probe")) customElements.define("fp3d-mic-probe", MicProbe);
