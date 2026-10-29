import { gnewsSource } from "./google-news.js";

// DHL Air (UK): gnews discovery fallback (European coverage, full country list).
export const dhlAirUk: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "dhl-air-uk",
  orgName: "DHL Air (UK)",
  orgGroup: "DHL",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("DHL Air UK") when:30d",
});
