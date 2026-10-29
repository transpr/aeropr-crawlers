import { gnewsSource } from "./google-news.js";

// Xiamen Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const xiamenAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "xiamen-air",
  orgName: "Xiamen Airlines",
  orgGroup: "China Southern",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Xiamen Air") when:30d",
});
