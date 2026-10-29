import { gnewsSource } from "./google-news.js";

// Mesa Airlines: gnews discovery fallback (US carriers per Wikipedia category list).
export const mesaAirlines: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "mesa-airlines",
  orgName: "Mesa Airlines",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Mesa Airlines" airline) when:30d",
});
