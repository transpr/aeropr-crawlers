import { gnewsSource } from "./google-news.js";

// TUS Airways: gnews discovery fallback (European coverage, full country list).
export const tusAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tus-airways",
  orgName: "TUS Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TUS Airways") when:30d",
});
