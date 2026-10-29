import { gnewsSource } from "./google-news.js";

// Air Atlanta Icelandic: gnews discovery fallback (European coverage, full country list).
export const airAtlanta: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-atlanta",
  orgName: "Air Atlanta Icelandic",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Atlanta Icelandic") when:30d",
});
