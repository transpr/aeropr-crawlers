import { gnewsSource } from "./google-news.js";

// Hong Kong Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const hongKongAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hong-kong-airlines",
  orgName: "Hong Kong Airlines",
  orgGroup: "HNA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hong Kong Airlines") when:30d",
});
