# aeropr-crawlers (transpr engine)

Press release scraping engine for **AeroPR** (air) and **RailPR** (rail).
Scans newsrooms every 5 minutes via GitHub Actions, normalizes releases,
categorizes and translates them, and upserts into Supabase.
Same engine, two sectors: the rail deployment runs the same code with `--sector=rail`.

## How it works

GitHub Actions (cron */5) -> src/run.ts -> for each source in sources/index.ts:
1. GET listUrl (newsroom listing page)
2. parseList() extracts title + URL of each release
3. GET each detail page -> full body + publish date
4. categorize() tags the release (greve, commande, resultats, nouvelle-route...)
5. upsert into Supabase (dedup on source_url)
6. non-EN releases get an AI translation (body_en, Mistral API)

If a source fails (0 releases parsed = structure changed), the workflow
exits 1 and auto-creates a GitHub issue with the error.

## Adding a source

1. Create `sources/<slug>.ts` exporting a `Source` object (see existing files).
2. Register it in `sources/index.ts`.
3. Adjust `parseList` selectors after the first run (check the Actions log).

## Setup

1. Run `supabase/schema.sql` in the Supabase SQL editor.
2. Add repository secrets (Settings -> Secrets and variables -> Actions):
   - `SUPABASE_URL`
   - `SUPABASE_SERVICE_KEY` (project Settings -> API -> service_role)
   - `MISTRAL_API_KEY` (console.mistral.ai)
3. Enable the workflow (Actions tab -> enable schedule).
4. Trigger a manual run to validate.

## Politeness

- Identify as a bot: `AeroPRBot/0.1` User-Agent with contact page.
- ~1 request per source per 5 min; detail pages fetched only for new items.
- Attribution: the pipeline always stores `source_url`; consumers must link back
  to the original release.
