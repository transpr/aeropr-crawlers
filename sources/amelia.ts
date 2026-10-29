import { gnewsSource } from "./google-news.js";

// Amelia (Amelia International): gnews discovery fallback (completes European/French airline coverage).
export const amelia: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "amelia",
  orgName: "Amelia (Amelia International)",
  orgGroup: "Amelia Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:flyamelia.com OR site:amelia.aero) when:30d",
});
