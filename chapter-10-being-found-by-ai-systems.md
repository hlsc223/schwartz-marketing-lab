# Chapter 10: Being Found by AI Systems

---

Two opposite conclusions have emerged from the debate about AI's impact on content discovery. The first: AI systems are so different from search engines that they require an entirely separate content strategy: new formats, new structures, new topics, new everything. The second: good SEO automatically produces AI visibility, so nothing needs to change.

The evidence from this study supports neither.

The overlap between content that earns organic search authority and content that gets cited in AI systems is substantial, but it isn't complete. The gaps are real, and they are not random. They follow predictable patterns driven by query type, not content quality. Understanding those patterns is the difference between investing in AI visibility gaps that are genuinely closeable and investing in structural routing decisions that better content cannot change.

Chapter 9 examined what happens in the Google SERP when AI Overviews intercept queries before they reach the organic listing. This chapter examines what happens in the AI systems users turn to when they skip the search engine entirely: ChatGPT, Perplexity, Google AI Mode, and their peers. The question isn't "does my page rank?" It's "when someone asks an AI system directly, does it find me?"

---

## What the citation data shows

This study tested 13 prompts across six AI engines: ChatGPT, Copilot, Google AI Mode, Google AI Overviews, Google Gemini, and Perplexity. Each prompt represented a query central to one company's organic growth story, covering 13 of the 15 deep-dive companies (Hyperproof and LogRocket were added to the deep-dive cohort after the citation testing phase was complete).

Across those 78 engine-prompt combinations, AI systems cited the target company's domain in 9 of the 13 cases tested. In 7 of those 9, the exact target URL (the specific page being tested) was the confirmed citation. In the remaining 2, they cited the domain via a different URL on the same site.

Four of the 13 cases produced no citation of the target company on any engine tested.

This is a small, intentionally selected validation set: a snapshot from a bounded prompt set, not a universal model of AI retrieval behavior. Within that set, the first takeaway is the one that gets least attention: the majority of queries produced citation of the target company. The overlap between search authority and AI citation appears real and consistent enough, across this cohort, to suggest a common underlying mechanism: content that is specific, authoritative, and directly answers a question tended to perform well in both environments.

Blog and educational articles produced the largest share of confirmed citations (5 of the 9 confirmed cases). Glossary and definitional pages produced 2 confirmed cases. Product pages and marketing content produced the fewest. This mirrors the content durability finding from Chapter 5: the content types that held up in search are the content types that AI systems tend to retrieve.

> **Research synthesis**
>
> *In 9 of 13 tested cases, AI systems cited the target company's domain when asked about a query central to that company's organic authority. In 7 of those 9, the exact target URL was confirmed. The content type producing the most citations (blog and educational content) is the same type that proved most durable in organic search among the deep-dive growing companies.*

---

## What AI systems tend to cite

The content that received the most consistent AI citations across engines shared three observable properties.

**Specificity.** Cited content answered a specific, bounded question, not a general overview of a topic. CircleCI's "what is continuous integration" page and Rippling's HR glossary entries each addressed a well-defined concept with the kind of direct, authoritative answer that makes retrieval straightforward. AI systems cited vague, broad, or introductory content less frequently.

**Information gain.** Cited content appeared to provide something the AI system's training data didn't already contain in compressed form: a proprietary definition, a specific explanation built around a company's product domain, or a conceptual framework that offered a distinctive angle. Content that restated common knowledge appeared less retrievable than content that added something, though this property is more interpretive than the other two and harder to confirm from citation data alone.

**Direct question matching.** The most consistently cited pages were the ones whose content most directly and explicitly answered the question being asked. This sounds obvious, but the implication matters: pages optimized primarily for rankings (through keyword density, topic breadth, or topical authority signaling) performed less well in AI retrieval than pages optimized for answering a specific question completely.

These properties are the same properties that drive durable organic search performance. A page that earns a strong ranking because it directly and authoritatively answers a question also tends to be the page an AI system retrieves when asked that question. The mechanisms are not identical, but the content characteristics they reward are.

---

## Two structural exceptions

Four companies in the cohort were not cited by any AI engine on their tested queries. In none of these four cases was the likely explanation a content quality failure. In each case, the query type triggered structural routing behavior that directed AI responses away from editorial content entirely.

**Operational queries: routing to specialist tools.** Freshworks's tested query was closely related to site uptime (whether a service was currently operational). Across all six AI engines, responses cited dedicated uptime monitoring tools: Downdetector, IsItDownRightNow, UptimeRobot. No engine cited editorial content, from Freshworks or any other brand.

This matches the complete query routing pattern identified in Chapter 9. AI systems identified this as a query requiring live data, not an editorial explanation. The question can't be answered from trained content. It requires a real-time source. No content strategy, however well-executed, changes this routing decision. The query type is the variable, not the content.

**Institutional authority queries: routing to regulatory bodies.** Vanta's tested query centered on risk management frameworks (the same category as Vanta's largest traffic-gaining page in the study window). Even on that page, AI systems consistently cited institutional authorities in response to the query: NIST, AWS, and governance frameworks from regulatory bodies.

The pattern here is different from operational routing. This query was answerable from editorial content, and AI systems cited some editorial content. But the editorial content AI systems treated as authoritative on this topic was the regulatory source material, not the brand content built around it. Vanta's page explained and contextualized the frameworks. The AI systems went to the primary sources.

> **Not being cited in an AI response is not always a content quality problem. When AI systems route to specialist tools or institutional authorities, the decision is structural: driven by query type, not content strength. Understanding the difference prevents investing in a problem that better content cannot solve.**

These two exception patterns have implications for measurement. If a company benchmarks its AI visibility against queries that structurally route to tools or regulatory authorities, its citation rate will always be zero regardless of content investment. The correct response is to identify which queries in a program face structural routing and exclude them from AI discoverability KPIs; then focus investment on queries where the routing decision is genuinely contestable.

---

## Engine behavior differs

Not all AI engines retrieved the same content, or cited the same companies, at the same rate.

In this citation snapshot, Google AI Mode and Google AI Overviews showed the highest citation rates for cohort company content. Google's AI systems appeared to weight web authority signals (the same signals that drive organic search rankings) more heavily than other engines tested, which may explain the closer alignment between search performance and AI citation in Google's products. This behavior could shift as these systems evolve.

In this test, Perplexity cited across a broader range of sources than Google's AI systems and was more likely to cite multiple domains in a single response, including smaller or newer publishers. The citation pattern appeared less correlated with domain authority and more with recency and direct relevance to the query.

In this snapshot, ChatGPT and Copilot showed the lowest citation rates for cohort content. These systems cited less frequently in general and appeared more likely to synthesize from training data without citing specific sources, a behavior that reflects product design choices and training differences at the time of testing.

The engine distribution matters for strategy. A content team measuring AI visibility only through ChatGPT will see lower citation rates than a team measuring across Google AI Mode and Perplexity. A B2B audience that primarily uses ChatGPT for work research will have different discoverability dynamics than an audience using Perplexity or Google AI Mode.

*[Figure 10.1 — AI citation matrix. See visual notes at end of chapter.]*

> **Research synthesis**
>
> *Engine behavior varied materially: Google AI Mode and AI Overviews showed higher citation rates for cohort content; Perplexity cited across a broader source range; ChatGPT and Copilot cited least frequently. AI discoverability is not a single channel. It is a set of channels with different retrieval behaviors, different audience compositions, and different citation tendencies.*

---

## Boundary conditions

**CircleCI (strongest citation case):** 4 of 6 engines cited CircleCI's tested content (the highest citation rate of any company in the cohort). The content cited was a technical blog post directly answering a common DevOps concept question. Two observations are notable here. First, the content type (technical educational blog post) is exactly the type that proved most durable in search during CircleCI's recovery period: the same content that drove search recovery also drove AI citation. Second, citation by 4 of 6 engines on a technically specific question suggests that depth and specificity in a bounded domain produces consistently strong AI retrievability, not just search retrievability.

**Vanta (structural displacement despite strong content):** Vanta's non-citation on risk framework queries is the most instructive boundary condition in the study. The page tested was Vanta's largest traffic-gaining page in the study window (among its strongest organic assets by any search metric). Its non-citation was not a reflection of content weakness; it was a reflection of the query type routing AI systems toward primary regulatory sources. The lesson is methodological: strong organic performance does not guarantee AI citation when the query type structurally prefers institutional authority sources.

**Rippling (cross-environment confirmation):** Rippling's glossary content was both AIO-resistant (as noted in Chapter 5) and AI-cited in this study. AI chatbots retrieved the same page when asked the corresponding question directly. This cross-environment confirmation (the same content performing well in both SERP and AI contexts) is the clearest evidence in the study that the content properties driving AI citation and the content properties driving search durability are substantially the same.

---

## What one sentence should you remember from this chapter?

Content with durable organic authority often earns AI citation, but only when the query is contestable by editorial content. When it isn't, the gap isn't a content problem.

---

## Before you move on

Pick your three most important category queries: the ones where you hold strong organic authority and where the answer requires editorial depth rather than routing to a specialist tool or regulatory source. Run each through ChatGPT, Perplexity, and Google AI Mode. For each query, record three things:

- Is your domain cited?
- If not, who is? (A competitor, a regulatory body, a specialist tool, or a general reference source?)
- Does the response route structurally away from all brands: to tools, primary sources, or institutional authorities?

If you're not cited but a competitor is, the gap is content depth or specificity on that exact question, and it's closeable. If the response routes to a specialist tool or institutional authority on every engine, stop measuring AI citation against that query. The routing is structural. Redirect investment to queries where editorial content is genuinely in competition for the AI's attention.

---

*Understanding AI visibility in chatbots and answer engines completes the AI picture that Chapter 9 began. Together, they describe the specific conditions under which AI systems intercept, bypass, or route away from editorial content, and the specific conditions under which that content remains discoverable. The next chapter turns those conditions into an actionable framework for what to build.*

---

## Visual notes

**[Figure 10.1 — AI citation matrix]**
*Position: After the "Engine behavior differs" section.*
*Data needed: A grid with cohort companies on the vertical axis (rows) and six AI engines on the horizontal axis (columns): ChatGPT, Copilot, Google AI Mode, Google AI Overviews, Google Gemini, Perplexity. Cell values: confirmed citation of exact target URL (filled circle or checkmark), citation of company domain via different URL (half-filled or partial mark), not cited (empty). Include the 13 companies tested. Add a row summary showing total citation count per engine and a column summary showing total citation count per company. Design for high information density: this is one of the study's most original data assets and should be visually clear enough to function as a standalone reference.*
