import { gnewsSource } from "./google-news.js";

// Air Tahiti Nui: gnews discovery fallback (completes European/French airline coverage).
export const airTahitiNui: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "air-tahiti-nui",
  orgName: "Air Tahiti Nui",
  orgGroup: null,
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:airtahitinui.com OR site:airtahitinui.co.nz) when:30d",
});
