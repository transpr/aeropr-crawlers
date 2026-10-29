import { gnewsSource } from "./google-news.js";

// Air Dolomiti: gnews discovery fallback (European coverage, full country list).
export const airDolomiti: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-dolomiti",
  orgName: "Air Dolomiti",
  orgGroup: "Lufthansa Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Dolomiti") when:30d",
});
