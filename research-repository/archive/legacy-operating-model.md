<!--
ARCHIVED 2026-08-04 (V2.4 cleanup)
Active operational content has been migrated to README.md:
- Review cadences (Consistency Review and Repository Synthesis)
- Company selection policy
- Record lifecycle states (Current / Historical / Deprecated)
- Diagnostic readiness test procedure
This file is retained for reference only. Do not update it — README.md is now authoritative.
-->

# S.LAB Research Repository — Operating Model (V1.0) [ARCHIVED]

*Original effective date: 2026-07-28. Archived 2026-08-04 as part of V2.4 repository cleanup. Active content migrated to README.md. See README.md for current operating procedures.*

---

## The Core Distinction

This repository serves two distinct purposes, and conflating them is the primary failure mode as it scales.

**Governance** keeps the repository internally trustworthy. It prevents taxonomy drift, catches inconsistencies before they compound, and maintains the integrity of structured fields across records. Governance is a prerequisite.

**Diagnostic development** makes the repository commercially valuable. It turns a well-organized collection of case studies into a system that can help diagnose a new client's organic search performance, identify the closest historical patterns, generate evidence-backed mechanism hypotheses, and recommend the highest-priority areas to investigate. Diagnostic development is the goal.

The repository is successful only if it becomes progressively better at diagnosing unseen companies. Every governance activity should ultimately improve the repository's ability to recognize patterns, generate accurate mechanism hypotheses, and prioritize investigation for future clients.

Governance is a prerequisite that gets mistaken for the goal. A well-governed repository that cannot diagnose a new client has achieved the wrong thing.

---

## The Four Operating Questions

Every process in this operating model serves one of four questions:

1. **Is the repository internally trustworthy?** → Governance
2. **Is it becoming more diagnostically useful?** → Diagnostic Readiness
3. **Are we learning from failures?** → Diagnostic Gap Analysis
4. **Are we investing research where it increases diagnostic coverage the most?** → Coverage Audit and Company Selection

These are evaluated at different cadences, described below.

---

## Transition Clause

Because this operating model was adopted after the first 16 migrations were complete, Consistency Review #1 will serve as the baseline review for all pre-existing records. Earlier review thresholds will not be recreated retroactively — there is no "retroactive Review #0." The first synthesis trigger (every 10–12 migrations) counts from the repository launch, so the first synthesis is due at approximately 20 completed records.

---

## Tier 1 — Migration (Default Mode)

Migration is the default activity. Everything else is in service of keeping migration healthy.

**Rules during migration:**
- Use the existing schema and taxonomy exactly as specified in `_template.md` and `README.md`.
- Do not modify the schema during routine migrations. The schema governance rule (3+ records showing the same representation problem before any change) applies. See `README.md` → Schema Governance.
- When a field doesn't fit cleanly, record the limitation in Risk Flags or Confidence Rationale. Do not improvise a new value.
- Schema limitations observed across multiple migrations are noted; they become candidates for the Consistency Review, not immediate changes.

**What migration produces:** a completed company record in `company-records/`, a new row in `_index.xlsx`, and any associated comparison brief in `comparison-briefs/`.

---

## Tier 2 — Consistency Review (~every 5 migrations)

**Purpose:** Prevent taxonomy drift and catch inconsistencies before they propagate through the corpus.

**Trigger:** After the 5th, 10th, 15th, 20th completed migration, etc. Count company records only (not comparison briefs).

**Time box:** 60 minutes maximum. If a consistency issue requires more than 60 minutes to investigate, document it as an open item and address it as a separate task — don't let it expand the review indefinitely.

**Questions to answer (all of them, concretely):**
1. Pull all records and grep for Mechanism values. Are the same mechanisms being applied consistently across similar companies, or has the taxonomy drifted?
2. Pull all Mechanism Confidence values. Does "High" mean the same thing it meant in the first records? Are there records where the narrative suggests Low confidence but the field says Medium?
3. Has a pattern appeared that genuinely cannot be represented by any existing mechanism value? Name the company and the gap specifically.
4. Has the same schema limitation appeared in 3+ records? If yes, it's a schema change candidate — carry it forward to the next Synthesis.
5. Pull all Measurement Reliability values. Are they calibrated consistently against the definition in `README.md`?

**Output artifact (required):** A file named `governance/consistency-review-N.md` where N is the review number. Minimum content:

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

## Tier 3 — Repository Synthesis (~every 10–12 migrations initially, then every 15–20)

**Purpose:** Evaluate the repository as a research system. Ask whether it's becoming better at diagnosing clients, not just whether the data is clean.

**First synthesis trigger:** After 10–12 completed migrations (currently at 16, so the first synthesis is due now or at ~20 records). The first synthesis is about validating the architecture while there are still fewer than 25 records to update if something is wrong.

**Subsequent synthesis trigger:** Every 15–20 completed migrations.

**Time box:** Half day. If it can't be completed in a half day, scope is too wide.

**The synthesis runs in this sequence:**

### 1. Mechanism Inventory Update
For each mechanism in the taxonomy, update the evidence record in `synthesis-matrix.md`:
- Supporting companies (with record links)
- High-reliability supporting companies (Measurement Reliability = High)
- Categories represented
- Direct evidence vs. inferred evidence
- Counterexamples

The goal is to understand evidence maturity, not just frequency. A mechanism with 6 supporting records, all Low Measurement Reliability and all the same vertical, is weaker evidence than a mechanism with 3 records of High Measurement Reliability across different verticals.

### 2. Coverage Audit
Assess coverage across the dimensions that matter for diagnostic matching. A client doesn't come in with a single attribute — they come in as a combination. Coverage needs to be evaluated at the intersection, not just per dimension.

Single-axis counts (run these first, they're fast):

| Dimension | Values and current counts |
|-----------|--------------------------|
| Traffic Trajectory | [tally all 9 values] |
| Primary Mechanism | [tally all mechanism values] |
| Category (vertical) | [tally by vertical] |
| Commercial Alignment | High / Mixed / Low |
| Measurement Reliability | High / Medium / Low |

Then ask the intersection question: **If a client came in tomorrow with [trajectory X + mechanism Y + vertical Z], could we find 2+ high-confidence records that resemble them?** Identify the combinations that are currently underrepresented.

Decision value check: for each underrepresented area, ask whether it would lead to materially different recommendations than an area already well-covered. Some gaps matter more than others (see Section: Company Selection Policy).

### 3. Diagnostic Readiness Test

*This is the most important part of the Synthesis.*

**Procedure:**
1. Select one company from the repository at random that was completed before the Synthesis started. This is the "test company."
2. Without looking at its record, use only the other records in the repository to generate: (a) the most likely primary mechanism, (b) 2 supporting pieces of evidence from other records, (c) 3 investigation priorities you'd recommend.
3. Open the test company's record. Compare the repository-derived diagnosis against the actual findings.
4. Document the gap: where did the repository succeed? Where did it fail or produce an incomplete answer?

**Planned evolution (~40–50 records):** Once the corpus is large enough to have completed deep dives that have not yet been migrated to the repository, replace step 1 with: *Select one company that has a completed deep dive but has not yet been migrated.* This breaks the circularity of the current procedure — a migrated record's patterns are already embedded in the other records, so the current test is partly measuring whether the repository recognizes itself. An unmigrated company is a genuine blind test. Until ~40 records, the current procedure is sufficient.

**Output:** The gap analysis becomes Section 4 of the Synthesis artifact (see below).

### 4. Diagnostic Gap Analysis

Drawn directly from the Diagnostic Readiness Test result plus any patterns observed during migration since the last Synthesis. For each gap identified:
- What client scenario does the repository currently fail to diagnose well?
- What would need to be true for the repository to handle it?
- Is this a coverage gap (needs more records) or a schema gap (needs different fields)?

This replaces "Learning Summary" as the mechanism for recording what changed and why. Learning claims that come from observed test gaps are harder to game than retrospective reflection.

### 5. Schema Decision

Based on evidence accumulated since the last Consistency Review(s):
- Are there schema change candidates that now meet the 3+ record threshold?
- If yes: draft the proposed change, check against all existing records, implement, increment the version in `README.md`.
- If no: explicitly record "no schema changes justified at this Synthesis" and list what was considered but didn't meet the threshold.

### 6. Company Selection Update

Based on the Coverage Audit and Diagnostic Gap Analysis, update the priority list for future migrations (see Section below).

**Synthesis output artifact (required):** A file named `governance/synthesis-vN.md`:

```
# Repository Synthesis v[N]
Date: YYYY-MM-DD
Records at time of synthesis: [count]
Records since last synthesis: [list]

## 1. Mechanism Inventory
[updated evidence record per mechanism]

## 2. Coverage Audit
[single-axis counts + intersection gaps]

## 3. Diagnostic Readiness Test
Test company: [name]
Repository-derived diagnosis: [mechanism, evidence, priorities]
Actual record findings: [what the record shows]
Match/gap assessment: [where it succeeded, where it failed]

## 4. Diagnostic Gap Analysis
[client scenarios the repository handles well / handles poorly]
[what would close the gaps]

## 5. Schema Decisions
[changes made or explicitly deferred, with reasoning]

## 6. Company Selection Update
[priority list for next migration batch]
```

---

## Company Selection Policy

**During initial migration (current phase):** Migrate completed deep dives in completion order. This is appropriate now because the deep dives already exist and the migration cost is low. Don't reorganize the migration queue to optimize coverage before the existing work is in the repository.

**After initial migration is complete:** Selection policy shifts from completion-order to coverage-driven. The guiding question changes from "which deep dive is ready to migrate?" to "what diagnostic capability is the repository currently weakest at?"

**Coverage-driven selection criteria (apply in this order):**
1. **Diagnostic gap:** Does this company fill a client scenario that the repository currently can't diagnose well?
2. **Decision value:** Would this company lead to materially different recommendations than cases already in the repository? A rare mechanism with high actionability can justify selection even if it's uncommon.
3. **Evidence quality:** Does this company produce High Measurement Reliability evidence, or will it add another Low Measurement Reliability record to an already noisy area?
4. **Dimension diversity:** Does this company add coverage in a currently underrepresented vertical, trajectory, or commercial alignment?

Within each criterion, prefer the company with the highest expected information gain. A company that challenges an existing mechanism, exposes a weakness in the current diagnostic framework, or could falsify an established pattern is often more valuable than one that reinforces what the repository already knows well. The repository should become progressively harder to surprise — that's how you know it's improving.

Do not select purely on interest or availability. Do not pad coverage counts in dimensions already well-represented.

---

## Record Lifecycle

Records move through three states. Nothing is deleted.

| State | Meaning |
|-------|---------|
| **Current** | Active comparable — represents a pattern likely to recur with current clients |
| **Historical** | Evidence value for what a mechanism looked like in a specific period; not a current comparable (e.g., AI-mediated erosion patterns from 2025–2026 may belong here as the landscape evolves) |
| **Deprecated** | Superseded by a better record of the same company, or M&A/domain migration has broken the continuity of the evidence |

Records transition states via Historical Amendments. The reason for the state change is always documented. Historical records remain fully readable and searchable — they inform mechanism history even when no longer used as direct client comps.

---

## Relationship to Other Documents

| Document | Purpose |
|----------|---------|
| `research-operating-manual-v1.md` | Methodology for the original 118-company study (company selection, Pass 1/2/3, deep dive template) |
| `README.md` | Schema reference, field definitions, governance rules for the repository itself |
| `_template.md` | Standard format for new company records |
| `synthesis-matrix.md` | Living cross-company findings matrix; updated after every deep dive and migration |
| `governance/consistency-review-N.md` | Output of each Consistency Review |
| `governance/synthesis-vN.md` | Output of each Repository Synthesis |
| `OPERATING-MODEL.md` | This document — the operating model for the repository as a research program |

Create the `governance/` folder before the first Consistency Review.

---

## Version History

| Version | Date | Change |
|---------|------|--------|
| V1.0 | 2026-07-28 | Initial operating model. Establishes two-system architecture (governance + diagnostic development), four operating questions, three-tier review cadence, diagnostic readiness test procedure, coverage audit structure, company selection policy, and record lifecycle states. |
| V1.1 | 2026-07-28 | Three additions: (1) North star sentence making the diagnostic goal explicit — "The repository is successful only if it becomes progressively better at diagnosing unseen companies." (2) Planned evolution of the Diagnostic Readiness Test to use unmigrated companies at ~40–50 records, breaking the circularity of testing against records already embedded in the corpus. (3) Information gain principle added to Company Selection Policy — within each selection criterion, prefer the company that challenges existing patterns over one that reinforces them. |
| V1.2 | 2026-07-28 | Transition clause added: Consistency Review #1 serves as the baseline review for all 16 pre-existing records; earlier review thresholds are not recreated retroactively. First synthesis trigger anchored at ~20 completed records. |
