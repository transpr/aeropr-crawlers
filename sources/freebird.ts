import { gnewsSource } from "./google-news.js";

// Freebird Airlines: gnews discovery fallback (European coverage, full country list).
export const freebird: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "freebird",
  orgName: "Freebird Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Freebird Airlines") when:30d",
});
