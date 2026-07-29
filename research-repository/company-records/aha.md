# Aha!

<!-- Migrated from phase3-deep-dives.md on 2026-07-11. Original analysis date: 2026-06-30. Source document is a Comparison Brief (elevated to extended detail), not a full 16-field deep dive — fields marked [Not available — Brief format] are genuinely absent from the source, not omitted. All metrics carried from prior analysis. Do not upgrade Record Status without recomputing from source exports and pulling missing Pass 2 figures. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | Aha! |
| **Website** | aha.io |
| **Category** | Product Analytics |
| **Business Model** | B2B SaaS |
| **Dominant Content Model** | Editorial-blog-led |
| **Company Size** | Mid-Market |
| **Study Window** | 2025-01 to 2026-06 |
| **Analysis Date** | 2026-06-30 |
| **Record Finalized Date** | 2026-07-11 |
| **Last Verified Date** | — |
| **Methodology Version** | V2.3 |
| **Record Status** | Draft |
| **Migration Validation Stage** | Migrated — not revalidated |
| **External Use Status** | Internal only |
| **Data Provenance** | Ahrefs Export |
| **Calculation Verified** | No |
| **Measurement Reliability** | Medium — comparison-company record; no monthly perf/trend file; small absolute traffic base; direction credible, magnitude less certain |

**Classification notes:**
- **Category:** Classified as "Product Analytics" (primary category). Aha! also serves product management workflows, but Product Analytics is the most specific applicable approved value.
- **Dominant Content Model:** Classified as "Editorial-blog-led." Parenthetical detail: the guide library (aha.io/roadmapping/guide/) is the primary organic traffic asset.
- **Company Size:** Classified as "Mid-Market." Source note: ~400 employees per LinkedIn as of analysis date.
- **Calculation Verified:** "No" — all figures carried from prior analysis. None were recomputed in this migration session. The cannibalization metrics used the correct methodology (Top Pages export) in the original analysis, but "Calculation Verified" describes what was done in this session, not whether the original methodology was sound.

---

## Outcome Summary

*Values reproduced from Calculation Log. Pass 2 starting/ending traffic estimates were not explicitly stated in the source Comparison Brief — they are marked Not available and must be pulled from Ahrefs Pass 2 data during revalidation.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | Not available — not stated in source brief | Ahrefs Pass 2 (pull during revalidation) |
| Ending Traffic Estimate | Not available — not stated in source brief | Ahrefs Pass 2 (pull during revalidation) |
| Traffic Change % | −42.4% | Ahrefs Pass 2 (Carried) |
| Outcome Classification | Declined | ±10% threshold |
| Net Traffic Change (Top Pages) | −40,613 | Calculation Log — Top Pages export, 2,200 rows (described as "consistent with Pass 2 −42.4%") |
| Traffic Value Change | Not available — "[to be verified against Pass 2 field]" in source brief | Pull during revalidation |
| Referring Domains Change | Not available — "[to be verified against Pass 2 field]" in source brief | Pull during revalidation |

**Source document note:** This record was migrated from a Comparison Brief format, which does not include the full Pass 2 snapshot table. Starting/ending traffic estimates, Traffic Value, and Referring Domains figures must be added from Ahrefs Pass 2 data before this record can be marked Verified.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Steady Decline |
| **Peak Month** | 2025-01 (window open — trajectory is continuous decline from start; no pre-window historical data available in source brief) |
| **Peak Traffic Estimate** | Not available — starting traffic estimate absent from source brief |
| **Trough Month** | 2026-06 (window end — still declining at close of study window) |
| **Trough Traffic Estimate** | Not available — ending traffic estimate absent from source brief |
| **Primary Inflection Date** | Not established from available data |
| **Current Direction** | Declining |

**Note on pre-window context:** Aha! was founded in 2013. The guide library (aha.io/roadmapping/guide/) predates the study window and has been the site's primary organic asset historically. No pre-window historical peak data was available in the source brief. The decline pattern is described as steady throughout the window — no prior peak to recover from within the analysis period.

**Note on Primary Inflection Date:** No intermediate monthly data was available in the source brief to confirm when the decline accelerated. External event alignment: AI Mode full US rollout on June 27, 2025 is timing-consistent with an AIO interception acceleration mid-window, but this cannot be confirmed as the observed inflection date without monthly traffic data.

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | AI Overview |
| **Mechanism Pathway** | Sustained product-market relevance decline for roadmapping and PM tooling categories → broad non-branded ranking losses across PM/roadmapping content → multi-year steady traffic decline continuing through the study window (-42.4%) |
| **Contributing Mechanisms** | Search Demand Shift, Competition |
| **Mechanism Confidence** | Medium |
| **Confidence Rationale** | Three distinct mechanisms are assessed at different confidence levels. **Primary — AI Overview click-through interception (Medium):** The same-position estimated traffic decline pattern is strongly consistent with AIO click-through interception across 20+ keyword examples — including three cases where estimated ranking improved (3→1) while estimated traffic fell 79–93%. A keyword whose Ahrefs-estimated ranking improves from position 3 to position 1 while its estimated traffic falls 93% is strongly consistent with AI Overview click interception, not competitive displacement. 59.8% of measured keyword-level losses occurred on AIO-exposed queries (−14,688 estimated traffic, 1,641 keywords). Timing aligns with AI Mode full US rollout June 27, 2025, mid-window. Confidence is Medium rather than High because (1) Ahrefs figures are estimated traffic and rankings, not observed GSC clicks or CTR; (2) no monthly time-series data confirms when the decline accelerated relative to the AI Mode rollout; (3) the keyword export cap (30,000 rows) was hit, so the full population is unconfirmed. Would upgrade to High with GSC click and impression data or a monthly traffic series confirming acceleration around June 2025. **Contributing — Search Demand Shift for template content (Medium-High):** 154 template pages collectively lost −13,552 estimated traffic (−60.3%), with some pages losing 88–97%. The losses are consistent across all template types. Mechanism likely involves a shift in how users satisfy template needs: users who previously searched for "competitive analysis template" to download a file can now prompt ChatGPT or Claude to generate one directly, meaning the search may no longer be initiated. Whether this is SERP click interception (search happens, click doesn't) or upstream demand shift (search no longer happens) cannot be confirmed without search-volume trend data — and the strategic distinction matters. The record explicitly says this is not a topic-by-topic content quality failure. **Contributing — Competitive displacement on commoditized content (Medium):** Strategy/marketing pages (−78.0%) and role/career pages (−59.1%) are the most competitively contested topics in B2B software. Position drops (not same-position estimated traffic decline) on most of these terms suggest competitive displacement rather than AIO interception specifically. |
| **Strongest Competing Explanation** | Brand-naming vulnerability: The literal keyword "aha" (volume 59,000) appears to have been substantially redirected by Google — either through disambiguation toward the common English exclamation, or through changing navigational-intent interpretation. The homepage lost 7,125 → 1,253 (−82.4%); the previous top homepage keyword was "aha" at position 2; the current top homepage keyword is "aha product management" (volume 350, position 2). This explains the disproportionately fast branded decline (−57.2% vs. non-branded −32.8%) but does not explain the template-content or strategy-content losses, which are distributed across non-branded queries. |
| **Disconfirming Evidence** | Definitional content ("what is X") held up −13.9% vs. −42.4% overall — if content quality were the primary driver, definitional pages would decline proportionally with the rest. They didn't. This is the most important disconfirming evidence against a pure content-quality or algorithm-update explanation. Also: position distribution of losses centers in positions 4–10 (−45%) and 11–20 (−74%), not the spam-update signature (which collapses 11–20/21–50/51+ simultaneously while top positions hold). |
| **Algorithm Alignment** | Moderate — AI Mode rollout June 27, 2025 is timing-consistent with AIO interception mechanisms. Core algorithm update alignment is weak (loss pattern does not match spam-update signature). |
| **AIO Portfolio Susceptibility** | High — large share of Aha!'s key queries are informational, template-format, or satisfiable-in-SERP (role titles, template downloads, "what is X" definitions, strategy guides); structurally likely to trigger AI Overviews |
| **AIO Presence Observed** | Yes — AIO exposure flag confirmed on 1,641 keyword-level losing queries and 1,816 keyword-level gaining queries in the Ahrefs keyword export |
| **AIO Observed Effect** | Intercepted — 59.8% of measured keyword-level losses occurred on AIO-exposed queries (−14,688 estimated traffic, 1,641 keywords); same-position estimated traffic decline pattern (ranking stable or improving while estimated traffic fell 79–93%) observed on multiple keyword examples consistent with click-through interception |

---

## Gross-Loss Offset Analysis

*Metrics computed from the Ahrefs Top Pages export (2,200 rows) — this is the correct methodology per repository standard.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | 21,770 | Ahrefs Top Pages export (2,200 rows) — all pages with positive traffic change |
| Gross Loss (absolute) | 62,383 | Ahrefs Top Pages export (2,200 rows) — all pages with negative traffic change |
| Net Change | −40,613 | Calculation Log |
| Gross-Loss Offset Rate | 286.6% | Calculation Log — Gross Loss ÷ Gross Gain |
| Offset Zone | Extreme (>100%) | |
| Reconciliation check | 21,770 − 62,383 = −40,613 ✓ (exact) | |

**Context:** The 286.6% rate is the highest gross-loss offset rate among companies with computed Top Pages Gross-Loss Offset Rates in the V1.7 cohort — nearly 4× LogRocket's 75.6% (the highest among the remainder). 505 pages lost traffic; only 233 gained. 299 pages dropped to zero traffic entirely. At a 286.6% gross-loss offset rate, the site would need to generate ~3.87 gross traffic units for every 1 unit of net gain — meaning a standard "publish more content" response to the decline would require massive gross output simply to halt net losses, let alone reverse them.

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | Not formally computed | — |
| Top 5 Page Traffic Share | Not formally computed | — |
| Top 10 Page Traffic Share | Not formally computed | — |
| Dominant Content Type | Definitional ("what is X") — 40.1% of current traffic (24,148 of ~60,221 estimated current) | Ahrefs Top Pages export, content-type decomposition |
| Winning Content Type | Methodology (agile, scrum, kanban) — only category with strong net gain (+5,280, +105.6%) | Ahrefs Top Pages export |
| Losing Content Type | Template content — 154 pages, net loss −13,552 (−60.3%), 33% of total losses despite being a content subset | Ahrefs Top Pages export |
| New-URL Gain Share | Not computed in source brief | — |
| Page Replacement Pattern | Failed replacement — 505 pages lost traffic, only 233 gained; gross losses exceed gross gains by 2.87× | Ahrefs Top Pages export |
| Notable patterns | Content-type decomposition reveals three distinct performance tiers: (1) Methodology content gained strongly (+5,280) — agile/scrum/kanban queries appear AI-interception-resistant, likely because they require ongoing learning rather than a quick deliverable. (2) Definitional content declined only −13.9% — consistent with the study's Validated principle that "what is X" content is the most AIO-resistant. (3) Template, strategy/marketing, role/career, and guide content all collapsed (−60 to −78%) — the most AI-substitutable and competitively contested formats. The homepage (aha.io/) lost 7,125 → 1,253 (−82.4%) due to the "aha" brand-keyword disambiguation issue. | Ahrefs Top Pages export + keyword export |

**Content-type breakdown (full decomposition from source brief):**

| Content type | Pages | Prev traffic | Curr traffic | Change | % of curr |
|---|---|---|---|---|---|
| Definitional ("what is X") | 68 | 28,038 | 24,148 | −3,890 (−13.9%) | 40.1% |
| Methodology (agile, scrum, kanban) | 27 | 4,995 | 10,275 | +5,280 (+105.6%) | 17.1% |
| Template content | 154 | 22,461 | 8,909 | −13,552 (−60.3%) | 14.8% |
| Guide/Other | 105 | 12,871 | 6,381 | −6,490 (−50.4%) | 10.6% |
| Role/Career | 17 | 9,592 | 3,926 | −5,666 (−59.1%) | 6.5% |
| Strategy/Marketing | 57 | 11,352 | 2,493 | −8,859 (−78.0%) | 4.1% |
| Homepage | 1 | 7,125 | 1,253 | −5,872 (−82.4%) | 2.1% |
| Product pages | 458 | 1,037 | 1,044 | +7 (+0.7%) | 1.7% |
| Blog | 909 | 1,369 | 807 | −562 (−41.0%) | 1.3% |
| Other | 404 | 2,022 | 1,013 | −1,009 (−49.9%) | 1.7% |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | None |
| **Recovery Mechanism** | N/A |
| **Recovery Confidence** | Not applicable |
| **Recovery Notes** | Steady Decline throughout. No recovery signals observed. Still declining at the close of the study window (June 2026). |

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

**Note:** AI Observation Protocol is parked project-wide. For Aha!, the keyword export provides strong reason to prioritize a dedicated AI discoverability assessment: 59.8% of measured keyword-level losses occurred on AIO-exposed queries, and the same-position estimated traffic decline pattern is strongly consistent with AI Overview click interception as a hypothesis. Whether this extends to AI engine citation displacement (Scrunch, Profound) is a separate question that would require a dedicated measurement pass. Aha! is a high-priority candidate for that assessment given the severity of its AIO-related estimated traffic losses.

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Mixed — methodology and PM content (agile, product management, roadmapping) is topically aligned with Aha!'s commercial positioning; template, role/career, and commodity guide content drives significant traffic but is only tangentially connected to the product's buyer intent |
| **Best-Fit Client Type** | B2B SaaS company with a large template-format content library; company with guide/glossary content on broadly-trafficked PM, agile, marketing, or role-description topics; client concerned that their traffic decline may reflect a position-stable-but-estimated-traffic-declining pattern rather than ranking loss |
| **Best-Fit Problem** | "Why is our traffic declining even though our rankings haven't changed?" / "Should we invest more in templates and downloadable resources?" / "How exposed is our content to AI Overview interception?" |
| **Relevance Conditions** | Client has significant volume of template or downloadable-resource content; client's keyword list includes role/list/process queries where AI can deliver the complete answer; client is experiencing branded traffic decline alongside non-branded decline |
| **Non-Comparable When** | Client's brand name is not a common English word (the "aha" disambiguation is structurally unique); client's decline is concentrated in long-tail keyword loss rather than mid-position traffic collapse; client's content is primarily product/transactional rather than educational |
| **Primary Lesson** | Aha! holds estimated position 1 rankings on queries like "user story template," "marketing job titles," and "it job titles" — while Ahrefs-estimated traffic on those pages fell 92–99%. Same-position estimated traffic decline is a screening signal for potential AI Overview click interception; GSC click, impression, and CTR data are required to confirm whether actual clicks followed the same pattern. |
| **Evidence Use** | Diagnostic (AIO interception detection) / Cautionary (template-format content structural vulnerability) |
| **Evidence Basis** | Based on Ahrefs Top Pages export (2,200 rows) and Organic Keywords export (30,000 rows, cap hit) covering January 2025 through June 2026. No first-party analytics available. Starting/ending traffic estimates and Traffic Value/Referring Domains figures unavailable in source document — see Outcome Summary. |

---

## Risk Flags

- **Starting/ending traffic estimates unavailable:** Pass 2 headline figures not included in source Comparison Brief. Outcome Summary and Calculation Log cannot be completed without pulling these from Ahrefs Pass 2 data. Blocks Verified status.
- **Traffic Value and Referring Domains unavailable:** Both listed as "[to be verified against Pass 2 field]" in the source brief. Must be added during revalidation.
- **Brand-naming vulnerability:** The keyword "aha" (volume 59,000) appears to have been substantially redirected or disambiguated by Google — homepage lost 82.4% of traffic; previous top keyword was "aha" at position 2, now replaced by "aha product management" (volume 350). This is a structural vulnerability that cannot be addressed by content strategy.
- **Template format structural exposure:** Template content (154 pages) lost 60.3% of traffic across all template types — competitive analysis, strategy, creative brief, sprint retrospective, OKR templates all collapsed 67–97%. The format itself, not the topic, appears to be the exposure vector.
- **Keyword export cap hit:** 30,000-row cap reached. Full keyword universe is larger; highest-traffic keywords are captured, so analysis is not distorted, but completeness cannot be confirmed.
- **Branded decline faster than non-branded:** Branded −57.2% vs. non-branded −32.8% — an unusual pattern not seen in other companies in this study. Partly explained by the brand-naming vulnerability but may have additional causes not investigated.
- **Source is Comparison Brief, not full deep dive:** Multiple structured fields (TV, RD, starting/ending traffic, historical peak/trough, full off-content context inventory) are absent from the source document. Gaps are documented; they were not available to the original analyst in the source format.
- **Mechanism-mix unresolved for template content:** Whether the template-content decline is SERP click interception or upstream demand destruction (users now generating templates directly in AI tools) cannot be confirmed without search-volume trend data. The client implication differs: SERP interception → AEO optimization may help; demand destruction → the category of search may no longer exist at prior volume.

---

## Related Documents

- Comparison briefs: None (this record was itself migrated from a Comparison Brief section in the source document, but no separate cross-company pattern brief covers Aha! as of this record date)
- Synthesis documents: —
- Studies: —
- Report references: Comparison Brief section in `phase3-deep-dives.md` (line 2831); original 118-company report cohort, Product Analytics / Product Management category

---

## Calculation Log

*The authoritative verification source for all recomputable metrics. Cannibalization metrics were computed from the Top Pages export (correct methodology); all other figures are Carried from prior analysis.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Starting Traffic Estimate | Ahrefs Pass 2 | — | All traffic | Directly reported | **Not available — pull from Pass 2** | Not available |
| Ending Traffic Estimate | Ahrefs Pass 2 | — | All traffic | Directly reported | **Not available — pull from Pass 2** | Not available |
| Traffic Change % | Ahrefs Pass 2 | — | All traffic | (end − start) / start | −42.4% | Carried |
| Traffic Value Change | Ahrefs Pass 2 | — | All traffic | Directly reported | **Not available — pull from Pass 2** | Not available |
| Referring Domains Change | Ahrefs Pass 2 | — | All traffic | Directly reported | **Not available — pull from Pass 2** | Not available |
| Gross Gain | Ahrefs Top Pages export (2,200 rows) | Current traffic, Previous traffic | All pages with positive current − previous change | SUM(positive changes) | 21,770 | Carried — sourced from Top Pages (correct methodology) |
| Gross Loss | Ahrefs Top Pages export (2,200 rows) | Current traffic, Previous traffic | All pages with negative current − previous change | ABS(SUM(negative changes)) | 62,383 | Carried — sourced from Top Pages (correct methodology) |
| Net Change | Ahrefs Top Pages export (2,200 rows) | Same as above | Same as above | Gross Gain − Gross Loss | −40,613 | Carried |
| Gross-Loss Offset Rate | Ahrefs Top Pages export (2,200 rows) | Same as above | Same as above | Gross Loss ÷ Gross Gain | 286.6% | Carried — sourced from Top Pages (correct methodology) |
| Reconciliation check | Ahrefs Top Pages export (2,200 rows) | — | — | 21,770 − 62,383 = −40,613 | ✓ exact | Carried |
| Branded traffic change | Ahrefs keyword export (30,000 rows) | Branded = True; Previous, Current traffic | All branded-flagged keyword rows | (2,959 − 6,911) / 6,911 | −57.2% | Carried |
| Non-branded traffic change | Ahrefs keyword export (30,000 rows) | Branded = False; Previous, Current traffic | All non-branded keyword rows | (57,051 − 84,895) / 84,895 | −32.8% | Carried |
| AIO loss share | Ahrefs keyword export (30,000 rows) | AIO flag; losing keyword rows | Keywords where current < previous AND AIO exposure = Yes | AIO-exposed losses / total losses | 59.8% (−14,688 traffic, 1,641 keywords) | Carried |
| AIO gain share | Ahrefs keyword export (30,000 rows) | AIO flag; gaining keyword rows | Keywords where current > previous AND AIO exposure = Yes | AIO-exposed gains / total gains | 83.6% (+22,589 traffic, 1,816 keywords) | Carried |
| Homepage traffic change | Ahrefs Top Pages export | aha.io/ row | Homepage only | (1,253 − 7,125) / 7,125 | −82.4% | Carried |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Top Pages export | Top pages with previous and current traffic (2,200 rows) | CSV | Jan 2025 (previous) – Jun 2026 (current) | 2,200 rows — below the 30,000-row cap. Content-type decomposition performed on this export. Cannibalization computed from this export (correct methodology). |
| Ahrefs Organic Keywords export | All ranking keywords with Branded flag, AIO flag, previous and current traffic | CSV | Jan 2025 (previous) – Jun 2026 (current) | **30,000-row cap hit** — full keyword universe is larger. Highest-traffic keywords are captured; analysis directionally valid but completeness not confirmed. |
| Ahrefs Best by Links export | Top pages by referring domain count (9,881 rows) | CSV | As of Jun 2026 analysis date | Used for historical content context. |
| WebSearch (multiple queries) | External context: company background, bootstrapped status, product portfolio, no M&A/leadership/financing events found | Web | Jun 2026 | Aha! is bootstrapped — no VC funding. No major off-content events identified in window. |

---

## Narrative

### Company Overview

Aha! is a bootstrapped (no VC funding), mid-market B2B SaaS company (~400 employees) offering product management and roadmapping software, including product roadmaps, idea portals, development tracking, and notebooks. Founded in 2013. The bootstrapped structure is a notable distinction from every other company in this study's cohort — no external financing pressure on content strategy.

The site's organic foundation is an extensive guide library (aha.io/roadmapping/guide/) covering product management methodology, agile frameworks, strategy, templates, and role definitions. This library predates the study window and has historically been the primary organic traffic driver. Within the study window, no major M&A events, leadership changes, financing events, or domain migrations were identified. The decline is organic-search-specific — Aha! appears to have continued product investment (Ideas Portal, Develop, Notebook) alongside declining organic traffic, suggesting the decline is not a business-health signal.

### Traffic Trajectory

Aha!'s official Pass 2 traffic change is −42.4%, classified as Steady Decline. The Top Pages export (2,200 rows) produces a net of −40,613, described in the source as "consistent with Pass 2 −42.4%." Explicit Pass 2 starting and ending traffic estimates were not included in the source brief and must be pulled during revalidation.

The trajectory is continuous from window-open to window-close, with no recovery period. The primary inflection marker is the AI Mode full US rollout on June 27, 2025, which sits mid-window and is timing-consistent with the acceleration of AI Overview click interception patterns — though no intermediate monthly data was available to confirm the exact inflection timing. The position-distribution analysis provides an important structural clue: losses are centered in positions 4–10 (−45%) and 11–20 (−74%), with positions 1–3 losing only −19%. This is not the signature of a spam algorithm update (which collapses 11–20, 21–50, and 51+ simultaneously while top positions hold). It is consistent with competitive displacement from mid-positions combined with AI Overview click interception at positions 1–3.

### Mechanism Analysis

Three mechanisms converge in Aha!'s decline. They are not mutually exclusive — the same keyword can be affected by multiple mechanisms simultaneously.

**Mechanism 1 — AI Overview click-through interception (Primary, Confidence: Medium)**

The most notable evidence in this record is a set of keywords where ranking position held constant or improved while organic traffic collapsed 76–99%. This pattern is strongly consistent with AI Overview click-through interception. Selected examples from the keyword export:

| Keyword | Volume | Position change | Traffic change |
|---|---|---|---|
| product marketing | 1,400 | 1 → 1 | 509 → 11 (−98%) |
| product positioning | 500 | 1 → 1 | 266 → 21 (−92%) |
| user story template | 2,100 | 3 → 1 *(improved)* | 108 → 9 (−92%) |
| marketing job titles | 700 | 3 → 3 | 91 → 1 (−99%) |
| it job titles | 400 | 3 → 1 *(improved)* | 81 → 6 (−93%) |
| agile metrics | 400 | 3 → 1 *(improved)* | 90 → 19 (−79%) |

Three of these show the estimated ranking actually improving (position 3 → 1) while estimated traffic fell 79–93%. A keyword whose Ahrefs-estimated ranking improves from position 3 to position 1 while its estimated traffic falls 93% is strongly consistent with AI Overview click interception — the AI Overview answering the query at the top of the SERP such that the position-1 result receives far fewer visits regardless of ranking. GSC click and impression data would be required to confirm an actual CTR or click decline, but the magnitude and consistency of the estimated traffic pattern across multiple keyword examples makes competitive displacement an implausible primary explanation.

The query types most affected share a structural property: the AI Overview can provide the complete deliverable the user was seeking — an enumerated list ("marketing job titles"), a downloadable artifact ("user story template"), a topic definition ("product marketing"), or a brief process overview. In contrast, "agile transformation" (which requires sustained learning rather than a quick deliverable) appears in the gains — even though it's also AIO-exposed — because the answer can't be fully satisfied in a SERP feature.

At the aggregate level: 59.8% of measured keyword-level losses occurred on AIO-exposed queries (−14,688 traffic, 1,641 keywords). Notably, 83.6% of traffic gains also occurred on AIO-exposed queries — Aha! is gaining on ultra-broad head terms ("products," "product," "agile transformation") where it moved up in rankings and captured more proximity. But those gains (+22,589) are more than offset by the traffic drops on the mid-volume AIO-exposed queries (−14,688).

**Mechanism 2 — Search Demand Shift for template content (Contributing, Confidence: Medium-High)**

154 template pages collectively lost −13,552 traffic (−60.3%), representing 33% of total losses. The losses are consistent across all template types — competitive analysis templates (5,307 → 632, −88.1%), strategy templates (3,669 → 373, −89.8%), creative brief templates (2,217 → 80, −96.4%), OKR templates (1,091 → 105, −90.4%). This is not one template topic failing; it is a format category collapsing.

Two mechanisms likely overlap here. First, AIO click interception: template queries are high on the "satisfiable in the SERP" spectrum — an AI Overview can provide or link to a usable artifact, displacing the download click. Second, upstream demand destruction: users who previously searched for "competitive analysis template" to find and download a file can now prompt ChatGPT or Claude to generate one directly, meaning the search itself may no longer be initiated. Whether it's interception (the search happens but the click doesn't) or destruction (the search no longer happens) cannot be confirmed without search-volume trend data by query — and the distinction matters strategically. SERP interception suggests AEO optimization may help. Demand destruction means the search category no longer exists at prior volume, and no amount of optimization recovers it.

**Mechanism 3 — Competitive displacement on commoditized content (Contributing, Confidence: Medium)**

Strategy/marketing content lost −78.0% and role/career content lost −59.1%. These are the most heavily contested topics in B2B software — every major competitor with higher domain authority (HubSpot, Asana, Atlassian, Monday.com) publishes comparable or better content on "what is product marketing," "content marketing plan," "role of a marketing manager." The position-distribution evidence for this bucket shows ranking position drops (not same-position estimated traffic decline), consistent with competitive displacement rather than AIO interception specifically.

**What this is not:** The decline is not primarily caused by definitional content quality issues. Aha!'s "what is X" pages declined only −13.9% against an overall −42.4% rate — they are the most resilient content type in the portfolio. This is consistent with the study's Validated principle that definitional content is more AIO-resistant than satisfiable-in-SERP formats. A content-quality or broad algorithm-update explanation for the overall decline would predict proportional losses across content types; the actual distribution runs counter to that prediction — definitional content held, while satisfiable-in-SERP and commoditized types collapsed.

**Brand-naming vulnerability (separate structural issue):** The homepage lost 7,125 → 1,253 (−82.4%). The previous top-traffic keyword for the homepage was "aha" (volume 59,000, position 2). The current top keyword is "aha product management" (volume 350, position 2). Google appears to have substantially redirected or disambiguated navigational traffic for the single word "aha" — a common English exclamation — away from Aha!'s software product. This is a structural naming vulnerability predating this study window, possibly worsening as Google's entity understanding improves. It cannot be addressed through content strategy and is not the primary causal mechanism for the guide-library losses — but it significantly amplifies the headline decline figure and explains why branded traffic (−57.2%) declined faster than non-branded (−32.8%), a pattern not observed in any other company in this study.

### Page & Content Analysis

The content-type decomposition (10 categories across 2,200 Top Pages rows) is the most granular and analytically rich structural breakdown in this study. It tells three stories simultaneously:

**Story 1 — Definitional content held up.** "What is X" pages (68 pages, −13.9%) are the most resilient content type. The top traffic gainer in the entire export is definitional: "what is a product" gained 10,044 → 16,303 (+6,259). Other definitional gains include "what is a typical product manager salary" (+1,208), "what is scrum" (+737), "what is the product lifecycle" (+446). The validated AIO-resistance of definitional content holds inside a declining portfolio.

**Story 2 — Methodology content was the only category with strong gains.** Agile/scrum/kanban methodology pages (27 pages) grew 4,995 → 10,275 (+105.6%). These queries share a property: they require ongoing learning and context rather than a quick deliverable. An AI Overview can provide a definition of agile, but a practitioner exploring agile transformation still needs to click through for depth. This is the strongest single piece of evidence for the "satisfiable-in-SERP vs. requires-further-engagement" distinction proposed as a hypothesis in the source brief.

**Story 3 — Template and commoditized-content categories collapsed.** Templates −60.3%, strategy/marketing −78.0%, role/career −59.1%, guide/other −50.4%, homepage −82.4%. The categories most susceptible to either AIO deliverable-satisfaction or competitive displacement are the most affected. The pattern is too consistent across unrelated template types to be topic-by-topic content quality failure.

Page replacement pattern is Failed replacement: 505 pages lost traffic, 233 gained, 299 dropped to zero entirely. The gains do not offset the losses in volume or rate.

### Recovery

No recovery. Steady Decline throughout the study window. No recovery signals as of June 2026. Trajectory is still declining at window close.

### Client Applicability

This record is most useful for three client conversations:

**Diagnosing potential AIO click interception.** The same-position estimated traffic decline pattern is detectable by any client with keyword ranking data and traffic data from Ahrefs or a comparable tool. The diagnostic: find keywords where estimated position is stable or improving while estimated traffic has dropped substantially. If those keywords return AI Overviews, click interception becomes a strong hypothesis to test with GSC impressions, clicks, position, and CTR data. Aha!'s record provides both the screening methodology and a benchmark for how severe same-position estimated traffic decline can get before GSC validation is warranted.

**Template-content portfolio risk assessment.** Any client with a large library of downloadable templates, checklists, frameworks, or planning documents is exposed to the same structural vulnerability observed here. The relevant question is not "are our templates good enough?" — it's "is the search intent that brings users to our templates still a search?" If the answer is no (demand destruction), the strategic response is different from "our templates aren't ranking" (fixable with optimization).

**Benchmarking AIO exposure severity.** The 59.8% of measured keyword-level losses that occurred on AIO-exposed queries is the most precisely quantified AIO exposure figure in this study. It provides a credible benchmark for clients trying to estimate their own exposure. The flip side — 83.6% of gains also on AIO-exposed queries — demonstrates that AIO proximity can amplify gains on head terms, not just suppress clicks on mid-volume queries.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist is not signed off. Items below mark what is known to be incomplete or blocked.*

**Calculation Log**
- [ ] Calculation Log populated before Outcome Summary and narrative were written
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All metrics are Carried — no export files available in this session
  - ⚠ Starting/ending traffic estimates, Traffic Value, and Referring Domains are Not available
- [ ] Gross Gain − Gross Loss reconciles to Net Change within stated tolerance
  - ✓ 21,770 − 62,383 = −40,613 ✓ (from Top Pages export, correct methodology)
- [ ] Net Change + Starting Traffic ≈ Ending Traffic
  - ⚠ Cannot verify — starting/ending estimates not available
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ⚠ Cannot verify independently — starting/ending not available; carried at −42.4%
- [ ] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain (or N/A if Gross Gain = 0)
  - ✓ 62,383 / 21,770 = 286.6% ✓ (Top Pages methodology — correct source)
- [ ] Source export passed standard import and normalization workflow
  - ⚠ Not verified in this session

**Narrative audit**
- [ ] Searched narrative for all %, currency symbols, and specific traffic numbers
- [ ] Every recomputable number in the narrative traces to a verified Calculation Log row
  - ⚠ All figures in narrative trace to Carried rows — not independently verified
- [ ] No approximate language used for figures that were actually computed
- [ ] Rounded values follow one consistent rule

**Client Applicability**
- [ ] Primary Lesson and Comp Summary state observable pattern, not settled causal claim
  - ✓ Primary Lesson states an observable Ahrefs ranking-and-estimated-traffic pattern (same-position estimated traffic decline, specific examples with numbers); causal interpretation (click interception) is framed as a hypothesis requiring GSC validation
- [ ] Medium- and low-confidence mechanisms not presented as fact in any client-facing field
  - ✓ Mechanism 2 (template demand destruction) and Mechanism 3 (competitive displacement) appropriately qualified as Contributing, Medium-High and Medium confidence
- [ ] Evidence Basis written in plain language a client can read
  - ✓ — includes explicit note that TV/RD figures are unavailable
- [ ] External Use Status reflects actual readiness for external exposure
  - ✓ Internal only — appropriate for Draft/Carried status with missing fields

**Fields & index**
- [ ] All controlled-vocabulary fields use approved values
- [ ] Record Status and Migration Validation Stage both updated
  - ✓ Draft / Migrated — not revalidated
- [ ] Index row values match verified record values
- [ ] AIO fields (Susceptibility, Presence Observed, Observed Effect) reflect observed evidence, not causal interpretation
  - ✓ Susceptibility = High (portfolio-level structural assessment); Presence Observed = Yes (keyword export AIO flag); Observed Effect = Intercepted (consistent with same-position estimated traffic decline pattern)
- [ ] Related Documents section populated (or explicitly marked None)
  - ✓ None for comparison briefs; source document reference listed

---

## Historical Amendments

**2026-07-11**
- **Reason:** New data available (migration to V2.0 repository format)
- **Sections updated:** All (initial migration from Comparison Brief format to structured company record)
- **Summary:** Migrated from Comparison Brief section in phase3-deep-dives.md (line 2831) to V2.0 company record template. Source was an elevated Comparison Brief, not a full 16-field deep dive — Pass 2 starting/ending traffic estimates, Traffic Value, and Referring Domains were not available in the source document and are flagged as gaps in the Outcome Summary and Calculation Log. All available metrics carried from original 2026-06-30 analysis. Cannibalization metrics correctly sourced from Top Pages export (2,200 rows) and carried — this is the correct methodology. Record Status = Draft; Migration Validation Stage = Migrated — not revalidated. Three distinct mechanisms documented at differentiated confidence levels. Brand-naming vulnerability and template-format structural exposure documented in Risk Flags.

**2026-07-14**
- **Reason:** Methodology update (V2.1) + post-migration quality review
- **Sections updated:** Header, Traffic Trajectory, Mechanism, AI Discoverability, Client Applicability, Narrative, Verification Checklist
- **Summary:** Applied V2.1 controlled-vocabulary normalization: Category → "Product Analytics" (was "Product Analytics / Product Management"), Dominant Content Model → "Editorial-blog-led" (was "Editorial-blog-led (guide library...)"), Company Size → "Mid-Market" (was "Mid-Market (~400 employees per LinkedIn)"). Classification notes added below header table. Calculation Verified corrected to "No" (was "Partial" — none were recomputed in the migration session; the original Top Pages methodology was sound but that is not what this field measures). Primary Inflection Date corrected to "Not established from available data" (was "2025-06 (AI Mode full US rollout)") — external event alignment note moved below the Traffic Trajectory table. Mechanism Confidence corrected to "Medium" (was "High") — rationale updated to reflect that Ahrefs traffic is estimated, no monthly time-series confirms acceleration timing, and keyword export cap limits population completeness. AIO causal language softened throughout: "directly observable CTR collapse" → removed; "this is AI Overview answer interception" → "strongly consistent with AIO click-through interception"; "59.8% attributable to AIO-exposed queries" → "59.8% of measured keyword-level losses occurred on AIO-exposed queries." AI Overview Exposure field language updated to match. "Most extreme gross-loss offset rate in the entire study" qualified with comparison universe (V1.7 cohort). AI Discoverability note rewritten: removed "strong indirect AI evidence" → "strong reason to prioritize a dedicated AI discoverability assessment." Primary Lesson softened from definitive AIO claim to screening signal requiring GSC validation.

---

**2026-07-14 (second pass)**
- **Reason:** Methodology update (V2.2) — terminology precision and taxonomy update
- **Sections updated:** Header, Mechanism, AI Discoverability, Client Applicability, Narrative, Verification Checklist
- **Summary:** Systematic replacement of CTR/click observation language with estimated-traffic language throughout: "CTR collapse" → "same-position estimated traffic decline"; "loses X% of its clicks" → "estimated traffic fell X%"; "click interception is the explanation" → "click interception becomes a strong hypothesis to test with GSC data." AI Overview Exposure field narrowed to pure exposure (59.8% of measured losses on AIO-exposed queries); ranking-vs-traffic divergence examples moved to Confidence Rationale. Contributing Mechanisms updated: "Content Quality" → "Search Demand Shift" (new V2.2 taxonomy value covering cases where traditional search demand declines because users satisfy the need through another channel — AI generation, AI tools, etc.). Last Verified Date set to blank (record is Migrated — not revalidated; a populated date would imply repository verification that has not occurred).

**2026-07-28 (V2.3 migration)**
- **Reason:** Methodology update (V2.3) — AIO three-field split and Commercial Alignment
- **Sections updated:** Mechanism, Client Applicability, Verification Checklist
- **Summary:** AI Overview Exposure single field replaced with three-field AIO split per V2.3 standard: AIO Portfolio Susceptibility = High, AIO Presence Observed = Yes (keyword export AIO flag on 1,641 losing and 1,816 gaining queries), AIO Observed Effect = Intercepted (same-position estimated traffic decline pattern across multiple keywords). Commercial Alignment field added to Client Applicability: Mixed (methodology/PM content aligned; template and commodity content only tangentially connected to buyer intent). Verification Checklist updated to V2.3 AIO field language.

*Record finalized: 2026-07-11 | Last verified: —*
