# Mechanism Taxonomy

*Authoritative controlled vocabulary for Primary Mechanism and Contributing Mechanisms fields across all repository records. Every other document references this file — do not maintain a separate mechanism list elsewhere.*

*Effective: V2.4 (2026-08-04). Supersedes mechanism lists in README.md, _template.md, evidence-parsing-rules.md, and OPERATING-MODEL.md.*

---

## Approved Values

Primary Mechanism and Contributing Mechanisms fields both draw from this list.

| Value | Use when |
|-------|----------|
| **Algorithm Update** | Timing alignment with a specific named Google update is confirmed, the affected pattern is consistent with that update's known behavior (e.g., multi-bucket long-tail collapse aligning to the Aug 2025 spam update), and no equally plausible competing explanation exists. Confirmation source: Google Search Status Dashboard — not secondary SEO blogs. |
| **Algorithmic Reassessment** | Visibility changed selectively across a page type or content model, but the responsible update or system cannot be isolated. Requires evidence of a systematic portfolio-level pattern: concentrated losses or gains in one URL class, contrasting performance in unaffected page types on the same domain, and evidence weighing against link loss or broad demand contraction. Not a catch-all for unexplained declines. |
| **AI Cannibalization** | AI tools — including AI coding assistants, generative AI platforms, or AI-native answer tools — satisfy the underlying user need directly, reducing or eliminating search query initiation. Operates *before* the search query is made. Distinguished from AI Overview Interception (which occurs at the SERP level, after a query is initiated). Use when content-type profile is consistent with AI tool substitution — e.g., developer tutorial content for mature, well-documented libraries losing traffic to AI coding assistants. |
| **AI Overview Interception** | Traffic loss driven by AI Overview click-through interception: queries where the SERP feature fully answers the user's intent, suppressing clicks to ranked pages. Operates *at the SERP*, after a query is made. Evidence standard: same-position or improved-position CTR collapse, or direct testing confirming AI Overview presence with simultaneous estimated-traffic decline. Distinguished from AI Cannibalization (pre-query substitution) and Search Demand Shift (unconfirmed mechanism). |
| **Competitive Displacement** | Traffic change driven primarily by competitor sites outranking this one on queries it previously held, or the site outranking competitors (for growth). Distinguished from Algorithmic Reassessment by the presence of identifiable competitor gains on the specific queries where this site lost positions — not just a correlated category-wide pattern. |
| **Content Quality** | Traffic change driven primarily by changes in the quality, depth, or relevance of the site's own content relative to what the query requires. Use when content changes (rewrites, additions, deletions) are the proximate driver and algorithmic or competitive explanations are weaker. |
| **Demand Expansion** | Growth driven materially by an identifiable increase in underlying demand rather than primarily by ranking improvement or content-quality changes. Common variants: acquisition integration (demand transfer from an acquired brand), product launch, major PR or analyst recognition event, category growth, international expansion. Use when the mechanism is demand-side — the query pool expanded — not supply-side. |
| **Search Demand Shift** | Traffic decline driven materially by a shift in how users satisfy the underlying need — away from traditional search toward AI tools, direct AI prompting, or another channel — when the specific AI mechanism cannot be confirmed. Distinct from AI Overview Interception (SERP-level click interception) and AI Cannibalization (pre-query tool substitution). Use when evidence suggests search query volume itself is declining, but mechanism cannot be isolated without search-volume trend data. Mark as Contributing when plausible but unconfirmed as the primary driver. |
| **Technical** | Traffic change driven primarily by technical site factors: crawlability, indexation, Core Web Vitals, migration errors, redirect chains, structured data, canonicalization, or similar. Use when technical changes are the proximate cause and content/algorithm/demand explanations are weaker. |
| **Mixed (Phase-dependent)** | The primary mechanism changed materially across distinct temporal phases within the study window. Requires at least two distinct phases with different primary mechanisms. Document each phase explicitly in the Mechanism Pathway field. Example: "Algorithmic Reassessment (Phase 1, Jan–Oct 2025, traffic decline) → Demand Expansion (Phase 2, Nov 2025–Jun 2026, recovery driven by product launch)." |
| **Unknown** | Evidence is insufficient to identify a primary mechanism. Not a default — use only after competing explanations have been considered and none can be supported over the others at current evidence levels. Always document which explanations were considered and why each was insufficient. |

---

## Decision Rules

### Algorithm Update vs. Algorithmic Reassessment

The key distinction is whether the inflection can be mapped to a **specific named update**.

Use **Algorithm Update** when:
- Inflection date maps clearly to a specific named update (within the update's rollout window)
- Affected pattern is consistent with that update's known behavior
- No equally plausible competing explanation (e.g., product launch, technical change) occupies the same window

Use **Algorithmic Reassessment** when:
- Selective portfolio-level pattern exists (URL-class concentration, contrasting performance across page types)
- Timing alignment with a named update is imprecise, or multiple updates could explain it
- First-party ranking data is unavailable to confirm the inflection mechanism

**Default to Algorithmic Reassessment when uncertain.** Algorithm Update requires a timing argument you can defend; Algorithmic Reassessment only requires the portfolio-level pattern.

Algorithm Alignment field (Strong / Moderate / Weak / None / Not assessed) captures update-timing confidence independently of mechanism classification — use it for cases where Algorithm Update is plausible but not confirmed.

---

### AI Overview Interception vs. AI Cannibalization vs. Search Demand Shift

These three mechanisms operate at different stages of the user journey.

| Stage | Mechanism | Key signal |
|-------|-----------|------------|
| Before query | AI Cannibalization | Content type is directly substitutable by AI tools (coding assistants, generative AI); 3,000+ pages dropping to near-zero traffic; loser profile concentrated in AI-answerable query types |
| At the SERP | AI Overview Interception | Same-position CTR collapse; direct AIO testing confirms presence on key queries; ranking improves while estimated traffic falls |
| Unconfirmed mechanism | Search Demand Shift | Traffic/value divergence consistent with AI displacement; query volume declining; mechanism cannot be isolated without search-volume trend data |

**Do not use Search Demand Shift when a more specific mechanism is supported.** If evidence is sufficient for AI Overview Interception or AI Cannibalization, use that value. Search Demand Shift as a primary mechanism requires explicit acknowledgment that the mechanism cannot be confirmed at the search-query level.

---

### Demand Expansion — when to use vs. Contributing Mechanism

Use **Demand Expansion as Primary Mechanism** when the demand-side event is the dominant driver of the headline traffic outcome and ranking improvement / content quality changes are secondary.

Use **Demand Expansion as Contributing Mechanism** when the demand-side event contributed to growth but the site's own content or algorithmic changes were the primary driver.

Common demand-side events:
- Acquisition integration (demand transfer from acquired brand's search queries)
- Named product launch with independent press confirmation and before/after content evidence
- International expansion creating new-market query capture
- Major PR or analyst recognition driving branded demand surge

---

## Legacy Values and Migration Guidance

The following values appeared in prior versions of the repository and have been superseded. Do not use them for new records.

| Legacy value | Superseded by | Migration rule |
|-------------|--------------|----------------|
| **AI Overview** (V2.0–V2.2) | AI Overview Interception | Replace in any record where this was the Primary Mechanism; confirm direct evidence standard (same-position CTR collapse or direct testing) is met before reclassifying |
| **AI-mediated informational demand erosion** (V2.3) | AI Cannibalization or Search Demand Shift | If the specific mechanism (coding assistant displacement vs. upstream demand reduction) can be confirmed, use the specific value; otherwise use Search Demand Shift |
| **Cannibalization** (V2.0–V2.2) | Captured in narrative/Contributing Mechanisms | Internal page-vs-page keyword cannibalization is uncommon as a primary mechanism in this cohort; note in Confidence Rationale or Contributing Mechanisms if present |
| **Competition** (V2.0–V2.2) | Competitive Displacement | Direct rename; replace in any record using the old value |

---

## Playbook Crosswalk

*The Durable Demand Framework Playbook uses public-facing terminology that may differ from the internal controlled vocabulary above. Maintain this crosswalk to prevent terminology drift between the repository (internal) and client-facing outputs (public).*

| Internal value | Public Playbook term | Notes |
|----------------|---------------------|-------|
| Algorithm Update | | |
| Algorithmic Reassessment | | |
| AI Cannibalization | | |
| AI Overview Interception | | |
| Competitive Displacement | | |
| Content Quality | | |
| Demand Expansion | | |
| Search Demand Shift | | |
| Technical | | |
| Mixed (Phase-dependent) | | |
| Unknown | | |

*Fill in the "Public Playbook term" column once the Playbook vocabulary is finalized. Update both columns simultaneously whenever either taxonomy changes.*

---

## Amendment Log

*Append-only.*

| Date | Change | Notes |
|------|--------|-------|
| 2026-08-04 | File created (V2.4) | Supersedes mechanism lists in README.md, _template.md (V2.3), evidence-parsing-rules.md, and OPERATING-MODEL.md. Approved values: Algorithm Update / Algorithmic Reassessment / AI Cannibalization / AI Overview Interception / Competitive Displacement / Content Quality / Demand Expansion / Search Demand Shift / Technical / Mixed (Phase-dependent) / Unknown. Demand Expansion restored — was present V2.1–V2.3 and was inadvertently omitted from the V2.4 template draft; restored here as authoritative. Legacy values (AI Overview, AI-mediated informational demand erosion, Cannibalization, Competition) formally superseded. |
