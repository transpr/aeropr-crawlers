import { gnewsSource } from "./google-news.js";

// Gazpromavia: gnews discovery fallback (European coverage, full country list).
export const gazpromavia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gazpromavia",
  orgName: "Gazpromavia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Gazpromavia") when:30d",
});
