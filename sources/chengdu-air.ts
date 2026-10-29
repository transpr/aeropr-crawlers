import { gnewsSource } from "./google-news.js";

// Chengdu Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const chengduAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "chengdu-air",
  orgName: "Chengdu Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Chengdu Airlines") when:30d",
});
