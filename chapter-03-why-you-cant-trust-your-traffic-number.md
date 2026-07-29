# Chapter 3: Why You Can't Trust Your Traffic Number

---

The organic traffic number is the most commonly reported metric in content marketing and one of the least reliable inputs for strategic decisions.

Not because the data is wrong. Because the number is a composite — it aggregates the results of dozens of simultaneous processes and compresses them into a single positive or negative figure. That compression discards most of the information that matters.

Across the companies examined, headline traffic figures frequently misrepresented the underlying health of the organic program. Growing companies appeared healthier than they were. Declining companies appeared in worse shape than their authority position warranted. In several cases, the headline number told a story that was nearly the opposite of what the underlying data showed.

Decomposing the number is not an analytical nicety. It is the prerequisite for drawing any conclusion from it.

---

## What the headline hides

The headline traffic number answers one question: did total traffic go up or down? It doesn't answer whether the program is healthy, whether the growth is durable, or whether the decline reflects something the team can address. A program that grew 40% via brand search and a program that grew 40% via compounding non-branded content have the same headline and fundamentally different futures.

Three decompositions consistently changed the interpretation of the headline number in this study. Each reveals a different layer of what the composite obscures.

> **The headline tells you the score. It doesn't tell you how the points were scored, whether the scoring was sustainable, or whether your opponent was playing the same game. Every strategic decision made from the headline alone carries that uncertainty forward.**

---

## Decomposition 1 — Branded vs. non-branded

Brand traffic grows when more people search for your product by name. Non-branded traffic grows when your content earns rankings on category and educational queries — queries people run before they know your product exists.

Both show up in the headline as organic traffic growth. They are not the same thing.

Brand traffic reflects product adoption. It is driven primarily by product momentum rather than content investment. Non-branded traffic reflects the content program's ability to capture demand that doesn't know it's looking for you yet. That's the compounding signal.

When brand and non-branded traffic move in different directions, the headline composite can obscure both movements simultaneously.

**Gainsight** is the clearest example in the study. Approximately 65% of Gainsight's apparent traffic growth during the study window was attributable to a single branded keyword. The headline showed a growing organic program. The underlying picture was a non-branded content program with limited compounding, propped up by navigational searches from an existing customer base.

**Rippling** showed the inverse pattern: brand traffic was growing as product adoption expanded, while the non-branded content program was experiencing churn. That churn was concentrated in the broader non-branded portfolio; Rippling's definitional HR and people operations content held or grew throughout the same window, as Chapter 9 documents. The headline masked both movements simultaneously — the brand-driven growth and the content-program fragility underneath it.

**CircleCI** illustrates why non-branded recovery is the signal worth watching. Non-branded traffic began recovering before the headline number reflected it — the content cluster driving recovery was category-query traffic, not brand searches. Teams watching only the headline would have missed the leading recovery signal.

The practical split to run: separate your traffic into branded and non-branded queries. If branded accounts for more than 40% of your traffic growth in any given period, the headline is primarily reflecting product momentum — not content program health. Those are different levers and they require different responses.

---

## Decomposition 2 — Traffic value vs. raw traffic

Traffic value is an estimated monetary value of a site's organic traffic based on what it would cost to replicate that traffic through paid search. It weights traffic by the commercial intent and search volume of the queries driving it — high-CPC, high-volume queries contribute more to traffic value than low-intent, low-CPC queries.

When raw traffic and traffic value move together, the composition of the traffic is roughly stable. When they diverge, the composition is shifting — toward lower-value queries (traffic up, value flat) or retaining higher-value queries despite volume loss (traffic down, value holds).

**ZoomInfo** produced the most extreme divergence in the study: traffic increased 154.7% while traffic value increased only 14.7% over the same period — a 140-point gap. The composition of ZoomInfo's traffic changed dramatically. The volume growth was real; the value wasn't following it at anywhere near the same rate. A team reading only the headline number would have concluded the organic program had more than doubled in effectiveness. The traffic value data told a different story: most of the volume growth was in low-value, low-intent queries.

**GitHub** showed the opposite pattern in decline. Raw traffic fell substantially during the study window, but traffic value declined at roughly half the rate of raw traffic. GitHub was losing search volume, but the queries it retained were disproportionately high-value — navigational, developer-intent, category-defining queries. The authority was intact even as volume fell. A team reading only the headline would have concluded the program was in serious trouble. The traffic value data suggested something more nuanced: the program was losing low-value volume while retaining its most important positions.

A gap of 20+ points between raw traffic trend and traffic value trend is a signal worth investigating before drawing conclusions from the headline.

*[Figure 3.1 — Traffic value divergence matrix. See visual notes at end of chapter.]*

---

## Decomposition 3 — Category baseline

Organic traffic doesn't move in isolation. It moves against a backdrop of category-wide dynamics — algorithm updates that affect entire topic areas, AI Overview expansions that suppress specific query types across all domains, shifts in search demand for categories that were growing or contracting.

A 30% traffic decline means something different in a category where the median company declined 25% than in a category where the median grew 15%. The absolute number tells you what happened to your program. The relative number tells you whether what happened was distinctive.

**Freshworks** illustrates what misinterpreting the absolute number looks like. Freshworks's traffic decline was significant in isolation — substantial enough to look like a program-level failure. Against the category baseline, the picture shifted: Freshworks was operating in a customer support and CRM space that experienced meaningful category-wide headwinds during the study window. The decline was still real, and the architectural event (the December 2025 Dew design system launch) still mattered. But the severity looked different once compared against peers facing similar category conditions.

**Braze** illustrates the complementary case. Braze's traffic growth was notable on its own. Against a category where the majority of comparable companies declined or went flat, it looked significantly more distinctive — a program that was compounding while category peers were contracting. The category baseline turned a good number into a meaningful one.

Identify one or two direct category peers and pull their traffic trend for the same window. If they declined similarly, the headwind is likely market-wide, and the diagnosis should account for that. If they held or grew while you declined, the problem is more specific to your program.

---

## Boundary conditions

**Braze (decomposition confirmed, not alarmed):** Braze's headline traffic growth held up across all three decompositions — non-branded was the primary growth driver, traffic value moved in line with raw traffic, and the growth looked even stronger against a majority-declining category. Decomposition isn't designed to find problems; it's designed to reveal the actual picture, whether the picture is healthy or not. Braze is the case that demonstrates the process is worth running even when the headline looks good — because the headline being right is not the same as knowing why it's right.

**GitHub (value/volume split):** GitHub's traffic value holding better than raw traffic during decline is the study's clearest example of what authority retention looks like in the data. A site with a decade of accumulated topical authority across developer queries doesn't lose that authority when it loses volume — the authority is embedded in the positions it retains, which happen to be on its highest-value queries. Teams diagnosing GitHub's decline from the raw traffic number alone would have overestimated the severity of the program's position.

> **Research synthesis**
>
> *In the majority of cases studied, the headline traffic number misrepresented the underlying health of the organic program. Across the cohort, the three decompositions — branded vs. non-branded split, traffic value vs. raw traffic comparison, and category baseline — consistently changed the interpretation of the headline number. Braze was the clearest case where decomposition confirmed the headline rather than qualifying it. The implication: every strategic decision made from the headline alone is made with incomplete information.*

---

## What one sentence should you remember from this chapter?

The headline traffic number tells you whether the composite went up or down — not whether the program is healthy, whether the growth is durable, or whether you're diagnosing the right problem.

---

## Before you move on

Before any strategic decision — recovery investment, content expansion, channel reallocation — spend one hour running these three checks.

| Check | How to run it | What it tells you |
|---|---|---|
| Branded vs. non-branded split | Separate traffic by branded and non-branded queries for the past 12 months. Calculate each as a % of total traffic growth. | If branded accounts for more than 40% of growth, the headline reflects product momentum more than content program health. |
| Traffic value vs. raw traffic | Pull both metrics for a 12–18 month window. Calculate the percentage change in each metric separately over the same period, then measure the point difference between those two percentages. | A gap of 20+ points — in either direction — signals a composition shift worth understanding before drawing conclusions. |
| Category baseline | Identify 1–2 direct category peers. Pull their traffic trend for the same window and compare directionally. | If peers declined similarly, the headwind is likely market-wide. If they held while you declined, the problem is program-specific. |

Run all three before drawing any conclusions from the headline. The decomposition takes about an hour and changes what questions you need to answer next.

---

*Once you have a verified picture of what your traffic number is actually measuring, the next question is: which specific mechanism caused what you're seeing?*

---

## Visual notes

**[Figure 3.1 — Traffic value divergence matrix]**
*Position: After the "Traffic value vs. raw traffic" decomposition section, before "Decomposition 3."*
*Data needed: A 2x2 matrix. Vertical axis: raw traffic direction (Up / Down). Horizontal axis: traffic value direction (Up / Down). Four quadrant labels: (1) Traffic up + value up → Healthy growth — confirm with branded/non-branded split; (2) Traffic up + value flat or down → Composition problem — volume is low-value; (3) Traffic down + value down → Decline — identify mechanism; (4) Traffic down + value holds → Authority retained despite volume loss. ZoomInfo should be placed in quadrant 2; GitHub in quadrant 4; Braze in quadrant 1. This is one of the chapter's most immediately usable reference tools — a reader should be able to locate their own program in under 30 seconds.*
