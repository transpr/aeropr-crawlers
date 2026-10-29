import { gnewsSource } from "./google-news.js";

// EVA Air: gnews discovery fallback (world scheduled-carrier completion).
export const evaAir: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "eva-air",
  orgName: "EVA Air",
  orgGroup: null,
  alliance: "star",
  type: "airline",
  sector: "air",
  language: "en",
  query: "("EVA Air") when:30d",
});
