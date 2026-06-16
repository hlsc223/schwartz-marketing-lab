# Replit → Astro Migration Plan
*Last updated: June 16, 2026*

---

## Why this matters more than expected

Auditing the live site surfaced a finding that changes the urgency of this migration, not just the rationale.

The on-page optimization checklist marks the homepage title tag, meta description, and Organization schema as "done." Checking the live HTML shows otherwise:

- `<title>` and `<meta name="description">` exist as **literal unrendered template placeholders** — `<!--SEO_TITLE-->` and `<!--SEO_DESCRIPTION-->` — not the finalized copy ("AEO Agency & Content Strategy | Schwartz Marketing Lab").
- **No `application/ld+json` schema exists anywhere on the homepage.** No Organization schema, despite being checked off as complete.

This means the CMS templating layer on Replit is silently failing to populate metadata in production. Work that was specified and approved never actually shipped to the page Google and AI crawlers see. This isn't a reason to delay migration — it's the strongest evidence yet that the current platform can't be trusted to deliver what's specified. Astro's static-output model makes this category of failure structurally impossible: if the title tag is in the template, it's in the HTML, full stop, every time, verifiable with a build-time check.

**Action item carried into this migration:** every page must ship with title tag, meta description, and schema hard-coded into the Astro template (or sourced directly from frontmatter/content collections) — never left to a runtime templating layer that can silently fail.

---

## Full Site Inventory (current live site)

### Core marketing pages
| Page | URL | Notes |
|---|---|---|
| Homepage | `/` | Animated H1 cycling AEO/GEO/SEO/Content — flagged in on-page doc as an AEO risk; rebuild as static text per finalized decision |
| AEO & GEO service | `/services/answer-engine-optimization` | |
| PR & Media service | `/services/pr-media` | |
| Executive Authority service | `/services/executive-authority` | |
| Content Systems service | `/services/content-systems` | |
| Packages / Work With Me | `/packages` | |
| About | `/about` | |
| Contact | `/contact` | Has a form — needs Netlify Forms equivalent |
| Blog index | `/blog` | |
| Articles index | `/articles` | Separate from blog — appears to be earned-media/press mentions, confirm intent |
| Portfolio / case studies | `/portfolio` | Filterable grid: All, Blogs, Ebooks, Case Studies, Newsletters, Articles, Executive Voice, AEO |

### Content collection items discovered under `/portfolio`
Individual pieces live under multiple URL patterns, not just one collection:
- `/work/[slug]` — ebooks, case studies, executive voice pieces (e.g. `/work/aeo-outcomes`, `/work/grin-unboxed`)
- `/newsletter/[slug]` — newsletter archive pieces (e.g. `/newsletter/ads-and-narrative`)

This is broader than the on-page doc anticipated — it's a real lightweight CMS with several content types, not just a blog. **Open question for you:** do all of these need to migrate 1:1, or is some of this legacy/test content from before the current positioning (GRIN/influencer-marketing pieces look like they predate the AEO-focused repositioning)? Worth a quick pass to decide what's worth carrying forward vs. archiving before we rebuild it — migrating low-relevance content costs effort and dilutes topical focus, which cuts against the project's authority/information-gain priorities.

### External (not migrated)
- Newsletter signup links to `https://quinn-does-content.beehiiv.com/` — stays external, just preserve the link.

---

## Design Tokens (captured from live site computed styles)

| Token | Value |
|---|---|
| Background | `rgb(244, 241, 231)` — warm cream |
| Body text | `rgb(23, 23, 23)` — near-black |
| Body font | Lora (serif) |
| Heading font | Switzer (sans-serif, weight 900 on H1) |
| H1 size (desktop) | 144px |
| Buttons | Transparent background, no border-radius (sharp corners), body font |
| Layout motif | Bordered/framed hero section, thin horizontal divider rules in header/footer |

These get codified as CSS custom properties in the Astro layout so every page inherits them consistently rather than re-declaring styles per page.

---

## URL Preservation Rule

Every URL above carries over exactly as-is. No slug changes during migration — that's a separate, already-decided exercise (see on-page-optimization-v1.md for the one slug change already made: `/services/aeo-geo` → `/services/answer-engine-optimization`, which is already live and not part of this migration). Any future slug change gets a 301 redirect at the Netlify level (`netlify.toml` `[[redirects]]` block), never a silent break.

---

## Migration Order

Rebuilding in this sequence — each step shippable and testable before moving to the next:

1. **Shared Layout + design system** (in progress now) — header nav, footer, base typography/color tokens, meta tag + schema slot architecture.
2. **Homepage** (in progress now) — using the *finalized* copy from on-page-optimization-v1.md (not the live site's stale title/H1), with real static meta tags and Organization schema.
3. **Service pages** (4 pages) — using finalized title/meta/H1/H2/FAQ content already specified in on-page-optimization-v1.md, with FAQPage schema.
4. **About** — with Person schema (per checklist item already specified).
5. **Packages/Work With Me, Contact** — Contact page wired to Netlify Forms.
6. **Blog index + content collection** — markdown/MDX collection, Decap-editable.
7. **Portfolio/case studies** — pending your call on scope (full migration vs. curated subset).
8. **Articles, Newsletter archive** — lowest priority, confirm relevance first.

Steps 1–2 are what I'm building right now per your request.

---

## Schema Plan

| Page type | Schema |
|---|---|
| Homepage | Organization |
| About | Person |
| Service pages (4) | FAQPage (from the FAQ content already drafted in on-page-optimization-v1.md) |
| Blog posts | Article/BlogPosting (when blog collection is built) |
| Case studies | CreativeWork or Article, TBD when we scope that section |

All schema gets validated with Google's Rich Results Test after each page ships — already on your checklist as an open item.

---

## Rollout / Cutover

1. Build and verify each page on the `schwartz-marketing-lab` Netlify deploy (currently live at its `.netlify.app` preview URL, not yet the production domain).
2. Once the full site is rebuilt and reviewed, point DNS for `schwartzmarketinglab.com` from Replit to Netlify.
3. Re-verify Google Search Console ownership and resubmit the sitemap (Astro generates this automatically via `@astrojs/sitemap`).
4. Spot-check 3–5 pages post-cutover for title tags, meta descriptions, and schema rendering correctly — this is the exact failure mode we just found on Replit, so this check is non-negotiable.
5. Decommission the Replit deployment only after DNS has fully propagated and the new site is confirmed serving correctly (24–48 hour buffer).

---

## Next Steps (this session)

Building now: shared `Layout.astro` (header, footer, meta/schema architecture using the design tokens above) and the homepage rebuilt with finalized copy, static metadata, and Organization schema.
