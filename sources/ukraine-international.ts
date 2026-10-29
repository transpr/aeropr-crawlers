import { gnewsSource } from "./google-news.js";

// Ukraine International Airlines: gnews discovery fallback (European coverage, full country list).
export const ukraineInternational: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ukraine-international",
  orgName: "Ukraine International Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Ukraine International Airlines") when:30d",
});
