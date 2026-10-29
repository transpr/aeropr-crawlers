import { gnewsSource } from "./google-news.js";

// SkyWest Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const skywest: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "skywest",
  orgName: "SkyWest Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SkyWest Airlines") when:30d",
});
