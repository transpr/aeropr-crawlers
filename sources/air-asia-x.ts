import { gnewsSource } from "./google-news.js";

// AirAsia X: gnews discovery fallback (world scheduled-carrier completion).
export const airAsiaX: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-asia-x",
  orgName: "AirAsia X",
  orgGroup: "AirAsia",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("AirAsia X") when:30d",
});
