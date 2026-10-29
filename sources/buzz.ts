import { gnewsSource } from "./google-news.js";

// Buzz (Ryanair Poland): gnews discovery fallback (European coverage, full country list).
export const buzz: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "buzz",
  orgName: "Buzz (Ryanair Poland)",
  orgGroup: "Ryanair Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Buzz" Ryanair) when:30d",
});
