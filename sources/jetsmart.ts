import { gnewsSource } from "./google-news.js";

// JetSMART: gnews discovery fallback (world scheduled-carrier completion).
export const jetsmart: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "jetsmart",
  orgName: "JetSMART",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("JetSMART") when:30d",
});
