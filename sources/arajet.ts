import { gnewsSource } from "./google-news.js";

// Arajet: gnews discovery fallback (world scheduled-carrier completion).
export const arajet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "arajet",
  orgName: "Arajet",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Arajet" airline) when:30d",
});
