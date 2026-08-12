# Schwartz Marketing Lab — Organic Growth Research Repository

**Start here:** [`RESEARCH-CHARTER.md`](RESEARCH-CHARTER.md) — mission, vision, objectives, north star questions, guiding principles, and evidence standards. Every field and workflow in this repository is traceable to that document.

**Document authority:**
- `RESEARCH-CHARTER.md` — authoritative for mission, vision, objectives, and north star questions
- `README.md` (this file) — authoritative for schema, field definitions, operating procedures, and review cadences
- `archive/legacy-operating-model.md` — retired; active operational content migrated to this file as of V2.4

---

**Sample representativeness:** This is a purposive evidence library, not a statistically representative sample. Companies are selected to maximize mechanism diversity and case quality — not to reflect the distribution of outcomes across B2B SaaS. Pattern frequency within this repository does not imply prevalence in the market. Use individual records as evidence for specific mechanisms; do not extrapolate base rates or outcome distributions from aggregate counts.

---

## Structure

```
research-repository/
  RESEARCH-CHARTER.md      — mission, vision, objectives, research pipeline, evidence standards (start here)
  README.md                — this file: navigation, schema reference, operating procedures
  evidence-register.md     — accumulating evidence findings, linked to Durable Demand Framework
  _template.md             — standard format for new company records (V2.4)
  _index.xlsx              — retrieval index (Index, Legend, Trajectory Reference tabs)
  company-records/         — one markdown file per company
  portfolio-durability/    — Portfolio Durability Analyses: companion page-level analyses for companies with meaningful portfolio redistribution events (one file per company)
    _template.md           — structured template: recovery cohort, decline cohort, stable cohort, Durable Demand Signals, portfolio comparison
  comparison-briefs/       — cross-company pattern analysis documents
  governance/              — Controlled vocabularies, classification taxonomies, Consistency Review artifacts
    mechanism-taxonomy.md       — authoritative controlled vocabulary for Primary Mechanism and Contributing Mechanisms (V2.4)
    page-archetype-taxonomy.md  — Content Archetype and AI Substitutability classification (V1.0)
    ai-discoverability-methodology.md — AI visibility measurement methodology and threshold changelog
  source-analyses/         — v0.1 calculation handoff artifacts and pre-migration analysis files (not authoritative records)
  archive/                 — superseded documents; kept for reference only
    legacy-synthesis-matrix.md       — pre-Evidence-Register synthesis; frozen 2026-08-04
    legacy-comparison-briefs/        — comparison briefs extracted from phase3-deep-dives.md; not yet reformatted
    legacy-operating-model.md        — operational procedures from prior OPERATING-MODEL.md; active content migrated to README
  skills/                  — analysis skill definitions and reference files
```

**External dependencies (intentional):** This repository references documents in the parent project folder that are not stored inside `research-repository/`. These dependencies are deliberate:

- `phase3-deep-dives.md` — source of truth for all original deep dive analysis; company records are migrated from here
- `research-operating-manual-v1.md` — methodology documentation for the original 118-company study (Pass 1/2/3 procedures, company selection, deep dive template)
- Scrunch AI discoverability source documents — referenced by records with AI Discoverability data

These files remain in the parent project folder because they predate the repository and are not specific to its governance function. Do not relocate them — the comparison briefs in `comparison-briefs/` include an extraction header pointing back to `phase3-deep-dives.md` as the source of truth until each brief is reformatted to the repository template.

---

## Research Object Types

**Company records** (`company-records/`) answer: *What happened to this company?*
One record per company. The authoritative source for all company-level evidence.

**Portfolio Durability Analyses** (`portfolio-durability/`) answer: *How did this company's page-level portfolio shift?*
Companion document for companies with a meaningful portfolio redistribution event. Required for Algorithmic Reassessment records; recommended for any record where page-level durability or fragility is a key finding.

**Comparison briefs** (`comparison-briefs/`) answer: *What pattern emerges across multiple companies?*
Cross-company analysis. Never duplicate analysis from company records — reference them.

**Evidence Register findings** (`evidence-register.md`) answer: *What does the aggregate evidence show?*
Accumulating findings linked to the Durable Demand Framework. Evidence strength rated Emerging / Replicating / Established; importance rated Supporting / Important / Foundational.

Keep these object types separate. Cross-reference via the Related Documents field in company records.

---

## Evidence Hierarchy

The repository has two levels of evidence and two corresponding retrieval layers:

**Company-level evidence**
- Authoritative source: `company-records/[company].md`
- Retrieval layer: `_index.xlsx` → Index sheet

**Page-level evidence**
- Authoritative source: `portfolio-durability/[company].md` (PDA)
- Retrieval layer: `_index.xlsx` → Page Evidence sheet

**Cross-case findings**
- `evidence-register.md` — synthesized from accumulated company and page-level evidence

**Recommendations**
- Evidence-backed recommendations synthesized from Evidence Register findings

## Source of Truth

The company markdown record is authoritative for company-level data. The PDA is authoritative for page-level data. Both index sheets (`Index` and `Page Evidence`) are retrieval layers only.

When an index sheet conflicts with its authoritative source, correct the index from the record — not the other way around, unless source calculations prove the record itself is wrong. If the record is corrected, note it in Historical Amendments.

**Page Evidence source-of-truth rule:** Do not independently classify or reinterpret pages inside the Page Evidence sheet. Every classification (Archetype, AI Substitutability, Observed Page Response, etc.) must come from a completed PDA. If a PDA is amended, update the corresponding Page Evidence row. If a PDA does not exist, the company cannot have Page Evidence rows.

---

## How to Use

**Finding comps:** Open `_index.xlsx` → filter by Outcome, Primary Mechanism, Traffic Trajectory, AIO Portfolio Susceptibility, Commercial Alignment, Dominant Content Model, or AI Discoverability columns. Comp Summary gives a one-sentence reason for relevance; Comparison Limitations tells you where the analogy breaks.

**Adding a company record:** Copy `_template.md` → fill in every structured field → complete the Calculation Log first → run the verification checklist → save to `company-records/company-name.md` → add a row to `_index.xlsx`.

**After migrating from prior analysis:** Set Record Status to Draft and Migration Validation Stage to Migrated — not revalidated. Do not upgrade to Verified or Final without recomputing key metrics from source exports.

---

## File Naming

Company records: `company-name.md` — lowercase, hyphenated, no special characters.
Comparison briefs: `company-a-company-b.md` or `category-theme.md` — same convention.

---

## Record Lifecycle

### Status Fields

**Record Status** — publication readiness

| Status | Meaning |
|--------|---------|
| Draft | In progress — do not use for client work |
| Verified | Key metrics recomputed; narrative-number audit complete |
| Final | Fully verified; ready per External Use Status |
| Needs Revalidation | Previously verified but methodology changed or data may be stale |

**Migration Validation Stage** — revalidation progress for migrated records

| Stage | Meaning |
|-------|---------|
| N/A — new record | Written fresh against this template |
| Migrated — not revalidated | Brought in from prior format; no recomputation yet |
| Metrics revalidated | Key metrics recomputed from source exports |
| Narrative revalidated | All numbers in narrative cross-checked against Calculation Log |
| Fully revalidated | Both metrics and narrative verified; ready for status upgrade |

**External Use Status** — external exposure gate

| Status | Meaning |
|--------|---------|
| Internal only | Not for sharing externally |
| Client conversations | Suitable for verbal reference in a client conversation |
| Client deliverable | Suitable for inclusion in a client-facing document |
| Public evidence library | Suitable for public-facing publication |

*Final Record Status does not imply permission to share externally. External Use Status is the gate.*

**Last Verified Date:** Leave blank for records where Calculation Verified = No and Migration Validation Stage = Migrated — not revalidated. A populated Last Verified Date implies the record has been verified under the repository methodology; a migrated-but-unverified record has not. Populate only once key metrics have been recomputed from source exports in a repository session.

### Living Records and Amendments

Company records are living documents. Structured fields always reflect the current best assessment. When meaningful new data arrives, update the structured fields and add an entry to the Historical Amendments section — do not overwrite or create a separate file.

**Amendment threshold:** Recovery signals, further decline data, mechanism confidence updates, and AI discoverability changes warrant amendments. Add an entry with date, sections updated, and a brief summary.

**Full re-analysis threshold:** Major rebrands, domain migrations, or fundamental content model pivots that make the original study window no longer the right baseline. Note the re-analysis as a major revision in Historical Amendments and update the Analysis Date.

**Do not:** silently expand the study window over time. The original window is fixed. Later reviews are documented as amendments with their own dates.

### Record Lifecycle States

Beyond publication readiness (Record Status), records have a lifecycle state describing their ongoing evidence value. Nothing is deleted.

| State | Meaning |
|-------|---------|
| **Current** | Active comparable — represents a pattern likely to recur with current clients |
| **Historical** | Evidence value for what a mechanism looked like in a specific period; not a current comparable (e.g., AI-mediated erosion patterns from 2025–2026 may belong here as the landscape evolves) |
| **Deprecated** | Superseded by a better record of the same company, or M&A/domain migration has broken the continuity of the evidence |

Record lifecycle state transitions are documented in the Historical Amendments section of each record. Historical and Deprecated records remain fully readable and searchable — they inform mechanism history even when no longer used as direct client comps.

---

## Review Cadences

### Consistency Review (~every 5 migrations)

**Purpose:** Prevent taxonomy drift and catch inconsistencies before they propagate through the corpus.

**Trigger:** After the 5th, 10th, 15th, 20th completed migration, etc. Count company records only, not comparison briefs.

**Time box:** 60 minutes maximum. If a consistency issue requires more than 60 minutes to investigate, document it as an open item and address it as a separate task.

**Questions to answer (all of them, concretely):**
1. Pull all records and grep for Mechanism values. Are the same mechanisms being applied consistently across similar companies, or has the taxonomy drifted?
2. Pull all Mechanism Confidence values. Does "High" mean the same thing it meant in the first records? Are there records where the narrative suggests Low confidence but the field says Medium?
3. Has a pattern appeared that genuinely cannot be represented by any existing mechanism value? Name the company and the gap specifically.
4. Has the same schema limitation appeared in 3+ records? If yes, it's a schema change candidate — carry it forward to the next Synthesis.
5. Pull all Measurement Reliability values. Are they calibrated consistently against the definition in this README?

**Required output artifact:** `governance/consistency-review-N.md` where N is the review number. Minimum content:

```
# Consistency Review #N
Date: YYYY-MM-DD
Records reviewed: [list]

## Taxonomy checks
[findings for each question above — "no issues found" is a complete, valid answer]

## Schema limitations observed
[any recurring limitations, with record names]

## Records flagged for correction
[list of records and what needs fixing]

## Actions taken this review
[changes made immediately]

## Carried to next Synthesis
[items deferred because they need more cases to justify a change]
```

Without this artifact, the review is ephemeral and its conclusions don't compound.

---

### Repository Synthesis (~every 10–12 migrations initially, then every 15–20)

**Purpose:** Evaluate the repository as a research system. Ask whether it's becoming better at diagnosing clients, not just whether the data is clean.

**Trigger:** After ~20 completed records (first synthesis); then every 15–20 completed migrations.

**Transition clause:** Consistency Review #1 serves as the baseline review for all pre-existing records. Earlier review thresholds are not recreated retroactively.

**Time box:** Half day.

**The synthesis runs in this sequence:**

**1. Mechanism Inventory Update** — For each mechanism in the taxonomy, update the evidence record: supporting companies, high-reliability supporting companies, categories represented, direct vs. inferred evidence, counterexamples. The goal is to understand evidence maturity, not just frequency.

**2. Coverage Audit** — Assess coverage across Traffic Trajectory, Primary Mechanism, vertical, Commercial Alignment, and Measurement Reliability. Then ask the intersection question: if a client came in with trajectory X + mechanism Y + vertical Z, could the repository find 2+ high-confidence records that resemble them? Identify underrepresented combinations.

**3. Diagnostic Readiness Test** *(most important part)*
1. Select one company from the repository at random completed before the Synthesis started.
2. Without looking at its record, use only the other records to generate: (a) the most likely primary mechanism, (b) 2 supporting pieces of evidence from other records, (c) 3 investigation priorities.
3. Open the test company's record. Compare against the repository-derived diagnosis.
4. Document the gap: where did the repository succeed? Where did it fail?

*Planned evolution at ~40–50 records:* Replace step 1 with a company that has a completed deep dive but has not yet been migrated. This breaks the circularity — migrated records are already embedded in the corpus.

**4. Diagnostic Gap Analysis** — For each gap identified: what client scenario does the repository currently fail to diagnose well? Is this a coverage gap (more records) or a schema gap (different fields)?

**5. Schema Decision** — Are there schema change candidates that now meet the 3+ record threshold? If yes, implement and increment the version. If no, record "no schema changes justified" and what was considered.

**6. Company Selection Update** — Based on Coverage Audit and Gap Analysis, update the priority list for future migrations.

**Required output artifact:** `governance/synthesis-vN.md`

---

## Company Selection Policy

**During initial migration (current phase):** Migrate completed deep dives in completion order. Don't reorganize the queue to optimize coverage before existing work is in the repository.

**After initial migration is complete:** Selection shifts from completion-order to coverage-driven. The guiding question becomes: what diagnostic capability is the repository currently weakest at?

**Coverage-driven selection criteria (apply in order):**
1. **Diagnostic gap:** Does this company fill a client scenario the repository currently can't diagnose well?
2. **Decision value:** Would this company lead to materially different recommendations than cases already in the repository?
3. **Evidence quality:** Does this company produce High Measurement Reliability evidence, or will it add another Low Reliability record to an already noisy area?
4. **Dimension diversity:** Does this company add coverage in a currently underrepresented vertical, trajectory, or commercial alignment?

Within each criterion, prefer the company with the highest expected information gain. A company that challenges an existing mechanism or could falsify an established pattern is often more valuable than one that reinforces what the repository already knows. The repository should become progressively harder to surprise.

---

## Data Confidence Framework

**Data Provenance** — where the data came from

| Value | Meaning |
|-------|---------|
| Ahrefs Export | Metrics computed from downloaded exports |
| Ahrefs Dashboard | Figures read from UI — directional, not computed |
| Ahrefs Export + Semrush | Cross-checked with Semrush |
| Ahrefs Export + Similarweb | Cross-checked with Similarweb (panel + ISP data) |
| Full: +GSC+GA4 | First-party client data; highest confidence |
| Mixed | Varies by metric — see Source Files in the record |

**Calculation Verified** — whether the math was reproduced

| Value | Meaning |
|-------|---------|
| Yes | All key metrics recomputed and passed reconciliation checks |
| Partial | Some metrics reproduced; others carried or from dashboard |
| No | Figures carried without recomputation |

*"Calculation Verified: Yes" means the arithmetic is reproducible. Ahrefs traffic estimates remain third-party estimates regardless.*

**Measurement Reliability** — reliability of the underlying traffic observation itself, separate from mechanism confidence

| Value | Meaning |
|-------|---------|
| High | Multiple exports reconcile at sufficient scale and coverage; direction and magnitude are both credible |
| Medium | Direction credible but magnitude or coverage has limitations (e.g., cross-export gaps, search volume inferred not observed, small top-page share) |
| Low | Small base, missing trend data, asymmetric samples, or major vendor limitations at this domain's scale |
| Unverified | Migrated figures not recomputed from source exports |

*Measurement Reliability describes how well the underlying data supports the observed traffic figures, not how confident we are in the mechanism explanation. A record can have Low Measurement Reliability and High Mechanism Confidence (if the direction is clear despite noisy data), or vice versa.*

---

## Calculation Log Rule

The Calculation Log in each record is the verification source for all recomputable metrics. Structured tables and narrative sections reproduce values from the Log — they do not independently establish verification.

Directly reported source metrics (starting/ending traffic estimates, referring domains, traffic value) need only a named source file and date in the Source Files table.

---

## Content Model vs. Content Type

**Dominant Content Model** (header) — the site's overall organic strategy. Allowed values: `Editorial / Programmatic / Glossary/Definitional / Tool/Template / Product/Support / Brand/Homepage / Mixed`. How the site generates organic traffic strategically.

**Dominant Content Type** (Page & Content Analysis) — which page category produces the most traffic (e.g., Blog, Glossary, Product page). What is actually ranking.

A site can have a Programmatic content model but an Editorial blog as its dominant content type. Capture both. Model nuance (GRC focus, developer audience, subdomain consolidation, etc.) belongs in the company record prose, not encoded into the field value.

---

## AI Discoverability Fields

Designed around durable concepts, not vendor-specific metrics. Different tools can coexist in the Metrics field of the record.

**AI Visibility Strength** — classify per current thresholds in `governance/ai-discoverability-methodology.md`. That document carries the operational definitions and threshold changelog so the schema stays stable as measurement approaches evolve. Always document prompt set size, composition, and engine coverage in the Coverage section of the record.

**AI Discoverability Trend** — always specify what the trend is relative to using the "Trend Compared To" field in the record (Initial measurement / Previous quarterly assessment / Previous annual assessment). "Improving" without a reference period is not interpretable.

**AIO Fields** (separate from AI Discoverability) — three structured fields that together capture observed AI Overview evidence without conflating susceptibility, presence, and causal effect:

- **AIO Portfolio Susceptibility** (High / Medium / Low / Unknown) — structural exposure of the query/page portfolio to AI Overview interception, assessed at the portfolio level regardless of observed traffic effects.
- **AIO Presence Observed** (Yes / No / Not tested) — whether an AI Overview was directly confirmed on one or more key queries.
- **AIO Observed Effect** (Intercepted / Resistant / Mixed / No conclusion / Not tested) — observed traffic response consistent with AI Overview interception or resistance.

These fields do not replace Primary Mechanism — causal interpretation belongs in Primary Mechanism and Confidence Rationale. Full field definitions are in `_template.md`.

---

## Mechanism Taxonomy

The authoritative controlled vocabulary for Primary Mechanism and Contributing Mechanisms is in **`governance/mechanism-taxonomy.md`**. That file contains approved values with definitions, decision rules (including Algorithm Update vs. Algorithmic Reassessment, and AI mechanism disambiguation), legacy value migration guidance, and the Playbook crosswalk.

Do not maintain a separate mechanism list in this file. For approved values, definitions, and amendment history, read `governance/mechanism-taxonomy.md` directly.

*Add new values only by amending `governance/mechanism-taxonomy.md`, then updating `_template.md` and the `_index.xlsx` Legend tab.*

---

## Gross-Loss Offset Rate

**Formula:** Gross Loss (absolute) ÷ Gross Gain — from a two-period Top Pages export.
**If Gross Gain = 0:** report as N/A.
**Scope rule:** both values must use the same domain/subfolder scope, country database, comparison dates, and URL population.
**Never estimate** — compute from export or leave blank.
**Offset Zones:** Healthy <30% / Moderate 30–60% / High 60–100% / Extreme >100% — descriptors, not diagnoses.

---

## Accuracy Rules

1. Complete the Calculation Log before writing the Outcome Summary or narrative.
2. Every recomputable claim must trace to a verified Calculation Log row.
3. Never carry a figure from prior analysis without recomputing from source.
4. Dashboard-sourced figures must be flagged as "Ahrefs Dashboard" in Data Provenance.
5. Before marking a record Final: search the full narrative for all %, currency symbols, and specific numbers — every recomputable one must trace to the Calculation Log.
6. Gross Gain − Gross Loss must reconcile to Net Change. Document the tolerance.

---

## Schema Governance

**Schema changes require evidence from at least three migrated company records that the existing schema cannot adequately represent the phenomenon.** A single interesting edge case is not sufficient justification for a schema change — accumulate cases until a recurring representation problem is clear.

**What counts as adequate evidence:**
- Three or more records where the same field produces a demonstrable contradiction, ambiguity, or information loss that cannot be resolved by using the existing vocabulary or notes fields
- A pattern that will recur across future migrations (not a one-off anomaly)
- The proposed change can be applied consistently to all future records, not just the cases that motivated it

**What does not justify a schema change:**
- A single company that is an awkward fit for the existing taxonomy (document the fit issue in Risk Flags or Confidence Rationale instead)
- A desire for more precision in one record (use the notes/rationale fields)
- An interesting new concept with no confirmed recurring representation problem

**How to propose a change:**
1. Document the representation problem in each affected record's notes fields
2. Once three or more records show the same problem, draft a proposed field change with: the field name, controlled vocabulary, and at least two examples of how existing records would be updated
3. Implement the change, increment the version, update this table, update `_template.md`, update `_index.xlsx` Legend tab, and flag affected records

**Why this rule exists:** Each schema change requires updating the template, index, README, and every existing record that touches the changed field. At 50+ records, the migration cost of schema churn becomes significant. This rule forces the burden of proof onto the change, not the status quo.

---

## Methodology Version Changelog

| Version | Effective Date | Change | Records Requiring Revalidation |
|---------|---------------|--------|-------------------------------|
| V1.0–V1.7 | 2026-06 | Original 118-company report framework. 14-field Phase 3 structure. | All migrated records |
| V2.0 | 2026-07-11 | Repository framework. Calculation Log as verification source. Traffic Trajectory, Algorithm Alignment, AI Overview Exposure, AI Discoverability, Related Documents, Historical Amendments as structured fields. Two-field status system (Record Status + Migration Validation Stage). External Use Status added. | N/A — first version |
| V2.1 | 2026-07-11 | Mechanism taxonomy formalized with definitions. Demand Expansion added as new Primary Mechanism value. Study Duration defined as elapsed months. README migration instruction corrected (Record Status = Draft, not "Migrated — not revalidated"). Controlled-vocabulary field normalization rule clarified. | Gainsight: reclassify Primary Mechanism from Content Quality to Demand Expansion. Any record using Content Quality for acquisition-driven growth should be reviewed. |
| V2.2 | 2026-07-14 | Search Demand Shift added as new mechanism taxonomy value. Ahrefs estimated-traffic terminology standard established: all record language must distinguish between what Ahrefs exports directly show (estimated traffic, estimated rankings) and what is inferred (CTR decline, click loss, click interception). Last Verified Date behavior clarified: leave blank for records with Calculation Verified = No and Migration Validation Stage = Migrated — not revalidated. AI Overview Exposure field scoped to pure exposure only; causal interpretation belongs in Primary Mechanism and Confidence Rationale. | Aha!: Contributing Mechanisms updated from "Competition, Content Quality" to "Search Demand Shift, Competition"; Last Verified Date blanked; CTR/click language replaced with estimated-traffic language throughout. Any record using CTR or click observation language drawn from Ahrefs exports should be reviewed. |
| V2.3 | 2026-07-28 | AI-mediated informational demand erosion added as new mechanism taxonomy value — for cases where AI displacement is the likely explanation but the specific mechanism (AI Overviews, answer engines, coding assistants, upstream substitution) cannot be confirmed. Single AI Overview Exposure field replaced with three-field AIO split: AIO Portfolio Susceptibility / AIO Presence Observed / AIO Observed Effect — preventing conflation of structural exposure, direct observation, and causal effect. Commercial Alignment field added to Client Applicability section — captures whether the site's organic footprint is topically connected to its commercial positioning; enables filtering by traffic-quality dimension rather than traffic-volume dimension alone. | GitHub: Primary Mechanism reclassified from AI Overview to AI-mediated informational demand erosion; AI Overview Exposure → 3-field AIO split (Susceptibility: High, Presence Observed: Not tested, Effect: No conclusion). Harness: AIO Exposure "None" corrected to 3-field split (Susceptibility: High, Presence Observed: Yes, Effect: Resistant — one tested query). CircleCI: AIO Exposure "Low" updated to 3-field split (Susceptibility: Medium, Presence Observed: Not tested, Effect: No conclusion). CloudBees: AIO Exposure "Low" updated to 3-field split (Susceptibility: High, Presence Observed: Not tested, Effect: No conclusion). Commercial Alignment added to all four Dev Tools records. Language fixes across all records and Dev Tools comparison brief. |
| V2.4 | 2026-08-04 | **Required changes:** (1) Mechanism taxonomy centralized — `governance/mechanism-taxonomy.md` created as single authoritative source; mechanism list removed from README and replaced with a pointer; (2) Demand Expansion restored to approved values — was present V2.1–V2.3 and was inadvertently omitted from the V2.4 template draft; restored in taxonomy and template; (3) Mechanism vocabulary updated — AI Overview → AI Overview Interception; AI-mediated informational demand erosion → AI Cannibalization; Cannibalization → Contributing Mechanisms/narrative; Competition → Competitive Displacement; (4) Algorithmic Reassessment added as distinct value from Algorithm Update; (5) `portfolio-durability/` folder replaces `portfolio-reassessment/` — trigger broadened beyond Algorithmic Reassessment only; (6) `governance/ai-discoverability-methodology.md` replaces `_ai-discoverability-methodology.md`; (7) Page Archetype Taxonomy V1.0 added (`governance/page-archetype-taxonomy.md`); (8) Repository structure formalized: `archive/`, `source-analyses/`, `governance/` directories established; OPERATING-MODEL.md retired (active content migrated to README). **Optional:** Evidence Register link in Related Documents section; Portfolio Durability Analysis trigger language update in existing records. | All records: update Primary Mechanism to use new controlled vocabulary where legacy values were in use (AI Overview → AI Overview Interception; AI-mediated informational demand erosion → AI Cannibalization or Search Demand Shift; Competition → Competitive Displacement). Records with portfolio-reassessment path in Related Documents: update to portfolio-durability path. |

| V2.5 | 2026-08-07 | **Intervention Level field added** to Recovery section, after Observed Company Response. Vocabulary: Page / Cluster/Portfolio / Site/Technical / Authority/External / No Intervention Indicated / Mixed / Unknown. The field captures the diagnostic implication of the evidence — what level of intervention was actually warranted — distinct from Observed Company Response (what the company did). Motivated by emerging passive recovery pattern across Gong, LaunchDarkly, and Salesloft, where pages recovered without content-level intervention. Full field definition and coding standard in README and `_template.md`. | New deep-dive records (Gong, LaunchDarkly, Salesloft): populate with evidence-based classification. Migrated cohort records: populate as Unknown (insufficient page-level evidence for most). New records going forward: field required. |

*The repository methodology is intentionally flexible. When a field definition changes, increment the version, update this table, and flag affected records for revalidation.*

---

## Intervention Level Field

**Intervention Level** — added V2.5. Placed in the Recovery section, after Observed Company Response.

The field answers: *What level of intervention does the evidence suggest was actually warranted, given the mechanism and observed outcome?* It is assessed from evidence at study date — not from what the company chose to do. It complements rather than duplicates Observed Company Response: that field records what they did; Intervention Level records what the evidence suggests needed doing.

**Controlled vocabulary:**

| Value | Use when |
|-------|----------|
| **Page** | Evidence identifies the specific content asset as the mechanism constraint — intent mismatch, thin content, factual inaccuracy, or structural on-page problems. |
| **Cluster/Portfolio** | Problem is broader than one URL — coverage gaps, cannibalization, content mix, pruning, internal relationships, topic authority distribution. |
| **Site/Technical** | Architectural-level cause — crawlability, migrations, redirects, indexation, Core Web Vitals, template issues. |
| **Authority/External** | External signal constraint — competitive authority, link profile, brand/entity recognition, market position. |
| **No Intervention Indicated** | Positive evidence that the asset(s) didn't require intervention. Requires: (1) mechanism type inconsistent with a page-level defect (Algorithmic Reassessment reversal, Demand Expansion, SERP environment change, competitor movement), AND/OR (2) Wayback confirms page unchanged through the recovery window and the page recovered. Absence of observed company action alone does not qualify — use Unknown in that case. |
| **Mixed** | Multiple levels apply simultaneously; document which level applies to which part of the portfolio and why. |
| **Unknown** | Evidence insufficient to assess. Default for migrated records without page-level analysis. Do not use as a shorthand for "we couldn't find anything." |

**Why this field matters:** The standard SEO workflow assumes traffic declined → page needs fixing. The repository now tracks enough passive recovery cases to test this assumption. At scale, filtering on Intervention Level alongside Mechanism and Observed Company Response will let the repository answer: "In Algorithmic Reassessment cases where No Intervention Indicated and none observed, what fraction recovered?" That is the difference between a pattern library and a diagnostic tool.

**Coding note:** "No Intervention Indicated" is evidence-based, not a residual category. A company that didn't intervene and recovered is not automatically coded here — mechanism must support the classification. Survivorship bias risk: a company that didn't intervene and recovered might have needed an intervention that simply wasn't the binding constraint.

---

## Future Schema Design Note

**Observed Mechanism vs. Strategic Interpretation split (planned for future version):** As the repository grows, a meaningful design improvement would be separating the factual record of what was observed (rankings improved, specific pages gained, no backlink inflection, AIO present) from the interpretive layer (mechanism classification, pattern attribution). Observations are stable; interpretations evolve with the taxonomy. Keeping them merged means reclassifying a mechanism requires rewriting the factual record — an unnecessary cost at scale. This split is not implemented in V2.5 but should be considered before the corpus exceeds 30–40 records.

---

## Study Duration

**Definition:** The number of elapsed months between the Study Window Start and Study Window End dates. Calculated as `(YEAR(end) − YEAR(start)) × 12 + (MONTH(end) − MONTH(start))`. This is a point-to-point elapsed count, not an inclusive month count. A window of January 2025 to June 2026 has a Study Duration of 17 elapsed months.

When filtering for "12–18 month windows," use the elapsed-month count. If inclusive counting is needed for a specific analysis, document it separately — do not rely on the index field for that purpose.

---

## Future Roadmap (V2.1+)

**Repository-level metadata** — once the corpus reaches 50+ records, managing which records deserve re-analysis becomes a portfolio problem. Future additions may include: First Analyzed, Last Reviewed, Review Cadence, Next Review Date, and Priority. Not needed now; flag when the corpus grows.

---

## Trajectory Reference

9 approved values — full definitions in `_index.xlsx` → Trajectory Reference tab.

`Continuous Acceleration` / `Steady Growth` / `Growth then Pullback` / `Early Peak then Plateau` / `Early Peak then Decline` / `Decline then Recovery` / `Flat` / `Steady Decline` / `Volatile`

No new values without updating the Trajectory Reference tab, this README, and the operating manual.
