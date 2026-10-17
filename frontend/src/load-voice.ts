// Voice (the microphone probe for now): its bundle loads only when it is asked for.

import type * as VoiceBundle from "./voice/entry.ts";

/** Content hash of the voice bundle, set by the build (see build.mjs). */
declare const __FP3D_VOICE_HASH__: string;

let loading: Promise<typeof VoiceBundle> | undefined;

export function loadVoice(): Promise<typeof VoiceBundle> {
  const url = new URL(`./neonplan3d-voice.js?v=${__FP3D_VOICE_HASH__}`, new URL(import.meta.url)).href;
  loading ??= (import(/* @vite-ignore */ url) as Promise<typeof VoiceBundle>).catch((err) => {
    loading = undefined;
    throw err;
  });
  return loading;
}

/** Whether the microphone probe was asked for in the address ("?fp3d_mic=1"). */
export function micProbeAsked(): boolean {
  try {
    return new URLSearchParams(location.search).get("fp3d_mic") === "1";
  } catch {
    return false;
  }
}
