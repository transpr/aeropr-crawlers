import { gnewsSource } from "./google-news.js";

// Sun Country Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const sunCountry: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sun-country",
  orgName: "Sun Country Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Sun Country Airlines") when:30d",
});
