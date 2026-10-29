import { gnewsSource } from "./google-news.js";

// Beijing Capital Airlines: gnews discovery fallback (world scheduled-carrier completion).
export const capitalAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "capital-airlines",
  orgName: "Beijing Capital Airlines",
  orgGroup: "HNA Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Beijing Capital Airlines") when:30d",
});
