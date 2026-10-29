import { gnewsSource } from "./google-news.js";

// Private Wings: gnews discovery fallback (European coverage, full country list).
export const privateWings: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "private-wings",
  orgName: "Private Wings",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Private Wings") when:30d",
});
