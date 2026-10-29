import { gnewsSource } from "./google-news.js";

// Kenya Airways: gnews discovery fallback (world scheduled-carrier completion).
export const kenyaAirways: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "kenya-airways",
  orgName: "Kenya Airways",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Kenya Airways") when:30d",
});
