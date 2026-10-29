// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.
//
// Direct crawling is preferred (scrape > RSS > media list). Google News RSS (gnewsSource)
// is the fallback for orgs whose newsrooms block datacenter IPs (AF-KLM, Iberia, SNCF,
// Emirates...) and for the mass-rollout long tail.

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
import { fraport } from "./fraport.js";
import { faa } from "./faa.js";
import { american } from "./american.js";
import { airCanada } from "./air-canada.js";
import { southwest } from "./southwest.js";
import { westjet } from "./westjet.js";
import { mtu } from "./mtu.js";
import { shellAviation } from "./shell-aviation.js";
import { zurich } from "./zurich.js";
import { schiphol } from "./schiphol.js";
import { lhTechnik } from "./lh-technik.js";
import { airfranceKlm } from "./airfrance-klm.js";
import { iberia } from "./iberia.js";
import { emirates } from "./emirates.js";
import { ntsb } from "./ntsb.js";
import { heathrow } from "./heathrow.js";
import { adp } from "./adp.js";
import { vinciAirports } from "./vinci-airports.js";
import { munichAirport } from "./munich-airport.js";
import { jetblue } from "./jetblue.js";
import { prattWhitney } from "./pratt-whitney.js";
import { rollsRoyce } from "./rolls-royce.js";
import { safran } from "./safran.js";
import { totalenergies } from "./totalenergies.js";
import { dassault } from "./dassault.js";
import { atr } from "./atr.js";
import { collins } from "./collins.js";
import { dhl } from "./dhl.js";
import { neste } from "./neste.js";
import { skynrg } from "./skynrg.js";
import { allegiant } from "./allegiant.js";
import { frontier } from "./frontier.js";
import { spirit } from "./spirit.js";
import { porter } from "./porter.js";
import { airTransat } from "./air-transat.js";
import { aeromexico } from "./aeromexico.js";
import { volaris } from "./volaris.js";
import { latam } from "./latam.js";
import { avianca } from "./avianca.js";
import { gol } from "./gol.js";
import { azul } from "./azul.js";
import { turkish } from "./turkish.js";
import { aegean } from "./aegean.js";
import { ita } from "./ita.js";
import { airEuropa } from "./air-europa.js";
import { volotea } from "./volotea.js";
import { norwegian } from "./norwegian.js";
import { finnair } from "./finnair.js";
import { icelandair } from "./icelandair.js";
import { lot } from "./lot.js";
import { jet2 } from "./jet2.js";
import { condor } from "./condor.js";
import { croatia } from "./croatia.js";
import { airSerbia } from "./air-serbia.js";
import { swiss } from "./swiss.js";
import { austrian } from "./austrian.js";
import { brussels } from "./brussels.js";
import { eurowings } from "./eurowings.js";
import { britishAirways } from "./british-airways.js";
import { vueling } from "./vueling.js";
import { aerLingus } from "./aer-lingus.js";
import { easyjet } from "./easyjet.js";
import { wizz } from "./wizz.js";
import { tap } from "./tap.js";
import { sas } from "./sas.js";
import { transavia } from "./transavia.js";
import { airCorsica } from "./air-corsica.js";
import { airAustral } from "./air-austral.js";
import { frenchBee } from "./french-bee.js";
import { airCaraibes } from "./air-caraibes.js";
import { aircalin } from "./aircalin.js";
import { corsair } from "./corsair.js";
import { etihad } from "./etihad.js";
import { qatar } from "./qatar.js";
import { flydubai } from "./flydubai.js";
import { saudia } from "./saudia.js";
import { riyadhAir } from "./riyadh-air.js";
import { airArabia } from "./air-arabia.js";
import { gulfAir } from "./gulf-air.js";
import { elAl } from "./el-al.js";
import { singapore } from "./singapore.js";
import { cathay } from "./cathay.js";
import { jal } from "./jal.js";
import { ana } from "./ana.js";
import { korean } from "./korean.js";
import { qantas } from "./qantas.js";
import { jetstar } from "./jetstar.js";
import { airNz } from "./air-nz.js";
import { airIndia } from "./air-india.js";
import { indigo } from "./indigo.js";
import { thai } from "./thai.js";
import { malaysia } from "./malaysia.js";
import { airasia } from "./airasia.js";
import { garuda } from "./garuda.js";
import { ethiopian } from "./ethiopian.js";
import { aena } from "./aena.js";
import { aviAlliance } from "./avi-alliance.js";
import { hamburgAirport } from "./hamburg-airport.js";
import { dusseldorfAirport } from "./dusseldorf-airport.js";
import { adrRome } from "./adr-rome.js";
import { igaIstanbul } from "./iga-istanbul.js";
import { dubaiAirports } from "./dubai-airports.js";
import { changi } from "./changi.js";
import { hkaa } from "./hkaa.js";
import { dot } from "./dot.js";
import { tsbCanada } from "./tsb-canada.js";
import { bea } from "./bea.js";
import { dgac } from "./dgac.js";
import { aesa } from "./aesa.js";
import { dfs } from "./dfs.js";
import { lba } from "./lba.js";
import { enac } from "./enac.js";
import { ansv } from "./ansv.js";
import { ukCaa } from "./uk-caa.js";
import { aaib } from "./aaib.js";
import { icao } from "./icao.js";
import { embraer } from "./embraer.js";
import { gulfstream } from "./gulfstream.js";
import { bombardier } from "./bombardier.js";
import { leonardo } from "./leonardo.js";
import { thales } from "./thales.js";
import { spiritAero } from "./spirit-aero.js";
import { gknAerospace } from "./gkn-aerospace.js";
import { cfm } from "./cfm.js";
import { afiKlmEm } from "./afi-klm-em.js";
import { stEngineering } from "./st-engineering.js";
import { haeco } from "./haeco.js";
import { aar } from "./aar.js";
import { standardAero } from "./standard-aero.js";
import { deltaTechops } from "./delta-techops.js";
import { airBp } from "./air-bp.js";
import { lanzajet } from "./lanzajet.js";
import { eni } from "./eni.js";
import { repsol } from "./repsol.js";
import { omv } from "./omv.js";
import { preem } from "./preem.js";
import { starAlliance } from "./star-alliance.js";
import { oneworld } from "./oneworld.js";
import { skyteam } from "./skyteam.js";
import { hop } from "./hop.js";
import { airTahitiNui } from "./air-tahiti-nui.js";
import { airTahiti } from "./air-tahiti.js";
import { amelia } from "./amelia.js";
import { aslFrance } from "./asl-france.js";
import { tuiFly } from "./tui-fly.js";
import { aeroflot } from "./aeroflot.js";
import { sncf } from "./sncf.js";

export const SOURCES: Source[] = [
  // --- AIR (direct newsroom scraping) ---

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
  fraport,
  faa,
  american,
  airCanada,
  southwest,
  westjet,
  mtu,
  shellAviation,
  zurich,
  schiphol,
  lhTechnik,
  airfranceKlm,
  iberia,
  emirates,
  ntsb,
  heathrow,
  adp,
  vinciAirports,
  munichAirport,
  jetblue,
  prattWhitney,
  rollsRoyce,
  safran,
  totalenergies,
  dassault,
  atr,
  collins,
  dhl,
  neste,
  skynrg,
  allegiant,
  frontier,
  spirit,
  porter,
  airTransat,
  aeromexico,
  volaris,
  latam,
  avianca,
  gol,
  azul,
  turkish,
  aegean,
  ita,
  airEuropa,
  volotea,
  norwegian,
  finnair,
  icelandair,
  lot,
  jet2,
  condor,
  croatia,
  airSerbia,
  swiss,
  austrian,
  brussels,
  eurowings,
  britishAirways,
  vueling,
  aerLingus,
  easyjet,
  wizz,
  tap,
  sas,
  transavia,
  airCorsica,
  airAustral,
  frenchBee,
  airCaraibes,
  aircalin,
  corsair,
  etihad,
  qatar,
  flydubai,
  saudia,
  riyadhAir,
  airArabia,
  gulfAir,
  elAl,
  singapore,
  cathay,
  jal,
  ana,
  korean,
  qantas,
  jetstar,
  airNz,
  airIndia,
  indigo,
  thai,
  malaysia,
  airasia,
  garuda,
  ethiopian,
  aena,
  aviAlliance,
  hamburgAirport,
  dusseldorfAirport,
  adrRome,
  igaIstanbul,
  dubaiAirports,
  changi,
  hkaa,
  dot,
  tsbCanada,
  bea,
  dgac,
  aesa,
  dfs,
  lba,
  enac,
  ansv,
  ukCaa,
  aaib,
  icao,
  embraer,
  gulfstream,
  bombardier,
  leonardo,
  thales,
  spiritAero,
  gknAerospace,
  cfm,
  afiKlmEm,
  stEngineering,
  haeco,
  aar,
  standardAero,
  deltaTechops,
  airBp,
  lanzajet,
  eni,
  repsol,
  omv,
  preem,
  starAlliance,
  oneworld,
  skyteam,
  hop,
  airTahitiNui,
  airTahiti,
  amelia,
  aslFrance,
  tuiFly,
  aeroflot,
  sncf,
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
