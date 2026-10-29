import { gnewsSource } from "./google-news.js";

// FlyArystan: gnews discovery fallback (European coverage, full country list).
export const flyarystan: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "flyarystan",
  orgName: "FlyArystan",
  orgGroup: "Air Astana",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("FlyArystan") when:30d",
});
