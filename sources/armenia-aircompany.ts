import { gnewsSource } from "./google-news.js";

// Armenia Aircompany: gnews discovery fallback (European coverage, full country list).
export const armeniaAircompany: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "armenia-aircompany",
  orgName: "Armenia Aircompany",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Armenia Aircompany") when:30d",
});
