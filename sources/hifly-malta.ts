import { gnewsSource } from "./google-news.js";

// Hi Fly Malta: gnews discovery fallback (European coverage, full country list).
export const hiflyMalta: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hifly-malta",
  orgName: "Hi Fly Malta",
  orgGroup: "Hi Fly",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hi Fly Malta") when:30d",
});
