import { gnewsSource } from "./google-news.js";

// China Eastern Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const chinaEastern: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "china-eastern",
  orgName: "China Eastern Airlines",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("China Eastern") when:30d",
});
