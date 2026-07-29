# The Modern Organic Growth Playbook — Style Guide

## Recurring Rhetorical Elements

The report operates in three distinct modes simultaneously: teaching, persuading, and coaching. Each mode has a corresponding visual element. Readers should be able to identify which mode they're in at a glance.

---

### 1. Insight Callout

**Purpose:** Introduce a memorable mental model or reframe. The moment where the reader thinks "I've never thought about it that way." These are quotable ideas, not summaries or conclusions.

**Frequency:** 1 per chapter (maximum). Reserve a second for chapters with two genuinely exceptional insights (Ch 9, Ch 11). If everything is highlighted, nothing is.

**Markdown treatment:**
```
> **The relevant question is not "is this informational content?" The relevant question is: can the user accomplish their goal from an AI Overview or chat response alone, without clicking through? If the answer is yes, the content is structurally at risk — regardless of how well-executed it is.**
```

**PDF design intent:** Large quotation style. Tinted background. Vertical accent bar on the left. Generous whitespace above and below. The element readers stop on when flipping through.

---

### 2. Research Synthesis

**Purpose:** Lock in what the evidence has just established before moving on. Not a quotable insight — an evidence checkpoint. The reader's mental cue: "Okay, I understand what the data means. We can proceed."

**Frequency:** 2–4 per chapter, following major findings. One per major evidentiary section.

**Markdown treatment:**
```
> **Research synthesis**
> 
> *This pattern appeared across four categories — DevOps, finance, travel, and security — which makes it a cohort finding rather than an execution anomaly.*
```

**PDF design intent:** Subtle shaded box. Small "Research synthesis" label in a lighter weight. No quotation styling. Slightly smaller body text. Understated — clarifying, not exciting.

---

### 3. Action Box

**Purpose:** Give the reader something concrete to apply. Completely different job from the above two elements. This is the coaching mode.

**Frequency:** One per chapter, near the end, after the argument has been established.

**Markdown treatment:**
```
## Before you move on

[Specific action with a concrete threshold or time commitment]
```

**PDF design intent:** Workbook-style treatment. Possibly a bordered box, checklist aesthetic, or distinct background color. Should feel like a tool, not a conclusion.

---

## Frequency Summary (per chapter)

| Element | Frequency | Cognitive job |
|---|---|---|
| Insight Callout | 1 (2 max for high-insight chapters) | "This changes how I think" |
| Research Synthesis | 2–4 | "This is what the evidence supports" |
| Action Box | 1 | "This is what I should do" |

---

## Other Formatting Notes

**Section subheads:** Use `###` (H3) for subsections within a major chapter section. These are navigational, not rhetorical.

**Proof blocks:** When listing multiple companies or data points as evidence, use a compact bulleted list rather than prose enumeration. Keeps evidence scannable without making the chapter feel like a blog post.

**"What one sentence should you remember?"** — Explicit section at the end of every chapter before the action box. Keeps the core claim front of mind for skimmers. Do not dissolve this into prose.

**Visual notes:** End each chapter with a clearly labeled visual notes section describing what data needs to go into each figure. Visuals are flagged but not created during the writing phase.

---

## Things to Avoid

- Overusing insight callouts (they lose their weight)
- Using the same markdown blockquote `>` for both insight callouts and research synthesis (differentiate with the "Research synthesis" label)
- Making action boxes too abstract — each should include a specific threshold, time commitment, or decision test grounded in the cohort data
- Introducing new rhetorical devices mid-report without documenting them here
