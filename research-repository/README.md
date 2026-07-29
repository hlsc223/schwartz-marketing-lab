# Schwartz Marketing Lab — Organic Growth Research Repository

An ongoing evidence library of company-level organic growth deep dives. Used to identify patterns, find client comparables, and build the case for durable demand — across traditional search and AI discovery systems.

**Sample representativeness:** This is a purposive evidence library, not a statistically representative sample. Companies are selected to maximize mechanism diversity and case quality — not to reflect the distribution of outcomes across B2B SaaS. Pattern frequency within this repository does not imply prevalence in the market. Use individual records as evidence for specific mechanisms; do not extrapolate base rates or outcome distributions from aggregate counts.

---

## Structure

```
research-repository/
  README.md                — this file (schema reference, field definitions, governance rules)
  OPERATING-MODEL.md       — operating model for the repository as a research program
  _template.md             — standard format for new company records
  _index.xlsx              — retrieval index (Index, Legend, Trajectory Reference tabs)
  company-records/         — one markdown file per company
  comparison-briefs/       — cross-company pattern analysis documents
  governance/              — Consistency Review and Repository Synthesis output artifacts
```

**External dependencies (intentional):** This repository references documents in the parent project folder that are not stored inside `research-repository/`. These dependencies are deliberate:

- `phase3-deep-dives.md` — source of truth for all original deep dive analysis; company records are migrated from here
- `research-operating-manual-v1.md` — methodology documentation for the original 118-company study (Pass 1/2/3 procedures, company selection, deep dive template)
- Scrunch AI discoverability source documents — referenced by records with AI Discoverability data

These files remain in the parent project folder because they predate the repository and are not specific to its governance function. Do not relocate them — the comparison briefs in `comparison-briefs/` include an extraction header pointing back to `phase3-deep-dives.md` as the source of truth until each brief is reformatted to the repository template.

---

## Two Research Object Types

**Company records** (`company-records/`) answer: *What happened to this company?*
One record per company. The authoritative source for all company-level evidence.

**Comparison briefs** (`comparison-briefs/`) answer: *What pattern emerges across multiple companies?*
Cross-company analysis. Never duplicate analysis from company records — reference them.

These should not be merged. Keep them separate. Cross-reference via the Related Documents field.

---

## Source of Truth

The company markdown record is authoritative. The index is a retrieval layer. When they conflict, correct the index from the verified record — unless source calculations prove the record itself is wrong, in which case correct both and note it in the Historical Amendments section.

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

**Dominant Content Model** (header) — the site's overall organic strategy (e.g., Integration-led, Editorial-blog-led). How the site generates organic traffic strategically.

**Dominant Content Type** (Page & Content Analysis) — which page category produces the most traffic (e.g., Blog, Glossary, Integration page). What is actually ranking.

A site can have an Integration-led content model but a Blog as its dominant content type. Capture both.

---

## AI Discoverability Fields

Designed around durable concepts, not vendor-specific metrics. Different tools can coexist in the Metrics field of the record.

**AI Visibility Strength** — classify per current thresholds in `_ai-discoverability-methodology.md`. That document carries the operational definitions and threshold changelog so the schema stays stable as measurement approaches evolve. Always document prompt set size, composition, and engine coverage in the Coverage section of the record.

**AI Discoverability Trend** — always specify what the trend is relative to using the "Trend Compared To" field in the record (Initial measurement / Previous quarterly assessment / Previous annual assessment). "Improving" without a reference period is not interpretable.

**AIO Fields** (separate from AI Discoverability) — three structured fields that together capture observed AI Overview evidence without conflating susceptibility, presence, and causal effect:

- **AIO Portfolio Susceptibility** (High / Medium / Low / Unknown) — structural exposure of the query/page portfolio to AI Overview interception, assessed at the portfolio level regardless of observed traffic effects.
- **AIO Presence Observed** (Yes / No / Not tested) — whether an AI Overview was directly confirmed on one or more key queries.
- **AIO Observed Effect** (Intercepted / Resistant / Mixed / No conclusion / Not tested) — observed traffic response consistent with AI Overview interception or resistance.

These fields do not replace Primary Mechanism — causal interpretation belongs in Primary Mechanism and Confidence Rationale. Full field definitions are in `_template.md`.

---

## Mechanism Taxonomy

Approved values for Primary Mechanism and Contributing Mechanisms fields. Use the most specific applicable value.

| Value | Definition |
|-------|-----------|
| **Algorithm Update** | Organic traffic change driven primarily by a Google core or spam algorithm update — timing alignment with a named update is a required element of this classification |
| **AI Overview** | Traffic change driven primarily by AI Overview click-through interception — queries where the SERP feature answers the user's intent, suppressing clicks to ranked pages |
| **AI-mediated informational demand erosion** | Traffic loss in which informational query demand is reduced, displaced, or intercepted by AI systems — with the specific mechanism (AI Overviews, answer engines, coding assistants, or AI-native tools) unconfirmed. Use when evidence shows informational traffic decline with traffic-value divergence consistent with AI displacement, but the exact interception point cannot be isolated. More specific values (AI Overview, Search Demand Shift) should be used when the mechanism can be confirmed. |
| **Cannibalization** | Organic traffic decline driven primarily by the site's own pages competing against each other for the same queries, producing internal keyword cannibalization |
| **Technical** | Traffic change driven primarily by technical site factors — crawlability, indexation, Core Web Vitals, migration errors, redirect chains, or similar |
| **Competition** | Traffic change driven primarily by competitive displacement — other sites outranking this one on queries it previously held |
| **Content Quality** | Traffic change driven primarily by changes in the quality, depth, or relevance of the site's own content relative to what the query requires |
| **Demand Expansion** | Growth driven materially by an identifiable increase in underlying demand rather than primarily by ranking improvement or content-quality changes. Common variants: acquisition integration (captured brand demand from an acquired company), product launch, major PR or analyst recognition, category growth, international expansion. Use when the mechanism is demand-side, not supply-side. |
| **Search Demand Shift** | Traffic decline driven materially by a shift in how users satisfy the underlying need — away from traditional search and toward another channel (AI tools, AI-generated answers, direct AI prompting, etc.). Distinct from AI Overview: AI Overview describes SERP-level click interception after a search query is made; Search Demand Shift describes cases where the search query may no longer be initiated because the need is satisfied upstream. Use when evidence suggests the search itself is declining, not just the click. Cannot be confirmed without search-volume trend data by query — mark as Contributing when the mechanism is plausible but unconfirmed. |
| **Unknown** | Evidence is insufficient to identify a primary mechanism |

*Add new values only after updating this table, the template, and the index Legend.*

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

*The repository methodology is intentionally flexible. When a field definition changes, increment the version, update this table, and flag affected records for revalidation.*

---

## Future Schema Design Note

**Observed Mechanism vs. Strategic Interpretation split (planned for V2.4+):** As the repository grows, a meaningful design improvement would be separating the factual record of what was observed (rankings improved, specific pages gained, no backlink inflection, AIO present) from the interpretive layer (mechanism classification, pattern attribution). Observations are stable; interpretations evolve with the taxonomy. Keeping them merged means reclassifying a mechanism requires rewriting the factual record — an unnecessary cost at scale. This split is not implemented in V2.3 but should be considered before the corpus exceeds 30–40 records.

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
