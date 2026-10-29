import { gnewsSource } from "./google-news.js";

// West Air (China): gnews discovery fallback (world scheduled-carrier completion).
export const westAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "west-air",
  orgName: "West Air (China)",
  orgGroup: "HNA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("West Air" China) when:30d",
});
