import { gnewsSource } from "./google-news.js";

// AeroLogic: gnews discovery fallback (European coverage, full country list).
export const aerologic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "aerologic",
  orgName: "AeroLogic",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aerologic.de) when:30d",
});
