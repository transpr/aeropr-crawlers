import { gnewsSource } from "./google-news.js";

// Bamboo Airways: gnews discovery fallback (world scheduled-carrier completion).
export const bambooAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bamboo-airways",
  orgName: "Bamboo Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Bamboo Airways") when:30d",
});
