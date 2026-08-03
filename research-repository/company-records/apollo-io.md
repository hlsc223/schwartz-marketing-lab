# Apollo.io

---

## Header

| Field | Value |
|-------|-------|
| **Company** | Apollo.io |
| **Website** | apollo.io |
| **Category** | Sales Engagement |
| **Business Model** | B2B SaaS |
| **Dominant Content Model** | Programmatic |
| **Company Size** | Mid-Market |
| **Study Window** | 2025-01 to 2026-06 (cohort window — see Window Definitions below) |
| **Analysis Date** | 2026-08-03 |
| **Record Finalized Date** | — |
| **Last Verified Date** | 2026-08-03 |
| **Methodology Version** | V2.3 |
| **Record Status** | Draft |
| **Migration Validation Stage** | N/A — new record |
| **External Use Status** | Internal only |
| **Data Provenance** | Ahrefs Export |
| **Calculation Verified** | Yes — all key metrics reproduced from source |
| **Measurement Reliability** | Medium — direction and composition of losses are credible across multiple corroborating exports; 30K row cap on Top Pages means Gross Loss is a floor estimate; absence of GSC/GA4 caps mechanism confidence; monthly Performance History provides reliable trajectory data |

### Window Definitions

Three date windows apply to this record. They do not fully overlap. Metrics must not be mixed across windows.

| Window | Dates | Used for |
|--------|-------|---------|
| Cohort study window | 2025-01 to 2026-06 | Outcome classification; cohort comparisons; Outcome Summary fields |
| Historical trajectory window | 2024-07 to 2026-08 | Inflection points; trough/peak dating; broader context; mechanism analysis |
| URL comparison window | 2024-07-31 to 2026-07-31 | Gross Gain/Loss; Offset Rate; page concentration; content-type analysis |

### Window-to-Conclusion Mapping

| Conclusion Type | Governing Window |
|-----------------|-----------------|
| Outcome classification | Cohort |
| Traffic trajectory / inflection / trough / peak | Historical |
| Gross Gain/Loss / Offset Rate / content-type analysis | URL Comparison |

*Dominant Content Model note: "Programmatic" describes the organic strategy that defined Apollo's pre-cohort search footprint — hundreds of thousands of company and people database pages. The broader traffic decline began before the cohort window opened. Across the July 2024–July 2026 URL comparison, programmatic company and people pages accounted for 85.5% of observed page-level gross loss. The current traffic footprint is dominated by product and homepage pages, but the programmatic strategy is what shaped (and destabilized) the property's organic profile. The distinction between historical content model and current traffic type is relevant to all mechanism conclusions.*

---

## Outcome Summary

*All Outcome Summary figures use the cohort study window (2025-01 to 2026-06) for cross-repository comparability.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 268,840 | Performance History (traffic), Jan 2025 |
| Ending Traffic Estimate | 364,773 | Performance History (traffic), Jun 2026 |
| Traffic Change % | +35.7% | Calculation Log |
| Traffic Retention | 135.7% | Calculation Log |
| Outcome Classification | Grew | ±10% threshold |
| Traffic Value Change | Not extracted | Ahrefs export not pulled for this metric |
| Referring Domains Change | +141.2% (7,971 → 19,227) | Calculation Log — measured over historical trajectory window (Jul 2024 – Aug 2026); all-time high at end of window |

**Broader historical context:** The cohort window opened near a trough. Apollo declined from 362,903 (Jul 2024) to 249,168 (Feb 2025) before recovering. The Grew classification reflects the recovery phase that the cohort window captured, not the full preceding decline-and-recovery cycle. Window sensitivity matters in this case. The standardized cohort window happens to begin near Apollo's trough and therefore captures the recovery phase. The broader historical window captures the preceding decline and subsequent pullback. Both descriptions are accurate because they answer different questions.

By the end of the historical trajectory window (Aug 2026), traffic had pulled back to 303,142 — 16.5% below the Jul 2024 historical starting point, and 21% below the May 2026 peak.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Decline then Recovery |
| **Peak Month** | 2026-05 |
| **Peak Traffic Estimate** | 383,046 |
| **Trough Month** | 2025-02 |
| **Trough Traffic Estimate** | 249,168 |
| **Primary Inflection Date** | 2024-08 to 2024-11 (gradual onset in the historical window; acceleration visible by Nov 2024) |
| **Current Direction** | Declining (provisional — 3-month pullback from May 2026 peak; insufficient data to classify as seasonal or structural) |

*All trajectory fields use the historical trajectory window (Jul 2024 – Aug 2026).*

*Historical context: Apollo.io's all-time organic traffic peak was approximately 1,042,637 in December 2019. The historical trajectory window opens at 362,903 (Jul 2024), already well below that peak. Within the historical window, traffic declined from 362,903 to a trough of 249,168 (Feb 2025), then recovered to 383,046 (May 2026) before pulling back to 303,142 (Aug 2026). The cohort window (Jan 2025 – Jun 2026) spans from trough to peak, which is why the cohort outcome is Grew while the historical arc is more complex.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Algorithmic Reassessment |
| **Mechanism Pathway** | Large-scale loss of visibility concentrated in programmatic company and people database pages → mass traffic loss from /companies/ and /people/ URL populations → net traffic decline in the historical window despite concurrent non-branded and editorial content gains |
| **Contributing Mechanisms** | Content Quality — Low confidence; inferred from page model, not directly audited |
| **Mechanism Confidence** | Medium |
| **Confidence Rationale** | The evidence supports a selective, page-type-specific event rather than a domain-wide penalty: 85.5% of observed page-level gross loss is concentrated in two programmatic content types (/companies/ and /people/ pages, documented via URL-prefix filter), referring domains grew +141.2% during the same period traffic declined, and non-branded traffic grew materially within the historical window. These three patterns together weigh against a domain-wide authority or link-loss explanation and point toward a more selective page-type or content-model effect. Mechanism confidence is Medium rather than High because: (1) the inflection date has not been formally aligned to specific named Google updates; (2) Cognism holding broadly flat over the same window narrows but does not isolate the mechanism — Cognism's content architecture may differ significantly from Apollo's; (3) no GSC position data is available to confirm ranking collapse preceded traffic loss rather than demand decline. |
| **Strongest Competing Explanation** | Competitive displacement or SERP replacement: other vendors, first-party company pages, directories, or changing result types may have displaced Apollo's company and people pages. Cognism's broadly flat trajectory shows the decline was not universal across contact-data vendors, but it does not rule out displacement to other sites or result formats. |
| **Disconfirming Evidence** | Cognism (closest direct category peer) remained broadly stable (−1.5%) over the same historical window, indicating the decline was not universal across all similar vendors. However, the content architectures of the two properties may differ enough to make direct inference difficult. |
| **Algorithm Alignment** | Moderate — content type and loss pattern are compatible with algorithmic reassessment of programmatic database pages; inflection timing not formally mapped to known Google update dates |
| **AIO Portfolio Susceptibility** | Medium — a substantial share of keyword export traffic carries informational intent classification, but much of this is branded or navigational traffic in international markets rather than genuinely informational commercial queries |
| **AIO Presence Observed** | Not tested |
| **AIO Observed Effect** | Not tested |

---

## Gross-Loss Offset Analysis

*All figures from the URL comparison window (Jul 31, 2024 – Jul 31, 2026). This window does not extend through August 2026.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | 132,226 | Top Pages export |
| Gross Loss (absolute) | 170,038 | Top Pages export |
| Net Change | −37,812 | Calculation Log |
| Gross-Loss Offset Rate | 128.6% | Calculation Log |
| Offset Zone | Extreme (>100%) | |
| Reconciliation check | Yes — Gross Gain − Gross Loss = Net Change (exact within Top Pages export population) | |

*Gross Loss is a floor estimate. The Top Pages export hit the 30,000-row cap with 29,208 programmatic URLs recorded as lost alone — the true number of lost pages and the true magnitude of gross loss are both higher.*

---

## Page & Content Analysis

*All figures from the URL comparison window (Jul 31, 2024 – Jul 31, 2026).*

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | ~59.2% (homepage) | Top Pages export — current period |
| Top 5 Page Traffic Share | 76.0% | Top Pages export |
| Top 10 Page Traffic Share | 84.8% | Top Pages export |
| Dominant Content Type (current footprint) | Product / Homepage (navigational) | Top Pages export |
| Winning Content Type | Product pages, Chrome extension pages, localized pages (/es, /pt, /fr), selected editorial content | Top Pages export |
| Losing Content Type | Programmatic — /companies/ database pages (23,925 URLs, 119,527 gross loss) and /people/ directory pages (5,283 URLs, 25,931 gross loss) | Top Pages export — URL-prefix filter |
| Combined programmatic loss | 29,208 URLs, 145,458 gross loss, 85.5% of observed page-level gross loss | Calculation Log |
| New-URL Gain Share | 51.8% — 565 new URLs generated 68,530 of 132,226 gross gain | Top Pages export |
| Continuing-URL Gain Share | 48.2% — improving continuing URLs generated 63,696 of 132,226 gross gain | Top Pages export |
| Page Replacement Pattern | Partial replacement — recovery was split between new pages (51.8%) and improving continuing pages (48.2%); neither replaced the lost programmatic population, which did not itself recover |

*Filter rule for programmatic URL classification: URL path begins with /companies/ or /people/ (applied to the parsed URL path from Ahrefs Top Pages export). The URL comparison uses the full apollo.io domain including all subdomains (www, app, knowledge, etc.).*

*Notable patterns: The homepage alone accounts for approximately 59.2% of all current traffic. The top 10 pages represent 84.8% of the total footprint — a highly concentrated property relative to the distributed footprint that existed when the programmatic pages were active. Non-branded monthly traffic grew from ~70K (Jul 2024), peaking at 154,589 in May 2026 before moderating to 142,538 in June and 73,326 by August, suggesting gains across product, editorial, and localized content during the same period the programmatic pages were losing visibility.*

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | Partial |
| **Recovery Mechanism** | Replacement growth outside the lost programmatic URL population — approximately half from 565 new URLs (68,530 gross gain, 51.8%) and half from improving continuing URLs (63,696 gross gain, 48.2%). Leading gain categories include the homepage and navigational surfaces, Chrome extension and app pages, localized pages, and selected product or editorial content. The lost /companies/ and /people/ URLs were not contributing estimated traffic at the end of the URL comparison window. |
| **Recovery Confidence** | Medium |
| **Recovery Notes** | The recovery from Feb 2025 trough (+53.7% to May 2026) briefly exceeded the historical trajectory window starting point, reaching 383,046 in May 2026 vs 362,903 in July 2024. Traffic has since pulled back to 303,142 (Aug 2026). The current 3-month pullback from peak is too short to characterize as seasonal or structural. The non-branded traffic reading for June 2026 (142,538) pulled back sharply to 73,326 by August 2026, adding uncertainty to the recovery narrative. |

---

## AI Discoverability

| Field | Value |
|-------|-------|
| **Measured** | No |
| **Analysis Date** | — |
| **Data Source(s)** | — |
| **AI Visibility Strength** | Unknown |
| **AI Discoverability Trend** | Unknown |
| **Trend Compared To** | — |

*Note: Ahrefs dashboard showed approximately 3,300 "AI responses" tracked for the domain. This reflects Ahrefs' AI Overview detection only — not a comprehensive AI discoverability assessment. No formal study has been conducted.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Mixed — the current organic footprint (homepage + product pages ≈ 68% of traffic) is high commercial alignment; the lost programmatic pages (/companies/, /people/) were low commercial alignment. The property is now more commercially relevant than before the programmatic collapse but far more concentrated and fragile. |
| **Best-Fit Client Type** | B2B SaaS companies running or considering programmatic content at scale (company directories, people pages, integration pages, entity-based databases) |
| **Best-Fit Problem** | "We built programmatic pages and our traffic collapsed — what happened and can we rebuild?" or "We're planning a large programmatic content strategy — what are the risks?" |
| **Relevance Conditions** | Client has or had a large URL footprint of entity-based programmatic pages; experienced concentrated URL-level losses rather than broad position decline across all content types; category is adjacent to B2B SaaS |
| **Non-Comparable When** | Client's decline is broad-based across all content types; client has no programmatic content; client operates in a category with meaningfully different Google treatment (e.g., YMYL, news) |
| **Primary Lesson** | A programmatic database strategy can drive substantial organic traffic but concentrates risk in a content type vulnerable to selective algorithmic reassessment. When a selective visibility loss affects a programmatic page population, referring-domain growth and broader brand strength may not protect that page type. Recovery may happen through replacement growth, but it can occur from a trough position that misrepresents the full traffic arc. |
| **Evidence Use** | Cautionary / Diagnostic |
| **Evidence Basis** | Based on Ahrefs Top Pages, Performance History (traffic and RD), Organic Keywords, Organic Competitors, and Referring Domains exports. Company background sourced from Apollo's public company materials (company/about page, product documentation). Organic-performance findings derive solely from the Ahrefs exports listed in Source Files. |

---

## Risk Flags

- **Programmatic visibility collapse** — At least 29,208 programmatic URLs (/companies/ and /people/) that previously generated estimated traffic now register zero current traffic in the URL comparison. The export alone cannot determine whether they were deindexed, deranked, redirected, removed, or lost search demand. True count and true loss are both higher due to the 30K row cap.
- **Extreme homepage dependence** — single page (~59.2% of all current traffic) creates structural fragility; any ranking or CTR change to the homepage has outsized impact on total property performance.
- **Brand-dependent traffic** — 76% of keyword export traffic is classified as branded; top "non-branded" keywords include navigational variants in international markets. True commercially non-branded share is smaller than the export figure implies.
- **Non-branded spike unresolved** — Jun 2026 non-branded reading (142,538) pulled back sharply to 73,326 by Aug 2026; whether this was a temporary ranking event or normalizing from an anomaly is unknown.
- **Recovery direction unclear** — 3-month pullback from May 2026 peak is too short to distinguish seasonal from structural decline resumption.
- **Window sensitivity** — the cohort outcome (Grew, +35.7%) and the historical arc (decline, recovery, pullback) are both accurate but describe different windows. Presenting the cohort outcome without the historical context risks overstating the property's health.
- **International traffic uncharacterized** — Organic Competitors export is US-scoped; India and Nigeria represent a material share of actual traffic, so category-level competitor dynamics in those markets are uncharacterized.

---

## Related Documents

- Comparison briefs: None
- Synthesis documents: None
- Studies: None
- Report references: Research Repository V2.3

---

## Calculation Log

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status | Notes |
|--------|-------------|----------------------|---------------------|---------|----------------|---------------------|-------|
| **COHORT STUDY WINDOW (2025-01 to 2026-06)** | | | | | | | |
| Starting Traffic Estimate (cohort) | Performance History (traffic) | Avg. organic traffic | 2025-01 row | Direct read | 268,840 | Recomputed | Cohort window start; outcome classification uses this |
| Ending Traffic Estimate (cohort) | Performance History (traffic) | Avg. organic traffic | 2026-06 row | Direct read | 364,773 | Recomputed | Cohort window end |
| Traffic Change % (cohort) | Performance History (traffic) | 2025-01 vs 2026-06 | — | (364,773 − 268,840) / 268,840 | +35.7% | Recomputed | Outcome: Grew |
| Traffic Retention (cohort) | Performance History (traffic) | 2025-01 vs 2026-06 | — | 364,773 / 268,840 | 135.7% | Recomputed | |
| **HISTORICAL TRAJECTORY WINDOW (2024-07 to 2026-08)** | | | | | | | |
| Starting Traffic (historical) | Performance History (traffic) | Avg. organic traffic | 2024-07 row | Direct read | 362,903 | Recomputed | Context only; not used for outcome classification |
| Ending Traffic (historical) | Performance History (traffic) | Avg. organic traffic | 2026-08 row | Direct read | 303,142 | Recomputed | |
| Traffic Change % (historical) | Performance History (traffic) | 2024-07 vs 2026-08 | — | (303,142 − 362,903) / 362,903 | −16.5% | Recomputed | Broader historical context; not the cohort outcome |
| Trough Traffic | Performance History (traffic) | Avg. organic traffic | 2025-02 row | Direct read | 249,168 | Recomputed | |
| Trough-to-peak recovery % | Performance History (traffic) | 2025-02 vs 2026-05 | — | (383,046 − 249,168) / 249,168 | +53.7% | Recomputed | |
| Within-window peak | Performance History (traffic) | Avg. organic traffic | 2026-05 row | Direct read | 383,046 | Recomputed | |
| Peak-to-current change % | Performance History (traffic) | 2026-05 vs 2026-08 | — | (303,142 − 383,046) / 383,046 | −20.9% | Recomputed | |
| Non-branded traffic, Jul 2024 | Performance History (traffic) | Organic traffic: Non-branded | 2024-07 row | Direct read | 69,527 | Recomputed | |
| Non-branded traffic, Jun 2026 peak | Performance History (traffic) | Organic traffic: Non-branded | 2026-06 row | Direct read | 142,538 | Recomputed | Cohort window endpoint non-branded reading |
| Non-branded traffic, Aug 2026 | Performance History (traffic) | Organic traffic: Non-branded | 2026-08 row | Direct read | 73,326 | Recomputed | Pulled back from Jun 2026; uncertainty on trajectory |
| Referring Domains, start (historical) | Performance History (RD) | Referring domains | 2024-07 row | Direct read | 7,971 | Recomputed | |
| Referring Domains, end (historical) | Performance History (RD) | Referring domains | 2026-08 row | Direct read | 19,227 | Recomputed | All-time high |
| RD Change over historical window | Calculation | 2024-07 vs 2026-08 | — | (19,227 − 7,971) / 7,971 | +141.2% | Recomputed | Link loss as primary driver weighs against this pattern |
| **URL COMPARISON WINDOW (2024-07-31 to 2026-07-31)** | | | | | | | |
| Starting Traffic (Top Pages alt) | Top Pages CSV | SUM(Previous traffic) | All rows | Sum | 341,300 | Recomputed | 6.3% lower than Performance History Jul 2024 — different methodology; supporting reference only; not used for outcome |
| Ending Traffic (Top Pages alt) | Top Pages CSV | SUM(Current traffic) | All rows | Sum | 303,488 | Recomputed | |
| Source reconciliation | Performance History vs. Top Pages | Starting figures | — | 362,903 vs 341,300 | Δ = 21,603 (6.3%) | Recomputed | Expected — monthly average vs. snapshot period; do not mix sources |
| Gross Gain | Top Pages CSV | Traffic change column | URLs where Current − Previous > 0 | SUM(positive changes) | 132,226 | Recomputed | Floor estimate — 30K row cap |
| Gross Loss | Top Pages CSV | Traffic change column | URLs where Current − Previous < 0 | ABS(SUM(negative changes)) | 170,038 | Recomputed | Floor estimate — true loss higher |
| Net Change | Calculation | Gross Gain − Gross Loss | Same population | 132,226 − 170,038 | −37,812 | Recomputed | |
| Reconciliation check | Calculation | Net Change vs Top Pages endpoint delta | Top Pages population only | −37,812 = 303,488 − 341,300 | ✓ Exact | Recomputed | Does not reconcile to Performance History — expected |
| Gross-Loss Offset Rate | Calculation | Gross Loss ÷ Gross Gain | Same as above | 170,038 / 132,226 | 128.6% | Recomputed | Extreme zone (>100%) |
| New URL gain | Top Pages CSV | Traffic change column | URLs where Previous = 0, Current > 0 | SUM(Current traffic) | 68,530 | Recomputed | 565 new URLs |
| New URL count | Top Pages CSV | URL count | URLs where Previous = 0, Current > 0 | Count | 565 | Recomputed | |
| Continuing URL gain | Top Pages CSV | Traffic change column | URLs where Previous > 0, Current > Previous | SUM(Current − Previous) | 63,696 | Recomputed | |
| New-URL Gain Share | Calculation | New URL gain ÷ Gross Gain | — | 68,530 / 132,226 | 51.8% | Recomputed | |
| Continuing-URL Gain Share | Calculation | Continuing URL gain ÷ Gross Gain | — | 63,696 / 132,226 | 48.2% | Recomputed | |
| /companies/ URLs (URL comparison) | Top Pages CSV | URL count | URL path begins with /companies/ | Count | 23,925 | Recomputed | |
| /companies/ gross loss | Top Pages CSV | Traffic change column | URL path begins with /companies/, change < 0 | ABS(SUM) | 119,527 | Recomputed | |
| /people/ URLs (URL comparison) | Top Pages CSV | URL count | URL path begins with /people/ | Count | 5,283 | Recomputed | |
| /people/ gross loss | Top Pages CSV | Traffic change column | URL path begins with /people/, change < 0 | ABS(SUM) | 25,931 | Recomputed | |
| Combined programmatic URLs | Calculation | /companies/ + /people/ | Same filter population | 23,925 + 5,283 | 29,208 | Recomputed | Floor — true count higher due to 30K cap |
| Combined programmatic gross loss | Calculation | /companies/ loss + /people/ loss | Same filter population | 119,527 + 25,931 | 145,458 | Recomputed | |
| Programmatic page-level gross loss share | Calculation | Combined loss ÷ Gross Loss | Same filter population | 145,458 / 170,038 | 85.5% | Recomputed | "Observed page-level" — Top Pages export; 30K cap means true share may differ |
| Top 5 Page Traffic Share | Top Pages CSV | Top 5 URLs by current traffic | URLs with current traffic > 0 | SUM(top 5) / total | 76.0% | Recomputed | |
| Top 10 Page Traffic Share | Top Pages CSV | Top 10 URLs by current traffic | URLs with current traffic > 0 | SUM(top 10) / total | 84.8% | Recomputed | |
| Cognism.com traffic change | Organic Competitors CSV | Previous / Current traffic | cognism.com row | (45,477 − 46,148) / 46,148 | −1.5% | Recomputed | Closest direct category peer |
| close.com traffic change | Organic Competitors CSV | Previous / Current traffic | close.com row | (15,537 − 54,607) / 54,607 | −71.5% | Recomputed | Content model overlap unconfirmed |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| apollo.io-top-pages-subdomains-all--compar_2026-08-01_17-39-21.csv | Ahrefs Top Pages comparison export | UTF-16/TSV | Previous: 2024-07-31 / Current: 2026-07-31 | 30,000 rows (capped); URL comparison window |
| apollo.io-organic-keywords-subdomains-allby_2026-08-01_17-40-24.csv | Ahrefs Organic Keywords comparison export | UTF-16/TSV | Same window | 30,000 rows; Branded field populated per row |
| apollo.io_perf_2026-08-01_17-50-36.csv | Ahrefs Performance History — traffic | UTF-8/CSV | Jun 2015 – Aug 2026 | Monthly averages; "Your brand" = 0 (brand terms not configured in Ahrefs); "Other brands" includes Apollo's own branded traffic |
| apollo.io-organic-positions-subdomains-allb_2026-08-01_17-52-12.csv | Ahrefs Organic Positions comparison export | UTF-16/TSV | Previous: 2024-07-31 / Current: 2026-07-27 | 30,000 rows |
| apollo.io_orgcompetitors_subdomains_us_2026-08-01_18-02-31.csv | Ahrefs Organic Competitors comparison export | UTF-16/TSV | Same window | US-scoped; 20 auto-detected competitors |
| apollo.io-refdomains-subdomains_2026-08-01_18-12-34.csv | Ahrefs Referring Domains list | UTF-16/TSV | Current snapshot | 19,520 rows; active domains only; not suitable for trend analysis |
| apollo.io_perf_2026-08-01_18-15-24.csv | Ahrefs Performance History — referring domains | UTF-8/CSV | Jun 2015 – Aug 2026 | Monthly RD counts |
| Apollo public company materials | Company background | — | — | Source for Company Overview: company/about page, product documentation, platform descriptions. Not an Ahrefs export. All organic-performance claims derive from the Ahrefs exports above. |

---

## Narrative

### Company Overview

Apollo.io is a B2B sales intelligence and engagement platform founded in 2015. The product combines a contact and company database — over 250 million contacts — with outbound sales engagement tooling: email sequences, a dialer, LinkedIn automation, and AI-assisted prospecting. It competes primarily in the sales intelligence category against ZoomInfo and Cognism, and in the sales engagement category against tools like Outreach and Salesloft. Customers are predominantly revenue teams at B2B companies ranging from early-stage startups to enterprise.

*Source: Company background drawn from Apollo's public company materials. Organic-performance findings derive from the Ahrefs exports listed in Source Files.*

Apollo's organic search strategy centered on a large-scale programmatic database approach: individual pages for tens of thousands of company entities (/companies/[name]/) and business professionals (/people/[first]/[last]/). These pages were designed to capture traffic from users searching for specific companies or professionals — a data-SEO strategy that mapped Apollo's core product database onto URLs. This programmatic footprint operated alongside standard blog and product pages, but the database pages represented a substantial share of total URL count and, over time, of estimated organic traffic. The broader traffic decline began before the cohort study window opened. Across the July 2024–July 2026 URL comparison, programmatic company and people pages accounted for 85.5% of observed page-level gross loss.

### Traffic Trajectory

Apollo's traffic history shows a decline, recovery, and renewed pullback when viewed across the full historical trajectory window (Jul 2024 – Aug 2026). The cohort study window (Jan 2025 – Jun 2026) captures the recovery phase and produces a Grew outcome (+35.7%). Both are accurate; they describe different windows.

**Historical trajectory window (Jul 2024 – Aug 2026):** Traffic opened at 362,903 in July 2024 and declined through the second half of 2024. Month-over-month losses accelerated sharply in November 2024 and December 2024, reaching a trough of 249,168 in February 2025 — a −31.4% decline from July 2024 over seven months. A recovery followed from March 2025 through May 2026, peaking at 383,046. Traffic then pulled back −20.9% to 303,142 by August 2026.

**Cohort study window (Jan 2025 – Jun 2026):** The window opens near the trough (268,840 in Jan 2025) and closes near the peak of the recovery (364,773 in Jun 2026), producing a +35.7% change. The cohort window accurately captures what happened during that window. It does not capture the preceding decline that created the trough, nor the pullback that began after June 2026.

**Window sensitivity:** Apollo is a case where the outcome classification (Grew) and the historical trajectory (decline, recovery, pullback) are both correct but need to be read together. A company can grow during the study window while still being structurally weaker than it was before the window opened. Apollo's current traffic (303,142) sits 16.5% below the Jul 2024 starting point and 71% below its December 2019 all-time peak.

### Mechanism Analysis

The available evidence points toward a selective, page-type-specific loss of visibility in Apollo's programmatic database pages rather than a domain-wide penalty or link erosion.

Three patterns, taken together, weigh against a domain-level explanation. First, 85.5% of observed page-level gross loss (145,458 of 170,038) is concentrated in exactly two URL categories — /companies/ database pages (23,925 URLs, 119,527 gross loss) and /people/ directory pages (5,283 URLs, 25,931 gross loss) — identified by URL-prefix filter. A domain-wide suppression would be expected to affect a broader mix of URL types. Second, referring domains grew +141.2% during the same historical window traffic declined, reaching an all-time high. Referring domain growth makes broad domain-level link loss unlikely to be a primary driver, though it does not rule out link-related effects at the page or section level (link equity concentration, reduced internal or external support to affected pages). Third, non-branded traffic improved materially across the historical window, indicating that other content types were gaining visibility while the programmatic pages were losing it.

This combination weighs against a simple domain-wide authority or link-loss explanation and points toward a more selective page-type or content-model effect. The effect was concentrated in Apollo's programmatic URL population — the evidence indicates it was selective by page type rather than evenly distributed across Apollo's content portfolio.

What remains unresolved: the inflection date has not been formally mapped to named Google algorithm updates. The acceleration in November–December 2024 is the most diagnostic timing signal available, but without GSC position data it is not possible to confirm whether ranking collapse preceded traffic loss (an algorithmic signal) or traffic loss preceded ranking changes (a demand shift). Cognism's stability narrows but does not isolate the mechanism — Cognism's content architecture may differ enough from Apollo's to make the comparison inconclusive. AIO contribution has not been tested.

Mechanism confidence is Medium. The observational evidence — what happened and to which pages — is high confidence. The causal attribution — specifically why these pages experienced the selective visibility loss — remains an inference.

### Page & Content Analysis

The current organic footprint is highly concentrated. The homepage accounts for approximately 59.2% of all current traffic, and the top 10 pages represent 84.8%. The distributed footprint that existed when the programmatic pages were active has resolved into a small number of navigational and product pages.

The 29,208+ lost URLs (URL comparison window) were almost entirely programmatic database pages: 23,925 /companies/ pages and 5,283 /people/ pages. These pages indexed Apollo's B2B company and individual contact databases and likely ranked for navigational queries about specific companies or professionals.

Recovery — when it came — did not restore the lost programmatic pages. Instead, it came from two sources: 565 new URLs generating 68,530 in gross gain (51.8% of total gross gain), and improving continuing URLs generating 63,696 (48.2%). Leading gain categories include homepage and navigational surfaces, Chrome extension and app pages, localized product pages (/es, /pt, /fr), and selected product or editorial content. The recovery was not a new-page replacement story — it was roughly equal parts new URLs and gains among continuing URLs, without endpoint evidence that the lost programmatic URLs regained traffic.

### Recovery

Recovery status is Partial. Traffic recovered from the trough (+53.7% from Feb 2025 to May 2026) and briefly exceeded the historical starting point, but the current reading (303,142 as of Aug 2026) sits below the Jul 2024 opening and is declining from the May 2026 peak.

The recovery mechanism was replacement growth outside the lost programmatic population. Approximately half of gross gain came from new URLs that did not exist in the previous comparison period, and half came from continuing URLs that improved their estimated traffic. The /companies/ and /people/ URL populations that accounted for 85.5% of observed page-level gross loss did not participate in the recovery.

The current pullback from May 2026 is unresolved. Three months of declining data is insufficient to distinguish a seasonal pattern from renewed structural decline. Non-branded traffic fell from 142,538 (Jun 2026) to 73,326 (Aug 2026) — a sharp reversal that adds uncertainty. Additional months of data are needed before the pullback direction can be characterized.

### Client Applicability

Apollo.io is primarily a cautionary case, with a secondary lesson in partial replacement growth. The cautionary dimension: a large programmatic database strategy drove substantial organic traffic before that URL population experienced a large, selective loss of visibility. Referring domain strength and brand authority did not protect the affected pages. The secondary lesson comes from its partial replacement growth: new and improving URLs generated meaningful recovery even though the lost programmatic population never returned. That recovery occurred from a trough position and current traffic still trails the pre-collapse baseline.

This record is most applicable to prospects or clients who have built or are considering large programmatic page populations — contact databases, company directories, integration hubs, location pages. The core question is whether the programmatic content offers meaningfully differentiated value per page or whether it replicates information available elsewhere at scale. The Apollo record suggests that when Google assesses programmatic content selectively, domain-level signals provide limited protection.

---

## Verification Checklist

**Calculation Log**
- [x] Calculation Log populated before Outcome Summary and narrative were written
- [x] Every recomputable metric has Verification Status = Recomputed
- [x] Gross Gain − Gross Loss reconciles to Net Change
- [x] Net Change + Starting Traffic ≈ Ending Traffic (within Top Pages export population)
- [x] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
- [x] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain
- [x] Source reconciliation documented (Performance History vs Top Pages discrepancy)
- [x] /companies/ and /people/ figures computed with documented URL-prefix filter rule
- [x] New-URL Gain Share and Continuing-URL Gain Share sum to 100% and to Gross Gain

**Narrative audit**
- [x] Every recomputable number in the narrative traces to a verified Calculation Log row
- [x] No approximate language used for figures that were actually computed
- [x] Mechanism language uses "weighs against," "points toward," and "selective" rather than categorical claims
- [x] Link loss language appropriately hedged — "makes broad domain-level link loss unlikely" not "rules out"
- [x] Deindexation language appropriately hedged — "register zero current traffic; cause unknown"
- [x] "Thin" removed from all programmatic page references
- [x] Recovery mechanism describes new URL + continuing URL split, not editorial content assumption

**Window separation**
- [x] Outcome Summary fields use cohort window only (Jan 2025 – Jun 2026)
- [x] Trajectory and mechanism fields use historical window (Jul 2024 – Aug 2026)
- [x] Gross Gain/Loss and page analysis fields use URL comparison window (Jul 31, 2024 – Jul 31, 2026)
- [x] No metric presented as covering Aug 2026 in the URL comparison

**Client Applicability**
- [x] Primary Lesson states observable pattern, not settled causal claim
- [x] Medium-confidence mechanisms not presented as fact in any client-facing field
- [x] Evidence Basis distinguishes Ahrefs exports from public company materials
- [x] External Use Status = Internal only

**Fields and index**
- [ ] All controlled-vocabulary fields verified against approved values — **taxonomy note:** "Algorithmic Reassessment" approved as a controlled-vocabulary value (2026-08-03). Use when visibility changed selectively across a page type or content model but the responsible update or system cannot be isolated. Requires evidence of a systematic portfolio-level pattern (concentrated URL-class losses, contrasting performance in unaffected page types, evidence against link loss or broad demand contraction). Distinct from "Algorithm Update," which requires the inflection to align clearly with a named update.
- [ ] Record Status and Migration Validation Stage both confirmed
- [ ] Index row values match verified record values (requires index update)
- [ ] AIO fields reflect observed evidence only
- [ ] Related Documents section confirmed current

---

## Historical Amendments

**2026-08-03 (v0.2 initial)**
- **Reason:** New record — initial analysis and generation from seven Ahrefs exports
- **Sections updated:** All
- **Summary:** Record created. Used historical trajectory window (Jul 2024 – Aug 2026) for outcome; programmatic figures unverified against explicit filter rule.

**2026-08-03 (v0.2 revised)**
- **Reason:** Three material corrections following external review
- **Sections updated:** Header, Outcome Summary, Traffic Trajectory, Page & Content Analysis, Recovery, Calculation Log, Source Files, Narrative, Verification Checklist
- **Summary of corrections:**
  1. **Outcome restored to cohort window (Grew, +35.7%)** — initial record used Jul 2024 – Aug 2026 and classified Declined (−16.5%). Corrected to frozen cohort window (Jan 2025 – Jun 2026) for cross-repository comparability. Broader historical context preserved in dedicated fields and narrative. Three-window structure formalized.
  2. **Programmatic loss figures recomputed** — /companies/ corrected from 23,933 / 118,281 to 23,925 / 119,527; /people/ corrected from 4,883 / 24,124 to 5,283 / 25,931; combined share corrected from 83.8% to 85.5%. URL-prefix filter rule documented explicitly.
  3. **New-URL Gain Share corrected** — initial record implied all 132,226 gross gain came from 565 new URLs. Corrected to 51.8% from new URLs (68,530) and 48.2% from improving continuing URLs (63,696).
  4. **Causal language calibrated** — "rules out link loss," "domain-level penalty would not produce this," "too extreme to be explained by broad algorithmic action," "likely deindexed," and "thin programmatic pages" all softened to evidence-appropriate phrasing.
  5. **Recovery mechanism rewritten** — "non-branded content recovery" replaced with documented breakdown of new-URL and continuing-URL gain sources.
  6. **Company Overview sources documented** — public company materials added as source in Source Files; narrative distinguishes background sources from Ahrefs-derived findings.

---

*Record created: 2026-08-03 | Last verified: 2026-08-03*
