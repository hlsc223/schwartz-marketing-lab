# CloudBees

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-29. Key metrics carried from prior analysis, which included a documented Pass 2 data-entry correction (column shift in Traffic, Traffic Value, and Referring Domains fields). All figures in this record reflect the corrected values. Referring Domains not available (no domain-level Ahrefs export was collected; per-page backlinks export cannot be reliably summed to a site-wide total). Do not upgrade Record Status without recomputing from source exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | CloudBees |
| **Website** | cloudbees.com |
| **Category** | Developer Tools |
| **Business Model** | B2B SaaS |
| **Dominant Content Model** | Editorial-blog-led |
| **Company Size** | Mid-Market |
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
| **Measurement Reliability** | Medium — monthly perf file exists but required a Pass 2 data correction (column-shift error caught during deep dive); referring domains not available from a domain-level export (per-page BBL only); direction and trajectory credible, absolute RD figures absent |

*Data correction note: The original Pass 2 CloudBees row had a column-shift error — Traffic held the traffic-value figure, Referring Domains held the actual traffic figure, and Traffic Value held the position count. Caught by cross-checking against the raw performance export and confirmed before correcting. All figures in this record use the corrected values. Any prior cross-company comparison referencing the old CloudBees Pass 2 numbers should be re-checked.*

---

## Outcome Summary

*All figures carried from original analysis using corrected Pass 2 values.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 47,036 | Ahrefs Performance export (corrected), Jan 2025 |
| Ending Traffic Estimate | 80,857 | Ahrefs Performance export (corrected), Jun 2026 |
| Traffic Change % | +71.9% | Calculation Log (Carried) |
| Outcome Classification | Grew | ±10% threshold |
| Traffic Value Change | $30,983 → $51,252 (+65.4%) | Ahrefs Pass 2 (corrected, Carried) |
| Referring Domains Change | Not available | No domain-level Ahrefs export collected; per-page backlinks export cannot be summed reliably |

**Historical context:** CloudBees's all-time traffic peak was 136,304 (April 2022) — over three years before the study window opens. The study window opens at 47,036, which is already 65.5% below that historical peak. The Jun 2026 study-window high (80,857) is a new high within the window but remains 40.7% below the 2022 all-time peak.

**Traffic vs. value note:** Raw traffic grew +71.9% while traffic value grew +65.4% — a modest 6.5 pp divergence, closer growth-rate match than GitHub's divergence. The relationship is approximately in line, suggesting composition shift is not a dominant factor here (unlike GitHub's −28 pp divergence or Harness's +41 pp divergence).

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Continuous Acceleration |
| **Peak Month** | 2026-06 (new study-window high) |
| **Peak Traffic Estimate** | 80,857 |
| **Trough Month** | 2025-12 |
| **Trough Traffic Estimate** | 38,615 |
| **Primary Inflection Date** | 2025-09 (Phase 1 collapse onset) / 2026-01 (Phase 2 acceleration onset) |
| **Current Direction** | Growing |

*Two-phase interior shape detail: Jan 2025 (47,036) → Aug 2025 local high (56,024) → Sep–Dec 2025 collapse to trough (38,615) → Jan–Jun 2026 smooth acceleration to all-time study-window high (80,857). The Phase 1 collapse is the most severe single-month keyword-count drop found in the study to date: positions 11-20 fell from 10,303 to 3,351, positions 21-50 from 16,485 to 3,699, positions 51+ from 5,463 to 1,448 — all falling 60–75% in a single month (Sep–Oct 2025 transition). Phase 2 is a smooth, multi-month build rather than a sharp post-update jump.*

*Lift from Trough: (80,857 − 38,615) / 38,615 = +109.4%*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Mixed (Phase-dependent) |
| **Mechanism Pathway** | Algorithm Update (Sep-Oct 2025 — High timing alignment for Phase 1 collapse) → 60-75% single-month loss in positions 11-50+ across all long-tail buckets → Phase 2 top-bucket consolidation and acceleration on established DevOps/CI-CD authority (+71.9% net) |
| **Mechanism Structure** | Multi-phase — Phase 1 (Aug–Dec 2025): Algorithm Update (Medium confidence); Phase 2 (Jan–Jun 2026): existing-page ranking breakthrough / Content Quality (Low-to-Medium confidence) |
| **Contributing Mechanisms** | See Phase 1 and Phase 2 breakdown in Mechanism Structure and Confidence Rationale |
| **Mechanism Confidence** | Medium (overall) |
| **Confidence Rationale** | Two distinct phases require separate mechanism assessments. Phase 1 (Aug–Dec 2025 long-tail collapse): Algorithm Update is the best-evidenced explanation at Medium confidence — the broad, multi-bucket, simultaneous keyword-count collapse (positions 11-20, 21-50, 51+ all falling 60-75% in the single Sep-Oct 2025 month) is consistent with a spam update targeting low-value, thin, or AI-generated content at scale, and the timing aligns closely with the August 2025 spam update (Aug 26–Sep 22, 2025). Phase 2 (Jan–Jun 2026 acceleration): Content Quality is the best-evidenced explanation at Low-to-Medium confidence — a ranking breakthrough on existing high-volume pages (the git delete branch tutorial: 319 → 14,342 traffic) with a substantial, pre-existing backlink base (1,779 referring domains, first seen 2022-07-31) that predates the study window by over three years. The mechanism for Phase 2 is a page-specific ranking change, not new content or new link acquisition. Overall Mechanism Confidence is Medium because: (1) Phase 1 has no direct Search Console confirmation that the September 2025 layoffs (a correlated-but-weaker competing explanation) can be fully ruled out; (2) Phase 2's smooth multi-month build is less typical of a pure algorithm-update effect and more consistent with a gradual on-page/topical ranking change, but the December 2025 core update is a plausible contributing factor. |
| **Strongest Competing Explanation** | Phase 1: September 2025 employee layoffs (with hiring shifting toward India) fall close in time to the keyword collapse. However, layoffs would plausibly suppress new content production going forward — not cause an immediate mass de-ranking of existing pages. The spam-update explanation is more parsimonious and better-timed. Phase 2: December 2025 core update (Dec 11–29) is a plausible contributing explanation to the Jan 2026 acceleration onset via reporting lag, but the smooth multi-month build rather than a sharp post-update jump makes a pure update-driven explanation less typical than an underlying content/ranking-change explanation. |
| **Disconfirming Evidence** | The September 2025 layoffs cannot be fully ruled out as a contributing factor to Phase 1 — the timing overlap is real even if the mechanism is weaker. The Phase 2 top-gainer page's backlink base (1,779 referring domains, first seen 2022) significantly predates the window, which is evidence against new link-building driving Phase 2, but does not rule out that the December 2025 core update specifically re-evaluated this page's authority and produced the ranking breakthrough. |
| **Algorithm Alignment** | Moderate (Phase 1, spam update) / Weak (Phase 2) |
| **AIO Portfolio Susceptibility** | High |
| **AIO Presence Observed** | Not tested |
| **AIO Observed Effect** | No conclusion |

*Algorithm Alignment note: CloudBees Phase 1 is the first case in this study rated Medium or higher for an algorithm update as a primary (not secondary) explanation — consistent with the standing prior [[research-decline-cohort-algo-aio-priors]] that algorithm updates bite harder where there is a genuine loss event to explain.*

*AIO field notes: AIO Portfolio Susceptibility = High — the top-gaining content (git command tutorials: "git delete branch," "git undo commit," etc.) is short, definitional, highly extractable how-to content — structurally the query type most likely to trigger AI Overviews. This is a susceptibility assessment of the portfolio, not a causal claim. AIO Presence Observed = Not tested — no direct AI Overview spot-check was performed for these specific queries. AIO Observed Effect = No conclusion — the fact that these pages gained substantial rankings during a period of expanding AI Overview coverage is suggestive of resistance, but is confounded by the page-specific ranking-breakthrough explanation and cannot be assessed without a direct spot-check. The prior "Low" rating was based on the availability of a stronger competing explanation — that is a mechanism rationale, not a susceptibility rating. Corrected to High susceptibility in V2.3.*

---

## Gross-Loss Offset Analysis

*Not computed under repository methodology. Recompute from a study-window-scoped Top Pages export before populating this section.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | Not computed — Top Pages export required | — |
| Gross Loss (absolute) | Not computed — Top Pages export required | — |
| Net Change | Not computed | — |
| Gross-Loss Offset Rate | Not computed | — |
| Offset Zone | N/A | — |
| Reconciliation check | N/A | — |

*Note: Top Pages reconciliation was performed and is strong: current-side sum (80,406) reconciles within 0.6% of the corrected Jun 2026 endpoint (80,857). Previous-side sum (40,509) is approximately 14% below the corrected Jan 2025 figure (47,036), consistent with the cross-export snapshot-date gap documented throughout this study. Both are immaterial to share-based findings. Reconciliation is documented here as evidence that the export covers approximately the right window; Gross Gain/Loss not computed.*

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | ~17.7% of Jun 2026 site traffic estimate (14,342 / 80,857) | Ahrefs Top Pages export |
| Top 5 Page Traffic Share | Not formally computed | — |
| Top 10 Page Traffic Share | Not formally computed | — |
| Dominant Content Type | Blog | Ahrefs Top Pages export |
| Winning Content Type | Blog — generic technical tutorials (git commands, Docker how-tos) | Ahrefs Top Pages export |
| Losing Content Type | Product and commercial pages (CI/CD, Jenkins-specific content) | Ahrefs Top Pages export |
| New-URL Gain Share | Not formally computed | — |
| Page Replacement Pattern | Partial replacement — gains in generic tutorials offset some losses in commercial pages | — |
| Notable patterns | Top gainer: `/blog/git-delete-branch-how-to-for-both-local-and-remote` (319 → 14,342 traffic, +14,023 net, ~35% of net Top Pages gain, 1,779 referring domains first seen 2022-07-31). Growth concentrated in brand-agnostic developer tutorials (git/Docker how-tos) rather than commercial or product-aligned content. Brand traffic fell −16.6% (6,757 → 5,637) while non-branded grew +106.8% (22,213 → 45,935). Key tension: several commercially important pages lost ground simultaneously — `/continuous-delivery/continuous-integration` (−1,730), `/blog/yaml-tutorial-everything-you-need-get-started` (11,297 → 6,205, −5,092 — largest individual loss on site), and multiple Jenkins-specific pages disappeared from current rankings entirely (`/jenkins/what-is-jenkins`, `/cloudbees-university/training-certifications/jenkins`, `/products/codeship`). | Ahrefs Top Pages + keyword exports |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | Volume recovery: Full — Phase 2 surpasses study-window starting level (47,036 → 80,857). Commercial-relevance recovery: No — gaining content is generic developer utilities disconnected from CI/CD product positioning. Historical recovery: Partial — study-window high (80,857) remains 40.7% below the April 2022 all-time peak. |
| **Recovery Mechanism** | Re-ranking breakthrough on existing pages (recovery archetype per Playbook Ch. 7): a single existing high-volume page re-ranked substantially on its primary query without new content production or detectable new referring-domain acquisition — the backlink base predates the study window by over three years. The breakthrough was a ranking change on a pre-existing authority-backed page, not a new asset. |
| **Recovery Confidence** | Medium |
| **Recovery Notes** | This is the primary case study for the "Re-ranking breakthrough on existing pages" recovery archetype in the Playbook. Critical qualification: the recovery content (git tutorials, Docker how-tos) is brand-agnostic and commercially peripheral. The traffic returned in Phase 2 is not the same kind of traffic lost in Phase 1 — CI/CD-category and Jenkins-specific pages that declined have not recovered, while generic developer utility pages gained. Volume recovered; commercial-relevance of the recovered footprint did not. See Client Applicability and Risk Flags for the qualified-lead implications. |

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

*Note: AI Observation Protocol parked project-wide. No spot-check performed. The top-gaining content type (git command how-tos) is a high-priority candidate for AI Overview spot-checking — if "git delete branch" queries are increasingly served by AI Overview, the Phase 2 recovery traffic is structurally at risk from the same mechanism that drove Phase 1's collapse.*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Mixed — gaining content (git/Docker tutorials, generic developer how-tos) is brand-agnostic with Low alignment to CI/CD platform evaluation; losing content (CI/CD product pages, Jenkins-specific content) had High alignment. The net footprint shift moves away from commercial relevance even as total traffic grows. |
| **Best-Fit Client Type** | B2B SaaS companies evaluating whether their traffic growth reflects qualified lead-generation potential; companies experiencing a two-phase traffic pattern with an interior collapse |
| **Best-Fit Problem** | "Our headline traffic is up — does that mean our content is working?" / "We recovered traffic — why doesn't pipeline reflect it?" / "What does it look like when a spam update hits a content portfolio?" |
| **Relevance Conditions** | Client has experienced a similar two-phase pattern (sharp decline followed by recovery); client has generic how-to content gaining traffic while commercial/product pages stagnate or decline; client needs an example of how algorithm update effects differ from content-quality effects |
| **Non-Comparable When** | Client is looking for a simple "content quality drove growth" story — CloudBees's growth is real but is concentrated in generic tutorials disconnected from commercial positioning; client's product category does not have a legacy of Jenkins/CI-specific content analogous to CloudBees's commercial pages |
| **Primary Lesson** | CloudBees's organic traffic grew +71.9% while brand traffic fell −16.6%, its commercial CI/CD and Jenkins-specific pages lost ground, and the gains came from generic developer tutorials (git commands, Docker how-tos) that any developer might search for regardless of which CI/CD platform they use. Traffic volume growth and lead-generation-relevant traffic growth are not the same measurement. |
| **Evidence Use** | Cautionary / Diagnostic / Recovery precedent (for the Re-ranking breakthrough archetype) |
| **Evidence Basis** | Based on Ahrefs Top Pages, keyword, and per-page backlinks exports covering January 2025 through June 2026. No domain-level referring domain data available. No first-party analytics available. Pass 2 column-shift error corrected prior to analysis. All traffic figures are Ahrefs third-party estimates. |

---

## Risk Flags

- **Pass 2 data correction:** A column-shift error in the original Pass 2 data entry was caught and corrected before this analysis. Any prior cross-company comparison or synthesis referencing the old CloudBees figures should be re-checked against the corrected values in this record.
- **Commercial page erosion:** While overall traffic grew +71.9%, several pages central to CloudBees's actual product positioning lost traffic or vanished from rankings: `/continuous-delivery/continuous-integration` (−1,730), the YAML tutorial (−5,092, site's largest individual loss), multiple Jenkins-specific pages. The headline growth masks real commercial footprint erosion.
- **Brand traffic decline:** Brand traffic fell −16.6% while non-branded grew +106.8%. For a product that sells to enterprises evaluating CI/CD platforms, declining brand search demand is a warning signal that the headline non-branded growth does not offset.
- **No referring domains data:** No domain-level Ahrefs export was collected for CloudBees. Authority trend cannot be tracked.
- **Phase 1 mechanism Low-confidence competing explanations:** September 2025 layoffs (employee-reported, no precise date) cannot be fully ruled out as a contributing factor to the Phase 1 collapse, even though the spam-update explanation is rated more parsimonious.
- **Recovery content quality mismatch:** The Phase 2 recovery content (git tutorials, Docker how-tos) is brand-agnostic. The traffic that recovered is not the same kind of traffic that was lost (CI/CD-category and Jenkins-specific). Volume recovered; commercial relevance of the recovered traffic is lower.
- **No AI spot-check on recovery content:** The top-gaining content (git command tutorials) is structurally AI-Overview-exposed. Phase 2 recovery traffic may face the same risk that precipitated Phase 1 if AI Overview expansion reaches this query category.
- **Historical peak gap:** Study-window high (80,857) remains 40.7% below the April 2022 all-time high (136,304). Recovery is relative to the study window, not to the company's peak performance period.

---

## Related Documents

- Comparison briefs: `comparison-briefs/github-circleci-harness-cloudbees.md`
- Synthesis documents: —
- Studies: —
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (lines 1770–1904); original 118-company report cohort, Developer Tools category

---

## Calculation Log

*All values carried from original analysis using corrected Pass 2 data.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Performance export (corrected) | Starting traffic Jan 2025 (47,036), Ending traffic Jun 2026 (80,857) | All estimated organic traffic | (80,857 − 47,036) / 47,036 | +71.9% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 top-level figures (corrected) | Starting TV ($30,983), Ending TV ($51,252) | All traffic | ($51,252 − $30,983) / $30,983 | +65.4% | Carried |
| Historical Peak Distance | Derived | Historical peak 136,304 (Apr 2022); Jun 2026 endpoint 80,857 | — | (80,857 − 136,304) / 136,304 | −40.7% | Carried |
| Lift from Trough % | Derived | Trough 38,615 (Dec 2025); Endpoint 80,857 (Jun 2026) | Study window | (80,857 − 38,615) / 38,615 | +109.4% | Carried |
| Top gainer traffic share | Derived | Top gainer current traffic 14,342; Site endpoint 80,857 | — | 14,342 / 80,857 | ~17.7% | Carried |
| Brand traffic change | Ahrefs keyword export | Brand starting (6,757), ending (5,637) | Branded keyword rows | (5,637 − 6,757) / 6,757 | −16.6% | Carried |
| Non-branded traffic change | Ahrefs keyword export | Non-branded starting (22,213), ending (45,935) | Non-branded keyword rows | (45,935 − 22,213) / 22,213 | +106.8% | Carried |
| Top Pages current-side reconciliation | Ahrefs Top Pages export (corrected) | SUM(current sampled traffic) vs. endpoint | All pages | 80,406 / 80,857 | 99.4% (within 0.6%) | Carried |
| Top Pages previous-side reconciliation | Ahrefs Top Pages export (corrected) | SUM(previous sampled traffic) vs. start | All pages | 40,509 / 47,036 | 86.1% (~14% below; snapshot date gap) | Carried |
| Gross Gain | — | — | Top Pages export required | SUM(positive changes) | Not computed | N/A |
| Gross Loss | — | — | Top Pages export required | ABS(SUM(negative changes)) | Not computed | N/A |
| Gross-Loss Offset Rate | — | — | — | Gross Loss ÷ Gross Gain | Not computed | N/A |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Performance export (corrected) | Monthly traffic and traffic value series | CSV | Jan 2025 – Jun 2026 | Authoritative source for corrected endpoint figures (80,857); source of monthly interior shape (Phase 1 collapse and Phase 2 acceleration). |
| Ahrefs Top Pages export | Top ranking pages with previous and current traffic | CSV | ~Jan 2025 (previous) – Jun 2026 (current) | Previous-side sum 14% below corrected start (snapshot date gap). Current-side within 0.6% of endpoint. |
| Ahrefs keyword export (per-page backlinks variant) | Per-page backlinks data for top-gainer confirmation | CSV | As of Jun 2026 | Source of top-gainer page backlink profile: 1,779 referring domains, first seen 2022-07-31, 6,182 total links. |
| Ahrefs organic keywords export | Position-band keyword counts at two time points | CSV | Jul vs. Nov 2025 (interior dip period) | Source of Phase 1 position-bucket collapse data (positions 11-20: 10,303 → 3,351; 21-50: 16,485 → 3,699; 51+: 5,463 → 1,448). |
| WebSearch (multiple queries) | External context: leadership, layoffs, hiring | Web | Jun 2026 | Source of Sacha Labourey step-back (Feb 2025) and September 2025 layoffs (employee reports, no official announcement). |

---

## Narrative

### Company Overview

CloudBees is a B2B SaaS CI/CD and DevOps platform with Jenkins-based roots. The company has been publicly associated with the Jenkins open-source project since its founding; Jenkins-specific pages (training, certifications, product documentation) represent a portion of its historical organic footprint. The study window opens with CloudBees already 65.5% below its April 2022 all-time traffic peak — a decline that preceded the window and was not investigated in this analysis.

Two off-content events fall inside the study window: co-founder and long-time CEO Sacha Labourey stepped back from day-to-day CEO duties in February 2025 (remaining as an advisor and board member), and employee-reported layoffs occurred in September 2025 with hiring afterward shifting toward India-based roles. The September 2025 layoffs are close in time to the Phase 1 keyword collapse and are recorded throughout this record as a correlated-but-not-primary-explanatory event.

CloudBees's content model is editorial-blog-led by Dominant Content Model classification, but the gaining content in this window is generically editorial rather than commercially-aligned — developer how-to tutorials (git commands, Docker operations, regression testing) that any developer might search for regardless of CI/CD platform evaluation.

### Traffic Trajectory

CloudBees's organic estimated traffic grew from 47,036 (January 2025) to 80,857 (June 2026), a +71.9% increase. This headline requires immediate decomposition into two distinct phases:

**Phase 1 (long-tail collapse, approximately August–December 2025):** Starting from a local high of 56,024 in August 2025, CloudBees experienced a severe, broad keyword collapse. In the single September–October 2025 month transition, positions 11-20 fell from 10,303 to 3,351 (−67%), positions 21-50 from 16,485 to 3,699 (−78%), and positions 51+ from 5,463 to 1,448 (−73%). Traffic fell to the study-window trough of 38,615 in December 2025 — but this overall traffic decline understates the magnitude of the underlying keyword-footprint loss, because most of the lost positions were already low-traffic long-tail rankings.

**Phase 2 (top-bucket consolidation and acceleration, January–June 2026):** Starting from the December 2025 trough, top-position buckets began climbing steadily: positions 1-3 rose from 2,961 to 6,078 (+105%); positions 4-10 rose from 8,884 to 17,434 (+96%). Overall traffic followed the same smooth, multi-month climb from 38,615 (December 2025) to 80,857 (June 2026) — new study-window high, still 40.7% below the April 2022 all-time peak.

Lift from trough to endpoint: +109.4%.

### Mechanism Analysis

The two-phase shape requires two mechanism assessments.

**Phase 1 (long-tail collapse): Algorithm Update — Medium confidence.** The most parsimonious explanation for a simultaneous, broad, multi-bucket keyword collapse (positions 11-20, 21-50, and 51+ all falling 60-75% in one month) is a spam update operating at scale — the kind of de-ranking that targets low-value, thin, or AI-generated content across a large URL population simultaneously. The August 2025 spam update (August 26–September 22, 2025) aligns closely with the September–October 2025 collapse in timing. The September 2025 layoffs, while temporally correlated, are a weaker and less-parsimonious explanation for an immediate mass de-ranking of *existing* pages; layoffs would plausibly suppress new content production going forward, not retroactively collapse current rankings.

This is the first case in this study where an algorithm update is rated Medium or higher as a primary (not secondary) explanation for part of a company's traffic story.

**Phase 2 (acceleration): Content Quality — Low-to-Medium confidence.** The acceleration is driven primarily by a ranking breakthrough on existing high-volume tutorial pages — led by `/blog/git-delete-branch-how-to-for-both-local-and-remote` (319 → 14,342 traffic, +14,023 net gain, ~35% of net Top Pages gain). This page had 1,779 referring domains first seen July 31, 2022 — a substantial, pre-existing authority base. No detectable new referring-domain acquisition is associated with the breakthrough; the backlink base predates the study window by over three years. The page already existed; no new content production preceded the ranking change. This is the same no-new-backlinks, ranking-breakthrough-on-an-existing-page mechanism found independently at Akita — two corroborating cases now constitute an Emerging pattern.

The December 2025 core update (December 11–29) is a plausible contributing explanation for Phase 2 via reporting lag, but the smooth multi-month build (rather than a sharp post-update jump) is less typical of a discrete update effect and more consistent with an underlying content/ranking change playing out gradually.

### Page & Content Analysis

The most important observation about CloudBees's page-level data is the tension between the gaining and losing content:

**Gaining:** `/blog/git-delete-branch-how-to-for-both-local-and-remote` (+14,023), `/blog/git-undo-commit` (+2,960), `/blog/5-code-editors-for-web-application-and-api-development` (+2,801), `/blog/docker-build-without-cache` (+1,611), `/blog/seven-types-of-regression-testing` (+1,381), several more git-tutorial pages. These are generic, brand-agnostic developer how-to tutorials. A developer landing on any of these pages is doing ordinary command-line work — not evaluating a CI/CD platform.

**Losing:** `/continuous-delivery/continuous-integration` (−1,730 — a core CI/CD product page), `/blog/yaml-tutorial-everything-you-need-get-started` (−5,092 — the site's largest individual loss, a page more directly relevant to CI/CD workflows), and multiple Jenkins-specific pages that disappeared from current rankings entirely: `/jenkins/what-is-jenkins` (−321), `/cloudbees-university/training-certifications/jenkins` (−519), `/products/codeship` (−340).

Brand traffic fell −16.6% over the same window that non-branded grew +106.8%. The net traffic growth is real; it is concentrated in content that is unlikely to generate CI/CD platform evaluation demand.

This case is the clearest illustration in the Dev Tools category of why "traffic volume growth" and "commercially-relevant traffic growth" are different measurements.

### Recovery

CloudBees's Phase 2 recovery follows the "Re-ranking breakthrough on existing pages" archetype: a single existing page with multi-year-old authority re-ranked substantially on a high-volume query without new content production or new backlink acquisition. The structural floor that enabled this recovery was surviving domain authority and existing high-volume pages that had accumulated ranking equity without fully expressing it.

The recovery is a volume recovery, not a commercial-quality recovery. The pages whose traffic returned in Phase 2 are git and Docker tutorials; the pages that lost ground during Phase 1 (and have not recovered) include CI/CD core pages and Jenkins-specific product pages.

### Client Applicability

CloudBees is an important cautionary case with three distinct applications:

**For traffic-growth attribution:** CloudBees's +71.9% headline traffic growth coexists with −16.6% brand traffic decline, disappearing Jenkins-specific rankings, and core CI/CD page erosion. The headline growth number is real and not fabricated — but it is measuring something different from what a CI/CD company would want to measure if the goal is lead generation. A client in a similar position should check whether the pages gaining traffic are topically connected to their product's evaluation journey, not just whether the total traffic number is up.

**For spam-update diagnosis:** The Phase 1 collapse (60-75% single-month loss across three position buckets simultaneously) is the model signature of a spam update operating at scale — distinguishable from competitive displacement (which is slower) and from Phase 2 consolidation patterns (which are top-bucket-specific, not broad-based). Any future client showing a similar simultaneous broad-bucket collapse should be checked for spam-update timing alignment.

**For recovery precedent:** The Phase 2 no-new-backlinks, ranking-breakthrough-on-an-existing-page mechanism is replicable diagnostic logic: if a client has high-volume pages with substantial pre-existing authority that are underperforming their ranking potential, a content/on-page optimization effort (not a new link-building program) may be the relevant intervention.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off.*

**Calculation Log**
- [ ] Calculation Log populated before Outcome Summary and narrative were written
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All key metrics are Carried; Gross Gain/Loss not computed
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (80,857 − 47,036) / 47,036 = +71.9% ✓
- [ ] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain
  - ⚠ Not computed — Top Pages export required

**Data correction**
- ✓ Pass 2 column-shift error caught and corrected before analysis; all figures in this record use corrected values
- ⚠ Prior cross-company comparisons referencing old CloudBees Pass 2 numbers should be re-checked

**Client Applicability**
- [ ] Primary Lesson states observable pattern, not settled causal claim
  - ✓ Describes observable data (traffic up, brand down, commercial pages declining) without overstating causal certainty
- [ ] External Use Status reflects actual readiness
  - ✓ Internal only

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** Migration to V2.2 repository format
- **Sections updated:** All (initial migration from phase3-deep-dives.md lines 1770–1904)
- **Summary:** All metrics carried from original 2026-06-29 analysis using corrected Pass 2 values (column-shift error corrected prior to analysis per documentation in pre-write-up note). Two-phase mechanism documented separately (Phase 1: Algorithm Update Medium; Phase 2: Content Quality Low-to-Medium). Referring Domains data flagged as unavailable. Commercial page erosion documented in Page & Content Analysis and Risk Flags. Pass 2 correction note added prominently in header comment and Outcome Summary.

**2026-07-28 (V2.3.1 mechanism correction)**
- **Reason:** Primary Mechanism field contradicted multi-phase narrative; corrected to remove the contradiction
- **Sections updated:** Mechanism (Primary Mechanism, Mechanism Structure, Contributing Mechanisms)
- **Summary:** Primary Mechanism changed from "Content Quality" to "Mixed (Phase-dependent)" — the previous value implicitly awarded the Phase 2 mechanism as the winner and contradicted the Confidence Rationale, which explicitly states two distinct phases require separate assessments. New Mechanism Structure field added to make the Phase 1 / Phase 2 breakdown visible at the table level without requiring a reader to parse the Confidence Rationale text. Contributing Mechanisms field updated to point to the phase breakdown rather than listing "Algorithm Update" alone (which was correct for Phase 1 but incomplete and potentially misleading for the full record).

**2026-07-28 (V2.3 schema update)**
- **Reason:** Methodology update (V2.3 — AIO field split, Commercial Alignment field, language corrections)
- **Sections updated:** Header (Methodology Version), Mechanism (AIO fields), Recovery (status structured to distinguish volume/commercial/historical recovery), Client Applicability (Commercial Alignment added), Narrative (Phase 2 "no new backlinks" language), Historical Amendments
- **Summary:** AIO Exposure "Low" corrected to 3-field split (Susceptibility: High, Presence: Not tested, Effect: No conclusion). The prior "Low" rating based on the presence of stronger competing explanations was a mechanism rationale, not a susceptibility rating — the gaining content (git command how-tos) is structurally High susceptibility regardless of mechanism. Recovery Status structured to distinguish volume recovery (Full), commercial-relevance recovery (No), and historical recovery (Partial). Commercial Alignment: Mixed added. "No new backlinks" language tightened to "no detectable new referring-domain acquisition."

---

*Record finalized: 2026-07-28 | Last verified: —*
