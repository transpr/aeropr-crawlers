import { gnewsSource } from "./google-news.js";

// Olympic Air: gnews discovery fallback (European coverage, full country list).
export const olympicAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "olympic-air",
  orgName: "Olympic Air",
  orgGroup: "Aegean",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Olympic Air") when:30d",
});
