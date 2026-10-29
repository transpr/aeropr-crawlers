import { gnewsSource } from "./google-news.js";

// Loong Air: gnews discovery fallback (world scheduled-carrier completion).
export const loongAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "loong-air",
  orgName: "Loong Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Loong Air") when:30d",
});
