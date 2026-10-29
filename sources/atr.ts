import { gnewsSource } from "./google-news.js";

// ATR (Avions de Transport Régional) press pages blocked; gnews fallback.
export const atr: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "atr",
  orgName: "ATR",
  orgGroup: null,
  alliance: null,
  type: "oem",
  sector: "air",
  language: "en",
  query: "(site:atr-aircraft.com) when:30d",
});
