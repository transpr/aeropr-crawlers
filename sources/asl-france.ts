import { gnewsSource } from "./google-news.js";

// ASL Airlines France: gnews discovery fallback (completes European/French airline coverage).
export const aslFrance: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "asl-france",
  orgName: "ASL Airlines France",
  orgGroup: "ASL Aviation Holdings",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:aslairlines.fr OR site:aslaviation.com) when:30d",
});
