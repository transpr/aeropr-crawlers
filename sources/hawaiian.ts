import { gnewsSource } from "./google-news.js";

// Hawaiian Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const hawaiian: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "hawaiian",
  orgName: "Hawaiian Airlines",
  orgGroup: "Alaska Air Group",
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Hawaiian Airlines") when:30d",
});
