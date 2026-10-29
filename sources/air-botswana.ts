import { gnewsSource } from "./google-news.js";

// Air Botswana: gnews discovery fallback (world scheduled-carrier completion).
export const airBotswana: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-botswana",
  orgName: "Air Botswana",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air Botswana") when:30d",
});
