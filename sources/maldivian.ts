import { gnewsSource } from "./google-news.js";

// Maldivian (airline): gnews discovery fallback (world scheduled-carrier completion).
export const maldivian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "maldivian",
  orgName: "Maldivian (airline)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Maldivian" airline) when:30d",
});
