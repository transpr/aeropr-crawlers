import { gnewsSource } from "./google-news.js";

// PGA Portugalia Airlines: gnews discovery fallback (European coverage, full country list).
export const pga: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "pga",
  orgName: "PGA Portugalia Airlines",
  orgGroup: "TAP",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("PGA Portugalia") when:30d",
});
