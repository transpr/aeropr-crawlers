import { gnewsSource } from "./google-news.js";

// Air Iceland Connect: gnews discovery fallback (European coverage, full country list).
export const airIceland: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-iceland",
  orgName: "Air Iceland Connect",
  orgGroup: "Icelandair",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Iceland Connect") when:30d",
});
