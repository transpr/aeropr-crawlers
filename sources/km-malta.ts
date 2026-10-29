import { gnewsSource } from "./google-news.js";

// KM Malta Airlines: gnews discovery fallback (European coverage, full country list).
export const kmMalta: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "km-malta",
  orgName: "KM Malta Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("KM Malta Airlines") when:30d",
});
