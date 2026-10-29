import { gnewsSource } from "./google-news.js";

// AlbaStar: gnews discovery fallback (European coverage, full country list).
export const albastar: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "albastar",
  orgName: "AlbaStar",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("AlbaStar") when:30d",
});
