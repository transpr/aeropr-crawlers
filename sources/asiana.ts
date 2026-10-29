import { gnewsSource } from "./google-news.js";

// Asiana Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const asiana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asiana",
  orgName: "Asiana Airlines",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Asiana Airlines") when:30d",
});
