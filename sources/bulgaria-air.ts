import { gnewsSource } from "./google-news.js";

// Bulgaria Air: gnews discovery fallback (European coverage, full country list).
export const bulgariaAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bulgaria-air",
  orgName: "Bulgaria Air",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:air.bg) when:30d",
});
