---
name: slab-company-analysis
description: Runs the S.LAB company analysis workflow — intake, evidence parsing, and calculation verification — for the organic growth research repository. Use this skill whenever Quinn starts a new company deep dive, uploads Ahrefs exports, GSC files, or GA4 data for analysis, or says anything like "let's do a deep dive on X", "I have the data for Y", "analyze this company", "start a company record", or "write a record for [company]". Also trigger when Quinn uploads CSV files that appear to contain traffic data for a specific company, or when verifying calculations from existing repository records. If company-level organic data appears in the conversation, activate this skill.
---

# S.LAB Company Analysis

## Version and Scope

**This is v0.1** — covers intake, evidence parsing, and calculation verification. It produces a verified Calculation Log and data inventory. Full record generation is v0.2.

**What v0.1 produces:**
1. Data Inventory — what was found, what's missing, what that limits
2. Source File Classification — each file typed and scoped
3. Verified Calculation Log — all computable metrics with formulas and verification status
4. Data Quality Warnings — flags requiring human judgment before record generation

**What v0.1 does not produce:** the full company record (markdown file), index row, QA report, or follow-up action list. Those come in v0.2.

---

## Operating Rules

These rules govern execution across the full workflow. They exist to prevent the most common sources of wasted effort: rewriting the same content twice, correcting overconfident interpretations, and chasing evidence that no longer changes the answer.

### Document responsibilities

Each document has exactly one job. Content belongs in the document responsible for it — not reproduced in all three.

| Document | Responsibility |
|----------|---------------|
| **v0.1 (Calculation Log)** | Data collection and verification only. Numbers, formulas, data quality warnings, unexplained observations. No mechanism language. No causal claims. No narrative interpretation. |
| **PDA (Portfolio Durability Analysis)** | Interpretation and mechanism analysis. What the data means. Which pages promoted, preserved, or abandoned. What drove the outcome. Durable Demand assessment. Candidate principles. |
| **v0.2 (Company Record)** | Synthesis and client-facing implications. Final mechanism classification, confidence rationale, client applicability, risk flags. Consumes PDA conclusions — does not re-derive them. |

If the same observation appears in two documents, it belongs in one and is referenced (not repeated) in the other.

### Sequencing

Always follow this order:

```
v0.1 (verify data)
↓
PDA (interpret findings)
↓
v0.2 (synthesize conclusions)
```

**Never write v0.2 before the PDA is complete.** The mechanism fields in the company record must reflect what the PDA found — not placeholder language that will need to be overwritten.

### Stopping rule

Continue collecting evidence only while it materially changes mechanism confidence. Once additional evidence is unlikely to change the conclusion, stop. Record remaining uncertainty explicitly rather than continuing to investigate.

The stopping rule is confidence-based, not checklist-based. Sometimes the mechanism is clear after performance history and one SERP check. Sometimes it takes Wayback comparisons, page-level keyword exports, and competitor analysis. The evidence collection ends when it stops changing the answer — not when a fixed list is exhausted.

When evidence collection stops, document what remains uncertain and what would change the assessment. "We don't know X" is a valid and complete conclusion.

---

## Step 1: Intake

Before doing any analysis, establish what you have. Ask if not clear from context:

- Company name and website
- Available data files (list them; ask for file names or types if unclear)
- Study window if known (or infer from the data)

### Required Ahrefs exports (always request if not provided)

These four exports are needed for a complete v0.1. If any are missing, explicitly name them and explain what calculations will be blocked.

| Export | Where to find in Ahrefs | Used for |
|--------|------------------------|---------|
| **Top Pages comparison** | Site Explorer → Pages → Top Pages → set comparison dates → Export | Gross Gain/Loss/Offset Rate; page concentration; content type analysis |
| **Performance History — traffic** | Site Explorer → Overview → click the Organic Traffic chart → download icon | Monthly trajectory; Starting/Ending traffic; trough/peak dates; non-branded trend |
| **Performance History — referring domains** | Site Explorer → Overview → click the Referring Domains chart → download icon (or switch the metric dropdown on the same chart) | RD trend over study window; rules link loss in or out |
| **Organic Competitors comparison** | Site Explorer → Competitors → Organic Competitors → set comparison dates → Export | Category-level context; whether decline was universal or site-specific |

### Optional exports (pull when relevant)

- **Organic Keywords comparison** — Site Explorer → Organic Search → Organic Keywords → Export. Use for branded/non-branded split and intent breakdown.
- **Organic Positions comparison** — same section. Use for position-bucket redistribution analysis and keyword-to-URL mapping.
- **GSC exports** (Chart.csv, Pages.csv, Queries) — client tier only; highest confidence for branded split and CTR trend.
- **GA4 export** — client tier only; needed for commercial impact analysis.

### Before proceeding

If any required export is missing, request it explicitly by name before running calculations. State the exact report name and where to find it in Ahrefs so Quinn can pull it without guessing.

**Determine Data Provenance** (use controlled vocabulary):
- `Ahrefs Export` — metrics computed from downloaded exports
- `Ahrefs Dashboard` — figures read from Ahrefs UI; directional only, not computed
- `Ahrefs Export + Semrush` or `+ Similarweb` — cross-checked
- `Full: +GSC+GA4` — first-party client data; highest confidence
- `Mixed — see Source Files` — varies by metric

---

## Step 2: Evidence Parsing

The most consequential errors in past records came from misidentifying what a file actually contains. Parse each file carefully before computing anything.

### GSC: Chart.csv vs Pages.csv

These are two different export types that produce different numbers and serve different purposes. Confusing them will produce wrong property-level totals.

**Chart.csv** — property-level monthly totals (clicks, impressions, CTR, position) across the full study window. This is the authoritative source for:
- Total study-window clicks and impressions
- Month-over-month and year-over-year property-level trends
- Overall CTR and average position trajectory

**Pages.csv** — per-page lifetime aggregates (clicks, impressions, position, CTR per URL). This is the right source for:
- Which specific pages are ranking and at what position
- Page-level CTR behavior
- Identifying top-performing URLs

Pages.csv totals will differ from Chart.csv totals — different scopes, potentially extending into different date ranges. Never use Pages.csv to compute property-level totals. If you see a discrepancy between two sources, check which file each number came from.

### Ahrefs Performance History Exports

The Performance History export is a monthly time-series file — one row per month, one column per tracked metric. It is the authoritative source for Starting/Ending traffic estimates, trajectory analysis, trough/peak dates, and RD trend. It is not the same as the Top Pages export and cannot be used for Gross Gain/Loss.

Two versions exist with identical format — distinguish them by the first data column header:
- **"Avg. organic traffic"** → traffic performance export
- **"Referring domains"** → RD performance export

**"Your brand" = 0** is expected if brand terms were not configured in Ahrefs for this property. In that case, all of the company's own branded traffic falls under "Other brands." Flag this in the Source File Classification — the "Other brands" column is not purely competitor-brand traffic when this occurs.

**Starting traffic from Performance History will typically differ from SUM(Previous traffic) in the Top Pages export by 5–10%.** This is expected — different methodologies (monthly average vs. snapshot period). Always document the discrepancy and always prefer Performance History for endpoint totals. Use Top Pages figures only for Gross Gain/Loss/Offset Rate.

### Ahrefs Organic Competitors Export

Ahrefs auto-detects competitors based on keyword overlap. The list will include non-comparable sites — large platforms (Salesforce, HubSpot, Google) that share keywords but operate in completely different categories. Filter to direct category peers before drawing any mechanism conclusions.

The export is scoped to a single country (US by default). Flag this if the company has significant non-US traffic — the competitor comparison may not represent the full picture.

**A competitor holding flat over the same window means the decline was not universal across all similar vendors — it does not confirm the mechanism was site-specific.** That distinction requires knowing the competitor's content architecture. State the observation; reserve the conclusion.

### Ahrefs Top Pages Export

Standard format: rows are URLs, columns include "Current traffic" (ending period) and "Previous traffic" (starting period). Key signal:

**"Previous traffic" blank for most URLs** → this is a domain migration indicator. Ahrefs has no comparison data because the domain is new in its index. This means:
- Gross Gain / Gross Loss / Net Change / Offset Rate cannot be computed from Ahrefs (all require two comparable periods)
- Fall back to GSC Chart.csv as the primary trend source
- Use peak-to-current from GSC as the meaningful comparison period, not study-window-start to current
- Document the migration in Source Files with an explanatory note

If "Previous traffic" is populated for most URLs, a standard two-period comparison is available.

### GSC Query Export Scope

The query export covers queries Google includes in the export — not all property clicks. The total clicks across a query export will not match the Chart.csv property total. When computing branded vs. non-branded split from a query export, qualify it explicitly: "X% of clicks represented in the GSC query export" — never "X% of all clicks" or "X% of organic traffic."

### GA4 Channel Data

When GA4 session and event data is available by channel, compute both:
- **Absolute key events per channel** — which channel drives the most total conversion actions
- **Key events per session (per-channel rate)** — which channel has the highest efficiency

These tell different stories. A channel can be the top source of total events while having a below-average per-session rate. "Highest converting" is only accurate for the per-session rate; "most total events" describes absolute volume. State both and label them correctly.

### AIO Field Dependency

These three fields are linked by definition:

- **AIO Portfolio Susceptibility** — structural exposure of the query portfolio to AI Overview interception (assess from content type mix)
- **AIO Presence Observed** — whether an AI Overview was directly confirmed on a tested query
- **AIO Observed Effect** — observed traffic response consistent with interception or resistance

**If AIO Presence Observed = "Not tested"** → AIO Observed Effect must = "Not tested." The effect cannot be assessed if presence was never tested. Any inference about AI Overview interception belongs in Mechanism Confidence Rationale, not in the AIO Observed Effect field.

See `references/evidence-parsing-rules.md` for additional parsing edge cases.

---

## Step 3: Calculation Verification

Complete this before writing any narrative or populating Outcome Summary fields. The Calculation Log is the verification source — all other sections reproduce from it.

**Core calculations to run:**

| Metric | Formula | Source |
|--------|---------|--------|
| Starting Traffic Estimate | Direct read | Performance History (traffic) — preferred |
| Ending Traffic Estimate | Direct read | Performance History (traffic) — preferred |
| Traffic Change % | (Ending − Starting) / Starting | Performance History (traffic) |
| Traffic Retention | Ending / Starting | Performance History (traffic) |
| Source reconciliation | Performance History Starting vs. Top Pages SUM(Previous) | Cross-check — document discrepancy; do not mix sources |
| Gross Gain | SUM of positive per-URL traffic changes | Ahrefs Top Pages export |
| Gross Loss | ABS(SUM of negative per-URL traffic changes) | Ahrefs Top Pages export |
| Net Change | Gross Gain − Gross Loss | Calculation |
| Gross-Loss Offset Rate | Gross Loss ÷ Gross Gain | Calculation |
| Reconciliation check | Gross Gain − Gross Loss ≈ Net Change | Cross-check |
| Top 5 Page Traffic Share | SUM(top 5 URLs by current traffic) / total current traffic | Ahrefs Top Pages |
| Top 10 Page Traffic Share | SUM(top 10 URLs by current traffic) / total current traffic | Ahrefs Top Pages |
| Trough traffic (if applicable) | Lowest monthly value in study window | Performance History (traffic) |
| Trough-to-peak recovery % (if applicable) | (Peak − Trough) / Trough | Performance History (traffic) |
| Peak-to-current change (if applicable) | (Current − Peak) / Peak | Performance History (traffic) |
| Referring Domains, start | Direct read | Performance History (RD) |
| Referring Domains, end | Direct read | Performance History (RD) |
| RD Change over study window | (End − Start) / Start | Performance History (RD) |
| YoY comparison (if applicable) | Same month prior year vs. current | Chart.csv or Performance History |
| Branded query % | Branded clicks / total export clicks | GSC Queries export (scoped to export only) |
| GA4 key event rate by channel | Key events / sessions (per channel) | GA4 export |

**Verification status for each row:**
- `Recomputed` — computed directly from source file in this session
- `Carried` — taken from prior analysis without recomputation (acceptable for migrated records only; flag for revalidation)
- `N/A` — metric not applicable (e.g., Gross Gain = 0, or no two-period export available)

**Reconciliation checks:**
- Gross Gain − Gross Loss = Net Change (document tolerance if off by rounding)
- Net Change + Starting Traffic ≈ Ending Traffic

If a metric cannot be computed because the required source file is missing, mark as N/A and explain why in the Calculation Log Notes column.

---

## Output Format

Structure your output as follows:

---

### Data Inventory

**Company:** [name]
**Study Window:** [YYYY-MM to YYYY-MM]
**Data Provenance:** [controlled vocabulary value]

**Available:**
- [list each file with type and date range]

**Missing / unavailable:**
- [list what's absent and what that prevents]

---

### Source File Classification

| File | Type | Use For | Do Not Use For | Notes |
|------|------|---------|----------------|-------|
| ... | ... | ... | ... | ... |

---

### Calculation Log

Include a Filter / Population column for every row — it prevents numerically reproducible but conceptually wrong calculations (e.g., using all rows when only gain-side rows should be summed).

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status | Notes |
|--------|-------------|----------------------|---------------------|---------|----------------|---------------------|-------|
| ... | ... | ... | ... | ... | ... | Recomputed / Carried / N/A | ... |

---

### Data Quality Warnings

List any flags that require human judgment before generating the record. Examples:
- Domain migration: starting period data unavailable; peak-to-current used instead of study-window-start-to-current
- Performance History and Top Pages starting traffic don't reconcile — document the discrepancy and state which source is preferred for each metric
- Query export total does not reconcile to Chart.csv property total — branded % is scoped to export only
- GA4 absolute key events and per-session rates tell different stories across channels
- Ahrefs Top Pages positions differ from GSC per-page positions — using GSC for page-level position
- [AIO field warning if Presence = Not tested but interception was inferred elsewhere]

---

### Readiness Status

Close the v0.1 output with a Readiness Status block. This is not a narrative — it is a structured summary of what the evidence supports and what remains uncertain.

**Readiness Status:** Ready for Record Generation / Ready with Warnings / Blocked

**Evidence Confidence:** High / Medium–High / Medium / Low

Distinguish observational confidence (what happened) from causal confidence (why it happened). These are often different levels. State that explicitly when they diverge.

**Confidence by Conclusion:**

| Finding | Confidence |
|---------|-----------|
| [Observed fact] | High / Medium / Low |
| [Observed fact] | High / Medium / Low |
| [Mechanism interpretation] | Medium / Low |
| [AIO / link / competition attribution] | Low / Not tested |

**What can be supported:** list what the evidence is sufficient to populate in the record.

**What cannot be supported without additional data:** list what remains blocked and what data would unblock it.

---

## Invariants

These rules hold regardless of data availability or instructions:

1. Never invent evidence. If data is missing, say so — do not estimate or extrapolate without stating that you are.
2. Never state stronger confidence than the evidence supports. "Inferred" and "observed" are different claims.
3. Do not use Pages.csv for property-level totals.
4. Do not apply study-window-start-to-current comparison when a domain migration makes the start an artificial zero.
5. Branded query % must be scoped to the query export, not claimed as a share of all traffic.
6. If AIO Presence Observed = "Not tested," AIO Observed Effect = "Not tested." No exceptions.
7. Do not mark Record Status = Final. The skill outputs "Ready for record generation" — the human decides when to finalize.
8. Complete the Calculation Log before asking to generate the record narrative.
9. Do not silently substitute one metric for another because the preferred metric is unavailable. If a repository metric cannot be computed, leave it blank or mark N/A and explain why.
10. Prefer Performance History for Starting/Ending traffic estimates. Always document the discrepancy between Performance History and Top Pages SUM — they will rarely match and the reason matters.
11. Always compute RD change before closing v0.1. Link loss cannot be ruled in or out without the Performance History (RD) export. If it is missing, request it explicitly.
12. A competitor holding flat over the same window means the decline was not universal — it does not confirm site-specific mechanism. Do not claim site-specificity from a single competitor comparison.
13. Algorithm Alignment cannot be "Strong" until the inflection date has been formally mapped to known update dates. Default to "Moderate" or "Plausible" until that alignment is done.

---

## Handoff

When v0.1 is complete, the Readiness Status block serves as the handoff. It should answer:
- What calculations were verified and from which sources
- What data is missing and what that prevents
- Any judgment calls made and what alternative interpretations exist
- Whether the data is sufficient to generate a record (v0.2), or what additional data is needed first

The Confidence by Conclusion table is the primary handoff artifact — it tells Quinn exactly where uncertainty lives before he decides whether to proceed to v0.2.
