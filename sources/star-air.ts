import { gnewsSource } from "./google-news.js";

// Star Air (Denmark): gnews discovery fallback (European coverage, full country list).
export const starAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "star-air",
  orgName: "Star Air (Denmark)",
  orgGroup: "Maersk",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Star Air" Maersk) when:30d",
});
