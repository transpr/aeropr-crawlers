import { gnewsSource } from "./google-news.js";

// Atlantic Airways (Faroe): gnews discovery fallback (European coverage, full country list).
export const atlanticAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "atlantic-airways",
  orgName: "Atlantic Airways (Faroe)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Atlantic Airways" Faroe) when:30d",
});
