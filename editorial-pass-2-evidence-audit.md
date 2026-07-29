# Editorial Pass 2 — Evidence & Claim Audit

*Scope: Every factual claim, statistic, and company-specific finding across all 11 chapters. Checks for: causal vs. correlational language, statistic consistency across chapters, attribution gaps, interpretive overreach, and internal contradictions. No sentence-level edits — specific corrective language suggested where the fix is clear.*

---

## How to read this audit

Issues are organized into three categories: **Accuracy issues** (claim is inconsistent with the evidence or contradicted by another chapter), **Attribution gaps** (claim is plausible but stated more confidently than the evidence supports), and **Internal consistency** (same claim is described differently across chapters). Priority markers: **[High]** = should be corrected before publication. **[Medium]** = worth addressing for precision. **[Low]** = light polish or note.

---

## 1. Accuracy Issues

---

**1.1 "13 tested cases" in Ch. 10 conflicts with 15 deep dives** [High]

Ch. 10: "This study tested 13 prompts — one per company in the deep-dive cohort."
Appendix A and the completed manuscript establish 15 deep dives.

The discrepancy is explained by timing: AI citation testing was completed before the Hyperproof and LogRocket supplemental deep dives were added in Q3. The claim as written implies all deep-dive companies were tested, which isn't accurate.

Recommended fix: Add one sentence noting the gap. After "one per company in the deep-dive cohort," add: "(13 of the 15 deep-dive companies; Hyperproof and LogRocket were added to the deep-dive cohort after the citation testing phase was complete)." All references to "9 of 13" and "4 of 13" are internally consistent once the total is corrected.

---

**1.2 Aha! CTR collapse described as "position 3 to position 1" in Ch. 1 and Ch. 4 — data shows varied positions** [High]

Ch. 1: "20+ queries where pages moved from position 3 to position 1 and still lost the majority of their clicks."
Ch. 4: "pages that moved from position 3 to position 1 and still lost 92% of traffic."

The Ch. 9 data table shows the actual movement pattern:
- user story template: 3 → 1 (−92%) — the source of "position 3 to position 1"
- marketing job titles: 3 → 3 (−99%) — position unchanged
- product marketing: 1 → 1 (−98%) — already at position 1
- product positioning: 2 → 2 (−95%) — position unchanged
- product roadmap template: 2 → 2 (−93%) — position unchanged

"Position 3 to position 1" accurately describes one page (user story template). The general pattern — which is the more important finding — is that position held or improved while traffic collapsed. Ch. 1 and Ch. 4 use the specific example as if it describes the pattern, which misrepresents what the data shows.

Recommended fix in Ch. 1: "Aha! provided the clearest evidence in the cohort, with 20+ queries where pages held or improved their rankings while traffic fell 80–99% simultaneously." (Ch. 9 contains the full data table for readers who want specifics.)

Recommended fix in Ch. 4: "pages that held or improved rankings while still losing 80–99% of their traffic."

---

**1.3 Rippling described as AIO-resistant in Ch. 2 and Ch. 9, but non-branded content described as "experiencing churn" in Ch. 3** [High]

Ch. 2 and Ch. 9: "Rippling — [one of five companies that] independently showed definitional content growing throughout the AI Overview expansion window."
Ch. 3: "brand traffic was growing as product adoption expanded, while the non-branded content program was experiencing churn."

These two descriptions are in tension. If Rippling's non-branded content program was experiencing churn, it is harder to present Rippling as an unqualified example of AIO-resistant definitional content growth.

The most likely accurate picture: Rippling's definitional HR glossary and conceptual pages held up or grew (supporting the AIO resistance finding), while the broader non-branded content portfolio was experiencing churn from other content types or mechanisms. These aren't mutually exclusive — but the manuscript doesn't explain the coexistence, so a reader moving between Ch. 3 and Ch. 9 will see an apparent contradiction.

Recommended fix: Either (a) add a sentence in Ch. 3 or Ch. 9 explicitly acknowledging that Rippling's definitional content grew despite broader non-branded churn — "the AIO-resistant gains were concentrated in Rippling's definitional and conceptual pages, not the full non-branded portfolio" — or (b) remove Rippling from the five-company AIO resistance list and replace with a company whose overall non-branded growth is cleaner. Option (a) is preferable; it adds precision without removing the finding.

---

## 2. Attribution Gaps

---

**2.1 "Eight growing companies" — never fully enumerated** [High]

Ch. 2: "the eight companies with the cleanest organic growth signals"
Ch. 5: "the eight companies that showed this" [distributed growth pattern]
Ch. 11: "eight companies that grew organically through content-driven mechanisms"

The "eight" is referenced three times but never enumerated as a named list in any chapter. The consistently named companies across the growth anatomy chapters are: Braze, Harness, Navan, Ramp, Vanta (five). Rippling, Akita, and CircleCI appear in growth contexts elsewhere, but Akita is Ch. 5's boundary condition for concentrated bets (the near-counterexample), CircleCI is a recovery case, and Rippling has the Ch. 3 tension noted above.

A reader trying to identify all eight cannot do so from the manuscript text. This is an attribution gap: the claim is specific ("eight") but the evidence behind the count is not presented.

Recommended fix: Either name all eight in the first instance (Ch. 2 or Ch. 5), or soften the count to "the growing companies with the cleanest organic signals" without specifying eight. The specific number "eight" implies a level of precision that the manuscript doesn't support through named examples.

---

**2.2 "Seven of the growing companies" for position consolidation — never named** [Medium]

Ch. 5: "In seven of the growing companies, positions 21-50 and 51+ shrank during the study window."

Same issue as 2.1 but for the position consolidation finding. The "seven" is stated without naming the seven. Unlike the "eight" figure, this is never re-stated in other chapters, so it has less cross-chapter exposure.

Recommended fix: Name the seven, or soften to "in the majority of growing companies examined."

---

**2.3 Freshworks "precisely aligned" language overstates attribution certainty** [Medium]

Ch. 8: "The December 2025 Dew design system launch produced multi-bucket ranking loss precisely aligned to the launch date."

"Precisely aligned" implies week-level or day-level alignment between the launch date and the ranking loss onset. The Appendix A methodology notes that architectural damage attribution is based on timing correlation with internal events. "Precisely" does more than the underlying data supports — correlation within the same month or the same reporting window is not the same as precise alignment.

Recommended fix: Change "precisely aligned" to "closely aligned" or "occurring in the same period as the launch." The finding is strong enough without overstating the precision of the timing correlation.

---

**2.4 LogRocket 191% branded growth — specific stat without source qualifier** [Medium]

Ch. 7 Boundary Conditions (revised): "producing 191% growth in branded keyword traffic across geographic expansions"

This is a specific percentage from the LogRocket deep dive, based on Ahrefs estimated data. Ahrefs traffic estimates are modeled, not measured. This stat is precise enough that a reader might expect it to come from an analytics platform. 

Recommended fix: Add a light qualifier consistent with how other specific stats are handled: "producing an estimated 191% growth in branded keyword traffic" or "(Ahrefs data)." This is consistent with the Appendix A disclosure about Ahrefs as the primary data source.

---

**2.5 Hyperproof position data and search volume — specific stats without qualifier** [Medium]

Ch. 7: "'risk management frameworks,' 56k monthly search volume, position 21 → position 8"

Both the search volume (56k) and the position movement (21→8) are from Ahrefs. The 56k monthly search volume is a modeled estimate. This is the most specific quantitative claim in the recovery archetypes chapter and the one most likely to be scrutinized.

Recommended fix: Add "(Ahrefs)" or "estimated" to the search volume figure: "56k estimated monthly searches (Ahrefs)" — or handle it the same way as the 191% LogRocket stat.

---

**2.6 "One of the most mature content programs in the cohort" for Aha! — evaluative claim presented as observation** [Low]

Ch. 1: "One of the most mature content programs in the cohort — extensive investment, genuine category authority, well-executed pages."
Ch. 11 research synthesis: "A mature, well-resourced content program with genuine category authority."

"Mature," "well-resourced," and "genuine category authority" are assessments, not measurements. They're probably accurate — the deep dive would support them — but they're stated as factual observations without grounding.

Recommended fix: Ground the claim briefly: "Aha! had one of the more developed content programs in the cohort — years of investment, high domain authority, and extensive topic coverage across product management." Or accept the evaluative framing as appropriate for a summary context and leave as is; the risk is low.

---

**2.7 Braze ~10% cannibalization — appears only in figure notes, not chapter text** [Low]

Ch. 6 Figure 6.1 visual note: "Braze (~10% cannibalization)"

The ~10% figure for Braze appears only in the figure notes, not in the chapter narrative. The chapter text says Braze "operated in [the under 30% zone]" but doesn't give the specific number. The figure notes are effectively a claim without a corresponding attribution in the text.

Recommended fix: Either mention the approximate figure in the chapter text ("Braze showed an estimated cannibalization rate in the low double digits, well within healthy range") or remove the specific ~10% from the figure notes in favor of a zone description ("Braze — healthy zone"). If the ~10% is confirmed from the deep dive data, keeping it in the figure notes is acceptable — but it should be consistent with the level of specificity elsewhere.

---

## 3. Internal Consistency

---

**3.1 "Directly contradicted" language in Ch. 2 research synthesis overstates for two of four assumptions** [Medium]

Ch. 2 research synthesis: "Four assumptions commonly used to justify B2B content investment decisions in 2025 were each directly contradicted by cohort evidence."

The language holds for Assumptions 2 and 3:
- Traffic growth = program health: clearly contradicted by LogRocket and ZoomInfo
- Concentrated bets drive growth: clearly contradicted by distributed growth pattern

For Assumptions 1 and 4, the data provides important nuance rather than flat contradiction:
- Assumption 1 (AI suppresses informational broadly): The data shows selective suppression, not zero suppression. The finding is that suppression is query-specific, not category-wide — which qualifies the assumption but doesn't reverse it entirely
- Assumption 4 (publishing more compounds): The data shows this fails when cannibalization is high, but the Braze and Navan cases show publishing *can* compound when done correctly. The assumption isn't wrong in all conditions

"Directly contradicted" is too strong for 1 and 4; "challenged" or "significantly qualified by" is more accurate.

Recommended fix: "Four assumptions commonly used to justify B2B content investment decisions in 2025 were each directly challenged by cohort evidence — and in two cases, directly reversed." Or simply: "challenged or contradicted" rather than "directly contradicted" across the board.

---

**3.2 Ch. 9 resistance finding names the same five companies in the same order in Ch. 2, Ch. 5, and Ch. 9 — but excludes Ramp in the Ch. 9 list** [Medium]

Ch. 2: "Five companies — Rippling, Navan, Harness, Vanta, and Ramp — independently showed definitional content growing throughout the AI Overview expansion window."
Ch. 5: "Rippling — HR and people operations / Navan and Ramp — finance and spend management / Harness — DevOps / Vanta — security and compliance" (five companies)
Ch. 9: "Rippling — HR and people operations / Navan and Ramp — finance and spend management / Harness — DevOps and CI/CD / Vanta — security and compliance" (five companies in same format)

These are consistent — all five chapters include the same five companies. Fine.

However, Ch. 11 Tier 1 durability section says the finding is "confirmed durable across HR (Rippling), Finance (Navan, Ramp), DevOps (Harness), Security (Vanta, Hyperproof), and multiple other categories." Adding Hyperproof here is new — Hyperproof wasn't in the five-company AIO resistance list in earlier chapters. If Hyperproof is included in Ch. 11's durability tier evidence, it should be explained: Hyperproof's recovery was driven by a definitional GRC page ranking breakthrough, which is a related but distinct finding from the five-company AIO resistance pattern. The expansion to include Hyperproof should note it's based on different (recovery) evidence.

Recommended fix: Either add a clarifying phrase in Ch. 11 ("and Hyperproof, whose recovery was anchored by definitional GRC content") or limit Ch. 11's Tier 1 evidence to the same five companies cited in earlier chapters. Adding Hyperproof without explanation creates a slight inconsistency in the evidential record.

---

**3.3 Aha! cannibalization rate stated as 286.6% in all chapters — consistent ✓**

Ch. 2: 286.6% (now with forward ref to Ch. 6)
Ch. 6: 286.6%
Ch. 11: 286.6%
All consistent. No issue.

---

**3.4 ZoomInfo 140-point divergence — consistent across all chapters ✓**

Ch. 1: 140-point divergence
Ch. 2: 140-point divergence (now with forward ref to Ch. 3)
Ch. 3: 140-point gap (154.7% traffic − 14.7% traffic value = 140 ✓)
All consistent. No issue.

---

**3.5 LogRocket cannibalization rate — consistent ✓**

Ch. 2: 75.6% (now with inline definition)
Ch. 6: 75.6%
Ch. 11: 75.6%
All consistent. No issue.

---

**3.6 Cohort counts — consistent ✓**

44 grew / 19 flat / 55 declined — consistent across all chapters that cite the split.
Math: 44/118 = 37.3% ≈ 37%; 19/118 = 16.1% ≈ 16%; 55/118 = 46.6% ≈ 47% — consistent with Ch. 1's "37% growing, 16% flat, 47% declining."
No issue.

---

**3.7 Gainsight ~65% branded claim — appropriately hedged and consistent ✓**

Ch. 3: "approximately 65%"
Ch. 11 doesn't re-use this specific figure.
The "approximately" qualifier is correct and appropriate.
No issue.

---

**3.8 Freshworks "Dew design system" December 2025 — consistent across all chapters ✓**

Ch. 4, Ch. 7, Ch. 8: All reference the same event, same date, same evidence.
No issue.

---

**3.9 AI citation engine list — consistent ✓**

Ch. 10: "ChatGPT, Copilot, Google AI Mode, Google AI Overviews, Google Gemini, and Perplexity"
Appendix A (updated in prior session): same six engines
No issue.

---

## 4. One Forward-Looking Note for Pass 3

The following is not an evidence issue but should be flagged for the Terminology Pass (Pass 3):

**Ch. 5 uses "query satisfiability" implicitly before Ch. 9 defines it formally.**

Ch. 5 contains this callout: "The relevant question is not 'is this informational content?' The relevant question is: can the user accomplish their goal from an AI Overview or chat response alone, without clicking through? If the answer is yes, the content is structurally at risk."

This is accurate and well-stated. But the concept described is *query satisfiability*, which isn't named in Ch. 5. Now that Ch. 1 introduces the term with a forward reference to Ch. 9, Ch. 5 is positioned between the first mention (Ch. 1) and the full definition (Ch. 9) — using the concept without the term. This is fine structurally, but Pass 3 should check whether the callout in Ch. 5 should name the term or continue to describe it without naming it (the latter may be preferable, since full formalization at Ch. 9 is the plan).

---

## Summary

**Must fix before publication (accuracy issues):**

1. Ch. 10: Add note that 13 of 15 deep-dive companies were tested; Hyperproof and LogRocket were added after the testing phase. [1.1]
2. Ch. 1 and Ch. 4: Change Aha! CTR collapse description from "pages moved from position 3 to position 1" to "pages held or improved rankings while traffic fell 80–99%." [1.2]
3. Ch. 3 and/or Ch. 9: Reconcile the Rippling tension — non-branded churn (Ch. 3) vs. definitional content growing through AIO expansion (Ch. 2, Ch. 9). Add one sentence explaining the coexistence. [1.3]

**Should fix for precision:**

4. Ch. 2, Ch. 5, Ch. 11: Soften "eight companies" or name all eight. The specific count is stated with more confidence than the text supports. [2.1]
5. Ch. 5: Soften "seven of the growing companies" or name the seven. [2.2]
6. Ch. 8: Change "precisely aligned" to "closely aligned" for the Freshworks timing claim. [2.3]
7. Ch. 7: Add "estimated" to LogRocket 191% branded growth stat. [2.4]
8. Ch. 7: Add "(Ahrefs)" or "estimated" to Hyperproof 56k search volume claim. [2.5]
9. Ch. 2: Soften "directly contradicted" to "challenged" or "challenged or directly reversed" for the research synthesis. [3.1]
10. Ch. 11: Clarify Hyperproof's inclusion in Tier 1 durability evidence — it's from recovery evidence, not the same AIO-resistance finding as the five-company list. [3.2]

**Light polish:**

11. Ch. 1: "One of the most mature content programs in the cohort" — add brief grounding for the evaluative claim. [2.6]
12. Ch. 6 figure notes: Reconcile Braze ~10% cannibalization with chapter text (either state in text or soften in notes). [2.7]
