import { gnewsSource } from "./google-news.js";

// Danish Air Transport: gnews discovery fallback (European coverage, full country list).
export const danishAirTransport: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "danish-air-transport",
  orgName: "Danish Air Transport",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Danish Air Transport") when:30d",
});
