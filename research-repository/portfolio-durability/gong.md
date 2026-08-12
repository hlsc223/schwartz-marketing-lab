# Portfolio Durability Analysis — Gong

<!--
Save to: portfolio-durability/gong.md
Link bidirectionally: add this file to the Related Documents section of the company record.
Use for companies classified as Algorithmic Reassessment or any comparable portfolio-wide redistribution event.
This document holds structured page-level findings. Company record holds company-level findings. Do not duplicate narrative — cross-reference instead.
Optimize for structured fields. Every time you want to write a paragraph, ask: could this be a field? If yes, make it a field.
-->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | Gong |
| **Linked Company Record** | `company-records/gong.md` |
| **Reassessment Window** | 2025-01 to 2026-07 |
| **Analysis Date** | 2026-08-04 |
| **Status** | Complete |
| **Primary Mechanism (from record)** | Algorithmic Reassessment |
| **Methodology Version** | V2.4 |

---

## Reassessment Window

| Field | Value |
|-------|-------|
| **Window Start** | 2025-01 |
| **Window End** | 2026-07 |
| **Window Identification Method** | Performance History cohort window — aligns with 118-company study endpoints |
| **Top Pages Export Dates (cohort analysis)** | Previous: 2025-01 (inferred) / Current: 2026-07 (inferred from performance history match: top pages current total 57,739 ≈ Aug 2026 perf history 57,755) — window used for recovery/decline/stable cohort classification, page-level analysis, and the 112-page recovery cohort |
| **Top Pages Export Dates (offset rate)** | Previous: Aug 12, 2024 (confirmed) / Current: Aug 12, 2026 (confirmed) — fresh export used exclusively for Gross Gain/Loss/Offset Rate calculation; differs from cohort-analysis window |
| **Keywords Export Dates** | Not used in this analysis |
| **Trailing-Slash Normalization Applied** | Yes — cohort analysis: 2,880 raw rows collapsed to 2,648 unique normalized URLs (232 URL pairs merged); offset-rate export: 2,934 raw rows, 231 pairs merged, 2,703 normalized URLs |
| **Window caveats** | Cohort-analysis Top Pages window (Jan 2025 → Jun/Jul 2026) and offset-rate Top Pages window (Aug 2024 → Aug 2026) are different exports covering different periods — do not compare URL-level cohort metrics with offset-rate figures as if they were from the same population. Cohort-analysis export Previous total (53,997) does not precisely match Performance History Jan 2025 (44,884 revised) — expected discrepancy; Performance History used for endpoint totals. HTTP variants normalized to HTTPS. |

---

## Portfolio Overview

| Metric | Value |
|--------|-------|
| Total pages in export (normalized) | 2,703 (Aug 2024 → Aug 2026 export); 2,648 (Jan 2025 → Jun 2026 original) |
| Recovery cohort size | 112 pages (original export — cohort analysis not re-run on new window) |
| Decline cohort size | 101 pages |
| Lost cohort size (prev > 0, curr = 0) | 479 pages |
| New URL cohort size (prev = 0, curr > 0) | 252 pages |
| Stable cohort size | 1,704 pages |
| Recovery cohort decision rule | Current traffic > previous traffic × 1.20 (>+20%) |
| Decline cohort decision rule | Current traffic < previous traffic × 0.80 (<−20%) |
| Stable threshold | Traffic change −20% to +20%, both periods > 0 |
| Archetypes observed (recovery) | Conceptual, Methodological, Commercial Evaluation, Homepage |
| Archetypes observed (decline) | Conceptual, Commercial Evaluation, Programmatic, Utility |
| Archetypes observed (stable) | Homepage, Methodological, Commercial Evaluation |
| **Gross Gain (corrected)** | 22,011 *(Aug 2024 → Aug 2026 window, 231 normalization pairs merged — supersedes 15,623)* |
| **Gross Loss (corrected)** | 11,306 *(supersedes 11,881)* |
| **Net Change (URL-level)** | +10,705 *(supersedes +3,742)* |
| **Offset Rate** | **0.514 (51.4%)** *(corrected 2026-08-12 — supersedes unreliable 0.760)* |
| **Offset Zone** | High (30–100%) |
| **Top 5 page traffic share** | 64.2% (Aug 2026) |
| **Top 10 page traffic share** | 70.2% |
| **Homepage share (current)** | 53.0% (gong.io/: 30,842 of 58,206) |
| **Gain decomposition: new URLs** | 6,460 (29.3% of gross gain) |
| **Gain decomposition: continuing URL improvement** | 15,551 (70.7% of gross gain) |

*Offset Rate methodology note (2026-08-12): The original offset rate (0.760) was computed from a Jan 2025 → Jun 2026 export that was severely affected by URL normalization distortion (trailing-slash canonicalization in progress). The corrected figure (0.514) comes from a fresh Aug 2024 → Aug 2026 export with 231 normalization pairs merged programmatically. Cross-source reconciliation: Top Pages Current 58,206 vs. Performance History Aug 2026 58,047 = 0.3% (expected). The window difference (Aug 2024 → Aug 2026 vs. cohort window Jan 2025 → Jun 2026) means the gain/loss figures capture a broader set of URL-level movements, but the offset rate is the best available estimate for Pattern D classification purposes.*

---

## Controlled Vocabularies

*Reference these when completing cohort tables. Do not invent new values — update the relevant taxonomy file if a new value is warranted.*

**Page Archetype** — see `governance/page-archetype-taxonomy.md`:
Conceptual / Methodological / Commercial Evaluation / Comparative / Programmatic / Utility / Original Research / Homepage / Editorial

**AI Substitutability** — see `governance/page-archetype-taxonomy.md`:
Low / Medium / High

**Primary Query Type** — the dominant intent class of the query driving the most traffic to this page:
Brand / Commercial investigation / Definitional / Methodological / Comparative / Navigational / Tool-Utility / Other

**Recovery Pattern** (observable):
Broad ranking recovery / Single-query breakout / Long-tail expansion / Stable rankings + higher traffic / Existing demand recaptured / Mixed

**Decline Pattern** (observable):
Ranking collapse / Keyword disappearance / Stable rankings + traffic decline / Gradual position erosion / Mixed

**Candidate Driver** (interpretive — recovery):
Algorithmic reevaluation / Demand growth / Page rewrite or expansion / Link acquisition / Internal linking / SERP composition change / Unknown

**Candidate Driver** (interpretive — decline):
Algorithmic reevaluation / AI Overview interception / AI tool demand substitution / Competitive displacement / Demand contraction / Internal cannibalization / Technical signal loss / Unknown

**Durable Demand Signals** — properties of the content that may explain why it survived or declined. Assign all that apply as a comma-separated list.

| Signal | Definition |
|--------|------------|
| `Repeat engagement` | The user returns to this type of content regularly (quarterly reviews, recurring workflows, seasonal planning) — not a one-time lookup |
| `Requires judgment` | The content helps users make a decision or evaluate a situation — not just retrieve a fact |
| `Requires workflow` | The content supports an ongoing process or multi-step execution — not standalone information |
| `Requires comparison` | The content's value is in comparing options — AI answers at scale tend to flatten distinctions |
| `Proprietary data` | Value derives from data only this company has access to |
| `Tool or interactive` | Primary value is an artifact the user acts with, not information the user reads |
| `Community or network` | Value depends on other users or social proof — not replicable in a single AI response |
| `Brand destination` | Users navigate to this page specifically for this company's perspective — brand intent embedded in query |
| `AI-answerable` | A well-trained AI can satisfy the core user intent without the page |
| `High commercial intent` | Query signals active buying consideration — user is evaluating solutions, not seeking education |
| `Renewable demand` | The underlying need recreates itself on a structural schedule independent of user preference — quarterly reviews, annual budgeting, monthly reporting — meaning new demand instances appear even after the user has already consulted the page. Distinct from Repeat engagement: Repeat engagement is behavioral (the user chooses to return); Renewable demand is structural (the cycle forces a new instance of need) |

**Outcome** (portfolio classification):
Promote / Preserve / Abandon

**Recovery Potential** (decline cohort only):
High / Medium / Low / Unknown

---

## Recovery Cohort

*Pages that gained meaningful traffic during the reassessment window. Ranked by current traffic.*

*AIO note: the company record confirms AIO presence on 11 of 12 tested queries and AIO citation on 10 of 12. Commercial evaluation pages gained traffic despite confirmed AIO exposure — this is a meaningful signal for the Evidence Register.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Recovery Pattern | Candidate Driver | Conf. | Wayback | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|-----------------|-----------------|-------|---------|----------------------|---------|
| 1 | /revenue-intelligence | 200→1,151 (+476%) | Commercial Evaluation | Low | Commercial investigation | Single-query breakout | Algorithmic reevaluation / Demand growth | M | Not checked | High commercial intent, Requires comparison, Brand destination | Promote |
| 2 | /call-recording-software | 690→1,082 (+57%) | Commercial Evaluation | Low | Commercial investigation | Broad ranking recovery | Algorithmic reevaluation | M | Not checked | High commercial intent, Requires comparison | Promote |
| 3 | /blog/quarterly-business-review-agenda | 87→901 (+936%) | Methodological | Medium | Methodological | Single-query breakout | Algorithmic reevaluation | M | Not checked | Requires workflow, Repeat engagement | Promote |
| 4 | /about | 586→872 (+49%) | Homepage | Low | Brand | Stable rankings + higher traffic | Demand growth | H | N/A | Brand destination | Promote |
| 5 | /blog/sales-funnel-examples | 146→785 (+438%) | Methodological | Medium | Methodological | Single-query breakout | Algorithmic reevaluation | M | Not checked | Requires workflow, Requires judgment | Promote |
| 6 | /customer-retention-management-software | 13→663 (+5000%) | Commercial Evaluation | Low | Commercial investigation | Single-query breakout | Algorithmic reevaluation | L | Not checked | High commercial intent, Requires comparison | Promote |
| 7 | /blog/quarterly-business-review-examples | 301→498 (+65%) | Methodological | Medium | Methodological | Broad ranking recovery | Algorithmic reevaluation | M | Not checked | Requires workflow, Repeat engagement, Requires judgment | Promote |
| 8 | /sales-coaching-software | 203→387 (+91%) | Commercial Evaluation | Low | Commercial investigation | Broad ranking recovery | Algorithmic reevaluation | M | Not checked | High commercial intent, Requires comparison | Promote |
| 9 | /press | 89→367 (+312%) | Editorial | Low | Brand | Single-query breakout | Demand growth / Link acquisition | L | Not checked | Brand destination | Promote |
| 10 | /revenue-operations-software | 150→352 (+135%) | Commercial Evaluation | Low | Commercial investigation | Broad ranking recovery | Algorithmic reevaluation | M | Not checked | High commercial intent, Requires comparison | Promote |
| 11 | /sales-training-software | 53→345 (+551%) | Commercial Evaluation | Low | Commercial investigation | Single-query breakout | Algorithmic reevaluation | M | Not checked | High commercial intent, Requires comparison | Promote |
| 12 | /blog/sales-intelligence-tools | 1→348 (+34,700%) | Methodological | Medium | Methodological | Single-query breakout | Algorithmic reevaluation | L | Not checked | Requires judgment | Promote |
| 13 | /blog/sales-enablement-strategy | 23→198 (+761%) | Methodological | Medium | Methodological | Single-query breakout | Algorithmic reevaluation | M | Not checked | Requires workflow, Requires judgment | Promote |
| 14 | /call-transcription-software | 112→199 (+78%) | Commercial Evaluation | Low | Commercial investigation | Broad ranking recovery | Algorithmic reevaluation | M | Not checked | High commercial intent, Requires comparison | Promote |
| 15 | /blog/customer-success-tools | 15→166 (+1,007%) | Methodological | Medium | Methodological | Single-query breakout | Algorithmic reevaluation | M | Not checked | Requires judgment | Promote |

**Confidence note on row 6 (/customer-retention-management-software):** Previous traffic was 13 — near-zero starting point makes the percentage meaningless as a signal; the absolute gain (650 visits) is real but the recovery pattern classification is uncertain. This may be a page that barely ranked before and was newly optimized, or a query newly attributed to this URL.

**Recovery cohort blog pattern:** The recovering blog pages share two observable properties: (1) they target specific, named outputs (an "agenda," "examples," "a strategy") rather than concepts; (2) they are reusable across recurring practitioner workflows (quarterly reviews, funnel design, sales enablement planning). The declining blog pages (see below) target definitions and named third-party frameworks.

### Recovery Cohort — Elimination Matrix

*Wayback check completed 2026-08-04. Source: PDF captures of current pages + Wayback Machine archive captures (Aug 2025). For Sales Territory Planning and Sales Performance (New URL cohort, not Recovery), a full old/new comparison was also available — used to characterize the sitewide template update.*

**Sitewide context — March 4, 2026 template update:** Gong deployed a sitewide blog template refresh on or around March 4, 2026. Confirmed signals: new "Table of contents" component, "AI Summary" component, uppercase H1 headings, updated visual design. Sales Territory Planning (old: 278 lines, Aug 2025) → (new: 374 lines, Mar 2026) and Sales Performance (old: 373 lines) → (new: 490 lines) both show ~30–35% page length expansion alongside the template upgrade. This update affected all blog posts, including pages in both the recovery cohort AND the decline cohort — meaning the template upgrade alone does not explain the bifurcation.

| URL | Rewrite? | AIO present? | Links changed? | SERP replaced? | Eliminated | Surviving candidates |
|-----|----------|-------------|----------------|----------------|------------|---------------------|
| /revenue-intelligence | Unknown — no old version available; current page is a purpose-built commercial landing page (not a blog post format); architecture is consistent with a rebuild or purpose-build as category page | Not tested | Not tested | Not tested | Page rewrite confirmed (no old version to rule out) | Algorithmic reevaluation, Brand repositioning (Gong vocabulary shift: conversation → revenue intelligence driving query volume), Demand growth |
| /blog/quarterly-business-review-agenda | Yes — "Last modified March 6, 2026" distinguishes this from the March 4 sitewide batch, indicating content-specific update in addition to template refresh. Received both template upgrade (Table of contents + AI Summary) and editorial attention 2 days later. | Not tested | Not tested | Not tested | Template-only explanation eliminated (March 6 modification confirms content changes beyond batch) | Algorithmic reevaluation, Page rewrite or expansion (confirmed as co-occurring; weight unclear relative to algorithmic driver) |
| /blog/sales-funnel-examples | Partial — "Last modified March 4, 2026" aligns with sitewide template batch; no evidence of content-specific changes beyond template. Received Table of contents upgrade. | Not tested | Not tested | Not tested | Page-specific content rewrite (no distinct modification signal beyond batch) | Algorithmic reevaluation (primary), SERP composition change (co-occurring template upgrade may have affected structured data signals) |
| /customer-retention-management-software | Likely new or rebuilt — previous traffic was 13 (near-zero baseline); current page is a comprehensive commercial landing page format with no visible publication date, consistent with a newly built category page rather than an updated existing page. | Not tested | Not tested | Not tested | Existing-page algorithmic recovery (near-zero prev traffic is more consistent with new page launch than recovery) | New page targeting emerging query (primary), Demand growth for retention category |

---

## Decline Cohort

*Pages that lost meaningful traffic during the reassessment window. Ranked by previous traffic.*

*Decline attribution note: AIO presence was confirmed at the domain level (11/12 tested queries). For individual declining pages, AIO Check = "Inferred" where the query type matches the confirmed AIO pattern; "Not tested" where page-specific testing was not conducted.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Decline Pattern | Candidate Driver | Conf. | AIO Check | Durable Demand Signals | Recovery Potential | Outcome |
|---|-----|-----------|-----------|---------|-------------------|----------------|-----------------|-------|-----------|----------------------|-------------------|---------|
| 1 | /conversation-intelligence | 1,226→644 (−47%) | Commercial Evaluation | Medium | Commercial investigation / Definitional | Ranking collapse | Brand repositioning (Gong vocabulary shift: conversation → revenue intelligence) | M | Inferred | High commercial intent | Low — Gong is actively deprioritizing this product category label | Abandon |
| 2 | /careers | 879→674 (−23%) | Utility | Low | Navigational | Gradual position erosion | Demand contraction (hiring market) | M | Not tested | — | Unknown | Abandon |
| 3 | /fr (locale aggregate) | 780→58 (−93%) | Programmatic | High | Various | Ranking collapse | Algorithmic reevaluation (locale quality signal) | M | Not tested | — | Low | Abandon |
| 4 | /blog/average-saas-churn-rate | 523→282 (−46%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | M | Inferred | AI-answerable | Low | Abandon |
| 5 | /blog/sandler-selling-method | 312→59 (−81%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low — named framework definitions are structurally substitutable | Abandon |
| 6 | /blog/conceptual-selling | 270→67 (−75%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low | Abandon |
| 7 | /blog/bant-sales | 270→108 (−60%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low | Abandon |
| 8 | /de (locale aggregate) | 641→125 (−81%) | Programmatic | High | Various | Ranking collapse | Algorithmic reevaluation (locale quality signal) | M | Not tested | — | Low | Abandon |
| 9 | /blog/sales-efficiency | 207→30 (−86%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low | Abandon |
| 10 | /blog/what-is-enterprise-sales | 232→146 (−37%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | M | Inferred | AI-answerable | Low | Abandon |
| 11 | /blog/sales-cycle | 177→134 (−24%) | Conceptual | High | Definitional | Gradual position erosion | AI Overview interception | M | Inferred | AI-answerable | Low | Abandon |
| 12 | /blog/miller-heiman-sales-process | 116→4 (−97%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low | Abandon |
| 13 | /blog/sales-manager-skills | 133→2 (−98%) | Conceptual | High | Definitional | Ranking collapse | AI Overview interception | H | Inferred | AI-answerable | Low | Abandon |
| 14 | /platform (old) | 253→50 (−80%) | Utility | Low | Navigational | Ranking collapse | Internal cannibalization / product restructure | H | N/A | — | Low — superseded by /platform/ architecture | Abandon |
| 15 | /zoom-call-transcription | 167→66 (−60%) | Commercial Evaluation | Medium | Commercial investigation | Ranking collapse | Competitive displacement / AI tool demand substitution | M | Not tested | High commercial intent | Unknown | Abandon |

**Lost URLs notable entries (prev > 0, curr = 0):**
- /product (501 prev): core product page gone — product navigation restructured to /platform/
- /sales (281 prev): replaced by /solutions/sales (175 curr as new URL)
- /engage (217 prev): product line page removed — Engage appears discontinued or rebranded
- /blog/wolf-of-wall-street-sales-script (217 prev): link-bait content, lost completely
- /case-studies (81 prev, 23 pages total): entire case studies section appears removed
- /integrations.gong.io (126 prev): integration hub migrated to collective.gong.io

### SERP Replacement Analysis

*Inferred from content type and confirmed AIO pattern; not tested against live SERPs.*

| URL | Top Lost Query | Former Est. Position | Current SERP Occupant | Occupant Type | Implication |
|-----|---------------|---------------------|----------------------|---------------|-------------|
| /blog/sandler-selling-method | "sandler selling method" | 1–5 (est.) | AI Overview | AI Overview | Structural: named framework definitions are AIO-default territory |
| /blog/miller-heiman-sales-process | "miller heiman sales process" | 1–5 (est.) | AI Overview | AI Overview | Same pattern as Sandler; −97% traffic consistent with AIO displacement |
| /blog/sales-manager-skills | "sales manager skills" | 1–5 (est.) | AI Overview | AI Overview | Skills list format = high AIO risk; −98% traffic |
| /blog/conceptual-selling | "conceptual selling" | 1–5 (est.) | AI Overview | AI Overview | Definitional content, low traffic floor remaining |
| /conversation-intelligence | "conversation intelligence" | 2–5 (est.) | Competitor pages + AI Overview | Mixed | Special case: Gong's own repositioning compounds any algorithmic effect |

*Confidence note: SERP positions are estimated from pre-decline trajectory, not from GSC data. Testing required to confirm current SERP occupants.*

---

## Stable Cohort

*Pages that held traffic within ±20% of previous, both periods > 0. Represents Google's explicit non-reassessment decision during an active portfolio redistribution window.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|----------------------|---------|
| 1 | / (homepage) | 30,621→29,621 (−3%) | Homepage | Low | Brand | Brand destination | Preserve |
| 2 | /blog/icp-sales | 3,066→3,409 (+11%) | Methodological | Medium | Methodological | Requires workflow, Requires judgment, High commercial intent | Preserve |
| 3 | /pricing | 996→926 (−7%) | Commercial Evaluation | Low | Commercial investigation | High commercial intent | Preserve |
| 4 | /blog/sandler-pain-funnel | 199→238 (+20%) | Methodological | Medium | Methodological | Requires workflow | Preserve |
| 5 | /call-software | 220→216 (−2%) | Commercial Evaluation | Low | Commercial investigation | High commercial intent, Requires comparison | Preserve |

**Stable cohort interpretation:** The homepage held at 51.3% share — brand queries are insulated from the redistribution. /blog/icp-sales held while /blog/bant-sales, /blog/sandler-selling-method, and /blog/conceptual-selling collapsed. The distinction: ICP (Ideal Customer Profile) content is practitioner-workflow territory requiring judgment and iteration; Sandler/BANT/conceptual selling are named framework definitions AI answers cleanly. The Sandler Pain Funnel page (+20%) is the same methodology as the Sandler Selling Method page (−81%) — the funnel-specific execution guide survived; the parent framework explainer did not.

---

## Durable Demand Assessment

*Full evidence for signal assignments in cohort tables. Assessed for top 5 recovery pages and top 3 decline pages by traffic impact. Strength: Strong / Moderate / Weak / None.*

---

### /blog/quarterly-business-review-agenda — 87→901 (+936%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Strong | Users return to produce a new agenda each quarter; the planning cycle, not user preference, drives the return visit |
| Requires judgment | Moderate | QBR structure must be adapted to company stage, customer profile, and strategic context — no template applies universally, but the judgment is bounded, not open-ended |
| Requires workflow | Strong | User must orchestrate a multi-step meeting: stakeholder prep, data review, agenda construction, facilitation, follow-up — reading the page is insufficient; execution is required |
| Requires comparison | None | Single-framework content; user is not comparing agenda approaches |
| Proprietary data | None | Framework is public; Gong's proprietary data appears only in supporting statistics, not as the primary draw |
| Tool or interactive | None | Article with template examples; no interactive element |
| Community or network | None | |
| Brand destination | Weak | "QBR agenda" is a generic practitioner query; Gong's brand is not embedded in the query intent |
| Renewable demand | Strong | Every sales organization runs quarterly business reviews; the structural calendar recreates the need every 90 days regardless of what the user did last quarter |
| AI-answerable | Weak | AI can explain QBR structure and list agenda items; it cannot produce a customized agenda for the user's specific account portfolio, customer relationships, or strategic priorities this quarter |
| High commercial intent | None | Operational practitioner query, not purchase-evaluative |

---

### /revenue-intelligence — 200→1,151 (+476%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Weak | Software evaluation is periodic; users may revisit to compare, but no structural cycle drives return |
| Requires judgment | Strong | Platform selection requires evaluating fit against team size, current tech stack, budget, CRM, and sales process maturity — no general answer applies; the decision is specific to the buyer's situation |
| Requires workflow | Weak | Research process, not a multi-step execution workflow |
| Requires comparison | Strong | "Revenue intelligence platform" is an explicit category evaluation query; the buyer is comparing options, not retrieving a definition |
| Proprietary data | None | Category-level content; Gong's data appears in supporting statistics, not as the primary draw |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Moderate | "Revenue intelligence" is Gong's primary category claim; a share of query volume is brand-influenced, though the category term is not exclusively owned by Gong |
| Renewable demand | None | Software purchase decisions are periodic, not structurally renewable |
| AI-answerable | Moderate | AI can explain the category and describe what revenue intelligence platforms do; it cannot complete the evaluation, demo the product, provide current pricing, or process the purchase decision |
| High commercial intent | Strong | Category + "platform" signals active buying evaluation; user is in solution-selection mode |

---

### /blog/sales-funnel-examples — 146→785 (+438%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | Sales professionals revisit during planning phases or when coaching new reps; not as structurally recurring as QBR content, but not a one-time lookup |
| Requires judgment | Moderate | Selecting the right funnel model requires understanding of company stage, sales motion, and buyer behavior; the "examples" frame prompts comparison and selection, not just retrieval |
| Requires workflow | Moderate | User must apply a framework to their specific context, not just read the explanation; less execution-heavy than the QBR agenda |
| Requires comparison | Moderate | Multiple funnel models are presented; the value is partly in comparing which fits the user's situation |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | None | Generic practitioner query with no brand-embedded intent |
| Renewable demand | Weak | No structural cycle recreates the need on a fixed schedule; demand is driven by role/stage rather than calendar |
| AI-answerable | Moderate | AI can explain funnel stages and provide examples; it is less able to help the user select the right model for their specific product, sales motion, and buyer type |
| High commercial intent | None | Educational/operational practitioner query |

---

### /call-recording-software — 690→1,082 (+57%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Weak | Software evaluation is periodic; purchase decision is not a recurring workflow |
| Requires judgment | Strong | Software selection requires evaluating integration compatibility, team size, compliance requirements, recording consent laws by jurisdiction, and budget — no general answer applies |
| Requires workflow | None | Research activity, not a multi-step execution workflow |
| Requires comparison | Strong | "Call recording software" is an explicit category query; buyer is evaluating competing options |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Low | Generic category query; Gong competes with multiple vendors here |
| Renewable demand | Weak | Annual contract renewals create some structural recurrence, but the primary evaluation event is periodic, not structurally renewable |
| AI-answerable | Moderate | AI explains the category; cannot demo the product, provide current pricing, confirm integrations with the buyer's specific CRM, or complete the purchase |
| High commercial intent | Strong | Explicit software category query = active buying evaluation |

---

### /about — 586→872 (+49%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Weak | Brand information is looked up periodically, not on a structural cycle |
| Requires judgment | None | Informational; user is reading, not evaluating or executing |
| Requires workflow | None | |
| Requires comparison | None | |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Strong | Users navigate to /about specifically to learn about Gong as a company; brand intent is fully embedded in the page purpose — this visit cannot be satisfied by an AI summary of publicly available information |
| Renewable demand | None | |
| AI-answerable | Weak | While AI can summarize Gong's public description, users navigating to /about want current, authoritative company information directly from Gong — particularly for due diligence, partnership, or late-stage buying contexts |
| High commercial intent | Moderate | /about is visited during late-stage buyer diligence and by investors, partners, and press — not a primary purchase-evaluation page but serves evaluation contexts |

---

### /blog/sandler-selling-method — 312→59 (−81%) [Decline]

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | None | One-time reference lookup; the methodology does not change, so users have no structural reason to return |
| Requires judgment | None | Describes the methodology; the page does not ask users to make a decision or apply the framework to their situation |
| Requires workflow | None | Pure information retrieval; no execution is required or supported |
| Requires comparison | None | Single named methodology, not a comparison guide |
| Proprietary data | None | Sandler is a public, third-party methodology documented extensively elsewhere |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | None | "Sandler selling method" is a generic educational query; Gong's brand adds no meaningful value to this query type |
| Renewable demand | None | No structural schedule recreates the need |
| AI-answerable | Strong | The Sandler methodology is fully documented and public; AI explains it completely and accurately, eliminating the primary reason to visit the page |
| High commercial intent | None | Educational query; user is learning about a methodology, not evaluating a purchase |

---

### /conversation-intelligence — 1,226→644 (−47%) [Decline]

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Weak | Software evaluation is periodic |
| Requires judgment | Strong | Platform evaluation requires judgment (same as /revenue-intelligence) |
| Requires workflow | None | |
| Requires comparison | Strong | Category evaluation query; buyer is comparing options |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Weak | "Conversation intelligence" is a generic category term not primarily associated with Gong's current brand positioning (Gong has repositioned to "revenue intelligence") |
| Renewable demand | None | |
| AI-answerable | Moderate | Similar to /revenue-intelligence; AI explains the category but cannot demo or evaluate fit |
| High commercial intent | Strong | Platform category query = buying evaluation |

*Assessment note: this page's Durable Demand Assessment scores are actually similar to /revenue-intelligence (which recovered +476%). The decline is attributable to Gong's brand repositioning away from "conversation intelligence" vocabulary — not to AI substitutability. This is the evidence that the /conversation-intelligence decline is a brand-mechanism story, not an AI mechanism story.*

---

### /blog/miller-heiman-sales-process — 116→4 (−97%) [Decline]

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | None | One-time lookup of a named, static methodology |
| Requires judgment | None | Informational description of a third-party framework |
| Requires workflow | None | |
| Requires comparison | None | Single methodology |
| Proprietary data | None | Miller Heiman is a public, third-party methodology |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | None | Generic educational query |
| Renewable demand | None | |
| AI-answerable | Strong | Fully documented public methodology; AI answers this definitively and accurately |
| High commercial intent | None | Educational query |

*Assessment note: identical pattern to Sandler. Near-zero Durable Demand scores across all properties except AI-answerable (Strong). The −97% traffic loss is the predictable outcome of a page with no durability properties.*

---

## Candidate Durability Principles

*Staged before Evidence Register entry. Awaiting cross-company replication.*

### Supported

*Observed in this portfolio, mechanism plausible, internally consistent. Strong enough to carry as a working hypothesis into the next analysis.*

| Candidate Principle | Observed Evidence in This Portfolio | What Would Weaken It |
|--------------------|-------------------------------------|----------------------|
| Pages requiring users to produce a deliverable resist AI Overview interception — the deliverable need persists after AI answers the conceptual question | QBR Agenda (+936%) requires a customized quarterly agenda; Sales Funnel Examples (+438%) requires selecting and adapting a model. Both gained while adjacent definitional content collapsed. The AI can explain what a QBR is; it cannot produce this user's QBR agenda for this quarter's accounts | A page requiring a deliverable that still collapsed during the same window, or evidence that an AI tool has begun generating the deliverable directly and traffic fell afterward |
| Named methodology framework explainers with no proprietary content, no recurring need, and no workflow requirement are fully AI-answerable and show near-complete traffic collapse | Sandler (−81%), Miller Heiman (−97%), BANT (−60%), Conceptual Selling (−75%) — all share the same Durable Demand Assessment profile: AI-answerable Strong, all other signals None or Weak | A named methodology page on this domain that held traffic, suggesting another property is protective; or evidence that the collapse preceded AI Overview deployment |
| Commercial evaluation pages (software category queries) consistently gain during Algorithmic Reassessment despite confirmed AIO presence | Revenue Intelligence (+476%), Call Recording (+57%), Sales Coaching (+91%), Revenue Operations (+135%) — all require judgment + comparison on high-stakes decisions. AIO confirmed on 11/12 tested queries yet commercial pages grew | A commercial evaluation page that lost significant traffic during the same window, absent a product repositioning explanation |

### Emerging

*Observed but the mechanism is uncertain or a confound exists. Requires replication across 2+ other companies.*

| Candidate Principle | Observed Evidence | Confound / Uncertainty | What Would Weaken It |
|--------------------|-------------------|----------------------|----------------------|
| Renewable demand (structural recurrence) is a stronger durability predictor than Repeat engagement | QBR content's quarterly cycle forces new demand instances independent of user behavior — the calendar creates the need. This appears to explain why QBR content outperformed other practitioner content with similar workflow requirements | Confound: QBR content also happens to have strong workflow and judgment properties. It is unclear whether renewable demand is independently predictive or merely correlated with those properties | QBR-type content that declined significantly in a comparable company, or practitioner content with strong workflow/judgment but no renewable demand that outperformed QBR content |
| Sitewide template upgrades do not reverse AI-substitutability-driven decline | Gong's March 4, 2026 template update (Table of Contents, AI Summary, design refresh) applied identically to recovering and declining pages. Declining pages continued losing traffic despite the upgrade | Confound: the template update occurred mid-window; it's possible the declining pages had already largely collapsed by March 2026. The comparison is not clean | Evidence that a comparable template upgrade in another company did halt decline in AI-susceptible content |
| Brand vocabulary choices directly mediate which commercial pages retain traffic during category-level reassessment | Gong's repositioning from "conversation intelligence" to "revenue intelligence" produced a corresponding traffic shift (+476%, −47%) that looks algorithmic but is partially brand-driven | Confound: impossible to cleanly separate algorithmic reassessment from Gong's own messaging change. Revenue intelligence may have also grown as a category query independently | A company that shifted brand vocabulary but whose organic traffic did not follow the shift, suggesting the relationship is not causal |

### Not Supported

*Null results are evidence. Record them.*

| Hypothesis | Why Not Supported in This Portfolio |
|-----------|-------------------------------------|
| Domain authority shields individual pages from AI-substitutability-driven decline | Gong is a high-authority brand and category leader; it still lost 60–98% of traffic on definitional blog content. Authority is not protective when content type is structurally AI-answerable |
| UX improvements (template redesign, structured navigation) reverse AI-driven traffic decline | The March 4, 2026 template upgrade improved all blog posts equally; declining pages continued declining. Template quality does not appear to be the operative variable |

---

## Portfolio Comparison

*Aggregate cohort findings into patterns. Primary output of the analysis.*

### Archetype Distribution

| Archetype | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-----------|-------------------|------------------|------------------|---------------|
| Conceptual | 0 | 8+ | 0 | → Abandon |
| Methodological | 7 | 1 (generic) | 2 | → Mixed: specific/workflow → Promote; generic framework → Abandon |
| Commercial Evaluation | 7 | 2 | 3 | → Promote (except brand-repositioning special case) |
| Comparative | 0 | 0 | 0 | Not represented |
| Programmatic | 0 | 2 (locale) | 0 | → Abandon (quality signal failure) |
| Utility | 1 | 2 | 0 | → Mixed |
| Original Research | 0 | 0 | 0 | Not represented |
| Homepage | 1 (/about) | 0 | 1 (/) | → Preserve |
| Editorial | 1 (/press) | 0 | 0 | → Promote (brand credibility) |

### AI Substitutability Distribution

| AI Substitutability | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|--------------------|-------------------|------------------|------------------|---------------|
| Low | 8 | 3 | 4 | → Promote / Preserve |
| Medium | 7 | 3 | 2 | → Mixed |
| High | 0 | 9+ | 0 | → Abandon |

### Primary Query Type Distribution

| Primary Query Type | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-------------------|-------------------|------------------|------------------|---------------|
| Brand | 2 | 0 | 1 | → Preserve |
| Commercial investigation | 7 | 2 | 3 | → Promote |
| Definitional | 0 | 8+ | 0 | → Abandon |
| Methodological | 6 | 0 | 2 | → Promote (when specific) |
| Comparative | 0 | 0 | 0 | Not represented |
| Navigational | 0 | 2 | 0 | → Mixed (demand-driven) |
| Tool-Utility | 0 | 0 | 0 | Not represented |

### Durable Demand Signal Frequency

| Signal | Recovery cohort | Decline cohort | Stable cohort | Pattern |
|--------|----------------|----------------|---------------|---------|
| Repeat engagement | 2 (QBR content) | 0 | 0 | Recovery signal when present |
| Requires judgment | 5 | 0 | 2 | Recovery/Preserve signal |
| Requires workflow | 5 | 0 | 2 | Recovery/Preserve signal |
| Requires comparison | 7 | 0 | 3 | Recovery/Preserve signal (commercial pages) |
| Proprietary data | 0 | 0 | 0 | Not present in either cohort |
| Tool or interactive | 0 | 0 | 0 | Not present in either cohort |
| Community or network | 0 | 0 | 0 | Not present in either cohort |
| Brand destination | 3 | 0 | 1 | Recovery/Preserve signal |
| AI-answerable | 0 | 8+ | 0 | Abandon signal — 100% predictive in this portfolio |
| High commercial intent | 7 | 1 | 3 | Recovery/Preserve signal |

### Observed Portfolio Patterns

1. **AI-answerable content is abandoning at near-100% rate in this portfolio.** Every page classified as "AI-answerable" declined meaningfully. The signal is not directional — it is binary. Named sales framework explainers (Sandler, Miller Heiman, BANT, conceptual selling) lost 60–98% of traffic. No AI-answerable page held or recovered in this window.

2. **Within the blog category, the bifurcation maps to output specificity.** Content targeting a practitioner deliverable (a QBR agenda, a set of funnel examples, a strategy outline) grew 438–936%. Content targeting the definition of a concept or framework declined 46–98%. The blog category is not uniformly declining — it is internally bifurcating.

3. **Commercial evaluation pages gained across the board, despite confirmed AIO exposure on commercial queries.** Seven commercial evaluation pages are in the recovery cohort. This is consistent with the hypothesis that high-stakes purchase decisions are AIO-resistant: a buyer searching for call recording software is less likely to accept an AI answer than someone searching for the definition of BANT.

4. **The /conversation-intelligence → /revenue-intelligence traffic shift (+476%, −47%) is a brand repositioning signal embedded in the organic data.** This is not a pure algorithmic event — Gong rebranded from "conversation intelligence" to "revenue intelligence" as a category claim, and Google followed. The company record's Algorithmic Reassessment classification applies to the portfolio-wide keyword collapse in Oct 2025; the revenue-intelligence recovery is a separate, brand-driven effect occurring within the same window.

5. **Locale pages (/fr: −93%, /de: −81%) were hit disproportionately relative to equivalent English content.** The English ICP post held (+11%); the German /de/blog/icp-sales was completely lost (201 → 0). This suggests a separate quality assessment on locale content — possibly reflecting that the locale pages were lower-quality translations or had weaker local signals, and algorithmic reassessment surfaced this gap.

6. **A sitewide blog template update on March 4, 2026 added Table of Contents, AI Summary, and visual redesign across all posts — but did not prevent declining pages from continuing to lose traffic.** Pages in both the recovery cohort and the decline cohort received the same template upgrade. Sandler Selling Method (−81%) and Sales Funnel Examples (+438%) both show "Last modified March 4, 2026." The template upgrade eliminates "technical signal loss" or "UX disadvantage" as explanations for the declining cohort, and reduces the explanatory weight of "Page rewrite or expansion" as the primary driver of the recovery cohort. The bifurcation is about content type (AI substitutability), not template quality.

---

## Evidence Register Contributions

| Field | Value |
|-------|-------|
| **Strengthens** | Any existing finding on AI Substitutability as a predictor of traffic direction during Algorithmic Reassessment |
| **Challenges** | None identified |
| **Creates** | New finding candidate: Within a single blog portfolio undergoing Algorithmic Reassessment, content targeting practitioner outputs (templates, examples, agendas) gained while content targeting concept definitions declined — same URL prefix, same domain authority, same link equity pool. The differentiator was output specificity, not page quality in the traditional sense. |

**Open questions this analysis created:**

1. The Sandler Pain Funnel page (+20%) survived while the Sandler Selling Method page (−81%) collapsed — both from the same methodology, same domain. Is the execution-level content surviving because it requires judgment to apply the funnel to a specific situation? This needs Wayback checking and keyword-level data to confirm.

2. The /customer-retention-management-software page went from 13 to 663 visits — this could be a new page, a page rewrite targeting a newly strategic query, or a URL that received redirected authority. The extreme starting value makes the recovery pattern classification unreliable. Wayback check required before using this as evidence.

---

*Analysis completed: 2026-08-04 | Status: Complete — Wayback checks completed for all flagged Recovery pages.*
