# PostHog

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-29. Key interpretive cautions: (1) this is the most extreme single-driver concentration finding in the entire study — one keyword ("posthog") across 54 country/location variants, held at position 1 in both the previous and current snapshots (position never changed), accounts for roughly 95% of the net keyword-level gain and 87% of the net page-level gain; the traffic surge is best read as evidence of underlying demand growth for the brand name, not an SEO or content achievement; (2) the inference that underlying search volume for "posthog" grew is derived from traffic-at-constant-position, not a directly observed volume time series — the keyword export does not include a "previous search volume" field; this is flagged explicitly as an inference, not a verified number; (3) the traffic growth tracks the company's ARR growth curve (roughly doubling YoY) and two funding events (Series D $70M Jun 2025; Series E $75M Oct 2025) — but the monthly traffic series is near-monotonic with no sharp inflection tied precisely to either funding date; the funding/ARR correlation is suggestive, not a tightly-timed causal demonstration; (4) this is the first case in the study where the dominant explanation is "the company itself got much better known," with organic search acting as a passive mirror of that growth rather than a lever actively pulled; (5) the Validated ranking-position-bucket-collapse pattern (corroborated at Rippling, Navan, Harness, Vanta) does NOT clearly recur here — long-tail position shrinkage is minor and secondary to the brand-keyword story; this non-recurrence is recorded as evidence that the pattern may be specific to broad-content-driven growth shapes, not universal. Do not upgrade Record Status without recomputing from source exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | PostHog |
| **Website** | posthog.com |
| **Category** | Product Analytics / Product Management |
| **Business Model** | B2B SaaS (open source / product-led growth) |
| **Dominant Content Model** | Brand/homepage-led with secondary developer-targeted persona content ("product-engineers" cluster) |
| **Company Size** | ~202 employees (May 2026); $1.4B valuation (unicorn, Oct 2025); ~$57.5M ARR (Feb 2026, +99% YoY) |
| **Study Window** | 2025-01 to 2026-06 |
| **Analysis Date** | 2026-06-29 |
| **Record Finalized Date** | 2026-07-28 |
| **Last Verified Date** | — |
| **Methodology Version** | V2.3 |
| **Record Status** | Draft |
| **Migration Validation Stage** | Migrated — not revalidated |
| **External Use Status** | Internal only |
| **Data Provenance** | Ahrefs Export |
| **Calculation Verified** | Partial |
| **Measurement Reliability** | Medium — ~17% cross-export 'Previous' snapshot gap (largest in batch); core finding (search-volume growth for 'posthog' keyword) is inferred from traffic-at-constant-position, not a directly observed volume time series; current-side reconciliation is strong (within ~0.4% of Pass 2) |

*Company note: PostHog raised a $70M Series D at a $920M valuation announced June 9, 2025 — led by Stripe, originating from Stripe co-founder/CEO Patrick Collison's tweet that PostHog's site "was cool." A further $75M Series E at a $1.4B valuation followed October 2025 (led by Peak XV Partners), making PostHog a unicorn within the study window. ARR roughly doubled year-over-year: estimated ~$28.9M (Feb 2025) to ~$57.5M (Feb 2026, +99% YoY; source: Sacra). No leadership change, layoff, or pricing event was found and none was investigated further (no plausible link to the observed pattern beyond the funding/ARR growth already documented). Category baseline: 7 of 14 Product Analytics/Product Management companies grew; PostHog leads at +131.4%; closest comparator Mixpanel +84.8% via the same "Continuous Acceleration" trajectory label — PostHog's rate is ~1.5x Mixpanel's, meaning a category tailwind alone does not explain the gap.*

---

## Outcome Summary

*All figures carried from original analysis.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 77,411 | Ahrefs Performance export, Jan 2025 |
| Ending Traffic Estimate | 179,118 | Ahrefs Performance export, Jun 2026 |
| Traffic Change % | +131.4% | Calculation Log (Carried) |
| Outcome Classification | Grew | ±10% threshold |
| Traffic Value Change | $326,692 → $656,176 (+100.9%) | Ahrefs Pass 2 (Carried) |
| Referring Domains Change | 3,725 → 18,299 (+391.2%) | Ahrefs Pass 2 (Carried) |

**Data quality note:** Endpoint verification: the perf file's own Jun 2026 row (179,118) matches Pass 2 exactly. Top Pages sums (64,438 → 178,441) and Organic Keywords sums (64,181 → 178,395) closely match each other and the Pass 2 Jun 2026 endpoint (within ~0.4%) — strong reconciliation on the current side. Both exports' "Previous" totals run about 17% below Pass 2's Jan 2025 figure (77,411) — the largest cross-export snapshot-date gap in this study batch, but immaterial to the share-based findings (which are internal ratios within each export, not absolute comparisons across exports). The share calculations (branded/non-branded split, single-keyword concentration) are robust to this gap.

**Traffic vs. value note:** TV grew +100.9% vs. traffic +131.4% — a moderate ~30 pp divergence. The new traffic is overwhelmingly concentrated in brand-navigational queries ("posthog" across country variants), which carry lower CPC than commercial purchase-intent queries. TV growth roughly tracks the company's underlying ARR growth rate (+99% YoY), consistent with the interpretation that organic search is mirroring business momentum rather than independently driving conversions.

**RD/traffic divergence:** RDs grew +391.2% vs. traffic +131.4% — a roughly 3.0x ratio, between Vanta's 3.2x and Navan's 5.1x. Distribution: the top 10 pages hold ~42.8% of total referring-domain BBL RDs, led by /privacy (7,347, first seen 2021) and the homepage (6,892, first seen 2020) — both well-predating the study window, consistent with legacy authority accumulation rather than a new link-building campaign. One notable new page, /deskhog (288 RD, first seen June 2025), is tied to a hardware side-project publicized around the funding news but is too small to be a material contributor.

**Category context:** Product Analytics/Product Management is split positive: 7 of 14 companies grew, including PostHog (+131.4%) and Mixpanel (+84.8%), both via "Continuous Acceleration." The 7 laggards include Aha! (-42.4%), ProductPlan (-60.0%), Userpilot (-81.2%), and Whatfix (-91.3%) — the latter group skewing toward product-management tooling rather than core analytics, suggesting some category-level tailwind in product analytics specifically. PostHog's rate is still ~1.5x Mixpanel's, ruling out category tailwind as a full explanation.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Continuous Acceleration |
| **Peak Month** | 2026-06 (study-window high; also all-time historical high based on available data) |
| **Peak Traffic Estimate** | 179,118 |
| **Trough Month** | 2025-01 (study-window opening) |
| **Trough Traffic Estimate** | 77,411 |
| **Primary Inflection Date** | No discrete inflection — near-monotonic climb across the entire 18-month window; the one mildly notable acceleration is Aug→Sep 2025 (+19% in one month, roughly 2-3 months after the Jun 9 Series D), but it is not dramatically distinguishable from the broader trend |
| **Current Direction** | Growing (Jun 2026 = all-time high at window-close) |

*Near-monotonic climb from Jan 2025 (77,411) to Jun 2026 (179,118), with only minor month-to-month dips: Jun→Aug 2025 (106,737), Oct 2025 (126,693, after Sep peak of 127,462), and Mar→Apr 2026 (159,158, after Mar peak of 160,326). These dips are small and do not constitute phase breaks — the overall shape is genuine continuous acceleration with no discrete sharp step-change.*

*Monthly series: Jan 2025: 77,411 → Feb: 81,865 → Mar: 84,526 → Apr: 91,552 → May: 97,545 → Jun: 104,593 → Jul: 110,406 → Aug: 106,737 → Sep: 127,462 → Oct: 126,693 → Nov: 132,033 → Dec: 127,610 → Jan 2026: 141,784 → Feb: 154,797 → Mar: 160,326 → Apr: 159,158 → May: 176,675 → Jun: 179,118.*

*The overall shape tracks the company's ARR growth curve (roughly doubling YoY) more closely than it tracks either specific funding announcement date. Neither the Series D (Jun 9, 2025) nor the Series E (Oct 2025) lines up with a sharp, discrete traffic inflection — both are absorbed into the smooth continuous trend.*

*Position-bucket note: Unlike the four prior "Continuous Acceleration" cases (Rippling, Navan, Harness, Vanta), PostHog does NOT show a dramatic long-tail position collapse. Positions 21-50 actually grew from 8,411 to a peak of 851 (Dec 2025) before partially recovering; positions 51+ fell from 14,406 to 7 — a real decline but proportionally smaller relative to the much larger position 1-3 gain (816 → 1,493) than in prior cases, and clearly secondary to the brand-keyword story. This non-recurrence is recorded in field 13 and interpreted as evidence that the position-bucket-collapse pattern may be specific to broad-content-driven growth shapes, not growth in general.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Demand Expansion |
| **Mechanism Pathway** | Business and brand-demand expansion (Series D $70M Jun 2025; Series E $75M Oct 2025; ARR +99% YoY) → higher search volume for 'posthog' across 54 country markets at stable position 1 (position never changed) → homepage-led traffic growth reflecting brand awareness growth, not SEO execution (+131.4%) |
| **Mechanism Structure** | Single-phase; near-monotonic; brand-search-volume growth concentrated almost entirely in the keyword "posthog" itself (held at position 1 in both snapshots across 54 country/location variants — ranking position never changed); the traffic increase is best read as evidence of underlying demand growth for the brand name as the company became better known, not an SEO or content achievement; the growth tracks the company's ARR growth curve and two funding rounds (Series D Jun 2025, Series E Oct 2025) as two parallel symptoms of the same underlying driver, rather than either causing the other |
| **Contributing Mechanisms** | Content Quality (secondary, small) — a modest "product-engineers" persona-targeted content cluster contributed low thousands of traffic (individual post gains: /product-engineers/churn-rate-vs-retention-rate +539, /product-engineers/what-is-multivariate-testing-examples +373, /product-engineers/aarrr-pirate-funnel +365) and small navigational-page gains; small losses in older blog comparison/listicle content. Neither contributor is material relative to the brand-keyword surge |
| **Mechanism Confidence** | High — the concentration finding is unusually clean and well-isolated: position held constant across 54 markets, single keyword explains ~95% of net keyword-level gain, homepage explains 87% of net page-level gain; no competing SEO/content explanation accounts for more than a small fraction of the observed growth |
| **Confidence Rationale** | (1) Single-keyword concentration: "posthog" keyword (54 country/location variants: US/34k vol, IN/16k, GB/8k, RU/7.1k, DE/5.8k, FR/5.8k, CA/5.2k, BR/4.7k...) held position 1 in essentially every market in both previous and current snapshots — ranking did not change; combined traffic rose from 51,417 to 159,914 (+108,497), roughly 95% of the entire net keyword-level gain. (2) Page-level confirmation: homepage alone grew 47,739 → 146,624 (+98,885) = 87% of the site's entire net Top Pages gain. (3) Branded/non-branded split: branded traffic +186.9% (net +110,389) = ~97% of net keyword-level gain; non-branded grew only +74.6% (net +3,825) — the most lopsided branded/non-branded split in this study, inverse of the broad-content/non-branded-led cases (Braze, Navan, Harness, Vanta). (4) Business momentum corroboration: two confirmed funding rounds (Series D Jun 9, 2025; Series E Oct 2025) and ARR roughly doubling (+99% YoY) independently confirm the company was genuinely growing at a comparable rate — organic search is a passive mirror, not an independent lever. |
| **Strongest Competing Explanation** | Category tailwind: 7 of 14 product analytics companies grew, including Mixpanel at +84.8% via the same trajectory label — but PostHog's rate is ~1.5x Mixpanel's, requiring company-specific factors beyond a shared category environment. Algorithm Update: weak — near-monotonic growth with no sharp inflection rules out a discrete update-driven step-change. |
| **Disconfirming Evidence** | Nothing materially contradicts the primary mechanism. The absence of a long-tail position-bucket collapse (unlike the 4 prior continuous-acceleration cases) is consistent with rather than contradicting the brand-demand explanation: position-bucket collapse appears specific to broad-content-driven growth shapes, not growth in general. |
| **Algorithm Alignment** | None — smooth continuous growth with no sharp inflection rules out a discrete algorithm-update cause |
| **AIO Portfolio Susceptibility** | Low — ~95% of PostHog's growth traces to the single brand-navigational keyword "posthog" held at constant position 1; brand-navigational queries have a different SERP-feature profile than generic informational queries AI Overviews typically intercept; the secondary "product-engineers" content cluster was too small in this window to serve as a meaningful AI-Overview test case |
| **AIO Presence Observed** | Not tested — no direct AI Overview presence/absence check run for PostHog; brand-navigational queries at position 1 generally do not show AI Overviews; the secondary persona content cluster was not large enough to constitute a meaningful test |
| **AIO Observed Effect** | Not tested |

---

## Gross-Loss Offset Analysis

*Cannibalization rate not formally computed in the original analysis (gross loss figures not extracted). However, available data indicates a very low rate.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | Not formally computed | — |
| Gross Loss (absolute) | Not formally computed; identified largest losers: /blog/best-open-source-analytics-tools -494, /blog/best-open-source-feature-flag-tools -361, /blog/posthog-vs-plausible -111, /blog/posthog-vs-amplitude -58 — all minor relative to the homepage gain (+98,885) | Ahrefs Top Pages export |
| Net Change | +114,003 (Top Pages: 64,438 → 178,441) | Ahrefs Top Pages |
| Gross-Loss Offset Rate | Not formally computed — estimate: clearly Healthy zone (<30%); gross losses are very small relative to the dominant homepage/brand-keyword gain; all identified losers total <1,100 traffic against +114,003 net | — |
| Offset Zone | Estimate: Healthy (<30%) | — |
| Reconciliation check | Top Pages sums (64,438 → 178,441) and Keywords sums (64,181 → 178,395) match each other within 0.2% on both sides; both track Pass 2 Jun 2026 endpoint within ~0.4% | — |

*Gross-Loss Offset interpretation: The losses are concentrated in older blog comparison/listicle content (open-source tool roundups, vs-competitor posts) and a few docs pages. This content type is plausibly losing to AI tools and browsing-behavior shifts rather than a ranking problem internal to the site. The losses are minor relative to the dominant brand-keyword surge and do not indicate a structural content-quality problem.*

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | Homepage: 47,739 → 146,624 (+98,885 = approximately 87% of Top Pages net gain) | Ahrefs Top Pages export |
| Top 2 Page Traffic Share | Other navigational gainers are modest by comparison; next largest: /product-analytics (+2,507), /pricing (+1,992), /about (+1,501), /web-analytics (+1,395), /docs (+1,315), /careers (+1,227) — all consistent with brand traffic spillover into adjacent navigational pages | Ahrefs Top Pages export |
| Top 5 Page Traffic Share | Not formally computed; top 6 navigational gainers combined add ~9,800 traffic against homepage's +98,885 | — |
| Dominant Content Type | Homepage and brand-navigational pages; secondary: "product-engineers" persona-targeted definitional/educational posts | Ahrefs Top Pages export |
| Winning Content Type | Homepage (+98,885); navigational pages (/product-analytics, /pricing, /about, /web-analytics, /docs, /careers — small absolute gains, consistent with brand-traffic spillover); "product-engineers" persona content cluster (/product-engineers/churn-rate-vs-retention-rate +539, /product-engineers/what-is-multivariate-testing-examples +373, /product-engineers/aarrr-pirate-funnel +365 — real but minor) | Ahrefs Top Pages export |
| Losing Content Type | Older blog comparison/listicle content: /blog/best-open-source-analytics-tools -494, /blog/best-open-source-feature-flag-tools -361, /blog/posthog-vs-plausible -111, /blog/posthog-vs-amplitude -58; a few docs pages | Ahrefs Top Pages export |
| New-URL Gain Share | No new-URL driven gain identified as material; growth is from existing URLs, primarily the homepage | — |
| Page Replacement Pattern | Not a replacement pattern — brand-demand surge lifting an existing homepage; no structural content category replaced or displaced | — |
| Notable patterns | **Extreme single-keyword brand concentration:** "posthog" keyword (54 country/location variants) explains ~95% of net keyword-level gain and ~87% of net page-level gain at constant position 1 — the most extreme single-driver concentration in the study. **Homepage as near-total site growth:** +98,885 homepage gain = 87% of Top Pages net; every other page is a distant secondary contributor. **Branded/non-branded split:** branded +186.9% (net +110,389 = ~97% of net keyword-level gain); non-branded +74.6% (net +3,825 = ~3%) — the most lopsided split in the study; directly inverse of the broad-content/non-branded-led pattern (Braze, Navan, Harness). **Position-bucket collapse absent:** unlike all four prior Continuous Acceleration cases, long-tail position decline is minor and secondary to the brand story — positions 21-50 shrank only mildly in absolute terms; this is the first continuous-acceleration case without a strong corroborating position-bucket signal. **Category entities present but immaterial:** perf file tracks four entities (GitHub/296, Redditplug/333, Cloudflare/118, turbogeek.org/72) — checked and confirmed immaterial to the net change; "GitHub" and "Cloudflare" terms are unrelated educational/comparison content, not brand-adjacent. | Ahrefs Top Pages + keyword + position-bucket data |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | Not applicable — growing throughout; no trough requiring recovery (trough is the study-window opening, Jan 2025) |
| **Recovery Mechanism** | N/A |
| **Recovery Confidence** | N/A |
| **Recovery Notes** | Jun 2026 endpoint (179,118) is an all-time high. The window opens at the effective trough. No recovery from a prior decline is involved in this case. |

---

## AI Discoverability

| Field | Value |
|-------|-------|
| **Measured** | No |
| **Analysis Date** | — |
| **Data Source(s)** | — |
| **AI Visibility Strength** | Unknown |
| **AI Discoverability Trend** | Unknown |
| **Trend Compared To** | N/A |

*Note: AI Observation Protocol not yet run. Priority queries if run: "What is PostHog?", "PostHog vs Mixpanel", "PostHog vs Amplitude", "open source product analytics", "product analytics for engineers" — the last two to test whether the "product-engineers" content cluster generates AI citations despite its relatively small traffic contribution.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | High — PostHog's brand-navigational homepage traffic directly serves brand-aware buyers evaluating a product analytics platform; the persona-content cluster ("product-engineers") is tightly audience-matched; the brand-demand surge reflects genuine business momentum, not artificial or incidental traffic |
| **Best-Fit Client Type** | Fast-growing B2B SaaS companies trying to understand why their organic traffic numbers are rising; clients who suspect their SEO program is driving growth that is actually being driven by their business momentum (brand awareness, funding news, ARR growth) |
| **Best-Fit Problem** | "Our organic traffic is growing fast — is this SEO or something else?" / "How do we tell the difference between SEO-driven traffic and brand-awareness-driven traffic?" / "Our VC partner says our organic growth is a competitive moat — is it?" |
| **Relevance Conditions** | Client has experienced rapid company-level growth (funding, revenue, press coverage) and is wondering how much credit organic search deserves; client is evaluating whether to invest more in SEO content vs. brand/PR; client needs an example of a "passive organic mirror" pattern to compare against an "active content lever" pattern |
| **Non-Comparable When** | Client is not already well-known; client needs organic growth that can be attributed to a specific, replicable SEO or content tactic; client wants to extract a content playbook from this case (there is none — the growth is brand-demand driven, not content driven) |
| **Primary Lesson** | The single largest traffic-growth case in this study was driven almost entirely by more people searching the company's own name — not by any ranking improvement, new page, or content tactic. When a brand keyword's position never changes but its traffic surges across dozens of country markets simultaneously, the most defensible explanation is underlying demand growth, not SEO execution. A company's business momentum (funding, ARR, awareness) and its organic search numbers can move together as two symptoms of the same cause, without either one causing the other in a way a content or SEO program could reproduce. |
| **Secondary Lesson** | Organic traffic figures can be deeply misleading as indicators of SEO program performance when a company is experiencing rapid brand-awareness growth. Branded/non-branded segmentation reveals what raw traffic numbers conceal: here, non-branded traffic (+74.6%) grew roughly 2.5x slower than branded traffic (+186.9%), and a full ~97% of net keyword-level gains were brand-navigational. Standard "organic traffic grew +131%" framing would dramatically overstate the role of SEO/content work. |
| **Evidence Use** | Cautionary (do not over-credit organic traffic growth as an SEO achievement when brand-demand is the primary driver); Comparative (against Mixpanel's +84.8% to show company-specific factors beyond a shared category tailwind); Methodological (branded/non-branded segmentation as a diagnostic for identifying brand-demand vs. content-driven growth) |
| **Evidence Basis** | Based on Ahrefs Top Pages, organic keywords, performance, position-bucket, and backlinks exports covering January 2025 through June 2026. No formal gross-loss offset rate computation. AIO Presence not tested (brand-navigational queries; no direct check run). Funding events and ARR corroborated via Crunchbase News, Built In SF, FinSMEs, Sacra (via WebSearch). All traffic figures are Ahrefs third-party estimates. |

---

## Risk Flags

- **Search-volume inference, not direct observation:** The inference that underlying search demand for "posthog" grew (the core finding) is derived from traffic-at-constant-position, not a directly observed volume time series — the keyword export does not include a "previous search volume" field. This is the primary data limitation: if PostHog's rankings improved on some volume variants not captured in the export, the picture could be more SEO-driven than it appears. Assessed as unlikely given position-1 dominance across 54 markets, but not verifiable from available data.
- **No discrete triggering event identified:** Unlike Vanta's product-launch case with a dateable event and three corroborating evidence lines, PostHog's smooth continuous growth makes a precise causal demonstration impossible — the funding/ARR correlation is suggestive, not tight.
- **Cross-export "Previous" snapshot gap:** Both Top Pages and Organic Keywords exports' "Previous" totals run ~17% below Pass 2's Jan 2025 figure — the largest such gap in this batch; immaterial to share-based findings but worth noting for any future recomputation of absolute figures.
- **Cannibalization rate not formally computed:** The Healthy estimate is based on the identified individual losers (small absolute values), not a full gross gain/gross loss computation from Top Pages.
- **AI Observation Protocol not run:** No AI-tool citations checked.
- **No Search Console data:** No CTR, impressions, or position confirmation at the query level.

---

## Related Documents

- Comparison briefs: related to `comparison-briefs/userpilot-posthog.md` (PostHog appears as the growth comparison anchor in the Userpilot vs. PostHog divergence analysis — same category, same window, opposite outcomes)
- Synthesis documents: `synthesis-matrix.md`
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (lines 1510–1637); Product Analytics / Product Management category; Q1 (growth case — "sustained acceleration after already successful, but via a mechanism not yet seen elsewhere in this study: growth concentrated almost entirely in the brand keyword itself, rather than in content breadth")

---

## Calculation Log

*All values carried from original analysis.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Performance export | Starting 77,411 (Jan 2025); Ending 179,118 (Jun 2026) | All | (179,118 − 77,411) / 77,411 | +131.4% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 | Starting $326,692; Ending $656,176 | All | (656,176 − 326,692) / 326,692 | +100.9% | Carried |
| Referring Domains Change % | Ahrefs Pass 2 | Starting 3,725; Ending 18,299 | All | (18,299 − 3,725) / 3,725 | +391.2% | Carried |
| "posthog" keyword combined traffic (previous) | Ahrefs Keywords export | 54 country/location variants | Brand keyword | Sum across variants | 51,417 | Carried |
| "posthog" keyword combined traffic (current) | Ahrefs Keywords export | 54 country/location variants | Brand keyword | Sum across variants | 159,914 | Carried |
| "posthog" keyword net gain | Derived | 159,914 − 51,417 | Brand keyword | Direct | +108,497 | Carried |
| "posthog" keyword % of net keyword gain | Derived | 108,497 / (178,395 − 64,181) | Single keyword / net | 108,497 / 114,214 | ~95% | Carried |
| Branded traffic (previous) | Ahrefs Keywords export, Branded flag | Branded = Yes | Branded keywords | Sum | 59,052 | Carried |
| Branded traffic (current) | Ahrefs Keywords export, Branded flag | Branded = Yes | Branded keywords | Sum | 169,441 | Carried |
| Branded traffic change % | Derived | (169,441 − 59,052) / 59,052 | Branded keywords | Direct | +186.9% | Carried |
| Non-branded traffic (previous) | Ahrefs Keywords export, Branded flag | Branded = No | Non-branded keywords | Sum | 5,129 | Carried |
| Non-branded traffic (current) | Ahrefs Keywords export, Branded flag | Branded = No | Non-branded keywords | Sum | 8,954 | Carried |
| Non-branded traffic change % | Derived | (8,954 − 5,129) / 5,129 | Non-branded keywords | Direct | +74.6% | Carried |
| Branded % of net keyword gain | Derived | (169,441 − 59,052) / (178,395 − 64,181) | Branded / total net | 110,389 / 114,214 | ~97% | Carried |
| Homepage traffic (previous) | Ahrefs Top Pages | Homepage row | Homepage | Direct read | 47,739 | Carried |
| Homepage traffic (current) | Ahrefs Top Pages | Homepage row | Homepage | Direct read | 146,624 | Carried |
| Homepage net gain | Derived | 146,624 − 47,739 | Homepage | Direct | +98,885 | Carried |
| Homepage % of Top Pages net | Derived | 98,885 / (178,441 − 64,438) | Homepage / Top Pages net | 98,885 / 114,003 | ~87% | Carried |
| Top Pages net | Ahrefs Top Pages | Previous 64,438; Current 178,441 | All | 178,441 − 64,438 | +114,003 | Carried |
| Keywords net | Ahrefs Keywords export | Previous 64,181; Current 178,395 | All | 178,395 − 64,181 | +114,214 | Carried |
| Aug→Sep 2025 acceleration | Monthly perf file | Aug 2025: 106,737; Sep 2025: 127,462 | All | (127,462 − 106,737) / 106,737 | +19% | Carried |
| Top 10 pages RD share | Ahrefs BBL | Top 10 pages by RD / total RDs | Top 10 pages | Direct compute | ~42.8% of total RDs | Carried |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Performance export | Monthly traffic series (provided as monthly perf file) + entity tracking + position-bucket data | CSV | Jan 2025 – Jun 2026 | Authoritative source for monthly trajectory. Jun 2026 row (179,118) matches Pass 2 exactly. |
| Ahrefs Top Pages export | Top ranking pages with previous and current traffic | CSV | Jan 2025 – Jun 2026 | Previous sum 64,438; current sum 178,441; current side within ~0.4% of Pass 2 endpoint. Previous totals ~17% below Pass 2 Jan 2025 figure — largest cross-export snapshot-date gap in this batch. |
| Ahrefs Organic Keywords export | All ranking keywords with SERP features column, Branded flag, Previous/Current URL | CSV | Jan 2025 – Jun 2026 | Source of branded/non-branded split and single-keyword concentration finding. Previous totals ~17% below Pass 2 Jan 2025 figure — same gap as Top Pages. |
| Ahrefs Best by Links (BBL) export | Per-page backlinks/referring domains, first-seen dates | CSV | As of Jun 2026 | Source of /privacy (7,347 RD, first seen 2021) and homepage (6,892 RD, first seen 2020) legacy-authority finding; /deskhog (288 RD, first seen Jun 2025) confirmed immaterial. |
| WebSearch (off-content events) | Series D ($70M, $920M val, Jun 9, 2025 — via Patrick Collison tweet), Series E ($75M, $1.4B val, Oct 2025 — Peak XV Partners), ARR estimates (~$28.9M Feb 2025 → ~$57.5M Feb 2026, +99% YoY via Sacra), employee count (202, May 2026) | Web | 2025–2026 | Sources: Crunchbase News, Built In SF, FinSMEs (Series D), Sacra (ARR). No leadership change, layoff, or pricing event found. |

---

## Narrative

### Company Overview

PostHog is an open source product analytics platform built for product engineers, founded in 2020. It raised a $70M Series D at a $920M valuation in June 2025 (led by Stripe, originating from CEO Patrick Collison's tweet) and a $75M Series E at a $1.4B valuation in October 2025 (led by Peak XV Partners) — becoming a unicorn within the study window. ARR roughly doubled year-over-year, from an estimated ~$28.9M (February 2025) to ~$57.5M (February 2026, +99% YoY). As of May 2026, the company had 202 employees. No leadership change, layoff, or pricing event was found in or near the study window.

### Traffic Trajectory

Organic estimated traffic grew from 77,411 (January 2025) to 179,118 (June 2026), +131.4% net — the single largest traffic-growth rate of any company reviewed in this study. The interior shape is a genuine, near-monotonic climb across the entire 18-month window, with only minor month-to-month dips (Jun→Aug 2025; Oct 2025; Mar→Apr 2026). There is no single sharp discontinuity tying precisely to either funding announcement. The one mildly notable acceleration — Aug→Sep 2025 (+19% in one month) — occurs roughly 2-3 months after the Series D but is not dramatically distinguishable from the broader trend. June 2026 closes at an all-time high.

### Mechanism Analysis

**Primary mechanism (High confidence):** A brand-search-demand surge concentrated almost entirely in the keyword "posthog" itself, across 54 country and location variants, held at position 1 in both the previous and current snapshots — the position never changed. The combined traffic on this keyword alone rose from 51,417 to 159,914 (+108,497), accounting for roughly 95% of the entire net keyword-level gain across the whole site. At the page level, the homepage grew from 47,739 to 146,624 (+98,885), accounting for 87% of the site's entire net Top Pages gain. Other gainers are modest and consistent with brand-traffic spillover into adjacent navigational pages.

Because the keyword's ranking position did not change, this traffic increase is best interpreted as evidence of underlying demand growth for the "posthog" brand name itself, not an SEO or content achievement. PostHog's business momentum — two funding rounds and ARR roughly doubling year-over-year — independently confirms the company was genuinely becoming better known at a comparable rate. The funding/ARR trajectory and the organic traffic trajectory are two parallel symptoms of the same underlying driver, not a causal chain.

This is the first case in this study where the dominant explanation is essentially "the company itself got much better known," with organic search acting as a passive mirror of that growth rather than a lever actively pulled.

**Secondary mechanism (small):** A distinct "product-engineers" persona-targeted content cluster contributed a real but minor amount to the net gain (individual posts in the hundreds of traffic). Losses are concentrated in older blog comparison/listicle content.

**Category context:** 7 of 14 product analytics companies grew, with Mixpanel at +84.8% via the same trajectory label — suggesting a genuine category tailwind in product analytics. But PostHog's rate is ~1.5x Mixpanel's, requiring company-specific factors beyond a shared category environment.

### Client Applicability

PostHog is an important cautionary case: not every large organic traffic number reflects a replicable SEO or content achievement. Here, the growth is almost entirely a symptom of overall company momentum — and the honest, evidence-respecting takeaway for a client in this position is to track organic search as a passive health indicator of brand strength, not to credit (or seek to replicate) it as an SEO outcome. Branded/non-branded segmentation is the primary diagnostic tool that reveals this: at 97% of net gains being branded, and ~95% from one keyword held at constant position-1, the raw "+131.4%" headline is deeply misleading as a measure of content or SEO program performance.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off.*

**Calculation Log**
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All key metrics are Carried
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (179,118 − 77,411) / 77,411 = +131.4% ✓

**Known unresolved items**
- ⚠ "posthog" keyword search-volume growth is inferred from traffic-at-constant-position, not directly observed — keyword export has no "previous search volume" field
- ⚠ No discrete, precisely dateable triggering event identified (unlike Vanta's product-launch case)
- ⚠ Cannibalization rate not formally computed — Healthy estimate only
- ⚠ Cross-export "Previous" snapshot gap (~17% below Pass 2 Jan 2025 figure) — largest in this batch; immaterial to share-based findings but documented
- ⚠ AI Observation Protocol not run
- ⚠ No Search Console data

**Client Applicability**
- ✓ Primary lesson (brand-demand growth as passive organic mirror, not SEO achievement) documented with quantitative concentration evidence
- ✓ Branded/non-branded segmentation as diagnostic explicitly recommended
- ✓ Category tailwind tested and found insufficient to explain company-specific outperformance
- ✓ External Use Status = Internal only

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** Migration to V2.3 repository format
- **Sections updated:** All (initial migration from phase3-deep-dives.md lines 1510–1637)
- **Summary:** All metrics carried from original 2026-06-29 analysis. Continuous Acceleration trajectory documented with near-monotonic interior shape (monthly series Jan 2025: 77,411 → Jun 2026: 179,118). Primary mechanism: Demand Expansion (brand-search-volume growth) — "posthog" keyword held at constant position 1 across 54 country/location variants explains ~95% of net keyword-level gain (+108,497 of +114,214); homepage explains 87% of Top Pages net gain (+98,885 of +114,003). Branded +186.9% / non-branded +74.6% = most lopsided branded/non-branded split in study; branded supplies ~97% of net gain. Two funding events documented: Series D $70M ($920M val, Jun 9, 2025 via Stripe/Patrick Collison tweet); Series E $75M ($1.4B val, Oct 2025 via Peak XV). ARR ~$28.9M → ~$57.5M (+99% YoY). No discrete traffic inflection tied to either funding date — smooth continuous growth tracks ARR curve. Position-bucket-collapse pattern NOT clearly recurrent (first continuous-acceleration case without strong corroborating position-bucket signal). Cannibalization not formally computed; Healthy estimate. V2.3 schema applied: AIO (Susceptibility: Low — brand-navigational queries; Presence: Not tested; Effect: Not tested). Commercial Alignment: High. Category baseline: 7/14 product analytics companies grew; Mixpanel #2 at +84.8%; PostHog ~1.5x Mixpanel — company-specific factors required beyond category tailwind.

---

*Record finalized: 2026-07-28 | Last verified: —*
