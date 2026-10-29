import { gnewsSource } from "./google-news.js";

// ASL Airlines Ireland: gnews discovery fallback (European coverage, full country list).
export const aslIreland: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asl-ireland",
  orgName: "ASL Airlines Ireland",
  orgGroup: "ASL Aviation Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ASL Airlines Ireland") when:30d",
});
