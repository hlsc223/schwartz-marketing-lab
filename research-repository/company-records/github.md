# GitHub

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-29. Key metrics partially carried from prior analysis — Top Pages export used a Jun 2024–Jun 2026 window rather than the study window; flagged in Calculation Log. Referring Domains data unusable at GitHub's scale (Ahrefs returns 0 for every month). Do not upgrade Record Status without recomputing from study-window-scoped exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | GitHub |
| **Website** | github.com |
| **Category** | Developer Tools |
| **Business Model** | Developer Ecosystem |
| **Dominant Content Model** | Programmatic |
| **Company Size** | Enterprise |
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
| **Measurement Reliability** | Medium — very large domain with known Ahrefs vendor limitations at scale (row limits, coverage gaps in developer documentation); direction of decline credible; magnitude uncertain; no monthly perf file from a dedicated export noted in the deep dive |

*Dominant Content Model note: "Programmatic" is the closest applicable value. The majority of GitHub's search-visible content is individual user-created repository pages — exogenous, viral, and not under GitHub's editorial control. GitHub does publish documentation, blog content, and educational surfaces (GitHub Skills, GitHub Docs), but these owned surfaces constitute a small fraction of the total search-visible footprint relative to the repository ecosystem. The "Programmatic" classification captures the user-generated-content-at-scale dynamic, not platform-managed programmatic SEO.*

---

## Outcome Summary

*All figures carried or partially carried from original analysis — Top Pages export used an expanded Jun 2024–Jun 2026 window rather than the Jan 2025–Jun 2026 study window. Referring Domains figures are unusable (see Source Files). Do not cite externally without recomputing from study-window-scoped exports.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 172,263,997 | Ahrefs Pass 2, Jan 2025 |
| Ending Traffic Estimate | 48,205,217 | Ahrefs Pass 2, Jun 2026 |
| Traffic Change % | −72.0% | Calculation Log (Carried) |
| Outcome Classification | Declined | ±10% threshold |
| Traffic Value Change | −43.6% | Ahrefs Pass 2 (Carried) |
| Referring Domains Change | Not available | Ahrefs measurement gap — returns 0 for all months at this domain's scale |

**Note on traffic value divergence:** Raw traffic fell −72.0% while traffic value fell only −43.6% — a 28.4 pp divergence indicating the composition of lost traffic skewed toward lower-commercial-value informational queries. This divergence is the primary diagnostic signal supporting AI-mediated informational demand erosion as the mechanism — consistent with AI displacement of lower-value queries while higher-value queries are relatively retained. It does not isolate the specific AI mechanism (AI Overviews, answer engines, coding assistants, or upstream substitution).

**Historical context:** GitHub's all-time peak traffic was approximately 214,700,000 in October 2024 — three months before the study window opens. The study window opens already mid-decline. The −72.0% figure measures only the within-window decline; total decline from historical peak to window end is larger.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Early Peak then Decline |
| **Peak Month** | 2024-10 (historical peak, before study window; study window opens in decline) |
| **Peak Traffic Estimate** | ~214,700,000 (historical; before study window) |
| **Trough Month** | 2026-02 (approximate, within study window) |
| **Trough Traffic Estimate** | Not available from source data — see note |
| **Primary Inflection Date** | 2024-10 (peak month) |
| **Current Direction** | Declining (with modest stabilization Mar–Jun 2026) |

*Trough note: The comparison brief identifies February 2026 as the trough month. The specific traffic value at trough was not extracted from the monthly performance file in the original analysis. The ending figure (48,205,217, Jun 2026) is somewhat above the trough due to the Mar–Jun 2026 stabilization. The traffic shape is a continuous, gradual 16-month decline (Oct 2024–Feb 2026) with no discrete cliff-edge, followed by a modest, unexplained partial stabilization.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | AI-mediated informational demand erosion |
| **Mechanism Pathway** | Algorithm or relevance reassessment (likely 2024 broad core updates — Medium-High confidence) → widespread position losses across developer documentation, tutorial, and repository-discovery content → large-scale traffic decline continuing a post-2022-peak trajectory, with mild partial recovery in the study window (-72.0% net) |
| **Contributing Mechanisms** | Search Demand Shift |
| **Mechanism Confidence** | Medium |
| **Confidence Rationale** | The traffic-value divergence (traffic −72.0%, value −43.6%) is consistent with disproportionate loss of low-commercial-value informational queries — the query type most susceptible to AI Overview click-through interception. The continuous, gradual shape of the decline (no discrete cliff-edge) is less consistent with a single algorithm update and more consistent with an expanding AI Overview footprint progressively intercepting more queries over time. The same-position CTR collapse signature (positions holding or improving while estimated traffic falls sharply) was the operating hypothesis during the original analysis; no live keyword-level AI Overview spot-check was run to confirm this directly. Confidence is Medium rather than High because: (1) no direct query-level AI Overview exposure verification was performed; (2) Search Demand Shift (developers using AI coding tools and chat systems upstream instead of searching at all) cannot be separated from AI Overview interception with available data; (3) GitHub's unique platform nature (third-party repository traffic dominates the page-level footprint) means the normal page-content mechanism for diagnosing AI Overview impact doesn't apply directly. |
| **Strongest Competing Explanation** | Competitive displacement: AI coding platforms (GitHub Copilot, ChatGPT, etc.) creating a direct substitute for GitHub repository browsing as a developer workflow. This is conceptually the same as Search Demand Shift and is the most plausible upstream mechanism, but it produces declining search volume rather than declining CTR from existing searches — impossible to distinguish from AI Overview interception with Ahrefs data alone. |
| **Disconfirming Evidence** | Algorithm Alignment is Low — the continuous, gradual decline shape has no discrete timing alignment to any named Google update, which would be expected if an algorithm update were the primary driver. The business itself (platform usage at all-time high: 1B commits in 2025) argues against any interpretation that organic search traffic reflects overall business health for this company. |
| **Algorithm Alignment** | Weak |
| **AIO Portfolio Susceptibility** | High |
| **AIO Presence Observed** | Not tested |
| **AIO Observed Effect** | No conclusion |

*AIO field notes: AIO Portfolio Susceptibility = High — a large share of GitHub's search-visible content involves informational developer queries (what is X, how to do Y, repository-level how-to content) that are structurally likely to trigger AI Overviews. AIO Presence Observed = Not tested — no direct query-level AIO spot-check was performed. AIO Observed Effect = No conclusion — the traffic-value divergence (traffic −72.0%, value −43.6%) is consistent with AI-mediated interception of lower-value informational queries, but insufficient to confirm the specific mechanism or that AIO specifically (vs. answer engines or upstream substitution) is responsible.*

---

## Gross-Loss Offset Analysis

*Not computed under repository methodology. The Top Pages export available for GitHub used a Jun 2024–Jun 2026 window rather than the Jan 2025–Jun 2026 study window, making Gross Gain and Gross Loss figures non-comparable to other repository records that use study-window-scoped exports. Recompute from a study-window-scoped Top Pages export before populating this section.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | Not computed — export window mismatch | — |
| Gross Loss (absolute) | Not computed — export window mismatch | — |
| Net Change | Not computed | — |
| Gross-Loss Offset Rate | Not computed | — |
| Offset Zone | N/A | — |
| Reconciliation check | N/A | — |

---

## Page & Content Analysis

*Top-page concentration figures below are from a 30,000-row keyword sample, not the standard Top Pages export calculation. They reflect concentration within the keyword sample and cannot be directly compared to Top Pages-derived concentration figures in other records.*

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | Not computed from Top Pages export | — |
| Top 5 Page Traffic Share | ~26.6% (30K keyword sample; see note) | Ahrefs keyword export |
| Top 10 Page Traffic Share | ~29.7% (30K keyword sample; see note) | Ahrefs keyword export |
| Dominant Content Type | Third-party repositories (user-generated) | Ahrefs Top Pages export |
| Winning Content Type | N/A — declining across all page types | — |
| Losing Content Type | Third-party repository pages (viral, exogenous) | Ahrefs Top Pages export |
| New-URL Gain Share | ~32% of current top-page traffic from pages with zero prior traffic (virality-driven, not content-strategy-driven) | Ahrefs Top Pages export |
| Page Replacement Pattern | N/A — declining program | — |
| Notable patterns | ~75% of current top-40 traffic pages (excluding GitHub-owned surfaces) are individual third-party repositories that achieved traffic exogenously — viral content created and distributed by repository owners, not GitHub. Traffic from any given repository page reflects the repository's community and content, not anything GitHub did. Branded traffic 85.3% / non-branded 14.7% in keyword sample. Single-page concentration is moderate within the sample (top 5 = 26.6%, top 10 = 29.7%) — low relative to other declining companies, but this reflects the distributed nature of repository-level traffic rather than a healthy content portfolio. | Ahrefs keyword export |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | None |
| **Recovery Mechanism** | N/A |
| **Recovery Confidence** | Not applicable |
| **Recovery Notes** | Modest stabilization observed Mar–Jun 2026 with no clear content or structural explanation identified during the original analysis. The stabilization is insufficient to constitute recovery at the scale of the preceding decline (−72.0% from window start; −77.6% from historical peak). No structural floor analogous to the recovery archetypes in the playbook was identified — GitHub's traffic loss mechanism is structural to the platform's content model, and the observed loss is unlikely to be recoverable at scale through a conventional editorial-content response. |

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

*Note: AI Observation Protocol parked project-wide. No spot-check performed. Given that the primary hypothesis involves AI Overview interception and Search Demand Shift, AI discoverability assessment would be particularly relevant for this record — GitHub's brand prominence as a developer platform likely generates some AI citation, but whether AI citation is growing while search traffic falls would directly test the search-demand-shift hypothesis. Flag for future assessment.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Low — the dominant search footprint is third-party user-generated repositories with no topical connection to GitHub's own commercial positioning. GitHub's owned content surfaces (docs, blog, GitHub Skills) are a small fraction of the total footprint and are not driving the traffic story in either direction. |
| **Best-Fit Client Type** | B2B SaaS or developer tool company experiencing organic traffic decline while business metrics remain healthy; companies trying to understand whether their traffic loss is structural or recoverable |
| **Best-Fit Problem** | "Our organic traffic is declining but our pipeline is fine — what's going on?" / "Is our traffic loss a search problem or a content problem?" |
| **Relevance Conditions** | Client has a developer-facing product with significant informational search footprint; traffic decline is gradual and continuous rather than cliff-edge; business health metrics diverge from search traffic direction |
| **Non-Comparable When** | Client is a B2B SaaS company with owned content that they control — GitHub's content footprint is primarily third-party-created repository pages; the mechanism that applies to GitHub (platform-hosted viral content) cannot be analogized to a company managing its own blog and documentation. The scale is also disqualifying for benchmarking: 172M → 48M traffic involves absolute numbers that have no comparable in most B2B SaaS segments. |
| **Primary Lesson** | GitHub's organic estimated traffic fell −72.0% during a period in which the company's CEO described a "boom in business" (1 billion commits in 2025) — demonstrating that organic search traffic and business health can decouple completely when the traffic mechanism is structural, not content-driven. |
| **Evidence Use** | Cautionary / Diagnostic |
| **Evidence Basis** | Based on Ahrefs Top Pages and keyword exports covering June 2024 through June 2026 (note: export window does not match study window — see Source Files). Referring Domains data not usable at this domain's scale. No first-party analytics available. All traffic figures are Ahrefs third-party estimates. |

---

## Risk Flags

- **Export window mismatch:** Top Pages export used Jun 2024–Jun 2026, not the Jan 2025–Jun 2026 study window. Gross Gain, Gross Loss, and page-level change figures are not directly comparable to other repository records that use study-window-scoped exports. Must recompute before this record can be used for comparative analysis.
- **Referring Domains unusable:** Ahrefs returns 0 for all months for this domain — a known measurement gap at GitHub's scale. Domain-level authority trends cannot be tracked or compared.
- **Platform content model:** ~75% of current top-40 traffic pages are individual third-party repositories — viral content the company did not create. This makes standard organic growth diagnostic questions ("what content is working?" "where is the opportunity?") poorly suited to this case.
- **Business-metric decoupling:** Platform usage metrics (commits, active repositories) were at all-time highs during the traffic decline. This is not a company in distress; search traffic and business health are measuring different things.
- **No AI spot-check:** The primary mechanism hypothesis (AI Overview interception + Search Demand Shift) was not directly tested at the keyword or query level.
- **Keyword sample cap:** The 30,000-row keyword export cap means concentration figures from the keyword sample are understates of the true portfolio footprint.

---

## Related Documents

- Comparison briefs: `comparison-briefs/github-circleci-harness-cloudbees.md`
- Synthesis documents: —
- Studies: —
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (lines 35–204); original 118-company report cohort, Developer Tools category

---

## Calculation Log

*The authoritative verification source for all recomputable metrics. Traffic Change % carried from original analysis — see export window mismatch note above.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Pass 2 top-level figures | Starting traffic Jan 2025, Ending traffic Jun 2026 | All estimated organic traffic | (48,205,217 − 172,263,997) / 172,263,997 | −72.0% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 top-level figures | Starting TV, Ending TV | All traffic | (end − start) / start | −43.6% | Carried |
| Traffic Value Divergence | Derived | — | — | Traffic Change % − Traffic Value Change % = −72.0% − (−43.6%) = −28.4 pp | −28.4 pp | Carried |
| Gross Gain | — | — | Top Pages export required (study-window-scoped) | SUM(positive changes) | Not computed | N/A — recompute from study-window-scoped Top Pages export |
| Gross Loss | — | — | Top Pages export required (study-window-scoped) | ABS(SUM(negative changes)) | Not computed | N/A |
| Gross-Loss Offset Rate | — | — | — | Gross Loss ÷ Gross Gain | Not computed | N/A |
| Referring Domains | Ahrefs | — | — | — | Not available (Ahrefs returns 0 for all months) | N/A — measurement gap |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Top Pages export (Pass 2) | Top ranking pages with previous and current traffic | CSV | Jun 2024 (previous) – Jun 2026 (current) | ⚠ Window does not match study window (Jan 2025–Jun 2026). Gross Gain/Loss figures not comparable to study-window records. |
| Ahrefs keyword export (Pass 2) | All ranking keywords with Branded flag, previous and current traffic | CSV | Jun 2024 – Jun 2026 | 30,000-row cap. Used for branded/non-branded split and concentration estimates. |
| Ahrefs Performance export (Pass 2) | Monthly traffic and traffic value series | CSV | Jan 2025 – Jun 2026 | Source for starting/ending traffic estimates and traffic value figures. |
| Ahrefs Referring Domains export | Monthly referring domain count | — | Jan 2025 – Jun 2026 | Unusable — returns 0 for all months at this domain's scale (Ahrefs measurement gap). |
| WebSearch (multiple queries) | External context: platform usage statistics, leadership statements, Microsoft ownership | Web | Jun 2026 | Source of "1B commits in 2025" COO statement and platform health context. |

---

## Narrative

### Company Overview

GitHub is the world's largest code hosting and collaboration platform, owned by Microsoft since 2018. The company hosts hundreds of millions of repositories across millions of individual and organizational accounts. GitHub's organic search footprint is structurally unlike any other company in this study: the overwhelming majority of its search-visible pages are individual third-party repositories — content that external developers and organizations created and hosted on the platform. GitHub publishes its own documentation, blog, and product content, but those owned content surfaces constitute a small fraction of the total search-visible footprint compared to the repository content.

This distinction matters fundamentally for interpreting any organic traffic trend at GitHub. A decline in organic estimated traffic does not necessarily reflect anything GitHub did or failed to do — it may reflect changes in how developers find and use repositories, how AI tools answer programming questions, or how repository content gets indexed and trafficked. The platform's business metrics (active repositories, commits, developer accounts) were described by GitHub's COO as showing a "boom in business" during the same window in which search traffic declined by nearly three-quarters.

### Traffic Trajectory

GitHub's organic estimated traffic fell from 172,263,997 (January 2025) to 48,205,217 (June 2026), a decline of −72.0% over the study window. This is not the starting point of the decline — GitHub's historical traffic peak was approximately 214,700,000 in October 2024, three months before the study window opens. The study window opens already mid-decline.

The shape is continuous and gradual: a 16-month decline from the October 2024 historical peak through an approximate February 2026 trough, with no discrete cliff-edge or single inflection point. This shape is diagnostic. Algorithm update damage typically produces a discrete cliff-edge concentrated in specific position buckets. The gradual, continuous shape is more consistent with an expanding AI Overview footprint progressively intercepting more queries over time — or with developers progressively substituting AI tools for traditional search as an upstream behavior change.

A modest, unexplained partial stabilization appeared in March–June 2026, bringing the June 2026 endpoint slightly above the February trough. This stabilization has no clear content or structural explanation identified in the original analysis.

Traffic value fell −43.6% over the same period, substantially less than the −72.0% raw traffic decline. The 28.4 percentage-point divergence indicates the composition of lost traffic skewed toward lower-commercial-value informational queries — consistent with AI Overview interception operating most strongly on high-satisfiability, low-commercial-intent developer queries (code syntax questions, simple how-to lookups, technology definitions), while retaining the smaller volume of higher-value queries.

### Mechanism Analysis

The primary mechanism assessment is AI-mediated informational demand erosion at Medium confidence, with Search Demand Shift as a contributing mechanism. The specific AI vector (AI Overviews in Google SERPs, developer-directed AI tools like Copilot or ChatGPT, or upstream behavioral substitution) cannot be isolated with available data.

The traffic-value divergence is the strongest available diagnostic signal. When raw traffic falls faster than traffic value, the implication is that the lost volume was concentrated in lower-value queries — precisely the query type most susceptible to AI-mediated displacement (brief, factual, satisfiable developer informational queries). GitHub's 28.4 pp divergence (traffic −72.0%, value −43.6%) is consistent with this pattern across all plausible AI displacement mechanisms, not specifically AI Overviews.

The shape of the decline (gradual, continuous, 16-month) rules out a discrete algorithm update as the primary driver. Algorithm update damage produces position-level step-changes aligned to update dates; the gradual expansion of AI Overview coverage over the same period — from the May 2025 Google I/O full rollout through the November 2025 global expansion to 180+ countries — is one plausible explanation for a gradual, expanding traffic loss. The parallel growth of AI coding tools and assistant usage among developers is an equally plausible upstream explanation that cannot be distinguished from SERP-level interception with available data.

The Search Demand Shift contributing mechanism reflects the possibility that some share of GitHub's query decline reflects upstream substitution — developers who previously searched for repository content, code examples, or technical answers now ask AI coding tools (GitHub Copilot, ChatGPT, Claude) directly, generating no search query at all. This cannot be confirmed with Ahrefs data alone (it would require declining search volume on affected queries rather than declining CTR from existing searches), but the behavioral pattern is plausible and well-observed anecdotally in the developer community.

What this record cannot resolve: the two mechanisms cannot be separated with available data. A live AI Overview spot-check on GitHub's highest-traffic query categories (and search volume trend data for those queries) would sharpen the causal picture significantly. Neither was available in the original analysis.

### Page & Content Analysis

Approximately 75% of GitHub's current top-40 traffic pages (excluding GitHub-owned surfaces like github.com and its direct documentation) are individual third-party repositories that reached their current traffic levels through external virality — content the platform hosted but did not create. Approximately 32% of current top-page traffic comes from pages that had zero traffic in the prior period (the "previous" column of the Top Pages export), suggesting a continuous churn of repositories rising and falling in the search-visible footprint based on viral activity external to anything GitHub controls.

The branded vs. non-branded split in the keyword sample (85.3% branded / 14.7% non-branded) is notable: even accounting for the platform's scale, the traffic that remains is heavily brand-navigational. Non-branded informational queries are disproportionately the ones being lost — consistent with AI-mediated displacement targeting precisely that query type.

Top-5 and top-10 keyword sample concentration (26.6% and 29.7%) appear moderate compared to some other declining companies in the cohort, but this reflects the distributed nature of repository virality, not a healthy editorial portfolio. No single owned content asset is a meaningful load-bearing element of the traffic footprint.

### Recovery

No recovery occurred or appears structurally available through standard content investment. GitHub's traffic loss mechanism is structural to the platform's content model — most of the traffic that was lost was to third-party repository pages that traffic for exogenous reasons, and the mechanism driving the loss (AI-mediated informational demand erosion) is unlikely to be recoverable at scale through GitHub's owned editorial content surfaces.

The modest stabilization in March–June 2026 has no content explanation identified in the analysis. It may reflect natural demand-floor effects (the remaining traffic being more resistant to AI Overview interception) or some other platform-level factor not captured in the data.

The honest conversation for a company structurally analogous to GitHub is not how to recover this specific search traffic channel, but how to account for organic search's declining contribution to developer-awareness and discovery — and where else demand generation investment is warranted.

### Client Applicability

This record is primarily useful as a cautionary case for two distinct client conversations.

**For a developer tool company experiencing traffic decline with healthy business metrics:** GitHub demonstrates that traffic-business decoupling is real and observable — a company can simultaneously be at an all-time high in platform usage and at a 16-month low in organic estimated traffic. Before treating any organic traffic decline as a content or SEO failure, the right first question is whether the pages losing traffic are connected to the business's actual demand generation path or to incidental informational query exposure that would not have generated qualified leads regardless.

**For any client benchmarking against GitHub's traffic figures:** Do not use GitHub as a benchmark for anything. The absolute traffic scale is incomparable to any B2B SaaS company in the study. The content model (user-generated repository pages) has no analogue in a typical owned-content program. The mechanism driving the traffic loss (AI interception of developer informational queries at massive scale) is unique to platform businesses with this kind of search footprint.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off. Items below mark known incompletions.*

**Calculation Log**
- [ ] Calculation Log populated before Outcome Summary and narrative were written
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ Traffic Change % carried; Gross Gain/Loss not computed (export window mismatch)
- [ ] Gross Gain − Gross Loss reconciles to Net Change within stated tolerance
  - ⚠ Not computable — export window mismatch
- [ ] Net Change + Starting Traffic ≈ Ending Traffic
  - ✓ Carried: 172,263,997 + (−124,058,780) = 48,205,217 ✓
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (48,205,217 − 172,263,997) / 172,263,997 = −72.0% ✓
- [ ] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain (or N/A if Gross Gain = 0)
  - ⚠ Not computed — Top Pages export window mismatch; requires study-window-scoped export
- [ ] Source export passed standard import and normalization workflow
  - ⚠ Export window mismatch flagged; not corrected in this session

**Narrative audit**
- [ ] Searched narrative for all %, currency symbols, and specific traffic numbers
- [ ] Every recomputable number in the narrative traces to a verified Calculation Log row
  - ⚠ All figures trace to Carried rows
- [ ] No approximate language (~, "roughly," "about") used for figures that were actually computed
- [ ] Rounded values follow one consistent rule

**Client Applicability**
- [ ] Primary Lesson and Comp Summary state observable pattern, not settled causal claim
  - ✓ Primary Lesson states observable fact (traffic decline during business growth) without causal claim
- [ ] Medium- and low-confidence mechanisms not presented as fact in any client-facing field
  - ✓ Mechanism Confidence = Medium; narrative explicitly qualifies
- [ ] Evidence Basis written in plain language a client can read
  - ✓
- [ ] External Use Status reflects actual readiness for external exposure
  - ✓ Internal only — appropriate given export window mismatch and Partial Calculation Verified status

**Fields & index**
- [ ] All controlled-vocabulary fields use approved values
- [ ] Record Status and Migration Validation Stage both updated
  - ✓ Draft / Migrated — not revalidated
- [ ] Index row values match verified record values
  - ⚠ GitHub placeholder row in index has incorrect values from prior version — corrected in 2026-07-28 index update session
- [ ] AI Overview Exposure reflects observed evidence, not causal interpretation
  - ✓ High reflects portfolio-level exposure; causal interpretation in Mechanism section
- [ ] Related Documents section populated (or explicitly marked None)
  - ✓ Comparison brief reference included

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** New data available (migration to V2.2 repository format; prior index had placeholder row only)
- **Sections updated:** All (first full record; replacing placeholder)
- **Summary:** Migrated from Phase 3 deep dive format (14-field analysis, phase3-deep-dives.md lines 35–204) to V2.2 company record template. Traffic Change % and Traffic Value Change % carried from original 2026-06-29 analysis. Top Pages export window mismatch (Jun 2024–Jun 2026 vs. Jan 2025–Jun 2026 study window) flagged and documented throughout. Referring Domains data flagged as unusable. Primary Mechanism set to "AI Overview" with Search Demand Shift as contributing mechanism. Index row corrected from placeholder values to match this record.

**2026-07-28 (V2.3 schema update)**
- **Reason:** Methodology update (V2.3 — mechanism taxonomy, AIO field split, Commercial Alignment, language corrections)
- **Sections updated:** Header (Methodology Version), Mechanism (Primary Mechanism, AIO fields), Outcome Summary note, Client Applicability (Commercial Alignment added), Narrative (Mechanism Analysis, Page & Content Analysis, Recovery), Historical Amendments
- **Summary:** Primary Mechanism reclassified from "AI Overview" to "AI-mediated informational demand erosion" — "AI Overview" was too specific given that no query-level spot-check was performed and multiple AI displacement mechanisms are plausible. AIO Exposure → 3-field split (Susceptibility: High, Presence: Not tested, Effect: No conclusion). Commercial Alignment: Low added. Language fixes: "no meaningful owned content surface" → corrected to acknowledge GitHub does publish owned content surfaces but these are a small fraction of total footprint; "AI Overview interception" → "AI-mediated displacement/interception"; "not recoverable through content investment" → "unlikely to be recoverable at scale through conventional editorial-content response."

---

*Record finalized: 2026-07-28 | Last verified: —*
