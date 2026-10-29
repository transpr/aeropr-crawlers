import { gnewsSource } from "./google-news.js";

// Azerbaijan Airlines: gnews discovery fallback (European coverage, full country list).
export const azal: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "azal",
  orgName: "Azerbaijan Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:azal.az) when:30d",
});
