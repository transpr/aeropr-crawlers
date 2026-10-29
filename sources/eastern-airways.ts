import { gnewsSource } from "./google-news.js";

// Eastern Airways: gnews discovery fallback (European coverage, full country list).
export const easternAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "eastern-airways",
  orgName: "Eastern Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Eastern Airways") when:30d",
});
