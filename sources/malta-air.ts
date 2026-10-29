import { gnewsSource } from "./google-news.js";

// Malta Air: gnews discovery fallback (European coverage, full country list).
export const maltaAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "malta-air",
  orgName: "Malta Air",
  orgGroup: "Ryanair Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Malta Air") when:30d",
});
