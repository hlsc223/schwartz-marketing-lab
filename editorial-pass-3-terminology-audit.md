# Editorial Pass 3 — Terminology & Framework Audit

*Scope: All defined terms across the 11-chapter manuscript and glossary. Checks for: terms used before formal introduction, inconsistent or drifted usage, framework pre-explanation in Chs. 5/9/10, and glossary accuracy. Priority markers: [High] = must fix before publication. [Medium] = worth addressing for precision. [Low] = light polish.*

*The glossary itself includes a "Terminology Notes for Editorial Pass" section (lines 182–196) with pre-flagged drift risks. This audit addresses those and extends them with findings from the full chapter read.*

---

## Part 1 — Glossary Errors

Two entries in the glossary are now factually inconsistent with the manuscript as revised in Pass 1.

---

**G-1. "Recovery archetypes" entry still describes four archetypes** [High]

Glossary: "The four recovery patterns observed among recovering companies in the cohort."
Also lists: "Branded geographic expansion — Recovery driven by branded search expansion across country variants and geographic markets..."

Pass 1 revised Ch. 7 to three archetypes. LogRocket's branded geographic expansion was removed as a formal archetype and moved to Boundary Conditions. The glossary was not updated.

Required changes:
- Change "The four recovery patterns" to "The three recovery archetypes"
- Remove the "Branded geographic expansion" archetype sub-entry entirely
- Add a note in the Recovery Archetypes entry: "(LogRocket's branded geographic expansion appeared in the cohort during the same window but is documented as a Boundary Condition in Ch. 7, not a structural archetype, because it does not require a surviving content floor.)"

---

**G-2. "Deep dive" entry still says "Thirteen companies received deep dives"** [High]

Glossary: "Thirteen companies received deep dives; their findings are the primary evidence base for mechanism analysis throughout this report."

The Q3 supplemental deep dives added Hyperproof and LogRocket, bringing the total to 15. This update was reflected in Ch. 10 (Pass 2 fix) and Appendix A, but not in the glossary definition.

Required change: "Fifteen companies received deep dives; their findings are the primary evidence base for mechanism analysis throughout this report. Thirteen of the fifteen were included in the AI citation testing phase (Ch. 10); Hyperproof and LogRocket were added to the deep-dive cohort after that phase was complete."

---

## Part 2 — Quinn-Flagged Question: Do Chs. 5, 9, 10 Pre-Explain the Ch. 11 Framework Too Completely?

The short answer by chapter:

**Ch. 5 — Yes, for one specific element.** The callout box pre-states Question 2 of the Ch. 11 two-question test almost verbatim, without naming it as a framework element. This is the most acute instance of framework pre-explanation in the manuscript.

**Ch. 9 — Borderline, but defensible.** The satisfiability spectrum maps to Ch. 11's durability tiers conceptually, but Ch. 9 doesn't name the tiers, doesn't prescribe investment actions, and presents the spectrum as a diagnostic tool rather than a framework. Acceptable — Ch. 9's "Before you move on" section does preview the STOP/DE-RISK split, but without that language.

**Ch. 10 — Largely fine.** The closing bridge to Ch. 11 ("The next chapter turns those conditions into an actionable framework") is well-handled. No significant pre-explanation.

---

**T-1. Ch. 5 callout box pre-states Ch. 11's Question 2 verbatim** [High]

Ch. 5 callout: "The relevant question is not 'is this informational content?' The relevant question is: can the user accomplish their goal from an AI Overview or chat response alone, without clicking through? If the answer is yes, the content is structurally at risk — regardless of how well-executed it is."

Ch. 11 Question 2: "Can an AI system fully satisfy the query that would bring them here without a click?"

These are the same question in slightly different words. A reader who reaches Ch. 11 will recognize they've already been given the test. The risk isn't that Ch. 5 is wrong — it's that Ch. 11's two-question test lands with less force if both questions have already been stated independently.

The cleanest fix is a forward reference that reframes the Ch. 5 callout as building toward what Ch. 11 will formalize, rather than anticipating it silently. At the end of the callout, add: "This is the question Chapter 11 formalizes as Question 2 of the two-question investment test."

This converts the parallel from an accidental repetition into an intentional arc: the reader is primed in Ch. 5, given the evidence in Ch. 9, and receives the formal framework in Ch. 11. The question lands as a recognition, not a repeat.

---

**T-2. Ch. 9 "Before you move on" partially previews the STOP/DE-RISK categories** [Low]

Ch. 9's practical section includes: "The options are: deepen the content so the Overview can no longer fully satisfy the query (add proprietary data, a methodology layer, or a dimension AI can't synthesize from existing sources), or deprioritize future investment in that content type."

"Deepen the content" is Ch. 11's DE-RISK response. "Deprioritize future investment" is Ch. 11's STOP. The DOUBLE DOWN category is absent, and the formal labels aren't used. This feels appropriate — Ch. 9 is a diagnostic chapter that should leave readers with practical direction. The options described are logical from the chapter's evidence, not wholesale preview of Ch. 11's framework. No change recommended.

---

**T-3. Ch. 10 is clean** [No action needed]

Ch. 10's transition language — "The next chapter turns those conditions into an actionable framework for what to build" — is exactly the right bridge. The chapter discusses what AI systems cite, not what to build. No framework pre-explanation.

---

## Part 3 — Term Introduction Sequencing Issues

---

**T-4. "Pillar content" / "pillar pages" used in Ch. 7 before formal introduction in Ch. 8** [High]

Glossary says: *Pillar content — Introduced: Ch 8*

Ch. 7 Archetype 1: "Core pillar pages held position throughout the decline."
Ch. 7 Archetype 1 — "What survived": "Core pillar pages held position throughout the decline."

Ch. 8 formally introduces "pillar content" and "pillar content collapse" with definitions. But a reader hits "pillar pages" in Ch. 7 first, without a definition. Because "pillar" is a common informal term in SEO, the informal use probably won't confuse practitioners. But formal consistency requires a fix.

Two options:
- Change Ch. 7's "Core pillar pages" to "Core foundational pages" — removes the term before its formal introduction
- Leave it, noting that the informal use precedes the formal definition — acceptable in a practitioner-facing document

Recommendation: Change Ch. 7 to "core foundational pages" throughout Archetype 1 and Archetype 2 wherever "pillar" appears, keeping the formal definition reserved for Ch. 8 where it carries the structural decline diagnostic weight. Ch. 8's "pillar content collapse" has higher stakes as a defined concept; Ch. 7 using it informally cheapens the introduction.

---

**T-5. "Satisfaction-enabling content" appears in the glossary but not in chapter text** [Medium]

The glossary defines "satisfaction-enabling content" (with "Introduced: Ch 10; framework: Ch 11") and provides a full definition. But the term doesn't appear in the Ch. 10 or Ch. 11 text under that specific name.

What appears instead:
- Ch. 9: "fully satisfiable on one end" (describing queries, not content)
- Ch. 11 Tier 4: "their primary value is something the user can use directly, without engaging deeply"
- Ch. 11 Step 5 / two-question test: describes the test but doesn't use "satisfaction-enabling" as a noun

The formal term is in the glossary but not in the chapter text. This creates a situation where a reader encounters the glossary term without a chapter anchor.

Options:
- Add the term to Ch. 11 Tier 4's description: "This is *satisfaction-enabling content* — content whose primary value is fully deliverable without engagement."
- Or add it to the satisfiability spectrum discussion in Ch. 9 on the "fully satisfiable" end: "At this end of the spectrum is what this study calls *satisfaction-enabling content*."
- Or remove it from the glossary and fold the definition into the existing glossary entries for Tier 4 and fragile traffic.

Recommendation: Introduce the term in Ch. 9 where the spectrum is first described, and again in Ch. 11 Tier 4. The paired terms — *engagement-requiring* and *satisfaction-enabling* — should appear together at least once in the chapter text, not only in the glossary. Otherwise readers who skip the glossary never see the formal labels.

---

**T-6. "Engagement-requiring content" used in Ch. 9 as an adjective, not formally introduced as a term** [Medium]

Ch. 9 satisfiability spectrum: "to engagement-requiring on the other (comprehensive methodology guides, proprietary research, conceptual frameworks requiring depth to be useful)"

Ch. 11 framework Step 2: "Build engagement-requiring assets."

The term appears in Ch. 9 as an adjective modifying the content type at the end of the spectrum, and in Ch. 11 as part of the framework language. The glossary defines "engagement-requiring content" as "Introduced: Ch 10" — but it isn't introduced as a named term in Ch. 10, and it appears in Ch. 9 before Ch. 10.

This is a minor sequencing issue. If "satisfaction-enabling content" is introduced formally in Ch. 9 or Ch. 11 (per T-5 above), "engagement-requiring content" should be introduced at the same time, since they're defined as a pair in the glossary.

---

**T-7. Ch. 4 uses "satisfiable" without naming query satisfiability** [Low]

Ch. 4 Mechanism 2: "Affected queries are satisfiable in the SERP — role lists, templates, brief definitions, step-by-step processes."

This uses the concept without the formal term. The Ch. 1 foreshadow (added in Pass 1) points to Ch. 9 for the formal definition, and Ch. 4 closes Mechanism 2 with "Chapter 9 covers this evidence in detail." The informal use of "satisfiable" in Ch. 4 is consistent with the concept and doesn't conflict with the Ch. 9 definition. No change needed — but this should be confirmed as intentional.

---

## Part 4 — Term Consistency Across Chapters

---

**T-8. "Brand masking" — glossary attribution is slightly misleading** [Low]

Glossary: "Introduced: Ch 3, Ch 6"

Ch. 3 describes the branded/non-branded decomposition and gives examples (Gainsight, Rippling, CircleCI) but does not use the term "brand masking." The concept is first named in Ch. 6, where it appears as a section header: "Brand masking: when the number and the program move in different directions."

The glossary's "Ch 3" attribution implies the term appears in Ch. 3, which it doesn't. Update the glossary attribution to "Introduced: Ch 6; concept described: Ch 3."

---

**T-9. "Content treadmill" in Ch. 2 is acceptable informal use** [No action needed]

Ch. 2, Assumption 4: "it accelerates the treadmill."

Ch. 6 formally introduces "content treadmill" with the >60% cannibalization threshold. The Ch. 2 informal use doesn't assign a threshold; it uses "treadmill" as a plain English metaphor. Consistent with the glossary's note that this is acceptable as pre-formal use. No change needed.

---

**T-10. "Durable demand" vs. "content durability" — distinction maintained** [No action needed]

The manuscript consistently uses "durable demand" to describe the audience behavior pattern and "durable content" or "durable content types" to describe the assets. The formal term "content durability" (the property of the asset) appears in the glossary but not prominently in chapter text — which is fine since the chapter text describes the property without the abstract noun. No conflation found.

---

**T-11. "Same-position CTR collapse" — term introduced in glossary as "Ch 4" but formally named in Ch. 9** [Medium]

Glossary: "Introduced: Ch 4; exemplified: Ch 1, Ch 9"

Ch. 4 Mechanism 2 description does not use the phrase "same-position CTR collapse" — it describes the pattern ("position holds or improves while traffic collapses 80–99%"). The formal term "same-position CTR collapse" appears with italics in Ch. 9.

The glossary attribution should be: "Introduced: Ch 9; phenomenon described: Ch 1, Ch 4"

This is a minor glossary correction, not a manuscript change. The sequencing in the manuscript (describe the phenomenon early, name it formally later) is a sound narrative choice.

---

**T-12. "Structurally renewable demand" — introduced in Ch. 5 research synthesis, but not defined in text** [Low]

Ch. 5 research synthesis callout: "The content type meant structurally renewable demand."

The term appears without a definition in the research synthesis. The concept is described in the preceding prose ("enduring learning demand — demand that isn't driven by news cycles... but by the continuous arrival of new people into professional roles where these concepts matter") but the formal term isn't connected to that description.

Options:
- Replace "structurally renewable demand" in the Ch. 5 callout with the informal language ("enduring learning demand") to stay consistent with the chapter prose, and reserve the glossary term for the glossary
- Or add a parenthetical in the callout: "structurally renewable demand — demand that renews because the audience keeps arriving"

Either works. The term is useful enough to keep; it just needs a brief anchor in the text.

---

## Part 5 — Framework Architecture Review

---

**T-13. The report's central question appears in five locations — sequencing is intentional but worth confirming**

The core question "is this content engagement-requiring or satisfaction-enabling?" appears in various forms across:
1. Ch. 1: "content whose primary value was providing a direct answer... that a user could extract and use without engaging further" (prose description, no test)
2. Ch. 5 callout: "can the user accomplish their goal from an AI Overview or chat response alone" (Question 2, verbatim)
3. Ch. 9: "whether the user's underlying task can be completed within the SERP" (formal definition of query satisfiability)
4. Ch. 11 two-question test: Question 1 ("Does this create ongoing engagement?") and Question 2 ("Can an AI system fully satisfy the query without a click?")
5. Ch. 11 STOP/DE-RISK/DOUBLE DOWN framework: applied systematically by content type

The current arc: describe it (Ch. 1) → state it (Ch. 5) → evidence it (Ch. 9) → formalize it (Ch. 11). This is a sound narrative architecture. The risk, as noted in T-1, is that Ch. 5 states the question in the same language as Ch. 11's formal test, which flattens the impact of Ch. 11's framework reveal. The forward reference fix (T-1) resolves this.

---

**T-14. Ch. 5's content durability matrix (Figure 5.2) partially previews Ch. 11's full durability matrix (Figure 11.2)** [Low]

Ch. 5 Figure 5.2 visual notes: "an abbreviated version; the full version with AIO vulnerability and AI citation columns appears in Ch 11."

The visual notes acknowledge this relationship. The abbreviated Ch. 5 matrix contains only historical durability; the Ch. 11 matrix adds AIO vulnerability and AI citation columns. The sequencing is appropriate — Ch. 5 introduces the durability concept with the data available at that point in the narrative, and Ch. 11 provides the full investment-grade matrix.

No change needed. The visual notes already handle the relationship.

---

## Summary

**Fix in glossary (before publication):**

1. Update "Recovery archetypes" from four to three; remove "Branded geographic expansion" as a listed archetype; add note about LogRocket boundary condition. [G-1]
2. Update "Deep dive" count from thirteen to fifteen; add note about Hyperproof and LogRocket timing. [G-2]
3. Correct "Same-position CTR collapse" attribution: "Introduced: Ch 9; phenomenon described: Ch 1, Ch 4" — not "Introduced: Ch 4." [T-11]
4. Correct "Brand masking" attribution: "Introduced: Ch 6; concept described: Ch 3." [T-8]

**Fix in manuscript (before publication):**

5. Ch. 5 callout: Add forward reference — "This is the question Chapter 11 formalizes as Question 2 of the two-question investment test." [T-1]
6. Ch. 7: Replace "Core pillar pages" with "core foundational pages" throughout Archetype 1 and Archetype 2, preserving "pillar content" as a formal term for Ch. 8's introduction. [T-4]

**Worth addressing before final publication:**

7. Ch. 9 or Ch. 11: Introduce "engagement-requiring content" and "satisfaction-enabling content" as formal paired terms at least once in the chapter text, so readers who skip the glossary encounter both labels. Currently "engagement-requiring" appears as an adjective in Ch. 9 but is never formally introduced as a content-classification term in the text. [T-5, T-6]
8. Ch. 5 research synthesis: Bridge "structurally renewable demand" to the informal definition in the preceding prose, or replace with the informal language. [T-12]

**No action needed:**

- Ch. 4 "satisfiable" informal use: confirmed intentional; Ch. 4's cross-reference to Ch. 9 handles it.
- Ch. 2 "treadmill" informal use: confirmed acceptable; no threshold implied.
- Ch. 10 framework pre-explanation: clean; no action.
- "Durable demand" vs. "content durability" distinction: maintained throughout.
- Ch. 11 Figure relationships to Ch. 5 Figure: noted in visual notes; handled.
