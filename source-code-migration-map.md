# Source Code Migration Map

Audit of the extracted Replit source (`client/`, `server/`, `shared/`, `public/`, `attached_assets/`) — React 18 + Vite + Wouter (client), Express 5 + Drizzle ORM/Postgres (server), shadcn/ui + Tailwind. This supersedes the earlier live-site-only audit where it conflicts; the live site is a templated subset of what's actually in source.

## 1. Routes / Pages (from `client/src/App.tsx`)

**Marketing core**
- `/` — Home
- `/about` — About
- `/packages` — Packages
- `/contact` — Contact
- `/portfolio` — Portfolio (legacy landing, largely superseded by `/case-studies`)

**Services** (canonical + redirected legacy slugs — redirects done client-side via `window.location.replace`, must become real 301s in Astro/Netlify)
- `/services/answer-engine-optimization` ← redirect from `/services/aeo-geo`
- `/services/executive-authority` ← redirect from `/services/thought-leadership`
- `/services/content-systems` ← redirect from `/services/strategy-execution`
- `/services/pr-media` (no legacy alias)

**Blog**
- `/blog` — index
- `/blog/:slug` — post
- `/blog/admin`, `/blog/admin/new`, `/blog/admin/edit/:id` — **internal CMS, not public content** (see §7)

**Case studies / portfolio detail** (DB-free, hardcoded React pages — real content, currently live)
- `/case-studies` — index
- `/case-studies/nooks-aeo`
- `/case-studies/search-party-aeo`
- `/case-studies/grin-content-systems`
- `/work/case-study/:slug` — generic case study template
- `/work/grin-case-study-systems`, `/work/grin-unboxed`, `/work/roseskinco-x-grin`, `/work/rookie-x-grin`, `/work/anthros-x-grin`, `/work/topo-designs-x-grin`, `/work/ai-product-launch-gia`, `/work/aeo-outcomes`, `/work/pace-framework`, `/work/company-launch-narrative`, `/work/new-product-playbook`, `/work/what-customers-say-about-grin`, `/work/fashion-influencer-marketing-guide`, `/work/influencer-marketing-guide`, `/work/beauty-influencer-guide`, `/work/influencer-report-2022`

**Newsletter** (separate from blog — partly redirects externally)
- `/newsletter` — index (nav links this to an external Beehiiv URL too: `https://quinn-does-content.beehiiv.com/` — there are two competing newsletter destinations)
- `/newsletter/:slug` — article

**Resource hub pages** (thin, list-style)
- `/articles`
- `/guides`

**Internal / admin — not part of public IA**
- `/admin/seo` — SEO admin
- `/blog/admin*` — blog CMS

**404**: catch-all `NotFound` component.

## 2. Reusable Components (`client/src/components`)

Layout/shell: `Navbar`, `Footer`, `ScrollToTop`, `NoiseTexture` (decorative bg), `ThemeToggle`.

Homepage sections: `Hero`, `StorySection`, `FocusSection`, `WorkSection`, `ServicesSection`, `CaseStudiesSection`, `TestimonialsSection`, `ContactSection`, `DisciplinesVisual` (interactive diagram, per attached_assets build instructions).

Content/detail templates: `ServiceLayout` (shared shell for the 4 service pages), `WorkDetailLayout` (shared shell for case study pages), `MarkdownProse` (renders blog markdown), `FaqSection`.

Admin-only: `BlogEditor`, `AdminLockScreen`, `InlineEditable` (powers the site's in-browser CMS-less inline editing — password-gated via `ADMIN_PASSWORD` env var, not Decap).

`ui/*`: full shadcn/ui set (accordion, dialog, form, table, carousel, etc.) — most of this is unused surface area pulled in by the shadcn scaffold, not all actively rendered.

**Astro mapping**: `Navbar`/`Footer` → Astro `Layout.astro` (already built, simpler — no mega-menu needed unless we want to keep it). `ServiceLayout`/`WorkDetailLayout`/`FaqSection` patterns are already replicated by the `FaqAccordion`/`RelatedLinks`/`CtaBanner` components built this session. `DisciplinesVisual` and other interactive homepage widgets need a deliberate decision: rebuild as a lightweight client-side island (Astro supports React/vanilla JS islands) or simplify to static.

## 3. Content Types

| Type | Source of truth | Notes |
|---|---|---|
| Blog posts | Postgres `blog_posts` table (Drizzle) + `server/blog-seed.ts` | Already migrating to markdown content collection — correct call. |
| Case studies (`/case-studies/*`, `/work/*`) | **Hardcoded JSX**, not DB | Real, substantial content (Nooks, Search Party, Grin, RoseSkinCo, Rookie, Anthros, Topo Designs, Gia/AI product launch). Needs manual extraction into Astro content collection or static pages — not a DB migration, a content port. |
| Newsletter articles | Hardcoded JSX (`Newsletter.tsx`, `NewsletterArticle.tsx`) | Plus a live external Beehiiv newsletter the nav also points to — clarify which is canonical before migrating. |
| Guides/Ebooks (`InfluencerGuide`, `BeautyEbook`, `FashionGuide`, `InfluencerReport`, `NewProductPlaybook`, `G2Report`) | Hardcoded JSX, gated PDF downloads | Lead-gen assets — relevant to "qualified lead generation" priority #1. Worth keeping if they still convert. |
| Service page copy | Postgres `service_content` table, editable via inline-editor | Already fully rebuilt in Astro from `on-page-optimization-v1.md`, no DB dependency needed. |
| Site/page meta, footer, contact-page copy | Postgres (`page_meta`, `footer_content`, `contact_page_content`, `site_content`) | All inline-editable via custom admin, not Decap. Astro rebuild replaces this entire system with file-based content + Decap, which is the right direction — no DB needed going forward. |
| Contact form submissions | Postgres `contact_messages` table + Gmail API notification | Replaced by Netlify Forms (already done) — no DB needed. |
| Focus areas / timeline / projects (homepage "Story"/"Focus"/"Work" sections) | Postgres, seeded once, read-only via `/api/portfolio` | Effectively static data dressed up as a DB table. Can be hardcoded/frontmatter in Astro — no real CMS need. |

## 4. Forms and Integrations

- **Contact form** → `POST /api/contact` → Postgres insert + fire-and-forget Gmail API email to `quinn@schwartzmarketinglab.com`, reply-to set to the submitter. Auth via Replit's Gmail connector (OAuth token broker, Replit-specific — **will not work outside Replit**). Astro/Netlify Forms migration already replaces this; confirm Netlify Forms notification email is configured to replace the Gmail send.
- **Admin auth** → `POST /api/admin/auth`, plain password compare against `ADMIN_PASSWORD` env var — gates the in-browser editor, not a real auth system. Drop entirely; Decap + Netlify Identity replaces this properly.
- **Google Analytics (gtag)** → `G-CP5RDJJQBE`, wired in `client/index.html` plus a `usePageTracking` SPA-route hook in `App.tsx`. **Must port the same GA4 ID into the Astro `Layout.astro`** — this hasn't been added yet in the rebuild and is a gap.
- **Google Search Console verification** → `<meta name="google-site-verification" content="SUkVtYJ9_hdPaCFHm1zZa1iCZ6zsIowcC2Mj_XF1AEU">` in `client/index.html`. **Must port into Astro `Layout.astro` head** — currently missing, and losing this drops verified GSC access.
- **Fonts** → Fontshare CDN loads **Switzer** (400/500/700/900) as the actual brand display font, plus an enormous, almost certainly unused Google Fonts `@import` pulling 30+ families (Inter, Lora, DM Sans, Geist, Playfair, etc.) — looks like leftover scaffold cruft rather than intentional. Switzer is the one that matters: it's a paid/licensed font from Fontshare, free for limited commercial use under their license terms but worth confirming the specific license tier before relying on the CDN long-term. This confirms your instruction to hold at Inter fallback until you supply licensed Switzer files is the right call — Switzer is the actual brand typeface, not Inter.

## 5. Metadata, Schema, Sitemap, Robots, Redirects

- **Meta tags**: injected server-side per-request by `server/seo.ts` via string replacement into `<!--SEO_TITLE-->` etc. placeholders in `client/index.html`. This is the source of the "broken placeholder" behavior seen when auditing the live site directly — it's an SSR templating step, not a static-export bug, but it's fragile and explains why JS-disabled/some-crawler views looked broken.
- **JSON-LD**: only on home (`Person` + `Organization`) and `/about` (`Person`) and individual blog posts (`Article`) — generated in `server/seo.ts`. No `FAQPage` schema anywhere in source, no schema on service pages, case studies, or packages. The Astro rebuild's `faqPageSchema()` on every service page is net-new and a real AEO improvement, not parity work.
- **Sitemap**: hand-built XML at `GET /sitemap.xml`, hardcoded static URL list (misses most `/work/*` and `/case-studies/*` detail pages, misses `/newsletter`, `/articles`, `/guides`) plus dynamic blog post entries from Postgres. The Astro `@astrojs/sitemap` integration auto-discovers all routes, which is strictly more correct.
- **Robots.txt**: dynamic route, `Allow: /` with no disallows, points to `/sitemap.xml`. Astro's version additionally disallows `/admin/` (correct, new) and points to `/sitemap-index.xml` (Astro's actual output filename — verify this matches before launch).
- **Redirects**: only the 3 client-side JS redirects for renamed service slugs (`aeo-geo`→`answer-engine-optimization`, `thought-leadership`→`executive-authority`, `strategy-execution`→`content-systems`). These need to become real 301s in `netlify.toml` or `public/_redirects`, not client JS — client-side `window.location.replace` is invisible to crawlers and passes no link equity. **This is a concrete SEO gap to fix in the rebuild, not just parity.**
- **Canonical URLs**: server-computed against hardcoded `https://schwartzmarketinglab.com` base — fine, Astro's `site` config in `astro.config.mjs` already replicates this correctly.

## 6. Assets to Preserve

- **Logo/brand**: `sml-logo.svg`, `sml-logo-cream.svg`, `favicon.svg`/`favicon.png`, `Gagalin-Regular.otf` (display font file, used somewhere distinct from Switzer — check usage before discarding), `quinn.png` (headshot, used on About).
- **Case study PDFs** (`public/case-studies/*`, `public/pdfs/*`): MCo, Stio, Uber, Superfeet, beauty ebook, influencer report 2022, G2 report 2025, fashion influencer guide, Anthros/Topo Designs/RoseSkinCo/Rookie case studies, Grin Unboxed, "Meet Gia," case study infosheet — all real lead-gen/portfolio assets, should move into the Astro `public/` folder under the same paths to avoid breaking existing inbound links to the PDFs themselves.
- **Case study images** (`public/images/*`): Uber/Marketing Dive screenshots, Unboxed/Forbes screenshots, Gia press screenshots (Net Influencer, MarTech 360/Edge, Yahoo Finance) — supporting proof assets for those case studies.
- **Videos**: `sonar-announcement.mp4`, `search-party-launch-video.mp4`, `search-party-website-walkthrough.mp4` — used in the Search Party case study; large files, consider hosting on a CDN/video host rather than the Astro `public/` folder if not already optimized.
- **`attached_assets/`**: this folder is overwhelmingly Replit Agent chat-paste logs (`Pasted-*.txt` — build instructions Quinn gave the Replit agent, not site content) mixed with duplicates of the real assets above and a few extra screenshots (Nooks/Pathfinder product screenshots, brand book PDF, moon/rain stock photos of unclear current use). Treat as a junk drawer: pull out the handful of real images/PDFs not already in `public/`, discard the rest.

## 7. Features to Remove (not migrating)

- **Entire custom CMS/admin stack**: `BlogEditor`, `BlogEditorPage`, `BlogAdmin`, `SeoAdmin`, `AdminLockScreen`, `InlineEditable`, plus every Express route under `/api/admin`, `/api/page-meta`, `/api/service-content`, `/api/contact-page-content`, `/api/footer-content`, `/api/site-content`. Decap CMS + git-based content fully replaces this and is more secure (no plaintext password gate) and more durable.
- **Postgres/Drizzle entirely**: `server/db.ts`, `drizzle.config.ts`, `shared/schema.ts`, `server/storage.ts`. Nothing in the target Astro/Netlify architecture needs a database — content is file-based, contact form is Netlify Forms. Confirm before decommissioning that no analytics/lead data in `contact_messages` needs exporting first (recommend a one-time CSV export of any existing contact submissions before the DB is torn down).
- **Express server, Vite SSR middleware, session/passport auth** (`server/index.ts`, `server/vite.ts`, `server/static.ts`, `express-session`, `passport`, `passport-local`, `connect-pg-simple`, `memorystore`): none of this exists in a static Astro site.
- **Replit-specific Gmail OAuth connector** (`server/gmail.ts`): tied to `REPLIT_CONNECTORS_HOSTNAME`/`REPL_IDENTITY`, won't function outside Replit regardless. Netlify Forms' built-in email notifications are the replacement.
- **Replit dev plugins** (`@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`, `@replit/vite-plugin-runtime-error-modal`): Replit-only dev tooling, irrelevant to Astro.

## Source-to-Astro Migration Plan

This is sequenced by leverage — highest-impact/lowest-effort first — and respects the existing scope decision (no portfolio/newsletter migration yet, Inter fallback until licensed Switzer files arrive).

**Phase 1 — Close gaps in what's already built (do this before anything new)**
1. Add the GA4 tag (`G-CP5RDJJQBE`) and the Google Search Console verification meta tag into `src/layouts/Layout.astro`. Both are currently missing from the Astro rebuild and their loss is a real regression versus the live site, not a parity nice-to-have.
2. Add real 301 redirects for the 3 renamed service slugs (`/services/aeo-geo`, `/services/thought-leadership`, `/services/strategy-execution`) via `public/_redirects` or `netlify.toml` `[[redirects]]` — these were only client-side JS redirects in source, invisible to crawlers, so this is a strict SEO improvement, not just a port.
3. Decide the Switzer font question explicitly: confirm Fontshare's free-tier license covers this commercial use long-term, or get the licensed files and self-host — flagged as open per your standing instruction.

**Phase 2 — Content audit (separate from this migration, as you scoped)**
4. Decide what happens to `/portfolio`, `/case-studies/*`, `/work/*`, `/newsletter/*`, `/articles`, `/guides`. These are real hardcoded-JSX content, not database content — migrating them is a content-porting exercise (copy/restructure JSX into Astro pages or a content collection), not a technical migration. Recommend treating this as its own audit pass: which case studies still represent current positioning, which guides still convert, whether the external Beehiiv newsletter supersedes the in-site one.
5. Export any rows in `contact_messages` before the Postgres database is decommissioned, in case there's unprocessed lead data in there.

**Phase 3 — Decommission**
6. Once Phases 1–2 are resolved and the Astro site is live, retire the Express/Postgres/Drizzle backend and the custom inline-admin system entirely. Nothing in the target architecture depends on it.

**Net assessment**: the core marketing pages, services, About, Packages, Contact, blog, and CMS work already completed this session is sound and didn't need redoing — the source-code audit mainly surfaced three concrete gaps (GA4, GSC verification, real redirects vs. client-side ones) to patch, confirmed the Switzer-vs-Inter font call was correct, and clarified that the case-study/portfolio/newsletter content is hand-written JSX requiring editorial judgment to port, not a mechanical database migration.
