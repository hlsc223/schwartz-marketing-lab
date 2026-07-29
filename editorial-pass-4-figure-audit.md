# Editorial Pass 4 — Figure & Visual Audit

**Report:** The Modern Organic Growth Playbook  
**Pass scope:** All numbered figures, design notes, and in-text figure references across all 11 chapters  
**Preceding passes:** Pass 1 (structural), Pass 2 (evidence), Pass 3 (terminology) — all complete  
**Date:** 2026-07-02

---

## Part 1: Complete Figure Inventory

| Figure | Chapter | Title | In-text placeholder | Visual note | Status |
|---|---|---|---|---|---|
| 1.1 | Ch. 1 | Traffic distribution chart | ✅ Line 21 | ✅ Line 103 | Clean |
| 2.1 | Ch. 2 | Assumptions vs. reality table | ❌ Missing | ✅ Line 110 | **Fix** |
| 3.1 | Ch. 3 | Traffic value divergence matrix | ❌ Missing | ✅ Line 111 | **Fix** |
| 4.1 | Ch. 4 | Five trajectory types gallery | ✅ Line 17 | ✅ Line 194 | Clean |
| 4.2 | Ch. 4 | Diagnostic decision tree | ✅ Line 132 | ✅ Line 198 | Clean |
| 5.1 | Ch. 5 | Content distribution chart | ⚠️ Malformed (line 19) | ✅ Line 147 | **Fix** |
| 5.2 | Ch. 5 | Content durability matrix, overview version | ❌ Missing | ✅ Line 151 | **Fix** |
| 6.1 | Ch. 6 | Cannibalization rate waterfall chart | ✅ Line 47 | ✅ Line 139 | Data flag |
| 7.1 | Ch. 7 | Recovery archetypes diagram | ✅ Line 29 | ✅ Line 137 | Clean |
| 8.1 | Ch. 8 | Structural vs. tactical decision matrix | ✅ Line 81 | ✅ Line 123 | Clean |
| 9.1 | Ch. 9 | Same-position CTR collapse table | ⚠️ Title mismatch (line 56) | ✅ Line 134 | **Fix** |
| 9.2 | Ch. 9 | Query satisfiability spectrum | ✅ Line 76 | ✅ Line 138 | Clean |
| 10.1 | Ch. 10 | AI citation matrix | ✅ Line 77 | ✅ Line 119 | Clean |
| 11.1 | Ch. 11 | The Durable Demand Framework | ✅ Line 19 | ✅ Line 200 | Clean |
| 11.2 | Ch. 11 | Content durability matrix (full version) | ✅ Line 68 | ✅ Line 204 | Clean |
| 11.3 | Ch. 11 | Portfolio health scorecard | ✅ Line 110 | ✅ Line 208 | Clean |

**Non-numbered design notes (PDF/layout only — no in-text placeholder expected):**
- Ch. 4: Mechanism cards design note — Clean
- Ch. 4: Common misdiagnoses box design note — Clean
- Ch. 11: Investment decision cards (STOP / DE-RISK / DOUBLE DOWN) — Clean

---

## Part 2: Issues Requiring Action

### F-1 — Ch. 5, Figure 5.1 in-text placeholder: wrong format and incomplete title
**Location:** Chapter 5, line 19  
**Current:** `**[Figure 5.1 — insert early here]**`  
**Problem:** Two issues. (1) Format is bold (`**...**`), matching the visual note style rather than the in-text reference style used in every other chapter (italic: `*[Figure X.X — Full title. See visual notes at end of chapter.]*`). (2) The descriptor "insert early here" is a layout instruction, not the figure title.  
**Required fix:** `*[Figure 5.1 — Content distribution chart. See visual notes at end of chapter.]*`

### F-2 — Ch. 5, Figure 5.2: missing in-text placeholder
**Location:** Chapter 5 — should appear after the "The real test: satisfiability" callout box, before the "## Position consolidation as a diagnostic metric" section  
**Current:** No in-text reference exists for Figure 5.2 anywhere in the chapter body.  
**Visual note spec:** "Alongside or after the 'What definitional content does that other content doesn't' section."  
**Required fix:** Add `*[Figure 5.2 — Content durability matrix, overview version. See visual notes at end of chapter.]*` after the satisfiability callout box, before the "## Position consolidation" section header.

### F-3 — Ch. 9, Figure 9.1: title mismatch between in-text reference and visual note
**Location:** Chapter 9, line 56 (in-text ref) vs. line 134 (visual note header)  
**In-text ref:** `*[Figure 9.1 — Full same-position CTR collapse table. See visual notes at end of chapter.]*`  
**Visual note header:** `**[Figure 9.1 — Same-position CTR collapse table]**`  
**Problem:** The word "Full" appears in the in-text ref but not in the visual note header. These should match exactly.  
**Recommended fix:** Remove "Full" from the in-text reference. "Full" is implicit (the visual note specifies 8–10 keywords) and its presence only in the in-text ref looks like a draft note. Change to: `*[Figure 9.1 — Same-position CTR collapse table. See visual notes at end of chapter.]*`

### F-4 — Ch. 2, Figure 2.1: missing in-text placeholder
**Location:** Chapter 2 — should appear after the "## Where the data pushed back" section, before the "## Assumption 1" header  
**Current:** No in-text reference exists for Figure 2.1 anywhere in the chapter body.  
**Visual note spec:** "After the opening section, before or alongside 'Assumption 1.' Alternatively, as a summary visual after all four assumptions."  
**Recommended position:** After the introductory blockquote in "Where the data pushed back" (the table serves as a forward-reference summary for the four assumptions that follow, so placing it before Assumption 1 works better than after all four).  
**Required fix:** Add `*[Figure 2.1 — Assumptions vs. reality table. See visual notes at end of chapter.]*` after line 19 (the "Four assumptions appeared repeatedly..." paragraph), before the `---` divider before Assumption 1.

### F-5 — Ch. 3, Figure 3.1: missing in-text placeholder
**Location:** Chapter 3 — should appear after the "## Decomposition 2 — Traffic value vs. raw traffic" section, before "## Decomposition 3"  
**Current:** No in-text reference exists for Figure 3.1 anywhere in the chapter body.  
**Visual note spec:** "After the 'Traffic value vs. raw traffic' decomposition section, before 'Decomposition 3.'"  
**Required fix:** Add `*[Figure 3.1 — Traffic value divergence matrix. See visual notes at end of chapter.]*` after the Decomposition 2 closing sentence ("A gap of 20+ points between raw traffic trend and traffic value trend is a signal worth investigating..."), before the `---` divider before Decomposition 3.

---

## Part 3: Data Flags (Non-blocking — designer notes)

### D-1 — Figure 2.1: ZoomInfo rounding inconsistency
**Visual note:** "ZoomInfo (154% traffic growth, 14.7% value growth)"  
**Manuscript (Ch. 2 and Ch. 3):** "154.7%" and "14.7%"  
The visual note rounds 154.7% to 154% for the table entry. The manuscript uses 154.7% throughout. Minor, but the visual note should match the manuscript precisely.  
**Recommendation:** Update visual note to "154.7% traffic growth" for consistency.

### D-2 — Figure 6.1: Ramp cannibalization rate — BLOCKING DATA DEPENDENCY
**Visual note (current):** "Braze (~10% cannibalization, Ahrefs estimate), Ramp (~22% of gross gains), LogRocket (75.6%), Aha! (286.6%)"  
Ramp's ~22% figure is sourced from the Ahrefs Top Pages export comparison analysis (Navan↔Ramp comparison brief). Braze's ~10% is an Ahrefs estimate. Both figures place Braze and Ramp in the Healthy zone (under 30%) — the visual contrast between those two bars will be intentionally subtle. The dramatic contrast is from the right side of the waterfall (LogRocket 75.6%, Aha! 286.6%). **Blocking: do not finalize the waterfall chart without confirmed numeric values for both Ramp and Braze. The ~22% and ~10% figures must be verified against the source exports before rendering.** This is a data verification requirement, not a manuscript error — the visual note has been updated with the best available figures, but the designer brief must flag both as pending confirmation.

---

## Part 4: Cross-Figure Consistency

### Figure 5.2 vs. Figure 11.2 — Abbreviated vs. full durability matrix

These two figures describe themselves as versions of the same visual:
- Figure 5.2 (Ch. 5): "The abbreviated version" — 7 content types on vertical axis, durability direction only (strong → fragile)
- Figure 11.2 (Ch. 11): "The full version with AIO vulnerability and AI citation columns" — 4 content types (matching the four tiers), adds AIO vulnerability, AI citation likelihood, historical durability columns

The row count difference is intentional: Figure 5.2 breaks content into seven granular types; Figure 11.2 consolidates them into four structural tiers. This should be treated as a design coordination note, not a conflict. A designer should understand that these are not identical matrices at different sizes — they have different row structures, so they should be built as distinct assets that share a visual language, not as one asset scaled down.

**Recommendation:** Add a cross-reference note to Figure 5.2's visual spec clarifying the row structure differs from Figure 11.2 (seven content types vs. four tiers), so the designer doesn't attempt to derive one from the other. No manuscript change needed — this is a designer handoff note.

---

## Part 5: Designer Handoff Notes

Three figure pairs require explicit division-of-labor guidance in the designer brief. These notes are not manuscript changes — they are instructions for the person building the visuals so adjacent figures aren't rendered with confusingly similar grammar.

### Pair 1 — Figure 5.2 vs. Figure 11.2: Explanatory model vs. decision matrix

These two figures share subject matter (content type durability) but serve fundamentally different cognitive purposes and must not look like the same visual at different sizes.

**Figure 5.2** is an explanatory model. Its job is to teach the durability logic for the first time — "what kinds of content proved more or less durable in this cohort?" Seven content types on the vertical axis, a simple left-to-right durability spectrum, company evidence as annotation. It should feel conceptual and chapter-specific: the reader is encountering this framework for the first time and needs to understand the pattern, not make a decision.

**Figure 11.2** is a decision matrix. Its job is to convert that logic into an operating framework with investment implications. Four consolidated tiers (not seven granular types), multiple analytical columns (AIO vulnerability, AI citation likelihood, historical durability, action implication), built for careful reference use rather than first-pass understanding. It should feel like a dense tool the reader uses — heavier information load, designed to be consulted repeatedly.

These figures share a visual language but must be built as distinct assets. Figure 5.2 should not look like a smaller or simpler version of Figure 11.2. It should look like the conceptual foundation that Figure 11.2 operationalizes.

### Pair 2 — Figure 7.1 vs. Figure 8.1: Pattern recognition vs. diagnostic instrument

These two figures appear in adjacent chapters and cover recovery-related content. They must use different visual grammar so a reader flipping between chapters can immediately distinguish their purposes.

**Figure 7.1** answers: "What kind of recovery happened?" It is pattern recognition from observed cases — three distinct pathways shown as schematic traffic curves with company evidence. It should feel like illustrated case archetypes: "here is what we observed." Do not render as a matrix, flowchart, or decision grid.

**Figure 8.1** answers: "Is my situation recoverable, or is it structurally broken?" It is a diagnostic decision instrument — a structured grid where the reader locates their decline pattern and receives a clear response (Redirect or Recover). It should feel operationally denser and more classification-oriented than 7.1. Do not render as illustrated case panels or archetype cards.

The risk is that both figures could default to comparison-card grid layouts. They should not. 7.1 shows observed pathways; 8.1 helps the reader determine which path applies to them. Different cognitive function requires different visual grammar, even if they share the same design system.

### Note 3 — Figure 2.1: Rebuttal framing, not neutral summary

Figure 2.1 is the report's first table. It appears in Chapter 2 before the reader has seen the evidence — its job is to flip assumptions, not confirm them. The visual contrast between the two columns should feel like a correction: what was believed vs. what happened.

Do not treat the right column ("What the data showed") as a neutral data label next to the left. Column treatment and typography should signal disagreement. Consider whether a third column ("Investment error this produced") fits cleanly — if it does, it converts the table from an observation into a practical argument. This figure is the chapter's most shareable asset; it should be designed to stand alone when extracted.

---

## Part 6: Confirmed Clean

The following figures were verified against the manuscript and require no changes:

**Figure 1.1** — Cohort counts (Grew 44, Flat 19, Declined 55) match manuscript. In-text ref and visual note title match exactly.

**Figure 4.1** — Five trajectory types match the five mechanism categories introduced in Ch. 4. In-text ref and visual note title match exactly.

**Figure 4.2** — Decision tree branch logic matches the five mechanisms (algorithm update, architectural damage, AI Overview interception, demand substitution, competitive displacement) and their stated diagnostic tests. In-text ref and visual note title match exactly.

**Figure 7.1** — Visual note correctly states "three-panel visual, one panel per archetype" following Pass 3 edits. Panel contents match the three archetypes (CircleCI, Hyperproof, CloudBees). In-text ref and visual note title match exactly.

**Figure 8.1** — Correctly uses "pillar content loss" as the label for Pattern 1 in its row structure. This is the correct Ch. 8 term (distinct from "foundational pages" language used in Ch. 7 after Pass 3). In-text ref and visual note title match exactly.

**Figure 9.2** — Company examples (Aha! on satisfiable end, Rippling/Navan/Harness/Vanta/Ramp on engagement-requiring end) are consistent with manuscript evidence. In-text ref and visual note title match exactly.

**Figure 10.1** — States "13 companies tested" in the AI citation phase. This matches the corrected deep-dive count (15 total deep dives; 13 included in AI citation testing; Hyperproof and LogRocket added after). In-text ref and visual note title match exactly.

**Figures 11.1, 11.2, 11.3** — All three match chapter structure and content. Investment decision cards (STOP/DE-RISK/DOUBLE DOWN) correctly reflect the three categories in the chapter. All in-text refs and visual note titles match exactly.

---

## Summary: What Needs Action

### Required fixes (5 items)

**F-1:** Ch. 5, line 19 — Fix Figure 5.1 in-text placeholder: change bold to italic, replace "insert early here" with "Content distribution chart"  
**F-2:** Ch. 5 — Add Figure 5.2 in-text placeholder after the satisfiability callout, before "## Position consolidation"  
**F-3:** Ch. 9, line 56 — Remove "Full " from "Full same-position CTR collapse table" to match visual note title  
**F-4:** Ch. 2 — Add Figure 2.1 in-text placeholder after the "Where the data pushed back" intro, before Assumption 1  
**F-5:** Ch. 3 — Add Figure 3.1 in-text placeholder after Decomposition 2, before Decomposition 3  

### Data flags for designer handoff

**D-1:** Update Figure 2.1 visual note — "154%" → "154.7%" to match manuscript precision — *resolved in manuscript*  
**D-2:** Figure 6.1 visual note updated to "Ramp (~22% of gross gains)" — **BLOCKING: verify ~22% (Ramp) and ~10% (Braze) against source Ahrefs exports before rendering. Do not finalize the waterfall chart without confirmed values.**

### Designer handoff notes

Three figure pairs require explicit visual grammar guidance. See Part 5 for full notes:
- **Fig. 5.2 vs. 11.2** — explanatory model vs. decision matrix; different row counts, different cognitive purpose, must not look like the same visual at different sizes
- **Fig. 7.1 vs. 8.1** — pattern recognition vs. diagnostic instrument; must use different visual grammar despite adjacent placement
- **Fig. 2.1** — rebuttal framing, not neutral summary; typography should signal disagreement between columns

### No action needed

All other figures are clean.

---

## Readiness for Pass 5

After the five required fixes are implemented, the manuscript is ready for Pass 5 — Practitioner Audit. Pass 5 should evaluate whether each chapter's "Before you move on" section gives a practitioner actionable, specific, realistic instructions — including whether any of those instructions reference data or steps that contradict what the figures show.
