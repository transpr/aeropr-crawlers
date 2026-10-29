import { gnewsSource } from "./google-news.js";

// Widerøe: gnews discovery fallback (European coverage, full country list).
export const wideroe: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wideroe",
  orgName: "Widerøe",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Widerøe") when:30d",
});
