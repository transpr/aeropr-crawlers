import { gnewsSource } from "./google-news.js";

// Iberia: newsroom blocked from GitHub runners (403/404).
export const iberia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "iberia",
  orgName: "Iberia",
  orgGroup: "IAG",
  alliance: "oneworld",
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:grupo.iberia.com OR site:iberia.com OR site:press.iberia.com) when:30d",
});
