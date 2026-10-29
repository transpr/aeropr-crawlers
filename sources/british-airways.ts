import { gnewsSource } from "./google-news.js";

// British Airways: gnews discovery fallback (newsroom not directly crawlable from runners).
export const britishAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "british-airways",
  orgName: "British Airways",
  orgGroup: "IAG",
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:britishairways.com) when:30d",
});
