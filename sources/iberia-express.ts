import { gnewsSource } from "./google-news.js";

// Iberia Express: gnews discovery fallback (European coverage, full country list).
export const iberiaExpress: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "iberia-express",
  orgName: "Iberia Express",
  orgGroup: "IAG",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Iberia Express") when:30d",
});
