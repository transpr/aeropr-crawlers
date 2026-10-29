import { gnewsSource } from "./google-news.js";

// Air Astana: gnews discovery fallback (European coverage, full country list).
export const airAstana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-astana",
  orgName: "Air Astana",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Astana") when:30d",
});
