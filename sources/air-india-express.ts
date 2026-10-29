import { gnewsSource } from "./google-news.js";

// Air India Express: gnews discovery fallback (world scheduled-carrier completion).
export const airIndiaExpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-india-express",
  orgName: "Air India Express",
  orgGroup: "Tata Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Air India Express") when:30d",
});
