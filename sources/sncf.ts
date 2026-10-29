import { gnewsSource } from "./google-news.js";

// SNCF: corporate newsroom blocked from GitHub runners (403). Rail coverage.
export const sncfGnews: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sncf-gnews",
  orgName: "SNCF",
  orgGroup: "SNCF",
  alliance: null,
  type: "rail-operator",
  sector: "rail",
  language: "fr",
  query: "(site:sncf.com OR site:medias.sncf.com) when:30d",
});
