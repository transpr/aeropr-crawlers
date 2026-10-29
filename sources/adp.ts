import { gnewsSource } from "./google-news.js";

// Groupe ADP (Paris Aéroports) — press pages behind cookie walls.
export const adp: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "adp",
  orgName: "Groupe ADP",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "fr",
  query: "(site:groupeadp.fr OR site:parisaeroport.fr) (communiqué OR presse OR "press release") when:30d",
});
