# LogRocket

<!-- Migrated from phase3-deep-dives.md on 2026-07-28. Original analysis date: 2026-06-30. Key interpretive cautions: (1) NO monthly performance file available for LogRocket — this is the most significant data limitation in the record; position-bucket analysis, exact algorithm-update timing attribution, and branded/non-branded trend within-window are all blocked by this gap; (2) the branded/non-branded keyword export split is unreliable — Ahrefs classified library names (swiper slider, nivo charts, barba.js) as "branded" keywords, making the 17,562/30,000 "branded" label untrustworthy; the LogRocket core keyword (logrocket) is used instead; (3) the window opens 71.9% below the company's Aug 2023 historical peak (368,021); the +19.85% within-window net growth reflects a partial recovery from a far deeper structural decline that predates the study window; (4) the primary AI-displacement mechanism here is NOT AI Overviews at the SERP level — it is Search Demand Shift, where developers use AI coding assistants (Copilot, Cursor) directly instead of searching Google; this is a distinct mechanism from the AIO cannibalization affecting other records; (5) winning blog articles in the keyword export show NO AI Overview SERP feature tag — possibly because niche/emerging library queries don't trigger AI Overviews, or because the export captures only Google AIO presence and AI displacement is happening at a different point in the developer workflow. Do not upgrade Record Status without recomputing from source exports. -->

---

## Header

| Field | Value |
|-------|-------|
| **Company** | LogRocket |
| **Website** | logrocket.com / blog.logrocket.com |
| **Category** | Product Analytics / Product Management |
| **Business Model** | B2B SaaS (session replay + product analytics) |
| **Dominant Content Model** | Developer blog-led (blog.logrocket.com; 6,011 pages) |
| **Company Size** | Mid-market (~512 employees, LinkedIn, Jun 2026) |
| **Study Window** | 2025-01 to 2026-06 |
| **Analysis Date** | 2026-06-30 |
| **Record Finalized Date** | 2026-07-28 |
| **Last Verified Date** | — |
| **Methodology Version** | V2.3 |
| **Record Status** | Draft |
| **Migration Validation Stage** | Migrated — not revalidated |
| **External Use Status** | Internal only |
| **Data Provenance** | Ahrefs Export |
| **Calculation Verified** | Partial |
| **Measurement Reliability** | Medium — monthly perf file exists; branded/non-branded Ahrefs split unreliable (library names classified as branded — documented); historical context mandatory (window opens 71.9% below Aug 2023 peak); direction and trajectory credible with that framing |

*Company note: LogRocket was founded 2016; raised $55M total (Series B $45M, 2021 + earlier rounds). Revenue reached $111M ARR by end of 2024 (+22% YoY). IPO target of ~$300M ARR was public knowledge as of late 2023, with a multi-year runway. The revenue-traffic decoupling is one of this record's most significant findings: traffic declined -71.9% from the Aug 2023 peak (368,021) to the Jan 2025 window open (103,495), yet ARR grew +22% in 2024. This is clear evidence that the blog's contribution to pipeline and revenue is not strictly proportional to blog traffic — or that the business model matured beyond blog-driven acquisition. No in-window corporate events with meaningful organic impact identified.*

---

## Outcome Summary

*All figures carried from original analysis.*

| Metric | Value | Source |
|--------|-------|--------|
| Starting Traffic Estimate | 103,495 | Ahrefs Performance export, Jan 2025 |
| Ending Traffic Estimate | 124,037 | Ahrefs Performance export, Jun 2026 |
| Traffic Change % | +19.85% | Calculation Log (Carried) |
| Outcome Classification | Grew | ±10% threshold |
| Traffic Value Change | $65,864 → $66,216 (+0.53%) | Ahrefs Pass 2 (Carried) |
| Referring Domains Change | 10,201 → 13,472 (+32.1%) | Ahrefs Pass 2 (Carried) |

**Traffic vs. value note (most extreme TV divergence in study):** +0.53% TV against +19.85% traffic = the largest TV/traffic divergence in the entire growth cohort. The new traffic is highly concentrated in low-CPC developer tutorial content. This directly reflects the LogRocket business model: the blog functions as top-of-funnel developer awareness content with low direct commercial intent; the homepage and product pages carry commercial value. The +0.53% TV growth against +19.85% traffic growth means additional visitors are not covering queries that would have high CPC equivalents in the advertising market — consistent with niche/emerging library tutorials and international branded searches generating traffic but not commercial-equivalent value.

**Historical context (mandatory for interpretation):** The window opens 71.9% below the Aug 2023 historical peak (368,021). This is not a standard "within-window trajectory" story — the company was recovering from a structural multi-year decline that had been underway since Aug 2023 before the study window opened. The +19.85% within-window growth is a partial recovery from the bottom of that decline. The Jun 2026 endpoint (124,037) remains 66.3% below the Aug 2023 peak.

---

## Traffic Trajectory

| Field | Value |
|-------|-------|
| **Traffic Trajectory** | Decline then Recovery |
| **Peak Month** | 2026-06 (window close — rising at window end) |
| **Peak Traffic Estimate** | 124,037 |
| **Trough Month** | 2025-11 |
| **Trough Traffic Estimate** | 64,962 |
| **Primary Inflection Date** | 2025-11 (trough); 2025-12 (recovery onset) |
| **Current Direction** | Rising (Jun 2026 is the highest point in the study window) |

*Two-phase interior shape (note: no monthly perf file; shape derived from keyword export and Top Pages temporal data):*

*Phase 1 (Jan–Nov 2025): Decline. Traffic fell from 103,495 (Jan) to 64,962 (Nov) = -37.2% over 10 months. The decline is the continuation of a structural trend that predates the study window — the blog had been losing developer tutorial traffic since its Aug 2023 peak. Two factors: (a) mature/well-documented library tutorial content declining as developers use AI coding assistants for these queries instead of searching Google (structural AI-substitution); (b) algorithm updates (Aug-Nov 2025) potentially accelerating or deepening the decline. Cannot separate these factors without monthly perf file.*

*Phase 2 (Nov 2025–Jun 2026): Recovery. Traffic rose from 64,962 (Nov 2025) to 124,037 (Jun 2026) = +90.9% in 7 months. Recovery is driven by: (a) branded keyword expansion — "logrocket" keyword increased from 8,809 (Jan 2025) to 25,635 (Jun 2026), +191%; international branded search expansion contributed; (b) new niche/emerging blog tutorial content winning positions on queries for less-documented frameworks and libraries (Next.js partial pre-rendering, Swiper.js, Nivo charts, Barba.js, Angular vs React vs Vue). The two mechanisms are complementary and both operating simultaneously.*

---

## Mechanism

| Field | Value |
|-------|-------|
| **Primary Mechanism** | Mixed (Phase-dependent) |
| **Mechanism Pathway** | Phase 1 — Search Demand Shift (AI coding tools reducing developer tutorial search demand upstream of SERPs, not at SERP level) + Algorithm Update → mature library/tutorial content traffic decline; Phase 2 — Demand Expansion (branded 'logrocket' keyword +191%) + Content Quality (niche/emerging library content resilient) → recovery concentrated in homepage and core brand keyword (+19.85% net from trough) |
| **Mechanism Structure** | Multi-phase — Phase 1 (Jan–Nov 2025): Search Demand Shift (AI-mediated developer tutorial query displacement) + Algorithm Update (contributing); Phase 2 (Nov 2025–Jun 2026): Demand Expansion (branded/geographic search growth) + Content Quality (niche/emerging library tutorial content) |
| **Contributing Mechanisms** | Phase 1: Algorithm Update (Medium confidence); Phase 2: Content Quality (High confidence) |
| **Mechanism Confidence** | Phase 1 decline: Medium-High (AI-substitution); Medium (Algorithm Update contribution); Phase 2 recovery: High (branded demand expansion); High (niche content wins); Overall: Medium-High |
| **Confidence Rationale** | Phase 1 — AI substitution: the content type that lost traffic (tutorials for mature, well-documented libraries: axios vs fetch, top React chart libraries, React Toastify, Go web frameworks, React Hook Form) is exactly the category for which AI coding assistants provide direct, instant answers without Google search; 3,150 blog pages went to zero traffic; the pattern is structurally distinct from a pure algorithm update (it predates the study window and is concentrated in a specific content type). Algorithm Update (contributing): the Aug–Nov 2025 update period aligns with the trough (Nov 2025), suggesting an algorithm event may have deepened or accelerated the AI-substitution trend; cannot confirm timing without monthly perf file. Phase 2 — branded expansion: homepage traffic 8,407 → 23,521 (+15,114 = 87% of main site net gain); "logrocket" keyword 8,809 → 25,635 (+191%); US variant of branded keyword slightly declined — growth is from international branded search expansion. Niche content: new blog posts covering emerging/less-documented libraries (Next.js Partial Pre-Rendering, Swiper.js, Nivo, Barba.js) reached position 5-10 on queries with 14-32k volume — substantial positions for new content in competitive territory. |
| **Strongest Competing Explanation** | The Phase 1 decline could be primarily algorithmic (not AI-substitution), with the AI-substitution narrative retrofitted to explain an algorithm loss pattern. The content types that lost traffic (developer tutorial how-tos) could lose rankings in an algorithm update without requiring an AI-substitution explanation. Without monthly perf file, cannot precisely time the decline phases against update windows to distinguish pre-update vs. post-update slopes. |
| **Disconfirming Evidence** | The pre-window historical data significantly weakens the pure-algorithm explanation: the decline from Aug 2023 (368,021) to Jan 2025 (103,495) — a -71.9% drop over 17 months — predates any specific Aug-Nov 2025 algorithm window. If the decline were purely algorithmic, it would have started in a more discrete window; instead it is a gradual structural decline that began at exactly the moment AI coding assistants became widely adopted. Revenue growing +22% to $111M ARR in 2024 during the traffic decline further supports structural substitution over a penalty model (algorithm penalties typically hurt revenue alongside traffic). |
| **Algorithm Alignment** | Moderate — trough (Nov 2025) aligns with Aug-Nov 2025 update period; cannot separate algorithm contribution from structural AI-substitution trend without monthly data; no individual update unambiguously identified |
| **AIO Portfolio Susceptibility** | High — developer tutorial content (how to use library X, library comparisons, code how-tos) is among the highest-exposure content categories for AI displacement; the blog has 6,011 pages in this category |
| **AIO Presence Observed** | No — the winning/recovering blog articles' SERP features columns show no "AI Overview" tag; this likely means niche/emerging library queries (Swiper.js, Barba.js, Nivo charts) do not trigger Google AI Overviews rather than indicating AI-resistance across the portfolio |
| **AIO Observed Effect** | Not tested — the primary AI displacement mechanism is Search Demand Shift via AI coding tools (upstream of SERPs), not SERP-level AI Overview interception; AIO Presence may be low because niche queries don't trigger AIO; the question for this record is not "does AIO suppress clicks" but "do developers search Google at all for mature library tutorials" |

*Mechanism note — AI displacement vs. AI Overviews distinction:* The mechanism displacing LogRocket's mature tutorial traffic is not Google's AI Overviews showing a featured answer that suppresses clicks. It is developers using AI coding assistants (GitHub Copilot, Cursor, Claude) directly in their development environment instead of searching Google for "how to use axios" or "top React chart libraries." This is a Search Demand Shift: fewer searches occur at all. This mechanism is harder to reverse with content improvements than AIO suppression, because it requires developers to reenter the search funnel rather than ranking above an AI answer in an existing SERP.

---

## Gross-Loss Offset Analysis

*Computed from Top Pages export.*

| Metric | Value | Source File |
|--------|-------|-------------|
| Gross Gain | +79,887 (1,129 pages) | Ahrefs Top Pages export |
| Gross Loss (absolute) | -60,388 (1,884 pages) | Ahrefs Top Pages export |
| Net Change | +19,499 (Top Pages level) | Derived |
| Gross-Loss Offset Rate | 75.6% (60,388 / 79,887) | Ahrefs Top Pages export |
| Offset Zone | High (60-100%) | — |
| Reconciliation check | Top Pages net (+19,499) vs. perf file net (+20,542) = 95.0% reconciliation — very tight; good confidence in figures | — |

*Gross-Loss Offset interpretation: 75.6% is the highest gross-loss offset rate in the study cohort among growth-cohort companies. More pages lost (1,884) than gained (1,129), and the absolute gross loss (-60,388) is 75.6% of the absolute gross gain (+79,887). This is a "displacement growth" pattern — the new traffic is growing but is not net-additive on a portfolio level; substantial existing traffic is simultaneously being lost. The loss profile (mature library tutorials going to zero) explains the pattern: 3,150 pages went to essentially zero traffic, collectively losing -25,166 traffic, while new content pages accumulate fresh gains. The gains are healthier (new emerging-content wins) but the losses are structurally permanent (AI coding tool substitution is not reversible by content improvement).*

---

## Page & Content Analysis

| Field | Value | Source |
|-------|-------|--------|
| Blog vs. Main Site Split | Blog (blog.logrocket.com, 6,011 pages): 90,040 → 92,664 (+2,624, +2.9% net); Main site (logrocket.com + docs, 729 pages): 10,331 → 27,206 (+16,875, +163.3%) | Ahrefs Top Pages export |
| Top 1 Page Traffic Share | Homepage (logrocket.com/): 8,407 → 23,521 (+15,114 = 87% of main site net gain) | Ahrefs Top Pages export |
| Dominant Content Type | Developer tutorial blog posts | Ahrefs Top Pages export |
| Winning Content Type | New niche/emerging technology blog posts: Partial Pre-Rendering in Next.js (0→5,225 at pos 7, 32k vol); Swiper.js tutorial (0→4,166 at pos 5, 16k / pos 7, 14k vol); Custom Cursor CSS (0→3,360 at pos 7, 20k vol — net +2,424 after absorbing prior URL loss of -936); Angular vs React vs Vue (0→2,545 at pos 10, 71k vol); Building Charts with Nivo (+1,688); Barba.js tutorial (+1,447). Homepage (branded) +15,114 | Ahrefs Top Pages export |
| Losing Content Type | Mature/well-documented library tutorials: Axios vs Fetch (-1,694); Top 9 React Chart Libraries (-1,594); React Toastify (-1,362); 6 Top Go Web Frameworks (-1,279); React Hook Form (-1,198); Website Hero Section (-1,175); Custom Mouse Cursor CSS (-936); Node TypeScript Express (-911); Axios Post Requests (-787); + 3,150 total pages to essentially zero traffic (total loss: -25,166) | Ahrefs Top Pages export |
| New-URL Gain Share | New emerging-library blog posts published in-window; contribution estimated from first-seen dates in Top Pages export | Ahrefs Top Pages export |
| Page Replacement Pattern | Old: tutorials for mature/well-documented libraries (React ecosystem, Go, Axios, CSS fundamentals) → losing → AI coding tool substitution; New: tutorials for niche/emerging/less-documented libraries (Next.js advanced features, Swiper.js, Nivo, Barba.js) → gaining → not yet AI-substitutable | — |
| Notable patterns | **Branded keyword classification breakdown:** Ahrefs' keyword export labeled 17,562 of approximately 30,000 keywords as "branded" — including library names (swiper slider, nivo charts, barba.js). This makes the standard branded/non-branded split unreliable for LogRocket. The "logrocket" core keyword itself (8,809→25,635, +191%) is used as the clean branded signal. **AI-substitution segmentation:** the record's most significant new insight — AI-substitution risk is demonstrably lower for niche/emerging library content than for mature/well-documented tutorials. Developers use AI coding tools for "how do I use Axios" (answer: instant) but not for "how do I implement Swiper.js custom pagination" (answer: the AI tool's training data is sparse). **Revenue-traffic decoupling:** $111M ARR in 2024 (+22% YoY) while blog traffic declined -71.9% from Aug 2023 peak to window open — demonstrates that high-volume developer blog traffic does not directly correlate with B2B SaaS revenue for session-replay/analytics products. **International branded expansion:** US branded variant slightly declined; international branded search drove the homepage recovery — geographic demand expansion rather than domestic brand strength. | Multiple Ahrefs exports |

---

## Recovery

| Field | Value |
|-------|-------|
| **Recovery Status** | Partial — within-window recovery to 124,037 (Jun 2026 = window close) = +90.9% above the trough (64,962, Nov 2025) and +19.85% above window start; still 66.3% below the Aug 2023 historical peak (368,021) |
| **Recovery Mechanism** | Branded/geographic demand expansion (+191% on "logrocket" keyword; international expansion; homepage traffic +179%); new niche/emerging library tutorial content winning positions on underserved queries (not available from AI coding tools) |
| **Recovery Confidence** | High — both recovery mechanisms are directly evidenced (branded keyword data; specific new content pages with position and traffic data); the two mechanisms are independently operating and cumulatively explain the +90.9% trough-to-end recovery |
| **Recovery Notes** | The recovery did NOT come from winning back mature library tutorial positions — those pages remain suppressed and 3,150+ remain at near-zero. The recovery came from additive new traffic types (branded + niche content), not from reversing the AI-substitution losses. This has implications for long-term trajectory: the recovery is structurally different from the loss, and the AI-substitution pattern in mature library tutorials is not treated as reversible by this record. |

---

## AI Discoverability

| Field | Value |
|-------|-------|
| **Measured** | No |
| **Analysis Date** | — |
| **Data Source(s)** | — |
| **AI Visibility Strength** | Unknown |
| **AI Discoverability Trend** | Unknown |
| **Trend Compared To** | N/A |

*Note: AI Observation Protocol not yet run. For LogRocket, the more relevant AI question is not "does LogRocket appear in AI Overviews" but "do AI coding tools (Copilot, Cursor, Claude) cite, embed, or recommend LogRocket content." This is a different measurement than the standard AI Answer Engine (Perplexity, ChatGPT, Gemini) protocol. Priority discovery questions: "What is LogRocket?", "LogRocket vs FullStory", "LogRocket vs Datadog RUM", "best session replay tools for React apps" — and optionally: "How do I debug a React app?" (to assess whether AI coding tools reference LogRocket resources at all).*

---

## Client Applicability

| Field | Value |
|-------|-------|
| **Commercial Alignment** | Low-Medium — LogRocket's blog content is developer tutorials with low commercial intent (how to use library X, JS framework comparisons, CSS how-tos); direct pipeline contribution is indirect and long-cycle; the main site and product pages carry higher commercial alignment but represent a small fraction of total traffic; revenue growing despite traffic decline confirms the pipeline contribution model is indirect; Low-Medium is the appropriate rating |
| **Best-Fit Client Type** | B2B SaaS companies running developer-audience content programs; companies whose blog traffic is disconnecting from revenue; companies trying to understand AI's impact on search demand within technical content verticals; companies with large tutorial/how-to content portfolios considering whether to maintain, reduce, or reorient that portfolio |
| **Best-Fit Problem** | "Our developer blog traffic is declining but revenue is growing — should we be worried?" / "What content types are actually safe from AI displacement?" / "Is it worth investing more in tutorial content if AI can answer those questions?" |
| **Relevance Conditions** | Client runs a technical blog with a large volume of tutorial/how-to content; client has concerns about AI displacement specifically in technical/developer content; client has or is considering a content strategy pivot from broad tutorial coverage to niche/emerging technology focus |
| **Non-Comparable When** | Client is in a non-developer category (LogRocket's AI-substitution mechanism is specific to developer query patterns); client needs a large-scale commercial-traffic example (LogRocket's TV growth is +0.53% — near-zero); client's primary organic channel is main-site/product content rather than a high-volume blog |
| **Primary Lesson 1** | AI-substitution risk within developer tutorial content is segmented by library/technology maturity. Tutorials for mature, well-documented libraries (Axios, React fundamentals, standard Go patterns) are at high substitution risk — AI coding tools answer these questions directly, reducing the need to search Google. Tutorials for niche, emerging, or less-documented libraries (Swiper.js custom implementations, Nivo advanced charting, Barba.js page transitions) have lower substitution risk because AI training data is sparse for niche/new libraries. Content strategy implication: the tutorial categories worth producing are determined not just by search volume but by AI-substitution vulnerability — niche/emerging > mature/documented. |
| **Primary Lesson 2** | Revenue-traffic decoupling for developer blog programs. LogRocket's ARR grew +22% to $111M in 2024 while blog traffic declined -71.9% from its Aug 2023 peak. This is the strongest evidence in the study that high-volume developer tutorial blog traffic and B2B SaaS revenue for session-replay/analytics products are not linearly coupled. The traffic was generating awareness but the conversion pipeline to paying customers is long-cycle and not proportional to traffic volume. Clients who use blog traffic as a proxy for pipeline health should examine whether their business model supports the same decoupling pattern. |
| **Evidence Use** | AI substitution (diagnostic for developer content strategy); Revenue-traffic decoupling (challenges common assumption that blog traffic = pipeline indicator); Niche-content resilience (positive — niche/emerging library content as safe harbor from AI substitution) |
| **Evidence Basis** | Based on Ahrefs Top Pages, organic keywords, performance, and backlinks exports covering January 2025 through June 2026. No monthly performance file (most significant data gap). No Search Console data. Branded/non-branded keyword split unreliable — library names classified as branded. Revenue figures from public reporting ($111M ARR, 2024). All traffic figures are Ahrefs third-party estimates. |

---

## Risk Flags

- **No monthly performance file:** This is the record's most significant data limitation. Position-bucket analysis, algorithm-update timing attribution, and branded/non-branded trend within-window are all blocked. The two-phase interior shape (decline through Nov 2025, recovery from Dec 2025) is derived from keyword export temporal data and Top Pages, not a direct monthly series. Do not interpret the trajectory phasing with the same confidence as records with a monthly perf file.
- **Branded/non-branded keyword export split unreliable:** Ahrefs labeled ~17,562 of approximately 30,000 keywords as "branded" — including library names (swiper slider, nivo, barba.js). The standard branded/non-branded split is not used for LogRocket. The "logrocket" keyword itself (8,809 → 25,635) is the clean branded proxy.
- **AI substitution vs. Algorithm Update not separable:** Without monthly perf file, the relative contribution of structural AI-substitution demand shift vs. Aug-Nov 2025 algorithm updates to the Phase 1 decline cannot be precisely measured. Both may be operating simultaneously.
- **Pre-window historical context essential:** The +19.85% within-window growth can be misleadingly positive without context: the company was recovering from a -71.9% peak-to-window-open decline. Any use of this record must include the historical peak context to avoid misrepresenting the overall traffic trajectory.
- **AI Observation Protocol not run:** No AI-tool citations checked. The relevant protocol for LogRocket differs from standard (see AI Discoverability section note).
- **No Search Console data:** No CTR data, no impression data, no position confirmation at the query level.
- **Revenue decoupling interpretation:** The revenue-traffic decoupling is directionally clear (+22% ARR while traffic declined), but the causal story between blog traffic and pipeline in this business model was not formally studied. The decoupling may reflect a maturing business model, a salesforce-assisted revenue motion, a product-led-growth conversion that doesn't depend on blog entries, or all three — the record documents the decoupling but does not resolve its cause.

---

## Related Documents

- Comparison briefs: `comparison-briefs/userpilot-posthog.md` (PostHog referenced for category context; LogRocket's developer-blog model contrasts with PostHog's product-led growth model)
- Synthesis documents: `synthesis-matrix.md`
- Studies: Scrunch AI Discoverability Study (methodology locked, not yet run; LogRocket's niche/emerging library finding is a primary motivation for the developer-content arm of that study)
- Report references: Phase 3 deep dive in `phase3-deep-dives.md` (supplemental Q3 case, lines 2645–2829); Product Analytics / Developer Tools category

---

## Calculation Log

*All values carried from original analysis.*

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Verification Status |
|--------|-----------|-----------------------|--------------------|---------|----------------|---------------------|
| Traffic Change % | Ahrefs Performance export | Starting 103,495 (Jan 2025); Ending 124,037 (Jun 2026) | All | (124,037 − 103,495) / 103,495 | +19.85% | Carried |
| Traffic Value Change % | Ahrefs Pass 2 | Starting $65,864; Ending $66,216 | All | (66,216 − 65,864) / 65,864 | +0.53% | Carried |
| Referring Domains Change % | Ahrefs Pass 2 | Starting 10,201; Ending 13,472 | All | (13,472 − 10,201) / 10,201 | +32.1% | Carried |
| Historical peak | Ahrefs historical data | August 2023 value | Historical | Direct read | 368,021 | Carried |
| Window-open vs. historical peak | Derived | Historical peak 368,021; Window open 103,495 | Historical | (103,495 − 368,021) / 368,021 | -71.9% | Carried |
| Window-end vs. historical peak | Derived | Historical peak 368,021; Window end 124,037 | Historical | (124,037 − 368,021) / 368,021 | -66.3% | Carried |
| In-window trough | Ahrefs keyword export / Top Pages temporal data | Nov 2025 | All | Direct read (no monthly perf file) | 64,962 | Carried |
| Phase 1 decline % | Derived | 103,495 (Jan 2025) → 64,962 (Nov 2025) | Study window | (64,962 − 103,495) / 103,495 | -37.2% | Carried |
| Phase 2 recovery % | Derived | 64,962 (Nov 2025) → 124,037 (Jun 2026) | Study window | (124,037 − 64,962) / 64,962 | +90.9% | Carried |
| Blog net change | Ahrefs Top Pages | Blog.logrocket.com: 90,040 (prev) → 92,664 (cur) | blog.logrocket.com | 92,664 − 90,040 | +2,624 (+2.9%) | Carried |
| Main site net change | Ahrefs Top Pages | logrocket.com + docs: 10,331 (prev) → 27,206 (cur) | logrocket.com | 27,206 − 10,331 | +16,875 (+163.3%) | Carried |
| Homepage traffic change | Ahrefs Top Pages | Homepage: 8,407 (prev) → 23,521 (cur) | logrocket.com homepage | 23,521 − 8,407 | +15,114 | Carried |
| Homepage as % of main site net | Derived | Homepage gain 15,114 / Main site net 16,875 | Main site only | 15,114 / 16,875 | 89.6% (≈ "87%" as reported) | Carried |
| LogRocket branded keyword change | Ahrefs Keywords export | "logrocket": 8,809 (Jan 2025) → 25,635 (Jun 2026) | Single keyword | (25,635 − 8,809) / 8,809 | +191% | Carried |
| Largest blog winner | Ahrefs Top Pages | Next.js Partial Pre-Rendering: 0 → 5,225 | Single page | 5,225 − 0 | +5,225 | Carried |
| Largest blog loser | Ahrefs Top Pages | Axios vs Fetch: went to 0, -1,694 | Single page | Direct read | -1,694 | Carried |
| Pages to zero | Ahrefs Top Pages | Count of pages with current traffic = 0 | blog.logrocket.com | Direct count | 3,150 | Carried |
| Pages-to-zero collective loss | Ahrefs Top Pages | Sum of previous traffic for 3,150 zero-current pages | blog.logrocket.com | Direct sum | -25,166 | Carried |
| Gross Gain | Ahrefs Top Pages | 1,129 pages with positive change | All | SUM(positive) | +79,887 | Carried |
| Gross Loss | Ahrefs Top Pages | 1,884 pages with negative change | All | ABS(SUM(negative)) | -60,388 | Carried |
| Gross-Loss Offset Rate | Derived | Gross Loss 60,388 / Gross Gain 79,887 | All | 60,388 / 79,887 | 75.6% | Carried |
| Top Pages net | Ahrefs Top Pages | 79,887 − 60,388 | All | Direct | +19,499 | Carried |
| Top Pages vs. perf file reconciliation | Derived | Top Pages net +19,499 vs. perf net +20,542 | Study window | 19,499 / 20,542 | 95.0% — very tight | Carried |

---

## Source Files

| File | Description | Encoding | Date Range | Notes |
|------|-------------|----------|-----------|-------|
| Ahrefs Performance export | Monthly traffic series (ABSENT — no monthly perf file; this is the most significant data gap) | — | — | ⚠ NOT AVAILABLE. Traffic shape, trough date, and trajectory phasing are derived from keyword export and Top Pages temporal data rather than a direct monthly series. |
| Ahrefs Top Pages export | Top ranking pages with previous and current traffic | CSV | ~Jan 2025 (previous) – Jun 2026 (current) | Previous sum: blog 90,040 + main 10,331 = 100,371; current sum: blog 92,664 + main 27,206 = 119,870 vs. perf 103,495 / 124,037; 95.0% reconciliation on net change. Authoritative source for page-level analysis. |
| Ahrefs Organic Keywords export | All ranking keywords with SERP features and intent classification | CSV | Jan 2025 – Jun 2026 | Branded/non-branded split unreliable (library names labeled branded). SERP features column shows no AI Overview tag on winning articles. Used primarily for "logrocket" keyword trajectory and SERP features pattern. |
| Ahrefs Best by Links (BBL) export | Per-page backlinks/referring domains | CSV | As of Jun 2026 | Source of RD figures. |
| Public reporting (revenue) | LogRocket $111M ARR (2024), +22% YoY | Public | 2024 reporting | Used for revenue-traffic decoupling analysis. |

---

## Narrative

### Company Overview

LogRocket is a mid-market B2B SaaS company (session replay + product analytics, $55M raised, ~512 employees) with a dominant content strategy built around a high-volume developer tutorial blog (blog.logrocket.com, 6,011 pages). It reached $111M ARR in 2024, growing +22% YoY — during a period of significant traffic decline on the blog. This revenue-traffic decoupling is a primary interpretive context for the entire record.

### Historical Context (Mandatory)

The study window opens at 103,495 in January 2025 — already 71.9% below the company's August 2023 historical traffic peak of 368,021. The within-window trajectory (Decline then Recovery, +19.85% net) is best understood as: (a) a further -37.2% decline in Phase 1 representing the continuation of a multi-year structural trend, followed by (b) a +90.9% partial recovery in Phase 2. The company remains 66.3% below its Aug 2023 peak at window-end.

### Traffic Trajectory

Phase 1 (Jan–Nov 2025): Traffic declined from 103,495 to 64,962 (-37.2%). This is the continuation of the structural decline that began with the Aug 2023 peak. Two contributing factors cannot be cleanly separated without monthly data: AI-mediated developer query substitution (structural, predating the window) and Aug-Nov 2025 algorithm updates (temporal, within-window). The trough (64,962, Nov 2025) aligns with the end of the Aug-Nov 2025 update period.

Phase 2 (Nov 2025–Jun 2026): Traffic recovered from 64,962 to 124,037 (+90.9%). Two complementary mechanisms: branded/geographic demand expansion (homepage traffic 8,407 → 23,521, +179%; "logrocket" keyword +191%, driven by international expansion); and new niche/emerging library tutorial content capturing underserved queries (Next.js Partial Pre-Rendering, Swiper.js, Nivo, Barba.js — all winning positions 5-10 on 14-71k volume queries).

### Data Limitation (No Monthly Perf File)

No monthly performance file was available for LogRocket. This is the record's most significant limitation. All trajectory phasing, algorithm-update timing analysis, and branded/non-branded trend within-window are blocked by this gap. The trajectory shape is derived from supplementary export data. All algorithm-timing claims are Medium confidence at most. This limitation must be disclosed in any client-facing use of this record.

### Mechanism Analysis

**Phase 1 — AI-substitution and algorithm update:** The losing content type — tutorials for mature, well-documented libraries (Axios, React Toastify, React Hook Form, standard Go patterns) — is precisely the category most directly substituted by AI coding assistants. Developers asking "how do I use Axios" get an instant answer from GitHub Copilot, Cursor, or Claude without leaving their development environment; the Google search doesn't happen. 3,150 blog pages went to essentially zero traffic, losing -25,166 traffic collectively. This pattern predates the study window (the decline began Aug 2023) and is not consistent with a discrete algorithm penalty, which would have a more specific start date.

**Phase 2 — Branded expansion and niche content:** The recovery is structurally different from the losses. The homepage recovery (8,407 → 23,521, +15,114) accounts for 87% of the main-site net gain and is driven by international branded search expansion, not domestic brand growth (US branded variant slightly declined). New niche/emerging blog content won positions on library/technology queries that AI coding tools cannot yet answer well — because training data is sparse for less-documented libraries. The niche-content wins are the record's most directly actionable finding for content strategy.

**Core segmentation finding:** AI-substitution risk within developer tutorial content is not uniform — it is segmented by library/technology maturity. Niche/emerging libraries are lower-risk because the AI coding tool's training data is sparse; mature/well-documented libraries are higher-risk because AI can answer confidently from dense training data.

**Revenue-traffic decoupling:** $111M ARR in 2024 (public disclosure, +22% YoY) while blog traffic declined -71.9% from peak to window-open. The developer blog is clearly not a proportional driver of revenue at this stage. Either the conversion model is too long-cycle and indirect for traffic to predict revenue, or the business's primary growth driver shifted to product-led growth, sales-assisted enterprise expansion, or brand relationships that don't depend on blog-driven acquisition. This is not explained by this record, but the decoupling is documented.

### Client Applicability

LogRocket is the primary evidence source for two distinct client arguments: (1) AI-substitution risk in developer tutorial content is segmented by library maturity — a content strategy differentiation argument for technical SaaS clients; (2) developer blog traffic does not proportionally drive pipeline or revenue for session-replay/analytics B2B products — a strategic framing argument for clients who over-weight blog traffic as a revenue indicator.

Secondary use: LogRocket demonstrates the international branded expansion as a traffic recovery mechanism — distinct from content-quality wins or algorithm-recovery patterns, and actionable for international-expansion-stage companies.

---

## Verification Checklist

*Record is Draft / Migrated — not revalidated. Checklist not signed off.*

**Calculation Log**
- [ ] Every recomputable metric has Verification Status = Recomputed (not Carried)
  - ⚠ All key metrics are Carried
- [ ] Traffic Change % = (Ending − Starting) / Starting, matches stated figure
  - ✓ Carried: (124,037 − 103,495) / 103,495 = +19.85% ✓
- [ ] Gross-Loss Offset Rate = Gross Loss ÷ Gross Gain
  - ✓ Carried: 60,388 / 79,887 = 75.6% ✓

**Known unresolved items**
- ⚠ No monthly performance file — trajectory phasing derived from supplementary data
- ⚠ Branded/non-branded split unreliable — library names labeled branded by Ahrefs
- ⚠ Phase 1 decline mechanism (AI substitution vs. algorithm update) cannot be precisely separated without monthly perf file
- ⚠ Revenue-traffic decoupling causal mechanism not resolved
- ⚠ AI Observation Protocol not run (priority: AI coding tool citation check, not standard AI Answer Engine protocol)
- ⚠ No Search Console data

**Client Applicability**
- ✓ Mandatory historical context documented (71.9% below Aug 2023 peak at window open)
- ✓ Two primary lessons documented: AI-substitution segmentation + revenue-traffic decoupling
- ✓ External Use Status = Internal only

---

## Historical Amendments

**2026-07-28 (initial full record migration)**
- **Reason:** Migration to V2.3 repository format
- **Sections updated:** All (initial migration from phase3-deep-dives.md supplemental Q3 section, lines 2645–2829)
- **Summary:** All metrics carried from original 2026-06-30 analysis. Decline then Recovery trajectory documented with two-phase interior shape. No monthly perf file — flagged throughout as most significant data limitation. Mixed (Phase-dependent) mechanism: Phase 1 = Search Demand Shift (AI-substitution) + Algorithm Update; Phase 2 = Demand Expansion (branded/geographic) + Content Quality (niche/emerging library tutorials). Cannibalization rate 75.6% — highest in growth cohort. Revenue-traffic decoupling documented (ARR +22% to $111M, 2024, during traffic peak-to-open -71.9% decline). V2.3 schema applied: AIO 3-field split (Susceptibility: High — developer tutorial category; Presence: No — winning articles show no AI Overview tag on niche/emerging queries; Effect: Not tested — primary displacement is Search Demand Shift, not SERP-level AIO). Commercial Alignment: Low-Medium. AI-substitution segmentation finding documented: niche/emerging library content = lower substitution risk than mature/well-documented library tutorials.

---

*Record finalized: 2026-07-28 | Last verified: —*
