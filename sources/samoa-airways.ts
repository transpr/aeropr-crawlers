import { gnewsSource } from "./google-news.js";

// Samoa Airways: gnews discovery fallback (world scheduled-carrier completion).
export const samoaAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "samoa-airways",
  orgName: "Samoa Airways",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Samoa Airways") when:30d",
});
