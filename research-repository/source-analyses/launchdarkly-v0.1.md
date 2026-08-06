# LaunchDarkly — S.LAB Company Analysis v0.1

*Status: Complete. Ready for Record Generation (v0.2).*
*Pull date: 2026-08-06*

---

## Data Inventory

**Company:** LaunchDarkly
**Website:** launchdarkly.com (including subdomains)
**Study Window:** Aug 2024 – Aug 2026 (2-year lookback from pull date)
**Data Provenance:** Ahrefs Export

**Available:**
- Performance History (combined traffic + RD + positions) — Jun 2015 to Aug 2026
- Top Pages comparison, all subdomains, all countries — 1,583 URLs; Previous ≈ Jan–Feb 2025, Current ≈ Aug 2026
- Top Pages comparison, all subdomains, US only, Jun 2025 → Dec 2025 (page collapse diagnostic window) — 1,795 URLs
- Top Pages comparison, all subdomains, US only, Dec 2025 → Jul 2026 (recovery diagnostic window) — 712 URLs
- Organic Keywords comparison — 22,078 keywords; Previous ≈ Aug 2024, Current ≈ Aug 2026
- Organic Competitors — 20 competitors

**Missing / unavailable:**
- RD Performance History (separate export) — not needed; RD data is embedded in combined Performance History ✓
- Top Pages comparison, all countries, scoped to the full 2-year study window (Aug 2024 vs Aug 2026) — the available global export's Previous date (≈ Jan–Feb 2025) undercuts the study window start by ~6 months. Gross Gain/Loss metrics cover approximately Jan–Feb 2025 through Aug 2026 and are labeled as a separate URL-comparison window in the Calculation Log.

---

## Source File Classification

| File | Type | Use For | Do Not Use For | Notes |
|---|---|---|---|---|
| `launchdarkly.com_perf_...csv` | Ahrefs Performance History (combined) | Monthly trajectory; study-window Starting/Ending traffic; RD trend; position distribution; branded/non-branded split | Gross Gain/Loss calculations | Covers Jun 2015–Aug 2026; RD and position data embedded as columns |
| `launchdarkly.com-top-pages-subdomains-all-...csv` | Ahrefs Top Pages, all countries | Gross Gain/Loss/Offset Rate; page concentration; URL-level gain decomposition | Property-level traffic totals; study-window endpoint figures | 1,583 URLs; SUM Previous = 47,737 (≈ Jan–Feb 2025); SUM Current = 94,456 (≈ Aug 2026). URL-comparison window: Jan–Feb 2025 → Aug 2026. Does not cover the full study window start (Aug 2024). |
| `launchdarkly.com-top-pages-subdomains-us-_07-11-06.csv` | Ahrefs Top Pages, US only — page collapse window | Mechanism diagnosis; URL-level disappearance analysis | Property-level totals; study-window comparisons | 1,795 URLs; Previous = Jun 2025 (35,126 US); Current = Dec 2025 (31,475 US). Diagnostic sub-window only. |
| `launchdarkly.com-top-pages-subdomains-us-_07-08-56.csv` | Ahrefs Top Pages, US only — recovery window | Recovery gain decomposition; deployment-strategies page analysis | Property-level totals; study-window comparisons | 712 URLs; Previous = Dec 2025 (31,475 US); Current = Jul 2026 (39,167 US). Diagnostic sub-window only. |
| `launchdarkly.com-organic-keywords-...csv` | Ahrefs Organic Keywords comparison | Keyword-level traffic; SERP feature detection | Property-level totals | 22,078 keywords; Previous ≈ Aug 2024, Current ≈ Aug 2026 — aligns with study window. Branded column unreliable (shows 0 for all rows including "launchdarkly"). |
| `launchdarkly.com_orgcompetitors_...csv` | Ahrefs Organic Competitors | Category-level competitor trajectory context | Establishing site-specificity of mechanism | 20 competitors; auto-detected by Ahrefs; includes large non-peers |

---

## Calculation Log

| Metric | Source File | Source Columns / Rows | Filter / Population | Formula | Verified Value | Status | Notes |
|---|---|---|---|---|---|---|---|
| **Starting Traffic (study window)** | Performance History | Avg. organic traffic, 2024-08 | Aug 2024 row | Direct read | **46,591** | Recomputed | Study window start — already post-first-collapse (Jul 2024 event preceded study window) |
| **Ending Traffic (study window)** | Performance History | Avg. organic traffic, 2026-08 | Aug 2026 row | Direct read | **94,376** | Recomputed | Pull date month; new all-time high |
| **Traffic Change % (study window)** | Performance History | 2024-08 and 2026-08 | Study window | (94,376 − 46,591) / 46,591 | **+102.6%** | Recomputed | Traffic more than doubled |
| Traffic Retention (study window) | Performance History | 2024-08 and 2026-08 | Study window | 94,376 / 46,591 | 2.026 | Recomputed | |
| Study Window Peak | Performance History | Avg. organic traffic | Aug 2024–Aug 2026 | Max of monthly values | 94,376 (Aug 2026) | Recomputed | Pull date is the all-time high |
| Study Window Trough | Performance History | Avg. organic traffic | Aug 2024–Aug 2026 | Min of monthly values | 46,135 (Dec 2024) | Recomputed | |
| URL-comparison window note | Top Pages (all) vs Performance History | SUM Previous vs Aug 2024 PH | — | 47,737 (Jan–Feb 2025) vs 46,591 (Aug 2024) | Similar totals; coincidental | N/A | These represent different comparison windows and should not be reconciled directly. Gross Gain/Loss covers the URL-comparison window (Jan–Feb 2025 → Aug 2026), not the full study window. |
| **Gross Gain** | Top Pages, all countries | Rows where Current > Previous | All URLs curr > prev | SUM(curr − prev) | **52,632** | Recomputed | |
| **Gross Loss** | Top Pages, all countries | Rows where Previous > Current | All URLs prev > curr | ABS(SUM(prev − curr)) | **5,913** | Recomputed | |
| URL-level Net Change | Top Pages, all countries | — | All URLs | 52,632 − 5,913 | 46,719 | Recomputed | |
| **Gross-Loss Offset Rate** | Top Pages, all countries | — | — | 5,913 / 52,632 | **11.2%** | Recomputed | Extremely healthy |
| New-URL gain | Top Pages, all countries | Previous = 0, Current > 0 | 206 URLs | SUM(Current) | 9,014 | Recomputed | |
| New-URL Gain Share | Top Pages, all countries | — | — | 9,014 / 52,632 | **17.1%** | Recomputed | |
| Continuing-URL gain | Top Pages, all countries | Previous > 0, Current > Previous | — | SUM(curr − prev) | 43,618 | Recomputed | |
| Continuing-URL Gain Share | Top Pages, all countries | — | — | 43,618 / 52,632 | **82.9%** | Recomputed | Growth driven by improving existing pages, not new URLs |
| Top 5 Page Traffic Share | Top Pages, all countries | Top 5 by current traffic | Current > 0 | SUM(top 5) / total current | **78.7%** | Recomputed | |
| Top 10 Page Traffic Share | Top Pages, all countries | Top 10 by current traffic | Current > 0 | SUM(top 10) / total current | **83.1%** | Recomputed | |
| Homepage share | Top Pages, all countries | launchdarkly.com/ | Single URL | 35,436 / 94,456 | **37.5%** | Recomputed | |
| /blog/deployment-strategies/ share | Top Pages, all countries | That URL | Single URL | 31,049 / 94,456 | **32.9%** | Recomputed | One page = one-third of all traffic |
| Two-page combined share | Top Pages, all countries | Homepage + deployment-strategies | Two URLs | 66,485 / 94,456 | **70.4%** | Recomputed | |
| deployment-strategies gross gain | Top Pages, all countries | That URL | Single URL | 31,049 − 15 | **+31,034** | Recomputed | 59.0% of total gross gain from one page |
| **RD Start (study window)** | Performance History | Referring domains, 2024-08 | Aug 2024 | Direct read | **2,658** | Recomputed | |
| **RD End (study window)** | Performance History | Referring domains, 2026-08 | Aug 2026 | Direct read | **7,002** | Recomputed | |
| **RD Change (study window)** | Performance History | — | Aug 2024–Aug 2026 | (7,002 − 2,658) / 2,658 | **+163.5%** | Recomputed | |
| Organic pages start (study window) | Performance History | Organic pages, 2024-08 | Aug 2024 | Direct read | 1,571 | Recomputed | Already post-first-collapse (Jul 2024 dropped 2,089 → 1,603) |
| Organic pages end (study window) | Performance History | Organic pages, 2026-08 | Aug 2026 | Direct read | 525 | Recomputed | **−66.6%** over study window |
| Pre-study first collapse (Jul 2024) | Performance History | Organic pages, Jun–Jul 2024 | Jun–Jul 2024 | 1,603 − 2,089 | −486 pages (−23.3%) | Recomputed | Preceded study window; context only |
| In-study second collapse (Oct–Nov 2025) | Performance History | Organic pages, Sep–Nov 2025 | Sep–Nov 2025 | Direct read | 1,644 → 1,110 → 789 | Recomputed | −52% in 2 months; primary in-window event |
| Non-branded change (reference period) | Performance History | Non-branded column | Jan 2025–Jun 2026 | (19,492 − 11,545) / 11,545 | **+68.9%** | Recomputed | Reference period only — not study window endpoints. Aug 2024 and Aug 2026 exact figures not separately extracted; recompute for v0.2 if study-window-exact split is required. |
| Branded (reference period start) | Performance History | Organic traffic: Your brand, 2025-01 | Jan 2025 | Direct read | 39,883 | Recomputed | Reference point only |
| Branded (reference period end) | Performance History | Organic traffic: Your brand, 2026-06 | Jun 2026 | Direct read | 35,553 | Recomputed | −11.1% over Jan 2025–Jun 2026 reference period |
| Position 1–3 start (study window) | Performance History | Organic positions: 1–3, 2024-08 | Aug 2024 | Direct read | 1,595 | Recomputed | |
| Position 1–3 end (study window) | Performance History | Organic positions: 1–3, 2026-08 | Aug 2026 | Direct read | 3,068 | Recomputed | **+92.4%** |
| Position 4–10 start (study window) | Performance History | Organic positions: 4–10, 2024-08 | Aug 2024 | Direct read | 1,702 | Recomputed | |
| Position 4–10 end (study window) | Performance History | Organic positions: 4–10, 2026-08 | Aug 2026 | Direct read | 3,805 | Recomputed | **+123.6%** |
| Position 51+ end (study window) | Performance History | Organic positions: 51+, 2026-08 | Aug 2026 | Direct read | 2 | Recomputed | Near-total elimination |
| Branded % (keywords export) | Keywords export | Branded column | All keywords | — | N/A | N/A | Column shows 0 for all rows; unreliable. Use Performance History branded split. |
| AIO exposure | Keywords export | SERP features column | All keywords | COUNT 'AI overview' | 0 flagged | N/A | Export limitation confirmed — see SERP validation below |
| AIO Presence Observed | SERP overview (deployment strategies, US) | Type column | AI Overview rows | Direct read | **Confirmed** | Recomputed | AI Overview present on primary keyword SERP |
| AIO Observed Effect | SERP overview | Type column | LaunchDarkly row | Direct read | **Favorable — cited with thumbnail** | Recomputed | LaunchDarkly is a cited source in the AI Overview, not displaced by it |
| deployment-strategies kw vol, US (current) | SERP overview | Volume column | LaunchDarkly row | Direct read | 3,300 (US) | Recomputed | Global vol = 74,000 — the 64,000 figure in comparison exports was global vol at earlier snapshot |
| deployment-strategies kw vol, US (previous) | Page keyword comparison | Previous top keyword volume | That URL | Direct read | 1,200 | Recomputed | US vol grew ~1,200 → 3,300 (+175%); the 53x figure in comparison exports reflects global vol change |
| deployment-strategies keyword count change | Page keyword comparison | Previous/Current # of keywords | That URL | 55 − 47 | +8 keywords globally | Recomputed | Minimal expansion — not a broad ranking story |
| deployment-strategies position (all-countries comparison) | Page keyword comparison | Previous/Current position | That URL | 5 → 4 | +1 position improvement | Recomputed | Minor improvement; confirms demand-driven not rankings-driven |
| deployment-strategies page age | SERP overview | First seen column | LaunchDarkly row | Direct read | 2016-04-03 | Recomputed | 10-year-old URL; authority-driven ranking |
| deployment-strategies URL Rating | SERP overview | URL rating column | LaunchDarkly row | Direct read | 4 (of 100) | Recomputed | Low page-specific authority; ranking carried by DR 80 domain |
| deployment-strategies referring domains | SERP overview | Referring Domains column | LaunchDarkly row | Direct read | 10 | Recomputed | Consistent with Top Pages data |
| deployment-strategies last content update | SERP overview | Last Update column | LaunchDarkly row | Direct read | 2026-07-31 | Recomputed | Updated 6 days before pull date; KEY TAKEAWAYS box + AI chat added — after traffic surge, not before |
| **W1: Gross Gain** (Jun→Dec 2025, US) | Top Pages 07:11 | Rows where curr > prev | All URLs curr > prev | SUM(curr − prev) | 4,289 | Recomputed | US-only diagnostic sub-window |
| **W1: Gross Loss** (Jun→Dec 2025, US) | Top Pages 07:11 | Rows where prev > curr | All URLs prev > curr | ABS(SUM(prev − curr)) | 7,940 | Recomputed | |
| **W1: Net** (Jun→Dec 2025, US) | Top Pages 07:11 | — | — | 4,289 − 7,940 | **−3,651** | Recomputed | Decline phase confirmed |
| **W1: Offset Rate** (Jun→Dec 2025, US) | Top Pages 07:11 | — | — | 7,940 / 4,289 | **185.1%** | Recomputed | Highly unhealthy |
| W1: URLs disappeared | Top Pages 07:11 | prev > 0, curr = 0 | — | COUNT | **233 URLs** | Recomputed | |
| W1 disappeared — /docs/ (main domain) | Top Pages 07:11 | URL path begins /docs/ | Disappeared only | COUNT / SUM prev | 86 URLs / 243 traffic | Recomputed | |
| W1 disappeared — docs.launchdarkly.com | Top Pages 07:11 | URL begins https://docs.launchdarkly | Disappeared only | COUNT / SUM prev | 34 URLs / 100 traffic | Recomputed | |
| W1 disappeared — support subdomain | Top Pages 07:11 | URL begins https://support.launchdarkly | Disappeared only | COUNT / SUM prev | 10 URLs / 36 traffic | Recomputed | |
| W1 disappeared — /guides/ | Top Pages 07:11 | URL path begins /guides/ | Disappeared only | COUNT / SUM prev | 7 URLs / 33 traffic | Recomputed | |
| W1 disappeared — academy subdomain | Top Pages 07:11 | URL begins https://academy.launchdarkly | Disappeared only | COUNT / SUM prev | 6 URLs / 27 traffic | Recomputed | |
| **W2: Gross Gain** (Dec 2025→Jul 2026, US) | Top Pages 07:08 | Rows where curr > prev | All URLs curr > prev | SUM(curr − prev) | 12,696 | Recomputed | US-only diagnostic sub-window |
| **W2: Gross Loss** (Dec 2025→Jul 2026, US) | Top Pages 07:08 | Rows where prev > curr | All URLs prev > curr | ABS(SUM(prev − curr)) | 5,004 | Recomputed | |
| **W2: Net** (Dec 2025→Jul 2026, US) | Top Pages 07:08 | — | — | 12,696 − 5,004 | **+7,692** | Recomputed | |
| **W2: Offset Rate** (Dec 2025→Jul 2026, US) | Top Pages 07:08 | — | — | 5,004 / 12,696 | **39.4%** | Recomputed | Healthy |
| deployment-strategies share of W2 gain | Top Pages 07:08 | That URL only | Gain-side rows | 5,952 / 12,696 | **78.7%** | Recomputed | |
| deployment-strategies kw vol, Dec 2025 | Top Pages 07:08 | Previous top keyword volume | That URL | Direct read | 1,200 | Recomputed | |
| deployment-strategies kw vol, Jul 2026 | Top Pages 07:08 | Current top keyword volume | That URL | Direct read | 64,000 | Recomputed | 53x increase; position unchanged at 5 (US) |
| deployment-strategies US share of global traffic | Top Pages all vs Top Pages US | 6,228 US / 31,049 global | Jul 2026 period | Direct calculation | **20.1%** | Recomputed | Strongly international keyword |

---

## Data Quality Warnings

**1. Top Pages URL-comparison window does not cover the full study window.** The global Top Pages Previous (≈ Jan–Feb 2025) is approximately 6 months later than the study window start (Aug 2024). Gross Gain/Loss/Offset Rate metrics cover approximately Jan–Feb 2025 through Aug 2026 and must be labeled as a separate URL-comparison window — not the study window. The Performance History Aug 2024 figures are the authoritative study window starting points for traffic, RD, and positions.

**2. Branded column not reliable in Keywords export.** All 22,078 rows show Branded = 0, including "launchdarkly" (17,060 traffic) and "launch darkly" (8,640 traffic). Branded/non-branded split must come from Performance History branded columns only.

**3. Extreme page concentration — structural risk.** Two pages account for 70.4% of current traffic (homepage 37.5%, /blog/deployment-strategies/ 32.9%). The deployment-strategies page alone represents 59.0% of total gross gain. The page reached its traffic level primarily through keyword demand growth (US volume: ~1,200 → 3,300; global: comparable growth to ~74,000), not a rankings improvement (position 5 → 4, minimal change). 80% of the page's traffic is international. Sustainability depends on global keyword demand continuing.

**4. AIO — Confirmed favorable.** The keywords export showed zero AIO flags due to export limitation. Direct SERP validation on "deployment strategies" (US) confirms an AI Overview is present and LaunchDarkly is cited in it with a thumbnail image. AIO Observed Effect = Favorable (cited/extracted, not displaced). The recent page update (2026-07-31) added a KEY TAKEAWAYS summary box, consistent with optimizing for AI extraction.

**5. Two-stage page collapse — pre-study context needed.** The Jul 2024 collapse (2,089 → 1,603 pages, −23%) occurred one month before the study window starts. The Aug 2024 starting point is already post-first-collapse. The full consolidation story requires Pre-study Performance History context for the record narrative, even though it falls outside the study window.

**6. Non-branded and branded exact study-window endpoints not parsed.** The branded/non-branded split is confirmed for Jan 2025 and Jun 2026 reference points. Aug 2024 and Aug 2026 exact figures were not separately extracted. Use reference period figures for the record; flag for v0.2 recomputation if study-window-exact figures are required.

---

## Mechanism Assessment

### Page Collapse (Oct–Nov 2025)

**Candidate mechanism:** Technical/structural consolidation
**Confidence: Medium**

233 URLs disappeared in the Jun→Dec 2025 US diagnostic window across multiple distinct web properties simultaneously: /docs/ main domain (86 URLs), docs.launchdarkly.com subdomain (34), support.launchdarkly.com (10), /guides/ (7), academy.launchdarkly.com (6), /conference/ event pages (3), /product/ page (removed entirely). The simultaneous disappearance of URLs across documentation, support, academy, guides, and other site sections is more consistent with a coordinated structural change than with a content-type-specific ranking loss. However, the available exports do not confirm whether URLs were intentionally removed, migrated, redirected, canonicalized, or simply lost visibility. Redirect or URL-mapping evidence would be required to confirm a planned consolidation.

Strong RD growth (+163.5% over the study window) weighs against broad link erosion as the cause of the contraction. It does not establish that an algorithmic effect was impossible, or rule out simultaneous technical and algorithmic effects.

### Growth Driver

**Candidate growth driver:** Demand expansion captured by durable educational content
**Confidence: High (supported by multiple lines of evidence)**

Page-level keyword validation confirmed. "Deployment strategies" was the top keyword in both the Previous and Current periods — no keyword assignment switch. Position improved only 5 → 4 (minor). Keyword count grew only +8 (47 → 55) — not broad ranking expansion. The traffic surge is a demand story, not a rankings story.

The volume figures require disambiguation: the Ahrefs comparison export showed 1,200 → 64,000 (global volume), not US. US volume for "deployment strategies" is approximately 1,200 → 3,300 (+175%). The 53x figure reflects global volume change. Approximately 80% of the page's traffic is international, confirmed by the US traffic share (6,228 of 31,049 total = 20.1%).

The content itself was materially unchanged during the growth period. A Wayback Machine snapshot from November 2025 (coinciding with the trough) shows the same core structure — same title, same 6-deployment-strategies framework. A recent update (last updated 2026-07-31, six days before pull date) added a KEY TAKEAWAYS summary box and an "Ask Toggle" AI chat feature — arriving after the traffic surge. The page existed since 2016-04-03 (10 years old at pull date). URL Rating = 4; 10 referring domains. The page has relatively little page-specific authority (UR 4, 10 referring domains), suggesting that LaunchDarkly's broader domain authority (DR 80) likely contributes substantially to its ability to rank.

AIO on this keyword is confirmed favorable: LaunchDarkly is cited in the AI Overview with a thumbnail — being extracted, not displaced. The KEY TAKEAWAYS addition is consistent with further optimizing for AI extraction going forward.

What drove the global traffic surge (which underlying queries, which international markets) is not decomposed at the keyword level beyond "deployment strategies" as the primary query. The related terms ("canary deployment," "blue green deployment," etc.) are plausible secondary contributors given the 10-year-old comprehensive content. This is a refinement question, not a mechanism question.

---

## Readiness Status

**Readiness Status:** Ready for Record Generation (v0.2)

**Evidence Confidence:** High (observational) / Medium (page collapse mechanism) / High (growth driver — validated) / Favorable (AIO — SERP-confirmed)

| Finding | Confidence |
|---|---|
| Study window outcome: +102.6% traffic growth | High |
| Extreme position-distribution compression — 51+ positions near-zero at study window end | High |
| Two-stage page collapse: Jul 2024 (pre-study) and Oct–Nov 2025 (in-study) | High |
| Candidate mechanism of page collapse: Technical/structural consolidation | Medium |
| RD growth +163.5% concurrent with page collapse | High |
| RD growth weighs against link erosion as cause; does not rule out algorithmic effects | High |
| Non-branded traffic growth (reference period +68.9%) | High |
| Single-page concentration: two pages = 70.4% of traffic | High |
| deployment-strategies drove 59% of URL-comparison-window gross gain | High |
| Growth driver: demand expansion captured by durable educational content | High (supported by multiple lines of evidence) |
| Volume figure clarification: 64,000 = global; US vol = 3,300; 80% traffic international | High |
| AIO Observed Effect: Favorable — cited in AI Overview with thumbnail | High (SERP-confirmed) |
| Sustainability of deployment-strategies page concentration | Medium — structural risk remains; international demand fragile if demand shifts |

**What can be supported:** Study window outcome classification (strong growth); trajectory narrative (two-stage page count compression → traffic acceleration); position-distribution compression story; RD trend; non-branded growth; portfolio concentration risk; gain decomposition (82.9% continuing URLs, 17.1% new URLs); candidate page collapse mechanism with appropriate uncertainty; growth driver confirmation as demand-driven; AIO finding (favorable citation, not displacement).

**What cannot be supported without additional data:** Confirmed page collapse mechanism (need redirect/URL-mapping evidence or LaunchDarkly context); exact study-window-endpoint branded/non-branded split; breakdown of which international markets or related queries drove the global traffic surge beyond the primary keyword.

**v0.2 flags:** Research Contribution & Implications required. Portfolio Durability Analysis recommended given extreme page concentration (single page = 33% of total traffic). Pre-study Jul 2024 collapse should appear in the narrative as context even though it predates the study window. AIO favorable finding is a notable positive data point for the Research Contribution section.

**Keyword cluster investigation (v0.2):** The deployment-strategies page likely covers an entire conceptual cluster — not just the primary keyword. Related queries with plausible rising demand include: canary deployment, blue/green deployment, rolling deployment, shadow deployment, recreate deployment, deployment vs. release. If most of these also experienced rising demand over the study window, the growth driver story becomes meaningfully stronger: LaunchDarkly owned an expanding cluster, not just one lucky query. Investigate via keyword-level data or SERP volume trends in v0.2.
