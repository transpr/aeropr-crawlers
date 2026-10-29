import { gnewsSource } from "./google-news.js";

// ENAC (Ente Nazionale per l'Aviazione Civile): gnews discovery fallback (newsroom not directly crawlable from runners).
export const enac: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "enac",
  orgName: "ENAC (Ente Nazionale per l'Aviazione Civile)",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:enac.gov.it) when:30d",
});
