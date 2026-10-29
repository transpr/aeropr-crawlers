import { gnewsSource } from "./google-news.js";

// EAT Leipzig: gnews discovery fallback (European coverage, full country list).
export const eatLeipzig: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "eat-leipzig",
  orgName: "EAT Leipzig",
  orgGroup: "DHL",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EAT Leipzig") when:30d",
});
