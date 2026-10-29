import { gnewsSource } from "./google-news.js";

// Silver Airways: gnews discovery fallback (US carriers per Wikipedia category list).
export const silverAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "silver-airways",
  orgName: "Silver Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Silver Airways") when:30d",
});
