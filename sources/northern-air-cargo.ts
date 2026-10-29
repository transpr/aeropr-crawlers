import { gnewsSource } from "./google-news.js";

// Northern Air Cargo: gnews discovery fallback (US carriers per Wikipedia category list).
export const northernAirCargo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "northern-air-cargo",
  orgName: "Northern Air Cargo",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Northern Air Cargo") when:30d",
});
