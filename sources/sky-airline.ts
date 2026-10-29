import { gnewsSource } from "./google-news.js";

// Sky Airline (Chile): gnews discovery fallback (world scheduled-carrier completion).
export const skyAirline: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "sky-airline",
  orgName: "Sky Airline (Chile)",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("Sky Airline" Chile) when:30d",
});
