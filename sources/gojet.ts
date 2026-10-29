import { gnewsSource } from "./google-news.js";

// GoJet Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const gojet: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "gojet",
  orgName: "GoJet Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("GoJet Airlines") when:30d",
});
