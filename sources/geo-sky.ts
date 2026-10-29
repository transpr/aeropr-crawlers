import { gnewsSource } from "./google-news.js";

// Geo-Sky: gnews discovery fallback (European coverage, full country list).
export const geoSky: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "geo-sky",
  orgName: "Geo-Sky",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Geo-Sky" Georgia) when:30d",
});
