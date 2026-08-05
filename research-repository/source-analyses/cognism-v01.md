# Cognism — v0.1 Analysis

**Generated:** 2026-08-03  
**Skill version:** slab-company-analysis  
**Status:** v0.1 — Data Inventory, Calculation Log, Readiness Status only. Record generation (v0.2) not yet run.

---

## Data Inventory

**Company:** Cognism  
**Website:** cognism.com  
**Cohort Study Window:** 2025-01 to 2026-06  
**Data Provenance:** Ahrefs Export

**Available:**

- `cognism.com_perf_2026-08-03_08-44-20.csv` — Performance History (combined: traffic + referring domains in one file; monthly, covers ~2015-06 through 2026-08)
- `cognism.com-top-pages-subdomains-all--comp_2026-08-03_08-44-39.csv` — Top Pages comparison (1,495 URL rows; not capped at 30K)
- `cognism.com_orgcompetitors_subdomains_us_2026-08-03_08-45-58.csv` — Organic Competitors (US-scoped; 20 detected competitors)
- `cognism.com-organic-keywords-subdomains-all_2026-08-03_08-45-42.csv` — Organic Keywords comparison (capped at 30K rows; Jul 2024 previous dates, May 2026 current dates)

**Missing / unavailable:**

- Performance History — referring domains as a standalone export: **Not needed** — RD data is included as a column in the traffic Performance History file (column 1: "Referring domains"). Domain-level link loss **can be tested** from the available data.
- GSC exports: Not available (not a client engagement)
- GA4: Not available

---

## Source File Classification

| File | Type | Use For | Do Not Use For | Notes |
|------|------|---------|----------------|-------|
| `cognism.com_perf_…csv` | Ahrefs Performance History — combined traffic + RDs | Starting/Ending traffic (cohort endpoints); monthly trajectory; trough/peak; position-bucket distribution; branded/non-branded split; RD trend | Gross Gain/Loss; per-URL analysis | Unusual combined format — both Avg. organic traffic AND Referring domains in one file; "Your brand (Cognism)" column IS populated, meaning Cognism has brand tracking configured in Ahrefs |
| `cognism.com-top-pages-…comp_…csv` | Ahrefs Top Pages comparison | Gross Gain/Loss/Net Change/Offset Rate; content-type breakdown; gain decomposition; concentration | Cohort endpoint totals; trend direction — use PH for those | UTF-16 tab-separated; 1,495 rows (full population, not capped); Previous SUM = 173,019 ≈ PH Jul 2024 (171,982) — comparison Previous date is ~Jul 2024, NOT Jan 2025 — material window mismatch flagged below |
| `cognism.com_orgcompetitors_…csv` | Ahrefs Organic Competitors | Category-level context; whether decline is universal across direct peers | Mechanism confirmation — competitor flat ≠ site-specific cause | US-scoped only; 20 detected competitors; includes non-comparable large platforms (Salesforce, HubSpot); filter to direct B2B data intelligence peers |
| `cognism.com-organic-keywords-…csv` | Ahrefs Organic Keywords comparison | Branded/non-branded split (supplemental to PH); intent distribution; SERP feature (AIO) detection; comparison window: ~Jul 2024 → May 2026 | Cohort window branded split (use PH branded columns instead); total traffic totals (30K cap, scoped to export only) | Capped at 30K rows; comparison dates Jul 2024 (previous) / May 2026 (current) — does not align with cohort window; use PH branded columns for cohort-window branded split |

---

## Calculation Log

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Status | Notes |
|--------|-------------|----------------------|---------------------|---------|----------------|--------|-------|
| Starting Traffic Estimate | Performance History | Col 2 "Avg. organic traffic", row 2025-01 | Cohort window start | Direct read | **223,211** | Recomputed | Preferred source for cohort endpoints |
| Ending Traffic Estimate | Performance History | Col 2, row 2026-06 | Cohort window end | Direct read | **110,061** | Recomputed | |
| Traffic Change % | Performance History | Derived | Cohort window | (110,061 − 223,211) / 223,211 | **−50.7%** | Recomputed | |
| Traffic Retention | Performance History | Derived | Cohort window | 110,061 / 223,211 | **49.3%** | Recomputed | |
| Peak Traffic (cohort) | Performance History | Col 2, rows 2025-01 to 2026-06 | Cohort window | Max monthly value | **280,863 (Apr 2025)** | Recomputed | |
| Peak-to-Ending Change | Performance History | Derived | Cohort window | (110,061 − 280,863) / 280,863 | **−60.8%** | Recomputed | Peak-to-end captures full magnitude of decline from high point |
| Cohort Start to Peak | Performance History | Derived | Cohort window | (280,863 − 223,211) / 223,211 | **+25.8%** | Recomputed | Traffic grew 25.8% in first 3 months of cohort before collapsing |
| Organic Pages — Start | Performance History | Col 3, row 2025-01 | Cohort window start | Direct read | **1,401** | Recomputed | |
| Organic Pages — End | Performance History | Col 3, row 2026-06 | Cohort window end | Direct read | **748** | Recomputed | −46.6% — nearly half of ranking pages eliminated |
| Source Reconciliation | Top Pages vs PH | Top Pages SUM(Previous) vs PH Jan 2025 | Cross-check only | 173,019 vs 223,211 | **Gap: −50,192 (−22.5%)** | Recomputed | Gap is larger than typical 5–10%; confirms Top Pages Previous date is ~Jul 2024, not Jan 2025 (see window mismatch warning). PH preferred for cohort endpoints. |
| Top Pages Starting (SUM) | Top Pages | Col "Previous traffic", all rows with value | All 1,495 URLs | SUM(Previous traffic) | **173,019** | Recomputed | Maps to PH Jul 2024 (171,982) — within 0.6%, confirming Jul 2024 as previous date |
| Top Pages Ending (SUM) | Top Pages | Col "Current traffic", all rows with value | All 1,495 URLs | SUM(Current traffic) | **107,947** | Recomputed | Close to PH Jun 2026 (110,061); expected ~2% methodology gap |
| Gross Gain | Top Pages | "Current traffic" − "Previous traffic" where Current > Previous; OR Current > 0 where Previous blank | URLs gaining traffic | SUM of positive per-URL changes | **38,947** | Recomputed | |
| Gross Loss | Top Pages | ABS(Current − Previous) where Current < Previous (treating blank Current as 0) | URLs losing traffic | ABS(SUM of negative per-URL changes) | **104,019** | Recomputed | |
| URL-level Net Change | Top Pages | Derived | Top Pages population | Gross Gain − Gross Loss | **−65,072** | Recomputed | |
| Reconciliation check | Top Pages | Derived | Top Pages population | 173,019 + (−65,072) = 107,947 | **✓ Exact** | Recomputed | Clean reconciliation within Top Pages population |
| Gross-Loss Offset Rate | Top Pages | Derived | — | 104,019 / 38,947 | **267.1%** | Recomputed | Gross loss is 2.67× gross gain — severe net deterioration |
| URLs losing all traffic | Top Pages | "Current traffic" blank, "Previous traffic" populated | Loss-side URLs | COUNT | **285 URLs** | Recomputed | Out of 852 total URLs with blank Current |
| New-URL gain | Top Pages | "Current traffic" > 0 where "Previous traffic" blank | Previous = blank, Current > 0 | SUM(Current traffic) | **14,762** | Recomputed | 188 new URLs |
| New-URL count | Top Pages | — | Previous = blank, Current > 0 | COUNT | **188** | Recomputed | |
| Continuing-URL gain | Top Pages | "Current traffic" > "Previous traffic" where both populated | Previous > 0, Current > Previous | SUM(Current − Previous) | **24,185** | Recomputed | 146 URLs |
| New-URL Gain Share | Derived | — | — | 14,762 / 38,947 | **37.9%** | Recomputed | |
| Continuing-URL Gain Share | Derived | — | — | 24,185 / 38,947 | **62.1%** | Recomputed | |
| Top 5 Page Traffic Share | Top Pages | Top 5 URLs by Current traffic | Current traffic > 0 | SUM(top 5) / SUM(all Current) | **39.8%** (42,932 / 107,947) | Recomputed | High concentration; homepage alone = 30,583 (28.3%) |
| Top 10 Page Traffic Share | Top Pages | Top 10 URLs by Current traffic | Current traffic > 0 | SUM(top 10) / SUM(all Current) | **48.3%** (52,134 / 107,947) | Recomputed | |
| Referring Domains — Start | Performance History | Col 1 "Referring domains", row 2025-01 | Cohort window start | Direct read | **3,547** | Recomputed | RD data is in the traffic PH file (combined export) |
| Referring Domains — End | Performance History | Col 1, row 2026-06 | Cohort window end | Direct read | **6,475** | Recomputed | |
| RD Change (cohort) | Performance History | Derived | Cohort window | (6,475 − 3,547) / 3,547 | **+82.5%** | Recomputed | RDs nearly doubled during same period traffic declined −50.7%; weighs against link loss as mechanism |
| Branded Traffic — Start | Performance History | Col 14 "Organic traffic: Your brand (Cognism)", row 2025-01 | Cohort window start | Direct read | **31,629** | Recomputed | Brand tracking configured in Ahrefs |
| Branded Traffic — End | Performance History | Col 14, row 2026-06 | Cohort window end | Direct read | **31,510** | Recomputed | |
| Branded Change (cohort) | Performance History | Derived | Cohort window | (31,510 − 31,629) / 31,629 | **−0.4%** | Recomputed | Essentially flat |
| Non-Branded Traffic — Start | Performance History | Col 16 "Organic traffic: Non-branded", row 2025-01 | Cohort window start | Direct read | **183,120** | Recomputed | |
| Non-Branded Traffic — End | Performance History | Col 16, row 2026-06 | Cohort window end | Direct read | **71,107** | Recomputed | |
| Non-Branded Change (cohort) | Performance History | Derived | Cohort window | (71,107 − 183,120) / 183,120 | **−61.2%** | Recomputed | |
| Non-Branded % of Total Decline | Performance History | Derived | Cohort window | (71,107 − 183,120) / (110,061 − 223,211) | **99.0%** | Recomputed | Branded contribution = −0.4%; effectively the entire decline is non-branded |
| Positions 1–3 (start → end) | Performance History | Col 4, rows 2025-01 / 2026-06 | Cohort endpoints | Direct read | **7,075 → 5,814 (−17.8%)** | Recomputed | |
| Positions 4–10 (start → end) | Performance History | Col 5 | Cohort endpoints | Direct read | **14,656 → 9,146 (−37.6%)** | Recomputed | |
| Positions 11–20 (start → end) | Performance History | Col 6 | Cohort endpoints | Direct read | **16,780 → 1,458 (−91.3%)** | Recomputed | |
| Positions 21–50 (start → end) | Performance History | Col 7 | Cohort endpoints | Direct read | **28,939 → 530 (−98.2%)** | Recomputed | |
| Positions 51+ (start → end) | Performance History | Col 8 | Cohort endpoints | Direct read | **33,528 → 15 (−99.96%)** | Recomputed | Near-total collapse of long-tail position coverage |
| Oct 2025 inflection — pages | Performance History | Col 3, rows 2025-09 / 2025-10 | Trajectory | Direct read | **1,220 → 973 (net −247 pages, −20.2% in one month)** | Recomputed | Sharpest single-month net page-count drop in cohort; concurrent with pos51+ collapsing from 22,835 to 5,142; figures reflect net Ahrefs-estimated change, not confirmed deindexation of exactly 247 specific pages |
| Oct 2025 inflection — pos51+ | Performance History | Col 8, rows 2025-09 / 2025-10 | Trajectory | Direct read | **22,835 → 5,142 (−77.5% in one month)** | Recomputed | Discrete secondary inflection event |
| Branded/Non-branded split — Keywords export | Organic Keywords | Col "Branded" = true/false; cols 14/15 "Previous/Current traffic" | 30K keyword export; Jul 2024 → May 2026 window only | SUM by branded flag | Branded: 36,737 → 40,199 (+9.4%); Non-branded: 128,915 → 67,436 (−47.7%) | Recomputed | Supplemental to PH branded columns. Scoped to 30K-cap export and Jul 2024 start — not the cohort window. Non-branded decline directionally consistent with PH |
| AIO SERP feature presence | Organic Keywords | Col "SERP features" contains "AI Overview" | 30K keyword export, current snapshot | COUNT / SUM(Current traffic) | **5,868 keywords** (19.6% of export); associated current traffic = **56,728** (52.6% of export current total) | Recomputed | Current snapshot detection only — not a comparison to prior period; does not confirm interception effect |

### Content-Type Breakdown (Gross Loss, URL comparison window Jul 2024 – Jun 2026)

Filter rule: URL path categorized by first path segment — /blog/ (path begins "/blog/"), /de/ or /fr/ (language subfolders), /pricing/ (exact), homepage (path = "/"), or Other root-level (any remaining first segment not covered by the above). All classifications use parsed URL path, not string matching on raw URL.

Note: "Other root-level pages" is a residual folder-location category, not an intent classification. Manual review of the top 20 root-level losers confirms the largest losses are definitional, educational, and comparison pages (e.g., /what-is-b2b-marketing, /what-is-lead-generation, /zoominfo-alternative), but the filter itself does not establish that every URL in this bucket is informational. The precise URL count may vary by ±1–2 depending on exact filter implementation; the figures below reflect the computed classification and should be validated against the URL list before the record is finalized.

| Content Type | URLs with Loss | Gross Loss | Share of Total Gross Loss | Notes |
|---|---|---|---|---|
| Other root-level pages | ~133 | ~50,526 | **~48.6%** | Residual root-level bucket; top losers are definitional and comparison pages — see note above |
| Blog (/blog/) | 247 | 45,656 | **43.9%** | General informational blog posts; /blog/what-is-a-go-to-market-strategy (−6,620) largest single blog loss |
| International /de/ | 79 | 4,376 | 4.2% | German-language subfolder |
| International /fr/ | 60 | 3,435 | 3.3% | French-language subfolder |
| Homepage | 1 | 24 | 0.0% | Homepage lost a small amount; also the largest gaining page (+7,950 gain) |
| /pricing/ | 0 | 0 | 0.0% | Pricing page: 976 → 1,109 (+13.7%) — held and grew |

**Blog and other root-level pages account for ~92.5% of observed page-level gross loss.** Manual review indicates the largest root-level losses are definitional, educational, comparison, or category pages — consistent with the blog loss pattern — but the filter does not independently establish intent for every URL in that bucket.

This export is not capped (1,495 rows = full population at these comparison dates), so the breakdown covers the complete observed URL set at these endpoints.

### Gain Decomposition (URL comparison window — not equivalent to trough-to-peak recovery)

The URL comparison window (Jul 2024 → Jun 2026) does not align with the trough-to-peak period within the cohort window (there is no recovery trough — traffic was still declining at the comparison endpoint). The gain decomposition below describes the replacement pattern across the URL comparison window, not a recovery driver analysis.

| Gain Source | URLs | Traffic | Share of Gross Gain |
|---|---|---|---|
| New URLs (Previous blank, Current > 0) | 188 | 14,762 | 37.9% |
| Improving continuing URLs (Previous > 0, Current > Previous) | 146 | 24,185 | 62.1% |
| **Total Gross Gain** | **334** | **38,947** | **100%** |

Largest gain by category: blog (25,627, 65.8%), homepage (7,950, 20.4%), root-topic (3,271, 8.4%). The homepage gain alone (+7,950) represents 20.4% of total gross gain. New blog content focused on competitor pricing comparisons (/blog/apollo-io-pricing, /blog/rocketreach-pricing) and tool lists contributed new-URL gain.

---

## Data Quality Warnings

**1. Material window mismatch — URL comparison window does not start at cohort window.**

The Top Pages comparison Previous date is ~**July 2024**, not January 2025. Evidence: SUM(Previous traffic) = 173,019, matching PH Jul 2024 (171,982) within 0.6%. The cohort start (Jan 2025) shows PH traffic of 223,211. This creates a 22.5% gap between the two starting figures — far outside the expected 5–10% methodology range and attributable to different period starts, not methodology.

Consequence: The URL comparison does not measure cohort-window gross gain or gross loss. Because it begins around July 2024 — before Cognism's rise to its April 2025 peak — it blends pre-cohort gains with later losses. Use it to identify endpoint replacement patterns and affected content types, not to quantify the mechanics of the January 2025–June 2026 decline. Do not present URL-comparison metrics as though they cover the cohort window.

The record will need a three-window structure (cohort, historical, URL comparison). PH cohort endpoints govern Outcome Classification.

**2. Keywords export window mismatch — comparison dates are Jul 2024 → May 2026.**

Confirmed from "Previous date" and "Current date" columns in the keywords file. The branded/non-branded split from this file (Branded: +9.4%, Non-branded: −47.7%) covers a different and earlier start than the cohort window. For the cohort-window branded split, use Performance History columns 14/16 (Branded: −0.4%, Non-branded: −61.2%).

**3. Keywords export capped at 30,000 rows.**

The export reached the 30K row cap. Any branded/non-branded split from this file is scoped to the 30K-row export population only and should not be stated as a share of all organic traffic.

**4. AIO testing completed — field values updated from targeted Ahrefs SERP Overview validation (2026-08-03).**

Seven target queries validated via Ahrefs SERP Overview exports. AIO was present on all 7 queries (100%). Field values for the record:

- **AIO Presence Observed: Yes** — tool-detected in targeted Ahrefs SERP Overview sample
- **AIO Observed Effect: Not tested** — current citation and ranking status observed, but no historical CTR or traffic evidence isolates AIO's traffic effect
- **Current AIO Citation Outcome: Mixed** — cited 3/7, organic-only 1/7, absent from both AIO and organic on 3/7

Cognism cited in AIO (AI Overview, Thumbnail at pos. 1):
- "what is b2b sales" — AIO cited + organic pos. 4
- "what is prospecting" — AIO cited + organic pos. 8
- "what is b2b lead generation" — AIO cited + organic pos. 3

Cognism not cited in AIO:
- "what is lead generation" — absent from SERP entirely
- "what is b2b marketing" — absent from SERP entirely
- "what is a go-to-market strategy" — absent from SERP entirely
- "what is revenue operations" — organic pos. 11–12 only; not cited in AIO

Pattern: Cognism is cited in AIO where it maintains strong organic rankings (pos. 3–8). It is absent from queries where it has lost organic presence. This indicates partial AIO resistance on maintained pages — not systematic AIO displacement. The two-wave decline pattern and position-bucket cascade are more consistent with Algorithmic Reassessment than AIO interception as the primary mechanism. AIO interception cannot be ruled out for queries where Cognism is absent, but cannot be isolated from algorithmic exclusion without GSC CTR data showing a pre/post AIO-appearance traffic change.

From Ahrefs keyword detection (supporting context, not a substitute for manual testing): 5,868 keywords show AI Overview SERP feature in the current snapshot, representing ~56,728 estimated visits (~52.6% of export current total). Consistent with the manually confirmed AIO presence across the query set.

**5. Organic Competitors are US-scoped; Cognism has significant non-US presence.**

The Competitors export is US-only. Cognism has visible German (/de/) and French (/fr/) subfolders losing traffic. The competitor comparison does not represent Cognism's full market picture. The US-scoped data is still useful for directional comparison against direct peers but should not be used to make conclusions about global category behavior.

**6. Use Algorithmic Reassessment — not Algorithm Update — until update-date mapping is complete.**

The evidence clears the Algorithmic Reassessment threshold: losses are concentrated in non-branded informational URL classes, branded traffic is flat, pricing and homepage surfaces resisted or grew, RDs rose +82.5%, and ranking-page and position-bucket collapses are dramatic. Two discrete portfolio-level events are visible.

However, neither wave has been formally mapped to a named Google update. Under the approved taxonomy, the primary mechanism field should be **Algorithmic Reassessment** until the inflection date review is done. Upgrade to Algorithm Update only if that review produces credible alignment.

| Wave | Period | Signal |
|---|---|---|
| Wave 1 | May–Aug 2025 | Traffic declines from 280,863 (Apr) to 183,232 (Aug), −34.8%. Non-branded drops 237K → 145K. Position 51+ count falls gradually from ~50K range to ~22K–28K range. |
| Wave 2 | Oct 2025 inflection | Ahrefs-estimated ranking page count drops net −247 in one month (1,220 → 973, −20.2%). Positions 51+ collapse from 22,835 to 5,142 (−77.5%) in one month. Traffic continues eroding 183K → 110K through Jun 2026. |

Invariant 13 applies: Algorithm Alignment cannot be rated "Strong" until inflection dates are formally mapped. Default to "Moderate" in the record.

### Two-Wave Trajectory Checkpoints

| Checkpoint | Traffic | Organic Pages | Pos. 1–3 | Pos. 4–10 | Pos. 11–20 | Pos. 21–50 | Pos. 51+ |
|---|---|---|---|---|---|---|---|
| Apr 2025 (peak) | 280,863 | 1,345 | 9,425 | 16,968 | 17,865 | 30,460 | 49,639 |
| Aug 2025 (Wave 1 end) | 183,232 | 1,353 | 8,877 | 12,578 | 14,819 | 27,839 | 28,298 |
| Sep 2025 (pre-Wave 2) | 182,547 | 1,220 | 8,740 | 11,971 | 11,366 | 20,979 | 22,835 |
| Oct 2025 (post-inflection) | 170,783 | 973 | 8,110 | 11,741 | 4,191 | 5,489 | 5,142 |
| Jun 2026 (cohort end) | 110,061 | 748 | 5,814 | 9,146 | 1,458 | 530 | 15 |

Wave 1 is primarily a traffic and non-branded ranking erosion — position counts fall but remain in the tens of thousands. Wave 2 (Oct 2025) is a sharp contraction in ranking-page and long-tail position coverage: net −247 pages and −77.5% of positions 51+ in a single month. The two waves have different shapes and should be treated as potentially distinct mechanism events when the update calendar review is done.

---

## Readiness Status

**Readiness Status:** Ready with Warnings

**Evidence Confidence:**
- Observational confidence (what happened): **High** — monthly trajectory, position cascade, page-count collapse, and branded/non-branded split are all computed directly from Performance History with excellent coverage.
- Causal confidence (why it happened): **Medium** — the pattern is consistent with algorithm-driven quality reassessment affecting non-branded informational content, but the responsible update(s) have not been formally mapped to named Google update dates.

### Confidence by Conclusion

| Finding | Confidence |
|---------|-----------|
| Outcome: Declined −50.7% (223,211 → 110,061, Jan 2025 – Jun 2026) | High |
| 99.0% of total decline is non-branded traffic | High |
| Branded traffic essentially flat (−0.4%) during same period | High |
| Peak Apr 2025 at 280,863; decline of −60.8% from peak to cohort end | High |
| Two discrete inflection events: Wave 1 (May–Aug 2025), Wave 2 (Oct 2025) | High (observation); Low (attribution to specific named updates) |
| Positions 51+ near-total collapse (33,528 → 15, −99.96%) | High |
| Ranking page count dropped −46.6% (1,401 → 748) | High |
| ~92.5% of observed page-level gross loss in blog + other root-level pages; top root-level losses are definitional/comparison pages | High (loss share); Medium (intent classification of root-level bucket) |
| Homepage and pricing pages resistant to the loss pattern | High |
| New competitor-pricing blog content gaining during same period | High |
| RDs grew +82.5% — broad domain-level link loss not a plausible mechanism | High |
| Algorithmic Reassessment mechanism (selective content-type reassessment, responsible update not yet isolated) | Medium |
| Specific Google updates responsible for each wave | Low — not formally mapped; Algorithmic Reassessment is current label pending calendar review |
| ZoomInfo also declined (−19.1%) — partial category-level headwinds | Medium (US-scoped only; ZoomInfo is direct peer) |
| AI Overview present on all 7 tested queries; Cognism cited in AIO on 3/7 (partial resistance on maintained pages) | High (presence); Medium (pattern interpretation) |
| AI Overview interception as primary decline mechanism | Low — position cascade and two-wave pattern more consistent with Algorithmic Reassessment; AIO may contribute on queries where Cognism is absent but cannot be isolated |

### What can be supported

- Full Outcome Summary: Declined −50.7%, 49.3% retention, cohort Jan 2025 – Jun 2026
- Three-window structure (cohort/historical/URL comparison) with documented window dates
- Detailed trajectory narrative covering two-wave inflection pattern
- Position cascade documentation (all five position buckets)
- Content-type analysis: blog + other root-level pages = ~92.5% of observed page-level gross loss; top root-level losses are definitional, comparison, and category pages
- Gain decomposition: 62.1% continuing-URL, 37.9% new-URL; new competitor pricing content growing
- Branded/non-branded attribution: 99.0% of decline is non-branded
- RD-based link-loss exclusion: +82.5% RD growth during same period rules out broad link loss
- Competing explanations table: ZoomInfo also declined (partial category signal), AIO susceptibility noted, link loss excluded
- AIO Portfolio Susceptibility: High (heavy informational content mix; AIO present on all 7 tested queries)
- AIO Presence Observed: Yes — Cognism cited in AIO on 3/7 tested queries (partial resistance pattern on maintained pages); absent from 4/7 including "what is lead generation", "what is b2b marketing", "what is a go-to-market strategy"
- Contributing Mechanisms: informational content reassessment (high confidence); category-level competition (partial; ZoomInfo peers); AIO interception as secondary contributor (possible on queries where Cognism is absent; cannot isolate from algorithmic exclusion without GSC CTR data)

### What cannot be supported without additional data

- Formal algorithm update attribution (which named update caused Wave 1 vs Wave 2) — needs inflection date mapping against Google update calendar
- AIO interception isolated from algorithmic exclusion — manual SERP testing complete; Cognism cited in AIO on 3/7 queries tested. Isolation requires GSC CTR data showing pre/post AIO-appearance traffic change on affected queries
- International market trajectory (UK, DE, FR independently) — no country-level Performance History export
- Commercial impact — no GA4 data
- Pre-cohort baseline (2024 trajectory context) — available in PH but cohort window governs classification

---

*End of v0.1 analysis. Proceed to v0.2 for full record generation.*
