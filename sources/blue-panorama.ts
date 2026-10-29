import { gnewsSource } from "./google-news.js";

// Blue Panorama Airlines: gnews discovery fallback (European coverage, full country list).
export const bluePanorama: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "blue-panorama",
  orgName: "Blue Panorama Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Blue Panorama") when:30d",
});
