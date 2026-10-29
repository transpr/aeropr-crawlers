import { gnewsSource } from "./google-news.js";

// ASL Airlines Belgium: gnews discovery fallback (European coverage, full country list).
export const aslBelgium: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asl-belgium",
  orgName: "ASL Airlines Belgium",
  orgGroup: "ASL Aviation Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("ASL Airlines Belgium") when:30d",
});
