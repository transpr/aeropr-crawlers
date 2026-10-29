// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.
//
// REMOVED from direct crawling (datacenter-IP blocked): AF-KLM 403, Iberia 403/404,
// SNCF 403, Emirates 404 from GitHub runners. These orgs are now covered by the
// Google News RSS discovery adapter (gnewsSource) below, plus the email media
// lists (cp-@airpressrelease.com).

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
import { airFranceKlm } from "./airfrance-klm.js";
import { iberia } from "./iberia.js";
import { emirates } from "./emirates.js";
import { sncfGnews } from "./sncf.js";

export const SOURCES: Source[] = [
  // --- AIR (direct newsroom crawling) ---
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
  // --- AIR (discovery via Google News RSS → original article) ---
  airFranceKlm,
  iberia,
  emirates,
  // --- RAIL (discovery via Google News RSS → original article) ---
  sncfGnews,
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
