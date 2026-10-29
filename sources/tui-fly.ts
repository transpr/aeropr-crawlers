import { gnewsSource } from "./google-news.js";

// TUI fly / TUI Airlines: gnews discovery fallback (completes European/French airline coverage).
export const tuiFly: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tui-fly",
  orgName: "TUI fly / TUI Airlines",
  orgGroup: "TUI Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "(site:tuifly.com OR site:tuifly.be OR site:tui.com) when:30d",
});
