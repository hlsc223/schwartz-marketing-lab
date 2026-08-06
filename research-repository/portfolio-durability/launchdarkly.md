# Portfolio Durability Analysis — LaunchDarkly

<!--
Save to: portfolio-durability/launchdarkly.md
Link bidirectionally: add this file to the Related Documents section of the company record.
This PDA is triggered by extreme page concentration and portfolio compression — not Algorithmic Reassessment. The template's "Reassessment Window" section is adapted to describe the Portfolio Compression Event (Oct–Nov 2025).
-->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | LaunchDarkly |
| **Linked Company Record** | `company-records/launchdarkly.md` |
| **Portfolio Event Window** | 2025-10 to 2025-11 (page collapse) / URL-comparison: 2025-01 to 2026-08 |
| **Analysis Date** | 2026-08-06 |
| **Status** | Draft |
| **Primary Mechanism (from record)** | Demand Expansion |
| **PDA Trigger** | Extreme page concentration (70.4% in 2 URLs) + portfolio compression (−66.6% pages over study window) — not Algorithmic Reassessment |
| **Methodology Version** | V2.4 |

---

## Portfolio Event Context

*LaunchDarkly does not have an Algorithmic Reassessment event. The PDA trigger is a structural portfolio compression — 66% of indexed pages disappeared over the study window — combined with extreme concentration in two URLs. The "reassessment window" fields below describe the portfolio compression event; the URL-comparison window covers the Top Pages export dates.*

| Field | Value |
|-------|-------|
| **Page Collapse Window** | Oct–Nov 2025 |
| **Pre-Collapse Pages** | ~1,644 (Oct 2025, US diagnostic window) |
| **Post-Collapse Pages** | ~789 (Dec 2025, US diagnostic window) |
| **Collapse Magnitude (in-study)** | −52% in two months |
| **Full Study-Window Page Reduction** | 1,571 (Aug 2024) → 525 (Aug 2026), −66.6% |
| **Pre-Study Context** | A prior collapse reduced pages from 2,089 to 1,603 in Jul 2024 — one month before study window start. The study window understates total compression. |
| **Affected Sections** | /docs/, docs.launchdarkly.com, support.launchdarkly.com, /guides/, academy.launchdarkly.com — simultaneous across multiple independent site sections |
| **Top Pages Export Dates** | Previous: ~Jan–Feb 2025 / Current: Aug 2026 |
| **Trailing-Slash Normalization Applied** | No — not required; no normalization artifacts identified |
| **Window Caveats** | URL-comparison window does not align with study window start (Aug 2024); figures labeled as URL-comparison-window values, not study-window values. Performance History used for all endpoint totals. The in-study page collapse (Oct–Nov 2025) occurred within the URL-comparison window and is observable in the export. |

---

## Portfolio Overview

| Metric | Value |
|--------|-------|
| Total pages in export (URL-comparison window, all countries) | 1,583 |
| Recovery cohort (defined below) | Not formally enumerated — gain highly concentrated; see Gain Decomposition |
| Decline / lost cohort | ~1,000+ pages (prev > 0, curr = 0 within URL-comparison window) |
| Recovery cohort decision rule | N/A — gain decomposition replaces formal cohort enumeration given extreme concentration |
| Decline cohort decision rule | URL disappeared: previous traffic > 0, current = 0 |
| Gross Gain (URL-comparison, all countries) | 52,632 |
| Gross Loss (URL-comparison) | 5,913 |
| Net Change (URL-level) | 46,719 |
| Gross-Loss Offset Rate | 11.2% — healthy zone (<30%) |
| New-URL Gain (206 URLs, prev = 0) | 9,014 (17.1% of gross gain) |
| Continuing-URL Gain (prev > 0, curr > prev) | 43,618 (82.9% of gross gain) |
| Top 5 Page Traffic Share | 78.7% |
| Top 10 Page Traffic Share | 83.1% |
| Homepage share (current) | 37.5% (35,436 traffic) |
| /blog/deployment-strategies/ share (current) | 32.9% (31,049 traffic) |
| Two-page combined share | 70.4% |
| Deployment-strategies contribution to gross gain | 31,034 (59.0% of total gross gain) |
| Archetypes observed (recovery) | Methodological (/blog/deployment-strategies/), Homepage (launchdarkly.com/) |
| Archetypes observed (decline/lost) | Utility/Technical (documentation, support, academy pages) |

**Gain decomposition interpretation:** 82.9% of gross gain came from improving existing URLs — overwhelmingly from a single URL (/blog/deployment-strategies/, +31,034). The portfolio replacement pattern is not broad-based growth but single-asset demand absorption. New URLs contributed 17.1% of gain, spread across 206 URLs (avg ~44 traffic units each — low individual contribution).

---

## Controlled Vocabularies

*Full definitions in `governance/page-archetype-taxonomy.md` and `governance/mechanism-taxonomy.md`. Value sets only.*

**Page Archetype:** Conceptual / Methodological / Commercial Evaluation / Comparative / Programmatic / Utility / Original Research / Homepage / Editorial

**AI Substitutability:** Low / Medium / High

**Primary Query Type:** Brand / Commercial investigation / Definitional / Methodological / Comparative / Navigational / Tool-Utility / Other

**Recovery Pattern:** Broad ranking recovery / Single-query breakout / Long-tail expansion / Stable rankings + higher traffic / Existing demand recaptured / Mixed

**Decline Pattern:** Ranking collapse / Keyword disappearance / Stable rankings + traffic decline / Gradual position erosion / Mixed

**Candidate Driver (recovery):** Algorithmic reevaluation / Demand growth / Page rewrite or expansion / Link acquisition / Internal linking / SERP composition change / Unknown

**Candidate Driver (decline):** Algorithmic reevaluation / AI Overview interception / AI tool demand substitution / Competitive displacement / Demand contraction / Internal cannibalization / Technical signal loss / Unknown

**Durable Demand Signals:** Repeat engagement / Requires judgment / Requires workflow / Requires comparison / Proprietary data / Tool or interactive / Community or network / Brand destination / Renewable demand / AI-answerable / High commercial intent

**Outcome:** Promote / Preserve / Abandon

**Recovery Potential (decline cohort only):** High / Medium / Low / Unknown

---

## Recovery Cohort

*Pages that gained meaningful traffic during the URL-comparison window. Given extreme concentration, the recovery cohort is effectively two pages — one driving 59% of total gross gain.*

*AIO note: the top recovery page (/blog/deployment-strategies/) has confirmed dual AIO presence (cited with thumbnail at organic position 4). This is a meaningful structural signal — see E-004 in evidence-register.md.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Recovery Pattern | Candidate Driver | Conf. | Wayback | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|-----------------|-----------------|-------|---------|----------------------|---------|
| 1 | /blog/deployment-strategies/ | 15 → 31,049 (+31,034) | Methodological | Medium | Methodological | Stable rankings + higher traffic | Demand growth | H | Checked — no material rewrite confirmed | Requires comparison, Requires judgment, Renewable demand | Promote |
| 2 | / (homepage) | Previous not isolated → 35,436 current | Homepage | Low | Brand / Navigational | Stable rankings + higher traffic | Demand growth (brand) | H | N/A | Brand destination | Promote |

**Row 1 detail:** Position improved only 5 → 4; keyword count expanded +8 (47 → 55); content materially unchanged during growth period (Wayback: Nov 2025 snapshot vs. current — same body, KEY TAKEAWAYS summary box and AI chat added post-surge); US volume ~1,200 → 3,300 (+175%); global volume grew to 74,000; page aged since 2016-04-03; UR 4, 10 RDs. The demand grew to the page — the page did not improve toward the demand.

**Row 2 detail:** Homepage previous traffic is not isolated in the calculation log (URL-comparison previous SUM = 47,737; study-window start = 46,591 with homepage undifferentiated at start). Current traffic (35,436) is confirmed. Growth consistent with brand demand expansion over the study period.

**Concentration note:** Together, these two pages account for 70.4% of domain traffic. This is not a consequence of portfolio compression — the disappeared pages carried approximately 5.9 traffic units per page on average before disappearing. Concentration was driven by /blog/deployment-strategies/ growing from near-zero to one-third of domain traffic.

### Recovery Cohort — Elimination Matrix

*Wayback check completed during v0.1 analysis, 2026-08-06. Source: Wayback Machine snapshot (Nov 2025) vs. live page (Aug 2026).*

| URL | Rewrite? | AIO present? | Links changed? | SERP replaced? | Eliminated | Surviving candidates |
|-----|----------|-------------|----------------|----------------|------------|---------------------|
| /blog/deployment-strategies/ | No — same body text, same structure; KEY TAKEAWAYS box and AI chat added after surge (post-Jul 2026 update on 2026-07-31); body content materially unchanged from Nov 2025 snapshot to current | Yes — cited with thumbnail in AI Overview on "deployment strategies" (US) | Not tested | Not tested — page improved position (5→4), not displaced | Page rewrite or expansion eliminated as traffic driver | Demand growth (primary, high confidence); AIO citation (concurrent, causal weight not established); position improvement contributing (minor — 1 position) |
| / (homepage) | N/A — not checked | Not tested | Not tested | Not tested | — | Demand growth (brand demand expansion); Stable rankings + higher traffic |

---

## Decline Cohort

*Pages that lost meaningful traffic during the URL-comparison window. The dominant decline event is not gradual position erosion — it is the Oct–Nov 2025 portfolio compression: ~1,000+ URLs disappeared simultaneously across multiple site sections.*

*Attribution note: Individual URL names and previous traffic values for the disappeared pages were not separately extracted in the v0.1 analysis. The cohort is characterized by section/subdomain pattern and aggregate metrics.*

| # | URL Pattern | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Decline Pattern | Candidate Driver | Conf. | AIO Check | Durable Demand Signals | Recovery Potential | Outcome |
|---|-------------|-----------|-----------|---------|-------------------|----------------|-----------------|-------|-----------|----------------------|-------------------|---------|
| 1 | docs.launchdarkly.com/* | Prev > 0, curr = 0 (aggregate) | Utility | Medium | Tool-Utility / Navigational | Keyword disappearance | Structural consolidation (subdomain removed) | M | Not tested — documentation query type has moderate AIO susceptibility but pages are no longer indexed | — | Low — subdomain removed; pages are not candidates for recovery under current architecture | Abandon |
| 2 | support.launchdarkly.com/* | Prev > 0, curr = 0 (aggregate) | Utility | Medium | Tool-Utility / Navigational | Keyword disappearance | Structural consolidation (subdomain removed) | M | Not tested | — | Low — subdomain removed | Abandon |
| 3 | academy.launchdarkly.com/* | Prev > 0, curr = 0 (aggregate) | Methodological / Utility | Medium | Methodological / Tool-Utility | Keyword disappearance | Structural consolidation (subdomain removed) | M | Not tested | Requires workflow (training content), Requires judgment | Low — subdomain removed | Abandon |
| 4 | launchdarkly.com/guides/* | Prev > 0, curr = 0 (aggregate) | Methodological / Utility | Medium | Methodological | Keyword disappearance | Structural consolidation | M | Not tested | — | Low — section removed from main site | Abandon |

**Cohort-level observations:**
- Aggregate gross loss: 5,913 across all declined URLs (~5–6 traffic units per disappeared page)
- Low individual traffic per page is consistent with a structural consolidation of low-value pages, not with algorithmic demotion of high-value pages
- The simultaneous multi-subdomain disappearance (docs, support, academy, guides, /docs/ section on main site) in a two-month window points to planned structural consolidation more than content-type-specific algorithmic reassessment
- RD growth over the study window (+163.5%) is not consistent with link erosion as a co-contributing factor

**Critical caveat:** Redirect and URL-mapping evidence was not available. Without knowing whether these URLs were redirected (301) to consolidated equivalents or simply removed, the structural consolidation interpretation is a candidate, not a confirmed mechanism. Algorithmic demotion cannot be ruled out.

### SERP Replacement Analysis

*Not tested against live SERPs for declined/disappeared pages. Interpretation based on page type and collapse pattern.*

| URL Pattern | Representative Query Type | Likely Former Position | Current SERP Occupant | Occupant Type | Implication |
|-------------|--------------------------|----------------------|----------------------|---------------|-------------|
| docs.launchdarkly.com/* | Documentation / navigational | Product docs | Not ranked (subdomain removed) | N/A | Structural removal, not competitive displacement; LaunchDarkly docs likely redirected to an internal or different URL |
| academy.launchdarkly.com/* | Training / methodological | Academy-level position | Not ranked | N/A | Same — structural rather than algorithmic |

*SERP replacement analysis is not actionable for this cohort — the decline is explained by the pages no longer existing in the current architecture, not by competitive displacement from the SERPs they previously held.*

---

## Stable Cohort

*Formally undefined — the offset rate (11.2%) means only a small fraction of traffic moved into the loss bucket; most continuing URLs held or grew. However, given the extreme concentration of gains in one page, a meaningful stable cohort would require page-level traffic data not extracted in the v0.1 analysis. The stable cohort is deferred to a potential v0.2 data pull.*

| Note | Value |
|------|-------|
| **Status** | Deferred — not analyzed |
| **Data required** | Full URL-level export with previous and current traffic for all 1,583 URLs |
| **Estimated cohort** | Pages with prev > 0, curr > 0, change −20% to +20% — likely a large fraction of continuing URLs given the low offset rate |

---

## Durable Demand Assessment

*Assessed for the two dominant recovery pages. These pages together account for 70.4% of traffic and effectively define the portfolio's durability profile.*

*Strength scale: Strong / Moderate / Weak / None*

---

### /blog/deployment-strategies/ — 15 → 31,049 (+31,034, +>100,000%)

*The dominant traffic asset. DR 80 domain carrying a UR 4 page on a keyword where demand roughly tripled (US) and expanded substantially more globally. AIO dual presence confirmed.*

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | DevOps teams revisit deployment strategy decisions when adopting new practices, onboarding engineers, or evaluating release architecture — episodic but recurring, not on a structural schedule |
| Requires judgment | Moderate | Selecting a deployment strategy requires organizational context (team size, release cadence, rollback tolerance, toolchain) — an AI can enumerate options, but the evaluation requires situational input that the article frames well |
| Requires workflow | None | Article explains concepts and compares types. It does not guide execution of a workflow. User applies the knowledge independently. |
| Requires comparison | Moderate | The article's core value is comparing six deployment strategy types — this comparison structure is the direct reason users arrive. However, AI systems can enumerate and summarize these comparisons at scale; the format is partially substitutable. |
| Proprietary data | None | The six-types framework is public knowledge. LaunchDarkly's product (feature flags) is adjacent but not the source of the article's value. |
| Tool or interactive | None | Static article with KEY TAKEAWAYS summary box and an AI chat feature (added 2026-07-31). Neither is a proprietary tool — the AI chat is a UX overlay. |
| Community or network | None | No community or social layer embedded in this content. |
| Brand destination | Weak | "Deployment strategies" is a generic DevOps concept query with no brand intent. Traffic arrives at LaunchDarkly incidentally because the page ranks — not because users sought LaunchDarkly specifically. |
| Renewable demand | Strong | Every software team encounters deployment strategy decisions at multiple points: onboarding, architecture reviews, new release pipeline adoption, post-incident retrospectives. The underlying need recreates itself structurally as software development continues, team composition changes, and DevOps practices evolve. The demand does not exhaust after a single visit. |
| AI-answerable | Medium | A well-trained AI can enumerate deployment strategies and compare tradeoffs. The current Google AI Overview cites LaunchDarkly rather than replacing it — which is the favorable AIO outcome. However, the core conceptual content is straightforwardly answerable at scale. The AIO citation is the current observed state; whether it persists or transitions to replacement is an open question. |
| High commercial intent | Weak | Educational/informational query. Users evaluating feature management platforms may arrive here, but the query is not commercial — it precedes, rather than indicates, buying consideration. |

**Summary assessment:** The page has two genuine durability signals — Renewable demand (strong structural) and Moderate judgment/comparison requirements. These are meaningful but not the strongest DDF profile: the content is AI-enumerable at scale, page-specific authority is minimal (UR 4, 10 RDs), and brand intent is absent. The primary durability driver is demand volume and domain-level authority — not content properties that are structurally resistant to substitution. If AI Overviews transition from citing to replacing this content, the traffic impact would be material and the page has limited properties to defend against it.

---

### / (homepage) — Current 35,436 traffic

*Navigational brand asset. Not a content durability question — a brand demand question.*

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | Return visits via bookmark or typed navigation from existing users/prospects |
| Requires judgment | None | Navigational destination — not a content-evaluation visit |
| Requires workflow | None | |
| Requires comparison | None | |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Strong | Users navigating to the homepage are seeking LaunchDarkly specifically. Brand intent is the entire query. AIO cannot satisfy this intent — the user is not asking a question. |
| Renewable demand | Moderate | Existing users and prospects return as long as LaunchDarkly remains a considered vendor; demand is tied to the company's commercial trajectory |
| AI-answerable | None | Navigational queries are not AI-answerable in any meaningful sense |
| High commercial intent | Moderate | Homepage visitors include evaluation-stage prospects, existing customers, and job seekers — mixed intent, but a meaningful fraction is commercial |

**Summary assessment:** Homepage traffic is structurally durable as long as LaunchDarkly maintains brand recognition and commercial presence. AIO poses no threat to navigational/branded traffic. The risk is entirely commercial — if LaunchDarkly loses category leadership or brand awareness, homepage traffic contracts. This is not a content-strategy problem.

---

## Candidate Durability Principles

*Principles emerging from this analysis. Not yet registered — awaiting cross-company replication.*

### Supported

*Observed in this portfolio, mechanism plausible, consistent with prior evidence. Strong enough to carry as a working hypothesis.*

| Candidate Principle | Observed Evidence in This Portfolio | What Would Weaken It |
|--------------------|-------------------------------------|----------------------|
| Demand expansion can produce company-level organic traffic doubling through a single educational asset with no content investment, ranking breakthrough, or link acquisition to that page. | /blog/deployment-strategies/ grew from 15 → 31,049 traffic units; position improved 5→4 only; content materially unchanged during growth; keyword count +8; US volume roughly tripled; page had UR 4 and 10 RDs at the time of the surge. | A case where the same keyword demand growth occurred at a comparable site and the existing ranking page did not absorb the gain (competitor gained instead) — would suggest domain authority was the gating factor, not the demand-page interaction itself. |
| Page portfolio compression concentrated in very-low-traffic pages does not necessarily reduce total organic traffic. | LaunchDarkly removed 66% of indexed pages (1,571 → 525); gross loss from all declined URLs totaled only 5,913 (11.2% of gross gain); total traffic doubled over the same period. The disappeared pages averaged ~5–6 traffic units each before disappearing. | A case where comparably low-traffic pages were removed and total traffic did contract — would suggest the effect is volume-dependent or that some low-traffic pages carry indirect authority or link value that did not show up in direct traffic. |

### Emerging

*Observed but mechanism uncertain or confounds exist. Requires replication.*

| Candidate Principle | Observed Evidence | Confound / Uncertainty | What Would Weaken It |
|--------------------|-------------------|----------------------|----------------------|
| "6 types of X" structured educational content on high-DR domains may attract AIO citation rather than displacement on concept-level queries where AI Overviews appear. | /blog/deployment-strategies/ is cited in the Google AI Overview with a thumbnail at position 4; content format is a discrete, sectioned comparison of six types; KEY TAKEAWAYS box added pre-pull-date; DR 80 domain. | Single data point. AIO behavior varies by query and time. The KEY TAKEAWAYS addition (Jul 2026) may or may not have contributed. Cannot separate format effect from domain authority effect. | A structured "X types of Y" page on a comparably high-DR domain where the AIO replaced rather than cited the organic result — or a lower-DR domain where the same format failed to achieve citation. |
| Extreme two-page concentration (>70% in two URLs) represents a structural fragility that is invisible in traffic trend lines. | LaunchDarkly's traffic doubled while concentration shifted so that two URLs held 70.4% of all traffic. The trend line shows strong growth; the fragility only appears when examining concentration directly. | Not a durability failure yet — it's a risk characterization, not an observed outcome. The concentration may be sustained if the demand expansion continues. | No weakening case applies directly; this is a structural observation, not a predictive claim. The principle holds regardless of whether the traffic eventually contracts. |

### Not Supported

*Hypotheses this analysis tested and found insufficient support for.*

| Hypothesis | Why Not Supported in This Portfolio |
|-----------|-------------------------------------|
| Portfolio compression was driven by algorithmic reassessment of low-quality documentation and support content. | The simultaneous multi-subdomain disappearance (docs, support, academy, guides — independent site sections) in a two-month window is more consistent with planned structural consolidation than content-type-specific demotion. Strong domain-level RD growth (+163.5%) over the study period is inconsistent with the broad trust signals that typically accompany algorithmic reassessment. However, this hypothesis cannot be fully ruled out without URL-mapping or first-party confirmation — the mechanism is a candidate, not a confirmed or eliminated explanation. |
| AIO presence on the top traffic keyword suppressed click-through on the organic result. | The page holds 31,049 Ahrefs-estimated global traffic at position 4 while the AIO is present — traffic is occurring while the AIO is displayed, which is the contemporaneous definition of "Resistant." CTR data would be required to compare click rates with and without AIO; no such data is available. AIO suppression is not supported, but also not testable with current data. |

---

## Portfolio Comparison

### Archetype Distribution

| Archetype | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-----------|-------------------|------------------|------------------|---------------|
| Conceptual | 0 | 0 | Unknown | — |
| Methodological | 1 (/blog/deployment-strategies/) | 0–partial (academy pages — methodology content removed in consolidation) | Unknown | Net positive — primary gainer is Methodological |
| Commercial Evaluation | 0 | 0 | Unknown | — |
| Comparative | 0 | 0 | Unknown | — |
| Programmatic | 0 | 0 | Unknown | — |
| Utility | 0 | 1+ (docs, support pages) | Unknown | Net negative — all utility/documentation losses |
| Original Research | 0 | 0 | Unknown | — |
| Homepage | 1 (launchdarkly.com/) | 0 | — | Net positive |
| Editorial | 0 | 0 | Unknown | — |

*Note: Archetype distribution reflects the observable pattern from top-page analysis and cohort characterization. The full portfolio archetype distribution across 1,583 URLs was not extracted in the v0.1 analysis.*

### AI Substitutability Distribution

| AI Substitutability | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|--------------------|-------------------|------------------|------------------|---------------|
| Low | 1 (homepage — navigational) | 0 | Unknown | Net positive |
| Medium | 1 (/blog/deployment-strategies/ — AI can enumerate types) | ~2–3 (academy/training content) | Unknown | Net neutral to positive |
| High | 0 | 0 | Unknown | — |

*Observable pattern: No High AI-substitutability pages appear in the recovery cohort. The top recovery pages have Low or Medium substitutability. The decline cohort is concentrated in Utility/Technical content, which has Medium substitutability (documentation can increasingly be served by AI chatbots within products).*

### Primary Query Type Distribution

| Primary Query Type | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-------------------|-------------------|------------------|------------------|---------------|
| Brand / Navigational | 1 (homepage) | 0 | Unknown | Net positive |
| Methodological | 1 (deployment-strategies) | ~1 (academy) | Unknown | Net positive |
| Tool-Utility / Product docs | 0 | 2+ (docs, support) | Unknown | Net negative |
| Commercial investigation | 0 | 0 | Unknown | — |
| Definitional | 0 | 0 | Unknown | — |

### Durable Demand Signal Frequency

*Based on assessed pages only — deployment-strategies and homepage.*

| Signal | Recovery cohort | Decline cohort | Stable cohort | Pattern |
|--------|----------------|----------------|---------------|---------|
| Repeat engagement | Moderate (deployment-strategies) | Not assessed | Unknown | Episodic, not structural |
| Requires judgment | Moderate (deployment-strategies) | Not assessed | Unknown | Present but not dominant |
| Requires workflow | None | Not assessed | Unknown | Absent from top recovery page |
| Requires comparison | Moderate (deployment-strategies) | Not assessed | Unknown | Comparison format is the page's core structure |
| Proprietary data | None | Not assessed | Unknown | Absent — limits long-term defensibility |
| Tool or interactive | None | Not assessed | Unknown | Absent |
| Community or network | None | Not assessed | Unknown | Absent |
| Brand destination | Strong (homepage) | Not assessed | Unknown | Homepage is insulated from content risk |
| Renewable demand | Strong (deployment-strategies) | Not assessed | Unknown | Structural DevOps operational cycle drives recurring need |
| AI-answerable | Medium (deployment-strategies) | Not assessed | Unknown | Risk factor — content is AI-enumerable; AIO currently favorable but not guaranteed |
| High commercial intent | Weak (deployment-strategies); Moderate (homepage) | Not assessed | Unknown | Educational-to-commercial pipeline, not direct commercial traffic |

### Observed Portfolio Patterns

1. **Traffic growth was structurally non-replicable.** The entire demand expansion story — doubling organic traffic over two years — is attributable to a single asset absorbing rising demand. There was no content program, no SEO campaign, no editorial investment that produced this outcome. It happened to an existing page because the keyword demand grew.

2. **Concentration grew faster than traffic.** Two-page traffic share (70.4%) is not a prior state that persisted — it emerged during the study window as one page grew from 15 to 31,049 traffic units. The portfolio went from modestly concentrated to extremely concentrated as the demand expansion occurred. This happened while the page count also contracted, compounding the risk.

3. **Page removal at scale did not degrade traffic.** Over 1,000 pages disappeared from the portfolio, with a combined gross loss of 5,913 traffic units — roughly 5 traffic units per page. The low per-page traffic is consistent with those pages having negligible organic value individually. Removal did not produce the organic decline that conventional "reduce page count" warnings would predict.

4. **Domain authority appears to be the ranking mechanism for the top non-branded page.** UR 4 and 10 RDs on a page that holds position 4 for a query with 74,000 global monthly searches suggests that LaunchDarkly's DR 80 and topical authority in the DevOps domain are the primary ranking signals, not page-level link equity. This has durability implications: if domain authority is the gating mechanism, competitive ranking pressure on this page depends on whether competitors can achieve similar domain authority — a higher bar than simply producing better content.

5. **AIO citation and organic presence are currently co-occurring on the primary keyword.** Dual presence (position 4 organic + cited in AI Overview) is the current observed state on "deployment strategies" (US). Whether this is stable or transitional is unknown from a single observation. The favorable AIO treatment is structurally notable for a "6 types of X" format page with a KEY TAKEAWAYS box — suggesting this content format may be read as easily extractable source material by Google's AI systems.

---

## Evidence Register Contributions

| Field | Value |
|-------|-------|
| **Strengthens** | E-004 (AIO citation + organic retention on structured educational content — consistent with the mechanism observed) |
| **Challenges** | None |
| **Creates** | None beyond E-004 (already registered) — Candidate Durability Principles above are pre-registration; require replication before Evidence Register entry |

**Open questions this analysis created:**

1. Does demand expansion on a single educational page at a high-DR domain follow a predictable keyword demand curve — and if so, at what positions and DR thresholds does this mechanism become active? Testing requires cross-company comparison across developer tools, SaaS, and adjacent categories.

2. If the 1,046 disappeared pages were redirected (301) to consolidated destinations rather than removed, does the domain-level authority benefit explain part of the RD growth (+163.5%)? This would strengthen the structural consolidation mechanism interpretation and could have positive durability implications for the remaining portfolio.

3. Does the keyword cluster around deployment strategies (canary deployment, blue/green deployment, rolling deployment, shadow deployment) show comparable demand expansion? If yes, the demand story broadens from "one lucky keyword" to "LaunchDarkly owns a rising conceptual cluster" — a more structurally defensible position.

---

## Historical Amendments

**2026-08-06 — Initial PDA created**
- **Reason:** Triggered by extreme two-page concentration (70.4%) and portfolio compression (−66.6% pages) — warranting PDA even though primary mechanism is Demand Expansion, not Algorithmic Reassessment
- **Status:** Draft

---

*Analysis completed: 2026-08-06 | Status: Draft*
