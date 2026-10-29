import { gnewsSource } from "./google-news.js";

// NTSB — press releases feed page exists (ntsb.gov/Pages/rss.aspx) but feed URLs
// are SharePoint-managed; discovery layer until the direct feed URL is confirmed.
export const ntsb: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ntsb",
  orgName: "NTSB",
  orgGroup: null,
  alliance: null,
  type: "regulator",
  sector: "air",
  language: "en",
  query: "(site:ntsb.gov) (\"press release\" OR \"news release\" OR \"investigation\") when:30d",
});
