import { gnewsSource } from "./google-news.js";

// SmartLynx Estonia: gnews discovery fallback (European coverage, full country list).
export const smartlynxEe: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "smartlynx-ee",
  orgName: "SmartLynx Estonia",
  orgGroup: "SmartLynx",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("SmartLynx Estonia") when:30d",
});
