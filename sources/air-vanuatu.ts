import { gnewsSource } from "./google-news.js";

// Air Vanuatu: gnews discovery fallback (world scheduled-carrier completion).
export const airVanuatu: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-vanuatu",
  orgName: "Air Vanuatu",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Vanuatu") when:30d",
});
