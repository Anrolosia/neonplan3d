"""What Home Assistant's Bluetooth scanners heard since the last look (ESPHome proxies, Shelly Gen2+, USB adapters).

The usual Bluetooth callbacks only report changed advertisements and only from the strongest scanner, so like
other locating integrations we read every scanner's latest advertisements once a second and keep the ones that are
new (by the scanner's own timestamp).
"""

from __future__ import annotations

from dataclasses import dataclass
import time
from typing import Any

from homeassistant.core import HomeAssistant
from homeassistant.helpers import device_registry as dr


@dataclass(slots=True)
class Reading:
    source: str  # scanner
    address: str
    rssi: int
    t: float  # wall clock seconds
    adv: Any  # bleak AdvertisementData


def _stamps(scanner: Any) -> dict[str, float]:
    stamps = getattr(scanner, "discovered_device_timestamps", None)
    if stamps is None:
        stamps = getattr(scanner, "_discovered_device_timestamps", None)
    return stamps or {}


class ScanReader:
    """Remembers what was read, so every advertisement is handed on once."""

    def __init__(self) -> None:
        self._seen: dict[tuple[str, str], float] = {}

    def read(self, hass: HomeAssistant) -> list[Reading]:
        from homeassistant.components import bluetooth

        out: list[Reading] = []
        wall = time.time()
        mono = time.monotonic()
        for scanner in bluetooth.async_current_scanners(hass):
            stamps = _stamps(scanner)
            source = scanner.source
            for address, (_device, adv) in scanner.discovered_devices_and_advertisement_data.items():
                seen = stamps.get(address)
                if seen is None or adv.rssi is None or adv.rssi <= -127:
                    continue
                key = (source, address)
                if seen <= self._seen.get(key, 0.0):
                    continue
                self._seen[key] = seen
                out.append(Reading(source, address, adv.rssi, wall - (mono - seen), adv))
        if len(self._seen) > 20000:
            # addresses rotate (phones): forget what was not heard for ten minutes
            cutoff = mono - 600
            self._seen = {k: v for k, v in self._seen.items() if v > cutoff}
        return out


def scanner_list(hass: HomeAssistant) -> list[dict[str, Any]]:
    """The scanners Home Assistant knows, with their Home Assistant device (for placing them in the plan)."""
    try:
        from homeassistant.components import bluetooth
    except ImportError:
        return []
    registry = dr.async_get(hass)
    out = []
    for scanner in bluetooth.async_current_scanners(hass):
        mac = scanner.source.lower()
        device = registry.async_get_device(connections={(dr.CONNECTION_NETWORK_MAC, mac)}) or registry.async_get_device(
            connections={(dr.CONNECTION_BLUETOOTH, mac)}
        )
        out.append(
            {
                "source": scanner.source,
                "name": (device.name_by_user or device.name) if device else scanner.name.split(" (")[0],
                "kind": "shelly"
                if "Shelly" in type(scanner).__name__
                else "esphome"
                if "ESPHome" in type(scanner).__name__
                else "other",
                "device_id": device.id if device else None,
                "area_id": device.area_id if device else None,
                "scanning": bool(getattr(scanner, "scanning", True)),
            }
        )
    return out
