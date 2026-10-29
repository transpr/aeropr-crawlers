import { gnewsSource } from "./google-news.js";

// Virgin Atlantic: gnews discovery fallback (European coverage, full country list).
export const virginAtlantic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "virgin-atlantic",
  orgName: "Virgin Atlantic",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:virginatlantic.com) when:30d",
});
