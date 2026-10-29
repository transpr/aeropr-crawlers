import { gnewsSource } from "./google-news.js";

// Trade Air: gnews discovery fallback (European coverage, full country list).
export const tradeAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "trade-air",
  orgName: "Trade Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Trade Air" Croatia) when:30d",
});
