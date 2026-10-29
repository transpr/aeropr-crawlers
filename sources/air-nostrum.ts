import { gnewsSource } from "./google-news.js";

// Air Nostrum: gnews discovery fallback (European coverage, full country list).
export const airNostrum: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-nostrum",
  orgName: "Air Nostrum",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airnostrum.es) when:30d",
});
