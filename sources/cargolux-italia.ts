import { gnewsSource } from "./google-news.js";

// Cargolux Italia: gnews discovery fallback (European coverage, full country list).
export const cargoluxItalia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cargolux-italia",
  orgName: "Cargolux Italia",
  orgGroup: "Cargolux",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cargolux Italia") when:30d",
});
