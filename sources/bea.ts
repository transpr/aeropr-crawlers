import { gnewsSource } from "./google-news.js";

// BEA (Bureau d'Enquêtes et d'Analyses): gnews discovery fallback (newsroom not directly crawlable from runners).
export const bea: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bea",
  orgName: "BEA (Bureau d'Enquêtes et d'Analyses)",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:bea.aero OR site:bea-fr.org) when:30d",
});
