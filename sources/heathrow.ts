import { gnewsSource } from "./google-news.js";

// Heathrow media centre is JS-rendered; discovery layer until a feed/list is found.
export const heathrow: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "heathrow",
  orgName: "Heathrow",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "site:mediacentre.heathrow.com when:30d",
});
