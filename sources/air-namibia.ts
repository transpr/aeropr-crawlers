import { gnewsSource } from "./google-news.js";

// Air Namibia: gnews discovery fallback (world scheduled-carrier completion).
export const airNamibia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-namibia",
  orgName: "Air Namibia",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Namibia") when:30d",
});
