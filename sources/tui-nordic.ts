import { gnewsSource } from "./google-news.js";

// TUIfly Nordic: gnews discovery fallback (European coverage, full country list).
export const tuiNordic: ReturnType<typeof gnewsSource> = gnewsSource({
  slug: "tui-nordic",
  orgName: "TUIfly Nordic",
  orgGroup: "TUI Group",
  alliance: null,
  type: "airline",
  sector: "air",
  language: "en",
  query: "("TUIfly Nordic") when:30d",
});
