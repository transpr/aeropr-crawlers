import { gnewsSource } from "./google-news.js";

// Bluebird Airways: gnews discovery fallback (European coverage, full country list).
export const bluebirdGr: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bluebird-gr",
  orgName: "Bluebird Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Bluebird Airways") when:30d",
});
