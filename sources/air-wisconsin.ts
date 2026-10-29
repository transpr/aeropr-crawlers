import { gnewsSource } from "./google-news.js";

// Air Wisconsin: gnews discovery fallback (US carriers per Wikipedia category list).
export const airWisconsin: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-wisconsin",
  orgName: "Air Wisconsin",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Wisconsin") when:30d",
});
