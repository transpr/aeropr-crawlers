import { gnewsSource } from "./google-news.js";

// Scoot: gnews discovery fallback (world scheduled-carrier completion).
export const scoot: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "scoot",
  orgName: "Scoot",
  orgGroup: "Singapore Airlines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Scoot" airline) when:30d",
});
