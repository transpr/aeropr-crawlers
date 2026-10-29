import { gnewsSource } from "./google-news.js";

// ZIPAIR Tokyo: gnews discovery fallback (world scheduled-carrier completion).
export const zipair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "zipair",
  orgName: "ZIPAIR Tokyo",
  orgGroup: "Japan Airlines",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ZIPAIR") when:30d",
});
