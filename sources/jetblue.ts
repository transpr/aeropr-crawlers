import { gnewsSource } from "./google-news.js";

// JetBlue: no public RSS; newsroom requires JS. gnews discovery fallback.
export const jetblue: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "jetblue",
  orgName: "JetBlue",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:jetblue.com OR site:investor.jetblue.com) when:30d",
});
