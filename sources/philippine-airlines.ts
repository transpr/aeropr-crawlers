import { gnewsSource } from "./google-news.js";

// Philippine Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const philippineAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "philippine-airlines",
  orgName: "Philippine Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Philippine Airlines") when:30d",
});
