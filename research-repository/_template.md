# [Company Name]

<!--
Copy this file to company-records/company-name.md. Fill in every field.

SEQUENCING: Write in this order: v0.1 (data) → PDA (interpretation) → this record (synthesis). Never populate mechanism fields before the PDA is complete.

WRITING RULE: Tables contain the evidence. Narrative exists only to interpret the evidence — do not restate numbers already visible in adjacent tables. If the reader can already see a figure, the narrative should explain what it means, not repeat what it says.

ONE FACT, ONE HOME: Raw observations belong in v0.1. Evidence interpretation belongs in the PDA. Final conclusions belong here. If a paragraph could appear in the PDA instead of the company record, it belongs in the PDA. Cross-reference rather than reproduce.

PAGE-LEVEL RULE: If an explanation requires discussing individual pages, it belongs in the PDA — unless that page is essential to understanding the company-level conclusion. A page that represents 49% of recovery gain is essential. A page that illustrates a pattern already named in the mechanism field is not.

The Calculation Log is the verification source for all recomputable metrics — complete it before the narrative, not after.
-->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | |
| **Website** | |
| **Category** | *(Developer Tools / Fintech / HR Tech / Security / Product Analytics / Marketing Automation / Sales Engagement / Customer Success / Customer Support / Project Management / Other)* |
| **Business Model** | *(B2B SaaS / Developer Ecosystem / Fintech / eCommerce / Media-Publisher / Services / Other)* |
| **Dominant Content Model** | *(Editorial / Programmatic / Glossary/Definitional / Tool/Template / Product/Support / Brand/Homepage / Mixed)* — describes the site's overall organic strategy |
| **Company Size** | *(SMB / Mid-Market / Enterprise / Unknown)* |
| **Study Window** | YYYY-MM to YYYY-MM |
| **Analysis Date** | YYYY-MM-DD |
| **Record Finalized Date** | YYYY-MM-DD |
| **Last Verified Date** | YYYY-MM-DD |
| **Methodology Version** | V2.4 |
| **Record Status** | *(Draft / Verified / Final / Needs Revalidation)* |
| **Migration Validation Stage** | *(N/A — new record / Migrated — not revalidated / Metrics revalidated / Narrative revalidated / Fully revalidated)* |
| **External Use Status** | *(Internal only / Client conversations / Client deliverable / Public evidence library)* |
| **Data Provenance** | *(Ahrefs Export / Ahrefs Dashboard / Ahrefs Export + Semrush / Ahrefs Export + Similarweb / Full: +GSC+GA4 / Mixed — see Source Files)* |
| **Calculation Verified** | *(Yes — all key metrics reproduced from source / Partial — some metrics reproduced / No — figures carried from prior analysis)* |
| **Measurement Reliability** | *(High / Medium / Low / Unverified)* — reliability of the underlying traffic observation itself, separate from mechanism confidence. High = multiple exports reconcile at sufficient scale and coverage; Medium = direction credible but magnitude or coverage has limitations; Low = small base, missing trend data, asymmetric samples, or major vendor limitations at this domain's scale; Unverified = migrated figures not recomputed from source exports. |

---

## Outcome Summary

*Reproduces verified values from the Calculation Log. Do not populate this table before the Calculation Log is complete.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | | Ahrefs, [date] |
| Ending Traffic Estimate | | Ahrefs, [date] |
| Traffic Change % | | Calculation Log |
| Outcome Classification | *(Grew / Flat / Declined)* | ±10% threshold |
| Traffic Value Change | | Ahrefs |
| Referring Domains Change | | Ahrefs |

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | *(Continuous Acceleration / Steady Growth / Growth then Pullback / Early Peak then Plateau / Early Peak then Decline / Decline then Recovery / Flat / Steady Decline / Volatile)* |
| **Peak Month** | YYYY-MM |
| **Peak Traffic Estimate** | |
| **Trough Month** | YYYY-MM *(if applicable)* |
| **Trough Traffic Estimate** | *(if applicable)* |
| **Primary Inflection Date** | YYYY-MM |
| **Current Direction** | *(Growing / Stable / Declining)* |

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | *(Algorithm Update / Algorithmic Reassessment / AI Cannibalization / AI Overview Interception / Competitive Displacement / Content Quality / Demand Expansion / Search Demand Shift / Technical / Mixed (Phase-dependent) / Unknown)* — use approved values; see `governance/mechanism-taxonomy.md` for definitions and decision rules. Playbook crosswalk in the same file. |
| **Algorithm Update Reference** | *(Populate only when Primary Mechanism = Algorithm Update or Algorithmic Reassessment. Use exact Update ID from `governance/algorithm-updates.md` — e.g., "March 2024 Core Update". Multiple updates: separate with " / ". Blank otherwise.)* |
| **Mechanism Pathway** | *(One sentence: Trigger or condition → Observed transmission → Traffic outcome. Example: "Algorithm Update (Oct 2025 core) → position-bucket collapse at long-tail → Decline then Recovery with top-bucket acceleration.")* |
| **Contributing Mechanisms** | *(comma-separated from same list — blank if none)* |
| **Mechanism Confidence** | *(High / Medium / Low)* |
| **Confidence Rationale** | *(What evidence supports this? What would change your assessment?)* |
| **Strongest Competing Explanation** | |
| **Disconfirming Evidence** | |
| **Algorithm Alignment** | *(Strong / Moderate / Weak / None / Not assessed)* |
| **AIO Portfolio Susceptibility** | *(High / Medium / Low / Unknown)* — estimated degree to which the site's query/page portfolio is structurally exposed to AI Overview interception |
| **AIO Presence Observed** | *(Yes / No / Not tested)* — whether an AI Overview was directly confirmed to appear on one or more key queries |
| **AIO Observed Effect** | *(Intercepted / Resistant / Mixed / No conclusion / Not tested)* — whether estimated traffic showed a response consistent with AI Overview interception or resistance, where observed |

**AIO field definitions:**

*AIO Portfolio Susceptibility:*
- **High:** Large share of the site's key queries are informational or answer-oriented — structurally likely to trigger AI Overviews.
- **Medium:** Mixed portfolio; some informational exposure, some navigational or commercial queries.
- **Low:** Query portfolio is primarily navigational, branded, or commercial — low structural exposure.
- **Unknown:** Portfolio-level review not performed.

*AIO Presence Observed:*
- **Yes:** An AI Overview was directly confirmed on at least one key query.
- **No:** Relevant queries were tested and no AI Overview appeared.
- **Not tested:** No query-level AIO review was performed.

*AIO Observed Effect:*
- **Resistant:** A page holds ranking and estimated traffic despite an AI Overview being displayed on that query.
- **Intercepted:** Estimated traffic loss pattern is consistent with AI Overview click interception.
- **Mixed:** Evidence of both resistance and interception across different queries or pages.
- **No conclusion:** Data is insufficient to characterize the effect.
- **Not tested:** AIO presence was not directly observed; effect cannot be assessed.

*Causal interpretation belongs in Primary Mechanism + Mechanism Confidence + Confidence Rationale, not here.*

---

## Gross-Loss Offset Analysis

*(Complete only if rate was computed from Top Pages exports. Leave blank if not — do not estimate.)*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | | Top Pages export |
| Gross Loss (absolute) | | Top Pages export |
| Net Change | | Calculation Log |
| Gross-Loss Offset Rate | | Calculation Log |
| Offset Zone | *(Healthy <30% / Moderate 30–60% / High 60–100% / Extreme >100%)* | |
| Reconciliation check | *(Gross Gain − Gross Loss = Net Change? Yes / No / Within [state] tolerance)* | |

**Rules:** If Gross Gain = 0, report as N/A. Gross Gain and Gross Loss must use the same scope, country database, comparison dates, and URL population. Zones are descriptors, not diagnoses.

---

## Page & Content Analysis

*"Dominant Content Type" here refers to which page category dominates traffic — distinct from "Dominant Content Model" in the header, which describes overall organic strategy.*

| Field | Value | Source |
|-------|-------|--------|
| Top 1 Page Traffic Share | | Top Pages export |
| Top 5 Page Traffic Share | | Top Pages export |
| Top 10 Page Traffic Share | | Top Pages export |
| Dominant Content Type | *(Blog / Glossary / Integration / Comparison / Product / Tool / Other)* — broad site-level category; distinct from Page Archetype | |
| Winning Content Type | *(Content type producing most gross gain)* | |
| Losing Content Type | *(Content type producing most gross loss)* | |
| Page Archetypes Observed | *(List archetypes from the Page Archetype Taxonomy present in this record's top pages — e.g., "Methodological, Commercial Evaluation, Homepage." Use controlled vocabulary from `governance/page-archetype-taxonomy.md`. Required for Portfolio Durability Analysis records; recommended for all records.)* | |
| New-URL Gain Share | *(Share of gains from URLs not in the starting period)* | |
| Page Replacement Pattern | *(None / Healthy replacement / Partial replacement / Failed replacement)* | |
| Notable patterns | | |

---

## Recovery

*Three distinct questions: what caused recovery (Recovery Mechanism — external causal factors), what the company did (Observed Company Response — deliberate actions), and what the evidence suggests actually needed doing (Intervention Level — diagnostic implication). A passive recovery has a Recovery Mechanism but Observed Company Response = "No intervention observed" and Intervention Level = "No Intervention Indicated." Never conflate the three.*

| Field | Value |
|-------|-------|
| **Recovery Status** | *(Full / Partial / None / Not applicable — grew throughout / Too early to assess)* |
| **Recovery Mechanism** | *(External causal factor: what drove recovery — e.g., "Algorithmic reevaluation of existing content," "rising search demand," "competitor SERP losses." This is what happened, not what the company did.)* |
| **Observed Company Response** | *(What deliberate actions by the company are observable in the data or public record — Wayback content changes, URL architecture changes, press releases, product launches. Values: `Content investment` / `Structural consolidation` / `Technical intervention` / `No intervention observed` / `Mixed` / `Unknown`. Include evidence basis in brackets: what supports the classification.)* |
| **Intervention Level** | *(Page / Cluster/Portfolio / Site/Technical / Authority/External / No Intervention Indicated / Mixed / Unknown) — what level of intervention does the evidence suggest was actually warranted, given the mechanism and observed outcome? Assessed at study date from evidence, not from what the company chose to do. This field captures the diagnostic implication; Observed Company Response captures what happened. See coding standard below.* |
| **Recovery Confidence** | *(High / Medium / Low / Not applicable)* |
| **Recovery Notes** | |

**Intervention Level coding standard:**
- **Page:** evidence identifies the specific content asset as the mechanism constraint — intent mismatch, thin content, factual inaccuracy, or structural on-page problems.
- **Cluster/Portfolio:** problem is broader than one URL — coverage gaps, cannibalization, content mix, pruning, internal relationships, topic authority distribution.
- **Site/Technical:** architectural-level cause — crawlability, migrations, redirects, indexation, Core Web Vitals, template issues.
- **Authority/External:** external signal constraint — competitive authority, link profile, brand/entity recognition, market position.
- **No Intervention Indicated:** positive evidence that the asset(s) didn't require intervention. Requires: (1) mechanism type inconsistent with a page-level defect (Algorithmic Reassessment reversal, Demand Expansion, SERP environment change, competitor movement), AND/OR (2) Wayback evidence confirms page was unchanged through the recovery window, AND the page recovered. Absence of observed company action alone does not qualify — use Unknown in that case.
- **Mixed:** multiple levels apply simultaneously; document which level applies to which part of the portfolio and why.
- **Unknown:** evidence insufficient to assess. Use for migrated records without page-level analysis, and for cases where page defect vs. external signal causality cannot be distinguished. Do not use as a default for "we couldn't find anything."

---

## AI Discoverability

*(Optional section — complete when AI citation or visibility data is available. Design around durable concepts, not vendor-specific scores. Different tools can coexist in the Metrics field.)*

| Field | Value |
|-------|-------|
| **Measured** | *(Yes / No)* |
| **Analysis Date** | YYYY-MM-DD |
| **Data Source(s)** | *(Profound / Scrunch / Internal prompt library / Manual testing / Mixed)* |
| **AI Visibility Strength** | *(High / Medium / Low / Unknown)* — classify per current AI Discoverability methodology (`governance/ai-discoverability-methodology.md`) |
| **AI Discoverability Trend** | *(Improving / Stable / Declining / Unknown)* |
| **Trend Compared To** | *(Initial measurement / Previous quarterly assessment / Previous annual assessment / Other — specify)* |

### Coverage

*(What was evaluated? Describe the scope: engines tested, prompt categories, prompt count, time period.)*

- Engines tested:
- Prompt categories: *(AI answer engines / AI Overviews / Commercial prompts / Informational prompts / Branded prompts / Comparison prompts)*
- Prompt count:
- Evaluation period:

### Findings

*(Observed facts, not assessments. State what the data showed. Example: "Brand appeared in 43% of tested informational prompts. Citation rate dropped from 61% to 43% between March and June 2026." Avoid labels like "strong" or "weak" here — those go in AI Visibility Strength.)*

### Key Metrics

*(Raw platform data. Do not normalize prematurely — different tools can coexist.)*

| Metric | Value | Source | Date |
|--------|-------|--------|------|
| | | | |

### Interpretation

*(2–3 sentences: what does this tell us? How does it relate to traditional organic performance? Is there evidence of divergence between AI visibility and search visibility?)*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | *(High / Medium / Low / Mixed / Unknown)* — degree to which the site's organic search footprint is topically connected to the company's commercial positioning |
| **Best-Fit Client Type** | *(Who should this case be shown to?)* |
| **Best-Fit Problem** | *(What client question does this case help answer?)* |
| **Relevance Conditions** | *(When is this a valid comp?)* |
| **Non-Comparable When** | *(Where does the analogy break?)* |
| **Primary Lesson** | *(One sentence — the observable pattern and takeaway. State facts, not settled causal claims. Do not present medium- or low-confidence attributions as fact.)* |
| **Evidence Use** | *(Diagnostic / Strategic / Cautionary / Recovery precedent)* |
| **Evidence Basis** | *(One client-readable sentence on the data this record is based on — e.g., "Based on Ahrefs Top Pages exports covering January 2024 through June 2025; no first-party analytics were available.")* |

---

## Risk Flags

*(Long-tail or irregular observations not captured by structured fields. Do not duplicate values already in structured fields.)*

Examples: Single-page risk / Brand-dependent / International subfolder issue / Migration-related / Programmatic sprawl / Intent mismatch / Index bloat / Successful content replacement / Legacy-content dependence / Homepage dependence

---

## Related Documents

*(Cross-references only — no summaries or duplicated analysis. List filenames or titles.)*

- Comparison briefs: *(Required if one exists for this company. e.g., `comparison-briefs/github-circleci-harness-cloudbees.md`. Mark "None" only if no comparison brief covers this company.)*
- Portfolio Durability Analysis: *(Required for Algorithmic Reassessment companies, and recommended for any record with a meaningful portfolio redistribution event. e.g., `portfolio-durability/company-name.md`. Mark "N/A" only if not applicable.)*
- Synthesis documents: *(e.g., `developer-tools-synthesis.md`)*
- Studies: *(e.g., AI citation validation study)*
- Report references: *(e.g., Chapter 5, Original 118-company report)*

---

## Calculation Log

*The authoritative verification source for all recomputable metrics. Populate this before the Outcome Summary and narrative. Structured tables and narrative sections reproduce values from here — they do not independently establish verification.*

*Directly reported source metrics (starting/ending traffic estimates, referring domains, traffic value) do not require a Calculation Log row — they need only a named source file and date in the Source Files table.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | | | | (end − start) / start | | *(Recomputed / Carried / N/A)* |
| Gross Gain | | | Pages with positive traffic change, excl. NaN | SUM(positive changes) | | |
| Gross Loss | | | Pages with negative traffic change, excl. NaN | ABS(SUM(negative changes)) | | |
| Net Change | | | Same as above | Gross Gain − Gross Loss | | |
| Gross-Loss Offset Rate | | | Same as above | Gross Loss ÷ Gross Gain | | |
| Top 5 Traffic Share | | | Ending period, top 5 rows by traffic | SUM(top 5) / total ending traffic | | |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| | | | | |

---

## Narrative

*Writing rule: Tables contain the evidence. Narrative exists only to interpret — not to restate numbers already visible in adjacent tables. Target: one to two sentences per subsection. If you've written more, verify that each sentence adds interpretive meaning the adjacent table cannot convey.*

*Before: "Traffic fell from X to Y between July and December (−Z%). Recovery began in January and reached W by July, remaining −P% below the cohort start." After: "The steep six-month decline followed by narrow, partial recovery — still below the cohort start — suggests mechanism-specific segment impact rather than broad domain deterioration."*

*If a paragraph belongs equally in the PDA, move it there and reference the conclusion here instead.*

### Company Overview

*(1–2 paragraphs. What the company does, who they sell to, what their content model looks like. Focus on what's relevant to the organic growth story.)*

### Traffic Trajectory

*(What the shape means — not what the numbers are. Numbers are already in the Traffic Trajectory table. State the interpretive point: why this shape is significant, what it implies about the mechanism, how it compares to pattern expectations.)*

### Mechanism Analysis

*(What drove the outcome? The full evidence lives in the PDA — reference it, don't reproduce it. Summarize the PDA's mechanism conclusion, note what remains uncertain, and address the strongest competing explanation. Do not present medium- or low-confidence attributions as settled fact.)*

### Page & Content Analysis

*(What the page concentration and content-type distribution implies — not what the numbers are. Those are already in the Page & Content Analysis table. Focus on what the pattern means: why this concentration level matters, what it predicts about recovery breadth, what it says about the content model.)*

### Recovery

*(If recovery occurred: what the recovery pattern implies about mechanism — narrow vs. broad recovery tells a different story. If still declining: what the trajectory suggests. If grew throughout: what sustained it.)*

### Client Applicability

*(Expand on the structured block above. State the observable pattern — not a causal claim — when writing for client use.)*

---

## Research Contribution & Implications

*Complete after the narrative. This section connects the company record to the research operating system. Every record must complete all four questions — but not every record produces a new Evidence Register entry. It is acceptable, and sometimes correct, to conclude that a company provides no new register-level evidence. That conclusion itself is meaningful data. If the answers feel thin, the analysis may not be complete enough to finalize the record — but do not manufacture a contribution where none exists.*

### What did this company teach us?

*(One or two specific, observable findings — not general takeaways. Cite the mechanism, the page types, the pattern. Example: "Commercial methodology pages recovered without visible content rewrites, suggesting algorithmic reevaluation of existing content rather than content investment drove recovery.")*

### Did this strengthen, weaken, or challenge an existing hypothesis?

*(Reference specific hypotheses from the Durable Demand Framework or the Evidence Register. Example: "Strengthens E-001 — commercial methodology resilience — by providing a second case with consistent methodology." Or: "Challenges the assumption that rewrites are required for recovery — see E-002.")*

### What new question did this create?

*(What does this company's evidence make you wonder about that you didn't wonder before? Example: "Why did methodology pages recover while adjacent editorial pages on the same domain did not? Is this archetype-specific or quality-specific?")*

### How should this change future client recommendations?

*(One concrete, actionable implication. Example: "Before recommending a full content rewrite for a declining methodology page, check whether the page's external signals — not its content — may be the binding constraint. A rewrite may be unnecessary.")*

### Evidence Register contributions

*(Required field — but the correct answer may be "None." List Evidence IDs this record strengthens, challenges, or creates. Only add to the register when the finding materially strengthens, challenges, or creates a finding. Do not force an Evidence Register entry for an ordinary or inconclusive result.)*

- Strengthens: *(e.g., E-001, E-003 — or "None")*
- Challenges: *(e.g., E-002 — or "None")*
- Creates: *(e.g., E-007 with observation summary — or "None." If creating a new entry, add it to the Evidence Register before finalizing this record.)*
- Recommendation updates: *(e.g., R-001 confidence advances to Moderate — or "None." If this record promotes an evidence entry to Replicating or Established strength, check whether any linked recommendations should be updated.)*

---

## Verification Checklist

Complete before marking record Verified or Final.

**Calculation Log**
- [ ] Calculation Log populated before Outcome Summary and narrative were written
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
- [ ] Gross Gain − Gross Loss reconciles to Net Change within stated tolerance
- [ ] Net Change + Starting Traffic ≈ Ending Traffic
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
- [ ] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain (or N/A if Gross Gain = 0)
- [ ] Source export passed standard import and normalization workflow

**Narrative audit**
- [ ] Searched narrative for all %, currency symbols, and specific traffic numbers
- [ ] Every recomputable number in the narrative traces to a verified Calculation Log row
- [ ] No approximate language (~, "roughly," "about") used for figures that were actually computed
- [ ] Rounded values follow one consistent rule

**Client Applicability**
- [ ] Primary Lesson states observable pattern, not settled causal claim
- [ ] Comp Summary in `_index.xlsx` row reflects same standard (observable pattern, not causal claim)
- [ ] Medium- and low-confidence mechanisms not presented as fact in any client-facing field
- [ ] Evidence Basis written in plain language a client can read
- [ ] External Use Status reflects actual readiness for external exposure

**Fields & index**
- [ ] All controlled-vocabulary fields use approved values
- [ ] Record Status and Migration Validation Stage both updated
- [ ] Index row values match verified record values
- [ ] AIO fields (Susceptibility, Presence Observed, Observed Effect) reflect observed evidence, not causal interpretation
- [ ] Observed Company Response field populated — if Unknown, state what evidence would resolve it
- [ ] Observed Company Response in index row matches record
- [ ] Intervention Level field populated — if Unknown, state what evidence would resolve it; "No Intervention Indicated" requires positive evidence basis, not just absence of observed action
- [ ] Related Documents section populated (or explicitly marked None)

**Research Contribution & Implications**
- [ ] Section completed — all four questions answered
- [ ] Evidence Register IDs listed (Strengthens / Challenges / Creates — "None" is acceptable if no register-level contribution)
- [ ] If new Evidence Register entries were created, they are added to `evidence-register.md` before this record is marked Verified
- [ ] At least one answer to "How should this change future client recommendations?" stated concretely (even if the answer is "No change to current recommendations")

---

## Analysis History

*(This is the living record of how our understanding of this company evolves over time. Each new observation appends here — it does not overwrite the original study window findings. The baseline study window named in the Header is one observation in this history, not a permanent reference point everything is measured against forever. When you revisit a company, add a new Latest Observation block and move the previous one into Prior Analyses.)*

*Rule: new observations append. They never overwrite prior time-bound findings. The analysis period expands; the original finding is preserved.*

### Latest Observation

| Field | Value |
|-------|-------|
| **Observation Date** | YYYY-MM-DD |
| **Data Through** | YYYY-MM |
| **Analysis Period** | YYYY-MM – YYYY-MM *(cumulative from baseline study window start)* |
| **Latest Traffic Estimate** | |
| **Change Since Prior Observation** | *(+X% or −X% from [prior observation endpoint] of [prior value])* |
| **Latest Direction** | *(Growing / Flat / Declining / Volatile)* |
| **Current Signal** | *(Continuation / Acceleration / Deceleration / Reversal — relative to prior observation)* |
| **Mechanism Status** | *(Supported / Complicated / Changed / Insufficient evidence — does the new data change the prior mechanism assessment?)* |

*Current interpretation: [What has changed since the prior observation and whether it affects the existing mechanism assessment. If unchanged, state that explicitly.]*

### Prior Analyses

| Date | Analysis Period | Traffic at Close | Signal | Notes |
|------|-----------------|-----------------|--------|-------|
| *(baseline)* | | | | |

---

## Historical Amendments

*(Append-only log. Add an entry whenever structured fields are updated. Do not edit or delete prior entries. Structured fields always reflect the current best assessment; this section explains what changed and why.)*

*(Amendment threshold: meaningful new data, recovery signals, mechanism confidence updates, AI discoverability changes. Full re-analysis threshold: major rebrands, domain migrations, or fundamental content model pivots that make the original study window no longer the right baseline.)*

**Amendment entry format:**

**YYYY-MM-DD**
- **Reason:** *(Recovery observed / New data available / Methodology update / AI discoverability reassessment / Error correction / Other)*
- **Sections updated:** *(list)*
- **Summary:** *(what changed and why)*

---

*Record finalized: YYYY-MM-DD | Last verified: YYYY-MM-DD*
