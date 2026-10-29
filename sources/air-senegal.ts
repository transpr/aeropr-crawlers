import { gnewsSource } from "./google-news.js";

// Air Senegal: gnews discovery fallback (world scheduled-carrier completion).
export const airSenegal: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-senegal",
  orgName: "Air Senegal",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Senegal") when:30d",
});
