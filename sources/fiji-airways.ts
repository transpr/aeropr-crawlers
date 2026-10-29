import { gnewsSource } from "./google-news.js";

// Fiji Airways: gnews discovery fallback (world scheduled-carrier completion).
export const fijiAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "fiji-airways",
  orgName: "Fiji Airways",
  orgGroup: null,
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Fiji Airways") when:30d",
});
