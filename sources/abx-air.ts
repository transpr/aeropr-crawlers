import { gnewsSource } from "./google-news.js";

// ABX Air: gnews discovery fallback (US carriers per Wikipedia category list).
export const abxAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "abx-air",
  orgName: "ABX Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ABX Air") when:30d",
});
