import { gnewsSource } from "./google-news.js";

// Air France-KLM: newsroom blocked from GitHub runners (Cloudflare 403).
// Google News RSS (site: scoped) detects the CP; run.ts fetches the original.
export const airFranceKlm: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "airfrance-klm",
  orgName: "Air France-KLM",
  orgGroup: "Air France-KLM",
  alliance: "SkyTeam",
  type: "group",
  sector: "air",
  language: "en",
  query: "(site:news.airfrance.com OR site:medias.airfrance.com OR site:corporate.airfrance.com OR site:news.klm.com) when:30d",
});
