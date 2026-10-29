import { gnewsSource } from "./google-news.js";

// Air Hamburg: gnews discovery fallback (European coverage, full country list).
export const airHamburg: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-hamburg",
  orgName: "Air Hamburg",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Hamburg" aviation) when:30d",
});
