import { gnewsSource } from "./google-news.js";

// FAI rent-a-jet: gnews discovery fallback (European coverage, full country list).
export const fai: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "fai",
  orgName: "FAI rent-a-jet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:fai.de) when:30d",
});
