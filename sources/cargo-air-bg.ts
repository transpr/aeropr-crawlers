import { gnewsSource } from "./google-news.js";

// Cargo Air (Bulgaria): gnews discovery fallback (European coverage, full country list).
export const cargoAirBg: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "cargo-air-bg",
  orgName: "Cargo Air (Bulgaria)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Cargo Air" Bulgaria) when:30d",
});
