# Chapter 4: Which Mechanism Hit You

---

Most content teams respond to traffic decline the same way: publish more content, build more links, refresh existing pages.

The problem is that those are the right response to only one of the five mechanisms identified in this study.

If you misdiagnose the mechanism, even good work becomes wasted work.

---

## Starting with trajectory

*[Figure 4.1 — Five trajectory types gallery. See visual notes at end of chapter.]*

Across the 118 companies in this study, traffic declined in recognizable patterns. Five distinct trajectory types appeared consistently: Continuous Acceleration, Steady Growth, Growth then Pullback, Decline then Recovery, and Steady Decline. The trajectory tells you the shape of what happened. It doesn't tell you why. Two companies with identical "Decline then Recovery" curves may have recovered for entirely different reasons: one because an algorithm update reversed, one because brand demand expanded into new geographies. Position data, timing, and search volume reveal the mechanism, not the trajectory shape.

---

## Start here

Map your most observable symptom to the most likely mechanism before reading the full descriptions.

| If you see… | Suspect… |
|---|---|
| Rankings stable, traffic collapses 80–99% | 🤖 AI Overview interception |
| Sudden collapse across multiple position buckets, aligned to an update | ⚡ Algorithm update damage |
| Traffic drop begins the same week as a redesign or migration | 🏗️ Architectural damage |
| Search volume itself declining on affected queries | 📉 AI tool demand substitution |
| Slow position erosion over months, query by query | 🏁 Competitive displacement |

> **Publishing more content is the right response to competitive displacement. It is not the right response to architectural damage, AI Overview interception, or upstream demand substitution. The treatment depends entirely on the mechanism — and most programs skip the diagnosis.**

---

## The five mechanisms

---

### ⚡ Mechanism 1 — Algorithm Update Damage

**Signature** Sudden, simultaneous collapse across positions 11-20, 21-50, and 51+, within the same short window, aligned to a known algorithm update date.

**Look for**
- Multi-bucket collapse in days, not months
- Timing matched to a published algorithm update
- Top positions (1-10) holding or strengthening while mid-tier collapses

**Case** CloudBees and Ramp: August 2025 spam update

**Don't confuse with** Competitive displacement, which erodes positions gradually over months, one page or query at a time. If the week everything changed aligns to a known update, algorithm damage is more likely.

**Primary response** Identify what quality signal the update targeted before investing in recovery. Algorithm penalties are often reversible, but refreshing content without understanding the specific signal change won't recover rankings.

---

### 🤖 Mechanism 2 — AI Overview Interception

**Signature** Position holds or improves while traffic collapses 80–99%.

**Look for**
- Stable or improving rankings on the same keywords where traffic fell
- Affected queries are satisfiable in the SERP: role lists, templates, brief definitions, step-by-step processes
- CTR collapsed at the same position

**Case** Aha! showed 20+ queries where pages held or improved rankings while losing 80–99% of traffic. Chapter 9 covers this in detail.

**Don't confuse with** Competitive displacement. Under competitive displacement, position and traffic fall together. Under AI Overview interception, position holds or improves while traffic disappears. If position is also declining, suspect competitive displacement instead.

**Primary response** Don't refresh. Re-evaluate the query. Audit whether the content's value requires a click or can be delivered in an Overview. Content that requires engagement to be useful is structurally protected; content that can be extracted and summarized is not.

---

### 🏗️ Mechanism 3 — Architectural Damage

**Signature** Sharp, sudden decline aligned precisely to a dateable internal event: a redesign, platform migration, CMS change, or content overhaul.

**Look for**
- Timing is unusually clean: decline begins within the same week or month as a known site change
- Backlink equity preserved (domain authority intact, rankings damaged)
- No corresponding algorithm update in the same window

**Case** Freshworks: December 2025 "Dew" design system launch. Referring domains retained; rankings not.

**Don't confuse with** Algorithm update damage, which is also sudden but correlates to external update dates, not internal events. If a specific site change coincides with the timing of decline, and no major algorithm update occurred in the same window, architectural damage is the most likely mechanism.

**Primary response** Fix the architecture before publishing anything new. The most common culprit: on-page content changes that altered targeting signals even when URLs were preserved and redirects were correctly configured.

---

### 📉 Mechanism 4 — AI Tool Demand Substitution

**Signature** Search volume on the affected queries declined. Not just CTR or ranking: the queries themselves are happening less frequently.

**Look for**
- Monthly search volume falling on affected keywords over the past 12-18 months
- Affected content types: templates, how-to content for routine tasks, developer tutorials for mature technologies
- Decline preceded or accompanied by AI tool adoption in the same category

**Case** Aha! lost roughly 60% of traffic across 154 pages of template content. LogRocket's developer tutorial traffic declined alongside the maturation of AI coding assistants.

**Don't confuse with** AI Overview interception, which operates at the SERP level: the search still occurs, but the click doesn't. Demand substitution happens before the search: the user generates the artifact or answer directly without searching. If volume data shows declining search frequency, the mechanism is upstream of the SERP.

**Primary response** Stop investing in the affected content type for SEO purposes. Demand that has migrated to AI generation doesn't return through content refresh or link building. Redirect investment toward query types where demand is structurally durable.

---

### 🏁 Mechanism 5 — Competitive Displacement

**Signature** Gradual, sustained position erosion over months across specific queries, as competitors outrank you on individual pages.

**Look for**
- Decline is measured in months, not weeks
- Position and traffic fall together
- You can identify the specific page that overtook yours and observe when it rose as yours fell

**Case** Unlike the other four mechanisms, competitive displacement rarely produces a distinctive data signature. You identify it by elimination, after the more specific mechanisms don't fit. The decision tree saves it for last for exactly that reason.

**Don't confuse with** Algorithm update damage or AIO interception. Both can produce traffic loss without obvious ranking shifts in simplified dashboards.

**Primary response** Publish better content or earn more authoritative links on the affected queries. Competitive displacement is the one mechanism where "produce more content" is actually the correct diagnostic conclusion.

---

## Running the diagnosis

The decision process works in five questions. Each answer eliminates mechanisms rather than just pointing to one.

*[Figure 4.2 — Diagnostic decision tree. See visual notes at end of chapter.]*

**How to use the decision tree:**

A "sudden" decline means days to weeks: a visible cliff in the data, not a gradual slope. If the decline is gradual, go directly to competitive displacement and confirm with position data.

For sudden declines, the first split is internal versus external event. An internal event is something your team did: a redesign, migration, CMS change, major content overhaul. An external event is a known algorithm update.

If the timing aligns to an internal event with no corresponding algorithm update, architectural damage is the most likely explanation — check backlink data as a control.

If the timing aligns to an algorithm update, look at your position data by bucket. Simultaneous collapse across positions 11-20, 21-50, and 51+ in a short window is the algorithm damage signature, not competitive displacement.

If the decline is sudden but doesn't align cleanly to either type of event, check whether position and traffic are diverging. Position stable or improving while traffic collapses means AI Overview interception. Look at the query types to assess satisfiability.

Finally, regardless of mechanism: check whether search volume on your affected queries has declined over the past 12-18 months. If yes, demand substitution is operating upstream of whatever else you've identified.

---

> **Common misdiagnoses**
>
> ❌ Refreshing pages that lost demand upstream: the problem precedes the SERP
>
> ❌ Building backlinks after a redesign broke targeting signals: the mechanism is internal
>
> ❌ Restoring redirects after a redesign without checking whether on-page targeting signals changed: backlink equity doesn't protect rankings when content signals are broken
>
> ❌ Publishing more templates after search volume has declined: the audience moved, not the rankings
>
> ❌ Assuming every gradual decline is competitive displacement: confirm with position data first

---

## Boundary conditions

**Compound mechanisms (GitHub):** GitHub's traffic decline showed patterns consistent with multiple simultaneous mechanisms (AI Overview interception, demand substitution from AI coding assistants, and competitive displacement), without enough isolable evidence to cleanly attribute to any single cause. Clean attribution requires the kind of direct evidence visible in cases like Freshworks (event-timing aligned) or Aha! (same-position CTR collapse). When compound mechanisms are plausible, prioritize by impact: identify which mechanism is most dominant on the highest-value traffic and address that one first.

**Double mechanisms (Aha!):** Aha! showed evidence of both AIO interception and demand substitution simultaneously: template content showed same-position CTR collapse on some queries and declining search volume on others. These mechanisms aren't mutually exclusive; they require separate treatments for each affected content type.

> **Research synthesis**
>
> *Five mechanisms account for the majority of B2B organic traffic declines in this study: algorithm update damage, AI Overview interception, architectural damage, demand substitution, and competitive displacement. Each produces a different signature in position and volume data. The signature is identifiable before investing in recovery. The mechanism determines the treatment.*

---

## What one sentence should you remember from this chapter?

Traffic data tells you what happened. Position data, timing, and volume data tell you why. Identifying the mechanism before spending anything on recovery is the difference between a fix and a cost.

---

## Before you move on

Before committing to any recovery investment, spend 2–3 hours running the diagnostic sequence.

**Step 1:** Use the symptom table at the top of this chapter to identify the most plausible mechanism before going deeper.

**Step 2:** Pull position data for your affected pages across the decline window. Note when the decline began, cross-reference against known algorithm update dates and any internal site changes in the same period, and check keyword volume trends on affected queries. Run the **Figure 4.2 decision tree** to test your working hypothesis against the evidence.

**Step 3:** Once you've identified the most likely mechanism, find that mechanism's section in this chapter and read the primary response before doing anything else.

The wrong treatment applied with high confidence is the most expensive outcome.

---

*Once the mechanism is identified, the next question is what the opposite pattern looks like in practice. Chapter 5 shifts from diagnosing failure to examining the structural traits of the programs that kept growing through the same environment — and why that pattern looks nothing like most people expect.*

---

## Visual notes

**[Figure 4.1 — Five trajectory types gallery]**
*Position: Opening of the chapter, after the "Starting with trajectory" paragraph.*
*Data needed: Five schematic traffic curve shapes, one per trajectory type. Each a simple line chart over an 18-month window. Labels: (1) Continuous Acceleration — steady upward slope; (2) Steady Growth — gradual upward slope with minor variance; (3) Growth then Pullback — rises then partially reverses; (4) Decline then Recovery — falls then rises, ending near or above starting point; (5) Steady Decline — consistent downward slope. Arrange as a 5-panel row. Caption: "The same trajectory can result from different mechanisms — the shape tells you what happened, not why."*

**[Figure 4.2 — Diagnostic decision tree]**
*Position: In "Running the diagnosis" section, between the intro sentence and the "Reading the tree" interpretation.*
*Data needed: A branching flowchart. Start: "Traffic has declined." → Branch 1: "Sudden or gradual?" → Gradual: "🏁 Competitive displacement — confirm with position data." → Sudden continues. → Branch 2: "Aligns to internal site event?" → Yes: "🏗️ Architectural damage — check backlink equity as control." → No continues. → Branch 3: "Aligns to known algorithm update?" → Yes: "⚡ Algorithm update damage — confirm with position bucket collapse." → No continues. → Branch 4: "Position stable/improving while traffic fell?" → Yes: "🤖 AI Overview interception — audit query satisfiability." → No continues. → Branch 5: "Search volume declining on affected queries?" → Yes: "📉 Demand substitution — upstream of SERP." → No: "🏁 Competitive displacement — confirm with position data." Each terminal node includes mechanism icon and one-line confirmation test. This is the chapter's primary shareable asset — design for maximum scannability.*

**[Mechanism cards — PDF design note]**
*The five mechanism sections should be rendered as distinct cards in the PDF — bordered boxes, slight background tint, icon + mechanism name as a header. The "Don't confuse with" line within each card should have a subtle gray band treatment to visually differentiate it from the other fields. The goal: a reader can flip to this chapter, find the mechanism that matches their data in under 60 seconds, and immediately know what to investigate next.*

**[Common misdiagnoses box — PDF design note]**
*Style as a warning-style callout box — distinct from the Research Synthesis (which is neutral) and the Insight Callout (which is conceptual). A light amber or red-tinted border would work. The ❌ symbols should be visually prominent.*
