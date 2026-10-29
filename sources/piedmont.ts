import { gnewsSource } from "./google-news.js";

// Piedmont Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const piedmont: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "piedmont",
  orgName: "Piedmont Airlines",
  orgGroup: "American Airlines Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Piedmont Airlines") when:30d",
});
