import { gnewsSource } from "./google-news.js";

// Wizz Air UK: gnews discovery fallback (European coverage, full country list).
export const wizzUk: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "wizz-uk",
  orgName: "Wizz Air UK",
  orgGroup: "Wizz Air",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Wizz Air UK") when:30d",
});
