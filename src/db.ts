// Supabase REST client (no SDK dependency). Uses service role key from env.

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_KEY!;

export interface ReleaseRow {
  sector: string;
  source_slug: string;
  source_type: string;
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

async function supabase(path: string, init: RequestInit): Promise<any> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      "Content-Type": "application/json",
      ...init.headers,
    },
  });
  if (!res.ok) {
    throw new Error(`Supabase ${path} -> ${res.status}: ${(await res.text()).slice(0, 300)}`);
  }
  return res.json();
}

export async function upsertReleases(rows: ReleaseRow[]): Promise<ReleaseRow[]> {
  if (rows.length === 0) return [];
  const saved: ReleaseRow[] = await supabase("press_releases?on_conflict=source_url", {
    method: "POST",
    headers: { Prefer: "resolution=merge-duplicates,return=representation" },
    body: JSON.stringify(rows),
  });
  const cutoff = Date.now() - 2 * 60 * 1000;
  return (saved ?? []).filter(
    (r: any) => r.created_at && new Date(r.created_at).getTime() > cutoff,
  );
}

export async function patchRelease(id: string, patch: Record<string, unknown>): Promise<void> {
  await supabase(`press_releases?id=eq.${id}`, {
    method: "PATCH",
    headers: { Prefer: "return=minimal" },
    body: JSON.stringify(patch),
  });
}

/** Hard-delete releases matching a PostgREST filter (e.g. "source_slug=eq.airbaltic"). */
export async function deleteReleases(where: string): Promise<number> {
  const rows = await supabase(`press_releases?${where}`, {
    method: "DELETE",
    headers: { Prefer: "return=representation" },
  });
  return Array.isArray(rows) ? rows.length : 0;
}
