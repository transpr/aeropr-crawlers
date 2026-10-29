// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.
//
// REMOVED from crawling (datacenter-IP blocked: AF-KLM 403, Iberia 403/404,
// SNCF 403, Emirates 404 from GitHub runners). These orgs are covered by the
// Google Alerts → Gmail pipeline instead. Source files kept for reference.

import type { Source } from "../src/types.js";
import { iata } from "./iata.js";
import { airbus } from "./airbus.js";
import { boeing } from "./boeing.js";
import { ryanair } from "./ryanair.js";
import { klm } from "./klm.js";
import { lufthansaGroup } from "./lufthansa-group.js";
import { delta } from "./delta.js";
import { a4e } from "./a4e.js";
import { airbaltic } from "./airbaltic.js";
import { pegasus } from "./pegasus.js";
import { alaska } from "./alaska.js";
import { united } from "./united.js";
import { cargolux } from "./cargolux.js";

export const SOURCES: Source[] = [
  // --- AIR ---
  iata,
  airbus,
  boeing,
  ryanair,
  klm,
  lufthansaGroup,
  delta,
  a4e,
  airbaltic,
  pegasus,
  alaska,
  united,
  cargolux,
  // --- AIR (blocked from GitHub runners, covered by Google Alerts) ---
  // airFranceKlm, iberia, emirates, sncf-group
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
