# Evidence Register

*The accumulation layer of the research operating system. Each entry documents a finding that has crossed the threshold from observation (company record) to evidence (reproducible, methodologically grounded, explicitly linked to the Durable Demand Framework).*

*For classification definitions — Evidence Strength, Strategic Importance — see the Research Charter (`RESEARCH-CHARTER.md`).*

---

## How to Add an Entry

1. Assign the next sequential Evidence ID (E-001, E-002, etc.)
2. Write the Observation as a factual, scoped statement — observable, not interpretive. Scope to the specific company and pages at Emerging stage; broaden only as replication accumulates.
3. Rate Evidence Strength and Strategic Importance independently
4. Link to the specific Durable Demand Framework principle this evidence touches
5. Document the source company record(s) and the specific analysis that produced the finding
6. List any known challenging cases or boundary conditions at the time of creation
7. Add the Evidence ID to the contributing company record's Research Contribution & Implications section
8. Note open questions the finding creates

**Promotion rule:** To advance from Emerging → Replicating, add 2–4 additional companies with methodologically comparable analyses and no unresolved contradictory evidence. To advance from Replicating → Established, add 3+ more companies; the pattern must hold across different site architectures, content models, and categories, and boundary conditions must be documented. Note: "same mechanism classification" is not required — some evidence spans multiple mechanism types. What is required is methodologically comparable observation under relevant conditions.

**On disconfirming evidence:** A challenging case must be recorded in the Challenging Cases field as soon as it is identified — even before the finding's strength is reconsidered. The register is not an affirmation system. Disconfirming evidence is a priority finding.

---

## Entry Format

Each entry uses the following structure:

```
### E-XXX — [Title scoped to what was actually observed]

| Field | Value |
| Evidence Strength | Emerging / Replicating / Established |
| Strategic Importance | Supporting / Important / Foundational |
| Framework Principle | [DDF area] |
| Companies | [list] |
| Status | Active / Challenged / Superseded |
| Added | YYYY-MM-DD |
| Last Updated | YYYY-MM-DD |

**Observation:** [Factual, scoped statement of what was observed.]

**Evidence source:** [Record, analysis pass, specific data.]

**Framework linkage:** [Which DDF principle this touches, and how.]

**Supporting cases:** [Companies or pages where this finding replicates or is consistent.]

**Challenging cases:** [Companies or pages where the finding did not hold, was contradicted, or was ambiguous. "None identified yet" is acceptable but should be updated actively.]

**Known boundary conditions:** [Scope limits — what types of sites, mechanisms, or situations this finding may not apply to.]

**Open questions:** [What the finding doesn't answer; what would change the assessment.]

**Requires replication in:** [Specific companies or record types that would most usefully test this.]
```

---

## Active Evidence

---

### E-001 — Methodological commercial pages contributed to Gong's recovery without material visible content changes

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | Methodology Content Resilience |
| **Companies** | Gong |
| **Status** | Active |
| **Added** | 2026-08-04 |
| **Last Updated** | 2026-08-04 |

**Observation:** During the Gong recovery window (Nov 2025 → Jun 2026), methodological commercial pages — content whose primary value is teaching execution in a domain where Gong operates commercially — were disproportionately represented in the recovery cohort. Pass 3 Wayback comparison of the Sales Performance page (a top recovery contributor) confirmed no material visible content changes between the Aug 2025 snapshot and the current version despite the page acquiring 19/25 new keyword rankings during the recovery window at an average starting rank of 49.8 positions from near-zero.

*Note: "Frequently recover" is the hypothesis being tested through replication — not a conclusion from this single case.*

**Evidence source:** Gong.md; Pass 2A (recovery-window keywords export, Oct/Nov 2025 → Feb/Jun 2026); Pass 3 Wayback comparison (Sales Performance page, Aug 2025 vs. current).

**Framework linkage:** Creates a candidate principle under Methodology Content Resilience: that methodological commercial pages may demonstrate structural durability during algorithmic reassessment events. Does not yet establish whether resilience is archetype-specific (Methodological) or quality-specific (depth + commercial relevance together). Both remain live hypotheses.

**Supporting cases:** None beyond Gong at Emerging stage.

**Challenging cases:** None identified yet. Cognism (glossary/definitional content model) declined over a comparable period — if Methodological pages were also present in Cognism's cohort and also declined, that would be a meaningful challenge. Requires investigation.

**Known boundary conditions:** Observation is currently limited to one company, one recovery window, and a small set of audited pages within that window. The finding applies specifically to a domain-authority company (Gong) with strong brand signals; whether the pattern holds for lower-authority sites is unknown.

**Open questions:**
- Is resilience archetype-specific (Methodological) or quality/depth-specific?
- Does commercial alignment intensify the effect — do pages with stronger product adjacency survive at higher rates than generic methodology content?
- What is the failure mode? Are there Methodological pages within Gong's own cohort that declined?

**Requires replication in:** Braze, any company with documented Methodological content in both the recovery and decline cohorts. *Apollo.io — tested via PDA (2026-08-11); not applicable. The AR-affected programmatic content did not recover, so there is no content recovery cohort to audit for E-001's hypothesis. Apollo's company-level recovery happened through brand demand and new product pages — a different mechanism that does not test whether methodological commercial pages survived an AR event without content changes.*

---

### E-002 — A material visible content rewrite was not required for ranking recovery across two Wayback-confirmed cases

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging (two companies now — Gong and Salesloft; mechanism contexts differ and positive driver unresolved in Salesloft case; promotion to Replicating flagged for Quinn's judgment) |
| **Strategic Importance** | Foundational |
| **Framework Principle** | Recovery Principles — Content Investment vs. External Signal Primacy |
| **Companies** | Gong, Salesloft |
| **Status** | Active |
| **Added** | 2026-08-04 |
| **Last Updated** | 2026-08-07 |

**Observation:** The Sales Performance page at Gong recovered 19/25 new keyword rankings during the recovery window (Nov 2025 → Jun 2026) with the same visible body content present in the Aug 2025 Wayback snapshot. Body text character difference between versions was +94 characters. All 29 sections present in the Wayback snapshot were present in the current version. Page count difference (21 vs. 25 pages) was attributable to a template/layout rendering change, not content addition.

**Scope of what was established:** Pass 3 eliminated a material visible content rewrite as the primary driver of this page's recovery. It did not rule out internal link changes, schema or metadata changes, canonical or rendering changes, page-level backlink acquisition, competitor SERP losses, or other technical signals not observable in a Wayback archive comparison. Algorithmic reevaluation is a candidate explanation for this page's recovery — not a proven one.

**What was not established:** The March 4, 2026 "Last modified" timestamp was observed in the current version's metadata. It was consistent with a template or metadata change rather than editorial revision, but the exact nature of the modification is not known.

**Evidence source:** Gong.md; Pass 3 Wayback comparison (Sales Performance page, Aug 2025 vs. current); pdfplumber text extraction; section-level word count analysis.

**Framework linkage:** Creates a Recovery Principles candidate: content rewrites may not be the primary binding constraint for recovery in Algorithmic Reassessment events. If replicated, this would challenge a common default recommendation ("rewrite underperforming pages") and suggest that external signal diagnosis should precede content intervention decisions.

**Supporting cases:**
- **Gong** (Emerging): Sales Performance page recovered 19/25 new keyword rankings in the Algorithmic Reassessment recovery window without material visible content changes. Body text character difference: +94 characters.
- **Salesloft** (Emerging, 2026-08-07): /learn/lead-management moved from position #12 to #3 on "lead management software" (6,400 US volume) during Phase 3 recovery (May → Aug 2026). Three Wayback snapshots (Jan 2025, Nov 2025, Aug 2026) confirm page content unchanged throughout the recovery period. Mechanism context differs from Gong (Mixed/candidate structural consolidation, not Algorithmic Reassessment). Because the positive recovery mechanism for this page remains unresolved, this strengthens replication of the observed phenomenon — a page can recover from page 2 to a top-3 position without content changes — but does not yet establish cross-mechanism generalizability.

**Challenging cases:** None identified yet. A recovery case where a visible rewrite demonstrably preceded recovery — especially a Methodological page — would be a meaningful boundary condition.

**Known boundary conditions:** Gong finding applies to one page in one Algorithmic Reassessment recovery window. Salesloft finding applies to one page in a Mixed (candidate structural consolidation) recovery context. Both rely on Wayback comparison, which captures visible HTML but not structured data, internal links, canonical tags, rendering, or JavaScript-executed content. "No material visible content changes" is not the same as "no changes."

**Open questions:**
- What external signals changed that caused Google to re-evaluate these pages?
- Is this pattern archetype-specific (Methodological pages re-evaluated on authority signals) or general across archetype types?
- Does the finding hold across mechanism types (two cases exist, but the positive mechanism for the Salesloft recovery is unresolved — cross-mechanism generalizability not yet established)?
- Would a page that received a substantive rewrite during the same window have recovered faster, more broadly, or equally?

**Requires replication in:** Any company with Methodological or Commercial Evaluation pages with documented Wayback evidence for the recovery period. *Apollo.io — tested via PDA (2026-08-11); not applicable. Apollo's "recovery" is brand demand growth and new product pages, not recovery of AR-affected content. There are no Apollo pages where E-002's question — "did a page recover without visible content changes?" — can be asked, because the affected content (programmatic database pages) never recovered at all. Apollo does not challenge or support E-002; it is outside the relevant population.*

---

### E-003 — Gong homepage traffic growth during recovery was concentrated in branded head queries with stable rankings

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Important |
| **Framework Principle** | Brand Demand — Homepage as Authority Aggregate |
| **Companies** | Gong |
| **Status** | Active |
| **Added** | 2026-08-04 |
| **Last Updated** | 2026-08-04 |

**Observation:** In the Gong recovery-window analysis (Nov 2025 → Jun 2026), the homepage (`https://www.gong.io/`) was the single largest contributor to gross traffic gain, accounting for +9,290 traffic units (49.4% of adjusted gross gain after trailing-slash normalization). Recovery-window keyword analysis indicated that homepage traffic growth was concentrated in the branded head query "gong" while rankings for that query remained stable — suggesting increased branded search demand rather than ranking improvement drove the homepage gain.

**Confidence calibration:** Ahrefs traffic is estimated, not measured. The branded demand interpretation (stable ranking + higher traffic = increased search volume) is the most parsimonious explanation, but Ahrefs traffic estimation methodology introduces uncertainty. Confidence: Medium.

**Evidence source:** Gong.md; Pass 1 (recovery-window Top Pages comparison, trailing-slash normalization applied); Pass 2A (recovery-window keywords export).

**Framework linkage:** Strengthens the Brand Demand segment of the Durable Demand Framework: brand-navigational traffic operates under different signals than content-organic traffic. A company's headline recovery number may be dominated by brand demand growth that moves independently of content quality or organic footprint health. Gong's recovery is Partial precisely because of this divergence: headline traffic fully recovered, organic content footprint did not.

**Methodological note:** Homepage gains in Ahrefs Top Pages exports are distorted by the trailing-slash normalization artifact (trailing-slash version appears as a loser; non-trailing-slash version appears as a gainer). Future analyses must apply normalization before attributing homepage gains or losses.

**Supporting cases:** None beyond Gong at Emerging stage.

**Challenging cases:** None identified yet. A company where homepage recovery was clearly driven by ranking improvements rather than demand growth would define the boundary of this finding.

**Known boundary conditions:** Gong has strong brand recognition and branded search volume. The brand demand mechanism may be more prominent at high-brand-equity companies than at companies with low branded search share. Lower-authority or lower-brand-awareness companies may not show this pattern.

**Open questions:**
- Was brand demand growth driven by increased awareness (product launches, PR, word of mouth) or by algorithmic consolidation of branded navigational queries?
- Does algorithmic reassessment also affect branded/navigational rankings, or do those move only with actual demand?
- Is homepage-dominated recovery a consistent pattern in Algorithmic Reassessment companies, or is it specific to high-brand-equity sites?

**Requires replication in:** Any Algorithmic Reassessment company where homepage is a significant traffic source; specifically companies with lower brand equity to test the boundary condition

---

---

### E-004 — Structured educational content at a high-DR domain held organic position and gained AIO citation simultaneously on a core keyword

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Important |
| **Framework Principle** | AIO Behavior — Favorable citation vs. displacement |
| **Companies** | LaunchDarkly |
| **Status** | Active |
| **Added** | 2026-08-06 |
| **Last Updated** | 2026-08-10 |

**Observation:** On "deployment strategies" (US, Aug 2026), LaunchDarkly's /blog/deployment-strategies/ page held organic position 4 while simultaneously being cited as a primary source in the AI Overview. The Aug 2026 AIO-filtered keyword export confirms: 28,018 traffic from AIO citation positions on this page, against ~31,071 total page traffic from the Ahrefs UI — **90.5% AIO citation share**. The page is cited at position 1 across multiple countries (US 7,492, Indonesia 4,216, Argentina 3,201, UK 2,331, Korea 2,019). Ahrefs Content Changes column shows: **Overhaul**. Prior analysis noted the main visible change was a KEY TAKEAWAYS summary box; the Overhaul classification suggests the update was more substantive than that single element. Domain-level authority (DR 80) substantially exceeds page-level authority (UR 4, 10 referring domains).

**Evidence source:** launchdarkly.md; SERP overview export (deployment strategies, US, 2026-08-06); page-level keyword comparison; Wayback Machine content comparison (Nov 2025 snapshot vs. live page).

**Framework linkage:** Creates a candidate finding about the favorable AIO outcome: structured educational content ("6 types of X" format with discrete sections) on a high-authority domain may be extracted by AI Overviews as a cited source rather than displaced by them. If replicated, this would be a meaningful input to AEO/GEO recommendations — "write to be cited, not to survive citation."

**Supporting cases:**
- **CircleCI** (Emerging, 2026-08-10): On the same "deployment strategies" query cluster, CircleCI's /blog/deployment-strategies-types-trade-offs-and-how-to-choose/ holds organic position #3 but AIO citation position #1. 96.3% of 70,148 traffic to this page comes from AIO citation positions. The page was comprehensively rewritten (March 2026, Ahrefs: Overhaul) and covers 9 strategies vs. LaunchDarkly's 6. *Note: Both pages are cited in the same AI Overview box — this is depth on one SERP, not independent replication across different queries. For true independent replication, we need a different query cluster.*

**Challenging cases:** None identified yet. A structured educational page on a comparably high-DR domain where AIO citation transitioned to displacement would be a meaningful boundary condition.

**Known boundary conditions:** Both data points are on the same query ("deployment strategies") in the same SERP, and both are developer tools companies. This is not independent replication — it establishes that two high-DR competitors can be co-cited in a single AIO box, not that the pattern generalizes across queries or verticals. Domain authority (DR 80+) may be a prerequisite.

**Open questions:**
- Does AIO citation persist over time, or transition to displacement as AI Overviews mature on well-covered topics?
- Is the KEY TAKEAWAYS summary box a contributing factor in citation? (Structured, extractable summary = easy AI source material)
- Does this pattern hold across the related keyword cluster (canary deployment, blue/green deployment, etc.)?
- At what DR threshold does AIO citation become likely for structured educational content?
- Is comprehensiveness (number of sub-topics covered) or structure (decision frameworks, consistent section format) the stronger citation driver?

**Requires replication in:** Any developer tools or SaaS company with structured "6 types of X" educational content at position 3–6 on an AIO-bearing keyword, tested at multiple time points — specifically on a query *other than* "deployment strategies" to establish cross-query generalizability.

---

### E-005 — Image Pack SERP feature acquired on a page without any change to the visual asset; the image had been present for 2+ years

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Important |
| **Framework Principle** | SERP Feature Dynamics — passive SERP feature acquisition |
| **Companies** | Salesloft |
| **Status** | Active |
| **Added** | 2026-08-07 |
| **Last Updated** | 2026-08-07 |

**Observation:** /resources/blog/sales-pipeline-funnel at Salesloft acquired Image Pack appearances for "sales funnel" and related queries (estimated traffic gain ~+1,100), driven by a comparison diagram that has been present on the page since at least December 2023 (original page published September 2022). Three Wayback snapshots — December 2023, October 2025, and August 2026 — confirm the diagram is identical across all three. No new or updated image was added in the lead-up to or following the Image Pack acquisition. Google newly featured an existing, years-old image without any company action.

**Evidence source:** salesloft.md; page-level Organic Positions export (/resources/blog/sales-pipeline-funnel, Dec 2025 → Aug 2026); Wayback Machine content comparison (three snapshots, Dec 2023 / Oct 2025 / Aug 2026); PDF extraction conducted 2026-08-07.

**Framework linkage:** Creates a candidate finding about passive SERP feature acquisition: Google can begin featuring an existing visual asset in Image Pack results without any change to the asset, the page, or observable external signals. For pages with established visual content (comparison tables, diagrams, frameworks), Image Pack acquisition may be possible without investment — suggesting periodic SERP feature audits of existing visual assets as a low-cost discoverability opportunity.

**Supporting cases:** None at Emerging stage.

**Challenging cases:** None identified yet. A case where an Image Pack was acquired immediately following a new or updated visual asset upload would provide useful contrast (company action preceded feature acquisition).

**Known boundary conditions:** Single page, single SERP feature type, single company. Observation is a snapshot — what triggered Google to newly feature the existing image at that specific moment is not known. Whether the diagram's format, specificity, or visual clarity were factors cannot be assessed without comparative data.

**Open questions:**
- Are there observable characteristics of visual assets (format, specificity, diagram type) that predict Image Pack candidacy?
- Is the Image Pack citation stable, or does it rotate among candidates?
- Does image age (vs. recency) help or hurt Image Pack acquisition?
- Would a newly updated or redrawn version of the same diagram have been featured sooner or more prominently?

**Requires replication in:** Any company with long-standing comparison diagrams or visual frameworks that have recently acquired Image Pack traffic without a corresponding image update.

---

### E-006 — In the tested subset, a net-positive AIO outcome correlates with growth; a net-negative AIO outcome correlates with decline

*Rewritten 2026-08-11 to reflect current 24-company cohort, Mixed classification schema, and portfolio-scale AIO export data. Prior amendments integrated below.*

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | AIO Behavior — AIO outcome distribution vs. organic trajectory |
| **Companies** | LaunchDarkly, Gong (Resistant); Harness, Hyperproof, CircleCI, Vanta (Mixed, net strongly positive); Aha!, Gladly (Intercepted); Apollo, Cognism (No conclusion) |
| **Last Updated** | 2026-08-12 (Harness moved from Resistant → Mixed per AIO keyword export 2026-08-12; Harness figure updated to +52.9%; export-analyzed count updated to 9) |
| **Status** | Active |
| **Added** | 2026-08-07 |

**Observation:** In the 9 companies where AIO Observed Effect has been tested at portfolio scale (Ahrefs AIO-filtered keyword exports), the direction of AIO outcome correlates with organic trajectory: all companies with a net-positive AIO relationship grew; both companies confirmed Intercepted declined. No declining company in the tested subset has a confirmed net-positive AIO relationship.

The pattern holds across different AIO outcome types within the net-positive bucket: pure Resistant (traffic held despite AIO presence), AIO Cited (domain earns citation driving incremental traffic), and Mixed with citation dominance (both citation and interception present; citation exceeds interception in aggregate). The mechanism for the positive outcome varies by company; the directional correlation between positive AIO relationship and growth does not.

**Critical caveat:** 9 of 24 companies have been tested with AIO-filtered keyword exports; of those, 7 have established directional classifications (Resistant or Mixed) and 2 returned No conclusion (Apollo, Cognism). The remaining 15 are not yet analyzed. The pattern rests on a small, likely non-representative tested subset — specifically the companies where AIO exports were prioritized because we expected interesting signals. This is a meaningful testing artifact risk. The pattern should not be treated as general until tested companies include a broader range of trajectory types.

**Evidence source:** Cross-index analysis of AIO Observed Effect and Outcome (synthesis-2026-08-07.md, updated 2026-08-11); AIO-filtered keyword exports for LaunchDarkly (2026-08-10), Aha! (2026-08-10), CircleCI (2026-08-10), Cognism (2026-08-10), Gong (2026-08-10), Hyperproof (2026-08-11), Vanta (2026-08-11), Harness (2026-08-12).

**Framework linkage:** AIO outcome is not a fixed property of a domain or content model — it is a query/page-level distribution. What the portfolio-scale AIO exports reveal is that at the domain level, the aggregate direction (net citation vs. net interception) correlates with whether the company's content earns or loses to AI Overviews. Portfolio composition determines which direction predominates. Companies with content that earns citation status — regardless of whether the mechanism is editorial depth (LaunchDarkly, CircleCI), GRC regulatory specificity (Hyperproof), or brand navigation (Gong) — show a positive AIO relationship and grew. Companies where AIO displaces without citing (Aha! commodity content, Gladly) declined.

**Supporting cases with AIO-filtered export data:**

- **Harness** (AIO export 2026-08-12, reclassified Mixed): 5,510-keyword AIO-filtered export (Aug 2024 → Aug 2026). 2,451 AIO citation keywords (30,071 current traffic); 88.6% non-branded — driven by DevOps educational content ("what is a devops pipeline," "cicd pipeline," and dozens of variants). 170 SPC+AIO keywords (−1,384 traffic). Net AIO direction: strongly positive (~22:1). US-only: 1,194 cited keywords, 14,955 traffic; 93 SPC+AIO (−713). Classification: Mixed (net strongly positive) — same pattern as Vanta, Hyperproof, CircleCI. Grew (Continuous Acceleration, +52.9%).
- **Vanta** (Mixed, net strongly positive — AIO export 2026-08-11): Medium AIO Susceptibility, Continuous Acceleration growth. 1,806 AIO citation keywords (+34,234 traffic, 27% of 29,034-keyword export); 202 SPC+AIO keywords (−2,132 traffic). Net AIO: +25,473. Citation concentrated on /collection/ framework content; interception concentrated on /glossary/ thin pages. Both citation and interception confirmed simultaneously on the same domain — same schema as Hyperproof and CircleCI. Within-portfolio, same topic, same regulatory content: /collection/ format earns citation; /glossary/ format experiences interception. Gross-loss offset rate 8.5% — repository low. The most controlled within-domain test of citation vs. interception in the cohort. [Corrected from Resistant (directional only) per PDA 2026-08-11]
- **Gong** (AIO export 2026-08-10): High susceptibility, Resistant, Partial recovery. 10,676 traffic from AIO citation positions = 18.3% of 58.2K total. Citations spread across editorial pages (/blog/icp-sales: 83% AIO share) and commercial product pages (/sales-coaching-software, /pricing at 300–500 traffic each — first case in repository of commercial pages receiving AIO citation). Homepage (30,778 traffic, position 1 on "gong") generates only 1,597 from AIO — confirming brand navigational queries are not AIO-intercepted but also not citation-driven (E-003). Net positive AIO relationship; grew.
- **LaunchDarkly** (AIO export 2026-08-10): Medium susceptibility, Resistant in index. ~40% of total 94.8K traffic from AIO citation positions (38,192 from keyword export). /blog/deployment-strategies: 90.5% page-level AIO share. Citations at position 1 across US, Indonesia, Argentina, UK, Korea on "deployment strategies." Net positive AIO relationship; grew.
- **Hyperproof** (AIO export 2026-08-11): Medium susceptibility, Mixed in index. ~26,879 traffic (~56% of estimated organic traffic, 2,149 keywords) through AIO-cited positions on non-branded definitional GRC queries. Simultaneously, 382 SPC keywords with AIO present (−6,095 traffic) confirm query-level interception on processual content. Net positive AIO relationship despite Mixed classification; portfolio at all-time high of 48,155; grew.
- **CircleCI** (AIO export 2026-08-10): Mixed in index. 65% of total site traffic from AIO citation positions (108,167 traffic). /blog/deployment-strategies: 96.3% page-level AIO share, position 1 globally. Co-cited with LaunchDarkly in the same AIO box on "deployment strategies." Net positive AIO relationship; grew (Full recovery).
- **Aha!** (AIO export 2026-08-10): Intercepted in index. 28,529 traffic from AIO citations on guide pages (38.4% of 74.2K total) — but portfolio-level traffic is a fraction of pre-window peak (~1M+). AIO citation on high-depth overhaul pages is not compensating for AIO interception across the broader commodity content portfolio. Net negative AIO relationship; declined.
- **Gladly** (Intercepted, no AIO export): Intercepted in index, declined within study window. No AIO-filtered export; index classification based on prior analysis.
- **Cognism** (AIO export 2026-08-10): No conclusion. Pages where rankings were lost showed no meaningful AIO presence. AIO is not the primary driver of Cognism's decline in the tested query set. Does not provide evidence for or against this pattern.

**AIO citation magnitude by company (point-in-time snapshots):**
- CircleCI: ~65% of total site traffic from AIO citations
- Hyperproof: ~56% of estimated organic traffic from AIO citations
- LaunchDarkly: ~40% of total traffic from AIO citations
- Aha!: 38.4% of total traffic from AIO citations (concentrated in guide pages; insufficient to offset commodity interception losses)
- Gong: 18.3% of total traffic from AIO citations
- Harness: ~36% of total traffic from AIO citations (30,071 cited / ~82,738 export total; 88.6% non-branded informational DevOps content)
*These are not stable ratios. Point-in-time. Do not assert a named category taxonomy from these figures before systematic testing; describe numerically.*

**On Apollo.io:** Apollo's keywords export (Aug 2026) shows 774 AIO position kind citations dominated by brand and brand-variant queries ("apollo" US 180K vol, "apollo ai"). This is brand-navigational AIO — a different phenomenon from the informational-query citation pattern tracked in this entry. Apollo's brand-navigational AIO does not cleanly test the E-006 hypothesis (which concerns whether informational content portfolios earn citation vs. experience interception). Apollo is No conclusion for E-006 purposes. Its overall AIO Observed Effect in the company record remains Resistant (brand navigational AIO drove positive traffic, no interception detected), but it does not contribute positively or negatively to the pattern observed here.

**Challenging cases:** Aha! is Intercepted overall but earns 28,529 traffic in AIO citations on its high-depth guide pages — simultaneously citation positive on some content and interception negative on other content. This confirms E-010 (intra-portfolio AIO variance) and illustrates why "Intercepted" as a portfolio-level classification can mask a mixed underlying dynamic. Hyperproof is Mixed (citation + interception) with net-positive outcome — the first case where Mixed aligns with growth rather than ambiguity.

**Known boundary conditions:** All tested companies are B2B SaaS. The tested subset (8 companies with exports, 6 directional classifications) is heavily weighted toward growth companies and developer/compliance/DevOps SaaS verticals. The pattern has not been tested in e-commerce, media, or declining non-tech companies. Cognism is the only declining company with AIO-filtered data, and it returned No conclusion.

**Open questions:**
- Does the net-positive / net-negative AIO outcome distinction hold at scale across a more representative tested subset? The current n=7 (tested) is too small to treat this as a robust finding.
- What portfolio characteristics predict the direction of the net AIO outcome? Content depth and structural richness (E-009) are candidates but are not confirmed as sufficient predictors.
- At what AIO citation share does a net-positive outcome produce net traffic growth vs. merely cushioning losses? E-011 (AIO cushioning in Cognism) addresses the low end; the high end (CircleCI 65%, Hyperproof 56%) is clearly growth-driving.
- Does Gong's Resistant classification reflect a genuinely different portfolio dynamic from the Mixed (citation + interception, citation dominant) pattern now found in Harness, Vanta, and Hyperproof? Harness resolved 2026-08-12 as Mixed; Vanta resolved 2026-08-11 as Mixed. Of the original 5 Resistant companies, 3 have been reclassified through export analysis.

**Requires replication in:** Gong is the one remaining Resistant company without a PDA (AIO export is export-confirmed Resistant; a PDA would add page-level depth). Any declining company in the cohort with AIO-filtered data that can be confirmed Resistant would falsify the pattern — the absence of declining Resistant companies is the core correlation, and it currently rests on a biased tested subset. Harness resolved 2026-08-12 as Mixed (net strongly positive). Of the original 5 Resistant companies, 3 (Harness, Hyperproof, Vanta) have been reclassified to Mixed through export analysis; only Gong and LaunchDarkly remain Resistant with export confirmation.

---

### E-007 — No company with Algorithmic Reassessment as primary mechanism achieved Full recovery in this cohort

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | Recovery Principles — Mechanism determines recovery ceiling |
| **Companies** | Gong (Partial), Apollo.io (Partial), Cognism (None) |
| **Status** | Active |
| **Added** | 2026-08-07 |
| **Last Updated** | 2026-08-11 |

**Observation:** Three companies in the cohort have Algorithmic Reassessment as their primary mechanism. All three have Partial or No recovery within the study window (Jan 2025 – Jun 2026). None achieved Full recovery. By contrast, all three companies that achieved Full recovery have Content Quality as their primary mechanism. This pattern is the sharpest mechanism-to-outcome relationship in the current cohort.

**Apollo.io PDA note (2026-08-11):** The Apollo.io Portfolio Durability Analysis confirms the finding at page level. Of 29,231 captured programmatic /companies/ and /people/ URLs, 0 show any traffic recovery in the two-year window. Apollo.io's overall traffic grew — but the recovery was driven by brand demand surge (AIO-cited brand queries) and new product pages, not restoration of the AR-affected programmatic content. Total traffic can grow after AR while the affected content stays at zero. This is the clearest page-level confirmation of E-007: AR-affected pages did not recover. The mechanism-level ceiling holds even when company-level traffic grows through a different pathway (Brand Demand Recovery).

**Evidence source:** synthesis-2026-08-07.md; cross-index analysis of Primary Mechanism and Recovery Status across all 23 companies.

**Framework linkage:** Creates a candidate Recovery Principles finding: Algorithmic Reassessment may produce a recovery ceiling within a typical study window that Content Quality-driven declines do not. If replicated, this would suggest that AR recovery requires either a longer time horizon than the study window captures, or a structural portfolio change rather than incremental content investment. Connects to R-001 (check external signals before recommending a content rewrite in AR context) — the pattern would strengthen the implication that AR recovery is not primarily content-investment-driven.

**Supporting cases:**
- Gong: AR primary mechanism, Partial recovery (+34.1% trough to Jun 2026, but still below pre-decline peak)
- Apollo.io: AR primary mechanism, Partial recovery
- Cognism: AR primary mechanism, No recovery within study window

**Challenging cases:** None identified yet. A company with AR as primary mechanism achieving Full recovery within a comparable study window would be the critical boundary test. Actively seek this case.

**Known boundary conditions:** n=3; small. All three AR companies are in different verticals (sales intelligence, revenue intelligence, revenue operations) — limited vertical variation. Study window (18 months) may not be long enough to observe full AR recovery if recovery timelines are longer. "Full recovery" is defined relative to study-window start, not historical peak — this is a conservative threshold.

**Open questions:**
- Is the recovery ceiling an inherent property of AR events, or a study window artifact?
- What distinguishes Partial from None within AR — is Cognism's no-recovery outcome mechanism-specific or company-specific?
- Does portfolio composition (methodological vs. informational content mix) predict where within the Partial-to-Full range a company lands?

**Requires replication in:** Any company with confirmed Algorithmic Reassessment primary mechanism that achieved Full recovery in a comparable time window — this would be the critical disconfirming case. Apollo.io PDA completed (2026-08-11) — confirms no page-level recovery in the AR-affected URL population.

---

### E-009 — AIO-cited pages share substantial content investment and recurring structural characteristics

| Field | Value |
|-------|-------|
| **Evidence Strength** | Replicating |
| **Strategic Importance** | Foundational |
| **Framework Principle** | AIO Behavior — Content investment as a path to AIO citation |
| **Companies** | CircleCI, LaunchDarkly, Aha! (supporting); Cognism (challenging) |
| **Status** | Active |
| **Added** | 2026-08-10 |
| **Last Updated** | 2026-08-10 |

**What this finding establishes and does not establish:** The finding establishes an association, not a causal chain. AIO-cited pages across three companies share: (1) Ahrefs Content Changes = Major or Overhaul, and (2) recurring structural characteristics observed through content inspection. It does not establish that content rewrites caused AIO citation selection — Google's selection criteria are not observable. The association is consistent with a rewrite-to-citation mechanism, but content changes may have coincided with citation selection rather than caused it. "Rewrite → AIO citation" is the candidate mechanism being tested by future negative control studies, not the established finding.

**The LaunchDarkly contradiction (unresolved):** LaunchDarkly's PDA Elimination Matrix records: "No material rewrite — same body text, same structure — page rewrite or expansion eliminated as traffic driver." Ahrefs Content Changes for the same page = Overhaul. These cannot both be true without a timing explanation: a possible resolution is that the Wayback comparison was done on a snapshot predating the overhaul detected in the Ahrefs Aug 2024 → Aug 2026 comparison window. This requires verification before LaunchDarkly can be treated as a clean replication of the rewrite → citation sequence. The quantitative AIO citation traffic (90.5% of page traffic) stands regardless; the content change question is what needs resolution.

**Observation:** Across CircleCI, LaunchDarkly, and Aha!, AIO-cited pages (confirmed by AIO-filtered keyword exports) all show Ahrefs Content Changes = Major or Overhaul. In all three companies, the cited page holds a lower organic position than its AIO citation rank. In all three, AIO citation positions account for the substantial majority of the cited page's traffic. Content inspection of CircleCI's and Aha!'s pages (LaunchDarkly not yet inspected) reveals recurring structural characteristics across verticals. The quantitative picture: CircleCI 65% of total site traffic from AIO citations; LaunchDarkly deployment-strategies 90.5% page-level AIO share; Aha! guide pages 13,144 and 9,686 from AIO citations respectively.

**Recurring structural characteristics observed on AIO-cited pages:**

*Confirmed across CircleCI (content inspection) and Aha! (content inspection); consistent with LaunchDarkly but LaunchDarkly not yet inspected:*

1. **Upfront conceptual distinction** — corrects a common misconception or draws a sharp definitional boundary in the first 1–2 paragraphs. CircleCI: deploy ≠ release. Aha!/agile: agile adoption ≠ enterprise transformation. Aha!/product: product ≠ feature collection.
2. **Comprehensive topic coverage** — more sub-types, dimensions, or strategies than visible competitors on the same SERP.
3. **Consistent section structure per concept** — each sub-topic follows the same H-level pattern. CircleCI: definition → mechanism → trade-off → when to use. Aha!/agile: Area → Operational Shift → Actionable Behavior. Aha!/product: Category → Core Definition → Key Characteristics → Practical Example.
4. **Explicit decision or classification framework** — "how to choose" or "which type applies to you" logic with branching or matrix structure.
5. **Named synthesis or framework at close** — ties the content together under a named concept. Can be proprietary (Aha!'s CPE model) or attributed to an external source (CircleCI's "progressive delivery" attributed to Redmonk). The key property is that the close provides an attributable, citable anchor — not that the framework is original.
6. **Highly structured, extractable presentation** — at least one section uses a format that makes parallel structure visually explicit and machine-parseable. A table is one implementation; consistent H3 patterns are another. The common property is low extraction cost for the AI, not the specific formatting element.

*Candidate seventh signal — observed in Aha!, not yet confirmed in CircleCI or LaunchDarkly:*

7. **Internal cross-linking to sub-concept pages** — Aha! links to ~10 related sub-concept guides (Kanban, Scrum, SAFe, burndown charts). May contribute to topic authority signals. Listed as a hypothesis to test, not a confirmed characteristic.

**Within-domain test — Cognism (2026-08-10):** Five Cognism pages were inspected against the six characteristics, comparing high-AIO-citation pages to a low-citation control, within the same domain (holding brand, DR, and site architecture constant). Results:

| Page | Content Change | AIO Citation Share | Structural Richness |
|------|---------------|-------------------|---------------------|
| /what-is-demand-generation | Overhaul | 63% | High (4/6) |
| /blog/sales-objections | Major | 59% | High (6/6) |
| /what-is-b2b-sales | Moderate | 59% | High (4/6) |
| /what-is-b2b-lead-generation | Major | 41% | High (4/6) |
| /blog/buy-email-lists | Overhaul | 14% | Medium (2/6) |

Key findings from this test: (1) **Rewrite magnitude does not predict citation share** — /blog/buy-email-lists received an Overhaul and achieved only 14% AIO share; /what-is-b2b-sales received a Moderate change and achieved 59%. (2) **Structural characteristics do discriminate, but unevenly** — the control page (buy-email-lists) scored Medium (2/6) vs. High (4/6) for all other pages, but the gap is not binary. (3) **Two of the six characteristics are not discriminating** — Consistent Section Structure and Highly Structured Extractable Presentation were both Present on all five pages including the low-citation control; they appear to be table stakes for B2B educational content generally, not predictors of AIO citation specifically. (4) **The three characteristics that actually varied with citation share**: Comprehensive Coverage (Partial on the low-citation control, Present on the higher-citation pages), Upfront Conceptual Distinction (Absent on pages 4–5, Present/Partial on pages 1–3), and Named Synthesis (Present on the two highest-citation pages, absent on the control). No single feature was perfectly discriminating alone — it is their combination that appears to matter.

**Caveat update — positive selection bias partially addressed:** The Cognism within-domain test is the first comparison between high-citation and low-citation pages within the same domain. The structural characteristics do discriminate, but the control page is a Commercial Round-up (vendor comparison post), not a definitional guide — content type may be confounding the comparison. A cleaner test would compare two definitional guide pages on the same domain with different AIO citation outcomes. Cognism is still a useful partial control; a definitive resolution requires a same-archetype, same-domain comparison.

**Evidence source:** circleci.md; portfolio-durability/circleci.md; AIO-filtered keyword exports for CircleCI, LaunchDarkly, and Aha! (Aug 2026); page content inspection of CircleCI /deployment-strategies and Aha! /agile-transformation and /what-is-a-product (Aug 2026).

**Framework linkage:** Creates a candidate AIO citation pathway: pages with substantial content investment and these structural characteristics appear to be citation candidates. Connects to E-004 (LaunchDarkly structural educational content also cited on the same query). The candidate mechanism — rewrite improves structured extractability → Google selects the page as an AIO source — remains to be tested against negative controls.

**Supporting cases:**
- **CircleCI** (primary case): All four top recovery pages = Major or Overhaul content changes. 108,167 traffic from AIO citation positions (65% of total site traffic). Top page (deployment-strategies): 96.3% AIO citation share. Organic rank #3, AIO citation rank #1.
- **LaunchDarkly** (consistent with, rewrite confirmation pending): /blog/deployment-strategies/ — Ahrefs Content Changes: Overhaul. 28,018 AIO citation traffic = 90.5% of page traffic. Cited at position 1 across US, Indonesia, Argentina, UK, Korea. *Note: contradiction with PDA Elimination Matrix unresolved — see above.*
- **Aha!** (first cross-vertical case): /agile-transformation — Content Changes: Overhaul → 13,144 AIO citation traffic at position 1 globally. /what-is-a-product — Content Changes: Overhaul → 9,686 AIO citation traffic at position 1. Different vertical (product management SaaS) and broader query types than CircleCI/LaunchDarkly.

**Challenging cases:**
- **Cognism /blog/buy-email-lists** (2026-08-10): Ahrefs Content Changes = Overhaul. AIO citation share = 14%. Structural richness = Medium (2/6). This is the first case where a Major/Overhaul rewrite did not produce high AIO citation — directly disconfirming the simple "rewrite → citation" sequence. *Caveat: this page is a Commercial Round-up archetype (vendor comparison), not a definitional guide — content type may partly explain the lower citation share. Not a fully clean falsification.*
- **Cognism /what-is-b2b-sales** (2026-08-10): Content Changes = Moderate (not Major/Overhaul). AIO citation share = 59%. Directly disconfirms "bigger rewrite = more citation" within the same domain.

**Known boundary conditions:** All confirmed cases are DR 80+ companies in B2B SaaS. Whether the pattern holds for lower-DA domains is unknown. AIO citation behavior varies by geography; exports are US-weighted.

**Open questions:**
- Is the rewrite-to-citation sequence causal, or do other factors (domain authority threshold, query volume, competitive landscape, content type) determine whether a rewritten page gets cited?
- Of the six structural characteristics, which are necessary, which are sufficient, and which are merely correlated? The Cognism test suggests consistent structure and extractable presentation are table stakes (present everywhere) while comprehensive coverage, upfront distinction, and named synthesis may be differentiating — but the test was not clean enough to confirm this.
- Does the content archetype (definitional guide vs. commercial round-up vs. tactical list) interact with structural richness in determining AIO citation share? The Cognism control page is a different archetype from the comparison pages — this is a confound that requires a same-archetype within-domain test to resolve.
- Does the LaunchDarkly Overhaul represent a post-Wayback-snapshot change? (Verify with a more recent snapshot.)
- What is the failure mode within the CircleCI rewritten cohort — are there pages that received Major/Overhaul changes but were not subsequently cited?

**Requires replication in:** Harness and Vanta (growing companies — do their AIO-cited pages share the structural characteristics?); a same-archetype within-domain comparison on Cognism or another company to resolve the content-type confound; LaunchDarkly content inspection to resolve the PDA contradiction. *Apollo.io note: not applicable — Apollo.io's AIO citations are brand navigational queries ("apollo" US 180K vol, "apollo ai"), not structured educational content. The keyword export shows 774 AIO citation positions, but they cluster on brand queries rather than the editorial/definitional query cluster this finding targets. Apollo.io does not provide evidence for or against E-009.*

---

### E-008 — Full recovery in this cohort is exclusively associated with Content Quality as primary mechanism

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Important |
| **Framework Principle** | Recovery Principles — Content Quality as a recoverable mechanism |
| **Companies** | CircleCI (Full), CloudBees (Full), Hyperproof (Full) |
| **Status** | Active |
| **Added** | 2026-08-07 |
| **Last Updated** | 2026-08-11 |

**Observation:** The three companies that achieved Full recovery within the study window all have Content Quality as their primary (or Phase 2) mechanism. CircleCI: Content Quality, Full recovery. Hyperproof: Content Quality, Full recovery. CloudBees: Mixed (Phase-dependent) — Phase 1 Algorithm Update, Phase 2 Content Quality; Full recovery. This is the inverse of E-007: Content Quality appears recoverable to Full within an 18-month window; Algorithmic Reassessment does not.

**Note:** This finding is the corollary of E-007 and the two should be read together. They together suggest a mechanism-specific recovery ceiling: Content Quality → Full recovery achievable; Algorithmic Reassessment → capped at Partial within this study window.

**Evidence source:** synthesis-2026-08-07.md; cross-index analysis of Primary Mechanism and Recovery Status.

**Framework linkage:** Strengthens Content Quality as a framework dimension with practical prescription value: when Content Quality is the identified mechanism, full recovery is achievable and should be the stated target. When Algorithmic Reassessment is identified, Partial recovery should be the stated expectation — full recovery requires either a longer horizon or structural portfolio change.

**Supporting cases:**
- CircleCI: definitional/educational content cluster breakthrough drove Full recovery from Dec 2025 trough; PDA complete
- Hyperproof: GRC framework content + product launch drove Full recovery, reaching all-time high Mar 2026; **PDA completed 2026-08-11** provides page-level confirmation: top gainers are definitional/methodological GRC content (cybersecurity-incident-response-plan +7,909; risk-management-techniques +2,431; it-risk-management-framework +1,592); gross-loss offset rate 24.7% — lowest in cohort; 56.1% of traffic flows through AIO-cited positions, all on informational queries. Full recovery reached new all-time high (48,155 Aug 2026). Content Quality mechanism confirmed at page level.
- CloudBees: Phase 2 Content Quality (existing page ranking breakthrough on git tutorial) drove recovery past study-window start

**Challenging cases:** None identified yet. A company with Content Quality as primary mechanism that achieved only Partial recovery would be an important boundary condition. Freshworks is a Content Quality declining company with No recovery — but the mechanism is negative Content Quality (redesign disruption) rather than a content investment recovery story.

**Known boundary conditions:** n=3; small. Content Quality mechanism label covers varied dynamics across these three companies (content cluster growth, product launch + content, individual page ranking change) — the label is heterogeneous. Full recovery definition is relative to study-window start, not historical peak.

**Open questions:**
- Which Content Quality subtype drives faster full recovery — content cluster breakthroughs, single-page ranking changes, or product-launch-driven demand expansion?
- Does the Content Quality → Full recovery finding hold when the Content Quality decline was severe (e.g., >50% traffic loss)?
- Is Freshworks' negative Content Quality (technical/architectural damage) a different subtype that follows different recovery rules?

**Requires replication in:** Additional companies with Content Quality mechanism and a recovery arc. *Hyperproof PDA completed 2026-08-11 — confirms Content Quality → Full recovery at page level; top gainers are definitional/methodological GRC content reaching new all-time traffic high.*

---

### E-010 — AIO citation and AIO interception can occur simultaneously on different page types within the same domain

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | AIO Behavior — Intra-portfolio AIO outcome variance |
| **Companies** | Aha! |
| **Status** | Active |
| **Added** | 2026-08-10 |
| **Last Updated** | 2026-08-10 |

**Observation:** Aha!'s Aug 2026 AIO-filtered keyword export shows 28,529 traffic from AIO citation positions (1,951 keywords), representing 38.4% of their 74.2K total site traffic. Their two top AIO-cited pages (/agile-transformation and /what-is-a-product) show +18.8K and +9.6K traffic changes in the Top Pages comparison, both classified as Overhaul in Ahrefs Content Changes. Simultaneously, their broader /roadmapping/guide/ content base — which drove traffic from what appears to have been a ~1M+ peak before the study window — has collapsed; pages such as /guide/marketing-plans/social-media-plan and /guide/information-technology/it-job-titles now show 0 traffic. The AIO citation traffic on the high-depth guide pages is not compensating for the interception losses elsewhere: overall site traffic at 74.2K represents a fraction of their historical peak.

**What this establishes:** A single domain can be simultaneously AIO-cited on some page types and AIO-intercepted on others. The portfolio-level "Intercepted" classification captures the net direction (decline) but obscures the underlying dynamic. The mediating variable appears to be content depth and specificity: overhauled, comprehensive guide pages earn citation; commodity definitional content (job titles, social media planning templates, marketing plan examples) gets replaced by the AI Overview without citation.

**Evidence source:** Aha! Top Pages comparison screenshot (Aug 2026); AIO-filtered keyword export (aha.io-organic-keywords-subdomains-allbyloc_2026-08-10); company record (aha.md); PDA (portfolio-durability/aha.md).

**Framework linkage:** Refines the Durable Demand Framework's AIO dimension: AIO outcome is not a domain-level property — it is a page-type property. Within a single domain, content types face different AIO fates simultaneously. Susceptibility is query-specific. This has direct implications for site-level AIO strategy: identifying which pages in a portfolio are citation candidates vs. interception candidates is more actionable than assessing site-level "susceptibility."

**Supporting cases:** None at Emerging stage beyond Aha!. The LaunchDarkly and CircleCI cases show AIO citation in isolation (their portfolios appear to be predominantly Cited); Aha! is the first case where citation and interception co-exist at measurable scale in the same crawl window.

**Challenging cases:** None identified yet. A domain where AIO outcome is uniform across all page types (entirely Cited or entirely Intercepted, with no intra-portfolio variance) would be a boundary condition.

**Known boundary conditions:** Single company, single snapshot. Aha! has an unusually broad content range (from deep product management methodology to generic job title lists) which may be unusually likely to show intra-portfolio variance. Companies with more uniform content models may not show this pattern.

**Open questions:**
- Is the cited/intercepted distinction driven purely by content depth, or does query intent (navigational vs. informational vs. definitional) also predict the outcome?
- Do the AIO-cited pages on Aha! maintain or improve their citation status over time, or does AIO eventually commoditize those topics too?
- Is there a traffic threshold at which the citation gains can offset interception losses — or does the math always favor interception on a high-volume commodity content portfolio?

**Requires replication in:** Any company with a mixed content portfolio (high-depth editorial + commodity definitional content) that has been classified as AIO Intercepted — check whether the citation layer exists and was previously invisible. Apollo.io and Cognism are candidates.

---

### E-011 — AIO citation can preserve meaningful traffic on a page that is still experiencing net decline ("AIO cushioning")

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | AIO Behavior — Citation as buffer vs. citation as recovery engine |
| **Companies** | Cognism |
| **Status** | Active |
| **Added** | 2026-08-10 |
| **Last Updated** | 2026-08-10 |

**Observation:** Cognism's /what-is-b2b-lead-generation page has an AIO citation share of approximately 41% (912 AIO traffic / 2,245 current traffic) but has lost ~7,300 visits over the two-year comparison window. The page holds a Major content change designation. AIO is actively citing it — and it is still declining. This shows that AIO citation and page recovery are independent variables: a page can be meaningfully cited by AI Overviews while the rest of its query traffic continues to erode.

A second Cognism case: /what-is-prospecting — ~55% AIO citation share, also declining ~1.3K overall.

**The distinction this establishes:** There are at least two meaningfully different AIO outcomes that should not be conflated: (1) **AIO recovery** — AIO citation generates enough traffic to produce net page growth or offset losses; (2) **AIO cushioning** — AIO citation captures a meaningful share of the page's remaining traffic but cannot offset losses from other queries on the same page declining simultaneously. A page in "AIO cushioning" mode would look worse without AIO citation, but it is not recovering.

**What this means strategically:** Seeing a page with a high AIO citation share does not mean that page is in good health. A page at 40–50% AIO citation share with declining total traffic may be in the late stages of a broader keyword collapse, with AIO capturing the remaining viable queries. This is a different situation from CircleCI or LaunchDarkly, where AIO citation drove net growth.

**Evidence source:** Cognism AIO-filtered keyword export (cognism.com-organic-keywords-subdomains-all_2026-08-10); Top Pages screenshot (Aug 2026); within-domain structural test (Aug 2026).

**Framework linkage:** Connects to E-010 (intra-domain citation + interception co-occurring) and extends it to the page level: even within a page, AIO may be citing for some queries while organic traffic collapses on others. Refines the portfolio-level model: AIO citation share alone is not a health signal; the direction of net traffic change must be assessed alongside it.

**Supporting cases:**
- Cognism /what-is-b2b-lead-generation: Major content change, ~41% AIO share, −7.3K net
- Cognism /what-is-prospecting: ~55% AIO share, −1.3K net

**Challenging cases:** None identified yet. A page with 40%+ AIO citation share that is simultaneously growing in total traffic would clarify the threshold between cushioning and recovery — and would suggest AIO citation is doing the heavy lifting. CircleCI and LaunchDarkly's deployment-strategies pages (90%+ AIO share, growing) may represent the recovery end of the spectrum.

**Open questions:**
- Is there a citation share threshold above which AIO drives net recovery rather than merely cushioning? CircleCI and LaunchDarkly are at 90%+; Cognism cushioning cases are at 40–55%. The gap suggests the threshold may be somewhere in between, or it may be that total query portfolio composition matters more than citation share on any single page.
- Does a page's entry into "AIO cushioning" mode precede collapse (AIO is capturing the last viable queries before the page fully declines) or is it a stable equilibrium?

**Requires replication in:** Additional declining pages across Cognism, Apollo.io, and other declining cohort companies where AIO exports are available. A comparison between pages in cushioning mode and pages that exited cushioning mode (either recovered or collapsed to zero) would be the most diagnostic study.

---

### E-012 — AI Overviews on DIY how-to queries cite video content exclusively, with no text or product pages present

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Important |
| **Framework Principle** | AIO Behavior — Format preference by query type |
| **Companies** | Soundproof Cow |
| **Status** | Active |
| **Added** | 2026-08-11 |
| **Last Updated** | 2026-08-11 |

**Observation:** In live SERP testing of Soundproof Cow's core how-to queries (2026-08-11), the AI Overviews for "soundproof door" (position 1) and "soundproof wall" (position 1) cited exclusively YouTube videos — no text pages, no product pages, no editorial guides. Soundproof Cow was absent from both AIOs despite holding organic rankings on these queries. The AIO format for both queries was a procedural step-by-step sourced entirely from video content.

**Evidence source:** Ahrefs SERP Overview export for Soundproof Cow (google_us_mass-loaded-vinyl-ml_overview_serps_2026-08-11); 412 rows covering 6 core queries. "Soundproof door" and "soundproof wall" AIO citation rows examined directly.

**Framework linkage:** Extends E-009 and R-003 (structural characteristics of AIO-cited pages) by introducing a format-level constraint. The structural characteristics documented in E-009 — comprehensive coverage, upfront distinction, named synthesis — are text-document properties. On procedural how-to queries, Google may be selecting for format type (video) rather than document structure, making text-based content structurally ineligible for citation regardless of quality. This would mean R-003's guidance does not apply uniformly across query types.

**Supporting cases:**
- Soundproof Cow "soundproof door": AIO position 1, all citations YouTube
- Soundproof Cow "soundproof wall": AIO position 1, all citations YouTube

**Challenging cases:** None tested yet. It is possible that high-authority text pages (e.g., from major home improvement or construction publishers) do appear in how-to AIOs on some queries. This requires systematic testing before treating video exclusivity as a general pattern rather than a function of the specific competitive landscape on these queries.

**Known boundary conditions:**
- Both observations come from soundproofing how-to queries — a home improvement / DIY vertical where YouTube tutorial culture is particularly strong
- Both queries tested on the same domain (Soundproof Cow) in the same SERP test session
- Cannot yet distinguish whether YouTube dominance reflects a Google format preference for how-to queries generally or the absence of sufficiently authoritative text competitors on these specific queries

**Open questions:**
- Is video exclusivity in how-to AIOs a function of query type (procedural DIY), vertical (home improvement), or the specific competitive SERP landscape?
- Do high-authority text guides from major publishers (This Old House, Bob Vila, major home improvement retailers) appear in how-to AIOs on adjacent queries?
- If text content cannot earn how-to AIO citations in this vertical, does this change the viable recovery prescription for SPC's how-to content?

**Requires replication in:** How-to query SERP testing across at least one other DIY/home improvement domain and at least one non-DIY vertical (e.g., B2B software how-to content) to test whether video exclusivity is query-type-specific or vertical-specific.

---

### E-013 — Acronym/abbreviation SERP capture by a higher-volume entity can render the original query unrecoverable through content intervention

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Supporting |
| **Framework Principle** | Demand Durability — Query identity risk |
| **Companies** | Soundproof Cow |
| **Status** | Active |
| **Added** | 2026-08-11 |
| **Last Updated** | 2026-08-11 |

**Observation:** The query "mlv" was historically a soundproofing abbreviation (mass loaded vinyl) strongly associated with Soundproof Cow's product category. As of August 2026, the bare "mlv" SERP is dominated by Major League Volleyball: provolleyball.com appears at position 1 with sitelinks, the AIO at position 2 describes the volleyball league, and Soundproof Cow's vinyl-barriers-mlv product category page ranks at position 28–29 with 0 estimated organic traffic. Soundproof Cow is still cited within the "mlv" AIO — but as a soundproofing material source inside an AIO about volleyball.

The specific long-tail variants ("mass loaded vinyl soundproofing", "mlv panels", "mlv sound barrier") still drive AIO-cited traffic for Soundproof Cow at position 1 — demonstrating that the underlying soundproofing demand has not disappeared. The bare "mlv" abbreviation itself has been captured by the volleyball brand's emergence as a higher-volume search entity.

**This distinguishes SERP intent capture from Search Demand Shift:** Search Demand Shift describes underlying demand moving away from search (to AI tools, direct prompting, or other channels). SERP intent capture describes a query abbreviation that now resolves to a different entity — the underlying demand is still present and searchable, but the shortest-form query string no longer routes to it. Content quality improvement or link acquisition is unlikely to recover the query while the dominant entity interpretation persists.

**Evidence source:** Ahrefs SERP Overview export (google_us_mass-loaded-vinyl-ml_overview_serps_2026-08-11); Ahrefs Organic Keywords export (soundproofcow.com, 2,811 rows); "mlv" position 28–29 with 0 traffic confirmed in keywords export.

**Framework linkage:** Adds a diagnostic category to the Demand Durability assessment. When evaluating a site's keyword portfolio for durability, short-form abbreviations should be assessed for disambiguation risk — particularly when the abbreviation is shared with a proper noun, brand name, or high-volume entity outside the site's vertical. This is a distinct failure mode from semantic competition (another site outranking on the same intent) or algorithm-driven demotion.

**Supporting cases:** Single observation (Soundproof Cow "mlv").

**Challenging cases:** None identified — the pattern is definitional. A case where an incumbent recovered a captured abbreviation would be highly informative.

**Known boundary conditions:**
- Observed in an e-commerce context where the site relies on a product-category abbreviation rather than a brand name
- The capture event appears tied to Major League Volleyball's emergence as a new professional sports league in 2026 — a dateable external event, not a gradual semantic drift
- Long-tail elaborations of the same query ("mass loaded vinyl soundproofing") remain intact; only the bare abbreviation was captured

**Open questions:**
- Are other soundproofing sites experiencing the same "mlv" capture, or is this Soundproof Cow-specific?
- Is there a meaningful audience size for "mlv" as a soundproofing query that Google has effectively split from the volleyball audience, or is the soundproofing intent now a small minority of total "mlv" query volume?
- Does SPC appearing as a citation within the volleyball-context AIO provide any meaningful navigational traffic?

**Requires replication in:** Monitoring for other examples of short-form abbreviation capture across the repository cohort. Any company relying on a product or category abbreviation that could be claimed by a sports league, government agency, brand name, or other high-volume proper noun is at structural risk.

---

## Evidence-Backed Recommendations

*Recommendations derived from accumulated evidence across multiple companies. Each recommendation cites the specific Evidence Register entries that support it and carries its own confidence level derived from those entries. See RESEARCH-CHARTER.md → Prescription Rule for the full confidence derivation table.*

*A recommendation without Evidence Register citations is not a recommendation — it is an opinion. A recommendation's confidence may not exceed what the cited evidence supports. When a cited evidence entry is updated, promoted, challenged, or superseded, reassess the recommendation confidence immediately.*

---

### R-001 — Check external signals before recommending a content rewrite for pages in Algorithmic Reassessment

| Field | Value |
|-------|-------|
| **Recommendation** | Before recommending a content rewrite for a page that declined during an Algorithmic Reassessment event, determine whether external signals — not content quality — are the binding constraint. A methodological or commercial evaluation page can recover rankings without a visible content change if the external signal environment changes. A rewrite is not always the primary lever, and may be unnecessary cost. |
| **Confidence** | Emerging |
| **Evidence Basis** | E-001, E-002 |
| **Applies When** | Client has pages classified as Methodological or Commercial Evaluation that declined during an Algorithmic Reassessment event; page has historically ranked competitively; content quality is not the demonstrable problem |
| **Does Not Apply When** | Content quality is verifiably the issue (thin content, factual errors, low depth relative to competitive SERP); the page has never ranked and is being built from scratch; the mechanism is AI Overview Interception rather than Algorithmic Reassessment (different dynamic) |
| **Added** | 2026-08-06 |
| **Last Updated** | 2026-08-06 |

---

### R-002 — Audit existing educational pages at positions 3–6 before recommending new content investment

| Field | Value |
|-------|-------|
| **Recommendation** | For clients with high-domain-authority sites, identify long-standing educational pages already ranked at positions 3–6 on topics with observable demand growth before recommending new content creation. These pages may capture compounding traffic growth without editorial reinvestment as demand expands toward them. Content investment should follow evidence that the page cannot hold its position on its own — not precede it. |
| **Confidence** | Emerging |
| **Evidence Basis** | E-004 |
| **Applies When** | Client has DR 60+; has existing educational content 3+ years old; topic shows observable demand growth (keyword volume trend rising); page ranks position 3–6 on a core query |
| **Does Not Apply When** | Client domain authority is low (ranking at position 3–6 on a competitive topic requires strong domain signals; the pattern may not hold); page's topic demand is flat or declining; client's existing content is thin or low-quality relative to competitive SERPs; page has minimal page-level authority on a keyword where competitors are actively building links |
| **Added** | 2026-08-06 |
| **Last Updated** | 2026-08-06 |

---

### R-003 — When writing educational content on topics with AI Overview coverage, optimize for citation rather than ranking

| Field | Value |
|-------|-------|
| **Recommendation** | On queries where AI Overviews are active, organic rank and AIO citation rank are independent. A page at position #3 organically can be the primary AIO citation source; a page at position #1 organically may not be cited at all. When producing or rewriting educational content on AIO-bearing queries, optimize for citation-worthiness rather than keyword density or length alone. A within-domain test on Cognism (Aug 2026) inspecting five pages against six structural characteristics found that two of the six — consistent section structure and highly structured extractable presentation — are present on virtually all B2B educational content, including a low-citation control page. They appear to be table stakes, not differentiators. The three characteristics that varied with AIO citation share in the Cognism test: (1) **Comprehensive coverage** — more sub-types, dimensions, or use cases than visible competitors; the only characteristic consistently absent on the low-citation control. (2) **Upfront conceptual distinction** — correct a common misconception or draw a sharp definitional boundary in the first 1–2 paragraphs; present on the highest-citation pages, absent on the control. (3) **Named synthesis or framework at close** — tie the content together under a named concept, proprietary or externally attributed; present on the 59–63% AIO-share pages, absent on the control. Two additional characteristics observed in all cross-company cases but not confirmed as differentiating by the within-domain test: (4) explicit decision or classification framework — branching criteria or matrix logic; (5) consistent H-level section structure per concept. One candidate signal: internal cross-linking to sub-concept pages (observed in Aha!, not yet confirmed elsewhere). Important: rewrite magnitude does not predict citation share — an Overhaul-level rewrite produced 14% AIO share on the control page while a Moderate-change page achieved 59% on the same domain. Content type may confound the within-domain test (the control is a vendor comparison post, not a definitional guide); a same-archetype comparison is still needed before treating these as citation-predictive rather than citation-correlated. |
| **Confidence** | Replicating |
| **Evidence Basis** | E-004, E-009, E-011 |
| **Applies When** | Client is producing or rewriting content on queries where AI Overviews are confirmed active; client has DR 60+; query is definitional, comparative, or how-to in nature; client is in a B2B vertical (technical or non-technical — the pattern held across both) |
| **Does Not Apply When** | Query does not trigger AI Overviews (navigational, branded, transactional); client domain authority is very low; content type is not educational/informational |
| **Added** | 2026-08-10 |
| **Last Updated** | 2026-08-10 |

---

## Amendment Log

*Append-only. Record evidence strength promotions, new company additions, challenges, and supersessions.*

| Date | Evidence ID | Change | Summary |
|------|-------------|--------|---------|
| 2026-08-04 | E-001, E-002, E-003 | Created | Initial entries seeded from Gong pilot analysis. All Emerging. |
| 2026-08-04 | E-001, E-002, E-003 | Recalibrated | E-001 title scoped to Gong specifically; "frequently" removed as cross-case claim. E-002 language corrected: "driven by external factors" removed; null hypothesis confidence softened; March 2026 timestamp claim softened. E-003 updated with branded-query / stable-ranking finding. Supporting/Challenging/Boundary fields added to all entries. |
| 2026-08-06 | E-004 | Created | AIO citation + organic retention finding from LaunchDarkly deep dive. Emerging. |
| 2026-08-06 | R-001 | Created | Emerging recommendation derived from E-001 + E-002: check external signals before recommending content rewrite in Algorithmic Reassessment context. |
| 2026-08-06 | R-002 | Created | Emerging recommendation derived from E-004: audit existing educational pages at positions 3–6 before recommending new content investment on high-DR domains. |
| 2026-08-07 | E-002 | Updated | Added Salesloft /learn/lead-management as second supporting case (page 2 → top 3 on 6,400-vol keyword without content change). Mechanism context differs from Gong (Mixed/candidate structural consolidation vs. Algorithmic Reassessment); positive recovery mechanism for Salesloft page unresolved. Title broadened to reflect two companies. Cross-mechanism generalizability not yet established. Promotion to Replicating flagged for Quinn's judgment. |
| 2026-08-07 | E-006, E-007, E-008 | Created | Three new entries from 23-company cohort synthesis pass (synthesis-2026-08-07.md). All Emerging. E-006: AIO Resistant = exclusively growers. E-007: AR primary mechanism → no Full recovery observed. E-008: Full recovery → exclusively Content Quality mechanism. All three are index-level observations requiring PDA confirmation before promotion. |
| 2026-08-07 | E-005 | Created | Image Pack SERP feature acquisition from preexisting years-old visual asset without any company action. Salesloft /resources/blog/sales-pipeline-funnel. Three Wayback snapshots confirm no asset change. Emerging. |
| 2026-08-10 | E-009 | Created | Content rewrites drove AIO citation selection; AIO citations drove traffic recovery. CircleCI: 108,167 traffic from AIO citation positions (65% of total). Top recovery page (deployment-strategies): 96.3% of 70,148 traffic from AIO citations at organic rank #3, AIO citation rank #1. All four top recovery pages confirmed Major or Overhaul rewrites via Ahrefs Content Changes column. Structural citation features documented. Emerging. |
| 2026-08-10 | E-004 | Updated | Added CircleCI as a supporting case. Both CircleCI and LaunchDarkly are cited in the same AI Overview for "deployment strategies" — clarified this is depth on one SERP, not independent replication across queries. Cross-query replication requirement added to Requires Replication section. |
| 2026-08-10 | R-003 | Created | Emerging recommendation derived from E-004 + E-009: optimize educational content structure for AIO citation rather than keyword density. Documents five observed structural features of AIO-cited pages. Applies to queries with confirmed AI Overview coverage on DR 60+ domains. |
| 2026-08-10 | E-009 | Promoted to Replicating | Added LaunchDarkly (deployment-strategies: Overhaul → 90.5% AIO share, cited at position 1 globally) and Aha! (/agile-transformation + /what-is-a-product: both Overhaul → AIO cited position 1 across multiple countries) as supporting cases. First cross-vertical replication (product management SaaS joins developer tools). Cross-case pattern documented. |
| 2026-08-10 | E-009 | Updated — structural features confirmed cross-vertical | Content inspection of Aha!'s two AIO-cited pages confirmed all five original structural features from the CircleCI case, plus two new elements: (6) scannable tabular layout (Aha!'s 6 Areas of Change table); (7) proprietary named framework at close as an attributable entity (CPE model). Cross-case pattern updated to seven confirmed structural features. |
| 2026-08-10 | R-003 | Updated to Replicating | Expanded structural features from 5 to 7. Added cross-vertical note (pattern holds in product management SaaS, not just developer tools). Confidence upgraded from Emerging to Replicating. |
| 2026-08-10 | E-004 | Updated | Added quantitative AIO traffic data: 28,018 traffic from AIO citations on deployment-strategies = 90.5% of page traffic. Confirmed Content Changes = Overhaul. Multi-country citation confirmed (US, Indonesia, Argentina, UK, Korea). |
| 2026-08-10 | E-006 | Updated | Added vocabulary caveat: "Resistant" label conflates two distinct outcomes (AIO Cited vs. AIO Resistant). LaunchDarkly AIO export reveals ~40% of total site traffic from citation positions — they are Cited, not merely Resistant. Reclassification of index-level AIO field pending vocabulary update. |
| 2026-08-10 | E-010 | Created | AIO citation and interception occurring simultaneously on different page types within the same domain (Aha!). 28,529 AIO citation traffic on guide pages; commodity content collapsing to zero. Intra-portfolio AIO variance first documented case. Emerging. |
| 2026-08-10 | E-006 | Updated | Added Gong AIO export findings: 18.3% AIO citation share — first clearly "partially cited" case. Commercial product pages cited at 300–500 traffic each (first non-editorial citation pattern). Homepage traffic is 95% branded search, not AIO. Emerging AIO spectrum documented: Primarily Cited → Partially Cited → Cited+Intercepted hybrid → Primarily Intercepted. |
| 2026-08-10 | E-009, E-006, R-003 | Corrections applied (post-ChatGPT review) | E-009: Title softened to remove causal language ("Content rewrites drove…" → "AIO-cited pages share substantial content investment and recurring structural characteristics"). LaunchDarkly contradiction (PDA eliminates rewrite; Ahrefs shows Overhaul) flagged as unresolved; timing explanation proposed. Structural feature #5 corrected (proprietary → named; attribution counts). Feature #6 corrected (table → highly structured extractable presentation). Feature #7 demoted from confirmed to candidate signal. Positive selection bias caveat added. E-006: Four-part AIO spectrum taxonomy (Primarily Cited → …) removed; replaced with numerical description of AIO citation share by company with note against premature taxonomy. R-003: "Seven structural features confirmed" language softened to "six characteristics observed repeatedly, worth testing"; positive selection bias caveat added; feature descriptions updated to match E-009 corrections; seventh signal demoted to candidate. |
| 2026-08-10 | E-009 | Updated — Cognism within-domain test added | Five Cognism pages inspected against structural characteristics, comparing high-AIO-share (59–63%) pages to a low-AIO-share control (14%). Key findings: (1) rewrite magnitude does not predict citation share — Overhaul + 14% vs. Moderate + 59% within same domain; (2) structural characteristics do discriminate at Medium vs. High level, but two features (consistent structure, extractable presentation) are present on all pages including control — not differentiating; (3) three characteristics that vary with citation share: comprehensive coverage, upfront distinction, named synthesis. Content-type confound noted (control is a vendor comparison post, not a definitional guide). Challenging cases section updated with Cognism buy-email-lists and b2b-sales. Companies field updated to include Cognism as challenging case. |
| 2026-08-10 | R-003 | Updated — within-domain test findings applied | Added Cognism within-domain test findings. Identified which structural characteristics are table stakes (consistent structure, extractable presentation — present everywhere) vs. potentially discriminating (comprehensive coverage, upfront distinction, named synthesis). Rewrite magnitude disconfirmed as predictor of citation share. Evidence basis updated to include E-011. |
| 2026-08-10 | E-011 | Created | New Emerging entry: AIO citation can preserve meaningful traffic without producing net page recovery ("AIO cushioning"). Primary cases: Cognism /what-is-b2b-lead-generation (~41% AIO share, −7.3K net) and /what-is-prospecting (~55% AIO share, −1.3K net). Establishes that AIO citation share is not a health signal in isolation — net traffic direction must be assessed alongside it. |
| 2026-08-11 | E-012 | Created | New Emerging entry: AI Overviews on DIY how-to queries ("soundproof door," "soundproof wall") cite exclusively YouTube videos — no text pages, no product pages present. First evidence of video-exclusive AIO citation on procedural how-to queries. Source: Soundproof Cow SERP Overview (2026-08-11). Requires replication across additional DIY and non-DIY verticals before generalizing. |
| 2026-08-11 | E-013 | Created | New Emerging entry: Acronym/abbreviation SERP capture by a higher-volume entity can render the original query unrecoverable through content intervention while the dominant interpretation persists. "mlv" is now dominated by Major League Volleyball (position 1 with sitelinks; AIO about volleyball league). Soundproof Cow ranks position 28–29 with 0 traffic. Long-tail variants ("mass loaded vinyl soundproofing") remain intact — underlying demand is present; only the bare abbreviation was captured. Distinguishes SERP intent capture from Search Demand Shift (mechanism is entity displacement, not demand disappearance). Source: Soundproof Cow SERP Overview + Organic Keywords export (2026-08-11). |
| 2026-08-11 | E-006 | Updated | Added Apollo.io as sixth supporting case (Resistant + Grew). Keywords export (Aug 2026) shows 774 AIO citation positions dominated by brand queries; "apollo" US (180K vol) with AIO citation generates +61,418 traffic. AIO is additive on brand queries. Notable distinction: Apollo's AIO citations are brand navigational (vs. editorial for Gong/LaunchDarkly/CircleCI) — AIO citation mode varies by brand strength, but the directional Resistant + Grew correlation holds. Updated "Requires replication in" to reflect Apollo.io and Cognism have been tested. |
| 2026-08-11 | E-007 | Updated | Added Apollo.io PDA finding: 29,231 captured programmatic URLs show 0 traffic recovery in two-year window. Apollo.io's total traffic grew through Brand Demand Recovery (brand query surge + AIO citation), not restoration of AR-affected programmatic content. Key implication: company-level traffic can grow after AR while the AR-affected URL population stays at zero — E-007's ceiling applies to the affected content, not the company overall. "Requires replication in" updated to mark Apollo.io PDA as completed. |
| 2026-08-11 | E-009 | Updated | Added note that Apollo.io is not applicable: AIO citations cluster on brand navigational queries ("apollo" 180K vol, "apollo ai"), not the structured educational content cluster this entry targets. Apollo.io neither supports nor challenges E-009. |
| 2026-08-11 | E-006 | Corrected | Fixed numerical inconsistency: Observation updated from "All 5 companies" to "All 6 companies" to match Companies field (Apollo.io added as 6th Resistant case). Directional claim remains true: 6/6 Resistant companies grew. |
| 2026-08-11 | E-001 | Updated | "Requires replication in" updated: Apollo.io marked as tested and not applicable. AR-affected programmatic content did not recover, so there is no content recovery cohort to audit for E-001's hypothesis. Not a challenging case — outside the relevant population. |
| 2026-08-11 | E-002 | Updated | "Requires replication in" updated: Apollo.io marked as tested and not applicable. No Apollo pages where E-002's question ("did a page recover without visible content changes?") can be asked — the affected content (programmatic database pages) never recovered at all. Not a challenging case — outside the relevant population. |
