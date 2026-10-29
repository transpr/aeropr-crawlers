import { gnewsSource } from "./google-news.js";

// Republic Airways: gnews discovery fallback (US carriers per Wikipedia category list).
export const republicAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "republic-airways",
  orgName: "Republic Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Republic Airways") when:30d",
});
