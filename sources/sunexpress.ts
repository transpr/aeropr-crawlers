import { gnewsSource } from "./google-news.js";

// SunExpress: gnews discovery fallback (European coverage, full country list).
export const sunexpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sunexpress",
  orgName: "SunExpress",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SunExpress") when:30d",
});
