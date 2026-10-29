import { gnewsSource } from "./google-news.js";

// Air Belgium: gnews discovery fallback (European coverage, full country list).
export const airBelgium: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-belgium",
  orgName: "Air Belgium",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Belgium" airline) when:30d",
});
