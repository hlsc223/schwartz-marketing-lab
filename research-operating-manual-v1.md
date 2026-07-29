# S.LAB Original Research Program — Operating Manual (V1)

*Status: Methodology frozen (V1.2) as of June 26, 2026 — execution underway. Phase 3 research design (business-question framing + standardized extraction framework) locked as V1.5, June 29, 2026. Data-request division of labor (Section 6a) locked as V1.7, June 29, 2026. Living synthesis matrix and end-of-cohort decision gate (Section 6b) added as V1.8, June 29, 2026. Research efficiency standards (Section 6c) added as V1.9, June 29, 2026. See Section 12 for what "frozen" permits and for the full changelog.*
*This is the source-of-truth working document for Research Project #1. Update it as the project progresses — don't let decisions live only in chat. Section 12 (Version History) exists specifically to capture what changes and why.*

---

## 1. Executive Summary

S.LAB is publishing its first piece of original research: a study of ~100 B2B SaaS companies designed to answer one question —

**What did the B2B SaaS companies that continued growing organic traffic have in common?**

This is Version 1 of what is intended to become an ongoing research program, not a one-off report. The goal of V1 is narrower than "build the perfect research methodology" — it's to publish one genuinely useful, evidence-backed, defensible report, and to learn how to run this kind of project so V2 can be better.

This study looks at organic resilience during a period of increased AI search visibility and organic search volatility — not a study specifically about AI Overview exposure or disruption. AI Overviews are relevant context, not the dependent variable.

Method, in brief: source ~100 companies from independent third-party B2B SaaS directories (primarily G2 category pages) across multiple categories, classify each by organic traffic trend over a defined trailing period using Ahrefs, then spend the majority of effort reverse-engineering the 8–10 strongest growth winners for recurring qualitative patterns, with a small comparison group of decliners to sharpen contrast. We are not claiming causation. We are looking for, and reporting, recurring patterns — and we publish what we find even when it contradicts our own assumptions.

This document is the operating manual for the entire project: methodology, workflows, templates, tracking design, and the plan for turning research exhaust into ongoing content. It should be detailed enough that re-opening it in six months immediately reconstructs how and why every decision was made.

---

# Project Dashboard

## Current Phase

- ☑ Company Selection
- ☑ Traffic Classification
- ☐ Winner Deep Dives
- ☐ Comparison Reviews
- ☐ Pattern Analysis
- ☐ Report Drafting
- ☐ Editing
- ☐ Publication

## Current Focus

Phase 2 (Traffic Classification) closed out at 118 locked companies, June 28, 2026 — see V1.4 changelog. Moving into Phase 3: select 8–10 deep-dive winners and ~8 comparison decliners from the 118, populate Pass 1 Archive's Selected for Deep Dive? / Selected for Comparison Group? fields (Task #209), and begin deep dives using the Section 6 template.

## Next 3 Tasks

- ☐ Select 8–10 deep-dive winners from the 44 Grew companies (Section 4 spot-check logic, Section 6 template) and ~8 comparison decliners from the 55 Declined companies (Section 7)
- ☐ Populate Selected for Deep Dive? / Selected for Comparison Group? on Pass 1 Archive for the selected companies so Dashboard progress counts are live
- ☐ Begin Phase 3 deep dives, starting with logged candidates already flagged as interesting (Semaphore's from-zero launch, GitHub's AEO-relevant decline) — see Research Log

---

## 2. Research Objectives

### The question
What did the B2B SaaS companies that continued growing organic traffic during a period of increased AI search visibility and organic search volatility have in common — and what, if anything, distinguished them from companies that didn't?

### Why this question, not a different one
- It's falsifiable. Some companies could turn out to have nothing meaningful in common, and we'd report that.
- It's not yet well-answered. Existing AI-visibility research (2X AI Innovation Lab's AI Visibility Index, Similarweb's Generative AI Brand Visibility Index) studies whether companies are AI-visible, not what behaviors are associated with sustained organic growth through this period. We are deliberately not replicating that category.
- It's small enough for one person to execute and large enough to be more than anecdote.

### Hypotheses going in (to be tested, not assumed)
These are working hypotheses, stated explicitly so we can check, after analysis, whether the data actually supported them or whether we're forcing a narrative onto it.

1. Growth winners will show a higher concentration of "third-party-citable" content types (comparison pages, alternatives pages, original data, glossaries/definitional content) than decliners.
2. Growth will be concentrated in a small number of high-leverage pages/sections rather than evenly distributed — i.e., a few assets doing most of the work.
3. Referring-domain growth will track organic-traffic growth more tightly than publishing volume will.
4. Winners will show evidence of content refresh/iteration on existing pages, not just net-new publishing.
5. At least some winners will show strong organic growth without any visible AI-visibility optimization — which would be an important, publishable finding against our own thesis if true.

### Phase 3 organizing questions (added V1.5, June 29, 2026)
The Section 5 trajectory taxonomy (Continuous Acceleration, Steady Growth, etc.) is the *sampling methodology* — how we found and described candidates — not the research goal itself. The actual goal of Phase 3 is to produce a practical, evidence-backed playbook for how B2B SaaS companies grow, stall, recover, or decline in organic search, so S.LAB can apply the lessons with future clients. Phase 3 deep dives are organized around the five business questions below, not around trajectory labels. A company can be selected because its trajectory shape made it discoverable, but its deep dive is written to answer one of these:

1. **How do companies continue accelerating after they've already become successful?** (Companies with real existing scale/authority that keep compounding — no stall, no prior decline.)
2. **What causes previously successful companies to stall or decline?** (Real decline, in progress or unresolved within the window.)
3. **How do companies successfully recover after a sustained decline?** (Genuine decline followed by genuine recovery — full or partial.)
4. **Why do some companies never recover?** (Sustained or chronic decline with no recovery signal in the window.)
5. **How do companies break out of long periods of stagnation or flat growth?** (Flat/plateaued — not declining — followed by a breakout. Distinct from Q1: these companies were stuck, not compounding from strength, before the inflection.)

Q5 was added after observing that several trajectory-labeled "Continuous Acceleration" companies (e.g., Gainsight, Vanta) don't actually fit Q1 — they were flat or stalled for most of the window, then broke out late. That's a different, and for S.LAB's realistic client base arguably more common, problem than "already winning, how do we keep winning." Note also that Q1–Q4 alone are not symmetric in what the winner-only sample can supply: by construction, winners can answer Q1, Q3 (partially — recovery is visible in some Grew/Flat companies), and Q5, but **Q2 and Q4 require companies that are currently or chronically declining** — i.e., promoted comparison-group companies, not the Grew population. Don't assume the 8–10 deep-dive "winners" alone can cover all five questions; check explicit coverage per question before finalizing the cohort (Section 6).

### What success looks like
- A published report with a defensible, reproducible methodology that a skeptical reader (including a competitor) could understand, reproduce, and evaluate.
- At least 3–5 patterns that show up across multiple winners, not just once.
- At least one finding that surprises us or complicates our own priors — if everything confirms what we already believed, that's a signal we under-investigated, not that we were right.
- A methodology and template set good enough that V2 starts from "improve this" rather than "rebuild this."
- Inbound interest: citations, backlinks, replies, or outreach from people in the dataset — not pageviews as the primary success metric.

### What this project is explicitly not trying to do
- Prove that "authority" causes growth. Cross-sectional data can't support that claim; we'll say so in the report.
- Build a scored "Authority Index" or any composite ranking of companies. That's a plausible V2/V3 project, but only after multiple studies give us something to synthesize, and only with eyes open to the fact that 2X and Similarweb already occupy that exact content category.
- Cover every B2B SaaS company everywhere. We are explicitly studying a defined slice (see Methodology) and saying so.

---

## 3. Methodology

### Population studied
Growth-stage B2B SaaS companies, independently operating, with sufficient organic search presence to analyze. "Growth-stage" here is doing real work in the framing — it positions the population as companies past the earliest startup phase but well short of enterprise scale, which is also the realistic profile of S.LAB's own near-term client base.

### Sample size
Target: 100 companies. Acceptable range: 90–110, depending on how many candidates pass the inclusion screen described below. Don't pad the count with weak-fit companies just to hit 100.

### Sampling frame
Independent third-party B2B SaaS directories — primarily G2 category pages, supplemented as needed by other public, replicable lists (e.g., Crozdesk, GetApp, Capterra category pages) if G2 alone doesn't yield enough qualifying companies in a given category.

**Important methodological note, locked in after testing:** G2's category lists name companies; G2's *segment grids* (Small-Business / Mid-Market / Enterprise) reflect the company size of the *reviewer* (the buyer), not the size of the vendor being reviewed. Do not use G2 segment placement as a proxy for vendor headcount — it does not measure what we need it to measure. Vendor size must be checked manually per company (see Section 4).

G2's own quality labels (Leader, High Performer, Momentum Leader, etc.) are used only to *discover* candidate companies. They are never used as an analytical variable, a selection filter, or evidence in the final report. Selecting on G2's own composite score and then "finding" that strong performers have stronger market presence would just be re-deriving G2's own scoring formula.

### Category spread
**Software category is the sourcing mechanism for this study, not the explanatory variable.** Category is how we find and structure the sample (it's the only practical way to pull a diverse set of ~100 companies from G2 at solo-operator scale). It is not assumed to be what actually explains any growth pattern we find. The two metadata fields added below (Buying Motion and Primary Buyer) exist specifically so the analysis phase can discover that the real pattern cuts across categories rather than within them, if that's what the data shows.

Locked category list (10 categories, ~10 companies each):

1. Sales Engagement / Sales Intelligence
2. Marketing Automation
3. Customer Support / Help Desk
4. Customer Success
5. HR / People Operations
6. Finance / Spend Management
7. Project Management / Collaboration
8. Developer Tools / DevOps
9. Security / Compliance
10. Product Analytics / Product Management

Two categories carry known noise risks worth screening with eyes open rather than excluding: Marketing Automation companies are run by marketers and likely overperform on content/SEO/AEO tactics relative to other B2B SaaS — treat this category as a ceiling reference, not a representative baseline, when writing up cross-category patterns. Project Management/Collaboration is dominated by a handful of massive incumbents (Asana, Monday, ClickUp, Notion, Atlassian) that own most head-term search volume independent of anything in this study's window — the in-band companies left in this category are more likely competing for long-tail terms than category-defining ones, so expect its growth pattern to look different from the rest, and don't force it to generalize.

Target roughly 10 companies per category to reach ~100. Allow flexibility if a category naturally yields fewer qualified companies than another — don't force equal representation to hit a round number.

### Inclusion criteria (a company must satisfy all of these) — updated V1.1
Pass 1 exists to answer one question only: *does this company belong in the study population?* The five gates below are the entire test. (See Section 12 for why this list changed from V1.)

1. **Is it a B2B SaaS company?** Primary business is B2B SaaS — not a marketplace, not primarily services, not consumer.
2. **Is it operating independently — or, if acquired/merged, can we clearly document how it should be treated?** Acquisition or merger during the study window is no longer an automatic exclusion. It triggers a documentation requirement: record what happened, when, and a clear, defensible treatment decision (include as-is with a flag, include under the acquiring entity with a noted caveat, or exclude — whichever can actually be supported and explained). The only automatic exclude is when the M&A history makes the company's operating history impossible to analyze cleanly (e.g., the entity effectively ceased independent operation).
3. **Does it have a stable enough operating history and domain to analyze over the study period?** Same primary domain across the window, with enough continuous operating history that an Ahrefs trend means something. A company that went fully dark/inactive during the window fails this gate regardless of M&A status.
4. **Is it a reasonable fit for the category being studied?** A company can pass every other gate and still not belong in a given category's sample if its core product isn't actually that category's software (e.g., a contact-center workforce-analytics tool isn't a Customer Success platform just because CS teams sometimes use it). This was previously tracked as descriptive metadata only; it is now an explicit screening gate.
5. **Does it have sufficient organic visibility to analyze?** Minimum threshold: nonzero, trackable organic traffic estimate at both the start and end of the study window. Out of scope for Pass 1 — confirmed during Pass 2 Ahrefs analysis, not screened here.

**Employee count is no longer an inclusion/exclusion gate.** See the "Employee count" subsection below.

### Exclusion criteria — updated V1.1
- M&A history (acquisition, merger, rebrand) that cannot be clearly documented and treated per gate 2 above — i.e., the company's operating history is too entangled or discontinuous to analyze defensibly, not merely "an acquisition happened."
- Domain changed (new TLD, new primary domain, major URL restructure) during the window — breaks Ahrefs trend continuity.
- Operationally inactive/defunct during any part of the study window.
- Primarily PLG-consumer or prosumer tool with no real B2B ICP.
- Core product is not a reasonable fit for the category being studied (gate 4).
- Traffic too low to distinguish signal from noise (exact floor set during screening, see above).

**Do not exclude on employee count.** A company outside any size range is not, by itself, a reason to exclude — see below.

### Employee count (descriptive metadata, not a screening gate) — updated V1.1
V1 treated LinkedIn-reported employee count in the 50–1,000 range as a soft inclusion band. Pass 1 execution on the Customer Success category showed this was functioning as a de facto gate in practice (companies at 6, 9, and 1,100+ employees were being treated as exclusion-adjacent), which doesn't match the actual research question: *what did B2B SaaS companies that continued growing organic traffic have in common* — not *what did 50–1,000-person B2B SaaS companies have in common.*

Employee count is now recorded for every company as descriptive metadata, used during synthesis to understand and segment the sample (e.g., "did the pattern hold for both 10-person and 1,000-person companies, or only one band?"), but it does not gate inclusion.

It remains useful as a **sourcing guideline**, not a screening rule: when pulling candidates from G2/directories, lean toward growth-stage companies broadly (roughly sub-2,000 employees, no fixed floor) so the sample isn't unintentionally dominated by Fortune 500 incumbents or pre-product micro-startups. This is a judgment applied while building the candidate pool, not a pass/fail test applied to any individual company already in the pool.

**Do not exclude on this basis — flag instead:** companies where a non-core asset (a free tool, calculator, template library, glossary, or unrelated high-traffic content hub) appears to be driving a meaningful share of organic traffic. This is explicitly not a reason to exclude a company. It's a tag to add in the tracking sheet notes field, and a strong candidate for its own "anything surprising" callout in the deep dive — a free tool or content hub driving durable growth could be one of the most interesting findings in the entire report, not noise to screen out.

### Data sources
- **Ahrefs** (Site Explorer + Batch Analysis) for organic traffic trend, referring domains, top pages, and keyword data. Disclose in the report that Ahrefs traffic is a *modeled estimate*, not first-party analytics — this is a real limitation, not a footnote to bury.
- **G2** for company discovery (not for analysis).
- **LinkedIn company pages** for employee count (standardized single source — see Section 4 for why).
- **Crunchbase** for founding year, funding status, public/private status, and to flag any M&A activity in the study window.
- **AI visibility spot-checks** (manual prompts in ChatGPT/Perplexity, or a tool like Otterly.ai if budget allows) for the deep-dive winners only — not feasible at the full 100-company scale, and we should say so rather than implying full coverage.

### Study window
Trailing 12–18 months, framed around a period of increased AI search visibility and organic search volatility rather than an arbitrary calendar year. Practical window: **January 2025 – June 2026**, finalized once Ahrefs historical data availability is confirmed for that exact range. Specific AI Overview coverage statistics, if used at all, should only appear in the final report if independently sourced and cited at the time of writing — don't lock in figures here that may be stale or unsourced by publication.

### Classification thresholds — finalized June 28, 2026 (Phase 2 closeout)
**Grew:** traffic % change > +10%. **Flat:** −10% to +10%. **Declined:** < −10%. Applied via formula (Pass 2 field 5, Section 5) against Jan 2025 → Jun 2026 traffic, with documented manual overrides for zero-base edge cases (Section 5 / Pass 2 Notes — e.g. Kertos, Semaphore) where the percentage formula is mathematically meaningless off a zero or near-zero start.

This was the working definition used throughout Pass 2 execution; it's locked here now that the full distribution is in hand across all 118 locked companies: 44 Grew, 19 Flat, 55 Declined (see Dashboard). The Grew group comfortably clears the Phase 2 checkpoint (Section 8: "at least 8–10 companies clearly, not marginally, growing") — no threshold adjustment needed.

**Pass 2 data collection (added during execution):** each company's Ahrefs Performance report is exported (not manually transcribed) to capture the monthly time series for Organic Traffic, Organic Traffic Value, and Referring Domains. From that export, each company's standardized summary records: January 2025 and June 2026 snapshots (start/end, used for % change and Grew/Flat/Declined classification — unchanged from above), plus Peak Organic Traffic and Peak Traffic Month (Section 5) and a Traffic Trajectory label (Section 5) describing the shape of the time series between those two points. The trajectory and peak fields are descriptive metadata only, scoped strictly to the study window — they do not change how Grew/Flat/Declined is determined and are not a new screening gate. No additional Ahrefs reports (Top Pages, Keywords, Backlinks) are pulled during Pass 2 — that begins in Pass 3, deep-dive phase only.

**Measurement vs. interpretation boundary (clarified during Pass 2 execution):** Pass 2 is the objective measurement phase — classification and the trajectory/peak metadata above are determined from the study window only, with no exceptions for compelling pre-window history. Anything notable that happened *before* January 2025 (a much larger historical peak, a long decline that started recovering mid-window, a pre-window acquisition/rebrand/domain migration, a product launch) is real and useful context, but it belongs in the Historical Context section of the Pass 3 Deep Dive template (Section 6), not in Pass 2 classification or metadata. This keeps every company measured on the same consistent basis while still preserving the richer story for the analysis phase.

**Scope expansion (V1.2):** Two of the historical-context data points — Historical Peak Traffic (all-time high, not window-bound) and Historical Peak Month — are now collected as Pass 2 metadata for **all 100 companies**, not just the 8–10 Pass 3 deep dives. This is a factual-lookup field (Ahrefs' full-history view, not the window-only export), cheap to capture at full scale, and useful on its own as a **Distance from Historical Peak %** metric: `(June 2026 Traffic − Historical Peak Traffic) / Historical Peak Traffic`, i.e., how far current traffic sits above or below the company's all-time high. Negative = still below the historical peak; positive = has exceeded it. This does not change the measurement/interpretation boundary above — Historical Peak Traffic/Month/Distance from Historical Peak % remain purely descriptive and play no role in Grew/Flat/Declined classification. The narrative interpretation of *why* a company's history looks the way it does (long-term story, inflection points, M&A, rebrands, domain migrations, product launches) remains Pass 3-only — see Section 6.

### Limitations (state these in the report, not just here)
- Cross-sectional, not causal. We can describe what winners had in common; we cannot prove those things caused the growth.
- Ahrefs traffic is modeled, not measured.
- Manual qualitative review of deep-dive companies is inherently subjective — mitigated by using the same template for every company (Section 6), but not eliminated.
- Sample is not randomly drawn from "all B2B SaaS" — it's drawn from companies visible enough to appear on G2 category pages, which already excludes the smallest and least-discoverable companies.
- One researcher, time-boxed review per company — depth is intentionally capped (see Section 4 and Section 6).

### Quality-control process
- Every company's inclusion/exclusion decision gets one line of rationale in the tracking sheet (Section 5) — "looked fine" is not an acceptable rationale.
- Before locking the final 100, spot-check 10 companies against the original hypothesis: would a marketing leader at this company plausibly be a future S.LAB client? If most spot-checks fail that test, the sampling band is wrong and needs adjusting before proceeding, not after the report is drafted.
- Before publishing, re-run Ahrefs pulls for the deep-dive winners and comparison group a second time close to publication, to catch any data drift or errors from the original pull.
- Have at least one outside reader (even non-expert) read the draft report before publishing and flag any claim that isn't backed by something visible in the tracking sheet.

---

## 4. Company Selection Workflow

### Step-by-step process

1. **Pick a category** from the target list (Section 3). Pull the G2 category page (and size-segment pages only as a discovery aid, never as a size filter — see the methodology note above).
2. **List 20–30 candidate companies** from that category page and any supplementary directory needed to reach that count. Apply the sourcing guideline (lean toward growth-stage companies, roughly sub-2,000 employees, no fixed floor) when building this list — not as a pass/fail test, just to avoid an accidentally Fortune-500-or-micro-startup-heavy pool.
3. **Run the inclusion screen on each candidate** against the five gates in Section 3, in this order, stopping at the first clear failure (cheapest checks first):
   a. Is it B2B SaaS, not consumer/marketplace/services? (Quick judgment call from the company's own homepage.)
   b. Check LinkedIn company page for employee count. Record it as descriptive metadata — it does not gate inclusion (updated V1.1, see Section 3).
   c. Check Crunchbase for funding/M&A status. If acquired, merged, or rebranded at any point, document what happened and decide/record how it should be treated (include with a flag, or exclude) — do not auto-exclude on M&A alone (updated V1.1). Note founding year and public/private status while there.
   d. Pull a quick Ahrefs Site Explorer check — does it have trackable organic traffic across the study window, or is it too thin to analyze? Exclude if too thin.
   e. Confirm domain stability and continuous operation — same primary domain across the full window, no extended dark/inactive period.
   f. Confirm category fit — is the core product a reasonable fit for the category being studied, not just adjacent or tangentially used by that category's buyers? Exclude if the fit is weak.
4. **Record every candidate**, including rejected ones, in the tracking sheet with a one-line rejection reason. This matters for reproducibility and for catching our own selection bias later.
5. **Repeat across categories** until each category has its target count of qualifying companies and the running total approaches 100.
6. **Run the spot-check** described in Section 3's Quality-Control process once ~20–30 companies are screened, before continuing to screen the rest. If the audience-fit test fails, adjust the size band or category mix now.
7. **Lock the final list** once ~100 qualifying companies are confirmed. After this point, don't swap companies in or out without a documented reason (e.g., a company turns out to have been acquired right after inclusion).

### Decision rules — updated V1.1
- Employee count is never the deciding factor on its own (updated V1.1) — it's recorded as metadata regardless of how small or large the company is. Use category balance, not size, when a genuinely close call needs a tiebreaker (e.g., two otherwise-equal candidates, one category overrepresented relative to the other).
- When a company is acquired/merged at any point at or near the study window (including shortly before it starts), document the M&A clearly and decide a defensible treatment. Default toward **exclude** when the acquisition is recent enough, or disruptive enough (leadership change, layoffs, brand absorption), that the company's organic-traffic history can't be cleanly attributed to one operating entity across the window. Default toward **include with a flag** only when the acquisition is well-documented, the brand/domain/traffic history remained continuous and attributable, and the treatment can be stated in one clear sentence.
- When employee-count sources disagree significantly (this will happen — see the Instantly.ai example below), use LinkedIn's self-reported count as the single standardized source for the published methodology, even though it's imperfect. Consistency across all 100 companies matters more than chasing the "most accurate" number for any one company, and LinkedIn is the most defensible single source to disclose. This still matters for descriptive accuracy even though employee count is no longer a gate.
- When a company's traffic is dominated by something other than its core product (a free tool, an unrelated content hub), flag it as a note rather than excluding automatically — it might become its own interesting observation.
- When category fit is genuinely weak (the company's core product isn't actually the category's software, even if adjacent buyers sometimes use it), exclude — this is now a documented gate (Section 3, gate 4), not a soft metadata note.

### Edge cases already identified (real examples found during methodology testing — useful as calibration)
- **ChurnZero** (~150–225 employees depending on source, ~$180M ARR): include. Employee count is metadata only as of V1.1; this company stays in as a now-larger, well-resourced data point rather than an upper-band flag.
- **UserGuiding** (~47–51 employees): include — small team, unlikely to have in-house content/SEO infrastructure; a useful low-headcount data point for synthesis, not included *because* it's lower-band.
- **Instantly.ai**: employee-count sources disagree by an order of magnitude (15 vs. 236 in different databases pulled the same month). Real, recurring problem at this scale — don't assume any single free data source is reliable for any individual company. Standardize on LinkedIn and disclose the limitation. Disagreement no longer affects inclusion, only the metadata value recorded.
- **Staircase AI**: acquired by Gainsight in 2024 — exclude. The acquisition was recent and disruptive enough relative to its discovery (no clean continuous attribution available) to fail gate 2/3, not a blanket "any M&A = exclude" rule.
- **Skilljar** (Pass 1, Customer Success category): acquired by Gainsight, April 2, 2025 — inside the study window. Exclude — too recent to have a clean pre/post-acquisition traffic story to attribute.
- **Totango/Catalyst and Influitive** (Pass 1, Customer Success category): both merged/acquired shortly *before* the window opened (Feb 2024 and Jan 2024 respectively), each followed by leadership changes and layoffs. Treated as exclude under gate 2/3 — the disruption means the pre-window entity and the post-merger entity aren't the same continuous operating history, even though the deal technically predates the window start. This is the kind of case gate 2 is designed to require a documented call on, rather than a literal date-range check.

### Checklist (copy into tracking sheet per company) — updated V1.1
- [ ] B2B SaaS confirmed (gate 1)
- [ ] M&A status checked (Crunchbase) and, if applicable, treatment documented (gate 2)
- [ ] Domain stability and continuous operation confirmed across window (gate 3)
- [ ] Category fit assessed — Strong / Adjacent / Weak (gate 4); Weak fails the screen
- [ ] Ahrefs traffic trackable across window (gate 5 — confirmed in Pass 2)
- [ ] LinkedIn employee count recorded (metadata only, not a gate)
- [ ] Include/Exclude decision recorded with rationale

---

## 5. Master Tracking Spreadsheet

**Restructured V1.2.** The original design put every field — identity, screening, inclusion decision, traffic classification, deep-dive status, notes — on one sheet, with a row for every candidate, including rejects. In practice, once a leaner 19-field tracker was requested, that single-sheet design split into two sheets with a clear purpose split: a **lean tracker** holding only the metrics that matter for all 100 *locked* companies, and an **archive tab** preserving the Pass 1 screening trail (including rejected candidates) for reproducibility, without cluttering the working sheet. The two sheets join on **Company Name** (replacing the original Company ID foreign key — simpler, and sufficient now that each sheet's row set is independently meaningful).

### Pass 2 (one row per locked company — the 100 that passed screening)

1. Company Name
2. Category
3. Jan 2025 Traffic (Ahrefs organic traffic, window start)
4. Jun 2026 Traffic (window end)
5. Traffic % Change — formula, (4−3)/3
6. Jan 2025 Traffic Value (Ahrefs estimated organic traffic value, window start)
7. Jun 2026 Traffic Value (window end)
8. Traffic Value % Change — formula, (7−6)/6
9. Jan 2025 Referring Domains
10. Jun 2026 Referring Domains
11. Referring Domains % Change — formula, (10−9)/9
12. Study Window Peak Traffic — *(formerly "Peak Organic Traffic")* highest monthly traffic within Jan 2025–June 2026 only. Window-bound, per the measurement/interpretation boundary in Section 3.
13. Study Window Peak Month — the month #12 occurred.
14. Historical Peak Traffic — *(V1.2, expanded to all 100 companies)* all-time highest monthly traffic, including before the study window. Pulled from Ahrefs' full-history view, not the window export.
15. Historical Peak Month — the month #14 occurred.
16. Distance from Historical Peak % — formula, (4−14)/14. How June 2026 traffic compares to the all-time historical peak: negative = still below it, positive = has exceeded it.
17. Traffic Trajectory — controlled vocabulary, the 9-value official taxonomy below. Window-bound, same boundary as #12/#13.
18. Classification (Grew / Flat / Declined)
19. Notes

**Official Traffic Trajectory taxonomy (9 approved values — no new labels without a documented manual update):**
1. `Continuous Acceleration`
2. `Steady Growth`
3. `Growth then Pullback`
4. `Early Peak then Plateau`
5. `Early Peak then Decline`
6. `Decline then Recovery`
7. `Flat`
8. `Steady Decline`
9. `Volatile`

These labels describe the shape of the traffic curve **within the study window only.** Pre-window nuance belongs in the Historical Context section of the Pass 3 Deep Dive template (Section 6), not in this field. Always pick the closest match; if a company genuinely doesn't fit any of the nine, flag it for discussion rather than adding a tenth ad hoc.

**Operational definitions and bucketing rules (V1.3, added after auditing the first 36 companies entered):**

1. `Continuous Acceleration` — the study-window peak is the most recent month (June 2026, or within a month or two of window end), with no meaningful pullback at the end. Applies regardless of whether the all-time Historical Peak predates the window by years — Distance from Historical Peak is descriptive metadata only (Section 5, field #16) and never overrides this bucket. Example precedent: Gainsight, Apollo, ZoomInfo, Customer.io.
2. `Steady Growth` — consistent upward movement across most of the window without a single sharp early spike; distinguished from Continuous Acceleration by a more gradual, linear climb rather than a late-window inflection.
3. `Growth then Pullback` — genuine growth from the start of the window (not an immediate spike) that continues into the middle or later part of the window, peaks, then pulls back meaningfully before window end. Applies whether the company nets out Grew or Declined — the pullback's severity doesn't reclassify the shape. Example precedent: CleverTap (mid-window peak), Reply.io (peak Jan 2026, then an 86% pullback — still this bucket, not Early Peak, because the growth into the peak was real and late).
4. `Early Peak then Plateau` — the peak occurs early in the window (roughly months 1–4 of 18), followed by a flattening near that level rather than a sustained decline.
5. `Early Peak then Decline` — the peak (study-window and/or historical) occurs early in the window, followed by sustained decline through most of the remaining months. Minor noise or countertrend bumps that don't reverse the overall trend don't disqualify a company from this bucket. Also used for companies that partially recover late in the window but remain net Declined — partial recovery alone does not qualify for `Decline then Recovery` (see #6). Example precedent: Lemlist, Mixmax, Cognism, ActiveCampaign, Omnisend, Iterable, Brevo, GetResponse.
6. `Decline then Recovery` — reserved specifically for companies whose late-window recovery brings them back into Flat-range classification (roughly ±10% start-to-end). If the company recovers some ground but still nets out Declined, use `Early Peak then Decline` instead. Example precedent: Planhat, ClientSuccess, Rocketlane, EverAfter.
7. `Flat` — net Classification is Flat (±10%) and the path there doesn't show the oscillating, no-clear-trend pattern of `Volatile`.
8. `Steady Decline` — a gradual, fairly linear downward trend across most of the window, without one identifiable early peak followed by a steeper drop. Distinguished from Early Peak then Decline by the absence of a sharp early high point.
9. `Volatile` — the series oscillates in a band with no clear sustained directional trend, regardless of net Classification (applies to both Flat and Declined companies). Example precedent: Klaviyo (Flat, late spike-pullback), ContactPigeon (Declined, small-scale noisy series — also carries a data-quality caveat in Notes about Ahrefs' modeled-estimate noise at low traffic volumes).

`Continuous Decline` is explicitly **not** part of this taxonomy. A predominantly-downward company without a clear early peak should be coded `Steady Decline`; one with a clear early peak should be coded `Early Peak then Decline`. (Rejected once already this study, from a Mixmax draft — see Section 8 changelog.)

**Boundary note carried forward from Pass 2 (unchanged in spirit, scope changed for #14/#15/#16):** fields 3–13 and 17–18 measure the study window only and never reflect pre-window history. Fields 14–16 are the one deliberate exception — they exist specifically to capture the all-time peak as descriptive metadata for all 100 companies, not to blur the window boundary. None of fields 12–17 change how Classification (#18) is determined, and none constitute a new screening gate.

### Pass 1 Archive (one row per *candidate*, including rejected companies — don't delete rows)

Preserves the full screening/audit trail that V1.1 specified for inclusion/exclusion reproducibility, now separated from the working tracker above. Company Name joins back to Pass 2 for included companies; excluded companies exist only here.

- Identity: Website/domain, Date added, Source list, Source URL
- Screening record: Screened by, Screening date, B2B SaaS confirmed?, One-line description, Founded year, Public/private
- Size & funding: LinkedIn employee count, Employee count source/date, Funding status / total raised, M&A status, M&A notes
- Gates: Domain stable during window?, Primary ICP, Buying motion, Primary buyer, Non-core asset flag, Non-core asset notes
- Decision: Inclusion decision, Exclusion reason
- Workflow (not in the user's original 19-field list, but needed to drive the Dashboard's deep-dive/comparison counts — kept here rather than adding a new sheet): Selected for deep dive?, Selected for comparison group?, Research status
- Tags, Last updated

### Deep Dive Database and Comparison Group Database

Both pull Category, Jan/Jun Traffic, Traffic % Change, and Referring Domains directly from Pass 2 via lookup formulas keyed on Company Name (and LinkedIn employee count from Pass 1 Archive) — no manual re-entry, no risk of the two sheets drifting out of sync. See Section 6 for what each template still collects manually beyond what's auto-pulled.

### Progress-tracking fields (Dashboard tab)
- Total candidates screened / included / excluded (Pass 1 Archive)
- Companies per category (Pass 2, vs. target)
- Classification breakdown (Grew / Flat / Declined counts, Pass 2)
- Deep dives completed / 8–10 target
- Comparison reviews completed / 8 target

---

## 6. Deep Dive Template — standardized extraction framework (V1.5)

**Why this section was rewritten (June 29, 2026):** the original template (preserved in spirit below, restructured) was content/SEO-shaped by default — content initiatives, refresh cadence, topic expansion, internal linking, formats. That shape creates a real confirmation-bias risk: a content-strategy firm instrumented only to look for content causes will inevitably conclude content caused everything, even when the real driver was off-content (funding, leadership change, a competitor collapsing, a category-wide tailwind) or simply correlated rather than causal. This rewrite adds the checks needed to catch that bias, plus the structure needed to turn 10 individual narratives into comparable, synthesizable evidence rather than 10 interesting but incommensurable stories.

**Same structure every time.** Consistency across companies is what makes cross-company pattern-spotting valid rather than anecdotal — this matters more now that the deep-dive set spans companies selected for genuinely different reasons (Section 2 business questions) rather than one trajectory shape.

**Time box: aim for 60–90 minutes per company as before, with one caveat** — this template is heavier than the original. If a company consistently can't be completed in 90 minutes using this structure, that's worth flagging as an open question rather than silently extending every company's budget (see V1.5 changelog).

```
## Deep Dive: [Company Name]

**Reviewed:** [date]   **Time spent:** [minutes]
**Primary business question this company answers (Section 2):** [Q1 / Q2 / Q3 / Q4 / Q5]

### 1. Snapshot
- Category:
- Employees:
- Traffic trend: [start] → [end] ([% change])
- Referring domains trend: [start] → [end]
- Traffic Trajectory label (Pass 2, for reference only — not the organizing principle for this deep dive):

### 2. Historical Context (pre-window — does not affect Pass 2 classification)
Captures valuable context from *before* the study window without influencing the objective Grew/Flat/Declined classification or the Pass 2 trajectory/peak metadata (Section 3). "Not discoverable" is a fine answer for any line.
- Overall long-term traffic story (1–3 sentences):
- Major inflection points (pre-window):
- Acquisitions / mergers / rebrands / domain migrations:
- Product launches or other notable events (when discoverable):

### 3. Traffic timeline and inflection points (within window)
- Month-by-month shape; identify every meaningful inflection point (not just the one that produced the Pass 2 trajectory label) and its approximate magnitude/direction.
- Note: an "inflection point" here is a researcher judgment call, not a formula — state the month(s) and why they qualify.

### 4. Category baseline comparison — required, do this before searching for company-specific causes
- Pull the category-average trend for this company's category across the same window (build from Pass 2 — every company in this category, not just deep-dive companies).
- Does this company's inflection diverge from its category peers, or move with them?
- **If the company's movement tracks the category closely, say so explicitly and lower confidence on any company-specific causal story accordingly** (Section 9 confidence rubric, below). A rising-tide explanation should be the default hypothesis to rule out, not an afterthought.

### 5. Content and SEO actions inventory
- Major content initiatives (with approximate dates).
- Refresh/iteration on existing pages vs. net-new publishing.
- Topic/IA expansion; visible internal-linking changes connecting growth pages to core product pages.
- Content formats present (check all with examples/URLs): comparison pages, alternatives pages, documentation/help center, glossary/definitional content, product/feature pages, educational/how-to, original data or research, customer stories, calculators/templates/tools, other.
- **Top 5 growth URLs**, with estimated traffic change each (Ahrefs top-pages data). If fewer than 5 pages account for the bulk of growth, say so explicitly — that's a finding (see field 7, concentration).

| # | URL | Content type | Est. traffic change |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3 | | | |
| 4 | | | |
| 5 | | | |

### 6. Off-content context — required, do not skip even if nothing turns up
This is the direct check against the confirmation-bias risk named above. For each: state what was checked and what was found, including "checked, nothing found."
- Funding events / financial distress.
- M&A activity, leadership changes, layoffs.
- Pricing or product changes.
- Known competitor disruption (a competitor collapsing, being acquired, or making a misstep that could redirect search demand).
- Regulatory or category-level tailwinds/headwinds (e.g., a compliance mandate driving category-wide demand).
- PR/brand moments unrelated to content (funding announcement, executive hire, major press).

### 7. Traffic composition
- Branded vs. non-branded split, if obtainable. A branded spike (PR, funding news, a viral moment) is a different and far less replicable story than non-branded/topical growth from a real content program — don't default to crediting content if this can't be ruled out.
- Concentration: is growth concentrated in a few pages (per the table in field 5) or distributed broadly? State this explicitly — it feeds directly into the replicability assessment (Section 10).

### 8. Backlink / authority changes
- Referring-domain trend; any notable link events or patterns (press, directories, guest content, partner backlinks).

### 9. AI-era signals
- AI Overview / AI-answer presence if observable (manual spot-check in ChatGPT/Perplexity — note this is a snapshot, not a time series).
- Structured data/schema usage; documentation depth; any evidence of citation by AI assistants.
- **If a sub-item genuinely can't be measured with our current tools, say so explicitly** rather than implying coverage we don't have (see field 11).

### 10. Causal assessment
For each inflection point identified in field 3:
- **Candidate cause(s)** — drawn from fields 5–9, not assumed in advance.
- **Timing check** — does the candidate predate the inflection by a plausible lag (content/SEO effects typically take ~3–9 months to show up), or is it coincident with (or after) the inflection? Coincident timing is a yellow flag, not confirmation — note it as such rather than treating same-month correlation as causal.
- **Alternative explanations considered and why rejected** — explicitly name at least one alternative (category-wide trend from field 4, an off-content factor from field 6, or "unknown") and state why the leading candidate is more plausible, or admit it isn't clearly more plausible.
- **Confidence level** — apply the rubric below, don't eyeball it.

### Confidence rubric (apply consistently across all companies)
- **High** — multiple independent evidence sources point to the same cause, timing is consistent with known lag, no equally plausible alternative was found, and the category baseline (field 4) doesn't show the same movement among peers without the same action.
- **Medium** — timing is plausible and at least one corroborating signal exists, but either an alternative explanation can't be fully ruled out, or only a single evidence source supports the cause.
- **Low / speculative** — timing is coincident only, no corroborating signal, or a competing explanation (category-wide movement, an off-content event) is equally or more likely than the content/SEO candidate.

### 11. Data limitations
What couldn't be determined, and why (tool limitation, no public record, ambiguous timing, etc.). State this plainly rather than letting gaps disappear silently — a thin "data limitations" section across all 10 companies is itself useful synthesis input.

### 12. Anything surprising
(Required — name at least one thing, even if minor.)

### 13. Anything that contradicts our hypotheses
(Required — see Section 2 hypotheses. If nothing contradicts them, say so explicitly.)

### 14. Quotable pattern candidates
(Exact phrasing, specific numbers, specific tactics that could become a line in the eventual report.)
```

### Insight classification — apply to every causal finding, not just the company as a whole

Every individual insight that comes out of field 10 (not just the deep dive overall) should be scored on three things, kept as separate axes rather than collapsed into one label, since evidence strength, replicability, and client applicability are independent questions:

1. **Evidence strength** — High / Medium / Low, per the confidence rubric above.
2. **Replicability for a typical mid-market B2B SaaS client** — High (executable without unusual budget, pre-existing authority, or a one-off circumstance) / Low (requires scale, authority, category conditions, or circumstances most clients don't have).
3. **Client applicability note (required, free text)** — answers directly: *would this apply to a typical mid-market B2B SaaS client S.LAB might work with, or does it depend on unusual scale, brand authority, budget, category conditions, or one-off circumstances?* This is distinct from replicability (which is a High/Low score) — the note should name the specific dependency if one exists (e.g., "requires the kind of pre-existing domain authority a 10-year-old category leader has — not applicable to an early-growth-stage client without years of link-building first").

Apply the same three fields at the **company level** too — a one-line client-applicability summary for the deep dive as a whole, in addition to the per-insight notes, so a reader scanning 10 case studies can quickly see which are broadly instructive vs. which are interesting-but-unusual.

### Synthesis rule — applies at Phase 5/6, stated here so it isn't forgotten
**No finding is promoted to a validated playbook principle on the strength of one company.** A finding needs to recur independently, via plausibly different mechanisms, in at least two case studies before it's written up as a conclusion rather than a hypothesis. Single-case findings are real and worth publishing — just label them explicitly as a single-case observation, not a pattern, in the report (Section 10, item 5–6).

### Definition of Done (V1.6, June 29, 2026)
A consistent stopping rule, so every deep dive is completed to the same standard rather than however much time happened to feel sufficient. A deep dive is **Done** when:

1. Every section of the extraction framework (fields 1–14 above) has been evaluated — not every section needs a confident finding, but every section needs to have actually been checked.
2. Every major traffic inflection point (field 3) has at least one evidence-backed candidate explanation, **or is explicitly marked "unknown."** Marking something unknown is a complete, acceptable outcome — not a failure. A deep dive with several honest "unknown" or "low confidence" fields is Done; a deep dive that manufactures a confident causal story to avoid saying "unknown" is not, regardless of how complete it looks.
3. Confidence (the rubric above) has been assigned to every causal claim made in field 10 — not just one headline conclusion for the company.
4. Data limitations (field 11) have been documented.
5. Client applicability (the insight-classification section above) has been assessed, at both the per-insight and company-summary level.
6. One additional research pass has been made, **targeting a specific, named gap or untried source** (e.g., a Wayback Machine check, a longer Ahrefs lookback, an off-content source not yet checked) — not a generic re-read of material already reviewed — and the outcome (found something new / found nothing new) is recorded either way.

**Relationship to the time box:** Definition of Done is the quality bar; the 60–90 minute time box (Section 6) is a checkpoint, not an override. If a company hits 90 minutes without meeting Definition of Done, that's a stop-and-flag moment — note specifically what's incomplete and move on, per the original time-box rule — not silent overrun, and not a silently shipped incomplete case study either.

**Drift check:** after every 3–4 completed deep dives, spot-check one already-"Done" company against this definition before continuing. The point of a consistent standard is defeated if rigor quietly loosens by company #8 without anyone noticing until synthesis. **If the data-request protocol (Section 6a) changes mid-project, a drift-check re-audit must be evaluated against the protocol version that company actually used at the time, not the current version** — otherwise a protocol improvement gets misread as research drift.

---

## 6a. Data Request Procedure — division of labor (V1.7, June 29, 2026)

**Why this section exists:** Quinn has Ahrefs access and can pull exports far faster than Claude can reconstruct the same data through web research; Claude's comparative advantage is investigation and synthesis that requires reasoning (off-content context, causal assessment, confidence/replicability scoring, filling out Section 6). This section formalizes that division so it's applied identically across all 11 deep dives rather than negotiated per company.

### Roles
- **Quinn:** executes data pulls and AI-tool observations, exactly as specified in each Data Request — no need to guess what's useful.
- **Claude:** decides what's needed and why, writes the Data Request, and completes the remainder of the deep dive (fields 1–14, Section 6) using the returned data plus independent research (off-content context, competing-explanation testing, causal assessment, confidence/replicability/client-applicability scoring).

### Two-stage Data Request per company
1. **Baseline Request** — sent before Claude has reviewed any company-specific Ahrefs data. Identical fields for every company (see below). Deliberately minimal — lowest common denominator, not maximal. The point is to observe first and form hypotheses second, not to gather evidence for a theory already in mind.
2. **Follow-up Request** — sent after Claude has reviewed the baseline exports and identified actual inflections or anomalies worth chasing. Bespoke per company, and **each item must carry a one-line justification** (why this export, what question it answers) rather than being requested by default.

### Locked baseline (identical every time, V1.7)
1. Top Pages (current)
2. Top Pages (historical — window-start vs. current comparison, not current alone)
3. Organic Keywords, **filtered/tagged by branded vs. non-branded terms** (a raw keyword export doesn't answer the branded-split question in field 7 unless it's tagged)
4. Best by Links
5. Referring Domains trend
6. AI Observation Protocol (below)

Traffic, Traffic Value, and Referring Domains start/end snapshots are **not** part of the baseline request — they already exist in Pass 2 for every company and should never be re-requested.

### AI Observation Protocol (standardized experiment design, not an ad hoc check)
Treat this as a reproducible experiment, not a data export. For every company, Claude specifies exactly 10 prompts split across 5 categories (2 each), tailored to that company's actual product/category:
1. **Commercial** — e.g., "best [category] software"
2. **Comparison** — e.g., "[Company] vs. [Competitor]"
3. **Problem/how-to** — e.g., "how do I [task the product solves]"
4. **Alternative** — e.g., "alternatives to [Company]"
5. **Educational** — e.g., "what is [core concept]"

Run each prompt **once** (not multiple trials — not worth the time cost) across ChatGPT, Perplexity, and Google AI Overview where applicable. Standardize: logged-out/incognito sessions where possible (reduces personalization bias); record the exact model/version used at time of testing. Log per prompt: tool, model/version, date, whether the company appears, exact citation snippet/position if present, and "not present" if absent. **This produces a single observation per prompt, not a frequency estimate — log it that way.** If a finding from this protocol becomes pivotal to a confidence rating, Claude can request a one-off re-run as a tiebreaker rather than treating the single run as settled.

### Versioning
Every Data Request is versioned (e.g., "GitHub Baseline Request v1," "Follow-up Request v1"). If the baseline protocol itself changes mid-project (e.g., adding a new export type starting with company #6), that becomes **Baseline Request v2** — applied going forward, not retroactively, and not silently. Document which companies used which version in the Research Log. Silent protocol drift is worse than a documented version change.

---

## 6b. Living Synthesis Matrix & Decision Gate (V1.8, June 29, 2026)

**Why this section exists:** five deep dives in (GitHub, CircleCI, Freshworks, Gainsight, ZoomInfo), a clear pattern was emerging — strong, differentiated diagnostic/metric-integrity findings (decompose headline traffic before trusting it), thinner evidence so far for the project's actual primary research question (how do B2B SaaS companies sustainably grow, recover, or maintain organic traffic in the AI era). Rather than letting that imbalance get decided implicitly — either by drifting the remaining deep dives toward hunting for tactics, or by waiting until all 11 are done to discover the report is mostly diagnostics — this section formalizes two things: a running synthesis artifact, and an explicit decision point for whether the planned cohort is enough.

### The living synthesis matrix
A standing file (`synthesis-matrix.md`, project folder root), updated immediately after every deep dive — not reconstructed from memory at the end. Every meaningful finding (causal claim from field 10, or a notable item from field 12/13) gets a row:

| Finding | Supporting companies | Confidence | Replicability | Client applicability | Status |
|---|---|---|---|---|---|
| (one-line statement of the finding) | (which deep dives produced or corroborated it) | High/Medium/Low, per Section 6 field-10 rubric | High/Medium/Low — how many client situations this would actually apply to | Concrete note on how a client would use this | Hypothesis (1 supporting case) / Emerging (2 cases, same direction) / Validated principle (3+ independent cases, or 2 with strong, distinct mechanisms) |

A finding only moves from "Hypothesis" to "Validated principle" when multiple, independent deep dives support it through different specific mechanisms — not when the same underlying mechanism just gets relabeled across companies. Pull entries directly from each deep dive's existing Insight Classification table (Section 6 already produces this format); the matrix is a cross-company roll-up of that table, not a new analysis step.

### Decision gate (replaces the informal Phase 5/6 checkpoint in Section 8)
After the planned cohort (8–10 winners + comparison group) is complete, stop and answer three questions against the synthesis matrix before drafting the report:
1. Have we identified enough high-confidence, actionable, reasonably replicable growth principles (not just diagnostic/metric-integrity findings) to actually answer the project's primary research question?
2. Are those principles supported by multiple independent cases where possible — i.e., does the matrix show "Validated principle" rows, or mostly "Hypothesis" rows?
3. Have we reached evidence saturation on the original question, or are there still open business questions (Section 2's Q1–Q5) with thin or no coverage?

**If yes to all three: stop, the planned cohort is sufficient, move to Phase 5/6 synthesis and drafting.**

**If no: do not randomly add companies to the sample.** Instead, run **targeted supplemental sampling** — deliberately chosen additions designed to test a specific unresolved hypothesis or fill a specific gap in the matrix, not to pad sample size. Example pattern: if documentation-led growth is still unproven after the planned cohort, find one excellent documentation-driven company and run a deep dive specifically to test that mechanism; if recovery (Q3) is underrepresented, add one more strong recovery case. Each supplemental company must name, before it's selected, which matrix row(s) it's meant to move from Hypothesis toward Validated (or refute).

**What this explicitly rules out:** weighting the *remaining planned* deep dives (Braze, Rippling, Navan, Harness, Vanta, PostHog) toward hunting for tactics, or assuming in advance that they will or won't produce clean growth mechanisms. Each continues to be investigated as honestly and open-endedly as the first five — the decision gate is a checkpoint after the planned cohort, not a change to how any individual deep dive within it is run.

---

## 6c. Research Efficiency Standards (V1.9, June 29, 2026)

**Why this section exists:** after six deep dives (GitHub, CircleCI, Freshworks, Gainsight, ZoomInfo, Braze), the 14-field framework and write-up format are internalized and stable. Several recurring practices were adding effort without changing confidence levels or conclusions. Quinn's explicit instruction (2026-06-29): cut work that isn't changing the quality of the conclusions; do not cut rigor. Four standing rules, effective for all remaining deep dives:

1. **Do not re-read a prior deep dive to relearn the template.** The 14-field structure (Section 6) is locked — write directly from it. Only open a prior deep dive entry for one of three reasons: comparing findings across companies, citing it as supporting/corroborating evidence, or checking it against the synthesis matrix.
2. **Leadership and pricing checks (Section 6, field 6) are conditional, not mandatory.** Run a full research pass on leadership changes or pricing changes only when triggered: an unexplained inflection point in the traffic timeline, public reporting suggesting a strategic shift, or a plausible link to the observed traffic pattern already surfaced elsewhere in the data. Otherwise, perform a quick check (e.g., one targeted search) and record the outcome briefly — do not treat either as a standing deep-research requirement for every company.
3. **Verify every number that appears in the final write-up — exactly once.** Intermediate or exploratory calculations that don't make it into the published deep dive do not need repeat validation. Do not re-run a calculation a second time "just to double-check" once its result has already been verified and is going to be cited.
4. **Stopping principle for any line of investigation:** before continuing to dig on a sub-question, ask "is additional research likely to materially change the confidence rating or the final conclusion?" — not "can we keep researching?" If the answer is no, stop and move on; document the confidence level reached and why further digging wasn't pursued.

**What does not change:** the analytical writing itself (field-by-field prose, hedging, caveats) stays as rich as it has been — Quinn explicitly does not want write-ups shortened at this stage; compression happens later, during synthesis, not now. The "don't invent numbers" standing rule and the open-ended, non-tactic-hunting instruction in Section 6b are both unaffected by this section.

---

## 7. Comparison Group Template

### Selection criterion (V1.6, June 29, 2026) — deliberately lean, by design
The comparison group does not need a representativeness or balance pass the way the winner cohort did (Section 2/Section 6 discussion) — its job is narrower now that GitHub and Freshworks carry primary Q2/Q4 evidence as full deep dives (Section 6). A candidate belongs in the comparison group if and only if it passes one test:

> Does this company help us understand a business problem (Section 2, Q1–Q5), or challenge/complicate a finding from the winner cohort, in a way we otherwise wouldn't see?

Don't spend more than a quick pass per candidate on this. **One required check when applying it:** deliberately include at least one company that *complicates* a winner-side finding rather than only ones that conveniently confirm it by absence — e.g., a decliner that did have the content type/tactic a winner credited and still declined, or a flat/stable company that lacked it and survived anyway. A comparison group built only from clean confirming contrasts would just be confirmation bias wearing a different label than the one Section 6 was rewritten to catch on the content side.

Lighter-weight, for declining companies that serve as contrast rather than as primary evidence for Q2/Q4 (Section 2). Purpose is contrast, not equal-depth analysis — don't let this expand to match the deep-dive time budget.

**Note (V1.5):** a comparison-group company whose decline is central to answering Q2 ("what causes stall/decline") or Q4 ("why some never recover") should be promoted to the full Section 6 template instead of reviewed here — see GitHub and Freshworks, promoted June 29, 2026 (V1.5 changelog). This lighter template remains for companies used as supporting contrast rather than primary evidence. If a one-line takeaway from this lighter template does end up cited as evidence in the final report, apply the same confidence rubric and client-applicability note from Section 6 to it before citing it — don't let the lighter time box become an excuse for a less rigorous standard on a claim that ends up load-bearing.

**Time box: 20–30 minutes per company.**

```
## Comparison Review: [Company Name]

**Reviewed:** [date]   **Time spent:** [minutes]

- Category:
- Employees:
- Traffic trend: [start] → [end] ([% change])
- Referring domains trend: [start] → [end]

### Quick content scan
- Any visible content publishing activity during the window, or largely static?
- Any of the growth-associated content types present at all (comparison pages, alternatives pages, original data, etc.)? Present but underperforming, or genuinely absent?

### One-line takeaway
(What's the most likely explanation for the decline, in plain language — algorithm change, lack of publishing, competitive displacement, product/market issue, something else? Mark confidence: High/Medium/Low/Unclear.)
```

---

## 8. Weekly Workflow

Phased, with checkpoints, compressed to a 10-week timeline. Estimates assume solo execution alongside other S.LAB work — not a full-time allocation. The tighter timeline is intentional: momentum matters more than padding, and the checkpoints below are what prevent speed from turning into sloppiness.

### Phase 1 — Sampling frame & screening (Weeks 1–2)
- Build category list, pull G2 candidates, run inclusion screen, populate tracking sheet.
- Target: ~50 companies/week screened.
- **Checkpoint at end of Phase 1:** Run the audience-fit spot check (Section 3). Do at least 10 included companies clearly resemble the kind of company that would plausibly hire S.LAB? If not, stop and adjust the size band or category mix before continuing.

### Phase 2 — Traffic classification (Week 3)
- Export the Ahrefs Performance report for each company (not manual transcription) and pull the standardized summary: Jan 2025 / June 2026 snapshots for Organic Traffic, Organic Traffic Value, and Referring Domains, plus Peak Organic Traffic, Peak Traffic Month, and Traffic Trajectory from the full time series (Section 3/5).
- Classify Grew / Flat / Declined from the start/end snapshot, set final numeric thresholds based on the real distribution observed. This is strictly a classification phase — no investigation of *why* a company grew happens here; that's Pass 3 (Phase 3, deep dives).
- **Checkpoint:** Does the Grew group have at least 8–10 companies that are clearly, not marginally, growing? If the distribution is too flat to find clean winners, the study window may need adjusting before moving on.

### Phase 3 — Deep dives (Weeks 4–6)
- 8–10 winners, ~60–90 minutes each, using the Section 6 template.
- Target: 3–4 deep dives per week.
- **Checkpoint mid-phase (after ~5 deep dives):** Are recurring patterns actually emerging, or does every company look different? If nothing is recurring yet, that's fine — note it honestly — but check whether the template itself is asking the wrong questions before doing the remaining dives.

### Phase 4 — Comparison group (Week 7)
- 8 decliners, ~20–30 minutes each, using the Section 7 template.

### Phase 5 & 6 — Synthesis and report drafting (Weeks 8–9)
- Pull all deep-dive and comparison notes together. Identify which patterns actually recur across multiple winners vs. which only showed up once.
- Revisit the original hypotheses (Section 2) explicitly — confirmed, contradicted, or inconclusive for each.
- **Checkpoint (superseded by the formal Decision Gate, Section 6b, V1.8):** run the three-question decision gate against the living synthesis matrix. If it fails, run targeted supplemental sampling (Section 6b) rather than extending the deep-dive set randomly.
- Draft against the outline in Section 10. Internal review against the Quality-Control checklist (Section 3).

### Phase 7 — Publication & distribution (Week 10)
- Publish. Begin the outreach motion to featured companies (warm, specific, high-response — see Section 11).
- Begin content multiplication (Section 11) using material already logged in the Research Log (Section 9) throughout the project — don't wait until publication to start writing this down.

---

## 9. Research Log

Running journal, updated continuously throughout the project — not retrospectively reconstructed at the end. Append entries chronologically; don't reorganize as you go, that's what Section 11 is for.

```
## [Date] — [Company/Phase context]

**Observation:**

**Why it's interesting:**

**Category:** [Interesting finding / Unexpected result / Open question / Future research idea / Content idea]

**Action needed (if any):**
```

Use the **Category** tag consistently so this log can be filtered later. Suggested tags: `finding`, `surprise`, `question`, `future-research`, `linkedin-post`, `newsletter`, `methodology-note`.

---

## 10. Report Outline

Structure only — do not write the report yet. This exists so we know what evidence needs to be collected as we go.

1. **Headline finding** — the single sharpest, most defensible thing the data shows. Stated plainly, not buried.
2. **Why we asked this question** — the context of increased AI search visibility and organic search volatility, briefly, without over-claiming novelty (acknowledge 2X/Similarweb exist and explain how this study is different — narrower, qualitative, pattern-focused rather than scored).
3. **Methodology, in plain language** — sample, sources, window, classification approach, and limitations stated honestly up front, not hidden in an appendix.
4. **The growth group vs. the decline group, at a glance** — basic descriptive stats before any qualitative claims.
5. **Pattern 1** — stated as a claim, then evidence (specific companies, specific pages, specific numbers).
6. **Pattern 2–4 (or however many hold up)** — same structure each time.
7. **What didn't hold up** — hypotheses from Section 2 that the data didn't support. This section is not optional; publish it even if it's short.
8. **What surprised us** — at least one genuinely unexpected finding, named directly.
9. **What this means for B2B SaaS marketing teams** — practical takeaways, written for the realistic reader (a marketing leader at a 50–500 person SaaS company), not generic advice.
10. **Limitations, restated** — cross-sectional, modeled traffic data, one-researcher qualitative review. Say it again here, not just in the methodology section.
11. **What we're studying next** — sets up the ongoing research program rather than presenting this as a one-off.
12. **Full methodology appendix** — detailed enough that someone could attempt to replicate it.

---

## 11. Content Multiplication Plan

Every interesting observation logged in Section 9 should be evaluated against this list. The point of this section is to make sure research exhaust doesn't evaporate after the report ships.

### Tracking table (build as a tab in the tracking sheet, or a separate doc)

| Observation (from Research Log) | Format | Status | Notes |
|---|---|---|---|
| | LinkedIn post | Idea / Drafted / Published | |
| | Newsletter item | Idea / Drafted / Published | |
| | HARO/journalist angle | Idea / Pitched / Used | |
| | Speaking/podcast topic | Idea / Pitched / Booked | |
| | Future article | Idea / Drafted / Published | |
| | Future research idea | Idea / Scoped | |

### Categories to actively mine for
- **LinkedIn posts:** any single company example with a specific, concrete number or tactic. These are the easiest, fastest content output from this project — don't wait for the full report to start posting standalone observations (with attribution, no quoting beyond a fair-use snippet).
- **Newsletter ideas:** "what we're seeing so far" updates during the research process itself — process transparency is its own content category and builds anticipation for the final report.
- **HARO/journalist insights:** any finding a journalist covering SaaS marketing, SEO, or AI search would want a quote on. Proactively identify 2–3 of these before publication, not after.
- **Speaking points:** any pattern simple enough to explain in 60 seconds on a podcast.
- **Future articles:** any pattern that deserves its own deeper treatment beyond what fits in the main report.
- **Podcast topics:** the "what surprised us" finding (Section 10, item 8) is usually the strongest pitch — surprising claims get booked, confirmations don't.
- **Future research ideas:** anything that came up that this study wasn't designed to answer — feed directly into Section 12/V2 planning.

### Distribution mechanic built into the methodology
Once published, reach out directly to the featured winner companies (and, more cautiously, the comparison-group companies) — this is warm, specific, high-response-rate outreach, not cold distribution. Track this outreach in the same content-multiplication table.

---

## 12. Version History

### V1.9 — Research efficiency standards added, June 29, 2026

**What changed, and why:** After six deep dives, token/effort usage had grown noticeably, and a review of the process surfaced four recurring practices that added work without changing confidence levels or conclusions: (1) re-reading a full prior deep dive each time purely to relearn the now-locked 14-field format; (2) treating leadership and pricing off-content checks (field 6) as mandatory full research passes even when they consistently turned up nothing material; (3) occasionally re-running a calculation that had already been verified, even when it wasn't going to appear in the final write-up; (4) no explicit stopping rule for when to end a line of investigation, beyond an open-ended "can we keep researching?"

Quinn's explicit framing: the goal is not to save tokens for their own sake, it's to concentrate effort where it actually increases confidence or changes a conclusion. Resolved by adding Section 6c with four standing rules: stop re-reading prior deep dives except to compare/cite/check the matrix; make leadership and pricing checks trigger-based rather than mandatory; verify every published number exactly once rather than repeatedly; and replace "can we keep researching" with "would this materially change the confidence rating or conclusion" as the stopping test for any sub-investigation. The analytical write-up itself (field-by-field prose, hedging, caveats) is explicitly excluded from this round of cuts — Quinn wants richer case studies now and plans to compress during synthesis later, not now.

**What worked:** Quinn asked the efficiency question directly rather than letting usage drift, and gave concrete, falsifiable trigger conditions (not just "use judgment") for the conditional checks — keeps the conditionality from quietly turning into "skip it."

**New open questions for this version:** whether the trigger conditions for leadership/pricing checks (field 6) are calibrated correctly will become clearer as more companies are run under this rule; if a company's traffic pattern turns out to have a leadership or pricing explanation that the quick-check missed, that's a signal to revisit this section.

### V1.8 — Living synthesis matrix and end-of-cohort decision gate added, June 29, 2026

**What changed, and why:** After five deep dives (GitHub, CircleCI, Freshworks, Gainsight, ZoomInfo), a real pattern was visible: strong, differentiated diagnostic/metric-integrity findings (decompose headline traffic before trusting it — true for both Gainsight and ZoomInfo, via different mechanisms) but only one clean, replicable growth-tactic finding (Gainsight's acquisition-integration demand-transfer pattern). Quinn flagged the risk directly: deciding the report's final shape after only 5 of 11 deep dives would be premature, and the remaining six (Braze, Rippling, Navan, Harness, Vanta, PostHog) were specifically selected because they have a higher prior chance of teaching us about sustained growth, plateau breakouts, or recovery — so they should be investigated exactly as open-endedly as the first five, not weighted toward finding tactics.

At the same time, the project's primary research question is "how do B2B SaaS companies sustainably grow, recover, or maintain organic traffic," not "what happened to these 11 companies" — so a report that ends up mostly diagnostic, with only one or two high-confidence growth mechanisms, would not fully answer the question it set out to answer, even if every individual deep dive was rigorous.

Resolved by adding two new mechanisms (Section 6b) rather than deciding the report's shape today: (1) a **living synthesis matrix**, updated after every deep dive going forward (and backfilled for the first five), tracking every meaningful finding's supporting companies, confidence, replicability, client applicability, and a Hypothesis → Emerging → Validated principle status — so the evidence base is visible as it accumulates instead of reconstructed from memory at the end; (2) a formal **decision gate** after the planned 8–10 winner cohort + comparison group is complete, asking explicitly whether the matrix shows enough validated, replicable growth principles to answer the research question — and if not, **targeted supplemental sampling** (companies chosen to test a specific unresolved hypothesis, not random sample-size padding) rather than open-ended expansion. This supersedes the informal Phase 5/6 checkpoint (Section 8), which asked a similar question but without a structured artifact to check it against or a defined non-random fallback.

**What worked:** Quinn caught this before it became a problem — at 5 of 11 deep dives, early enough to instrument the rest of the cohort properly rather than retrofitting synthesis at the end.

**New open questions for this version:** none yet — the synthesis matrix and decision gate are new and untested; whether the matrix's Hypothesis/Emerging/Validated graduation criteria are calibrated correctly won't be clear until more rows accumulate.

### V1.7 — Data request division of labor locked, June 29, 2026

**What changed, and why:** The GitHub deep dive surfaced three real, recurring gaps: no live Ahrefs API access (Top Pages, Content Gap, Best by Links all unavailable to Claude directly), unusable Referring Domains data for at least one company, and no live AI-tool spot-check performed. Rather than treat these as one-off limitations to flag per company, formalized a permanent division of labor (new Section 6a): Quinn executes Ahrefs exports and AI-tool observations exactly as specified in a Claude-authored Data Request; Claude focuses on investigation and synthesis (off-content context, competing-explanation testing, causal assessment, confidence/replicability/client-applicability scoring, filling out Section 6).

Locked a **two-stage** request process per company — a minimal, identical **Baseline Request** sent before any company-specific review (to avoid scoping the investigation around a theory already in mind), followed by a bespoke **Follow-up Request** with justification per item, sent only after the baseline data has been reviewed and actual anomalies identified. The baseline itself was deliberately kept lean (6 items: Top Pages current + historical comparison, branded-tagged Organic Keywords, Best by Links, Referring Domains trend, AI Observation Protocol) rather than maximal — the working assumption is that most exports requested "just in case" never get used.

The AI-tool check (ChatGPT/Perplexity/AI Overview observations) was upgraded from an informal spot-check to a standardized experiment: 10 prompts per company across 5 fixed categories (commercial, comparison, problem/how-to, alternative, educational), single run per prompt (logged as one observation, not a frequency estimate), with session/model standardization (logged-out where possible, model version recorded) so results are comparable across all 11 companies rather than each researcher's ad hoc judgment about what to ask.

Added a versioning rule for Data Requests themselves (Baseline Request v1, v2, etc.) so any future change to the baseline protocol is documented and dated rather than silently applied to later companies only — and tied this explicitly to the existing drift-check (Section 6): a re-audit of an earlier "Done" company must be evaluated against the protocol version that company actually used, not the current one.

**What worked:** identifying this gap immediately after completing one full deep dive (GitHub), rather than waiting until several more had been run with the same limitation repeating each time.

**New open questions for this version:** none beyond what's already logged in V1.5/V1.6. This is the second explicit signal (after V1.6) to stop modifying process — formalize this, then move to CircleCI/ZoomInfo/the remaining 9 deep dives using it as-is.

### V1.6 — Comparison-group selection simplified; Definition of Done locked, June 29, 2026

**What changed, and why:** Two final methodology pieces locked before moving into Phase 3 execution, deliberately to stop the optimization cycle rather than extend it.

First, comparison-group selection (Section 7) is simplified to a single test — does the candidate help answer a business question (Section 2) or complicate a winner-cohort finding — rather than another representativeness/balance pass like the one the winner cohort went through. This is appropriate now that GitHub and Freshworks carry primary Q2/Q4 evidence as full deep dives (V1.5); the remaining comparison group's job is contrast, not primary evidence. One safeguard added to the lean test: deliberately include at least one company that complicates a winner-side finding rather than only confirming cases by absence, so the lean selection process doesn't quietly become a confirmation-bias risk on the comparison side, mirroring the bias risk Section 6 was rewritten to catch on the content side.

Second, added a formal Definition of Done to Section 6 — a six-part stopping rule (every framework section evaluated; every inflection explained or marked unknown; confidence assigned to every causal claim, not just one headline finding; data limitations documented; client applicability assessed; one additional pass targeting a specific named gap before stopping) so all ten deep dives are completed to a consistent standard rather than however much time felt sufficient per company. Explicitly stated that "unknown" is a complete, acceptable outcome, not a failure — without that, the stopping rule risked pressuring researchers to manufacture confident causal stories at the finish line, reintroducing the same bias the rest of Section 6 exists to prevent. Clarified the relationship to the existing 60–90 minute time box (quality bar vs. checkpoint, not two competing rules) and added a periodic drift-check (re-audit one "Done" company every 3–4 completed) so standard-loosening over the course of 10 case studies gets caught early rather than discovered at synthesis.

**What worked:** resolving both pieces in a single discussion, without another multi-day selection pass, kept the meta-goal intact — the framework is now mature enough that further refinement has diminishing returns relative to just starting the research.

**New open questions for this version:** none beyond what's already logged in V1.5 (time-box realism, category-baseline pre-computation). This version is the explicit signal to stop modifying methodology and move to cohort finalization and Phase 3 execution.

### V1.5 — Phase 3 reframed around business questions; standardized extraction framework locked, June 29, 2026

**What changed, and why:** Phase 3 cohort discussion (working through company-by-company marginal value) surfaced that the Section 5 trajectory taxonomy was being treated as the organizing principle for company selection *and* for the deep-dive narrative, when it was only ever meant to be the sampling methodology. Several candidates sharing a trajectory label (e.g., "Continuous Acceleration") turned out to plausibly differ in underlying mechanism once buyer type/GTM motion was considered — and conversely, a genuinely distinct pattern (companies that were flat/stalled, not declining, then broke out) didn't map cleanly onto either "continued acceleration" or "recovery from decline." Reframed Phase 3 around five explicit business questions (Section 2) — continued acceleration (Q1), causes of stall/decline (Q2), successful recovery (Q3), failure to recover (Q4), and breakout from stagnation (Q5, newly added) — with trajectory labels demoted to a reference field rather than the organizing principle.

This also surfaced a structural gap: Q2 and Q4 cannot be answered by winner companies at all, by definition. **GitHub and Freshworks were promoted from the lightweight Section 7 comparison-review track to full Section 6 deep dives** — GitHub because its decline (-72% to -78% from a Q4-2024 historical peak) is directly relevant to the project's own AEO/GEO thesis (the working hypothesis that AI coding assistants are displacing traditional developer search), and Freshworks because it's the cleanest available "chronic, multi-year decline with no recovery signal" case (declining since a 2021 peak), distinct from acute/recent-decline cases elsewhere in the comparison group.

Separately, and the larger structural change: rewrote the Section 6 Deep Dive Template as a standardized extraction framework rather than a content-shaped checklist. The prior template only instrumented researchers to look for content/SEO causes (content initiatives, refresh cadence, formats, internal linking) — a real confirmation-bias risk, since a content-strategy firm looking only for content causes will reliably "find" that content caused everything. Added, as required fields rather than optional color: a category-baseline comparison (is the company's movement distinct from its category peers, or just riding a category-wide trend?); a timing/lag-discipline check on every causal claim (content effects take ~3–9 months — same-month coincidence is a yellow flag, not confirmation); an off-content context check (funding, M&A, leadership change, pricing/product changes, competitor disruption, regulatory/category tailwinds) that must be completed even when nothing turns up; a branded-vs-non-branded traffic split and explicit growth-concentration assessment, both feeding directly into replicability; a written confidence rubric (High/Medium/Low with explicit criteria, not eyeballed); and a required data-limitations field.

Added an insight-level classification applied to every individual causal finding (not just the company as a whole): evidence strength (per the confidence rubric), replicability for a typical mid-market client (High/Low), and a required client-applicability note answering directly whether the finding depends on unusual scale, brand authority, budget, category conditions, or one-off circumstances. Also locked a synthesis-stage rule, to be applied at Phase 5/6: no finding becomes a validated playbook principle on the strength of one company — it needs to recur independently, via plausibly different mechanisms, across at least two case studies, or it gets published as a labeled single-case observation rather than a conclusion.

**What worked:** working through the cohort discussion at the level of "what unique question does this company answer" (rather than "does it fit the taxonomy") is what surfaced both the Q5 gap and the Q2/Q4 structural gap — neither would have been visible from a trajectory-label audit alone.

**What didn't work / open judgment call not yet resolved:** the rewritten Section 6 template is heavier than the original; the existing 60–90 minute time box may not be realistic for the new field count. Flagged rather than changed — confirm during the first few deep dives whether the time box needs revisiting, rather than guessing now before any company has gone through the new template.

**New open questions for this version:** whether category-baseline trends (field 4 of the new template) should be pre-computed once for all 10 categories before deep dives start, rather than recomputed per company as needed — likely more efficient, worth deciding before Phase 3 execution begins. Whether the comparison-group decliners not promoted to full deep-dive status (Sprinto, Secureframe, ActiveCampaign, Cognism, Paylocity, Pleo, Userpilot) need re-evaluation against the five business questions the same way the winner cohort just got, before Phase 3 starts in earnest.

### V1.4 — Phase 2 closed out at 118 locked companies, June 28, 2026

**What changed, and why:** A full-pass audit comparing Pass 1 Archive's "Include" decisions against actual Pass 2 entries found 148 companies marked Include across the 10 categories, but only 118 with completed Pass 2 rows (Ahrefs data + classification). The other 30 are genuine locked candidates (most explicitly tagged "LOCKED" for their vertical in Pass 1 Archive, Research Status mostly "In Progress") spread across 8 of 10 categories — not a labeling error, just unfinished Pass 2 data collection: Sales Engagement (Outreach, Lusha, RocketReach, Seamless.AI), Marketing Automation (HubSpot Marketing Hub, Insider, MailerLite, Flodesk), Customer Support (Zendesk for Customer Service, Kustomer, Gladly, HappyFox), Finance/Spend Management (Payhawk, Teampay, Alaan, Slash), HR/People Operations (Personio, Multiplier, UKG Ready, greytHR), Project Management (Jira, ClickUp, Backlog, morningmate), Developer Tools/DevOps (Azure Pipelines, Red Hat Ansible Automation Platform, Opsera, Redgate Flyway), Security/Compliance (Thoropass), Product Analytics/PM (Contentsquare).

**Decision:** the 118 already in Pass 2 are the final locked sample for this study — comfortably within reach of the ~100 target (Section 3) and large enough that no category fell short of a workable count. The 30 additional screened-but-not-entered candidates are kept in Pass 1 Archive as-is (no status change, no Exclude reason added) as a documented backup pool, in case a category turns out to need reinforcement during synthesis (Phase 5/6) or a deep-dive/comparison candidate falls through. They are explicitly **not** part of the 118-company classified sample and should not be cited in any vertical-level statistic or report claim unless individually pulled into Pass 2 first.

Also locked the Classification thresholds in Section 3 (Grew >+10%, Flat ±10%, Declined <−10%) now that the real distribution is in hand across all 118 — previously left as "to be set." Updated the Dashboard's Current Phase checklist to mark Company Selection and Traffic Classification complete, and Current Focus / Next 3 Tasks to point at Phase 3 (deep-dive and comparison-group selection, Task #209).

**What worked:** running the Archive-vs-Pass2 cross-check at full scale (not just per-vertical, as had been done piecemeal for Security/Compliance and Product Analytics/PM during execution) surfaced the true scope of the gap in one pass rather than discovering it piecemeal in Phase 3.

**New open questions for this version:** if synthesis later finds a category underrepresented relative to its pattern strength, the 30-company backup pool is the first place to look before re-screening from scratch — but pulling any of them into Pass 2 at that point should be treated as a documented exception (Section 4, "don't swap companies in or out without a documented reason"), not a routine top-up.

### V1.2 addendum — Customer Success category finalized at 13 companies, June 26, 2026

**What changed, and why:** Phase 2 data entry for the Customer Success category is complete: Gainsight, Planhat, ClientSuccess, Vitally, Custify, Akita, Kapta, ChurnZero, UserGuiding, Velaris, Rocketlane, Higher Logic, EverAfter — 13 companies, three over the ~10/category target in Section 3. This is not a methodology change. ChurnZero's inclusion was already documented as a deliberate "include" decision in Section 4's edge cases (employee count is metadata-only post-V1.1, and ChurnZero was explicitly called out there) — it had not yet been entered into the working tracker when Phase 2 data entry began, and was added once its Ahrefs export was ready. The ~10/category target in Section 3 is a planning guideline ("target roughly 10... don't force equal representation"), not a hard cap, so finishing at 13 doesn't require an exception — but it's recorded here so the final company count and per-category breakdown in the published methodology appendix match what's actually in the tracker.

All 13 companies' Traffic Trajectory values were checked against the official 9-value taxonomy (Section 5) and confirmed valid as entered — no new labels were introduced, no normalization needed.

### V1.3 — Trajectory taxonomy operational definitions codified, June 27, 2026

**What changed, and why:** After 36 companies were entered, the 9-value taxonomy (Section 5) was still only a list of labels — the actual bucketing logic (early-vs-mid-window peak timing, the historical-peak exception for Continuous Acceleration, the Flat-range threshold for Decline then Recovery, etc.) lived only in working conversation, not in this document. A ChatGPT-drafted alternative taxonomy (6 categories, including a non-canonical "Continuous Decline" label) was proposed and rejected — it would have collapsed three distinctions already in active use (Steady Growth, Early Peak then Plateau, Steady Decline) and reversed the Mixmax "Continuous Decline" → "Early Peak then Decline" correction made earlier in this study. Instead, the existing 9-value taxonomy was kept as-is and its operational definitions, written from the precedent already established across the first 36 rows, were added directly under the taxonomy list in Section 5.

**What worked:** none of the 36 already-entered rows required reclassification — a full audit against the new written definitions found all prior labels consistent with the logic actually applied.

**New open questions for this version:** none. This is a documentation-only change; no traffic metrics, formulas, or existing classifications were altered.

### V1.2 — Tracking sheet cutback, Pass 1 archived separately, Historical Peak scope expanded to all 100, June 26, 2026

**What changed, and why:** Requested a leaner master tracking sheet — 19 fields total, applied to all 100 locked companies — rather than carrying every Pass 1 screening field forward indefinitely. Implemented as a two-sheet split: **Company Tracker** (19 fields, Section 5) holds only the metrics needed for all 100 companies; **Pass 1 Archive** preserves the full screening/audit trail (Inclusion Decision, Exclusion Reason, Source List, all five gate fields, etc.) for every candidate including rejects, so reproducibility is unaffected. The two sheets — plus Deep Dive Database and Comparison Group Database — now join on **Company Name** instead of the original Company ID foreign key, a simplification made possible by each sheet's row set now being independently meaningful rather than positionally dependent.

The bigger substantive change: **Historical Peak Traffic and Historical Peak Month — previously Pass 3-only (added in V1.1 addendum #2) — are now collected for all 100 companies**, not just the 8–10 deep dives. This reverses the "Pass 3 only" framing from that addendum for those two specific fields. The two narrative deep-dive fields that referenced them ("Highest historical organic traffic," "Historical peak month") are removed from the Deep Dive template (Section 6) — they're now auto-pulled from Company Tracker — leaving 6 genuinely Pass-3-exclusive narrative fields (long-term story, inflection points, M&A, rebrands, domain migrations, product launches) rather than 8.

Added a new derived field, **Distance from Historical Peak %** = (Jun 2026 Traffic − Historical Peak Traffic) / Historical Peak Traffic — how current traffic compares to the company's all-time high, formula-driven, calculated for all 100 companies. This is purely descriptive metadata, like Study Window Peak Traffic/Month and Traffic Trajectory before it; it does not affect Classification (Section 3) and is not a screening gate.

**What worked:** the Company-Name join key is simpler than Company ID and removes a class of row-alignment bugs the old Dashboard formulas were exposed to (cross-sheet COUNTIFS assuming matching row order). Expanding Historical Peak Traffic/Month to all 100 was cheap — it's a single Ahrefs full-history lookup per company, not a deep-dive-level time investment — so the scope expansion didn't require a corresponding effort-budget change elsewhere in the methodology.

**What didn't work / open judgment calls not yet explicitly confirmed:** three fields (Selected for Deep Dive?, Selected for Comparison Group?, Research Status) weren't in the original 19-field list but are needed to drive the Dashboard's deep-dive/comparison-progress counts; they were placed on Pass 1 Archive as the catch-all "everything not in the lean tracker" sheet rather than added to Company Tracker or given a new sheet. Worth confirming this is the right home before it's load-bearing for reporting.

**New open questions for this version:** none yet identified beyond the placement judgment call above — this addendum is purely a tracking-structure simplification, not a methodology change to classification, gates, or thresholds.

### V1.1 addendum #3 — Traffic Trajectory taxonomy finalized, June 26, 2026

**What changed, and why:** Formalized the Traffic Trajectory controlled vocabulary (Section 5) as an official, closed taxonomy before processing more companies, to prevent ad hoc labels from creeping in. Added two values that the original 7 didn't cleanly cover — `Early Peak then Plateau` (distinct from `Early Peak then Decline`: traffic stays elevated rather than falling back) and `Decline then Recovery` (a company that was declining but turned around within the window) — bringing the approved list to 9. Reiterated that all 9 values describe the window-only curve shape; pre-window nuance still belongs exclusively in the Pass 3 Historical Context section. No classification logic, thresholds, or other Pass 2 fields changed.

### V1.1 addendum #2 — measurement/interpretation boundary clarified, June 26, 2026

**What changed, and why:** While reviewing EverAfter during Pass 2, valuable pre-window context surfaced (a large historical traffic peak, a long-term decline, recovery beginning during the study window) that has no home in the current structure. Clarified — not changed — that Pass 2 classification and the Peak Organic Traffic / Peak Traffic Month / Traffic Trajectory fields (Section 5) are scoped strictly to the study window (Jan 2025–June 2026); pre-window history must never influence them. Added a Historical Context subsection to the Pass 3 Deep Dive Template (Section 6) to capture that pre-window story — highest historical traffic, historical peak month, long-term traffic narrative, major inflection points, acquisitions/mergers, rebrands, domain migrations, product launches — as interpretation material, separate from measurement. No classification logic, thresholds, or Pass 2 fields changed.

### V1.1 addendum — Pass 2 tracking fields added, June 26, 2026

**What changed, and why:** During Pass 2 execution, comparing only the January 2025 and June 2026 snapshots was found to hide meaningful differences in *how* companies arrived at the same classification (e.g., Gainsight's continuous acceleration vs. ChurnZero's growth-then-pullback — both "Grew," very different shapes). Added three descriptive fields to the Candidate Companies tracking sheet (Section 5): Peak Organic Traffic, Peak Traffic Month, and Traffic Trajectory (controlled vocabulary: Continuous Acceleration, Steady Growth, Flat, Growth then Pullback, Early Peak then Decline, Steady Decline, Volatile). This is explicitly **not** a methodology change — Grew/Flat/Declined classification (Section 3) is unchanged, and no new screening gate was introduced. It's additional metadata captured from data already present in the Ahrefs Performance report export, preserved now for use during the Pass 3 deep-dive phase rather than re-pulled later. Also documented the Pass 2 workflow itself: Ahrefs Performance report export (not manual transcription) as the data-collection method, and an explicit scope boundary that no Top Pages/Keywords/Backlinks reports are pulled until Pass 3.

### V1.1 — FROZEN as of June 26, 2026

**What changed from V1, and why:** Pass 1 screening of the Customer Success category surfaced that the 50–1,000 employee soft band was functioning as a de facto exclusion gate in practice, even though V1 intended it as a soft sourcing guideline. Companies at the extremes (6, 9 employees; 1,100+ employees) were being treated as exclusion-adjacent purely on size, which doesn't match the actual research question — *what did B2B SaaS companies that continued growing organic traffic have in common*, not *what did 50–1,000-person companies have in common*. Employee count is now descriptive metadata for synthesis-phase segmentation, not a screening criterion. It remains a sourcing guideline only (lean toward growth-stage companies when building candidate pools, no fixed floor/ceiling).

Pass 1 screening gates are now five, stated explicitly in Section 3: (1) B2B SaaS confirmed, (2) operating independently, or — if acquired/merged — clearly documented and defensibly treated, (3) stable operating history and domain across the window, (4) reasonable category fit, (5) sufficient organic visibility (confirmed in Pass 2). Category fit moves from a metadata-only field to an explicit gate (4), since Pass 1 showed it was already functioning as a soft exclusion reason in practice (e.g., SuccessKPI, Skilljar-as-LMS) without being formally recognized as one. M&A status moves from an automatic-exclude to a documented-treatment-required gate — acquisitions and mergers are not auto-excluded, but require a clear, defensible call on how the company's history should be treated, especially when the deal closed shortly before the study window opened (see Totango/Catalyst and Influitive in Section 4's edge cases).

**What worked in V1 (keep doing this):** the five-gate structure as a checklist; LinkedIn as the single standardized employee-count source (still recorded, just not gating); the practice of flagging non-core-asset-driven traffic rather than excluding; documenting a one-line rationale per company; the "do not guess, flag for manual verification" discipline applied during Pass 1 execution.

**What didn't work (stop doing this):** treating the employee band as enforceable even while calling it "soft" — the soft/hard distinction wasn't operationalized clearly enough to prevent it from functioning as a gate during actual screening. Don't introduce a numeric band-style criterion again without also specifying exactly what happens at the edges.

**New open questions for this version:** how Buying Motion, Primary Buyer, and employee-count metadata will actually be used during synthesis (Phase 5/6) to test whether patterns cluster by something other than category — this is still untested with real data. Whether the category-fit gate (4) needs a more formal Strong/Adjacent/Weak rubric beyond judgment calls, once more categories have been screened and more borderline cases appear.

- **Core decisions changed from V1:** employee count downgraded from soft inclusion band to descriptive metadata; category fit upgraded from metadata field to explicit gate 4; M&A treatment changed from automatic exclude to documented-treatment-required.
- **Everything else from V1 remains in force** — sample size/frame, category list, data sources, study window, classification approach, deep-dive/comparison templates, weekly workflow, report outline, and content multiplication plan are unchanged.

### V1 — FROZEN as of June 26, 2026 (superseded by V1.1 above for inclusion/exclusion criteria)

**Version 1 of this methodology is now frozen.** Planning is complete; the project moves into execution. From this point forward, changes to this document should be limited to three things: fixing genuine execution issues discovered during screening or analysis, clarifying documentation that turns out to be ambiguous in practice, and recording ideas/improvements for V2 in the section below. Do not add new metadata fields, change inclusion/exclusion criteria, or otherwise redesign the methodology mid-study. The point of V1 is to learn from actually running it — V2 should improve because of evidence gathered while executing V1, not because the design kept getting optimized before a single company was screened. If something during screening reveals a real problem (not a preference, a genuine problem — e.g., a criterion that's unworkable in practice), fix it, document the fix and the reason here, and keep moving.

- **Started:** June 2026.
- **Core decisions locked:** ~100 companies from G2 + supplementary directories, sourced across the 10 locked categories in Section 3; category is the sourcing mechanism only, not assumed to be the explanatory variable; G2 quality labels excluded from analysis; G2 segment grids not used as company-size proxy (vendor size checked manually via LinkedIn instead); 50–1,000 employee soft band; trailing window framed around a period of increased AI search visibility and organic search volatility (Jan 2025–June 2026, pending Ahrefs data confirmation, no specific AIO coverage stats locked in until sourced for the final report); 8–10 deep-dive winners, ~8 comparison decliners; no composite scoring/index in V1; non-core-asset-driven traffic flagged rather than excluded; 10-week compressed timeline; Buying Motion and Primary Buyer added as metadata-only fields (Section 5) to let the synthesis phase test whether patterns cluster more by buying motion/buyer type than by software category.
- **Open items to resolve during execution:** exact organic-traffic floor for inclusion; exact numeric thresholds for Grew/Flat/Declined; final per-category counts (target ~10 each, flexible if a category yields fewer qualified candidates).

### Template for future entries (V2 and beyond)
```
### V[N] — [date]

**What changed from the prior version, and why:**

**What worked in the prior version (keep doing this):**

**What didn't work (stop doing this):**

**New open questions for this version:**
```

**Note for V2 planning, captured now while fresh:** if V1 produces clean enough patterns, V2 is a strong candidate for the first attempt at a composite scoring approach (the "Authority Index" concept that was explicitly deferred during V1 planning) — but only once V1 plus at least one more narrow study exist to synthesize from, and with explicit awareness that this content category already has funded competitors (2X AI Innovation Lab, Similarweb). Revisit this decision here, not from scratch, when V2 planning starts.
