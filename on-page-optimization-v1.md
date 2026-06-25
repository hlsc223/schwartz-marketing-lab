# On-Page Optimization — S.LAB
*Last updated: June 15, 2026*

---

## Implementation Checklist

*Completed setup, schema, and linking work (title tags, H1s, schema markup, internal linking, sitemap submission) has been finished and verified — see Strategic Decisions and Page-by-Page Recommendations below for the finalized specs. Remaining open items:*

1. 🔶 Update PR & Media title tag, meta description, H2s, and FAQ content (H1 already updated to "Thought leadership PR for B2B executives"; keep URL as /services/pr-media)
2. ⬜ Write Blog Post #1: How to Rank in ChatGPT
3. ⬜ Write Blog Post #2: SEO Content Strategy (cornerstone)
4. ⬜ Write Blog Post #3: AEO vs SEO
5. ⬜ Write Blog Post #4: GEO vs SEO
6. ✅ Build LinkedIn company page
7. ✅ Add LinkedIn company page to personal profile (link as current position)
8. ✅ Buy/distribute press release announcing S.LAB launch
9. ⬜ Investigate homepage and service pages not rendering correctly in GSC's URL Inspection "Screenshot" tab — diagnose whether this is a JS-rendering/Googlebot rendering issue, a build/deploy timing issue, or expected GSC lag, and fix if it's actually breaking how Google sees the page
10. ✅ Fix GA4 not firing — Astro was rendering the GA4 `<script>` tags as ES modules by default, which scoped `gtag` out of `window` and silently killed the automatic page_view hit. Fixed by adding `is:inline` to both tags in Layout.astro so they render as classic scripts. Needs to be committed/pushed and re-verified in GA4 Realtime after deploy.

---

## Strategic Decisions (Final)

- **Homepage owns the brand.** Service pages own the keyword categories.
- **Homepage H1:** "Drive revenue through AEO." Static. Not animated.
- **Homepage title tag:** `AEO Agency & Content Strategy | Schwartz Marketing Lab`
- **AEO service page URL:** `/services/answer-engine-optimization`
- **S.LAB is not a SaaS marketing agency.** Too broad, wrong buyer expectations.
- **No established search category perfectly describes S.LAB.** "AEO agency" is the most defensible early stake.
- **Executive Authority = owned channels** (LinkedIn, content, thought leadership, ghostwriting). Authority built through what the executive publishes.
- **PR & Media = earned channels** (press, podcasts, publications, expert commentary). Authority built through where the executive appears.
- **saas pr agency** — confirmed positioning mismatch. SERP dominated by traditional PR retainer firms. Do not target.
- **earned media strategy** — confirmed informational intent. SERP is guides and glossaries, not service pages. Use as blog topic, not service page keyword.
- **PR & Media primary keyword:** `thought leadership pr` (150/mo, KD 2). Low volume but near-perfect intent alignment.
- **PR & Media URL:** Keep `/services/pr-media`. Slug change to `/services/thought-leadership-pr` would narrow perceived scope for negligible keyword benefit — title tag and H1 carry the keyword load.

---

## Page-by-Page Recommendations

---

### 1. Homepage — schwartzmarketinglab.com ✅

| Element | Final |
|---|---|
| Title tag | AEO Agency & Content Strategy \| Schwartz Marketing Lab |
| Meta description | Schwartz Marketing Lab helps B2B brands get found in AI search, Google, and modern discovery — through AEO, SEO, content strategy, and authority building. |
| H1 | Drive revenue through AEO. |

**Notes:**
- Title tag carries keyword signal. H1 carries brand/positioning message. These serve different purposes — do not collapse them.
- H1 must render as static text in the DOM. Animated/JS-rendered H1 risks being invisible to Google's crawler.

---

### 2. SEO & AEO — /services/answer-engine-optimization

**Primary keyword:** `answer engine optimization` (3,700/mo, KD 31)
**Supporting:** `aeo agency`, `ai search optimization`, `ai visibility`

| Element | Current | Recommended |
|---|---|---|
| URL | /services/aeo-geo | /services/answer-engine-optimization ✅ done |
| Title tag | SEO & AEO \| Schwartz Marketing Lab | Answer Engine Optimization Services \| Schwartz Marketing Lab |
| Meta description | *(auto-generated)* | Answer engine optimization services that help B2B brands appear in ChatGPT, Google AI Overviews, Perplexity, and traditional search. |
| H1 | Dominate Modern Search. | Answer Engine Optimization That Drives Revenue |

**Recommended H2 structure:**
1. What Is Answer Engine Optimization?
2. Why AEO Matters for B2B Brands
3. AEO vs. SEO: What's Actually Different
4. Where We Help You Appear
5. How We Approach AEO
6. What an AEO Engagement Includes

**Internal links pointing TO this page:**
- Homepage (primary nav)
- Work With Me / Packages (service reference)
- Blog: "How to Rank in ChatGPT" (in-body CTA)
- Blog: "AEO vs SEO" (in-body CTA)
- Blog: "GEO vs SEO" (in-body CTA)

**Internal links leaving FROM this page:**
- Work With Me / Packages (primary CTA)
- About (trust/E-E-A-T)
- Blog: "How to Rank in ChatGPT" (supporting resource)
- Blog: "AEO vs SEO" (supporting resource)

**Recommended FAQ section:**
- What is answer engine optimization?
- How is AEO different from SEO?
- Which AI platforms does AEO target?
- How do I get my brand to appear in ChatGPT and Perplexity?
- Do I need AEO if I already invest in SEO?
- How long does AEO take to show results?

**AEO-specific opportunities:**
- Implement FAQPage schema — these questions are high-value extraction targets for AI Overviews and Perplexity
- H2 "What Is Answer Engine Optimization?" creates a definitional block AI systems can cite directly
- Name all target platforms explicitly (ChatGPT, Perplexity, Claude, Google AI Overviews) — AI citation systems match entity names
- Include a crisp 1–2 sentence definition of AEO early in the page body for featured snippet extraction

**Risks / concerns:**
- `answer engine optimization` at KD 31 is the highest-difficulty primary keyword across all service pages. Rankings will take time. Patience required — this is a long game.
- AEO is still a forming category. Being the definitional source is a compounding advantage. Prioritize clarity and authority in the content.

---

### 3. About Page — /about

**Role:** Brand clarity and E-E-A-T signal. Not a primary acquisition page.

| Element | Current | Recommended |
|---|---|---|
| Title tag | About \| Schwartz Marketing Lab | About Schwartz Marketing Lab — AEO & Content Strategy Agency |
| Meta description | *(auto-generated)* | Quinn Schwartz is a former journalist and AEO strategist who built Schwartz Marketing Lab to help B2B companies get found in AI search and modern discovery systems. |
| H1 | A better kind of agency. | Keep as-is |

**Notes:**
- Founder bio is strong for E-E-A-T: journalism background, 1,000+ bylines, Keystone Press awards. Over time, add specific publication names, client categories, and years of experience — AI systems and Google Quality Raters look for concrete credentials.
- No FAQ needed on this page.

---

### 4. Work With Me — /packages

**Role:** Conversion page. Not a primary organic acquisition target.

| Element | Current | Recommended |
|---|---|---|
| Title tag | Work With Me \| Schwartz Marketing Lab | AEO & Content Strategy Services \| Schwartz Marketing Lab |
| Meta description | *(auto-generated)* | AEO audits, content strategy, and growth partnerships for B2B brands. Every engagement starts with strategy and aligns to your goals. |
| H1 | Modern marketing built for discovery. | Keep as-is |

**Notes:**
- This page receives traffic from service pages, not the other way around. Optimize for conversion, not acquisition.
- No FAQ needed unless a pricing FAQ is added intentionally.

---

### 5. Content Systems — /services/content-systems ✅ FINALIZED

**Primary keyword:** `content marketing consultant` (1,100/mo, KD 0)
**Supporting:** `content strategy services` (1,100, KD 3), `saas content marketing` (1,800, KD 4), `content marketing for saas` (700, KD 6)

| Element | Final |
|---|---|
| URL | /services/content-systems (keep) or /services/content-marketing-consulting (optional improvement — do not hold up implementation) |
| Title tag | Content Marketing Consultant for B2B Brands \| Schwartz Marketing Lab |
| Meta description | B2B content marketing consulting that builds authority and drives qualified demand over time. Content strategy and systems for SaaS and B2B brands. |
| H1 | Content Marketing Consulting That Compounds |

*Meta description character count: 140 — truncation-safe.*

**H1 rationale:** Title tag carries the primary keyword ("content marketing consultant") and B2B audience signal. H1 is free to serve a positioning function. "That Compounds" signals long-game thinking and differentiates S.LAB from agencies selling monthly content calendars. SEO and AEO downside is negligible; differentiation upside is meaningful.

**Recommended H2 structure:**
1. What Is a Content Marketing Consultant?
2. Why B2B Brands Need a Content Strategy, Not Just Content
3. What Content Systems Actually Looks Like in Practice
4. SaaS Content Marketing: Strategy Before Production
5. Content Strategy Services: What's Included
6. Who This Is For

**Page copy requirements — "compounds" must be a real concept, not just a headline:**
- Opening copy must define what compounding content means in concrete terms (e.g., authority assets that generate more qualified demand in month 12 than month 1 without increasing spend)
- Explain how content assets become more valuable over time — search rankings, AI citations, backlinks, and brand authority all accumulate
- Draw a clear contrast between content systems and one-off campaigns or publishing calendars
- Frame S.LAB's approach as building a long-term growth asset, not managing a content schedule
- "Compounds" should appear in the H1 and recur meaningfully in body copy — not just as a headline claim

**Internal links pointing TO this page:**
- Homepage (primary nav)
- Work With Me / Packages (service reference)
- Executive Authority page (content strategy naturally leads to executive authority)
- Blog: "SEO Content Strategy" cornerstone post (in-body CTA)

**Internal links leaving FROM this page:**
- Work With Me / Packages (primary CTA)
- Executive Authority (natural next step: build content systems, then build executive authority)
- About (trust/E-E-A-T)
- Blog: "SEO Content Strategy" (supporting resource)

**Recommended FAQ section:**
- What does a content marketing consultant do?
- How is content strategy different from content production?
- Do you write the content or just provide the strategy?
- What industries do you specialize in?
- How long before content marketing shows results?
- What's the difference between content marketing and SEO?

**AEO-specific opportunities:**
- H2 "What Is a Content Marketing Consultant?" is a direct answer-engine target — this exact question appears in AI Overviews and Perplexity results
- FAQPage schema on the FAQ section
- "Content strategy vs. content production" distinction is a common AI query — dedicate a section to it
- SaaS content marketing is a specific entity with growing search interest — name it explicitly in copy

**Risks / concerns:**
- KD 0 means this page can rank quickly, but rankings will be weak until the domain builds authority. Publish early; let it compound.
- "Consultant" framing may undersell the offering if S.LAB provides hands-on execution. If so, body copy should make that clear — don't let the keyword define the scope of the service.

---

### 6. Executive Authority — /services/executive-authority

**Primary keyword:** `linkedin content strategy` (1,000/mo, KD 1, growing 7.8x)
**Supporting:** `executive branding` (250, KD 0), `executive thought leadership` (150, KD 0), `b2b thought leadership` (300, KD 18)

**Service definition:** Authority built through channels the executive owns — LinkedIn, thought leadership content, positioning, ghostwriting, and personal brand development.

| Element | Recommended |
|---|---|
| URL | /services/executive-authority (keep) |
| Title tag | LinkedIn Content Strategy & Executive Authority \| Schwartz Marketing Lab |
| Meta description | LinkedIn content strategy and executive authority building for B2B leaders. Turn expertise into industry visibility, credibility, and inbound demand. |
| H1 | LinkedIn Content Strategy That Builds Executive Authority |

*Meta description character count: 140 — truncation-safe.*

**URL note:** Keep `/services/executive-authority`. Changing to `/services/linkedin-content-strategy` would narrow the page's perceived scope and undermine the structural decision to position LinkedIn as the channel, not the offering.

**Recommended H2 structure:**
1. Why Executive Authority Is a Growth Asset
2. LinkedIn as the Primary Channel for B2B Authority
3. What Executive Thought Leadership Actually Requires
4. How We Build Your LinkedIn Content Strategy
5. Beyond LinkedIn: Executive Branding Across Channels
6. Who This Is For

**Internal links pointing TO this page:**
- Homepage (primary nav)
- Work With Me / Packages (service reference)
- Content Systems page (content strategy is a natural precursor)
- PR & Media page (complement: owned channels → earned channels)

**Internal links leaving FROM this page:**
- PR & Media (natural next step: once you build owned authority, amplify it through earned channels)
- Work With Me / Packages (primary CTA)
- About (trust/E-E-A-T)

**Recommended FAQ section:**
- What is LinkedIn content strategy?
- How do I build executive thought leadership on LinkedIn?
- What's the difference between executive branding and personal branding?
- How often should executives post on LinkedIn?
- Do you write the LinkedIn content or just advise on strategy?
- What results should I expect from an executive authority program?

**AEO-specific opportunities:**
- "What is LinkedIn content strategy?" and "What is executive thought leadership?" are common AI Overview query targets — definitional H2s make these extractable
- FAQPage schema on all FAQ items
- Entity chain to establish: LinkedIn → executive authority → B2B thought leadership → inbound demand. AI systems understand this relationship — make it explicit in copy.
- "Executive branding" and "executive thought leadership" are both KD 0 — this page can rank for a cluster of low-competition terms simultaneously

**Risks / concerns:**
- The structural risk: keyword targeting for "linkedin content strategy" could pull the page copy into tactical LinkedIn advice (posting frequency, content formats, hashtags) rather than strategic authority building. Keep copy focused on the *outcome* (authority, visibility, inbound) not the mechanics (posts, carousels, hooks).
- `b2b thought leadership` at KD 18 is the highest-difficulty supporting term. Treat it as a long-term target, not a quick win.

---

### 7. PR & Media — /services/pr-media

**Primary keyword:** `thought leadership pr` (150/mo, KD 2)
**Supporting:** `executive visibility`, `earned media strategy`, `media placements`

**Service definition:** Authority built through channels the executive does not own — press features, podcast appearances, expert commentary, earned media coverage, and third-party publication.

| Element | Recommended |
|---|---|
| URL | /services/thought-leadership-pr (change from current if needed) |
| Title tag | Thought Leadership PR & Earned Media \| Schwartz Marketing Lab |
| Meta description | Thought leadership PR for B2B executives and founders. Media placements, expert commentary, and earned media coverage that build lasting authority. |
| H1 | Thought Leadership PR for B2B Executives |

*Meta description character count: 138 — truncation-safe.*

**URL note:** Keep `/services/pr-media`. Changing to `/services/thought-leadership-pr` would narrow the perceived scope of the service for negligible keyword benefit — title tag and H1 carry the keyword load.

**Recommended H2 structure:**
1. What Is Thought Leadership PR?
2. Thought Leadership PR vs. Traditional PR: The Difference
3. Earned Media vs. Owned Content: Why Both Matter
4. How We Build Your Executive Visibility
5. Where We Place You: Media, Podcasts, Publications
6. Who This Is For

**Internal links pointing TO this page:**
- Homepage (primary nav)
- Work With Me / Packages (service reference)
- Executive Authority page (natural complement: build owned authority, then earn external coverage)

**Internal links leaving FROM this page:**
- Executive Authority (complement: if they don't have owned authority yet, they need this first)
- Work With Me / Packages (primary CTA)
- About (trust/E-E-A-T)

**Recommended FAQ section:**
- What is thought leadership PR?
- How is thought leadership PR different from traditional PR?
- How do you get executives featured in press and podcasts?
- What's the difference between earned media and paid media?
- Do I need a strong LinkedIn presence before pursuing PR?
- How long does it take to get media placements?

**AEO-specific opportunities:**
- "What is thought leadership PR?" is an underserved AI query — there is no dominant definitional source. This is a first-mover AEO opportunity. Write a clear, citable definition.
- The "thought leadership PR vs. traditional PR" distinction is a high-value comparison query that AI systems frequently surface. Dedicate a full H2 section to it with a clear answer.
- FAQPage schema on all FAQ items
- Explicitly name the types of earned media placements (trade press, tier-1 business media, industry podcasts, expert roundups) — specificity increases citation probability

**Risks / concerns:**
- Volume is low (150/mo). This page will not be a high-traffic acquisition asset. Its value is authority signal, AEO citation potential, and closing leads who arrive through other pages. Set expectations accordingly.
- "Executive visibility" as a supporting term sits near the Executive Authority page's territory. Ensure Executive Authority copy focuses on *building* visibility (owned channels), while PR & Media copy focuses on *amplifying* visibility (earned channels). The distinction must be clear to avoid internal confusion about which page to send prospects to.
- This page is better suited as an AEO/credibility asset than a volume driver. Prioritize content quality and citation-worthiness over raw keyword optimization.

---

## Blog Content Strategy

| Priority | Keyword | Vol | KD | Notes |
|---|---|---|---|---|
| 1 | `how to rank in chatgpt` | 600 | 2 | 38.6x growth. Easiest early win. Write first. |
| 2 | `aeo vs seo` | 1,900 | 16 | 25.2x growth. Category-defining. Maps directly to service page. |
| 3 | `geo vs seo` | 2,600 | 20 | 18.8x growth. Pairs with #2. Completes the AEO/GEO trilogy. |
| 4 | `seo content strategy` | 3,700 | 12 | Traffic potential 505,000. Massive cluster. Write 4th — benefits from domain age. |
| 5 | `ai search optimization` | 4,800 | 48 | High volume, growing fast. Long-term play. |

**Order rationale:** Posts 1–3 establish category ownership in AEO/GEO and drive traffic directly to the SEO & AEO service page. SEO Content Strategy (post 4) is the bigger resource investment and benefits from the domain having some authority before competing at KD 12. Traffic potential alone is not sufficient reason to front-load it on a new domain.

**Supporting terms:**
- `optimize for chatgpt` (150 vol)
- `answer engine optimization vs seo` (100 vol)
- `ai visibility strategy` (80 vol, KD 2)

**Blog → service page internal link targets:**
- "How to Rank in ChatGPT" → SEO & AEO service page
- "AEO vs SEO" → SEO & AEO service page
- "GEO vs SEO" → SEO & AEO service page
- "SEO Content Strategy" → Content Systems page

---

## Positioning Research Notes

No established search category perfectly describes S.LAB. Terms researched and ruled out:

- `saas marketing agency` — wrong buyer expectations (paid media, RevOps, lifecycle)
- `saas pr agency` — confirmed SERP mismatch: traditional PR retainer firms dominate
- `earned media strategy` — confirmed informational intent: guides and glossaries, not service pages
- `organic growth consultant` — no search volume
- `organic growth agency` — 40/mo, too low
- `growth consultant` — 250/mo, KD 0, but implies paid/product-led growth
- `search visibility consultant` — no search volume

**Conclusion:** "AEO agency" remains the most defensible early category claim. Brand positioning stays intentionally broader than any single keyword target. Revisit as the category matures.

---

## Open Questions / Still To Do

- ✅ FAQ accordion converted to always-visible text on all FAQ sections sitewide (homepage, Packages, and all four service pages) — answers now render flat with `<h3>` question headings instead of collapsed behind a click. `FAQPage` JSON-LD schema kept as-is (unaffected by the markup change). FAQ copy was also reviewed and tightened for direct-answer-first structure during the same pass (two PR & Media answers rewritten to lead with the direct response).
- ⬜ Investigate building a free AEO audit page — evaluate as a lead generation asset, keyword opportunity, and AEO citation target
- ⬜ Deeper keyword research for Case Studies page
- ⬜ Build a full content cluster strategy — pillar topics, supporting subtopics, entity/evidence mapping, and internal linking structure, before scaling blog production beyond the four posts already queued above (this now also covers the `seo content strategy` cluster research)
- ⬜ Explore running an original-data survey (in the spirit of the GRIN case study) as a citation-worthy research asset for AEO/PR — needs scoping: topic, audience, sample size, distribution method
- ⬜ Copy pass needed on below-the-fold sections across pretty much every major page (homepage, all four service pages, About, Packages) — the above-the-fold copy and headlines have gotten focused attention through this optimization process, but lower-page sections (deeper body copy, supporting paragraphs, secondary CTAs) haven't had the same scrutiny and likely need a dedicated review pass
