import { gnewsSource } from "./google-news.js";

// Norwegian Air UK: gnews discovery fallback (European coverage, full country list).
export const norwegianUk: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "norwegian-uk",
  orgName: "Norwegian Air UK",
  orgGroup: "Norwegian",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Norwegian Air UK") when:30d",
});
