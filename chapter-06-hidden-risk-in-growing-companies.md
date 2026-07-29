# Chapter 6: Hidden Risk in Growing Companies

---

Everyone measures net organic traffic growth. Almost nobody measures what they had to destroy to achieve it.

This is a reasonable omission when programs are small. A content program with fifty pages produces visible individual page performance: you can watch each page's trajectory directly. But as programs scale into hundreds or thousands of pages, the headline number becomes an abstraction. It tells you the net result of thousands of individual page movements happening simultaneously, some gaining and some losing, compressed into a single positive or negative number.

That compression hides things. A program that grew 30% in net traffic last year may have generated 200% gross gains while sustaining 170% gross losses: a very different picture from a program that grew 30% with 35% gross gains and 5% gross losses. Same headline. Fundamentally different health.

Three types of hidden risk appeared consistently in growing companies across this study. Each is invisible in the headline number. Each changes what the growth means.

---

## Net growth hides gross movement

Traffic at the portfolio level is the result of two simultaneous processes: pages gaining traffic and pages losing traffic. Most reporting aggregates these into a net. The net obscures both.

Four numbers matter:

**Gross gain:** the sum of all traffic increases across every page that improved. The total volume your content program created.

**Gross loss:** the sum of all traffic decreases across every page that declined. The total volume your content program destroyed.

**Net gain:** gross gain minus gross loss. The headline number everyone reports.

**Cannibalization rate:** gross loss divided by gross gain, expressed as a percentage. The proportion of what you built that was simultaneously destroyed.

A cannibalization rate of 10% means: for every unit of traffic your program gained, it lost 0.10 elsewhere. A rate of 75% means it lost 0.75. A rate of 286% means it lost 2.86. The program destroyed nearly three times as much traffic as it created, and the only reason the headline showed a net positive is that the gross gains were large enough to still come out ahead.

> **Net growth tells you the score. Cannibalization rate tells you whether you're winning or just running faster to stay even.**

---

### The treadmill

The cannibalization rate matters not just as a current metric but as a compounding problem. A program with high cannibalization has to generate substantially more gross gain than it wants to show as net gain. As the portfolio grows larger, the cannibalized base grows larger too.

At LogRocket's observed cannibalization rate of 75.6%, the program had to create roughly 3 units of gross traffic for every unit of net gain, because the portfolio simultaneously lost 2 of those 3 elsewhere. At Aha!'s 286.6% rate, every unit of traffic created came with 2.86 units lost elsewhere. The program was net negative and accelerating in the wrong direction.

This is the treadmill. New content wins must replace old losses. Investment goes up. Net gains stay flat. The program increasingly spends its effort maintaining existing traffic rather than building new. And the faster you run, the harder it gets, because the portfolio producing the losses keeps growing too.

**Cannibalization is an outcome, not a mechanism.** High cannibalization has multiple underlying causes: internal keyword overlap, algorithm updates that demote some content while stronger content holds, query intent shifts that leave existing pages misaligned, natural content decay, and AI Overview interception that redirects traffic from older pages to SERP responses. The correct response is to identify which mechanism is operating (using the diagnostic framework from Chapter 4) and address that directly. Cannibalization rate tells you the severity of the problem. The mechanism tells you what to fix.

*[Figure 6.1 — Cannibalization rate waterfall chart. See visual notes at end of chapter.]*

> **Research synthesis**
>
> *LogRocket's 75.6% cannibalization rate and Aha!'s 286.6% rate come from the same Top Pages data any program has access to. Both companies showed positive net traffic: growth, by the headline measure. The cannibalization rate revealed the cost of that growth: a program producing more gross losses than it could sustain without accelerating investment.*

---

### The thresholds

The cohort data produced four observable cannibalization rate zones. These are working thresholds derived from the patterns observed in this study's cohort, not universal breakpoints that apply identically in every program or category:

**Healthy: under 30%.** The program is genuinely compounding. Gross gains substantially exceed gross losses. Investment in new content produces durable net growth rather than replacement traffic. Braze operated in this zone during the study window: low cannibalization alongside broad, distributed net gains. Growth was what it appeared to be.

**Watch: 30–60%.** The program is working, but losses offset a meaningful share of gains. Worth monitoring but not alarming. A rate in this zone that is trending upward over time is more concerning than a stable rate in this zone.

**Treadmill: 60–100%.** The program is spending significantly more effort to achieve net gains than the headline suggests. More than half of every gross gain disappears elsewhere. At 75–80%, producing net growth takes approximately four times the apparent effort. Investment in content volume at this rate doesn't improve the number. It maintains it.

**Net negative: above 100%.** The program is destroying more traffic than it's creating. The headline number may still show positive net gain in a given period if gross gains are large enough, but the fundamental economics are inverted: every piece of content added makes the problem worse, not better. Aha!'s 286.6% rate falls in this zone.

---

## Position collapse: the hidden risk inside headline growth

The second type of hidden risk doesn't show up in page-level cannibalization at all: it shows up in position distribution.

Ramp grew substantially in headline traffic during the study window. It was classified as a growing company, and by the headline metric, it was. But when you examine the position data in detail, a different picture appears: Ramp simultaneously absorbed a severe collapse in positions 21-50 and 51+ aligned to the August 2025 spam update. The long-tail position bucket contracted significantly.

The top-position gains were real. The headline growth was real. But the program was losing something that doesn't appear in traffic: the broad position base that serves as the foundation for future growth. Mid-tier keyword rankings often become tomorrow's top-position wins. Losing that base reduces the pool of pages that can mature into top performers over time. A program that loses it while top positions hold may look healthy today while its future growth pipeline has quietly narrowed.

Chapter 5 described healthy position consolidation: the pattern where weaker mid-tier rankings gradually fade as a program's strongest pages move into positions 1-10. That's competitive maturation: the long-tail contracting because better content earns better positions, not because something went wrong. Ramp illustrates something different: an externally induced collapse of the long-tail caused by the August 2025 spam update. The headline traffic remained strong because top-performing pages absorbed the loss, but the underlying opportunity set (the mid-tier rankings that serve as the seedbed for future top-position growth) narrowed sharply and abruptly.

The distinction is origin and speed. Healthy consolidation is gradual and internally driven. Hidden damage from an external shock is sudden and shows up as a cliff in the position distribution data, not a slope.

Ramp's experience is a specific case, not a universal pattern. But it illustrates what can be invisible when you only look at headline traffic: a growing number on top of a deteriorating foundation.

---

## Brand masking: when the number and the program move in different directions

The third type of hidden risk is the most common and the least likely to be detected, because it looks exactly like success.

Brand traffic grows when product adoption grows: when more people search specifically for your product by name. This is a real and meaningful organic signal. But it is not a content strategy signal. Brand traffic reflects product momentum; non-branded traffic reflects content program health. When brand traffic grows while non-branded traffic stagnates or declines, the organic number looks healthy while the content program underneath it is not doing the work.

CloudBees illustrates a related pattern from the other direction: brand traffic declined while non-branded grew (opposite movements within the same headline number). The headline masked the divergence entirely. In practice, this means a team making decisions from the headline number would have drawn the wrong conclusions about what was working and what was failing.

The cleanest diagnostic is the branded/non-branded traffic split examined consistently over time. When non-branded traffic is the primary growth driver, the content program is compounding. When brand traffic is doing the work, the headline reflects product momentum. Product momentum can slow or reverse for reasons entirely outside the content team's control. When it does, there's no content program underneath to sustain organic.

> **Research synthesis**
>
> *Three types of hidden risk appeared consistently in growing companies: high cannibalization rates masked by sufficient gross gains, long-tail position collapse masked by top-position growth, and brand traffic growth masking non-branded content stagnation. None of these are visible in headline traffic. All three are identifiable with data available in any standard analytics or SEO platform.*

---

## Boundary conditions

**Braze and Navan (clean growth):** These two cases demonstrate that the patterns this chapter describes are not inevitable features of content growth. They are identifiable problems that some programs avoid. Both Braze and Navan showed low cannibalization rates, broad position distributions, and non-branded traffic as the primary growth driver throughout the study window. Their growth was what it appeared to be in the headline: genuine, compounding, and built on a foundation that was strengthening rather than eroding.

This matters because it means clean growth is detectable and distinguishable from growth-with-hidden-fragility. The signals are available in the same data. The difference is whether you look.

**LogRocket's divergence:** LogRocket is a case where high cannibalization and genuine business health coexisted. ARR grew 22% while organic traffic was 66% below its all-time peak and the developer blog showed 75.6% cannibalization. This illustrates that cannibalization rate is a content program health metric, not a business health metric. The two can diverge substantially. A team reading only the business metrics would conclude the organic program was fine. A team reading only the organic metrics would miss that the business was growing through other channels. The relevant question is whether the organic program is doing the job it's supposed to do, and cannibalization rate is part of the answer.

---

## What one sentence should you remember from this chapter?

A program can grow in headline traffic while accumulating fragility (through cannibalization, position erosion, or brand dependency), and the headline won't tell you which is happening.

---

## Before you move on

This week, run the three-part audit and record your numbers against the benchmarks below.

| Check | How to calculate | Healthy | Investigate |
|---|---|---|---|
| Cannibalization rate | Gross loss ÷ gross gain (from Top Pages, two periods) | Under 30% | Over 60% |
| Position distribution | Share of keywords in positions 1-10 vs. 21+ now vs. 12 months ago | Positions 1-10 growing as share of total | Long-tail collapse that is sudden and correlated with a known external event |
| Brand dependency | % of traffic growth from branded vs. non-branded queries | Non-branded is primary growth driver | Branded accounts for more than 40% of traffic growth |

For the cannibalization rate: from a Top Pages export comparing two periods, sum all pages where traffic increased (gross gain), sum all pages where traffic decreased (gross loss), and divide gross loss by gross gain. Over 100% means the program is net negative. Publishing more content at current patterns accelerates the problem rather than solving it.

For position distribution: a long-tail contraction that happens gradually alongside growing top positions is healthy consolidation. A long-tail contraction that happened suddenly and aligns to a known algorithm update or site change is hidden damage worth investigating before it reaches top positions.

---

*Understanding fragility in growing programs sets up the question that comes next: when a decline does hit, what does it actually take to come back?*

---

## Visual notes

**[Figure 6.1 — Cannibalization rate waterfall chart]**
*Position: After "The treadmill" section, before the thresholds.*
*Data needed: For four companies — Braze (~10% cannibalization), Ramp (~22% of gross gains), LogRocket (75.6%), Aha! (286.6%) — show three bars per company: gross gain (positive, above baseline), gross loss (negative, below baseline), and net gain (resulting positive or negative bar). The visual should make the "treadmill" concept immediately visible: as you move from left to right across companies, the negative bar grows relative to the positive bar until at Aha!, the negative bar is nearly three times the height of the positive bar. Caption: "Same headline growth number. Completely different underlying economics."*
*Designer note: Braze (~10%) and Ramp (~22%) both fall within the Healthy zone by the chapter's own thresholds (under 30%). The visual contrast between those two bars will be subtle — intentionally so, since both are functioning programs. The dramatic contrast comes from the left-to-right progression into LogRocket and Aha!. Do not scale bars to equalize visual weight across all four companies; the disproportion at the right end of the chart is the point. **Blocking data dependency: do not finalize the waterfall without confirmed numeric values for all four companies.** Ramp's ~22% is from the Ahrefs Top Pages export comparison analysis; Braze's ~10% is an Ahrefs estimate. Verify both before rendering.*
