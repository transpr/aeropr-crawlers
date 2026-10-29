import { gnewsSource } from "./google-news.js";

// Air Greenland: gnews discovery fallback (European coverage, full country list).
export const airGreenland: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-greenland",
  orgName: "Air Greenland",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Greenland") when:30d",
});
