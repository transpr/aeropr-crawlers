import { gnewsSource } from "./google-news.js";

// SriLankan Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const srilankan: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "srilankan",
  orgName: "SriLankan Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SriLankan Airlines") when:30d",
});
