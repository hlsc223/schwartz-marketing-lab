# Scrunch AI-Citation Synthesis Brief — v1

**Status:** Locked execution protocol for the RQ1–RQ3 Scrunch synthesis write-up.
**Relationship to other documents:** This brief governs the *analysis and write-up* of the Scrunch citation-validation sub-study. It does not modify `research-operating-manual-v1.md` or `scrunch-prompt-set-v1.md` — it inherits their binding rules and resolves how this sub-study's findings get structured and where they live. Where this brief is silent, those documents control.

**Origin:** Drafted from a framework proposed by ChatGPT (pasted into chat by Quinn), revised after a consistency check against the three governing project files. Adopted with modifications, documented below.

---

## 1. Purpose

Determine whether the content-led traffic-growth patterns identified in the Phase 3 Ahrefs deep dives are reflected in *current* AI citation behavior across the 14-company cohort, using the locked 49-prompt Scrunch set.

This is a validation check on existing findings, not a new causal study. Findings here either corroborate, complicate, or diverge from the Phase 3 synthesis — they do not establish that AI citation causes or explains historical traffic change.

## 2. Research Questions (refined wording)

The locked prompt-set document defines these informally. The wording below is a deliberate refinement — adopted because it removes implicit causal framing — and is logged here as a documented change, not a silent rewording.

- **RQ1.** Are the historical traffic-driving informational pages identified in the Ahrefs analysis still retrieved and cited by AI systems for equivalent user intents? *(Previously: "do content-led growers get cited for the same content that drove growth?" — revised to drop the causal implication of "content-led" and "drove growth." Do not assume or imply causation when answering this question.)*
- **RQ2.** What content types are most commonly cited across the cohort, and how does that distribution compare to the content types that drove historical organic growth? *(Unchanged in substance from the locked wording; "compare to" clause added to make the link to Phase 3 findings explicit.)*
- **RQ3.** Where do meaningful mismatches exist between historical organic-traffic growth and current AI citation behavior, and what do those mismatches look like? *(Unchanged in substance. "Meaningful" requires Level 2 support — see Section 4 — not a single-company anecdote.)*

## 3. Standing rules carried forward (binding, not optional)

These are not new — they are restated here because the proposed framework didn't name them, and they're load-bearing enough that silence risks drift:

1. **Do not invent any numbers. Accuracy is king. If unsure, ask.** This is the project's top-level binding rule and applies to every count, ratio, and label in this synthesis — including characterizations of groups of data, not just individual figures.
2. **Aggregate observed counts only — never implied or inferred rates.** "Cited in 9 of 14 companies" is reportable. "Cited roughly two-thirds of the time" is not, unless that is a literal count-based fraction explicitly framed as a count, not a rate claim extrapolated beyond what was tested.
3. **Scope every conclusion to the specific engine(s) actually tested.** A claim that a content type or company "was cited" must name which of the six engines (chatgpt, copilot, google_ai_mode, google_ai_overviews, google_gemini, perplexity) it was cited on. This applies inside every Level 1 and Level 2 statement in Section 4 below — cross-company patterns must report engine distribution, not just company count, since engine-level divergence has already been observed within this dataset (e.g., uneven citation across engines for the same prompt).
4. **Run-count discipline.** Each prompt was run once by default; only rerun on a genuinely surprising result. Any single-run finding should be flagged as such if it's being used to anchor a Level 2 or Level 3 claim — a surprising pattern resting on one unreplicated run is weaker evidence than the same pattern appearing independently across multiple already-run prompts.
5. **Closed content-type taxonomy — no ad hoc additions.** All citations must be classified into the 11 locked values from `scrunch-prompt-set-v1.md`: Glossary Page, Blog/Educational Article, Collection/Category Page, Product Feature Page, Interactive Tool/Calculator, Product/Integration Page, Comparison Page, Homepage, Pricing Page, Documentation, N/A. Do not introduce new categories during synthesis (see Section 5 for explicit mapping of any type that doesn't have an obvious home).

## 4. Evidence hierarchy

A three-level hierarchy, distinct from — and not a substitute for — the operating manual's existing Hypothesis / Emerging / Validated-principle ladder (Section 6b), which governs the *Ahrefs deep-dive* findings. This sub-study uses its own ladder because the underlying evidence unit is different (a single-run AI citation observation vs. a multi-source deep dive), but the same discipline applies: no finding is promoted on the strength of one company, and promotion requires distinct supporting mechanisms, not the same mechanism relabeled.

- **Level 1 — Company Observation.** A citation pattern observed for one company, on one or more engines. Reportable as-is, but not generalized.
- **Level 2 — Cross-company Pattern.** The same behavior observed independently in **3 or more companies** (not 2 — this sub-study's smaller cohort, 14 companies vs. the main study's larger pool, warrants a higher bar than a simple "multiple companies" threshold would give). A Level 2 claim must state: how many companies, which companies, and which engine(s) the pattern held on. A pattern seen on 3 companies but concentrated on a single engine is a narrower, weaker claim than one holding across companies *and* across engines — say so explicitly rather than letting company count imply engine-wide consistency.
- **Level 3 — Research Implication.** A statement about what a Level 2 pattern means for the Phase 3 findings or for client-facing guidance. Must explicitly flag whether it implies a revision, a corroboration, or a complication of an existing Phase 3 finding, and must carry the same non-causal hedging as the rest of the project (Operating Manual Section 2).

No finding skips a level. No Level 3 implication is written without a named Level 2 pattern underneath it.

## 5. Content-type taxonomy mapping

RQ2 will be answered using only the 11 locked values. Where a citation's actual content type doesn't have an obvious match, default mappings:

- Help center / support article → Documentation (or Blog/Educational Article if narrative rather than reference-style)
- API documentation → Documentation
- Status page / uptime page → N/A (third-party, non-cohort; do not force into a content-type bucket designed for cohort-owned pages)
- Template page → Interactive Tool/Calculator if functional, otherwise Product Feature Page
- Educational hub → Collection/Category Page or Blog/Educational Article, whichever the page's primary structure resembles
- Category page → Collection/Category Page

If a citation genuinely doesn't fit any of the 11 values even after this mapping, flag it for Quinn rather than inventing a 12th category. A taxonomy expansion is a versioned decision, not a synthesis-time judgment call.

## 6. Pattern-first synthesis approach

When reviewing each company's citation results, ask: has this behavior already been logged for another company? If yes, fold it into the existing Level 2 pattern rather than re-describing it per company. Per-company repetition is included only when it materially strengthens or complicates a pattern (e.g., a company that breaks an otherwise-consistent pattern).

Candidate patterns to watch for (not a checklist to force-fit data into — these are hypotheses to test against what's actually in the CSVs, not conclusions to confirm):

- Comparison pages outperforming other content types in citation frequency
- Glossary/definitional pages being cited for educational-intent prompts
- Documentation pages cited for technical/how-to prompts
- Support/help content outperforming marketing pages for support-intent prompts
- Secondary or non-flagship pages outperforming the page Phase 3 identified as the historical traffic driver
- Third-party sources displacing first-party cohort pages for generic/definitional prompts
- Homepages rarely or never cited
- Product pages underperforming relative to comparison or educational content
- Operational/support-status queries routed to third-party tools rather than any company's own page

## 7. Special findings — pre-agreed handling

- **"Is X down" / operational-status prompts.** Classify as a retrieval-behavior finding: AI systems consistently defer operational-status queries to third-party uptime/status providers, not as a citation failure specific to any cohort company. This is already supported by observed data (zero cohort-company citations on the website-down and help-desk-software prompts checked so far) and should be written up as a completed Level 2 observation if it holds across additional companies' equivalent prompts, not kept open as an unresolved question.
- **ChatGPT/Copilot lower citation volume.** Fold into the synthesis as a completed observation (matches prior conclusion logged for this study) — characterize it as likely concentrated in comparison-heavy prompts rather than universal, and state the engine-level breakdown explicitly per Rule 3 above rather than a blanket "ChatGPT and Copilot cite less."
- **Northflank / other non-cohort-brand dominance.** Keep as a company-specific (Level 1) observation tied to the dev-tools batch. Do not elevate to Level 2 unless the same non-cohort-brand-displacement behavior recurs independently in another company's batch.

## 8. Deliverable structure and location

The existing `synthesis-matrix.md` is scoped to the Phase 3 Ahrefs deep-dive findings under the Hypothesis/Emerging/Validated-principle taxonomy (Operating Manual Section 6b). The Scrunch citation findings are a structurally different evidence type (single-run AI-citation snapshots vs. multi-source deep dives) using a different ladder (Section 4 above). Blending them under one taxonomy in one undifferentiated file risks a reader assuming both carry the same evidentiary weight and process.

**Decision:** Add the Scrunch RQ1–RQ3 synthesis to `synthesis-matrix.md` as a clearly delineated new top-level section — own header ("AI Citation Validation Study — Scrunch RQ1–RQ3 Synthesis"), own Level 1/2/3 vocabulary, explicit one-line note at the top of the section stating it is a distinct sub-study with its own evidence standard, not an extension of the Hypothesis/Emerging/Validated ladder above it. This keeps everything in one file (consistent with the project's preference for a living, single source of truth) while preventing the two evidentiary systems from being read as equivalent.

Write the section in the register of the synthesis portion of an academic mixed-methods study: proportional claims, explicit engine/company counts behind every Level 2 statement, no per-company repetition unless it strengthens or complicates a pattern, and a closing paragraph mapping Level 3 implications back to specific Phase 3 findings (corroborates / complicates / revises).

## 9. Versioning

This brief is v1. Any change to RQ wording, the Level 2 company threshold, or the taxonomy-mapping table in Section 5 should be logged as a version bump here, per the operating manual's standing instruction that silent protocol drift is worse than a documented version change.
