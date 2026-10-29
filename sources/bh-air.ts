import { gnewsSource } from "./google-news.js";

// BH Air: gnews discovery fallback (European coverage, full country list).
export const bhAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bh-air",
  orgName: "BH Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("BH Air" Bulgaria) when:30d",
});
