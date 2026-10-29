import { gnewsSource } from "./google-news.js";

// UPS Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const upsAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ups-airlines",
  orgName: "UPS Airlines",
  orgGroup: "UPS",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("UPS Airlines" OR "UPS cargo aviation") when:30d",
});
