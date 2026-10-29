// Shared types for all crawlers (air + rail).

export type Sector = "air" | "rail";

export type SourceType =
  | "org" | "group" | "alliance" | "airline" | "rail-operator"
  | "oem" | "airport" | "inframan" | "regulator" | "union"
  | "consumer" | "eco" | "rail-org";

export interface RawRelease {
  title: string;
  url: string;
  publishedAt: string;
  summary: string;
}

export interface NormalizedRelease {
  sector: Sector;
  source_slug: string;
  source_type: SourceType;
  org_group: string | null;
  alliance: string | null;
  org_name: string;
  title: string;
  published_at: string;
  source_url: string;
  language: string;
  summary: string;
  body: string;
  categories: string[];
}

export interface Source {
  slug: string;
  sector: Sector;
  type: SourceType;
  orgName: string;
  orgGroup: string | null;
  alliance: string | null;
  language: string;
  listUrl: string;
  parseList(html: string, baseUrl: string): RawRelease[];
  parseDetail?: (html: string, baseUrl: string) => { body: string; publishedAt?: string };
}
