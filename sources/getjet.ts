import { gnewsSource } from "./google-news.js";

// GetJet Airlines: gnews discovery fallback (European coverage, full country list).
export const getjet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "getjet",
  orgName: "GetJet Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("GetJet") when:30d",
});
