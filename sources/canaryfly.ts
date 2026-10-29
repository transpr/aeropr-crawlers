import { gnewsSource } from "./google-news.js";

// CanaryFly: gnews discovery fallback (European coverage, full country list).
export const canaryfly: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "canaryfly",
  orgName: "CanaryFly",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("CanaryFly") when:30d",
});
