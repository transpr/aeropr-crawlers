import { gnewsSource } from "./google-news.js";

// Aurora (airline): gnews discovery fallback (European coverage, full country list).
export const aurora: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aurora",
  orgName: "Aurora (airline)",
  orgGroup: "Aeroflot",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Aurora" Aeroflot) when:30d",
});
