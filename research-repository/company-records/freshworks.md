# Freshworks

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-29. Key interpretive cautions: (1) this is a pure decline case — the study window opens at the peak (410,262, Jan 2025) and closes at the trough (245,955, Jun 2026); there is no recovery phase within the window; (2) the Ahrefs export's "current" side (traffic and traffic value) runs consistently ~9% higher than Pass 2's independently-sourced Jun 2026 figures, while the "previous" side matches almost exactly (99.98%/98.4%); this unexplained asymmetric gap should be flagged before citing current-traffic figures externally; (3) the primary mechanism is a sitewide content/IA redesign (Dew design system, launched Dec 1, 2025 for Freshdesk and Freshservice); this is established at Medium confidence — not High — because (a) the exact month the decline accelerated cannot be pinpointed from Pass 2's two-point data; (b) no direct before/after page-content crawl was reviewed; (c) the category-wide AI-interception factor cannot be cleanly separated from the company-specific redesign effect; (4) the branded/non-branded traffic composition was not computed this pass — it is an open item; (5) backlink growth (+30.3%) in the same window traffic fell (-40.0%) definitively rules out a backlink-decay or authority-penalty explanation; (6) business-strategy deprioritization of CX/Freshdesk was explicitly tested against the page-level data and rejected — the page-level pattern is the reverse of what deliberate deprioritization would produce. Do not upgrade Record Status without recomputing from source exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | Freshworks |
| **Website** | freshworks.com |
| **Category** | Customer Support / Help Desk |
| **Business Model** | B2B SaaS (public company, NASDAQ: FRSH) |
| **Dominant Content Model** | Product-page + support content-led |
| **Company Size** | Enterprise (publicly traded; ~7,500 employees, 2025) |
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
| **Measurement Reliability** | Medium — ~9% current-side gap between Ahrefs export and independently sourced Pass 2 figures (unexplained; documented as a risk flag); URL-bucket cannibalization proxy not comparable to formal Top Pages methodology; direction and trajectory credible |

*Company note: Freshworks went public (NASDAQ: FRSH) September 2021, within one month of its historical traffic peak (542,089, Sep 2021). No causal claim is made from this alone — flagged as pattern, not finding. 2025 was Freshworks' first GAAP-profitable year ($183.7M net income on $838.8M revenue), with a $400M stock buyback authorized — the company was not in financial distress during this decline. In-window corporate events: FireHydrant acquisition announced Dec 2025, closed Jan 2026 (AI-powered incident management; growth-oriented, not distress-driven; falls at the window's tail end); employee reductions of ~11-13% (500-660 employees) attributed to AI-driven restructuring by CEO Dennis Woodside; new CRO Ian Tickle effective March 2026. Key business-model shift: Employee Experience segment (Freshservice, ITSM) ended 2025 at $510M ARR (+26% YoY), overtaking Customer Experience segment (Freshdesk) at $395M ARR (+9% YoY). This EX-overtaking-CX shift is real but was explicitly tested against the page-level data and does not explain which pages lost organic traffic — see Mechanism section.*

---

## Outcome Summary

*All figures carried from original analysis.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 410,262 | Ahrefs Performance export, Jan 2025 |
| Ending Traffic Estimate | 245,955 | Ahrefs Performance export, Jun 2026 |
| Traffic Change % | -40.0% | Calculation Log (Carried) |
| Outcome Classification | Declined | ±10% threshold |
| Traffic Value Change | $1,754,419 → $1,218,469 (-30.5%) | Ahrefs Pass 2 (Carried) |
| Referring Domains Change | 23,809 → 31,022 (+30.3%) | Ahrefs Pass 2 (Carried) |

**Traffic vs. value note:** TV fell -30.5% while traffic fell -40.0% — a meaningful gap in the favorable direction for Freshworks: the keywords lost were, in aggregate, lower-commercial-value than the keywords retained. The highest-value terms were not the primary losses, which is relevant for assessing the true severity of the SEO decline from a business-impact perspective. However, the gap is not large enough to substantially alter the overall negative assessment.

**Historical context:** The study window opens at Freshworks' highest-ever traffic point in the Ahrefs data — 410,262 (Jan 2025). This is already -24.4% below the historical all-time peak of 542,089 (Sep 2021), meaning Freshworks entered the study window already in a multi-year structural decline that predates this window by over three years. The -40.0% within-window decline is a continuation and acceleration of that pre-existing trend, not an isolated new event.

**Category context:** 8 of 11 Customer Support/Help Desk companies declined in the same window — this is a majority-decline category with a genuine, collective headwind (plausibly AI-assistant interception of support/how-to queries category-wide). Freshworks sits mid-pack among the eight decliners: three companies (Help Scout -79.7%, Hiver -83.4%, EngageBay -88.7%) declined far more severely; three others (LiveAgent -20.4%, BoldDesk -14.9%, Gorgias -32.0%) declined at milder rates. The category pressure is real but does not alone explain Freshworks' specific -40.0% rate — there is room for a company-specific factor layered on top.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Steady Decline |
| **Peak Month** | 2025-01 (window start = window peak) |
| **Peak Traffic Estimate** | 410,262 |
| **Trough Month** | 2026-06 (window end = window trough) |
| **Trough Traffic Estimate** | 245,955 |
| **Primary Inflection Date** | No single discrete inflection identified — sustained, continuous decline across the window; Dec 1, 2025 Dew design system launch is the closest dated event, but no step-change month confirmed from two-point Pass 2 data |
| **Current Direction** | Declining (window ends at trough) |

*Trajectory note: The Pass 2 data provides only two endpoint values (Jan 2025, Jun 2026) plus the trajectory label "Steady Decline" — no intermediate monthly series. The decline is described as clean and monotonic-style rather than a single sharp drop or volatile up-and-down pattern. The exact month the decline accelerated (if it did) cannot be pinpointed without monthly data.*

*Historical peak context: 542,089 (Sep 2021). The Jun 2026 window-end (245,955) is 54.7% below this all-time high. The window-start itself was already 24.4% below that peak.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Content Quality (negative: sitewide on-page/IA targeting disrupted by redesign) |
| **Mechanism Pathway** | On-page/IA disruption (likely Dew platform redesign, Dec 2025 — Medium confidence) → 18,656 of 30,000 sampled keyword rows lost rankings entirely across Freshdesk, Freshservice, CRM, and 4+ locales with no backlink decay → Steady Decline with no recovery phase observed in the window (-40.0%) |
| **Mechanism Structure** | Single-phase decline — continuous Steady Decline across the full window, with the externally-confirmed "Dew" redesign (Dec 1, 2025) as the primary candidate event; no recovery phase; category-wide AI-interception pressure as a secondary contributing factor across the full window |
| **Contributing Mechanisms** | Category-wide AI-interception pressure (Low confidence as a primary driver; Partial — only the is-it-down query cluster matches the AIO-interception profile; the majority of lost traffic is commercial/feature-discovery terms not typically intercepted by AI Overviews) |
| **Mechanism Confidence** | Medium — the redesign hypothesis is supported by specific, internally consistent, cross-checked evidence and survives direct testing against the most obvious alternatives, but falls short of High because: the Ahrefs export's current-side traffic runs a consistent unexplained ~9% above Pass 2's figure; no direct before/after crawl of redesigned pages was reviewed; the category-wide pressure cannot be cleanly separated from the company-specific redesign effect |
| **Confidence Rationale** | Supporting evidence: (1) URL-bucket analysis shows 18,656 of 30,000 sampled keyword rows (61% of sampled rows, 31.3% of sampled previous-traffic volume) dropped out of tracked rankings entirely rather than eroding gradually or migrating cleanly to new URLs — a pattern inconsistent with gradual organic erosion or backlink decay; (2) losses span Freshdesk, Freshservice, and CRM product lines and at least four languages/locales (French, Spanish, Brazilian Portuguese, LatAm Spanish) — a sitewide pattern, not a single product or market; (3) affected legacy URLs were not deleted or redirected — they remain live with intact backlink equity per Best by Links, consistent with on-page/content changes within existing pages rather than a URL teardown; (4) the redesign is externally confirmed and dated inside the study window: Freshworks' "Dew" design system launched December 1, 2025 for Freshdesk and Freshservice, as part of a longer multi-year web-property unification effort; (5) the new "platform" URL paths absorbed only a small fraction of the lost traffic (e.g., /products/ gained +1,761 while /freshservice/ lost ~16,500 and /crm/ lost ~37,000). Alternatives explicitly tested and rejected: backlink/authority decay (referring domains grew +30.3% in the same window — directly falsified); deliberate business-strategy deprioritization of CX/Freshdesk (page-level data shows the opposite: Freshdesk -16.1% while Freshservice -48.1%, CRM -63.5% — the slower-growth product line lost the least, not the most); financial distress (2025 was Freshworks' first GAAP-profitable year, $400M buyback authorized). |
| **Strongest Competing Explanation** | The category-wide AI-interception pressure (8/11 category peers also declined) could be the primary driver, with the redesign as a contributing or confounding factor. Without before/after monthly data bracketing the Dec 1, 2025 Dew launch, the hypothesis that the decline would have been less severe without the redesign (the company-specific factor layered on top of category headwind) cannot be confirmed with the available data. |
| **Disconfirming Evidence** | Referring domains grew +30.3% while traffic fell -40.0% — the most important falsification point in this record. A link-penalty or authority-decay explanation is directly ruled out by this divergence; growing backlinks did not protect against traffic decline. |
| **Algorithm Alignment** | Weak — the steady, continuous decline shape across the full window doesn't match a discrete update event; one notable date coincidence (Dew launch Dec 1, 2025, is 10 days before the Dec 11, 2025 core update began), but this entanglement applies to just one portion of the window and the overall shape is inconsistent with algorithm-update causation |
| **AIO Portfolio Susceptibility** | Low-Medium — partially: the is-it-down cluster ("is website down," "check if website is down") is exactly the kind of single-fact lookup that AI Answer Engines and Google AI Overviews can answer directly; the majority of the lost traffic (commercial/feature-discovery terms: "client management software," "omnichannel contact center," "customer care") is not the profile AI Overviews typically intercept |
| **AIO Presence Observed** | Not tested |
| **AIO Observed Effect** | No conclusion — the is-it-down cluster fits the AIO-interception profile but Ahrefs data alone cannot distinguish "the page dropped in ranking" from "the page kept ranking but AI Overviews now intercept the click"; most of the lost traffic is in commercial/feature-discovery terms that do not fit AIO interception, making the primary driver the redesign rather than AI-interception |

---

## Gross-Loss Offset Analysis

*URL-bucket method used (not standard Top Pages methodology — no formal gross gain/gross loss split was extracted from Top Pages directly; the URL-bucket analysis was the primary method for this company).*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain (proxy — newly-ranking bucket) | +7,668 (1,120 URLs) | Ahrefs Organic Keywords export, URL-bucket analysis |
| Gross Loss (proxy — lost-ranking bucket, noise-adjusted) | ~-114,876 (18,656 URLs, after excluding ~4.1% estimated SERP noise) | Ahrefs Organic Keywords export, URL-bucket analysis |
| Net Change (Top Pages level) | Not formally computed via Top Pages; keyword-bucket net ≈ -107,208 | Derived |
| Gross-Loss Offset Rate | Not formally computed via standard methodology — proxy: ~1,498% (114,876 / 7,668) | URL-bucket proxy |
| Offset Zone | Extreme (>100%) — this is a net-loss case; the "Extreme" label reflects the severity of the loss relative to gain, not portfolio reshuffling | — |
| Reconciliation check | Previous-side reconciliation 99.98% (Top Pages 410,359 vs. Pass 2 410,262) — very tight. Current-side unexplained ~9% gap (Ahrefs export runs ~9% higher than Pass 2's independently-sourced Jun 2026 figure) | — |

*Note on methodology difference: the standard cannibalization calculation (Gross Loss ÷ Gross Gain from Top Pages) was not applied for Freshworks because the analysis focused on the URL-bucket method (Previous URL present/absent × Current URL present/absent). The proxy figures above use the "lost-ranking" and "newly-ranking" keyword-export buckets rather than the Top Pages previous/current traffic split. This is methodologically different from the approach used for Hyperproof, LogRocket, Navan, Ramp, etc. — the "~1,498%" proxy rate should not be directly compared to those records' formally computed gross-loss offset rates.*

*Additional URL-prefix analysis (from Top Pages):*
- /freshdesk/ (1,318 pages): 87,752 → 73,652 (-16.1%)
- /freshservice/ (1,199 pages): 38,356 → 19,893 (-48.1%)
- /crm/ (973 pages): 58,215 → 21,253 (-63.5%)
- /it/ (12 pages, newer path): 1,315 → 451 (-65.7%)
- /crm-platform/ (7 pages, newer path): 634 → 460 (-27.4%)
- /products/ (40 pages, newer path): 2,368 → 4,129 (+74.4%, but only +1,761 absolute gain)

*The newer "platform" URL paths are tiny in absolute traffic next to the legacy product sections. Even the one path that grew (/products/, +74.4%) only gained ~1,761, nowhere near enough to offset the ~16,500 lost from /freshservice/ and ~37,000 lost from /crm/.*

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | /website-monitoring/is-it-down/ — single largest identifiable loss cluster (1,526 of 18,656 lost-keyword rows, 16,328 of the lost-bucket's real traffic = 13.6% of the noise-adjusted lost-bucket total) | Ahrefs Organic Keywords export, URL-bucket analysis |
| Top 5 Page Traffic Share | Not formally computed | — |
| Top 10 Page Traffic Share | Not formally computed | — |
| Dominant Content Type | Product feature pages + localized variants across Freshdesk, Freshservice, and CRM product lines | Ahrefs Organic Keywords export, URL-bucket analysis |
| Winning Content Type | Pages that held or gained: "Kept ranking, same URL" bucket stayed essentially flat (-0.7%: 230,344 → 228,664); "Kept ranking, URL changed" lost modestly (-6.5%: 32,651 → 30,515); /products/ URL prefix gained +74.4% (+1,761 absolute) | Ahrefs Organic Keywords export, URL-bucket analysis |
| Losing Content Type | "Lost ranking entirely" bucket: 18,656 keywords, 119,759 previous traffic → 0 current (main losses: (1) /website-monitoring/is-it-down/ cluster — "is it down," "is website down," "check if website is down" — 1,526 rows, ~16,328 real traffic, 13.6% of noise-adjusted bucket; (2) broad multi-product, multi-language feature/brand-term losses: "client management software" (rank 1, lost), "omnichannel contact center" (rank 1, lost), "omnichannel call center" (rank 1, lost), "customer care," "support crm," "crm software," "sdr"/"sales-development-rep" terms, French/Spanish/BPt/LatAm-Spanish localized equivalents spanning at least four locales) | Ahrefs Organic Keywords export, URL-bucket analysis |
| Notable patterns | **Wholesale ranking loss, not gradual erosion:** 61% of sampled keyword rows (31.3% of sampled previous-traffic volume) disappeared entirely from tracked rankings — they were not gradually eroding or migrating to new URLs. Pages that kept ranking on the same URL were essentially flat (-0.7%). **New URL structure absorbed minimal traffic:** newer "platform" URLs (/it/, /crm-platform/, /products/) received a small fraction of the traffic lost from the legacy product sections. **Legacy URLs survive with intact backlinks:** /freshdesk/ (8,844 RDs, first seen 2018), /freshservice/, /crm/ are all live as of Jun 2026 per Best by Links — the pages were not deleted; they kept their URLs and link equity but lost specific keyword rankings, pointing to on-page/content-targeting changes rather than a URL teardown. **Sitewide scope:** losses span three product lines (Freshdesk, Freshservice, CRM) and at least four languages — a sitewide pattern, not a single-product or single-market issue. **Business-strategy narrative doesn't match SEO data:** Freshworks' EX segment (Freshservice) grew faster than CX (Freshdesk) in revenue terms, but Freshservice lost -48.1% traffic vs. Freshdesk's -16.1% — the opposite of what deliberate CX-deprioritization would produce. | Ahrefs Organic Keywords export + Top Pages URL-prefix analysis + Best by Links export |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | None — window ends at the trough (245,955, Jun 2026); no recovery phase within the study window |
| **Recovery Mechanism** | N/A |
| **Recovery Confidence** | N/A |
| **Recovery Notes** | The window opens at the study-window peak and closes at the study-window trough. Whether a recovery began after Jun 2026 is unknown from this dataset. The FireHydrant acquisition (closed Jan 2026) and the Dew redesign completion could theoretically generate a recovery if index consolidation stabilizes rankings — not assessed here. |

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

*Note: AI Observation Protocol not yet run. Priority questions: "Best customer support software," "What is Freshdesk?," "Freshdesk vs Zendesk," "Is [website] down?" (to test whether the is-it-down queries now generate AI Answers rather than directing users to freshworks.com tools). The "is website down" query type is the most directly testable AIO-interception hypothesis in this record.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | High — customer support, ITSM, and CRM content (feature discovery, category queries, product comparison) directly serves the IT and CS buyer personas who purchase platforms like Freshworks; the majority of lost traffic is in commercial/feature-discovery terms that are pipeline-relevant |
| **Best-Fit Client Type** | B2B SaaS companies planning or executing a site redesign, platform unification, or IA overhaul; companies that have already launched a redesign and are seeing traffic decline; companies auditing why a redesign did not preserve existing rankings |
| **Best-Fit Problem** | "We're about to redesign our site — what can we do to protect our existing organic rankings?" / "We launched a redesign and our traffic fell — why, and how do we recover?" / "Our authority is growing but our traffic is falling — what's wrong?" |
| **Relevance Conditions** | Client has or is planning a significant on-page/IA change without a full URL-structure overhaul; client has a multi-product site with localized content variants; client's traffic is declining while its backlink profile is growing (the Freshworks pattern) |
| **Non-Comparable When** | Client's traffic decline is concentrated in a single product or a single market (Freshworks' losses were sitewide across products and locales); client is small enough that a URL-bucket analysis of 18,656+ lost-keyword rows is impractical to run at the same scale |
| **Primary Lesson** | A site redesign that does not change URLs and does not remove backlinks can still cause wholesale ranking loss at scale. Freshworks' legacy pages (/freshdesk/, /freshservice/, /crm/) were never deleted, never redirected, and never lost their backlink equity — yet 18,656 of 30,000 sampled keyword rankings simply disappeared. The cause is on-page/content-targeting changes within existing pages (copy rewrites, IA restructuring, internal-link changes) that disrupted how Googlebot interpreted the page's topical focus. The single most actionable takeaway: before launching any redesign, audit current keyword-level rankings page by page — not just page performance in aggregate — and treat ranking preservation as an explicit launch requirement, not an assumed byproduct of "the URL still exists." |
| **Counterintuitive finding** | Freshworks' backlinks grew +30.3% in the same window its organic traffic fell -40.0%. A growing backlink profile does not protect against a ranking decline caused by on-page content changes. Authority and on-page execution are separate, independently-moving levers. |
| **Evidence Use** | Cautionary (redesign risk — the primary lesson); Diagnostic (authority vs. traffic divergence as a signal for on-page, not backlink, problems); Comparative (mid-pack among category decliners — neither the most nor the least severe) |
| **Evidence Basis** | Based on Ahrefs Top Pages, organic keywords, performance, and Best by Links exports covering January 2025 through June 2026. No monthly perf file for intermediate trajectory. Branded/non-branded split not computed this pass. Current-side ~9% gap between Ahrefs export and Pass 2 independently-sourced figures — flagged, unexplained. All traffic figures are Ahrefs third-party estimates. "Dew" redesign confirmed via WebSearch (BusinessWire, multiple tech outlets, dated December 1, 2025). |

---

## Risk Flags

- **Unexplained current-side traffic gap (~9%):** The Ahrefs export's current-side traffic and TV run consistently ~9% higher than Pass 2's independently-sourced Jun 2026 figures, while the previous side matches at 99.98%/98.4%. This asymmetric gap is unexplained and should be flagged before citing specific current-traffic figures externally. The window start (410,262) is highly reliable; the window end (245,955) should be cited with this caveat.
- **Branded/non-branded traffic composition not computed:** This is an open item from the original analysis. Without it, the relative contribution of brand-name search demand vs. category/feature queries to the total decline cannot be formally stated.
- **No before/after page-content crawl:** The redesign hypothesis is supported by the URL-bucket analysis pattern and external corroboration of the event, but the specific on-page changes that caused the ranking losses were not directly audited via a cached-content comparison.
- **Exact month of decline acceleration unknown:** Pass 2 provides only two endpoint values. Whether the Dec 1, 2025 Dew launch accelerated a pre-existing decline or caused it cannot be confirmed without monthly data.
- **Category-wide AI-interception not cleanly separated:** The 8/11 category-peers-declining pattern is real; the Freshworks-specific company-level contribution versus the category-level contribution cannot be cleanly isolated with the available data.
- **AI Observation Protocol not run:** The is-it-down cluster specifically warrants an AIO spot-check.
- **SERP noise in the lost-ranking bucket:** ~4.1% of the top-30-by-traffic spot check in the lost-ranking bucket was identified as likely off-topic SERP noise (an Instagram-mod-app query, gambling-adjacent forum queries). The remaining 96% was not exhaustively row-by-row audited.

---

## Related Documents

- Comparison briefs: None currently filed for Freshworks directly. The Customer Support/Help Desk category includes Sprinkler, Gorgias, Help Scout; no Freshworks-specific comparison brief exists.
- Synthesis documents: `synthesis-matrix.md`
- Studies: —
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (lines 368–536); Customer Support / Help Desk category; Q2 (decline case)

---

## Calculation Log

*All values carried from original analysis.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Performance export | Starting 410,262 (Jan 2025); Ending 245,955 (Jun 2026) | All | (245,955 − 410,262) / 410,262 | -40.0% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 | Starting $1,754,419; Ending $1,218,469 | All | (1,218,469 − 1,754,419) / 1,754,419 | -30.5% | Carried |
| Referring Domains Change % | Ahrefs Pass 2 | Starting 23,809; Ending 31,022 | All | (31,022 − 23,809) / 23,809 | +30.3% | Carried |
| Historical peak | Ahrefs historical data | Sep 2021 | Historical | Direct read | 542,089 | Carried |
| Window-open vs. historical peak | Derived | Historical peak 542,089; Window open 410,262 | Historical | (410,262 − 542,089) / 542,089 | -24.4% | Carried |
| Window-end vs. historical peak | Derived | Historical peak 542,089; Window end 245,955 | Historical | (245,955 − 542,089) / 542,089 | -54.6% | Carried |
| Previous-side export reconciliation | Ahrefs Top Pages vs. Pass 2 | 410,359 (export) vs. 410,262 (Pass 2) | Previous side | 410,359 / 410,262 | 99.98% ✓ | Carried |
| Current-side export gap | Ahrefs Top Pages vs. Pass 2 | ~9% gap (Ahrefs export runs consistently higher) | Current side | Directional only | ~9% unexplained gap | Carried — flagged as risk |
| URL-bucket: kept ranking same URL | Ahrefs Keywords export | 8,216 rows | Same URL both periods | 228,664 − 230,344 | -1,680 (-0.7%) | Carried |
| URL-bucket: kept ranking URL changed | Ahrefs Keywords export | 2,008 rows | URL changed, both periods ranked | 30,515 − 32,651 | -2,136 (-6.5%) | Carried |
| URL-bucket: lost ranking entirely | Ahrefs Keywords export | 18,656 rows | Previous URL present, current absent | 0 − 119,759 | -119,759 (row total) | Carried |
| URL-bucket: newly ranking | Ahrefs Keywords export | 1,120 rows | Current URL present, previous absent | 7,668 − 0 | +7,668 | Carried |
| Lost-bucket SERP noise estimate | URL-bucket spot check, top 30 by traffic | ~4.1% of top-30 identified as off-topic | Noise subset | 0.041 × 119,759 | ~4,883 estimated noise | Carried — estimated |
| Lost-bucket noise-adjusted | Derived | 119,759 − 4,883 | Adjusted | 119,759 − 4,883 | ~114,876 | Carried — estimated |
| is-it-down cluster: rows | Ahrefs Keywords export | /website-monitoring/is-it-down/ URL | Single page/cluster | Direct count | 1,526 rows | Carried |
| is-it-down cluster: traffic | Derived | 1,526 rows from lost-bucket | Single page/cluster | Direct sum | ~16,328 | Carried |
| is-it-down as % of noise-adjusted lost bucket | Derived | 16,328 / 114,876 | Cluster / bucket | 16,328 / 114,876 | 13.6% | Carried |
| /freshdesk/ traffic change | Top Pages URL-prefix | 87,752 → 73,652 | /freshdesk/ prefix | (73,652 − 87,752) / 87,752 | -16.1% | Carried |
| /freshservice/ traffic change | Top Pages URL-prefix | 38,356 → 19,893 | /freshservice/ prefix | (19,893 − 38,356) / 38,356 | -48.1% | Carried |
| /crm/ traffic change | Top Pages URL-prefix | 58,215 → 21,253 | /crm/ prefix | (21,253 − 58,215) / 58,215 | -63.5% | Carried |
| Referring domains: /freshdesk/ | Best by Links | /freshdesk/ as of Jun 2026 | Single URL | Direct read | 8,844 RDs (live, first seen 2018) | Carried |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Performance export | Monthly traffic summary (two-point: Jan 2025 start; Jun 2026 end) | CSV | Jan 2025 – Jun 2026 | No intermediate monthly series available this pass — "Steady Decline" label is from Pass 2 notes, not a monthly chart. Current-side ~9% gap vs. Pass 2 (unexplained, flagged). |
| Ahrefs Organic Keywords export | All ranking keywords with previous/current URL columns; 30,000-row cap | CSV | Jan 2025 – Jun 2026 | Primary source for URL-bucket analysis (18,656 lost-ranking rows). |
| Ahrefs Top Pages export | Top ranking pages with previous and current traffic | CSV | Jan 2025 – Jun 2026 | Previous sum 410,359 (99.98% to Pass 2). Used for URL-prefix analysis (/freshdesk/, /freshservice/, /crm/). |
| Ahrefs Best by Links (BBL) export | Per-page backlinks/referring domains; as-of-Jun-2026 live status | CSV | As of Jun 2026 | Source of legacy URL survival confirmation (/freshdesk/ 8,844 RDs, still live). |
| WebSearch (off-content events) | Dew design system launch (Dec 1, 2025), FireHydrant acquisition, workforce reduction, business financials, EX vs. CX ARR split | Web | 2025–2026 | "Dew" launch: BusinessWire and multiple outlets. ARR split: company earnings reports. Workforce reduction: CEO Dennis Woodside public statements. |

---

## Narrative

### Company Overview

Freshworks is a publicly-traded B2B SaaS company (NASDAQ: FRSH, IPO September 2021) with a multi-product portfolio including Freshdesk (customer support), Freshservice (IT service management), and CRM. Revenue reached $838.8M in 2025 (first GAAP-profitable year, $183.7M net income), with the Employee Experience segment (Freshservice) overtaking the Customer Experience segment (Freshdesk) in ARR — a real business-mix shift that was explicitly tested against the organic-traffic data and does not explain the observed page-level losses.

### Traffic Trajectory

Freshworks' organic estimated traffic declined from 410,262 (January 2025) to 245,955 (June 2026), -40.0%. The window opens at the study-window peak and closes at the study-window trough — a clean, continuous Steady Decline with no recovery phase within the window. This continues a pre-existing multi-year decline from the all-time historical peak of 542,089 (September 2021, within one month of the company's IPO).

### Mechanism Analysis

**Primary mechanism (Medium confidence):** A sitewide content/IA redesign, externally confirmed as Freshworks' "Dew" design system launch (December 1, 2025, for Freshdesk and Freshservice, within a broader multi-year web-property unification effort), is the primary candidate. The central evidence is the URL-bucket analysis: 18,656 of 30,000 sampled keyword rows (61% of rows) stopped appearing in tracked rankings between the two snapshots — not gradual erosion, not URL migration, but wholesale disappearance. The affected pages span Freshdesk, Freshservice, and CRM product lines and at least four locales (English, French, Spanish, Brazilian Portuguese, LatAm Spanish). The legacy URLs themselves were not deleted or redirected — they remain live as of June 2026 with intact backlink equity per Best by Links. This points toward on-page/content-targeting changes within existing pages (copy, IA, internal linking) rather than a URL teardown.

The new "platform" URL paths (/it/, /crm-platform/, /products/) absorbed only a small fraction of what was lost. Even /products/ — the only prefix that grew (+74.4%) — gained only ~1,761 absolute traffic, nowhere near offsetting the 16,500+ lost from /freshservice/ and 37,000+ lost from /crm/.

**Alternatives explicitly tested and rejected:**
- *Backlink/authority decay:* Definitively ruled out — referring domains grew +30.3% in the same window traffic fell -40.0%. A growing backlink profile did not protect against the on-page ranking losses.
- *Business-strategy deprioritization of CX/Freshdesk:* The page-level data shows the opposite pattern. If Freshworks were deliberately deprioritizing Freshdesk/CX content (the slower-growing product segment), Freshdesk should show the deepest losses; instead it lost the least (-16.1%) while Freshservice (-48.1%) and CRM (-63.5%) lost the most.
- *Financial distress or M&A disruption:* 2025 was Freshworks' first GAAP-profitable year with a $400M buyback authorized. The FireHydrant acquisition is growth-oriented and falls at the window's tail end.

**Contributing factor — category-wide AI-interception pressure (Low confidence as primary driver):** 8 of 11 Customer Support/Help Desk category peers declined in the same window, suggesting a real collective headwind, plausibly AI-assistant interception of support/how-to queries category-wide. One specific cluster — /website-monitoring/is-it-down/ (1,526 rows, ~16,328 traffic) — is exactly the kind of single-fact lookup that AI Answer Engines can answer directly. This is real but narrow (13.6% of the noise-adjusted lost bucket); the dominant pattern is commercial/feature-discovery terms that don't fit AIO interception, making the redesign the larger driver.

### The Counterintuitive Finding

Freshworks' backlinks grew +30.3% while its organic traffic fell -40.0% — the most important data point in this record. Authority and on-page execution are separate, independently-moving levers. This is a useful diagnostic signal: when a site's backlink profile is growing but traffic is falling, the cause is almost always on-page/content changes rather than a link penalty or authority decay.

### Client Applicability

Freshworks is the repository's primary cautionary case for redesign risk at scale. It is directly applicable to any client planning or recently completing a significant site restructuring, platform consolidation, or IA overhaul — especially one that preserves existing URLs. The lesson is specific: preserving URLs and backlinks is necessary but not sufficient. The on-page content targeting of existing pages must also be explicitly preserved and monitored, or wholesale ranking losses can occur even with no URL changes and no backlink decay.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off.*

**Calculation Log**
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All key metrics are Carried
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (245,955 − 410,262) / 410,262 = -40.0% ✓

**Known unresolved items**
- ⚠ Unexplained ~9% current-side gap between Ahrefs export and Pass 2 — should be disclosed before external citation of current-traffic figure
- ⚠ Branded/non-branded composition not computed — open item from original analysis
- ⚠ Exact month of decline acceleration unknown — no intermediate monthly data
- ⚠ Category-wide AI-interception not cleanly separated from company-specific redesign effect
- ⚠ AI Observation Protocol not run — is-it-down cluster specifically warrants AIO spot-check
- ⚠ ~4.1% SERP noise estimate in the lost-ranking bucket is based on a top-30 spot check, not a full audit

**Client Applicability**
- ✓ Primary lesson documented with specific page-level evidence (URL-bucket counts, URL-prefix analysis, legacy-URL survival)
- ✓ Counterintuitive finding (backlinks ↑ while traffic ↓) documented prominently
- ✓ External Use Status = Internal only

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** Migration to V2.3 repository format
- **Sections updated:** All (initial migration from phase3-deep-dives.md lines 368–536)
- **Summary:** All metrics carried from original 2026-06-29 analysis. Steady Decline trajectory documented (window opens at peak, closes at trough). Primary mechanism: Content Quality (negative — sitewide on-page/IA targeting disrupted by Dew redesign) at Medium confidence. Three alternatives explicitly tested and rejected: backlink decay (definitively ruled out — RDs +30.3%); business-strategy deprioritization of CX/Freshdesk (page-level data shows reverse pattern); financial distress (GAAP profitable, $400M buyback). URL-bucket analysis documented (18,656 of 30,000 sampled rows lost ranking entirely). URL-prefix analysis documented (/freshdesk/ -16.1%, /freshservice/ -48.1%, /crm/ -63.5%). AIO contribution Low confidence (only the is-it-down cluster matches AIO-interception profile). V2.3 schema applied: AIO 3-field split (Susceptibility: Low-Medium, Presence: Not tested, Effect: No conclusion). Commercial Alignment: High. Current-side ~9% export gap flagged as risk. Cannibalization rate documented via URL-bucket proxy method (not standard Top Pages methodology).

---

*Record finalized: 2026-07-28 | Last verified: —*
