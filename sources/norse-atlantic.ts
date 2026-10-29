import { gnewsSource } from "./google-news.js";

// Norse Atlantic Airways: gnews discovery fallback (European coverage, full country list).
export const norseAtlantic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "norse-atlantic",
  orgName: "Norse Atlantic Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flynorse.com OR "Norse Atlantic") when:30d",
});
