import { gnewsSource } from "./google-news.js";

// Air Horizont: gnews discovery fallback (European coverage, full country list).
export const airHorizont: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-horizont",
  orgName: "Air Horizont",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Horizont") when:30d",
});
