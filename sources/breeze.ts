import { gnewsSource } from "./google-news.js";

// Breeze Airways: gnews discovery fallback (US carriers per Wikipedia category list).
export const breeze: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "breeze",
  orgName: "Breeze Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Breeze Airways") when:30d",
});
