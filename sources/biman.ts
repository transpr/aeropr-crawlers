import { gnewsSource } from "./google-news.js";

// Biman Bangladesh Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const biman: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "biman",
  orgName: "Biman Bangladesh Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Biman Bangladesh") when:30d",
});
