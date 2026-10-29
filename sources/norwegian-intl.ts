import { gnewsSource } from "./google-news.js";

// Norwegian Air International: gnews discovery fallback (European coverage, full country list).
export const norwegianIntl: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "norwegian-intl",
  orgName: "Norwegian Air International",
  orgGroup: "Norwegian",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Norwegian Air International") when:30d",
});
