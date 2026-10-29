import { gnewsSource } from "./google-news.js";

// Aeroflot: gnews discovery fallback (completes European/French airline coverage).
export const aeroflot: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aeroflot",
  orgName: "Aeroflot",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aeroflot.ru OR site:aeroflot.com) when:30d",
});
