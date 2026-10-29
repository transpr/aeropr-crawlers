import { gnewsSource } from "./google-news.js";

// Wingo (Colombia): gnews discovery fallback (world scheduled-carrier completion).
export const wingo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wingo",
  orgName: "Wingo (Colombia)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Wingo" Copa) when:30d",
});
