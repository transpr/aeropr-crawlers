import { gnewsSource } from "./google-news.js";

// Holiday Europe: gnews discovery fallback (European coverage, full country list).
export const holidayEurope: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "holiday-europe",
  orgName: "Holiday Europe",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Holiday Europe" airline) when:30d",
});
