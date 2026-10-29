import { gnewsSource } from "./google-news.js";

// ASKY Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const asky: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asky",
  orgName: "ASKY Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ASKY Airlines") when:30d",
});
