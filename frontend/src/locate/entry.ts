// The locating setup bundle: loaded only when an admin opens the setup.

import type { Building } from "../model.ts";
import type { HomeAssistant } from "../types.ts";
import { LocateSetup } from "./setup.ts";

export function openLocateSetup(hass: HomeAssistant, building: Building): void {
  document.querySelector("fp3d-locate-setup")?.remove();
  const el = document.createElement("fp3d-locate-setup") as LocateSetup;
  el.hass = hass;
  el.building = building;
  document.body.append(el);
}
