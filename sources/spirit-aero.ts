import { gnewsSource } from "./google-news.js";

// Spirit Aircraft Systems: gnews discovery fallback (newsroom not directly crawlable from runners).
export const spiritAero: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "spirit-aero",
  orgName: "Spirit Aircraft Systems",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:spiritaero.com OR site:spiritaircraftsystems.com) when:30d",
});
