import { gnewsSource } from "./google-news.js";

// EasyFly (Colombia): gnews discovery fallback (world scheduled-carrier completion).
export const easyfly: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "easyfly",
  orgName: "EasyFly (Colombia)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EasyFly" Colombia) when:30d",
});
