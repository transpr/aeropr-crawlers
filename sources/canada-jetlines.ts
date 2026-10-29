import { gnewsSource } from "./google-news.js";

// Canada Jetlines: gnews discovery fallback (world scheduled-carrier completion).
export const canadaJetlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "canada-jetlines",
  orgName: "Canada Jetlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Canada Jetlines") when:30d",
});
