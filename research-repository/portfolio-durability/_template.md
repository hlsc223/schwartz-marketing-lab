# Portfolio Durability Analysis — [Company Name]

<!--
Save to: portfolio-durability/company-name.md
Link bidirectionally: add this file to the Related Documents section of the company record.
Use for companies classified as Algorithmic Reassessment or any comparable portfolio-wide redistribution event.
This document holds structured page-level findings. Company record holds company-level findings. Do not duplicate narrative — cross-reference instead.
Optimize for structured fields. Every time you want to write a paragraph, ask: could this be a field? If yes, make it a field.
-->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | |
| **Linked Company Record** | `company-records/company-name.md` |
| **Reassessment Window** | YYYY-MM to YYYY-MM |
| **Analysis Date** | YYYY-MM-DD |
| **Status** | *(Draft / Complete)* |
| **Primary Mechanism (from record)** | *(must match linked record)* |
| **Methodology Version** | V2.4 |

---

## Reassessment Window

| Field | Value |
|-------|-------|
| **Window Start** | YYYY-MM |
| **Window End** | YYYY-MM |
| **Window Identification Method** | *(Performance History trough / Named update alignment / Top Pages inflection / Other)* |
| **Top Pages Export Dates** | Previous: YYYY-MM / Current: YYYY-MM |
| **Keywords Export Dates** | Previous: YYYY-MM / Current: YYYY-MM |
| **Trailing-Slash Normalization Applied** | *(Yes / No / N/A)* |
| **Window caveats** | *(Export date mismatches, normalization artifacts, coverage gaps — or "None")* |

---

## Portfolio Overview

| Metric | Value |
|--------|-------|
| Total pages in export | |
| Recovery cohort size | |
| Decline cohort size | |
| Stable cohort size | *(optional — define threshold or "Not analyzed")* |
| Recovery cohort decision rule | *(e.g., "≥2% of gross gain OR within top 80% of gain by volume")* |
| Decline cohort decision rule | *(e.g., "≥2% of gross loss OR within top 80% of loss by volume")* |
| Stable threshold | *(e.g., "Traffic change −10% to +10%" — or "Not defined")* |
| Archetypes observed (both cohorts) | *(list all archetype values present)* |

---

## Controlled Vocabularies

*Full definitions in `governance/page-archetype-taxonomy.md` and `governance/mechanism-taxonomy.md`. Do not reproduce definitions here. Value sets only:*

**Page Archetype:** Conceptual / Methodological / Commercial Evaluation / Comparative / Programmatic / Utility / Original Research / Homepage / Editorial

**AI Substitutability:** Low / Medium / High

**Primary Query Type:** Brand / Commercial investigation / Definitional / Methodological / Comparative / Navigational / Tool-Utility / Other

**Recovery Pattern:** Broad ranking recovery / Single-query breakout / Long-tail expansion / Stable rankings + higher traffic / Existing demand recaptured / Mixed

**Decline Pattern:** Ranking collapse / Keyword disappearance / Stable rankings + traffic decline / Gradual position erosion / Mixed

**Candidate Driver (recovery):** Algorithmic reevaluation / Demand growth / Page rewrite or expansion / Link acquisition / Internal linking / SERP composition change / Unknown

**Candidate Driver (decline):** Algorithmic reevaluation / AI Overview interception / AI tool demand substitution / Competitive displacement / Demand contraction / Internal cannibalization / Technical signal loss / Unknown

**Durable Demand Signals (comma-separated in cohort tables):** Repeat engagement / Requires judgment / Requires workflow / Requires comparison / Proprietary data / Tool or interactive / Community or network / Brand destination / AI-answerable / High commercial intent / Renewable demand

**Outcome:** Promote / Preserve / Abandon — Promote = material gain; Preserve = held within stable threshold; Abandon = material loss

**Recovery Potential (decline cohort only):** High / Medium / Low / Unknown

---

## Recovery Cohort

*Pages that gained meaningful traffic during the reassessment window. Classify each page using the controlled vocabularies above.*

*AIO note: if a recovery page also shows AIO presence on its top query, note it — AIO resistance is a meaningful signal.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Recovery Pattern | Candidate Driver | Conf. | Wayback | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|-----------------|-----------------|-------|---------|----------------------|---------|
| 1 | | | | | | | | H/M/L | Checked / No / N/A | | Promote |
| 2 | | | | | | | | | | | |
| 3 | | | | | | | | | | | |
| 4 | | | | | | | | | | | |
| 5 | | | | | | | | | | | |

*Add rows as needed. Minimum: top 5 pages by traffic gain. Wayback required when "Page rewrite or expansion" is a candidate driver.*

### Recovery Cohort — Elimination Matrix

*For each page where a Wayback comparison was completed. Summarizes what was eliminated, what survives as a candidate explanation.*

| URL | Rewrite? | AIO present? | Links changed? | SERP replaced? | Eliminated | Surviving candidates |
|-----|----------|-------------|----------------|----------------|------------|---------------------|
| | Yes/No/Unknown | Yes/No/Not tested | Yes/No/Not tested | Yes/No/Not tested | | |

---

## Decline Cohort

*Pages that lost meaningful traffic during the reassessment window. Observed decline cohort only — not a census of all declining pages.*

*Decline attribution is methodologically harder than recovery attribution. Distinguish observable patterns from candidate drivers. AIO susceptibility check required for every page.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Decline Pattern | Candidate Driver | Conf. | AIO Check | Durable Demand Signals | Recovery Potential | Outcome |
|---|-----|-----------|-----------|---------|-------------------|----------------|-----------------|-------|-----------|----------------------|-------------------|---------|
| 1 | | | | | | | | H/M/L | Yes/No/Not tested | | H/M/L/Unknown | Abandon |
| 2 | | | | | | | | | | | | |
| 3 | | | | | | | | | | | | |
| 4 | | | | | | | | | | | | |
| 5 | | | | | | | | | | | | |

*Add rows as needed. Minimum: top 5 pages by traffic loss.*

### SERP Replacement Analysis

*For top declining pages: what currently holds the SERP position this page used to hold? This is the most diagnostic check for distinguishing algorithmic quality reassessment from SERP format cannibalization from competitive displacement.*

| URL | Top Lost Query | Former Est. Position | Current SERP Occupant | Occupant Type | Implication |
|-----|---------------|---------------------|----------------------|---------------|-------------|
| | | | | AI Overview / Competitor page / SERP feature / Same page lower / Unknown | |

---

## Stable Cohort *(optional)*

*Pages that held traffic within the defined stable threshold. These pages are among the purest durability signals in the repository — Google explicitly chose not to reassess them during a period of active portfolio redistribution.*

*Complete this cohort when the stable threshold has been formally defined and the data supports it.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|----------------------|---------|
| 1 | | | | | | | Preserve |
| 2 | | | | | | | Preserve |

---

## Durable Demand Assessment

*Structured scorecard for top pages in each cohort. Complete for at least the top 3 recovery pages and top 3 decline pages by traffic impact. This section directly measures the Durable Demand Framework against observed page behavior. Over time, patterns across companies become the empirical basis for Evidence Register entries and ultimately transferable principles.*

**Strength scale:** Strong / Moderate / Weak / None

**Scoring rule:** Score all 11 rows for every assessed page. Write evidence narrative only when: (1) the signal is Strong or Moderate; (2) the result is unexpected for this page's archetype and query type; or (3) the finding materially changes the mechanism diagnosis. Rows where the signal is Weak or None and the result is predictable for the archetype need a score only — no narrative required.

**Evidence quality:** Narrative must explain *why* a score was assigned — not restate the label. "None because this is a definitional page" is not evidence. "No structural schedule recreates the need; users look this up once" is evidence.

A blank Evidence cell = signal not yet assessed. A score with no narrative = predictable result, no diagnostic value beyond the score itself.

*Copy the block below for each page assessed.*

---

### [Page URL] — [traffic change, e.g. 87→901, +936%]

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | | |
| Requires judgment | | |
| Requires workflow | | |
| Requires comparison | | |
| Proprietary data | | |
| Tool or interactive | | |
| Community or network | | |
| Brand destination | | |
| Renewable demand | | |
| AI-answerable | | |
| High commercial intent | | |

---

## Candidate Durability Principles

*Principles emerging from this analysis, staged before Evidence Register entry. Not yet registered — these await cross-company replication before becoming general claims. Each candidate principle must: (1) be falsifiable, (2) name the observed evidence it rests on, (3) state what would weaken or contradict it.*

*The pipeline: Observation → Candidate Principle (here) → Replicated across companies → Evidence Register entry → Client guidance.*

### Supported

*Observed in this portfolio, mechanism plausible, consistent with prior evidence if any. Strong enough to carry forward as a working hypothesis.*

| Candidate Principle | Observed Evidence in This Portfolio | What Would Weaken It |
|--------------------|-------------------------------------|----------------------|
| | | |

### Emerging

*Observed in this portfolio but the mechanism is uncertain or the observation could be explained by a confound. Requires replication before treating as a principle.*

| Candidate Principle | Observed Evidence | Confound / Uncertainty | What Would Weaken It |
|--------------------|-------------------|----------------------|----------------------|
| | | | |

### Not Supported

*Hypotheses that this analysis had the opportunity to test and found insufficient support for. Record the null result — it is evidence.*

| Hypothesis | Why Not Supported in This Portfolio |
|-----------|-------------------------------------|
| | |

---

## Portfolio Comparison

*Aggregate cohort findings into patterns. Populate after all cohorts are complete. This is the primary output of the analysis — what Google chose to promote, preserve, or abandon across this portfolio.*

### Archetype Distribution

| Archetype | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-----------|-------------------|------------------|------------------|---------------|
| Conceptual | | | | |
| Methodological | | | | |
| Commercial Evaluation | | | | |
| Comparative | | | | |
| Programmatic | | | | |
| Utility | | | | |
| Original Research | | | | |
| Homepage | | | | |
| Editorial / Other | | | | |

### AI Substitutability Distribution

| AI Substitutability | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|--------------------|-------------------|------------------|------------------|---------------|
| Low | | | | |
| Medium | | | | |
| High | | | | |

### Primary Query Type Distribution

| Primary Query Type | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-------------------|-------------------|------------------|------------------|---------------|
| Brand | | | | |
| Commercial investigation | | | | |
| Definitional | | | | |
| Methodological | | | | |
| Comparative | | | | |
| Navigational | | | | |
| Tool-Utility | | | | |

### Durable Demand Signal Frequency

*Which signals appeared most often in the recovery cohort? Which in the decline cohort? This is the bridge between observation and the Durable Demand Framework.*

| Signal | Recovery cohort | Decline cohort | Stable cohort | Pattern |
|--------|----------------|----------------|---------------|---------|
| Repeat engagement | | | | |
| Requires judgment | | | | |
| Requires workflow | | | | |
| Requires comparison | | | | |
| Proprietary data | | | | |
| Tool or interactive | | | | |
| Community or network | | | | |
| Brand destination | | | | |
| AI-answerable | | | | |
| High commercial intent | | | | |

### Observed Portfolio Patterns

*(3–5 specific, observable statements about what this portfolio analysis found. State what the data showed — not causal claims. Each statement that holds across multiple companies eventually becomes a candidate Evidence Register finding.)*

1.
2.
3.
4.
5.

---

## Evidence Register Contributions

| Field | Value |
|-------|-------|
| **Strengthens** | *(Evidence IDs — or "None")* |
| **Challenges** | *(Evidence IDs — or "None")* |
| **Creates** | *(Evidence IDs — add new entries to evidence-register.md before marking this analysis Complete)* |

**Open questions this analysis created:**

1.
2.

---

*Analysis completed: YYYY-MM-DD | Status: Draft / Complete*
