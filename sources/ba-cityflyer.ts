import { gnewsSource } from "./google-news.js";

// BA CityFlyer: gnews discovery fallback (European coverage, full country list).
export const baCityflyer: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "ba-cityflyer",
  orgName: "BA CityFlyer",
  orgGroup: "IAG",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("BA CityFlyer") when:30d",
});
