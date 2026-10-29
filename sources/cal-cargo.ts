import { gnewsSource } from "./google-news.js";

// CAL Cargo Air Lines: gnews discovery fallback (European coverage, full country list).
export const calCargo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cal-cargo",
  orgName: "CAL Cargo Air Lines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("CAL Cargo Air Lines") when:30d",
});
