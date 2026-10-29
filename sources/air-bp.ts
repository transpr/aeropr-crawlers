import { gnewsSource } from "./google-news.js";

// Air bp: gnews discovery fallback (newsroom not directly crawlable from runners).
export const airBp: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-bp",
  orgName: "Air bp",
  orgGroup: "bp",
  alliance: null,
  type: "fuel",
  sector: "air",
  language: "en",
  query: "(bp aviation) (site:bp.com OR site:airbp.com) when:30d",
});
