import { gnewsSource } from "./google-news.js";

// TUI Airways: gnews discovery fallback (European coverage, full country list).
export const tuiUk: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tui-uk",
  orgName: "TUI Airways",
  orgGroup: "TUI Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TUI Airways") when:30d",
});
