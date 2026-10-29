// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.

import type { Source } from "../src/types.js";
import { airFranceKlm } from "./air-france-klm.js";
import { iberia } from "./iberia.js";
import { iata } from "./iata.js";
import { airbus } from "./airbus.js";
import { boeing } from "./boeing.js";
import { ryanair } from "./ryanair.js";
import { klm } from "./klm.js";
import { sncf } from "./sncf.js";
import { lufthansaGroup } from "./lufthansa-group.js";
import { delta } from "./delta.js";
import { a4e } from "./a4e.js";
import { airbaltic } from "./airbaltic.js";
import { emirates } from "./emirates.js";
import { pegasus } from "./pegasus.js";

export const SOURCES: Source[] = [
  // --- AIR ---
  airFranceKlm,
  iberia,
  iata,
  airbus,
  boeing,
  ryanair,
  klm,
  lufthansaGroup,
  delta,
  a4e,
  airbaltic,
  emirates,
  pegasus,
  // --- RAIL ---
  sncf,
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
