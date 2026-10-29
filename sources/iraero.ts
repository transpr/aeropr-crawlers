import { gnewsSource } from "./google-news.js";

// IrAero: gnews discovery fallback (European coverage, full country list).
export const iraero: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "iraero",
  orgName: "IrAero",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("IrAero") when:30d",
});
