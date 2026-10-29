// Automatic categorization by keyword rules (air + rail).
// Value-add layer: raw press release -> structured, filterable signal.

type Rule = { category: string; patterns: RegExp[] };

const RULES: Rule[] = [
  { category: "greve", patterns: [/\bgr[èe]ve\b/i, /\bstrike\b/i, /\bwalkout\b/i, /\bd[ée]bray\w*/i, /\bstreik\b/i] },
  { category: "resultats", patterns: [/\br[ée]sultats\b/i, /\bresults?\b/i, /\bquarterly\b/i, /\bfull[- ]year\b/i, /\brevenue\b/i, /\bturnstile\b/i] },
  { category: "commande", patterns: [/\border\b/i, /\bcommande\b/i, /\bfirme? (un )?contrat\b/i, /\bfirm order\b/i] },
  { category: "nouvelle-route", patterns: [/\bnew route\b/i, /\bnouvelle liaison\b/i, /\bnew destination\b/i, /\blaunch(es)? .*(service|route|flight)/i, /\bopens? .*(route|service)/i, /\bd[ée]but (de )?(la )?(ligne|liaison)/i] },
  { category: "reseau", patterns: [/\bnetwork\b/i, /\btimetable\b/i, /\bhoraire(s)?\b/i, /\bservice (adjust|change|reinforc)/i] },
  { category: "co2", patterns: [/\bsaf\b/i, /\bsustainable aviation fuel\b/i, /\bco2\b/i, /\bcarbon\b/i, /\bd[ée]carbon/i, /\bnet[- ]zero\b/i, /\bemissions?\b/i] },
  { category: "materiaux-roulants", patterns: [/\brolling stock\b/i, /\btrain(s)? .*(command|order|deliver)/i, /\btram(s|way)?\b/i] },
  { category: "incident", patterns: [/\bincident\b/i, /\baccident\b/i, /\bdiverted\b/i, /\bmayday\b/i] },
  { category: "regulation", patterns: [/\bregulat/i, /\bslots?\b/i, /\b(single )?europ(e|o)an sky\b/i, /\bdirective\b/i, /\bauthorit(y|[ée])s?\b/i, /\bc[ée]nac\b/i] },
  { category: "finance", patterns: [/\bbond\b/i, /\bloan\b/i, /\brefinanc/i, /\bshare buyback\b/i, /\bdividend\b/i, /\bcapital (increase|raise)\b/i] },
  { category: "mro", patterns: [/\bmaintenance\b/i, /\bmro\b/i, /\boverhaul\b/i, /\bheavy check\b/i] },
  { category: "alliance", patterns: [/\bskyteam\b/i, /\boneworld\b/i, /\bstar alliance\b/i, /\balliance\b/i] },
];

export function categorize(text: string): string[] {
  const haystack = text.slice(0, 4000);
  const found = new Set<string>();
  for (const rule of RULES) {
    if (rule.patterns.some((p) => p.test(haystack))) found.add(rule.category);
  }
  return [...found];
}
