# Organic Content Recovery Diagnostic SOP

**Version 1.0 (Frozen)**

**Objective:** Determine whether a page should be rewritten, and if so, why.

**The output of this process is a decision — not a brief.** Sometimes the correct output is Hold. That is a complete, successful diagnosis.

---

## Required Data

Pull before starting. Do not begin Phase 1 until all inputs are ready.

Use the same comparison window for every page (e.g., last 3 months vs. same period prior year) to ensure diagnoses remain comparable across pages and over time.

**Google Search Console**
- Page Performance report (YoY comparison, page-level)
- Query report (YoY comparison, same page filtered)

**Ahrefs**
- Organic Keywords report for the page

**SERP**
- Current SERP for the primary target query (manual review)

**Inputs checklist:**
- [ ] GSC page report
- [ ] GSC query report
- [ ] Ahrefs keyword report
- [ ] Current SERP reviewed

---

## Phase 1 — Diagnose (20–25 min)

### Step 1 — Traffic Pattern (5 min)

Document from GSC (current period vs. prior year, same period):

| Metric | Current | Prior | Change |
|---|---|---|---|
| Clicks | | | |
| Impressions | | | |
| Avg. position | | | |

**Decision Gate**

> Positions stable **and** impressions stable or increasing?
> → Likely primary mechanism: AIO / CTR suppression.
> → Verify by reviewing the current SERP before finalizing the recommendation.
> → If confirmed, skip to Phase 2.

If impressions are also declining, continue full diagnosis regardless of position stability. Declining impressions mean Google is showing the page less often — that is not classic AIO suppression and may indicate fewer ranking keywords, intent drift, deindexation, crawl issues, or cluster erosion.

---

### Step 2 — Mechanism (5–7 min)

Identify the dominant mechanism. Choose one primary, one secondary (if applicable). Do not list every mechanism that appears — most declines have a mix of signals. Identify which one explains the most variance.

| Field | Notes |
|---|---|
| Primary mechanism | |
| Secondary mechanism | |
| Supporting evidence | |

**Mechanism reference:**

- **Ranking decline** — The page lost rankings while the underlying search intent remained substantially the same. Content improvement has a direct recovery path.
- **AIO suppression** — Position stable or improving, impressions stable, clicks collapsed. Rewrite alone unlikely to recover clicks.
- **Intent shift** — The dominant content type or user goal in the SERP has changed. Page format may need restructuring more than content improvement.
- **Competition** — Comparable competitors now satisfy the same intent better despite no clear intent shift or algorithm signal.

---

### Step 3 — Intent Gap (8 min)

**First:** Open the top 3 pages currently ranking for the primary target query. Read them.

**Then document:**

**Current search intent**
What job are these pages helping the reader accomplish? (Frame it as a job, not a category — "diagnose whether the refrigerator needs repair" not "informational intent.")

**Why Google prefers the current winners**
What are the top-ranking pages doing that [client]'s page does not?

**Why [client]'s page falls short**
Three evidence-based bullets. Specific and falsifiable — not "the content isn't comprehensive" but "the top-ranking pages help users diagnose whether the noise indicates mechanical failure before recommending solutions; [client]'s page recommends products immediately without establishing whether repair or mitigation is needed."

> **Quality gate:** If you cannot write three specific, evidence-based bullets, diagnosis is not complete. Go back and gather better evidence.

**Decline hypothesis**
One sentence synthesizing mechanism, intent gap, and competitive context. This is your explanation for why Google stopped preferring the page.

*Example: "Google increasingly rewards diagnostic content while [client]'s page recommends products without first helping users determine whether the problem requires repair or mitigation."*

> **Quality gate for Phase 2:** If you cannot write this sentence clearly, Phase 1 is not complete.

---

### Step 4 — Investment Decision (3–5 min)

| Question | Assessment |
|---|---|
| **Recoverable?** | Yes / Probably / Unlikely — Could [client] realistically outrank today's winners with a better page? |
| **Worth recovering?** | Yes / Partially / No — Would this traffic attract the right visitors and create business value? |
| **Business alignment** | Excellent / Good / Moderate / Poor |

A page can be recoverable but still not be worth the investment. Both questions must be answered before moving to Phase 2.

---

## Phase 2 — Recommendation

Based on Phase 1, choose one:

| Recommendation | When to use |
|---|---|
| **Rewrite** | Ranking decline is primary mechanism, content doesn't satisfy current intent, page is recoverable and worth recovering |
| **Refresh** | Rankings partially held, content is directionally right but thin or outdated |
| **AEO optimization** | AIO suppression is primary mechanism, position strong, content needs restructuring for AI extraction |
| **Structural fix** | Intent shift requires format change more than content change (e.g., page needs to become a hub, or is cannibalizing another URL) |
| **Hybrid (Rewrite + AEO)** | Ranking declined AND AIO is present — page needs both better content and AI extraction optimization |
| **Hold / Monitor** | AIO suppression with strong position and no realistic mitigation, or page is not worth recovering |

Provide 2–3 sentences of rationale connecting Phase 1 findings to the recommendation.

**Success Metric**

If this intervention succeeds, what should improve? Check all that apply:

- [ ] Rankings
- [ ] Impressions
- [ ] CTR
- [ ] Traffic
- [ ] AI citations
- [ ] Conversions
- [ ] Other: ___

This defines how you'll know the diagnosis was correct. Different interventions have different expected outcomes — a rewrite should move rankings and traffic; an AEO optimization should move AI citations and CTR. Mismatched expectations are the most common reason good interventions look like failures.

---

## Phase 3 — Rewrite Strategy

**Only complete this phase if Phase 2 recommendation is Rewrite, Refresh, or Hybrid.**

Work in this order — structure before content:

1. **Positioning** — What should this page be about, and for whom? How does it differ from what exists?
2. **Structure** — What sections need to be added, removed, or reordered to match current search intent?
3. **Missing topics / entities** — What do top-ranking competitors cover that [client] does not?
4. **Product / service integration** — Where and how do [client]'s offerings fit naturally (not forced)?
5. **Internal links** — What pages should this link to and receive links from?
6. **AEO enhancements** — Direct answers, FAQ, header structure optimized for AI extraction
7. **Metadata** — Updated title and meta description based on primary keyword and current intent

Phase 3 outputs feed directly into the writer brief. Do not write the brief until Phase 3 is complete.

---

## Diagnosis Summary

Save for every page, including Hold decisions. These become the baseline for future comparisons, the evidence you present when explaining prioritization decisions, and — across 20+ pages — the data source for site-level pattern recognition.

```
URL:
Client:
Date diagnosed:
Comparison window used:

TRAFFIC PATTERN
  Clicks (current / prior):
  Impressions (current / prior):
  Position (current / prior):

MECHANISM
  Primary:
  Secondary:
  Supporting evidence:

INTENT GAP
  Current search intent (the job):
  Why Google prefers current winners:
  Why [client]'s page falls short:
    1.
    2.
    3.
  Decline hypothesis (1 sentence):

INVESTMENT DECISION
  Recoverable?
  Worth recovering?
  Business alignment:

RECOMMENDATION:
  Rationale (2 sentences):
  Success metric(s):
```

---

*Version 1.0 — Frozen July 2026*
*Do not modify during first 20–30 page evaluations. Log Version 1.1 candidates separately.*
