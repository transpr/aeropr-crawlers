import { gnewsSource } from "./google-news.js";

// S7 Airlines: gnews discovery fallback (European coverage, full country list).
export const s7: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "s7",
  orgName: "S7 Airlines",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("S7 Airlines") when:30d",
});
