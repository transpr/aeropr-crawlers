import { gnewsSource } from "./google-news.js";

// Air Calédonie: gnews discovery fallback (European coverage, full country list).
export const airCaledonie: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-caledonie",
  orgName: "Air Calédonie",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Calédonie") when:30d",
});
