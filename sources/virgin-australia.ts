import { gnewsSource } from "./google-news.js";

// Virgin Australia: gnews discovery fallback (world scheduled-carrier completion).
export const virginAustralia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "virgin-australia",
  orgName: "Virgin Australia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Virgin Australia") when:30d",
});
