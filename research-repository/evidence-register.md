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

**Requires replication in:** Apollo.io (recovery cohort page audit), Braze, any company with documented Methodological content in both the recovery and decline cohorts

---

### E-002 — A material visible content rewrite was not required for the Gong Sales Performance page's recovery

| Field | Value |
|-------|-------|
| **Evidence Strength** | Emerging |
| **Strategic Importance** | Foundational |
| **Framework Principle** | Recovery Principles — Content Investment vs. External Signal Primacy |
| **Companies** | Gong |
| **Status** | Active |
| **Added** | 2026-08-04 |
| **Last Updated** | 2026-08-04 |

**Observation:** The Sales Performance page at Gong recovered 19/25 new keyword rankings during the recovery window (Nov 2025 → Jun 2026) with the same visible body content present in the Aug 2025 Wayback snapshot. Body text character difference between versions was +94 characters. All 29 sections present in the Wayback snapshot were present in the current version. Page count difference (21 vs. 25 pages) was attributable to a template/layout rendering change, not content addition.

**Scope of what was established:** Pass 3 eliminated a material visible content rewrite as the primary driver of this page's recovery. It did not rule out internal link changes, schema or metadata changes, canonical or rendering changes, page-level backlink acquisition, competitor SERP losses, or other technical signals not observable in a Wayback archive comparison. Algorithmic reevaluation is a candidate explanation for this page's recovery — not a proven one.

**What was not established:** The March 4, 2026 "Last modified" timestamp was observed in the current version's metadata. It was consistent with a template or metadata change rather than editorial revision, but the exact nature of the modification is not known.

**Evidence source:** Gong.md; Pass 3 Wayback comparison (Sales Performance page, Aug 2025 vs. current); pdfplumber text extraction; section-level word count analysis.

**Framework linkage:** Creates a Recovery Principles candidate: content rewrites may not be the primary binding constraint for recovery in Algorithmic Reassessment events. If replicated, this would challenge a common default recommendation ("rewrite underperforming pages") and suggest that external signal diagnosis should precede content intervention decisions.

**Supporting cases:** None beyond this single page at Emerging stage.

**Challenging cases:** None identified yet. A recovery case where a visible rewrite demonstrably preceded recovery — especially a Methodological page — would be a meaningful boundary condition.

**Known boundary conditions:** Finding applies to one page, at one company, across one recovery window. Wayback comparison has inherent limitations: it captures visible HTML content but not structured data, internal links, canonical tags, rendering, or JavaScript-executed content. "No material visible content changes" is not the same as "no changes."

**Open questions:**
- What external signals changed that caused Google to re-evaluate this page?
- Is this pattern archetype-specific (Methodological pages are re-evaluated on authority signals) or general?
- Would a Methodological page that received a substantive rewrite in the same window have recovered faster, more broadly, or equally?

**Requires replication in:** Any company with documented Wayback evidence for recovery pages; Apollo.io recovery cohort

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
| **Last Updated** | 2026-08-06 |

**Observation:** On "deployment strategies" (US, Aug 2026), LaunchDarkly's /blog/deployment-strategies/ page held organic position 4 while simultaneously being cited as a primary source in the AI Overview with a thumbnail image. The page had not been materially rewritten between its previous traffic state (Nov 2025 Wayback snapshot) and the current state; the primary structural update before the pull date (Jul 31, 2026) was a KEY TAKEAWAYS summary box and an AI chat feature. Domain-level authority (DR 80) substantially exceeds page-level authority (UR 4, 10 referring domains).

**Evidence source:** launchdarkly.md; SERP overview export (deployment strategies, US, 2026-08-06); page-level keyword comparison; Wayback Machine content comparison (Nov 2025 snapshot vs. live page).

**Framework linkage:** Creates a candidate finding about the favorable AIO outcome: structured educational content ("6 types of X" format with discrete sections) on a high-authority domain may be extracted by AI Overviews as a cited source rather than displaced by them. If replicated, this would be a meaningful input to AEO/GEO recommendations — "write to be cited, not to survive citation."

**Supporting cases:** None at Emerging stage.

**Challenging cases:** None identified yet. A structured educational page on a comparably high-DR domain where AIO citation transitioned to displacement would be a meaningful boundary condition.

**Known boundary conditions:** Single query tested, single point in time. AIO presence and citation behavior vary by query, geography, and time. The finding cannot be generalized from a single snapshot. Domain authority (DR 80) may be a prerequisite — the same content on a lower-DR domain might not be cited.

**Open questions:**
- Does AIO citation persist over time, or transition to displacement as AI Overviews mature on well-covered topics?
- Is the KEY TAKEAWAYS summary box a contributing factor in citation? (Structured, extractable summary = easy AI source material)
- Does this pattern hold across the related keyword cluster (canary deployment, blue/green deployment, etc.)?
- At what DR threshold does AIO citation become likely for structured educational content?

**Requires replication in:** Any developer tools or SaaS company with structured "6 types of X" educational content at position 3–6 on an AIO-bearing keyword, tested at multiple time points.

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

## Amendment Log

*Append-only. Record evidence strength promotions, new company additions, challenges, and supersessions.*

| Date | Evidence ID | Change | Summary |
|------|-------------|--------|---------|
| 2026-08-04 | E-001, E-002, E-003 | Created | Initial entries seeded from Gong pilot analysis. All Emerging. |
| 2026-08-04 | E-001, E-002, E-003 | Recalibrated | E-001 title scoped to Gong specifically; "frequently" removed as cross-case claim. E-002 language corrected: "driven by external factors" removed; null hypothesis confidence softened; March 2026 timestamp claim softened. E-003 updated with branded-query / stable-ranking finding. Supporting/Challenging/Boundary fields added to all entries. |
| 2026-08-06 | E-004 | Created | AIO citation + organic retention finding from LaunchDarkly deep dive. Emerging. |
| 2026-08-06 | R-001 | Created | Emerging recommendation derived from E-001 + E-002: check external signals before recommending content rewrite in Algorithmic Reassessment context. |
| 2026-08-06 | R-002 | Created | Emerging recommendation derived from E-004: audit existing educational pages at positions 3–6 before recommending new content investment on high-DR domains. |
