# Akita

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-29. Key interpretive cautions: (1) no perf/trend CSV exists for Akita — the first case in this study without a monthly time-series file; the within-window shape is reconstructed from Pass 2 summary fields (peak/trough month and value, Notes) and keyword export date stamps; this is documented in Risk Flags and the Calculation Log, not concealed; (2) the inference that an on-page content change caused the ranking jump on the two driving posts is not directly verifiable from Ahrefs data — no historical content-version comparison (e.g., Wayback Machine) was run; this is recorded as the best-supported inference, not a confirmed fact; (3) the two posts driving ~73% of net gain attracted zero new backlinks between them — the cleanest "backlinks did not cause this" finding in the study, and a flat zero rather than a disproportionate ratio; (4) the position-bucket shift is directionally consistent with the Validated ranking-position-bucket-collapse pattern (Rippling, Navan, Harness, Vanta) but uses two very differently-sized keyword universes (2,480 previous vs. 210 current rows) — a structural asymmetry not seen in the four cases that established the pattern; recorded as weak, secondary, and NOT a fifth corroborating case; (5) this is a small site (sub-1,000 traffic) with absolute figures that are proportionally meaningful but small in absolute terms — apply appropriate caveats when using in client-facing work. Do not upgrade Record Status without recomputing from source exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | Akita |
| **Website** | akitaapp.com |
| **Category** | Customer Success |
| **Business Model** | B2B SaaS (small; CS health scoring / churn and retention tooling for SaaS companies) |
| **Dominant Content Model** | Blog-led (small site; two high-traffic posts account for ~73% of organic gain) |
| **Company Size** | Small — PitchBook lists negligible disclosed funding (tens of thousands of dollars, likely early seed/incubator); no meaningful funding round found |
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
| **Measurement Reliability** | Low — no monthly perf/trend file (first case in study without one); very small absolute base (233 → 666 estimated traffic); asymmetric keyword snapshot sizes (2,480 previous vs. 210 current rows); direction plausible from Pass 2 summary but not verified from a time series |

*Company note: Akita is a small customer-success platform providing CS health scoring, churn, and retention tooling for SaaS companies. WebSearch found no funding round, leadership change, pricing change, or announced content/blog overhaul dated to the study window — the company's public footprint shows ordinary ongoing blog publication rather than any discrete relaunch event. No further off-content investigation was warranted given the absence of any detectable signal and the V1.9 stopping conditions. Category baseline: 5 of 13 Customer Success companies grew in the study window; Akita's rate (+185.8%) is second-highest in the vertical, behind only Velaris (+401.2%). No category-wide tailwind explains the rate — both growing and declining companies coexist (UserGuiding -80.4%, Kapta -39.6%), and Akita's own growth traces to two specific posts rather than any category-level shift.*

---

## Outcome Summary

*All figures carried from original analysis.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 233 | Ahrefs Performance export (Pass 2), Jan 2025 |
| Ending Traffic Estimate | 666 | Ahrefs Performance export (Pass 2), Jun 2026 |
| Traffic Change % | +185.8% | Calculation Log (Carried) |
| Outcome Classification | Grew | ±10% threshold |
| Traffic Value Change | $219 → $1,696 (+674.4%) | Ahrefs Pass 2 (Carried) |
| Referring Domains Change | 200 → 554 (+177.0%) | Ahrefs Pass 2 (Carried) |

**Data quality note:** Endpoint verification: Top Pages export current-traffic sum (678) and Organic Keywords export current-traffic sum (680) both land within ~2% of Pass 2's Jun 2026 figure (666) — close enough given known cross-export snapshot-date variance to treat Pass 2's number as verified. The "Previous" totals in both exports (112-119) run notably below Pass 2's Jan 2025 figure (233) — most plausibly because the "Previous" snapshot in these exports is dated closer to Dec 2024 than Jan 2025, consistent with cross-export snapshot-date variance seen throughout this study; this is the same structural gap documented in all prior records but is proportionally larger here due to the very small absolute figures. Immaterial to share-based findings, which are internal ratios within each export.

**Traffic vs. value note:** TV grew +674.4% vs. traffic +185.8% — the largest TV/traffic percentage gap in the study. The "churn rate analysis" post (field 5e) is ranking for a high-volume keyword (69,000 vol) at moderate positions (20s-30s) — keywords with very high search volume carry high estimated CPC in Ahrefs' TV calculation, driving the TV figure disproportionately even when absolute traffic is modest. The TV figure should be read with caution given the absolute smallness of the site.

**RD/traffic divergence:** RDs grew +177.0% vs. traffic +185.8% — a roughly 1:1 ratio, the closest-to-proportional backlink/traffic relationship of any company in this study (compare PostHog's ~3.0x and Navan's ~5.1x divergence ratios). This near-proportionality is coincidental rather than causal: the specific pages responsible for the traffic gain attracted zero new backlinks (field 5f), while the site's modest backlink growth happened on a separate, legacy set of pages (homepage RD 473, www variant RD 107) — two parallel but functionally unrelated processes landing at a similar overall percentage by coincidence of scale.

**Category context:** Customer Success is genuinely split — 5 of 13 companies grew strongly, 4 are flat, 4 declined significantly (including UserGuiding -80.4%, Kapta -39.6%, Custify -34.6%, Vitally -36.6%). There is no category-wide tailwind broad enough to explain Akita's rate. Akita's growth traces to two specific post-level ranking breakthroughs, not a category shift.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Continuous Acceleration |
| **Peak Month** | 2026-06 (all-time historical high; 0% distance from peak) |
| **Peak Traffic Estimate** | 666 |
| **Trough Month** | 2025-02 |
| **Trough Traffic Estimate** | 101 |
| **Primary Inflection Date** | Spring 2026 (approximate) — keyword export date stamps show "Current" positions dated late May to late June 2026; "Previous" positions dated December 2024; the visible jump lands in the final 4-6 weeks of the window |
| **Current Direction** | Growing (Jun 2026 = all-time high at window-close) |

*No perf/trend CSV exists for Akita — this is the first and only company in the study without a monthly time-series file. The within-window shape is reconstructed from Pass 2's summary fields and the keyword export date stamps.*

*From Pass 2's Notes field: traffic was "low and volatile throughout most of 2025" (trough of 101 in Feb 2025), then began "a sustained acceleration in spring 2026," reaching the study's all-time high of 666 in Jun 2026. Pass 2 characterizes this as "a clear late-stage breakout rather than a recovery from a previous decline."*

*Keyword export corroboration: across the two highest-traffic pages, nearly every keyword's "Current" position is dated between late May and late June 2026, while the matching "Previous" position (where present) is dated December 2024 — the two-point comparison brackets exactly the late, sharp acceleration Pass 2 describes.*

*The result is a "Continuous Acceleration" trajectory label with an unusual interior shape: flat/volatile for most of the study window (roughly 15 months), then a sharp late-stage breakout concentrated in the final 4-6 weeks.*

*Position-bucket note: Pos 1-3 rose from 6 to 343; Pos 21-50 rose; keyword count at Pos 51+ collapsed from 1,558 (previous) to effectively absent (current); Pos 21-50 fell from 794 keywords to 46. Directionally resembles the Validated ranking-position-bucket-collapse pattern but uses very differently-sized keyword universes (2,480 previous vs. 210 current rows) — a structural asymmetry not seen in the four cases that established the pattern, most plausibly reflecting Akita's much smaller and less-tracked keyword footprint. Recorded as a weak, secondary, directionally-consistent data point — NOT a fifth corroborating case.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Content Quality |
| **Mechanism Pathway** | On-page content change (inferred — not directly confirmed from Ahrefs data) on two existing blog posts → ranking breakthrough to positions 1-3 on 'customer onboarding' variants (onboarding post) and breadth-of-moderate-position capture across high-volume 'churn analysis' variants (churn post) → late-window traffic breakout to all-time historical high (+185.8%) |
| **Mechanism Structure** | Two-post concentration: a ranking breakthrough on one existing blog post (steps-to-successful-customer-onboarding — dozens of keyword variants jumping from position ~70-100 to position 1-3) plus broad, high-volume-keyword traffic capture by a second post (customer-churn-analysis — "churn rate analysis" 69k vol and many close variants at positions 22-36); together accounting for ~73% of net keyword-level traffic gain; both effects isolated to two specific URLs with zero new backlinks; most plausible explanation: on-page content change (rewrite, expansion, or structural improvement) on these two posts at some point before their "Current" snapshot dates (clustered May-June 2026); this inference cannot be directly confirmed from Ahrefs data (which tracks rankings and links, not content history) |
| **Contributing Mechanisms** | None independent — brand traffic (+31 net), homepage navigational, and other pages account for the remaining ~27% of net gain but are too small to constitute a separate mechanism |
| **Mechanism Confidence** | Medium-High — the two-post finding is clean and page-isolated, with flat-zero backlinks on the driving pages; the on-page content change inference is well-supported as the best available explanation, though not directly confirmed from Ahrefs data |
| **Confidence Rationale** | (1) Two-post concentration: /blog/steps-to-successful-customer-onboarding/ (0 → 223 traffic, +223, ~39% of net) and /blog/customer-churn-analysis/ (0 → 194 traffic, +193, ~34% of net) together account for ~73% of the site's net keyword-level gain. (2) Onboarding post mechanism (breakthrough): dozens of "customer onboarding" / "onboarding customers" variants (10-900 vol, multiple country markets) sat at position 68-100 (previous dates Dec 19-30, 2024) and are now at position 1-3 (current dates May 24-Jun 28, 2026) — a clean, large ranking-position improvement on the same URL and same keyword set. (3) Churn post mechanism (moderate-position breadth): "churn rate analysis" and close variants (volumes 69,000; 19,000; 18,000; 17,000; 15,000; 14,000; 12,000 — multiple country instances) at positions 22-36; at these volumes, even moderate positions yield meaningful absolute traffic across enough variants. (4) Zero backlinks: searched full backlinks export for both URLs — zero referring domains found for either page at any point. (5) No off-content trigger: no funding, leadership change, pricing change, or announced content relaunch found (WebSearch). The on-page content change explanation is more parsimonious for a two-page-isolated, zero-backlink effect than an algorithm update would be. |
| **Strongest Competing Explanation** | Algorithm Update (Low confidence): the visible ranking jump clusters in May-June 2026, overlapping the May 2026 core update (May 21-Jun 2, 2026) and just before the Jun 2026 spam update (Jun 24-26). However, the effect is isolated to two specific URLs with dramatic, page-specific position jumps (one from position ~70-100 straight to position 1-3) rather than the broader, more diffuse re-ranking a core update typically produces across many pages. An on-page content change is a more parsimonious explanation for a two-page-isolated effect. |
| **Disconfirming Evidence** | Nothing materially contradicts the primary mechanism. The position-bucket shift (field 5h) is directionally consistent with but not a clean addition to the Validated ranking-bucket-collapse pattern — recorded as secondary and weak, not a contradiction or new corroboration. |
| **Algorithm Alignment** | Weak — timing overlap with May 2026 core update is real and worth recording, but the page-specific isolation of the effect makes a targeted content change the better-supported explanation |
| **AIO Portfolio Susceptibility** | Medium — both driving posts are informational/definitional content ("steps to successful customer onboarding," "customer churn analysis") of the type AI Overviews most commonly intercept; no direct test was run to confirm or deny AI Overview presence on these queries |
| **AIO Presence Observed** | Not tested — no direct AI Overview presence/absence check run for Akita; the May-June 2026 timing window (during AI Mode's broad expansion) means AI Overview presence was plausible but not checked |
| **AIO Observed Effect** | Not tested — stronger competing explanation (on-page content change / ranking breakthrough) already accounts for the finding without requiring AI Overview dynamics |

---

## Gross-Loss Offset Analysis

*Cannibalization rate not formally computed in the original analysis.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | Not formally computed | — |
| Gross Loss (absolute) | Not formally computed; no major individual losers identified in the original analysis for a site of this size | Ahrefs Top Pages export |
| Net Change | +559 (Top Pages: previous 119, current 678) | Ahrefs Top Pages |
| Gross-Loss Offset Rate | Not formally computed — estimate: likely Healthy zone (<30%); the two driving posts account for ~73% of the net gain, and losses on such a small site are expected to be minimal in absolute terms | — |
| Offset Zone | Estimate: Healthy (<30%) | — |
| Reconciliation check | Top Pages current sum (678) and Keywords current sum (680) both within ~2% of Pass 2's Jun 2026 figure (666) | — |

*Gross-Loss Offset interpretation: With only ~666 total estimated traffic and most gain concentrated in two specific posts, the opportunity for meaningful internal cannibalization is structurally limited. Formal computation recommended on next validation pass, though it is unlikely to change the zone classification.*

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | /blog/steps-to-successful-customer-onboarding/: 0 → 223 (+223 = ~39% of net keyword-level gain); dozens of "customer onboarding" / "onboarding customers" keyword variants jumped from position 68-100 (Dec 2024) to position 1-3 (May-Jun 2026) on the same URL | Ahrefs Top Pages + keyword export |
| Top 2 Page Traffic Share | /blog/customer-churn-analysis/: 0 → 194 (+193 = ~34% of net keyword-level gain); top keyword "churn rate analysis" (69,000 vol) at position 24; traffic comes from a wide spread of "churn rate analysis"/"churn analysis" country/location variants at positions 22-36 across very high-volume keywords | Ahrefs Top Pages + keyword export |
| Top 5 Page Traffic Share | Not formally computed; top two posts together account for ~73% of net; no other page contributes more than ~2% of the net gain individually | — |
| Dominant Content Type | Blog/educational (definitional how-to content: onboarding guide, churn analysis explainer) | Ahrefs Top Pages export |
| Winning Content Type | /blog/steps-to-successful-customer-onboarding/ (+223 — ranking breakthrough to position 1-3 across many variants); /blog/customer-churn-analysis/ (+193 — breadth-of-moderate-position mechanism across many high-volume keyword variants) | Ahrefs Top Pages + keyword export |
| Losing Content Type | No major individual losers identified at this site scale | — |
| New-URL Gain Share | No new-URL driven gain identified — both driving posts are existing URLs with existing keyword sets; the growth is a ranking improvement on the same pages, not new content | — |
| Page Replacement Pattern | Not a replacement pattern — ranking breakthrough on two existing posts; no structural category replaced or displaced | — |
| Notable patterns | **Two-post concentration:** /blog/steps-to-successful-customer-onboarding/ and /blog/customer-churn-analysis/ together account for ~73% of the site's net keyword-level traffic gain — a "narrow, page-specific content-execution story" distinct from PostHog's brand-demand pattern, Rippling's brand/homepage-led pattern, and the multi-page content-cluster patterns at Braze, Navan, and Harness. **Zero-backlink growth mechanism:** both posts have zero referring domains in the full backlinks export — the cleanest "backlinks did not cause this" finding in the study; not a disproportionate ratio but a flat zero on the specific pages in question. **Two distinct position mechanisms on the same site simultaneously:** the onboarding post is a ranking breakthrough (position ~70-100 → position 1-3 on existing keywords); the churn post is a breadth-of-moderate-position capture (very high-volume keyword at position 24, many close country variants); these are categorically different ranking-gain mechanisms co-existing on the same small site in the same window. **Non-branded dominant:** non-branded traffic supplies ~94.5% of net keyword-level gain — content-driven shape, inverse of PostHog's brand-demand pattern and closer to Braze/Navan/Harness. **Backlink growth happened on separate legacy pages:** referring-domain growth (200 → 554) is concentrated almost entirely in the homepage (RD 473, first seen 2020) and legacy www variant (RD 107, first seen 2017) — both predating the study window; a separate /blog/customer-onboarding-statistics/ page has 38 RDs (first seen Oct 2024) but is a DIFFERENT URL from the onboarding post driving the traffic gain. | Ahrefs Top Pages + keyword + BBL exports |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | Not applicable — this is a "late-stage breakout" from a low-and-volatile state, not a recovery from a previous higher level; the study-window high (666) is the all-time historical high |
| **Recovery Mechanism** | N/A |
| **Recovery Confidence** | N/A |
| **Recovery Notes** | Trough of 101 (Feb 2025) is the study-window low and occurs near the opening. The "acceleration" is from a flat/volatile low state to a new all-time high, not a recovery to a prior peak. |

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

*Note: AI Observation Protocol not yet run. Priority queries if run: "Steps to successful customer onboarding", "Customer churn analysis", "Customer churn rate" — specifically to test whether these queries (where Akita now ranks position 1-3 and position 22-36 respectively) show AI Overview presence and whether Akita appears as a cited source.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Medium — the two driving posts are informational/educational blog content (onboarding guide, churn analysis explainer) targeting customer success managers, which are the buyer persona for a CS platform; the content type is top-of-funnel and serves informational rather than commercial intent; some commercial alignment through audience match, but the connection between ranking for "steps to customer onboarding" and generating qualified CS-platform leads requires inference |
| **Best-Fit Client Type** | Small B2B SaaS companies with an existing blog that hasn't fully ranked yet; clients who believe link-building is necessary to rank, but whose site has existing high-potential content that simply hasn't broken through yet |
| **Best-Fit Problem** | "We've published blog content but it's not getting traffic — do we need more backlinks?" / "Should we create more content or improve what we already have?" / "How do we identify which of our existing posts have the best chance of breaking through?" |
| **Relevance Conditions** | Client has existing blog content that targets relatively specific informational queries but hasn't broken into the top results yet; client is weighing investment in link-building vs. on-page content improvement; client wants evidence that ranking improvements on individual pages can outweigh both link-building and new content production combined |
| **Non-Comparable When** | Client is expecting brand-awareness or broad-topical-authority growth (this case is about two specific posts, not a site-wide or brand-led trend); client needs an absolute-traffic case study (666 total traffic is meaningful as a growth percentage, not as an absolute number); client is in a category requiring domain authority or trust signals beyond on-page content quality |
| **Primary Lesson** | Two blog posts, with zero new backlinks between them, accounted for nearly three-quarters of this company's organic growth — a reminder that ranking improvements on existing pages can outweigh both link-building and the rest of a site's content combined. The honest caveat: the exact triggering action (what specifically changed on these two pages) could not be confirmed from available data — the client-facing lesson is the pattern, not a directly observed tactic. |
| **Secondary Lesson** | A high-volume keyword sitting at position 24 can still deliver real traffic if there are enough close variants — breadth at a moderate position is a different growth mechanism than breaking into the top three on a single term, and both showed up on the same small site at the same time. These two mechanisms (breakthrough to top-3 vs. breadth at moderate position) are not mutually exclusive and can co-exist even on a site with very few total ranking pages. |
| **Evidence Use** | Positive (on-page content quality improvement as ranking driver without backlinks — primary lesson); Methodological (two-post concentration as a diagnostic for small-site growth analysis); Comparative (against PostHog as the small-company counterpoint — where PostHog's growth was a passive symptom of brand momentum with no actionable SEO lesson, Akita's traces to two identifiable pages with a replicable mechanism pattern) |
| **Evidence Basis** | Based on Ahrefs Top Pages, organic keywords, backlinks, and pass data covering January 2025 through June 2026. No monthly perf/trend CSV available for Akita — the within-window shape rests on Pass 2 summary fields and keyword export date stamps. No formal gross-loss offset rate computation. AIO Presence not tested. No off-content events found via WebSearch. All traffic figures are Ahrefs third-party estimates and are small in absolute terms (666 total). |

---

## Risk Flags

- **No monthly perf/trend CSV:** Akita is the only company in the study without a monthly time-series file. The within-window shape (flat/volatile through 2025, breakout in spring 2026) is inferred from Pass 2 summary fields and keyword date stamps, not a verified monthly series. If a perf file becomes available, the field 3 inflection timing should be re-checked against it.
- **On-page content change inference not confirmed:** The best-supported explanation for the ranking jump is an on-page content change (rewrite, expansion, structural improvement) on these two posts before their May-June 2026 "Current" snapshot dates. This inference cannot be confirmed from Ahrefs data, which tracks rankings and links but not content history. No Wayback Machine comparison was run.
- **Absolute size:** 666 total estimated traffic is small in absolute terms. Percentage gains (+185.8%) are meaningful within the study's methodology but should be contextualized carefully for clients who equate traffic volume with business impact.
- **Algorithm-update timing overlap not ruled out:** The May 2026 core update (May 21-Jun 2, 2026) overlaps the visible ranking jump window. This alternative explanation is assessed as Low confidence (effect too page-specific), but it cannot be fully ruled out from available data.
- **Position-bucket snapshot-size asymmetry:** The 2,480 previous vs. 210 current keyword-universe size difference means the position-bucket comparison (field 5h) cannot be cleanly compared to the four Validated cases (Rippling, Navan, Harness, Vanta), which had proportionally similar snapshot sizes. The directional signal is consistent but the structural asymmetry is real.
- **Cannibalization rate not formally computed:** Healthy estimate based on context, not a formal computation.
- **AIO Observation Protocol not run:** No AI-tool citations checked. Both driving posts are informational/definitional content with potential AI Overview exposure.
- **No Search Console data:** No CTR, impressions, or position confirmation at the query level.
- **Cross-export "Previous" snapshot gap:** Both Top Pages and Keywords export "Previous" totals (112-119) run notably below Pass 2's Jan 2025 figure (233) — most plausibly Dec 2024 snapshot dates; immaterial to share-based findings but documented.

---

## Related Documents

- Comparison briefs: `comparison-briefs/gainsight-akita.md`
- Synthesis documents: `synthesis-matrix.md`
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (lines 1639–1768); Customer Success category; a small-company counterpoint to PostHog (brand-demand-driven) — where PostHog's growth was a passive symptom of brand momentum, Akita's traces to two specific identifiable pages with a replicable mechanism

---

## Calculation Log

*All values carried from original analysis.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Pass 2 / Performance export | Starting 233 (Jan 2025); Ending 666 (Jun 2026) | All | (666 − 233) / 233 | +185.8% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 | Starting $219; Ending $1,696 | All | (1,696 − 219) / 219 | +674.4% | Carried |
| Referring Domains Change % | Ahrefs Pass 2 | Starting 200; Ending 554 | All | (554 − 200) / 200 | +177.0% | Carried |
| In-window trough | Ahrefs Pass 2 summary field | Feb 2025 | All | Direct read | 101 | Carried |
| In-window peak | Ahrefs Pass 2 summary field | Jun 2026 | All | Direct read | 666 (also all-time historical high) | Carried |
| Branded traffic (previous) | Ahrefs Keywords export, Branded flag | Branded = Yes | Branded keywords | Sum | 28 | Carried |
| Branded traffic (current) | Ahrefs Keywords export, Branded flag | Branded = Yes | Branded keywords | Sum | 59 | Carried |
| Non-branded traffic (previous) | Ahrefs Keywords export, Branded flag | Branded = No | Non-branded keywords | Sum | 84 | Carried |
| Non-branded traffic (current) | Ahrefs Keywords export, Branded flag | Branded = No | Non-branded keywords | Sum | 621 | Carried |
| Non-branded net gain | Derived | 621 − 84 | Non-branded | Direct | +537 | Carried |
| Non-branded % of net keyword gain | Derived | 537 / (621+59 − 84−28) = 537 / 568 | Non-branded / total net | 537 / 568 | ~94.5% | Carried |
| Onboarding post traffic (current) | Ahrefs Top Pages | /blog/steps-to-successful-customer-onboarding/ | Single page | Direct read | +223 (0 → 223) | Carried |
| Onboarding post % of net keyword gain | Derived | 223 / 568 | Single page / net | 223 / 568 | ~39% | Carried |
| Churn post traffic (current) | Ahrefs Top Pages | /blog/customer-churn-analysis/ | Single page | Direct read | +193 (0 → 194 net) | Carried |
| Churn post % of net keyword gain | Derived | 193 / 568 | Single page / net | 193 / 568 | ~34% | Carried |
| Two-post combined % of net keyword gain | Derived | (223 + 193) / 568 | Two pages / net | 416 / 568 | ~73% | Carried |
| Backlinks on onboarding post | Ahrefs BBL export | /blog/steps-to-successful-customer-onboarding/ | Single page | Full export search | 0 RDs | Carried |
| Backlinks on churn post | Ahrefs BBL export | /blog/customer-churn-analysis/ | Single page | Full export search | 0 RDs | Carried |
| Homepage RD | Ahrefs BBL export | Homepage | Homepage | Direct read | 473 (first seen 2020) | Carried |
| www variant RD | Ahrefs BBL export | www variant | www | Direct read | 107 (first seen 2017) | Carried |
| Onboarding post previous keyword positions | Ahrefs Keywords export | "customer onboarding" / "onboarding customers" variants | Post-specific keywords | Direct read | Position 68-100 (dates clustered Dec 19-30, 2024) | Carried |
| Onboarding post current keyword positions | Ahrefs Keywords export | "customer onboarding" / "onboarding customers" variants | Post-specific keywords | Direct read | Position 1-3 (dates clustered May 24-Jun 28, 2026) | Carried |
| "churn rate analysis" top keyword position | Ahrefs Top Pages + Keywords export | "churn rate analysis" (69,000 vol) | Single keyword | Direct read | Position 24 | Carried |
| Top Pages net | Ahrefs Top Pages | Previous 119; Current 678 | All | 678 − 119 | +559 | Carried |
| Top Pages current vs. Pass 2 | Derived | 678 / 666 | Current side | 678 / 666 | ~101.8% — within ~2% | Carried |
| Keywords current vs. Pass 2 | Derived | 680 / 666 | Current side | 680 / 666 | ~102.1% — within ~2% | Carried |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Pass 2 (summary record) | Peak/trough month and value, Notes field, % change, trajectory classification | — | Jan 2025 – Jun 2026 | Authoritative source for monthly trajectory; only trajectory data available given absence of perf CSV. |
| Ahrefs Top Pages export | Top ranking pages with previous and current traffic | CSV | Jan 2025 – Jun 2026 | Previous sum 119; current sum 678; within ~2% of Pass 2 Jun 2026 figure. "Previous" snapshot approximately Dec 2024. |
| Ahrefs Organic Keywords export | All ranking keywords with position data, Branded flag, date stamps | CSV | Jan 2025 – Jun 2026 | Source of branded/non-branded split, onboarding post position jump (Dec 2024 vs. May-Jun 2026), "churn rate analysis" moderate-position breadth finding, and keyword date stamps used to reconstruct inflection timing. |
| Ahrefs Best by Links (BBL) export | Per-page backlinks/referring domains, first-seen dates | CSV | As of Jun 2026 | Source of zero-backlink finding on both driving posts; homepage (RD 473, first seen 2020) and www legacy (RD 107, first seen 2017) confirmed as separate legacy-authority pages unrelated to the traffic-driving posts. |
| WebSearch (off-content events) | Funding rounds, leadership changes, pricing changes, content/blog relaunch announcements | Web | 2025–2026 | No events found for any category; company's public footprint shows ordinary ongoing blog publication. |

---

## Narrative

### Company Overview

Akita is a small customer-success platform providing CS health scoring, churn, and retention tooling for SaaS companies. PitchBook lists negligible disclosed funding (likely early seed/incubator). No meaningful funding round, leadership change, pricing change, or content relaunch was found in or near the study window. In the Customer Success category, 5 of 13 companies grew in this window; Akita's +185.8% rate is second-highest behind Velaris (+401.2%), but there is no category-wide tailwind — the category is split, and Akita's growth traces to two specific post-level ranking changes.

### Traffic Trajectory

Organic estimated traffic grew from 233 (January 2025) to 666 (June 2026), +185.8% net, reaching an all-time historical high. No monthly perf/trend CSV exists for Akita — the first and only case in this study without one. The within-window shape is reconstructed from Pass 2's summary fields: traffic was "low and volatile throughout most of 2025" (trough of 101, February 2025), then began "a sustained acceleration in spring 2026," closing at the study's all-time high of 666 in June 2026. Keyword export date stamps corroborate this shape: both driving posts show "Current" positions dated late May to late June 2026, with "Previous" positions dated December 2024 — placing the visible ranking jump in the final 4-6 weeks of the window.

### Mechanism Analysis

**Primary mechanism (Medium-High confidence):** Two specific blog posts account for roughly 73% of the site's net keyword-level traffic gain, with zero new backlinks on either page.

The first post, /blog/steps-to-successful-customer-onboarding/, shows a clean ranking breakthrough: dozens of "customer onboarding" and "onboarding customers" variants (volumes 10-900, multiple country markets) were at position 68-100 as of December 2024 and are now at position 1-3 as of May-June 2026. Same URL, same keyword set — a ranking breakthrough, not a new page.

The second post, /blog/customer-churn-analysis/, operates via a different mechanism: the top tracked keyword ("churn rate analysis," 69,000 volume) sits at position 24, but a wide spread of close variants across multiple country markets carry very high search volumes (69,000; 19,000; 18,000; 17,000; 15,000; 14,000; 12,000 — multiple instances). At these volumes, even a position in the 20s-30s yields meaningful absolute traffic across enough variants — a breadth-of-moderate-position mechanism, distinct from the onboarding post's top-3 breakthrough.

Both posts have zero referring domains in the full backlinks export — the cleanest "backlinks did not cause this" finding in the study. Not a disproportionate ratio, but a flat zero on the specific pages responsible for ~73% of the site's growth.

The most defensible causal reading: an on-page content change (rewrite, expansion, or structural improvement) was made to these two posts at some point before their May-June 2026 "Current" snapshot dates. This inference cannot be directly confirmed from Ahrefs data (which tracks rankings and links, not content history), and no Wayback Machine comparison was run. It is recorded as the best-supported inference, not a confirmed fact.

The main alternative — a May 2026 core update independently favoring these two pages — is assessed as Low confidence: the effect is too page-specific (dramatic jumps on exactly two URLs) relative to the broader, more diffuse re-ranking a core update typically produces.

### Client Applicability

Akita is a useful small-company counterpoint to PostHog. Where PostHog's growth was a passive symptom of brand momentum with almost no actionable SEO lesson, Akita's growth traces to two specific, identifiable pages with a clean, verifiable mechanism pattern (ranking improvement, zero link-building) that a client could plausibly replicate — investing in the on-page quality of a small number of existing posts rather than chasing backlinks or new content volume. The honest caveat: the exact triggering action cannot be confirmed from available data. The client-facing lesson is the pattern, not a directly observed tactic.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off.*

**Calculation Log**
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All key metrics are Carried
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (666 − 233) / 233 = +185.8% ✓

**Known unresolved items**
- ⚠ No monthly perf/trend CSV — within-window shape inferred from Pass 2 summary + keyword date stamps; re-check if file becomes available
- ⚠ On-page content change inference not confirmed — no Wayback Machine comparison run for either driving post
- ⚠ Algorithm-update overlap (May 2026 core update) real but assessed as Low confidence — not fully ruled out
- ⚠ Cannibalization rate not formally computed — Healthy estimate only
- ⚠ AI Observation Protocol not run
- ⚠ No Search Console data

**Client Applicability**
- ✓ Primary lesson (on-page content improvement without backlinks as ranking driver) documented with zero-backlink evidence on both driving posts
- ✓ Secondary lesson (two distinct ranking mechanisms on same site) documented
- ✓ Small absolute size caveated explicitly
- ✓ External Use Status = Internal only

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** Migration to V2.3 repository format
- **Sections updated:** All (initial migration from phase3-deep-dives.md lines 1639–1768)
- **Summary:** All metrics carried from original 2026-06-29 analysis. Continuous Acceleration trajectory documented; no monthly perf CSV exists (first case in study) — shape inferred from Pass 2 summary fields and keyword date stamps. Primary mechanism: Content Quality (positive) — two-post concentration (/blog/steps-to-successful-customer-onboarding/ +223 = 39% of net; /blog/customer-churn-analysis/ +193 = 34% of net; together 73%). Two distinct mechanisms on same site: ranking breakthrough (position ~70-100 → 1-3 on onboarding post) and breadth-of-moderate-position (position 22-36 across many high-vol variants on churn post). Zero backlinks on both driving posts — cleanest "backlinks did not cause this" finding in study. Non-branded supplies ~94.5% of net keyword gain. No off-content events found. Category baseline: 5/13 Customer Success companies grew; Akita second-highest at +185.8%. Position-bucket shift directionally consistent with Validated pattern but NOT added as fifth corroborating case (snapshot-size asymmetry 2,480 vs. 210 rows). V2.3 schema applied: AIO (Susceptibility: Medium — informational/definitional content type; Presence: Not tested; Effect: Not tested). Commercial Alignment: Medium. Mechanism confidence: Medium-High (on-page content change inference well-supported but not directly confirmed from Ahrefs data). Algorithm Update confidence: Low (May 2026 core update timing overlap real but two-page isolation makes on-page change more parsimonious).

---

*Record finalized: 2026-07-28 | Last verified: —*
