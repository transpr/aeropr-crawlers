import { gnewsSource } from "./google-news.js";

// Ellinair: gnews discovery fallback (European coverage, full country list).
export const ellinair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ellinair",
  orgName: "Ellinair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Ellinair") when:30d",
});
