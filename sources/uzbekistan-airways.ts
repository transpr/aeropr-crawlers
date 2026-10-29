import { gnewsSource } from "./google-news.js";

// Uzbekistan Airways: gnews discovery fallback (world scheduled-carrier completion).
export const uzbekistanAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "uzbekistan-airways",
  orgName: "Uzbekistan Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Uzbekistan Airways") when:30d",
});
