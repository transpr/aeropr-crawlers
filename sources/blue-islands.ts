import { gnewsSource } from "./google-news.js";

// Blue Islands: gnews discovery fallback (European coverage, full country list).
export const blueIslands: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "blue-islands",
  orgName: "Blue Islands",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Blue Islands" airline) when:30d",
});
