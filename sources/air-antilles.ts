import { gnewsSource } from "./google-news.js";

// Air Antilles: gnews discovery fallback (European coverage, full country list).
export const airAntilles: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-antilles",
  orgName: "Air Antilles",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Antilles") when:30d",
});
