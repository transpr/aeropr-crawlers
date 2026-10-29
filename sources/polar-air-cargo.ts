import { gnewsSource } from "./google-news.js";

// Polar Air Cargo: gnews discovery fallback (US carriers per Wikipedia category list).
export const polarAirCargo: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "polar-air-cargo",
  orgName: "Polar Air Cargo",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Polar Air Cargo") when:30d",
});
