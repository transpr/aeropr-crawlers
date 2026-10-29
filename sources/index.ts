// Source registry — one entry per monitored organization.
// To add a source: create sources/<slug>.ts, export the Source object, register it here.
//
// Layers: direct (scrape + RSS, cron */5) vs discovery (Google News RSS, hourly).
// gnewsSource sets layer="discovery": an empty feed is normal (org publishes nothing
// in 30 days), not a failure.

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
import { airAlbania } from "./air-albania.js";
import { albawings } from "./albawings.js";
import { aerologic } from "./aerologic.js";
import { airHamburg } from "./air-hamburg.js";
import { avantiAir } from "./avanti-air.js";
import { dcAviation } from "./dc-aviation.js";
import { eatLeipzig } from "./eat-leipzig.js";
import { fai } from "./fai.js";
import { germanAirways } from "./german-airways.js";
import { lubeckAir } from "./lubeck-air.js";
import { lhCityline } from "./lh-cityline.js";
import { lhCargo } from "./lh-cargo.js";
import { privateWings } from "./private-wings.js";
import { sundair } from "./sundair.js";
import { wdl } from "./wdl.js";
import { armeniaAircompany } from "./armenia-aircompany.js";
import { armeniaAirways } from "./armenia-airways.js";
import { atlantisEuropean } from "./atlantis-european.js";
import { avconJet } from "./avcon-jet.js";
import { easyjetEurope } from "./easyjet-europe.js";
import { globaljetAustria } from "./globaljet-austria.js";
import { mjet } from "./mjet.js";
import { peoplesViennaline } from "./peoples-viennaline.js";
import { vistajet } from "./vistajet.js";
import { zimex } from "./zimex.js";
import { azal } from "./azal.js";
import { silkWayWest } from "./silk-way-west.js";
import { airBelgium } from "./air-belgium.js";
import { aslBelgium } from "./asl-belgium.js";
import { challengeBe } from "./challenge-be.js";
import { tuiBe } from "./tui-be.js";
import { belavia } from "./belavia.js";
import { bhAir } from "./bh-air.js";
import { bulAir } from "./bul-air.js";
import { bulgariaAir } from "./bulgaria-air.js";
import { bgCharter } from "./bg-charter.js";
import { cargoAirBg } from "./cargo-air-bg.js";
import { electraAirways } from "./electra-airways.js";
import { fly2sky } from "./fly2sky.js";
import { gpAviation } from "./gp-aviation.js";
import { gullivair } from "./gullivair.js";
import { holidayEurope } from "./holiday-europe.js";
import { voyageAir } from "./voyage-air.js";
import { alkAirlines } from "./alk-airlines.js";
import { caboVerde } from "./cabo-verde.js";
import { ticv } from "./ticv.js";
import { cyprusAirways } from "./cyprus-airways.js";
import { tusAirways } from "./tus-airways.js";
import { tradeAir } from "./trade-air.js";
import { airGreenland } from "./air-greenland.js";
import { atlanticAirways } from "./atlantic-airways.js";
import { danishAirTransport } from "./danish-air-transport.js";
import { starAir } from "./star-air.js";
import { sunclass } from "./sunclass.js";
import { airNostrum } from "./air-nostrum.js";
import { iberiaExpress } from "./iberia-express.js";
import { albastar } from "./albastar.js";
import { binter } from "./binter.js";
import { canaryfly } from "./canaryfly.js";
import { evelop } from "./evelop.js";
import { gowair } from "./gowair.js";
import { plusUltra } from "./plus-ultra.js";
import { privilegeStyle } from "./privilege-style.js";
import { swiftair } from "./swiftair.js";
import { wamos } from "./wamos.js";
import { airHorizont } from "./air-horizont.js";
import { smartlynxEe } from "./smartlynx-ee.js";
import { nyxair } from "./nyxair.js";
import { xfly } from "./xfly.js";
import { norra } from "./norra.js";
import { airAntilles } from "./air-antilles.js";
import { airCaledonie } from "./air-caledonie.js";
import { chalair } from "./chalair.js";
import { ewaAir } from "./ewa-air.js";
import { laCompagnie } from "./la-compagnie.js";
import { twinJet } from "./twin-jet.js";
import { valljet } from "./valljet.js";
import { georgianAirways } from "./georgian-airways.js";
import { geoSky } from "./geo-sky.js";
import { olympicAir } from "./olympic-air.js";
import { skyExpress } from "./sky-express.js";
import { ellinair } from "./ellinair.js";
import { bluebirdGr } from "./bluebird-gr.js";
import { lumiwings } from "./lumiwings.js";
import { aslHungary } from "./asl-hungary.js";
import { smartwingsHu } from "./smartwings-hu.js";
import { cityjet } from "./cityjet.js";
import { aslIreland } from "./asl-ireland.js";
import { hibernian } from "./hibernian.js";
import { ryanairUk } from "./ryanair-uk.js";
import { norwegianIntl } from "./norwegian-intl.js";
import { airAtlanta } from "./air-atlanta.js";
import { bluebirdNordic } from "./bluebird-nordic.js";
import { airIceland } from "./air-iceland.js";
import { arkia } from "./arkia.js";
import { israir } from "./israir.js";
import { calCargo } from "./cal-cargo.js";
import { sunDOr } from "./sun-d-or.js";
import { airDolomiti } from "./air-dolomiti.js";
import { bluePanorama } from "./blue-panorama.js";
import { cargoluxItalia } from "./cargolux-italia.js";
import { neos } from "./neos.js";
import { posteAirCargo } from "./poste-air-cargo.js";
import { egoAirways } from "./ego-airways.js";
import { airAstana } from "./air-astana.js";
import { flyarystan } from "./flyarystan.js";
import { qazaqAir } from "./qazaq-air.js";
import { scatKz } from "./scat-kz.js";
import { smartlynx } from "./smartlynx.js";
import { avionExpress } from "./avion-express.js";
import { getjet } from "./getjet.js";
import { klasjet } from "./klasjet.js";
import { luxair } from "./luxair.js";
import { kmMalta } from "./km-malta.js";
import { maltaAir } from "./malta-air.js";
import { laudaEurope } from "./lauda-europe.js";
import { hifly } from "./hifly.js";
import { hiflyMalta } from "./hifly-malta.js";
import { corendonEurope } from "./corendon-europe.js";
import { freebirdEurope } from "./freebird-europe.js";
import { malethAero } from "./maleth-aero.js";
import { medavia } from "./medavia.js";
import { maltaMedair } from "./malta-medair.js";
import { avionExpressMalta } from "./avion-express-malta.js";
import { airMoldova } from "./air-moldova.js";
import { flyOne } from "./fly-one.js";
import { hisky } from "./hisky.js";
import { airMontenegro } from "./air-montenegro.js";
import { martinair } from "./martinair.js";
import { klmCityhopper } from "./klm-cityhopper.js";
import { corendonDutch } from "./corendon-dutch.js";
import { tuiNl } from "./tui-nl.js";
import { norseAtlantic } from "./norse-atlantic.js";
import { wideroe } from "./wideroe.js";
import { enterAir } from "./enter-air.js";
import { buzz } from "./buzz.js";
import { azoresAirlines } from "./azores-airlines.js";
import { sata } from "./sata.js";
import { euroAtlantic } from "./euro-atlantic.js";
import { orbest } from "./orbest.js";
import { pga } from "./pga.js";
import { csa } from "./csa.js";
import { smartwings } from "./smartwings.js";
import { tarom } from "./tarom.js";
import { animawings } from "./animawings.js";
import { s7 } from "./s7.js";
import { uralAirlines } from "./ural-airlines.js";
import { utair } from "./utair.js";
import { rossiya } from "./rossiya.js";
import { pobeda } from "./pobeda.js";
import { aurora } from "./aurora.js";
import { nordwind } from "./nordwind.js";
import { redWings } from "./red-wings.js";
import { azurAirRu } from "./azur-air-ru.js";
import { nordstar } from "./nordstar.js";
import { yakutia } from "./yakutia.js";
import { yamal } from "./yamal.js";
import { iraero } from "./iraero.js";
import { azimuth } from "./azimuth.js";
import { gazpromavia } from "./gazpromavia.js";
import { novair } from "./novair.js";
import { amapola } from "./amapola.js";
import { tuiNordic } from "./tui-nordic.js";
import { edelweiss } from "./edelweiss.js";
import { helvetic } from "./helvetic.js";
import { easyjetSwitzerland } from "./easyjet-switzerland.js";
import { sunexpress } from "./sunexpress.js";
import { anadolujet } from "./anadolujet.js";
import { corendon } from "./corendon.js";
import { freebird } from "./freebird.js";
import { onurAir } from "./onur-air.js";
import { tailwind } from "./tailwind.js";
import { mngAirlines } from "./mng-airlines.js";
import { ukraineInternational } from "./ukraine-international.js";
import { skyup } from "./skyup.js";
import { windrose } from "./windrose.js";
import { virginAtlantic } from "./virgin-atlantic.js";
import { loganair } from "./loganair.js";
import { easternAirways } from "./eastern-airways.js";
import { titanAirways } from "./titan-airways.js";
import { aurigny } from "./aurigny.js";
import { blueIslands } from "./blue-islands.js";
import { airtanker } from "./airtanker.js";
import { tuiUk } from "./tui-uk.js";
import { wizzUk } from "./wizz-uk.js";
import { dhlAirUk } from "./dhl-air-uk.js";
import { baCityflyer } from "./ba-cityflyer.js";
import { norwegianUk } from "./norwegian-uk.js";

export const SOURCES: Source[] = [
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
  airAlbania,
  albawings,
  aerologic,
  airHamburg,
  avantiAir,
  dcAviation,
  eatLeipzig,
  fai,
  germanAirways,
  lubeckAir,
  lhCityline,
  lhCargo,
  privateWings,
  sundair,
  wdl,
  armeniaAircompany,
  armeniaAirways,
  atlantisEuropean,
  avconJet,
  easyjetEurope,
  globaljetAustria,
  mjet,
  peoplesViennaline,
  vistajet,
  zimex,
  azal,
  silkWayWest,
  airBelgium,
  aslBelgium,
  challengeBe,
  tuiBe,
  belavia,
  bhAir,
  bulAir,
  bulgariaAir,
  bgCharter,
  cargoAirBg,
  electraAirways,
  fly2sky,
  gpAviation,
  gullivair,
  holidayEurope,
  voyageAir,
  alkAirlines,
  caboVerde,
  ticv,
  cyprusAirways,
  tusAirways,
  tradeAir,
  airGreenland,
  atlanticAirways,
  danishAirTransport,
  starAir,
  sunclass,
  airNostrum,
  iberiaExpress,
  albastar,
  binter,
  canaryfly,
  evelop,
  gowair,
  plusUltra,
  privilegeStyle,
  swiftair,
  wamos,
  airHorizont,
  smartlynxEe,
  nyxair,
  xfly,
  norra,
  airAntilles,
  airCaledonie,
  chalair,
  ewaAir,
  laCompagnie,
  twinJet,
  valljet,
  georgianAirways,
  geoSky,
  olympicAir,
  skyExpress,
  ellinair,
  bluebirdGr,
  lumiwings,
  aslHungary,
  smartwingsHu,
  cityjet,
  aslIreland,
  hibernian,
  ryanairUk,
  norwegianIntl,
  airAtlanta,
  bluebirdNordic,
  airIceland,
  arkia,
  israir,
  calCargo,
  sunDOr,
  airDolomiti,
  bluePanorama,
  cargoluxItalia,
  neos,
  posteAirCargo,
  egoAirways,
  airAstana,
  flyarystan,
  qazaqAir,
  scatKz,
  smartlynx,
  avionExpress,
  getjet,
  klasjet,
  luxair,
  kmMalta,
  maltaAir,
  laudaEurope,
  hifly,
  hiflyMalta,
  corendonEurope,
  freebirdEurope,
  malethAero,
  medavia,
  maltaMedair,
  avionExpressMalta,
  airMoldova,
  flyOne,
  hisky,
  airMontenegro,
  martinair,
  klmCityhopper,
  corendonDutch,
  tuiNl,
  norseAtlantic,
  wideroe,
  enterAir,
  buzz,
  azoresAirlines,
  sata,
  euroAtlantic,
  orbest,
  pga,
  csa,
  smartwings,
  tarom,
  animawings,
  s7,
  uralAirlines,
  utair,
  rossiya,
  pobeda,
  aurora,
  nordwind,
  redWings,
  azurAirRu,
  nordstar,
  yakutia,
  yamal,
  iraero,
  azimuth,
  gazpromavia,
  novair,
  amapola,
  tuiNordic,
  edelweiss,
  helvetic,
  easyjetSwitzerland,
  sunexpress,
  anadolujet,
  corendon,
  freebird,
  onurAir,
  tailwind,
  mngAirlines,
  ukraineInternational,
  skyup,
  windrose,
  virginAtlantic,
  loganair,
  easternAirways,
  titanAirways,
  aurigny,
  blueIslands,
  airtanker,
  tuiUk,
  wizzUk,
  dhlAirUk,
  baCityflyer,
  norwegianUk,
];

export function sourcesFor(sector?: string): Source[] {
  return sector ? SOURCES.filter((s) => s.sector === sector) : SOURCES;
}
