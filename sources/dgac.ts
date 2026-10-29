import { gnewsSource } from "./google-news.js";

// DGAC: gnews discovery fallback (newsroom not directly crawlable from runners).
export const dgac: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dgac",
  orgName: "DGAC",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(DGAC aviation) (site:ecologie.gouv.fr OR site:aviation-civile.gouv.fr) when:30d",
});
