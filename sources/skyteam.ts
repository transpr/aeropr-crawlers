import { gnewsSource } from "./google-news.js";

// SkyTeam: gnews discovery fallback (newsroom not directly crawlable from runners).
export const skyteam: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "skyteam",
  orgName: "SkyTeam",
  orgGroup: null,
  alliance: null,
  type: "alliance",
  sector: "air",
  language: "en",
  query: "(site:skyteam.com) when:30d",
});
