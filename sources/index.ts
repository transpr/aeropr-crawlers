// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.

import type { Source } from "../src/types.js";
import { airFranceKlm } from "./air-france-klm.js";
import { iberia } from "./iberia.js";
import { iata } from "./iata.js";
import { sncf } from "./sncf.js";

export const SOURCES: Source[] = [
  // --- AIR ---
  airFranceKlm,
  iberia,
  iata,
  // --- RAIL ---
  sncf,
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
