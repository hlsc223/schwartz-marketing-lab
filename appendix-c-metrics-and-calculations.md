# Appendix C: Metrics & Calculations

*The Modern Organic Growth Playbook: How the best B2B brands build durable demand in 2026*

---

This appendix defines the formulas, inputs, and interpretation thresholds for every quantitative metric used in the report. Conceptual definitions appear in the Glossary; research methodology is described in Appendix A.

Metrics are grouped by function: **Traffic Composition** → **Portfolio Health** → **Position & Ranking** → **Classification**.

---

## Traffic Composition Metrics

These metrics decompose the headline traffic number to reveal what the composite obscures (Ch 3).

---

### 1. Branded vs. Non-Branded Split

**What it measures**
The share of a program's organic traffic — and organic traffic *growth* — attributable to navigational (brand) queries versus non-branded category queries. These two components have different drivers and different implications for content program health.

**Formula — share of total traffic**

```
Branded traffic % = Branded organic clicks / Total organic clicks × 100
```

**Formula — share of traffic growth**

```
Branded % of growth = (Branded clicks T2 − Branded clicks T1) / (Total clicks T2 − Total clicks T1) × 100
```

Where T1 = start of measurement period, T2 = end of measurement period.

**Data inputs**
Google Search Console (query-level click data with brand filter). Ahrefs and Semrush both provide branded/non-branded segmentation in their organic traffic exports.

**Thresholds**

< 40% — Growth is primarily content-driven — non-branded compounding
40–60% — Mixed signal — run both branded and non-branded trend separately
> 60% — Headline primarily reflects product momentum, not content program compounding

**Cohort example**
Gainsight: approximately 65% of apparent traffic growth during the study window was attributable to a single branded keyword. Headline showed a growing organic program; non-branded content program had limited compounding. Rippling showed the inverse: branded traffic grew with product adoption while the non-branded content program experienced concurrent churn.

**Note**
The metric is diagnostic, not evaluative — brand demand growth is a legitimate signal that requires a different response than content-driven growth.

---

### 2. Traffic Value vs. Raw Traffic Divergence

**What it measures**
The gap between the rate of change in raw organic traffic and the rate of change in estimated traffic value over the same period. When these move together, traffic composition is roughly stable. When they diverge, the composition is shifting — toward lower-value queries (traffic up, value flat or down) or retaining higher-value positions despite volume loss (traffic down, value holds).

**Formula**

```
Traffic value divergence (pp) = Raw traffic % change − Traffic value % change

Where:
Raw traffic % change = (Raw traffic T2 − Raw traffic T1) / Raw traffic T1 × 100
Traffic value % change = (Traffic value T2 − Traffic value T1) / Traffic value T1 × 100
```

Result is expressed in percentage points (pp). A positive divergence means raw traffic grew faster than value (composition shifted toward lower-value queries). A negative divergence means value held better than volume (authority retained despite traffic loss).

**Data inputs**
Ahrefs or Semrush domain overview (monthly traffic and traffic value series for the study window).

**Thresholds**

< 10 pp (either direction) — Composition roughly stable; headline is reasonably reliable
10–20 pp — Composition shifting; worth monitoring but not conclusive
> 20 pp — Significant composition shift; requires investigation before drawing conclusions from raw traffic headline

**Cohort example**
ZoomInfo: Raw traffic grew 154.7%; traffic value grew 14.7% over the same period — a 140-point divergence. The volume growth was real; the quality of what was driving it had changed substantially. GitHub showed the inverse pattern: raw traffic fell significantly while traffic value declined at roughly half the rate — authority retained in high-value positions while lower-value volume was lost.

---

## Portfolio Health Metrics

These metrics assess the internal composition and dynamics of a content portfolio over a defined period (Ch 5–6).

---

### 3. Gross Gain

**What it measures**
The total organic traffic gained across all pages in a portfolio that increased during a measurement period, summed before netting against losses. Gross gain is a component input, not a standalone diagnostic — it is meaningful only in relation to gross loss.

**Formula**

```
Gross gain = Σ (Traffic T2 − Traffic T1) for all pages where Traffic T2 > Traffic T1
```

**Data inputs**
Ahrefs Top Pages export at T1 and T2 (merged on URL). Minimum 3-month windows at each end to avoid single-month noise.

---

### 4. Gross Loss

**What it measures**
The total organic traffic lost across all pages in a portfolio that declined during the same period, expressed as a positive absolute value. The numerator in the cannibalization rate formula.

**Formula**

```
Gross loss = Σ |Traffic T2 − Traffic T1| for all pages where Traffic T2 < Traffic T1
```

**Data inputs**
Same as gross gain — page-level organic traffic for T1 and T2, filtered to pages with negative change.

---

### 5. Cannibalization Rate

**What it measures**
The degree to which a content portfolio's gains are offset by losses elsewhere — the ratio of what the program is losing to what it is gaining. A high cannibalization rate means the program is running a treadmill: new production replaces existing losses rather than building net-new organic traffic.

**Formula**

```
Cannibalization rate = Gross loss / Gross gain × 100
```

**Data inputs**
Gross gain and gross loss (see above). A 6–12 month window is recommended — shorter windows may mask longer-term treadmill patterns.

**Thresholds**

< 30% — Healthy compounding — gains substantially exceed losses
30–60% — Caution zone — losses are meaningful but growth is still net positive
> 60% — Treadmill — production is primarily replacing losses, not building new traffic
> 100% — Net-negative investment — gross losses exceed gross gains; the program is shrinking

**Cohort examples**
LogRocket: 75.6% — for every unit of traffic gained, 0.76 units lost elsewhere. Aha!: 286.6% — for every unit gained, 2.86 units lost. Both programs had been producing at significant volume. The production output was feeding replacement, not compounding.

---

### 6. Net Gain (Net Traffic Change)

**What it measures**
The headline traffic change: the difference between gross gain and gross loss. This is the number most commonly reported as "organic traffic growth." Meaningful only when interpreted alongside gross gain, gross loss, and the cannibalization rate that connects them.

**Formula**

```
Net gain = Gross gain − Gross loss
```

A positive net gain with a high cannibalization rate indicates replacement-driven growth, not compounding; a negative net gain with a low cannibalization rate may indicate deprioritization rather than structural decline.

---

### 7. Single-Page Concentration

**What it measures**
The share of a portfolio's gross gains attributable to a single page over a defined period. The primary measure of concentration risk. When one page accounts for a disproportionate share of gross gains, any disruption to that page — algorithm update, AI Overview interception, competitive displacement — becomes a program-level event rather than an isolated page-level loss.

**Formula**

```
Single-page concentration = Largest positive page gain / Gross gain × 100
```

Gross gain is used as the denominator to avoid distortion when net gain is small or negative.

**Data inputs**
Page-level traffic at T1 and T2 (same as gross gain calculation above).

**Threshold**

< 20% — Distributed — no single page is load-bearing for the program's growth
20–35% — Elevated — monitor for dependency
> 35% — High concentration risk — a single-page event can reverse program trajectory

**Cohort context**
In the growing companies with the cleanest organic growth signals during the study window, no single page exceeded approximately 20% of gross gains. Braze, Navan, Harness, Vanta, and Ramp all showed broad distributed growth across dozens of pages. Programs chasing hero assets showed the opposite risk profile.

---

## Position & Ranking Metrics

These metrics assess the distribution and trend of a portfolio's organic rankings across position bands (Ch 5).

---

### 8. Position Distribution

**What it measures**
The count of ranking keywords (or pages) within each position band at a given point in time. Tracking how this distribution shifts over time is the primary observable for position consolidation.

**Calculation**

```
Position band count = Number of ranking keywords in positions [1–10 | 11–20 | 21–50 | 51+]
```

Run for two time points (T1 and T2) and compare band totals directionally.

**Data inputs**
Ahrefs or Semrush (keyword count by position band at two time points).

---

### 9. Position Consolidation Signal

**What it measures**
Whether a portfolio's ranking distribution is shifting toward top positions (1–10) while mid-tier and long-tail positions (21–50, 51+) contract. Position consolidation is a leading health signal — it indicates the portfolio is concentrating its authority at the positions with the highest click-through value.

**Formula**

```
Consolidation = (Positions 1–10 T2 − Positions 1–10 T1) > 0
             AND (Positions 21–50 T2 − Positions 21–50 T1) < 0
```

This is a directional pattern check, not a pass/fail ratio. Magnitude matters: a program adding 5 top-10 positions while losing 200 mid-tier positions is consolidating differently than one adding 50 top-10 positions while losing 30 mid-tier positions. Interpret direction first, then scale.

**Interpretation**

Top-10 grows, 21–50+ contracts — Positive consolidation — program strengthening where it matters
Top-10 flat, 21–50+ contracts — Long-tail erosion without top-position gains — monitor for further loss
Top-10 contracts, 21–50+ flat/grows — Weakening — authority signals degrading at the positions that matter most
All bands contract simultaneously — Broad-based decline — check for algorithm update alignment or architectural damage

**Cohort example**
Hyperproof showed position consolidation as a leading recovery signal: top GRC positions (1–10) held and subsequently strengthened while long-tail compliance content declined. The structural floor was visible in the position distribution data before the headline traffic number confirmed recovery.

---

## Classification Metrics

These metrics classify companies and study windows for cohort-level analysis (Appendix A, Appendix B).

---

### 10. Traffic Trajectory Classification

**What it measures**
The primary classification for each company in the cohort: whether organic traffic grew, remained flat, or declined over the 18-month study window.

**Formula**

```
% change = (Traffic at window end − Traffic at window start) / Traffic at window start × 100
```

**Primary classification bands**

Grew — Net positive over the study window (directional threshold — sub-classifications apply)
Flat — Within a narrow band around zero (sub-classifications apply)
Declined — Net negative over the study window (sub-classifications apply)

Exact thresholds and sub-classifications (magnitude bands, volatility flags, recovery patterns) are reported in Appendix B.

**Note on window definition**
Traffic at window start and window end are measured as 3-month averages (not single-month snapshots) to smooth seasonal variation. Specific window dates are defined in Appendix A.

---

### 11. Study Window Trough

**What it measures**
The lowest monthly organic traffic figure recorded by a company during the 18-month study window. Used to anchor recovery assessments — recovery is measured from the trough, not from the window start.

**Calculation**

```
Study window trough = Min(monthly traffic) across all months in the study window
```

**Data inputs**
Ahrefs Site Explorer (monthly traffic export for the study window). The trough is the minimum monthly value.

**Why this matters**
A company that experienced a significant early decline and then recovered may show a negative net change over the full window while having experienced a substantial recovery from its lowest point. Measuring only start-to-end obscures the recovery. The trough is the anchor for recovery assessment; the window start-to-end is the cohort classification anchor.

---

### 12. Lift from Trough %

**What it measures**
The percentage increase in organic traffic from a company's study window trough to its traffic level at the end of the study window. Used to assess recovery magnitude for companies that declined and subsequently recovered. Also referred to as **Peak Lift %** in the research workbook — the two names refer to the same calculation.

**Formula**

```
Peak lift % = (Traffic at window end − Study window trough) / Study window trough × 100
```

**Interpretation**
Most useful for companies that declined and then recovered. For steady growers, Lift from Trough approximates the overall growth rate; for recovery cases, it isolates recovery magnitude independent of the window start.

**Cohort example**
Hyperproof showed a peak lift that exceeded the magnitude of its initial decline — recovering not just to its pre-decline baseline but to a new all-time high within the study window. This is what the "top-position floor" recovery archetype looks like in the data: the structural floor held, and when external pressure receded, the recovery exceeded the loss.

---

## Data Requirements Summary

**Traffic Composition**
- Branded/non-branded split: Google Search Console (query-level data with brand filter)
- Traffic value divergence: Ahrefs or Semrush (monthly traffic + traffic value)

**Portfolio Health**
- Gross gain / gross loss / cannibalization rate: Ahrefs Top Pages export at two time points
- Single-page concentration: same as above

**Position & Ranking**
- Position distribution / consolidation: Ahrefs or Semrush (keyword counts by position band at two time points)

**Classification**
- Traffic trajectory / study window trough / lift from trough: Ahrefs Site Explorer (monthly traffic export)

**Minimum viable data pull for a single-program diagnostic:**
- Ahrefs domain export: monthly traffic + traffic value, 18 months
- Ahrefs Top Pages export: two snapshots 12 months apart (page-level traffic)
- Google Search Console: 12 months of query-level data with brand filter

This covers all portfolio health and traffic composition metrics. Position distribution requires a separate position-band export from Ahrefs or Semrush.

---

*The Glossary defines each metric conceptually; this appendix defines its calculation. Appendix A references these metrics in the research methodology.*
