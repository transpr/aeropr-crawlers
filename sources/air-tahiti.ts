import { gnewsSource } from "./google-news.js";

// Air Tahiti: gnews discovery fallback (completes European/French airline coverage).
export const airTahiti: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-tahiti",
  orgName: "Air Tahiti",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airtahiti.com OR site:airtahiti.aero) when:30d",
});
