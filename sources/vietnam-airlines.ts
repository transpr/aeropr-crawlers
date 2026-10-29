import { gnewsSource } from "./google-news.js";

// Vietnam Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const vietnamAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "vietnam-airlines",
  orgName: "Vietnam Airlines",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Vietnam Airlines") when:30d",
});
