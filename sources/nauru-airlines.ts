import { gnewsSource } from "./google-news.js";

// Nauru Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const nauruAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "nauru-airlines",
  orgName: "Nauru Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Nauru Airlines") when:30d",
});
