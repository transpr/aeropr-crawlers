import { gnewsSource } from "./google-news.js";

// Czech Airlines (CSA): gnews discovery fallback (European coverage, full country list).
export const csa: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "csa",
  orgName: "Czech Airlines (CSA)",
  orgGroup: null,
  alliance: "skyteam",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Czech Airlines" OR "ČSA") when:30d",
});
