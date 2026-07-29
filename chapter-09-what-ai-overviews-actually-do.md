# Chapter 9: What AI Overviews Actually Do to Traffic

---

By mid-2025, the dominant view in B2B marketing circles was that AI Overviews represented an existential threat to informational content. The logic was intuitive: if Google could summarize an answer in the SERP itself, why would anyone click through to the page that answer came from? Content marketers who had spent years building educational content programs were being told those programs were now structurally obsolete.

The data from this study doesn't support that conclusion, but it doesn't dismiss the concern either. What it shows is that both responses applied a category-level conclusion to a query-level phenomenon. AI Overview suppression is real and, in some cases, severe. It is also specific. Exposure is determined less by whether content is informational than by whether the user's task can be completed without leaving the SERP.

That distinction (between content category and *query satisfiability*) is what this chapter documents. The evidence is most consistent with AI Overview interception, given the timing, query types, and same-position traffic collapse.

Across the cohort, three distinct outcomes emerged. Some content remained largely resistant to AI Overview suppression, even through the period of most aggressive AIO expansion. Some content experienced direct SERP interception: rankings held, but the click was captured by the Overview before the user reached the page. And some queries were routed entirely to specialist tools, with no content-based answer offered at all. Which bucket a page falls into determines whether the right response is to deepen the content, reposition it, or stop investing in it altogether.

---

## The resistance evidence: five categories, same result

Before examining which companies experienced suppression, it's worth being precise about those that didn't.

Five companies showed definitional content growing or holding throughout the AI Overview expansion window (the same period when industry commentary was predicting broad suppression of educational content):

- Rippling: HR and people operations
- Navan and Ramp: finance and spend management
- Harness: DevOps and CI/CD
- Vanta: security and compliance

These aren't niche companies with unusual content approaches. They operate in competitive categories where multiple well-funded peers were also publishing educational content. The fact that their definitional content held up (and in several cases grew) while AI Overviews were actively expanding is the baseline finding this chapter builds from.

It doesn't prove that AI Overviews have no effect on this type of content. It proves that the effect, if present, was not severe enough to show up in traffic data during this period. And across five independent companies in five different categories, that consistent non-suppression is meaningful.

> **Research synthesis**
>
> *The industry predicted AI Overviews would suppress informational content broadly. The cohort data shows the suppression was selective, and the selection criterion wasn't content category.*

---

## The direct evidence: when position improves and traffic disappears

The resistance evidence tells us what *wasn't* suppressed. The more striking evidence comes from a company whose content *was*.

Aha! (a product management software company with a mature, well-developed content program) experienced substantial traffic losses during the study window. When the underlying keyword data is examined, a specific pattern appears across more than 20 individual queries: position held or improved while traffic fell between 79% and 99%.

This is not a normal traffic pattern. Under competitive displacement (the mechanism most commonly used to explain traffic loss), position and traffic move together. When a competitor takes your ranking, your traffic falls because your position fell. That's straightforward.

What Aha!'s data shows is the opposite. Pages held their rankings. In several cases, rankings improved. Traffic still collapsed.

Some examples from the data:

| Keyword | Prev. position | Curr. position | Prev. traffic | Curr. traffic | Change |
|---|---|---|---|---|---|
| user story template | 3 | 1 | 108 | 9 | −92% |
| marketing job titles | 3 | 3 | 91 | 1 | −99% |
| product marketing | 1 | 1 | 509 | 11 | −98% |
| product positioning | 2 | 2 | 167 | 8 | −95% |
| product roadmap template | 2 | 2 | 203 | 14 | −93% |

*[Figure 9.1 — Same-position CTR collapse table. See visual notes at end of chapter.]*

*Current SERP data (July 2026) confirms AI Overviews are active on all five queries in the table above.*

A page that moves from position 3 to position 1 (an improvement) and simultaneously loses 92% of its traffic has not been outranked. It has been intercepted. The ranking held; the click did not. That is the signature of SERP interception, and in this context it is most consistent with AI Overview suppression.

> **Your ranking didn't change. Your traffic did. When position improves and traffic collapses simultaneously, you're not looking at a competitive displacement problem. You're looking at a SERP interception problem, and the treatment is fundamentally different.**

> **Research synthesis**
>
> *Same-position CTR collapse (where rankings hold or improve while traffic falls 80–99%) is direct, observable evidence of SERP interception, most consistent with AI Overview interception. It cannot be explained by competitive displacement. It requires a different diagnosis and a different response.*

---

## What determines exposure

The pattern across Aha!'s keyword data is not random. The queries that experienced severe CTR collapse share a specific property: they are satisfiable in the SERP without a click.

"Marketing job titles": AI can enumerate the list. "User story template": AI can provide the artifact. "Product marketing": AI can define the term in an Overview paragraph. "Product positioning": AI can outline the steps. In each case, the user's goal can be fully accomplished from the search results page, before they ever land on the page that's ranking.

This is the variable that determines AIO exposure: not whether content is "informational" but whether the query can be resolved without a click. The spectrum runs from fully satisfiable on one end (lists, templates, brief definitions, step-by-step processes for common tasks) to engagement-requiring on the other (comprehensive methodology guides, proprietary research, conceptual frameworks requiring depth to be useful).

*[Figure 9.2 — Query satisfiability spectrum. See visual notes at end of chapter.]*

The resistance evidence from Rippling, Navan, Harness, Vanta, and Ramp fits this framework cleanly. "What is continuous integration," at the depth Harness covers it, is not satisfiable in an Overview paragraph; understanding it requires reading. "What is SOC 2 compliance" at the level a first-time practitioner needs is not a definition that can be compressed into three sentences. "What is an FSA" for someone managing HR benefits for the first time is more borderline: simple definitions can be answered briefly, but the practical complexity of implementation is not.

The companies whose definitional content held up were operating at a depth of explanation where AI Overview compression leaves the user's goal unmet. That depth is not automatic. It's a characteristic of how the content is constructed. And it is auditable in advance.

> **Research synthesis**
>
> *The distinguishing variable between suppressed and resistant informational content is query satisfiability: whether a user can accomplish their goal from the SERP alone. Content category (informational, educational, definitional) is not the relevant axis. Satisfiability is.*

---

## The extreme case: complete query routing

The same-position CTR collapse at Aha! represents AIO interception: Google answers the question in the SERP rather than routing the click to the ranking page. There is a more extreme version of this phenomenon that appeared in the study data.

The study's AI citation phase tested Freshworks's "is this website down" query across six AI engines. Every engine routed the response exclusively to dedicated uptime monitoring tools: Downdetector, IsItDownRightNow, UptimeRobot. No engine offered a content-based answer. None cited a brand. The AI systems didn't attempt to answer from editorial content; they identified the query as one requiring a live data source and delegated entirely.

This is a structurally different outcome from AIO interception. AIO interception still puts the brand's ranking on the SERP; the user simply doesn't click. Complete query routing removes the opportunity for organic content to participate at all. The query has been reclassified from "something a content page can answer" to "something that requires a tool or live data feed."

For operational queries (uptime checks, real-time pricing, live availability, current status), this reclassification appears to be structural and stable. It is not a content quality problem. No editorial article, regardless of depth or authority, can substitute for live data. Understanding which of your query types face this reclassification means stopping investment in a problem that content cannot solve.

> **Research synthesis**
>
> *Complete query routing (where AI systems delegate to specialist tools rather than citing any content) is distinct from standard AIO interception. It is structural, not quality-dependent. Content investment cannot overcome it, because the AI has determined the query requires a different type of source entirely.*

---

## Boundary conditions

**GitHub** represents the study's most important caveat on AI Overview attribution. GitHub experienced severe traffic decline during the study window, and AI interception is a plausible contributing mechanism: the platform hosts significant educational and reference content that would qualify as satisfiable on many queries. But GitHub's situation involves multiple potential factors simultaneously: competitive displacement, AI Overview interception, and possibly AI tool demand substitution for code-related queries as developers increasingly use AI assistants directly for documentation and code references.

GitHub's case doesn't offer the clean attribution available in Aha!'s, where same-position CTR collapse provides direct mechanistic evidence. Scale and topical breadth mean multiple mechanisms may be operating at once, making them difficult to isolate. The lesson this case teaches is methodological: when you cannot observe same-position CTR collapse or other direct signatures, declining traffic alone doesn't establish AI Overview interception as the cause. The diagnosis requires the specific evidence.

---

## What one sentence should you remember from this chapter?

AI Overviews don't suppress informational content uniformly. They suppress content on queries where the SERP can complete the user's task without a click. The exposure is specific, auditable, and unevenly distributed across most content programs.

---

## Before you move on

Take your top 20 traffic pages and run a SERP inspection on each one (a broader sample than the Chapter 11 prioritization pass), because at this stage you want to see whether satisfiability exposure is isolated to a few pages or distributed across the portfolio. Search the primary keyword in an incognito window and document what you see: Is there an AI Overview? A featured snippet? Direct citations to specific sources? Shopping results or video carousels? Note the full SERP composition, not just whether your page appears.

Then ask one diagnostic question for each page with an AI Overview present: can the user accomplish their goal from the Overview alone, or do they need to click through? Role lists, templates, brief definitions, and step-by-step processes for routine tasks are exposure. Comprehensive guides, methodology content, and proprietary frameworks are generally protected. See **Figure 9.2** for the full satisfiability spectrum if you're uncertain where a page falls.

Any page in your top 10 by traffic volume with confirmed query satisfiability risk is worth addressing. The options are: deepen the content so the Overview can no longer fully satisfy the query (add proprietary data, a methodology layer, or a dimension AI can't synthesize from existing sources); reframe the angle toward a related sub-question that requires engagement to answer (one the Overview doesn't address); or deprioritize future investment in that content type.

---

*AI Overviews affect what happens when users search Google. What happens when users skip Google entirely (and ask an AI system directly) is a different question, and the subject of Chapter 10.*

---

## Visual notes

**[Figure 9.1 — Same-position CTR collapse table]**
*Position: Early in "The direct evidence" section, after the introductory paragraph describing the pattern.*
*Data needed: 8–10 keywords from Aha!'s Ahrefs keyword export. Columns: Keyword | Previous position | Current position | Previous traffic | Current traffic | Change %. Sort by traffic change % (most severe first). Include the examples cited in the prose above plus additional queries from the export. The visual should make the pattern unmistakable: position column shows stability or improvement while traffic column shows collapse.*

**[Figure 9.2 — Query satisfiability spectrum]**
*Position: After the satisfiability variable paragraph, before the resistance evidence explanation.*
*Data needed: A horizontal spectrum diagram. Left end: "Fully satisfiable in SERP: user goal met without clicking." Right end: "Requires engagement: user must read, understand, or apply." Populate with content type examples at each point: far left = role/career lists, templates, basic term definitions, step-by-step routine processes; middle = strategic overviews, comparison guides, multi-factor explanations; far right = comprehensive methodology guides, proprietary research, conceptual frameworks requiring depth to be useful. Annotate with company evidence: Aha! examples on the left, Rippling/Navan/Harness/Vanta/Ramp examples on the right.*
