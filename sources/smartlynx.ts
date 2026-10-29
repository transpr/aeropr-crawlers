import { gnewsSource } from "./google-news.js";

// SmartLynx Airlines: gnews discovery fallback (European coverage, full country list).
export const smartlynx: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "smartlynx",
  orgName: "SmartLynx Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SmartLynx") when:30d",
});
