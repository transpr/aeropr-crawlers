import { gnewsSource } from "./google-news.js";

// TAROM: gnews discovery fallback (European coverage, full country list).
export const tarom: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tarom",
  orgName: "TAROM",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TAROM") when:30d",
});
