import { gnewsSource } from "./google-news.js";

// Tianjin Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const tianjinAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tianjin-air",
  orgName: "Tianjin Airlines",
  orgGroup: "HNA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Tianjin Airlines") when:30d",
});
