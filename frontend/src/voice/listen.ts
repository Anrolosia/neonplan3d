// Listening: one sentence from the microphone, written down by Home Assistant's Assist (its pipeline stops after
// speech to text, so NeonPlan decides what the sentence means), and handing a sentence to Assist's conversation.

import type { HomeAssistant } from "../types.ts";

export interface Pipeline {
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

/** The Assist pipeline to use: the preferred one when it has speech to text, else the first that has. */
export async function findPipeline(hass: HomeAssistant): Promise<Pipeline | null> {
  const res = await hass.callWS<{ pipelines: Pipeline[]; preferred_pipeline: string | null }>({ type: "assist_pipeline/pipeline/list" });
  const preferred = res.pipelines.find((p) => p.id === res.preferred_pipeline) ?? res.pipelines[0];
  return (preferred?.stt_engine ? preferred : res.pipelines.find((p) => p.stt_engine)) ?? null;
}

export function audioContext(): AudioContext {
  const Ctx = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  return new Ctx();
}

export function openMicrophone(): Promise<MediaStream> {
  return navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true } });
}

/**
 * Stream the microphone to Assist until it has written down one sentence; the sentence ("" when nothing was heard).
 * Rejects with Assist's error.
 */
export async function transcribe(hass: HomeAssistant, ctx: AudioContext, source: MediaStreamAudioSourceNode, pipeline: string): Promise<string> {
  const socket = (hass.connection as unknown as { socket?: WebSocket }).socket;
  if (!socket) throw new Error("no connection");
  if (ctx.state === "suspended") await ctx.resume();
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
  return new Promise<string>((resolve, reject) => {
    let unsub: (() => Promise<void>) | null = null;
    let text = "";
    const limit = setTimeout(() => send(null), LONGEST);
    // the whole run may not hang (no answer from Assist at all)
    const stall = setTimeout(() => finish(new Error("timeout")), LONGEST + 15000);
    const finish = (err?: Error) => {
      if (done) return;
      done = true;
      clearTimeout(limit);
      clearTimeout(stall);
      source.disconnect(proc);
      proc.disconnect();
      void unsub?.();
      if (err) reject(err);
      else resolve(text);
    };
    hass.connection
      .subscribeMessage<RunEvent>(
        (ev) => {
          if (ev.type === "run-start") {
            handler = ev.data?.runner_data?.stt_binary_handler_id ?? null;
            for (const pcm of early.splice(0)) send(pcm);
          } else if (ev.type === "stt-end") {
            text = ev.data?.stt_output?.text?.trim() ?? "";
            finish();
          } else if (ev.type === "error") {
            finish(new Error(`${ev.data?.code ?? ""} ${ev.data?.message ?? ""}`.trim()));
          } else if (ev.type === "run-end") {
            finish();
          }
        },
        { type: "assist_pipeline/run", start_stage: "stt", end_stage: "stt", input: { sample_rate: RATE }, pipeline },
      )
      .then((u) => {
        unsub = u;
        if (done) void u();
      })
      .catch((err) => finish(err instanceof Error ? err : new Error(String(err))));
  });
}

let pipelineOf: { hass: HomeAssistant; id: Promise<string | null> } | null = null;

/** One sentence: the microphone opens, Assist writes it down, the microphone closes again. */
export async function listenOnce(hass: HomeAssistant, onListening?: () => void): Promise<string> {
  if (!pipelineOf || pipelineOf.hass.connection !== hass.connection) pipelineOf = { hass, id: findPipeline(hass).then((p) => p?.id ?? null) };
  const pipeline = await pipelineOf.id.catch(() => null);
  if (!pipeline) {
    pipelineOf = null;
    throw new Error("no_pipeline");
  }
  const stream = await openMicrophone();
  const ctx = audioContext();
  try {
    const source = ctx.createMediaStreamSource(stream);
    onListening?.();
    return await transcribe(hass, ctx, source, pipeline);
  } finally {
    stream.getTracks().forEach((t) => t.stop());
    void ctx.close();
  }
}

/** Hand a sentence to Assist's conversation ("Licht im Flur an"); its spoken answer as text. */
export async function converse(hass: HomeAssistant, text: string): Promise<string> {
  const res = await hass.callWS<{ response?: { speech?: { plain?: { speech?: string } } } }>({ type: "conversation/process", text, language: hass.language });
  return res.response?.speech?.plain?.speech ?? "";
}
