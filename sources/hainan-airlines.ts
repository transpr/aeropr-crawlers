import { gnewsSource } from "./google-news.js";

// Hainan Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const hainanAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hainan-airlines",
  orgName: "Hainan Airlines",
  orgGroup: "HNA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hainan Airlines") when:30d",
});
