import { gnewsSource } from "./google-news.js";

// Bluebird Nordic: gnews discovery fallback (European coverage, full country list).
export const bluebirdNordic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "bluebird-nordic",
  orgName: "Bluebird Nordic",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Bluebird Nordic") when:30d",
});
