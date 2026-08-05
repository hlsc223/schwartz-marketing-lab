# Portfolio Durability Analysis — ActiveCampaign

<!--
Save to: portfolio-durability/activecampaign.md
Link bidirectionally: add this file to the Related Documents section of the company record.
This document holds structured page-level findings. Company record holds company-level findings. Do not duplicate narrative — cross-reference instead.
Optimize for structured fields. Every time you want to write a paragraph, ask: could this be a field? If yes, make it a field.
-->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | ActiveCampaign |
| **Linked Company Record** | `company-records/activecampaign.md` |
| **Reassessment Window** | 2025-01 to 2026-07 (cohort window) |
| **Analysis Date** | 2026-08-04 |
| **Status** | Draft — SDR SERP replacement analysis and pricing keyword replacement analysis pending |
| **Primary Mechanism (from record)** | Mixed (phase-dependent) — pending this analysis |
| **Methodology Version** | V2.4 |

---

## Reassessment Window

| Field | Value |
|-------|-------|
| **Window Start** | 2025-01 |
| **Window End** | 2026-07 |
| **Window Identification Method** | Performance History cohort window — aligns with study endpoints |
| **Top Pages Export Dates** | Previous: ~2025-01 (inferred — homepage prev=136,261, matches Performance History Jan 2025) / Current: ~2026-07 (inferred — homepage curr=121,236, matches Performance History Jul 2026) |
| **Keywords Export Dates** | 2024-08-01 → 2026-07-30 (different from cohort window; used for directional analysis only) |
| **Trailing-Slash Normalization Applied** | Yes — 5,086 raw rows collapsed to 5,077 unique normalized URLs (9 duplicate groups merged); 1 http→https normalization |
| **Window caveats** | (1) Decline onset was Jul 2025 and trough was Dec 2025 — the cohort window covers both the decline phase (Jan–Dec 2025) and a recovery phase (Dec 2025–Jul 2026). Some pages that appear as net decliners in the cohort window have since recovered meaningfully in the recovery window. Both windows are tracked; File A (recovery window) and File B (cohort window) are never mixed. (2) Keywords export window (2024-08 → 2026-07) differs from cohort window — keyword-derived metrics are labeled separately. (3) URL migration artifact: `/free-marketing-tools/subject-line-generator` old URL contributes to Gross Loss and Lost URL count; `/tools/subject-line-generator` new URL contributes to New-URL gain. Calculations are unadjusted for this confirmed migration. |

---

## Portfolio Overview

| Metric | Value |
|--------|-------|
| Total pages in export (normalized) | 5,077 |
| Recovery cohort size | Not enumerated at full URL level — top 5 by traffic gain documented below |
| Decline cohort size | Not enumerated at full URL level — top confirmed pages documented below |
| Lost cohort size (prev > 0, curr = 0) | 1,046 pages |
| New URL cohort size (prev = 0, curr > 0) | 356 pages |
| Stable cohort size | Not formally defined — full export not reviewed at page level |
| Recovery cohort decision rule | Traffic gain > previous traffic, within top 5 by absolute gain (used due to incomplete URL-level review) |
| Decline cohort decision rule | Material traffic loss documented in source analysis or estimated from content-type aggregates |
| Stable threshold | Not formally defined for this analysis |
| Archetypes observed (recovery cohort) | Conceptual (email-campaign), Utility (WhatsApp link tool), Editorial (best-online-learning-platforms), Conceptual (email-etiquette), Programmatic (locale /de) |
| Archetypes observed (decline cohort) | Homepage, Conceptual (SDR blog), Commercial Evaluation (pricing), plus large undifferentiated blog category loss |
| **Gross Gain — Cohort Window** | 74,592 |
| **Gross Loss — Cohort Window** | 115,985 |
| **Net Change (URL-level)** | −41,393 |
| **Offset Rate** | 1.555 |
| **Top 5 page traffic share (cohort end)** | 62.0% |
| **Top 10 page traffic share (cohort end)** | 67.8% |
| **Homepage share (cohort end)** | 39.6% |
| **Gain decomposition: new URLs** | 23,506 (31.5% of gross gain, from 356 new URLs) |
| **Gain decomposition: continuing URL improvement** | 51,086 (68.5% of gross gain) |

**Content-type gross gain/loss summary (cohort window):**

| Content Type | Gross Gain | Gross Loss | Net |
|---|---|---|---|
| Blog | +13,866 | −50,662 | −36,796 |
| Glossary | +36,766 | −27,405 | +9,361 |
| Homepage | 0 | −15,025 | −15,025 |
| Tools/free | +12,315 | −2,349 | +9,966 |
| Other | +8,961 | −14,997 | −6,036 |
| Pricing | +22 | −2,983 | −2,961 |
| Platform | +1,939 | −786 | +1,153 |
| Locale | +723 | −1,778 | −1,055 |

**Key limitation on full-portfolio coverage:** The decline cohort at URL level was not fully enumerated — the source analysis provides aggregate content-type breakdowns and page-level data for five priority pages, not a sorted URL-level loss list. The blog content type (−36,796 net) contains many individual URLs that cannot be classified without the full sorted export. The cohort tables below cover confirmed pages; aggregate content-type patterns are used to assess whether the SDR-like pattern is isolated or systematic.

---

## Controlled Vocabularies

*Reference these when completing cohort tables. Do not invent new values.*

**Page Archetype** — see `governance/page-archetype-taxonomy.md`:
Conceptual / Methodological / Commercial Evaluation / Comparative / Programmatic / Utility / Original Research / Homepage / Editorial

**AI Substitutability** — see `governance/page-archetype-taxonomy.md`:
Low / Medium / High

**Primary Query Type:**
Brand / Commercial investigation / Definitional / Methodological / Comparative / Navigational / Tool-Utility / Other

**Recovery Pattern:**
Broad ranking recovery / Single-query breakout / Long-tail expansion / Stable rankings + higher traffic / Existing demand recaptured / Mixed

**Decline Pattern:**
Ranking collapse / Keyword disappearance / Stable rankings + traffic decline / Gradual position erosion / Mixed

**Candidate Driver (recovery):**
Algorithmic reevaluation / Demand growth / Page rewrite or expansion / Link acquisition / Internal linking / SERP composition change / Unknown

**Candidate Driver (decline):**
Algorithmic reevaluation / AI Overview interception / AI tool demand substitution / Competitive displacement / Demand contraction / Internal cannibalization / Technical signal loss / Unknown

**Outcome:** Promote / Preserve / Abandon

**Recovery Potential:** High / Medium / Low / Unknown

---

## Recovery Cohort

*Pages that gained meaningful traffic during the cohort window (File B, ~Jan 2025 → Jul 2026). Ranked by absolute traffic gain. Pages sourced from the Concentration of Gain table in the source analysis.*

*AIO note: /glossary/email-campaign is cited within the AIO on its primary query (email marketing campaigns) while also ranking organically at position 4 — a dual-presence pattern that is a positive durability signal, not an interception event.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Recovery Pattern | Candidate Driver | Conf. | Wayback | Durable Demand Signals | Outcome |
|---|-----|-----------|-----------|---------|-------------------|-----------------|-----------------|-------|---------|----------------------|---------|
| 1 | /glossary/email-campaign | +22,790 | Conceptual | Low-Medium | Definitional | Single-query breakout | Page rewrite or expansion / Algorithmic reevaluation | M | Checked (Sep 2023 vs. current — major rewrite confirmed; timing unresolved) | Requires workflow, Brand destination, Repeat engagement | Promote |
| 2 | /es/tools/whatsapp-link-creator | +11,674 | Utility | Low | Tool-Utility | Long-tail expansion | Demand growth / SERP composition change | L | Not checked | Tool or interactive, Renewable demand | Promote |
| 3 | /de | +3,728 | Programmatic | Medium | Various | Long-tail expansion | Unknown — locale page recovery, mechanism not investigated | L | Not checked | — | Promote |
| 4 | /blog/best-online-learning-platforms | +2,656 | Editorial | Medium | Comparative | Single-query breakout | Unknown — off-topic page; mechanism unrelated to email marketing decline story | L | Not checked | Requires comparison | Promote |
| 5 | /glossary/email-etiquette | +2,175 | Conceptual | Medium | Definitional | Broad ranking recovery | Algorithmic reevaluation / Unknown | L | Not checked | Requires workflow (email practice) | Promote |

**Recovery cohort structural note:** This recovery profile is notably different from Gong's. At Gong, the recovery cohort included 7 Commercial Evaluation pages and 7 Methodological content pages — broad, structurally meaningful categories. At ActiveCampaign, recovery gains are concentrated in one page (glossary/email-campaign = 30.6% of all gross gain), one locale utility tool, one locale page, one off-topic editorial post, and one glossary page. The recovery pattern is fragmented and lacks the category-level coherence that Gong's showed. This matters for mechanism assessment: it is harder to claim a systematic Algorithmic Reassessment recovery story when the recovery pages span unrelated archetypes and query types.

### Recovery Cohort — Elimination Matrix

*Wayback check completed for /glossary/email-campaign only.*

| URL | Rewrite? | AIO present? | Links changed? | SERP replaced? | Eliminated | Surviving candidates |
|-----|----------|-------------|----------------|----------------|------------|---------------------|
| /glossary/email-campaign | Yes — major rewrite confirmed (Sep 2023 old: ~300-word FAQ / current: comprehensive 8–10× educational guide) | Yes — AC cited within AIO; also ranks organically at #4 | Not tested | N/A — page is gaining, not losing | Template-only explanation eliminated; AIO-displacement explanation eliminated (page cited within AIO, not replaced) | Page rewrite or expansion (confirmed co-occurring; timing unresolved); Algorithmic reevaluation toward comprehensive educational format; AIO citation as a ranking reinforcement mechanism |
| /es/tools/whatsapp-link-creator | Not checked | Not tested | Not tested | Not tested | None eliminated | Demand growth (WhatsApp link tools are a growing utility category); Algorithmic reevaluation |
| /glossary/email-etiquette | Not checked | Not tested | Not tested | Not tested | None eliminated | Algorithmic reevaluation; Unknown |

---

## Decline Cohort

*Pages that lost meaningful traffic during the cohort window. Source: confirmed page-level data from source analysis + content-type aggregate evidence for unconfirmed blog/glossary losses. Ranked by approximate absolute traffic loss.*

*Decline attribution note: the full URL-level decline list was not enumerated. Rows 1–4 are individually confirmed from source analysis. Row 5 represents the aggregate blog category; specific URLs within this category are not individually listed here — that step requires the full sorted export. The aggregate evidence supports treating the blog category as a systematic decline cohort.*

| # | URL | Traffic Δ | Archetype | AI Sub. | Primary Query Type | Decline Pattern | Candidate Driver | Conf. | AIO Check | Durable Demand Signals | Recovery Potential | Outcome |
|---|-----|-----------|-----------|---------|-------------------|----------------|-----------------|-------|-----------|----------------------|-------------------|---------|
| 1 | / (homepage) | −15,025 (cohort window: 136,261→121,236; note: recovered +40,679 in recovery window) | Homepage | Low | Brand | Gradual position erosion / Trough-and-recovery | Broad portfolio decline redistributed through homepage; partial recovery in progress | M | N/A — brand queries | Brand destination | High — recovery already underway (+40,679 in Dec 2025→Jul 2026) | Abandon (cohort window net); recovering |
| 2 | /blog/sales-development-representative | −2,191 (2,198→7, −99.7%) | Conceptual | High | Definitional | Keyword disappearance | Algorithmic Reassessment (content-type deprioritization of vendor-blog definitional career/job content) | M-H | Not tested — SERP replacement analysis pending | AI-answerable | Low — unchanged content; query type is structurally AI-answerable | Abandon |
| 3 | /pricing | −2,418 (cohort window, −33.5% in keyword data) | Commercial Evaluation | Low-Medium | Commercial investigation | Stable rankings + traffic decline | SERP Feature Displacement (PAA at #2, AIO at #4 not citing pricing page, review sites at #5–12) | M | Confirmed — AIO at position 4 (does not cite pricing page); PAA at position 2 | High commercial intent, AI-answerable (pricing facts) | Medium — holds position 1; recovery depends on SERP composition change | Abandon (cohort window) |
| 4 | /free-marketing-tools/subject-line-generator | −2,169 (prev=2,169, curr=0) | Utility | Medium | Tool-Utility | Ranking collapse (URL migration + competitive displacement) | URL migration + AI tool competitive displacement | H (migration) / M (competitive structure) | Confirmed — AI-native tools at positions 1–6; AC at position 7 on new URL | Tool or interactive | Low — competitive displacement by AI-native tools is structural | Abandon (old URL) |
| 5 | Blog category — aggregate (multiple URLs, not individually enumerated) | −36,796 net (−50,662 gross loss across blog category, File B) | Conceptual / Editorial (mixed) | Medium-High (inferred from content type distribution) | Definitional (dominant inferred) | Keyword disappearance / Ranking collapse (inferred from SDR pattern + aggregate magnitude) | Algorithmic Reassessment of definitional blog content — SDR page provides confirmed case; aggregate magnitude (−50,662 gross loss) is inconsistent with an isolated event | M — aggregate consistent with systematic deprioritization; full URL review not completed | Not tested at page level; AIO overlap at portfolio level is 37.9% of keywords (53.2% of traffic) | AI-answerable (dominant signal inferred) | Low to Medium — depends on degree to which individual pages are AI-answerable vs. workflow-oriented | Abandon (aggregate) |

**Lost URLs (prev > 0, curr = 0): 1,046 pages.** These are the most extreme decline cohort members — pages that had measurable traffic and now have zero. At Gong, the analogous group included entire retired product pages and migration artifacts. At ActiveCampaign, 1,046 lost URLs are consistent with a combination of content pruning, URL migrations (like the subject line generator), and organic keyword index collapse on individual pages. Without the full sorted list, the composition is unknown.

**Homepage note:** The homepage appears as a decline cohort member in the cohort window (−15,025 net) but is the top recovery page in the recovery window (+40,679 in File A). Strategically, this page should not be classified as at risk — the cohort-window net decline reflects the trough that all cohort companies experienced; the recovery is strong and already underway. The cohort-window Abandon classification is a data artifact of the window endpoints, not a strategic judgment.

### SERP Replacement Analysis

*Completed from SERP overview exports (Aug 2026). SDR replacement analysis is pending — manual SERP inspection for major lost queries not yet completed.*

| URL | Top Lost Query | Former Est. Position | Current SERP Occupant | Occupant Type | Implication |
|-----|---------------|---------------------|----------------------|---------------|-------------|
| /pricing | activecampaign pricing | 1 (still holding) | AIO at #4 (cites help docs + review sites, not pricing page); PAA at #2; review sites at #5–12 | SERP feature stack surrounding position-1 organic | Traffic loss without ranking loss — click interception by surrounding features is the mechanism candidate |
| /platform/sales-crm | active campaign crm | 1 (still holding) | AIO at #2 citing AC's own page; PAA at #3 | AI Overview (cites AC) | Dual presence — AIO cites the page; CRM page holds #1. AIO-interception mechanism is less supported here than for pricing |
| /tools/subject-line-generator (current URL) | email subject line generator | 7 (current position on new URL) | AI-native tools at positions 1–6 (yamm, copy.ai, omnisend, stensul, mailmeteor, jasper.ai) | Competing product pages — AI-native tools | Competitive displacement by product type — not an algorithm or AIO story |
| /blog/sales-development-representative | sales development representative / what is a sales development representative | 0 (lost completely from previously position 1) | Unknown — manual SERP inspection required | Not tested | This is the most important pending test: what currently holds positions 1–5 for these queries? AIO, career sites, Wikipedia, or competitors? The answer determines whether this is Algorithmic Reassessment, SERP format displacement, or competitive displacement |

**Highest-priority pending test:** Current SERP occupants for `/blog/sales-development-representative` primary queries. The SDR page went from position 1 to position 0 across 711 keywords. If the current position 1 is an AI Overview, that's AIO displacement. If it's LinkedIn, Indeed, or career sites, that's source-type preference shift (Algorithmic Reassessment). If it's a competitor blog, that's competitive displacement. The mechanism diagnosis for this page — and for inferring the blog category pattern — depends on this test.

---

## Stable Cohort *(partial — selected pages only)*

*The stable cohort was not formally enumerated at URL level. The following pages are confirmed or inferred to have held traffic within a ±20% band in the cohort window, based on source analysis data.*

| # | URL | Traffic Δ (approx.) | Archetype | AI Sub. | Primary Query Type | Durable Demand Signals | Outcome |
|---|-----|---------------------|-----------|---------|-------------------|----------------------|---------|
| 1 | /platform/sales-crm | Net +1,153 (platform category); −924 on primary keyword, position 1 held | Commercial Evaluation | Low | Commercial investigation | High commercial intent, Requires comparison | Preserve (rankings stable) |
| 2 | /blog/company-slogans | −6,343 (cohort window) / +8,911 (recovery window); net approximately flat depending on sub-window | Editorial/Conceptual | Medium | Navigational/Other | Brand destination (unusual — slogans query is generic) | Mixed — pending Wayback review |

*Note: /blog/company-slogans does not cleanly fit Preserve — it declined in the cohort window and recovered in the recovery window. Its inclusion in the stable cohort depends on which window is used. Wayback comparison not completed; mechanism unknown. Listed here for reference rather than formal stable classification.*

---

## Durable Demand Assessment

*Full evidence for signal assignments. Assessed for top 3 recovery pages and top 3 decline pages by strategic importance. Strength: Strong / Moderate / Weak / None.*

---

### /glossary/email-campaign — +22,790 (cohort window)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | Email marketing campaigns are a recurring practitioner need — marketers plan campaigns on quarterly or monthly cycles; the need to reference strategy content recurs, though the specific visit may not |
| Requires judgment | Moderate | The page covers types of email campaigns, segmentation strategy, and campaign construction; the user must select appropriate campaign types for their specific audience and goals — not a pure fact lookup |
| Requires workflow | Strong | Current page includes a 7-step "Building your first email campaign" section; the user is expected to execute, not just read — the workflow persists after the page is closed |
| Requires comparison | Moderate | 7 distinct campaign types are explained; the user must choose which type fits their strategy — comparative evaluation is embedded in the content |
| Proprietary data | None | Framework is generic; no AC-proprietary data is the primary draw |
| Tool or interactive | None | Pure editorial |
| Community or network | None | |
| Brand destination | Moderate | "Email marketing campaigns" is a generic query, but AC is cited within the AIO and ranks organically at #4 — dual presence is partially a brand authority signal; users clicking through the AIO citation have effectively chosen AC as the source |
| Renewable demand | Moderate | Email marketing campaign planning recurs on a regular cycle for practitioners; new campaign cycles create new demand instances |
| AI-answerable | Weak | The query is partially answerable by AI (definition, types), but the page's expanded format — workflow, case study, types with strategy implications — makes it a reference rather than a lookup; AC being cited *within* the AIO means Google considers this page an authoritative source for the AI answer itself, not a page the AIO displaces |
| High commercial intent | None | Practitioner educational query; user is building campaigns, not evaluating a purchase |

---

### /es/tools/whatsapp-link-creator — +11,674 (cohort window)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | A WhatsApp link creator is used on an as-needed basis when setting up campaigns or sharing links; marketers with recurring WhatsApp campaigns return to the tool, though not on a fixed cycle |
| Requires judgment | None | The user inputs parameters (phone number, message) and generates a link — no judgment required |
| Requires workflow | Strong | The user must complete an action (generate a link) that cannot be done without the tool; the task is not complete until the link is created and tested |
| Requires comparison | None | Utility tool with a single function |
| Proprietary data | None | |
| Tool or interactive | Strong | Primary value is the artifact (the generated WhatsApp link) — an AI response cannot produce this link for the user's specific phone number and message |
| Community or network | None | |
| Brand destination | Weak | Spanish-language users searching for a WhatsApp link generator are not specifically seeking ActiveCampaign; the tool is the draw, not the brand |
| Renewable demand | Strong | WhatsApp campaign links are created regularly for ongoing marketing programs; the structural cycle of campaign operations recreates the demand |
| AI-answerable | Weak | AI can explain *how* to create a WhatsApp link; it cannot execute the link creation for the user's specific parameters in the way this tool does |
| High commercial intent | Weak | Functional tool query — the user is executing a task, not evaluating a purchase, though the tool creates passive brand exposure for users who may later evaluate AC as an email/WhatsApp platform |

---

### /blog/best-online-learning-platforms — +2,656 (cohort window)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | None | One-time research query; platforms don't change frequently enough to warrant re-reading |
| Requires judgment | Moderate | Platform selection requires evaluating fit for team size, budget, content types, and learning goals; no single answer applies universally |
| Requires workflow | None | Informational guide; no execution is built into the page |
| Requires comparison | Strong | The page is structured as a comparison guide for eLearning platforms — the user is explicitly evaluating options |
| Proprietary data | None | |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | None | "Best online learning platforms" has no brand intent — users are not seeking AC's perspective specifically |
| Renewable demand | None | No structural cycle recreates the need |
| AI-answerable | Moderate | AI can produce a list of learning platforms with pros/cons; the page adds value through structured comparison and editorial curation, but AI can approximate this content |
| High commercial intent | Moderate | "Best" queries carry commercial investigation intent — user is evaluating options before a purchase |

*Assessment note: this is an off-topic page for ActiveCampaign — an email marketing platform ranking for "best online learning platforms." It gained traffic in the cohort window, likely through domain authority applied to an informational topic. Its Durable Demand properties are moderate at best. The gain is real but should not be interpreted as evidence for a durable recovery mechanism — it is an SEO opportunism pattern, not a practitioner-demand match.*

---

### / (homepage) — −15,025 (cohort window)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Moderate | Brand-intent users return to the homepage periodically as a navigation anchor; returning customers also pass through |
| Requires judgment | None | Informational brand page; user is orienting, not evaluating or executing |
| Requires workflow | None | |
| Requires comparison | None | |
| Proprietary data | Strong | Only ActiveCampaign can present ActiveCampaign's product, pricing, and positioning directly — this content cannot be replicated elsewhere |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Strong | Homepage traffic is primarily navigational brand intent — users are coming specifically to learn about or access ActiveCampaign. AI summaries cannot fully substitute the brand experience or the navigation function |
| Renewable demand | Moderate | Ongoing customer base returns periodically; new evaluator demand is continuous for a SaaS brand of this scale |
| AI-answerable | Weak | While AI can summarize what ActiveCampaign does, the navigation and brand-experience functions of the homepage cannot be replicated in an AI answer |
| High commercial intent | Moderate | A meaningful share of homepage traffic comes from buyers in evaluation mode; late-stage evaluators navigate directly to the homepage before purchasing |

*Assessment note: the homepage declined in the cohort window primarily because of the company's trough in Dec 2025 (−31.2% from May 2025 local peak). It has since recovered strongly (+40,679 in Dec 2025→Jul 2026). This Durable Demand profile explains why the homepage recovered — brand intent is AIO-resistant, and the homepage serves navigational + brand functions that do not get displaced by AI answers. Recovery Potential: High (confirmed — already recovering).*

---

### /blog/sales-development-representative — −2,191 (−99.7%)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | None | One-time reference; SDR definition does not change, so users have no structural reason to return |
| Requires judgment | None | The page describes what an SDR is and what the job entails — no judgment is invited; user is learning, not deciding |
| Requires workflow | None | Informational; no execution supported |
| Requires comparison | None | Single concept definition |
| Proprietary data | None | The SDR concept is public domain; AC has no unique data on sales development representatives |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | None | "Sales development representative definition" is a generic educational query with no brand intent — users are not seeking AC's perspective |
| Renewable demand | None | Definition content has no structural cycle recreating demand |
| AI-answerable | Strong | The SDR definition is textbook public knowledge — what an SDR is, what they do, and how the role fits in a sales org is fully and accurately answerable by any well-trained AI. This is among the most AI-substitutable query types in the B2B SaaS content universe |
| High commercial intent | None | Educational career/role query; the intent is to understand a job function, not to evaluate a purchase |

*Assessment note: identical mechanism to Gong's Sandler Selling Method (−81%) and Miller Heiman (−97%) pages. Zero Durable Demand properties except AI-answerable (Strong). The near-complete abandonment (2,198 → 7) is the predictable outcome for content with no durability properties in an AI-disrupted SERP. The key unresolved question is the replacement analysis: what now occupies positions 1–5 for "sales development representative"? If it is an AI Overview, this is AIO displacement. If it is career/job sites (LinkedIn, Indeed, Glassdoor), this is source-type preference shift (Algorithmic Reassessment toward authoritative employment sources). Either way, Recovery Potential for this specific page is Low — the query is AI-answerable and vendor blog authority on role definitions appears to have been devalued.*

---

### /pricing — −2,418 (cohort window)

| Property | Strength | Evidence |
|----------|----------|----------|
| Repeat engagement | Weak | Users check pricing during evaluation and periodically during annual renewal — not a high-frequency return page |
| Requires judgment | Strong | SaaS pricing evaluation requires comparing plans against team size, feature requirements, budget constraints, and competing options — no general answer applies to a buyer's specific situation |
| Requires workflow | None | Research page, not an execution workflow |
| Requires comparison | Strong | Plan comparison is a primary function; buyers evaluate tiers against each other and against competitors |
| Proprietary data | Strong | Only ActiveCampaign can publish the official, current price of its own plans — any third-party source (including AI) may be out of date |
| Tool or interactive | None | |
| Community or network | None | |
| Brand destination | Strong | "Activecampaign pricing" is a branded query — users are specifically seeking AC's pricing; navigational brand intent is fully embedded |
| Renewable demand | Weak | Annual renewals create mild structural recurrence, but the primary pricing lookup is periodic, not structurally renewable |
| AI-answerable | Moderate | AI can summarize pricing tiers from third-party sources or training data, but prices change; the AIO at position 4 cites review sites and help docs rather than the pricing page itself, suggesting Google's AI cannot reliably answer from the official source. Authoritative pricing belongs to the brand, not to AI summaries |
| High commercial intent | Strong | "Activecampaign pricing" = active buying evaluation; user is at or near the purchase decision |

*Assessment note: this page has strong Durable Demand properties — proprietary data, high commercial intent, brand destination, requires judgment + comparison. Yet it is declining. This is the most diagnostic case in the portfolio for SERP Feature Displacement as a standalone mechanism: the page holds position 1, the organic ranking is not the problem, but surrounding features (PAA, AIO citing competitors, review-site results) intercept clicks before users reach the official page. Recovery Potential: Medium — a SERP composition change or structured data optimization could help, but the page itself is not the problem.*

---

## Candidate Durability Principles

*Staged before Evidence Register entry. Not yet registered — awaiting cross-company replication.*

---

### Supported

*Observed in this portfolio, mechanism plausible, consistent with Gong evidence. Strong enough to carry as a working hypothesis into the next analysis.*

| Candidate Principle | Observed Evidence in This Portfolio | What Would Weaken It |
|--------------------|-------------------------------------|----------------------|
| Vendor-blog definitional content with no durable demand properties (no workflow, no judgment, no renewable demand, fully AI-answerable) loses near-complete ranking visibility during algorithmic reassessment events | /blog/sales-development-representative lost 711 of 716 keywords (99.7% traffic loss) without content change. Page has zero Durable Demand properties except AI-answerable (Strong). Pattern matches Gong's Sandler (−81%), Miller Heiman (−97%), BANT (−60%) collapses — same Durable Demand profile, same outcome | A definitional vendor-blog page with the same Durable Demand profile (all signals Weak/None) that held or recovered traffic in a comparable window, or evidence that the SDR collapse preceded AI Overview deployment on those queries |
| A single comprehensively rewritten educational resource can drive the majority of a portfolio's organic traffic recovery in a post-reassessment window | /glossary/email-campaign drives 30.6% of all cohort-window gross gain single-handedly. Major rewrite confirmed (thin FAQ → comprehensive educational guide). AC's recovery is not broad — this one page does nearly a third of all the lifting | A comparable rewrite of a similarly thin page on another domain that failed to recover despite format parity; or evidence that the rewrite is not the cause (an intermediate Wayback snapshot showing the page gaining before the rewrite was complete) |
| SERP Feature Displacement causes commercial page traffic loss without ranking loss — the position-1 holder continues to hold position 1 while surrounding PAA, AIO, and review-site results capture the clicks | /pricing holds position 1 on "activecampaign pricing" yet loses 33.5% of keyword-derived traffic. PAA at #2, AIO at #4 (citing review sites, not the pricing page), review sites at #5–12. Same pattern on /platform/sales-crm (holds #1, AIO at #2 capturing intent). Consistent with Gong's /pricing (stable, −7%) | A position-1 commercial page with the same SERP stack (PAA + AIO + review sites) that held traffic and did not decline, suggesting other factors dominate |

---

### Emerging

*Observed in this portfolio but mechanism is uncertain or a confound exists. Requires replication.*

| Candidate Principle | Observed Evidence | Confound / Uncertainty | What Would Weaken It |
|--------------------|-------------------|----------------------|----------------------|
| Pages that are cited within an AI Overview recover rather than decline on the primary query — AIO citation is a distribution amplifier, not a click interceptor, for high-authority pages | /glossary/email-campaign is cited within the AIO for "email marketing campaigns" and ranked at position 4 organically; it is the top gainer in both the cohort and recovery window. AC appears twice on the SERP — once in the AIO block, once in organic results | Confound: the page also underwent a major rewrite (confirmed by Wayback), and the AIO citation may have followed the rewrite rather than driving the recovery. Impossible to separate content quality improvement from AIO citation effect without an intermediate timestamp | A comparable comprehensive educational page on a different domain that was cited in an AIO but still declined, or evidence that the page's traffic growth predates AIO citation on the query |
| Utility/tool pages serving an action-completing function (not just information-providing) retain search visibility despite AI disruption of surrounding informational queries | /es/tools/whatsapp-link-creator gained +11,674 in the cohort window despite the surrounding portfolio declining. The tool completes an action (creates a WhatsApp link) that AI cannot perform — the user must visit the page to get the artifact | Confound: this is a Spanish-language tool page gaining primarily in non-US markets; the comparable English-language tool (subject line generator) lost significant traffic and is now displaced by AI-native tool competitors. The WhatsApp gain may reflect demand growth in the WhatsApp category (Latin American markets), not a durability effect | Evidence that the WhatsApp link creator's traffic gains are explained by demand growth (rising WhatsApp marketing adoption) rather than category-specific durability; a comparable action-completing tool that declined despite the same mechanism |
| Blog category aggregate loss of this magnitude (−50,662 gross loss across blog content type, −14.1% in keyword data) is inconsistent with a small number of isolated failures — it signals systematic deprioritization of a content type or format | 50,662 gross loss from the blog category across the cohort window, with an offset rate of approximately 3.6× (blog gross loss ÷ blog gross gain). SDR page provides the confirmed case study; the aggregate magnitude implies many similar URLs were also affected | Confound: the full URL-level decline list was not enumerated. It is possible that a small number of very high-traffic blog pages drove the majority of the aggregate loss, making the pattern less "systematic" than the aggregate implies. Full URL review required to confirm | Evidence that the top 5 blog losers by absolute traffic account for >80% of the total blog gross loss, suggesting concentration rather than breadth |

---

### Not Supported

*Hypotheses this analysis had the opportunity to test and found insufficient support for.*

| Hypothesis | Why Not Supported in This Portfolio |
|-----------|-------------------------------------|
| Broad domain-level link decline explains the traffic drop | Referring domains grew +25.4% (43,653 → 54,738) over the cohort window. Link volume is not the mechanism. Page-level or content-type level signals are required. |
| Category-wide contraction explains the decline | Major direct peers (Mailchimp +17.2%, Klaviyo +29.5%, Mailerlite +17.9%) gained substantially during the same window. The decline is site-specific. |
| Recovery is broad and indicates portfolio-wide stabilization | The gross-loss offset rate in the recovery window is 0.962 — nearly all recovery gains are offset by continuing losses elsewhere. Two pages account for 49% of recovery gross gain. The portfolio as a whole is not stabilizing broadly. |
| AIO overlap causes uniform decline across the AC portfolio | AIO-overlap keywords in the current export grew from 106,466 to 161,655 in traffic — AIO keywords gained while non-AIO keywords declined. This is the AIO paradox (AC cited within AIO gaining traffic while non-AIO keywords lose). The relationship is not uniform or consistently negative. |

---

## Portfolio Comparison

*Aggregate cohort findings into patterns. Based on confirmed page-level data and content-type aggregates.*

### Archetype Distribution

| Archetype | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-----------|-------------------|------------------|------------------|---------------|
| Conceptual | 2 (email-campaign, email-etiquette) | 1+ (SDR + many unconfirmed blog pages) | 0 | → Mixed: comprehensive educational Conceptual → Promote; thin definitional Conceptual → Abandon |
| Methodological | 0 confirmed | 0 confirmed | 0 confirmed | Not represented in confirmed cohort; unknown in unreviewed blog population |
| Commercial Evaluation | 0 | 1 (pricing) | 1 (CRM — position stable) | → Stable rankings / SERP Feature Displacement |
| Comparative | 1 (best-online-learning-platforms — off-topic) | 0 | 0 | → Promote (off-topic content — not interpretable for mechanism) |
| Programmatic | 1 (/de locale) | 1 (/free-marketing-tools old URL — migration) | 0 | → Mixed |
| Utility | 1 (/es/tools/whatsapp-link-creator) | 1 (subject line generator displaced by competitors) | 0 | → Mixed: action-completing tool in growing demand area → Promote; tool with AI-native competitive displacement → Abandon |
| Original Research | 0 | 0 | 0 | Not represented |
| Homepage | 0 (net decline in cohort window; recovering in recovery window) | 1 | 0 | → Trough-and-recovery; brand intent is inherently durable |
| Editorial | 0 | 0 | 1 (company-slogans — volatile, pending) | → Uncertain |

### AI Substitutability Distribution

| AI Substitutability | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|--------------------|-------------------|------------------|------------------|---------------|
| Low | 2 (email-campaign, WhatsApp tool) | 1 (pricing — despite Low AI Sub, SERP Feature Displacement operates) | 1 (CRM) | → Generally Preserve/Promote; SERP Feature Displacement can override |
| Medium | 3 (de locale, best-online-learning, email-etiquette) | 1 (subject line generator) | 0 | → Mixed |
| High | 0 | 1+ (SDR + aggregate blog) | 0 | → Abandon |

### Primary Query Type Distribution

| Primary Query Type | Recovery (promote) | Decline (abandon) | Stable (preserve) | Net direction |
|-------------------|-------------------|------------------|------------------|---------------|
| Brand | 0 (homepage technically in decline cohort; recovering) | 1 (homepage — cohort window net) | 0 | → Durable — brand intent recovers; see homepage note |
| Commercial investigation | 0 | 1 (pricing) | 1 (CRM) | → Stable rankings but CTR pressure; SERP Feature Displacement mechanism |
| Definitional | 2 (email-campaign + email-etiquette) | 1+ (SDR + blog aggregate) | 0 | → Bifurcated: comprehensive educational Definitional → Promote; thin Definitional → Abandon |
| Methodological | 0 | 0 | 0 | Not represented in confirmed cohort |
| Comparative | 1 (best-online-learning) | 0 | 0 | → Promote (off-topic; not interpretable) |
| Navigational | 0 | 0 | 0 | — |
| Tool-Utility | 1 (WhatsApp link creator) | 1 (subject line generator) | 0 | → Mixed: growing category + action-completing → Promote; mature category + AI-native competitor → Abandon |

### Durable Demand Signal Frequency

| Signal | Recovery cohort | Decline cohort | Stable cohort | Pattern |
|--------|----------------|----------------|---------------|---------|
| Repeat engagement | 1 (email-campaign) | 0 | 0 | Recovery signal when present |
| Requires judgment | 2 (email-campaign, best-online-learning) | 1 (pricing — but declining via SERP features) | 1 (CRM) | Recovery/Preserve when content is the gating factor; SERP features can override even with strong signal |
| Requires workflow | 2 (email-campaign, WhatsApp tool) | 0 | 0 | Strong recovery signal — pages requiring action or execution appear protected |
| Requires comparison | 2 (email-campaign, best-online-learning) | 1 (pricing — held by SERP Feature Displacement, not content failure) | 1 (CRM) | Recovery/Preserve signal at content level; SERP features create a separate risk layer |
| Proprietary data | 0 recovery | 1 (pricing — only AC can publish AC's prices) | 1 (CRM) | Present in stable/declining commercial pages — proprietary data is durability-positive but SERP Feature Displacement operates above this level |
| Tool or interactive | 1 (WhatsApp tool) | 0 | 0 | Recovery signal — action-completing tools are hard for AI to substitute |
| Community or network | 0 | 0 | 0 | Not present in this portfolio |
| Brand destination | 2 (email-campaign, homepage-cohort-context) | 1 (pricing — branded query, but SERP features intercept) | 1 (CRM) | Protect/preserve signal at content type level; SERP Feature Displacement can intercept even brand-destination pages |
| AI-answerable | 0 recovery | 1+ (SDR + blog aggregate) | 0 | Abandon signal — appears consistently predictive |
| High commercial intent | 0 recovery | 1 (pricing — declining via SERP features despite strong signal) | 1 (CRM — stable) | Preserve/Stable signal overall; SERP Feature Displacement creates exceptions |
| Renewable demand | 1 (WhatsApp tool) | 0 | 0 | Recovery signal when present |

### Observed Portfolio Patterns

1. **The blog category aggregate loss (−50,662 gross loss, −36,796 net) is inconsistent with isolated failure.** The SDR page is the confirmed case study, but the magnitude of blog gross loss implies systematic rather than isolated decline across the blog content type. Without the full URL-level review, this cannot be confirmed at the page level — but the aggregate is a strong directional signal that the SDR pattern repeated across a meaningful portion of the blog cohort.

2. **Recovery is concentrated in one comprehensively rewritten educational resource.** /glossary/email-campaign alone accounts for 30.6% of cohort-window gross gain (22,790 of 74,592). The recovery profile at ActiveCampaign is much narrower than Gong's, where 7 commercial evaluation pages and 7 methodological pages all recovered — suggesting the systematic recovery mechanism was less broad here. Content expansion on a single page drove most of the observable recovery.

3. **Two distinct decline mechanisms operate simultaneously across different portfolio segments — and they require different responses.** Blog definitional content (SDR, and likely many other blog pages) declined through algorithmic deprioritization of AI-answerable vendor-content. Commercial pages (pricing, CRM) declined through SERP Feature Displacement despite holding position 1. These are different problems — one is a content quality/type problem, the other is a SERP composition problem. A single intervention strategy cannot address both.

4. **The WhatsApp link creator tool gaining +11,674 in Spanish-language markets points to a demand-growth story separate from the decline mechanism.** This page's recovery is attributable to rising WhatsApp marketing adoption (a structural demand shift), not to algorithmic improvement. Its gain is real but should not be interpreted as evidence that tool pages are broadly recovering — the English-language subject line generator simultaneously lost its competitive position to AI-native tools.

5. **AI Overview citation on the glossary/email-campaign page produces a dual-presence pattern (AIO citation + organic ranking) rather than displacement.** This is consistent with the hypothesis that pages meeting Google's quality bar for AIO citation are amplified, not replaced, by the AI overview layer. The bifurcation within the portfolio — some pages cited in AIO, other pages displaced by AIO — appears to correlate with content depth and format, not domain authority alone.

---

## Evidence Register Contributions

| Field | Value |
|-------|-------|
| **Strengthens** | Any existing entry on AI-answerable definitional content being systematically devalued during algorithmic reassessment events (consistent with Gong findings); any entry on SERP Feature Displacement as a mechanism for position-1 pages losing traffic without losing rankings |
| **Challenges** | None identified |
| **Creates** | Candidate for new entry: "A single comprehensively rewritten educational resource, when achieving AIO citation status, can drive the majority of a portfolio's recoverable organic traffic gains — while the rest of the portfolio continues net-declining." Requires cross-company replication before formal registration. |

**Open questions this analysis created:**

1. **SDR SERP replacement is unconfirmed.** What currently holds positions 1–5 for "sales development representative," "what is a sales development representative," and "sdr meaning sales"? The answer determines whether the mechanism is AIO displacement, source-type preference shift (career sites), or competitive displacement. This is the most important pending test for the Algorithmic Reassessment mechanism classification.

2. **Blog cohort composition at URL level.** The −50,662 blog gross loss aggregate implies systematic decline, but it could be explained by 3–5 very high-traffic blog pages rather than breadth. A full URL-level sort of the decline cohort within the blog prefix would determine whether the SDR pattern holds across 10+ pages or is concentrated in a few.

3. **Does the email-campaign page AIO citation precede or follow the ranking recovery?** The current SERP shows AIO citation, and the current traffic shows strong recovery. But which came first — the comprehensive rewrite, the ranking recovery, or the AIO citation? An intermediate Wayback snapshot (e.g., 2024–mid-2025) could reveal the sequence.

---

**Mechanism assessment update for company record:** Based on this analysis, the Mixed mechanism label is supported and can be partially specified:

- **Blog definitional content:** Algorithmic Reassessment — consistent with the Gong finding; SDR page is the confirmed case; aggregate blog loss supports systematic breadth
- **Commercial pages (pricing, CRM):** SERP Feature Displacement — operating independently; position-1 pages losing traffic through surrounding SERP features, not ranking loss
- **Tool pages:** AI-native competitive displacement (subject line generator) vs. demand growth (WhatsApp tool) — separate third mechanism
- **Recovery:** Associated with one major content expansion (glossary) and one emerging demand category (WhatsApp utility tool) — narrow, not portfolio-wide

The company-level mechanism should be updated to: **Mixed — three mechanisms in different portfolio segments: (1) Algorithmic Reassessment affecting blog definitional content, (2) SERP Feature Displacement affecting commercial pages, (3) AI-native competitive displacement affecting tool pages. Recovery driven by content expansion on single glossary page + demand growth in WhatsApp utility tool category.**

---

*Analysis completed: 2026-08-04 | Status: Draft — SDR SERP replacement analysis and full URL-level blog decline review pending*
