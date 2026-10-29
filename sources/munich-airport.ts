import { gnewsSource } from "./google-news.js";

// Munich Airport — press pages behind cookie walls; discovery layer.
export const munichAirport: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "munich-airport",
  orgName: "Munich Airport",
  orgGroup: null,
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "site:munich-airport.de when:30d",
});
