import { gnewsSource } from "./google-news.js";

// VINCI Airports — no public feed; discovery layer.
export const vinciAirports: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "vinci-airports",
  orgName: "VINCI Airports",
  orgGroup: "VINCI",
  alliance: null,
  type: "airport",
  sector: "air",
  language: "en",
  query: "site:vinci-airports.com when:30d",
});
