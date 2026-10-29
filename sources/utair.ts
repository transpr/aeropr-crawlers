import { gnewsSource } from "./google-news.js";

// UTair: gnews discovery fallback (European coverage, full country list).
export const utair: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "utair",
  orgName: "UTair",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("UTair") when:30d",
});
