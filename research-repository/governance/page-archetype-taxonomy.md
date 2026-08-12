# Page Archetype Taxonomy — V1.0

*Governance document for the S.LAB Research Repository. Use this taxonomy when classifying pages in Portfolio Reassessment Analysis records. All page-level classifications must reference these definitions and decision rules.*

**Locked:** 2026-08-04
**Status:** Active

---

## Purpose

This taxonomy defines two independent dimensions for classifying individual pages within a portfolio reassessment analysis. It is designed to support cross-company pattern synthesis — specifically, to answer questions like:

- Which content archetypes consistently survive algorithmic reassessment?
- Do low-AI-substitutability pages show higher survival rates than high-substitutability pages?
- What structural characteristics distinguish resilient pages from fragile ones?

Both dimensions must be assigned independently. They will often correlate (Conceptual pages tend toward High substitutability; Original Research toward Low), but they are not deterministic — the research value lies precisely in cases where archetype and substitutability diverge.

---

## Dimension 1 — Content Archetype

**Classification rule:** Assign based on the primary query intent — what is the page designed to rank for, and what does the reader expect to get from it? Not the content's format or the author's stated purpose. When unclear, use the organic keywords export for the page: the queries driving the most traffic reveal the actual intent the page serves.

**Edge cases:** Some pages serve two intents roughly equally (e.g., a long-form guide that opens with a definition and spends the bulk of its length on methodology). Do not create a hybrid classification. Assign the archetype that corresponds to the query driving the most traffic to the page — observable from the keyword export.

---

### Conceptual

The page's primary value is building understanding — explaining what something is, how a category works, or why a concept matters. The reader arrives without a working model and leaves with one.

This extends beyond simple definitions. Conceptual pages include:
- "What is X?" definitional pages
- Category education pages ("What is revenue intelligence?", "What is pipeline coverage?")
- Mental model pages that frame how to think about a domain

*Examples:* "What is ICP?", "What is sales velocity?", "What is revenue intelligence?", Cognism glossary entries.

*Decision rule:* The primary query is a conceptual question. The page's value is in the understanding it builds, not the process it teaches or the product it recommends. If the page also covers "how to do it," classify by the query driving the most traffic.

*AI Substitutability tendency:* High — these are the query types most likely to be answered directly by AI Overviews.

---

### Methodological

The page's primary value is teaching execution. The reader arrives knowing what they want to do and leaves knowing how to do it. Includes guides, frameworks, processes, playbooks, and step-by-step articles.

*Examples:* "19 ways to measure sales performance," "Sales territory planning guide," "How to build a sales forecast," "Sales cycle stages" (when the emphasis is navigating the cycle, not defining the stages).

*Decision rule:* The primary value is a repeatable process or structured approach. If the page defines stages without explaining how to work through them, it is Conceptual. If it provides both, classify by the dominant traffic query.

*AI Substitutability tendency:* Medium to High — depends on specificity. Generic how-to content is more substitutable; methodology tied to proprietary frameworks or data is less so.

---

### Commercial Evaluation

The page serves commercial investigation intent — the reader is evaluating solutions, not seeking education. The page positions the company's product or a product category as the answer to a buying decision.

Includes: software/platform category pages, solution pages, feature pages that rank for category terms, use-case pages, "best X tools" editorial lists (when the company's product is among those evaluated).

*Examples:* "Sales training software," "Revenue intelligence platform," "[Company] for sales teams," "Best CRM for startups."

*Decision rule:* The primary query intent is commercial investigation (MOFU/BOFU). The reader is asking "what should I use?" not "what is this?" or "how do I do this?" If named competitors appear in the page structure as primary elements, classify as Comparative instead.

*AI Substitutability tendency:* Low to Medium — commercial evaluation queries are less likely to be fully satisfied by AI answers, particularly where specific vendor comparisons, pricing, or current product features are needed.

---

### Comparative

The page explicitly compares the company against named competitors, or compares multiple tools within a category. The reader has specific options in mind and is seeking a head-to-head evaluation.

*Examples:* "Cognism vs ZoomInfo," "[X] alternative," "Gong vs Chorus," editorial "best tools" lists where named competitors are evaluated side-by-side.

*Decision rule:* Named competitors appear in the headline or are structurally central to the page (comparison table, head-to-head sections). If the page discusses a product category without naming specific competitors, it is Commercial Evaluation.

*AI Substitutability tendency:* Medium — AI can provide generic comparisons, but specific feature accuracy, pricing, and recency degrade AI reliability.

---

### Programmatic

Pages generated at scale from a database or template with minimal unique editorial content per page. Volume is the strategy; individual page differentiation is thin.

*Examples:* Apollo.io /companies/ and /people/ pages, integration directory pages, location pages, job board pages, tool listing pages generated from structured data.

*Decision rule:* If you removed the template wrapper, less than 50% of the page content would be unique to that URL. The content is primarily structured data rendered into a page, not original editorial writing. Pages that happen to have a consistent format but contain meaningfully different editorial content per URL are not Programmatic.

*AI Substitutability tendency:* Varies — programmatic pages serving transactional or navigational intents may survive; those answering informational queries at thin quality are most vulnerable.

---

### Utility

The page's primary value is a usable artifact — something the reader takes away and uses directly. The surrounding editorial content is secondary to the artifact itself.

Includes: templates, worksheets, calculators, checklists, scripts, scorecards, swipe files, interactive tools.

*Examples:* Sales email templates, commission calculator, sales forecasting spreadsheet, QBR scorecard.

*Decision rule:* Remove the artifact and the page has little standalone value. The primary query intent is "free [template/tool]" or equivalent. If the page is a detailed guide that happens to include a downloadable, classify by the dominant intent.

*AI Substitutability tendency:* Low — AI can describe how to build these artifacts but cannot replicate the interactive artifact itself. The utility is in the thing, not the explanation.

---

### Original Research

Content built on proprietary data, original studies, or analysis that could not be replicated without access to the company's data or unique methodology. High information gain, typically linkable and citable.

*Examples:* Gong Labs studies, benchmark reports built from first-party data, industry trend reports with original analysis, proprietary statistics pages.

*Decision rule:* The primary information gain is from data or analysis the company generated. If the data is aggregated from public sources with no original analysis, classify as Conceptual or Methodological depending on the intent. The test: would removing the company's proprietary data eliminate the page's value?

*AI Substitutability tendency:* Low — AI cannot replicate proprietary data. These pages are the canonical low-substitutability archetype.

---

### Homepage

The root domain or primary brand hub. Special case — aggregate brand authority, not a content-specific page. Behavior during reassessment is driven by brand demand signals and overall domain authority, not query-level intent matching. Analyzed separately from content pages in portfolio comparisons.

*Decision rule:* URL is the root domain (`example.com/`). One per company record.

*AI Substitutability tendency:* Not applicable — homepage traffic is navigational/branded, outside the substitutability framework.

---

### Residual: Editorial / Commentary

General blog content that does not fit the above archetypes — opinion pieces, trend commentary, news-adjacent content without a strong conceptual or methodological spine. Not a primary archetype because these pages rarely drive significant query volume during reassessment events.

**Use sparingly.** If a page classified here moves meaningful traffic during a reassessment window, reclassify it into the appropriate primary archetype.

---

## Dimension 2 — AI Substitutability

**Definition:** The degree to which a well-trained AI system (ChatGPT, Gemini, AI Overview) can satisfy the user's core intent on this query without the page.

**Classification rule:** Assign based on the nature of the user's intent, not the quality of the page. A high-quality Conceptual page is still High substitutability — the user's intent (understanding a concept) can be satisfied by AI. A thin Utility page is still Low substitutability — the user's intent (getting a usable artifact) cannot.

The three values:

---

### Low

The user's intent requires something AI cannot generate from training data alone:
- Proprietary data or analysis the company produced
- An interactive artifact (calculator, tool, template) the user intends to use directly
- Specificity so narrow (niche use case, company-specific context) that no training corpus would contain it
- Real-time or frequently updated information (pricing, availability, current product features)

*Examples:* Commission calculator, proprietary benchmark study, "Gong vs Chorus" with current feature accuracy, narrow industry-specific template.

---

### Medium

The AI can partially satisfy the intent — the general answer exists in training data and AI can provide it — but the page adds meaningful value the user may prefer: greater depth, specific structure, company perspective, or a richer format than an AI overview delivers. The user might accept the AI answer or might click through for more.

*Examples:* "CRM comparison" (AI can compare but accuracy and currency degrade), "Sales methodology guide" (AI can explain SPIN selling but a structured guide with examples adds value), editorial best-tools lists with detailed evaluation criteria.

---

### High

The user's core intent can be fully satisfied by an AI answer without the page. The information exists in training data, requires no proprietary data, no interactive artifact, and no specificity that AI cannot provide.

*Examples:* "What is revenue intelligence?", "What is a sales cycle?", "How many stages in a typical sales process?", "What does pipeline coverage mean?"

*Note:* High substitutability does not mean the page will disappear from SERPs — it means the page's traffic is structurally vulnerable to AIO interception. These are the pages where the research question "did AI Overview reduce clicks?" is most testable.

---

## Decision Log

*Record significant classification decisions and edge cases here as the taxonomy is applied across companies. Over time this log becomes the basis for refining definitions and decision rules.*

| Date | Company | Page | Classification | Rationale |
|------|---------|------|----------------|-----------|
| 2026-08-04 | Gong | Sales Performance: 19 Ways to Measure and Boost It | Methodological / Medium | Primary queries are how-to/measurement; content teaches execution. Medium substitutability: AI can answer generically but the 19-item structured framework adds meaningful value. |
| 2026-08-04 | Gong | Homepage | Homepage / N/A | Root domain. Brand/navigational traffic. |
| 2026-08-10 | Aha! | Template pages (154 pages: competitive analysis template, strategy templates, creative brief template, OKR template, etc.) | Utility / Medium | The taxonomy's Low substitutability default for Utility assumes an "interactive artifact (calculator, tool, template) the user intends to use directly." Aha!'s template pages are downloadable document templates (Word/Google Doc format), not interactive tools. AI can generate equivalent structured content on demand — the artifact IS substitutable. Classified Medium rather than Low. Implication: the Utility archetype should be understood as two subtypes: (1) Interactive tools (calculators, spreadsheet models, configurators) → Low substitutability as defined; (2) Document/downloadable templates → Medium substitutability (AI can generate the content, though the hosted artifact still has some utility advantage). Observed outcome: all 154 template pages declined 60–97% in Aha!'s portfolio, consistent with AI substitutability at Medium-to-High level. Note: whether the mechanism is SERP click interception or upstream demand destruction cannot be confirmed without search-volume trend data. |

---

## Version History

| Version | Date | Change |
|---------|------|--------|
| V1.0 | 2026-08-04 | Initial taxonomy locked. Eight archetypes + residual; AI Substitutability dimension. Derived from analysis of Gong, Apollo.io, Cognism, and Gladly records. |
