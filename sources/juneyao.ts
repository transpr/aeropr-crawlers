import { gnewsSource } from "./google-news.js";

// Juneyao Air: gnews discovery fallback (world scheduled-carrier completion).
export const juneyao: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "juneyao",
  orgName: "Juneyao Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Juneyao Air") when:30d",
});
