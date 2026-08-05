# ActiveCampaign — v0.1 Calculation Log

**Generated:** 2026-08-04 | **Revised:** 2026-08-04 (v0.1r) | **Updated:** 2026-08-04 (v0.1s) | **Corrected:** 2026-08-04 (v0.1t — calibration pass)
**Revisions from first pass:** AIO interpretation softened; elimination language dialed back; canonical normalization documented and locked; concentration of recovery metrics added; observation/hypothesis separation enforced; page-level keyword findings and SERP data incorporated.
**v0.1s additions:** Wayback comparison completed via uploaded PDF snapshots.
**v0.1t corrections:** Timing claim for email-campaign rewrite removed (snapshot gap does not establish sequence); AIO mechanism framing clarified; URL migration effect on calculations flagged; SDR and pricing causal language dialed back; causal confidence held at Medium.

---

## Data Inventory

**Company:** ActiveCampaign (`www.activecampaign.com`)
**Cohort / repository window:** 2025-01 → 2026-07
**Recovery window:** 2025-12 → 2026-07 (separate; not to be combined with cohort metrics)
**Data Provenance:** Ahrefs Export

**Available (Aug 4 2026 pull):**
- Performance History — traffic (2015-06 to 2026-08 partial) — UTF-8-sig encoding
- Top Pages comparison — File A: recovery window ~Dec 2025 → Jul 2026 — UTF-16 LE
- Top Pages comparison — File B: cohort window ~Jan 2025 → Jul 2026 — UTF-16 LE
- Organic Keywords comparison (2024-08-01 → 2026-07-30) — UTF-16 LE — 30,000 row cap hit
- Organic Competitors comparison — UTF-16 LE — window inferred, not confirmed
- Page-level keyword exports: pricing, blog/sdr, blog/company-slogans, glossary/email-campaign — UTF-16 LE
- SERP overview data: email marketing campaigns, company slogans, activecampaign pricing, active campaign crm, email subject line generator — UTF-16 LE

**Available (Jun 29 2026 pull — prior session, superseded):**
- Performance History — traffic (Jun 27 export)
- Top Pages — single comparison export
- Organic Keywords — single export
- Backlinks — external subdomains

**Missing / unavailable:**
- Wayback comparisons completed for five priority pages via uploaded archived-page PDFs (see Wayback Comparison section). Company Slogans page remains unreviewed.
- GSC exports — would enable first-party branded/non-branded split and CTR trend
- GA4 export — commercial impact analysis blocked without this
- Organic Positions export — position-bucket redistribution unconfirmed

---

## Source File Classification

| File | Type | Use For | Do Not Use For | Notes |
|------|------|---------|----------------|-------|
| `perf_2026-08-04.csv` | Ahrefs Performance History — traffic | Starting/Ending traffic; trough/peak dates; trajectory | Gross Gain/Loss; page-level metrics | UTF-8-sig. 2015-06 to 2026-08 (Aug partial month). Authoritative for endpoint totals. |
| Top Pages File A (`13-41-45.csv`) | Ahrefs Top Pages — recovery window | Gross Gain/Loss for recovery window (~Dec 2025 → Jul 2026); recovery cohort identification | Cohort-window metrics | 4,969 raw → 4,957 canonical. Homepage prev (~79K) consistent with Dec 2025 trough. Net gain window. |
| Top Pages File B (`13-43-34.csv`) | Ahrefs Top Pages — cohort window | Gross Gain/Loss for cohort window (~Jan 2025 → Jul 2026); cohort classification | Recovery-specific analysis | 5,086 raw → 5,077 canonical. Homepage prev (~135K) consistent with Jan 2025. Net loss window. |
| `organic-keywords_2026-08-04.csv` | Ahrefs Organic Keywords comparison | Branded/non-branded split; intent; keyword-level position movement; current AIO overlap | Property-level traffic totals (cap at 30K rows) | 30,000 rows (cap hit). Comparison dates: 2024-08-01 → 2026-07-30. |
| `orgcompetitors_2026-08-04.csv` | Ahrefs Organic Competitors | Category-level context | Mechanism confirmation | Window inferred ~2024-08 → 2026-07; not confirmed. |
| Page-level keyword exports (4 files) | Ahrefs per-page keyword comparison | Page-specific keyword movements; position change; AIO overlap on specific queries | Portfolio-level metrics | Same comparison window as sitewide keywords (2024-08 → 2026-07). |
| SERP overview (5 queries) | Ahrefs SERP data | SERP feature composition; current occupants; AIO presence at query level | Historical SERP state | Snapshot at export date (2026-08-04). |

---

## Canonical URL Normalization (locked)

Applied to all Top Pages exports going forward. Three rules in order:

1. **Protocol:** `http://` → `https://`
2. **www prefix:** `https://activecampaign.com/` → `https://www.activecampaign.com/`
3. **Trailing slash:** Remove from non-root paths (paths where slash count > 3)

All AC exports already used `https://www.` — rules 1 and 2 caught only the single `http://www.activecampaign.com/` row in File B. Rule 3 collapsed 9 duplicate groups in File B and 12 in File A. Results were unchanged from the first pass; normalization is now formally locked for future analyses.

---

## Calculation Log

### Performance History — Trajectory

| Metric | Source File | Filter / Population | Formula | Verified Value | Status | Notes |
|--------|-------------|---------------------|---------|----------------|--------|-------|
| Starting Traffic (cohort) | Performance History | 2025-01 | Direct read | 327,924 | Recomputed | Cohort window start |
| Ending Traffic (cohort) | Performance History | 2026-07 | Direct read | 286,679 | Recomputed | Last complete month |
| Traffic Change % (cohort) | Performance History | 2025-01 to 2026-07 | (286,679 − 327,924) / 327,924 | −12.6% | Recomputed | Net decline |
| Traffic Retention (cohort) | Performance History | Same | 286,679 / 327,924 | 0.874 | Recomputed | |
| All-time Peak | Performance History | Full history | max(monthly) | 344,565 (2024-02) | Recomputed | Precedes cohort window |
| Pre-decline local peak | Performance History | 2025-01 to 2025-07 | max in range | 334,930 (2025-05) | Recomputed | |
| Decline onset | Performance History | Monthly changes | Largest single-month drop | 2025-07: −11.9% | Recomputed | Sustained decline begins |
| Trough | Performance History | Cohort window | min(monthly) | 230,498 (2025-12) | Recomputed | |
| Peak-to-trough | Performance History | 2024-02 to 2025-12 | (230,498 − 344,565) / 344,565 | −33.1% | Recomputed | From all-time peak |
| Trough-to-current | Performance History | 2025-12 to 2026-07 | (286,679 − 230,498) / 230,498 | +24.4% | Recomputed | Partial recovery |
| Referring Domains, start | Performance History | 2025-01 | Direct read | 43,653 | Recomputed | |
| Referring Domains, end | Performance History | 2026-07 | Direct read | 54,738 | Recomputed | |
| RD Change (cohort) | Performance History | 2025-01 to 2026-07 | (54,738 − 43,653) / 43,653 | +25.4% | Recomputed | RDs gained strongly |

### Source Reconciliation

| Metric | Source | Value | Notes |
|--------|--------|-------|-------|
| Top Pages SUM(Previous) — File B | File B | 347,729 | Cohort window start approximation |
| Performance History Jan 2025 | Performance History | 327,924 | Authoritative cohort start |
| Discrepancy | Cross-check | +19,805 (+6.0%) | Expected (different methodologies). Do not mix sources. |
| Top Pages SUM(Current) — both files | Both files | 306,336 | Consistent — same endpoint |
| Performance History Jul 2026 | Performance History | 286,679 | Authoritative cohort end |
| Discrepancy (current) | Cross-check | +19,657 (+6.9%) | Within expected range |

**Ruling:** Performance History is authoritative for Starting/Ending/Retention metrics. Top Pages is used exclusively for Gross Gain/Loss/Offset Rate. Sources are never mixed within a single calculation.

### Top Pages — File B (Cohort Window, ~Jan 2025 → Jul 2026)

| Metric | Source File | Filter / Population | Formula | Verified Value | Status | Notes |
|--------|-------------|---------------------|---------|----------------|--------|-------|
| Raw URL count | File B | All rows | COUNT | 5,086 | Recomputed | |
| Canonical URL count | File B | Post-normalization | COUNT(distinct) | 5,077 | Recomputed | 9 duplicate groups collapsed |
| SUM(Previous traffic) | File B | All canonical URLs | SUM | 347,729 | Recomputed | |
| SUM(Current traffic) | File B | All canonical URLs | SUM | 306,336 | Recomputed | |
| Gross Gain | File B | URLs where curr > prev | SUM(curr − prev) | 74,592 | Recomputed | |
| Gross Loss | File B | URLs where curr < prev | SUM(prev − curr) | 115,985 | Recomputed | |
| URL-level Net Change | File B | All canonical URLs | Gross Gain − Gross Loss | −41,393 | Recomputed | |
| Gross-Loss Offset Rate | File B | All canonical URLs | Gross Loss / Gross Gain | 1.555 | Recomputed | Losses exceed gains 55% |
| New-URL count | File B | prev=0, curr>0 | COUNT | 356 | Recomputed | |
| New-URL gain | File B | prev=0, curr>0 | SUM(curr) | 23,506 | Recomputed | |
| New-URL Gain Share | File B | | New-URL gain / Gross Gain | 31.5% | Recomputed | |
| Continuing-URL Gain Share | File B | prev>0, curr>prev | Continuing gain / Gross Gain | 68.5% | Recomputed | |
| Lost URLs (curr=0) | File B | prev>0, curr=0 | COUNT | 1,046 | Recomputed | |
| Top 5 traffic share | File B | Top 5 by curr | SUM(top 5) / SUM(all curr) | 62.0% | Recomputed | |
| Top 10 traffic share | File B | Top 10 by curr | SUM(top 10) / SUM(all curr) | 67.8% | Recomputed | |
| Homepage share | File B | Homepage only | Homepage curr / SUM(all curr) | 39.6% | Recomputed | Normalized prev: 136,261; curr: 121,236 |

#### Concentration of Gain — File B (Cohort Window)

| Rank | Page | Gain | Share of Gross Gain | Cumulative |
|------|------|------|---------------------|-----------|
| 1 | `/glossary/email-campaign` | +22,790 | 30.6% | 30.6% |
| 2 | `/es/tools/whatsapp-link-creator` | +11,674 | 15.7% | 46.3% |
| 3 | `/de` | +3,728 | 5.0% | 51.3% |
| 4 | `/blog/best-online-learning-platforms` | +2,656 | 3.6% | 54.9% |
| 5 | `/glossary/email-etiquette` | +2,175 | 2.9% | 57.8% |

**Top 1 page drives 30.6% of cohort-window gross gain. Top 3 pages drive 51.2%. Gain is highly concentrated.**

#### Gross Gain/Loss by Content Type — File B (Cohort Window)

| Content Type | Gross Gain | Gross Loss | Net | Note |
|---|---|---|---|---|
| Blog | +13,866 | −50,662 | −36,796 | Largest net loser by volume |
| Glossary | +36,766 | −27,405 | +9,361 | Internally bifurcated — see §Page-Level Findings |
| Homepage | 0 | −15,025 | −15,025 | Cohort-window decline; partially recovered in recovery window |
| Other | +8,961 | −14,997 | −6,036 | |
| Tools/free | +12,315 | −2,349 | +9,966 | Net gainer; new locale tool page dominates |
| Pricing | +22 | −2,983 | −2,961 | Commercial pages declining |
| Platform | +1,939 | −786 | +1,153 | Slight net gain |
| Locale | +723 | −1,778 | −1,055 | |

### Top Pages — File A (Recovery Window, ~Dec 2025 → Jul 2026)

| Metric | Source | Value | Status | Notes |
|--------|--------|-------|--------|-------|
| Raw URL count | File A | 4,969 | Recomputed | |
| Canonical URL count | File A | 4,957 | Recomputed | 12 duplicate groups collapsed |
| Gross Gain | File A | 129,902 | Recomputed | |
| Gross Loss | File A | 125,016 | Recomputed | |
| URL-level Net Change | File A | +4,886 | Recomputed | Marginally net positive — recovery is narrow |
| Offset Rate | File A | 0.962 | Recomputed | 96.2% of gains offset by losses |
| New-URL Gain Share | File A | 20.0% | Recomputed | |
| Continuing-URL Gain Share | File A | 80.0% | Recomputed | Existing URLs recovering, not new-URL-driven |

#### Concentration of Recovery — File A (Recovery Window)

*New metric, per feedback. Measures how broadly distributed recovery gains are across the portfolio.*

| Rank | Page | Recovery Gain | Share of Gross Gain | Cumulative |
|------|------|---------------|---------------------|-----------|
| 1 | `/` (homepage) | +40,679 | 31.3% | 31.3% |
| 2 | `/glossary/email-campaign` | +22,940 | 17.7% | 49.0% |
| 3 | `/es/tools/whatsapp-link-creator` | +11,674 | 9.0% | 58.0% |
| 4 | `/blog/company-slogans` | +8,911 | 6.9% | 64.9% |
| 5 | `/blog/best-online-learning-platforms` | +2,628 | 2.0% | 66.9% |

**Recovery is highly concentrated. Homepage alone accounts for 31.3% of recovery gross gain. Homepage + glossary/email-campaign together account for 49.0%. The top 5 pages account for 66.9%.** This is a narrow recovery — meaningful for the two breakout pages, but offset by widespread continuing losses across the rest of the portfolio.

### Organic Keywords (2024-08-01 → 2026-07-30)

*Comparison window differs from cohort window. Use for directional analysis only — do not use for cohort-window metrics.*

| Metric | Source | Value | Status | Notes |
|--------|--------|-------|--------|-------|
| Keyword rows | Keywords export | 30,000 | Recomputed | Cap hit — long-tail underrepresented |
| SUM(Previous traffic) | Keywords export | 281,978 | Recomputed | 2024-08 snapshot |
| SUM(Current traffic) | Keywords export | 303,797 | Recomputed | 2026-07 snapshot |
| Branded traffic — previous | Keywords export | 144,852 (51.4%) | Recomputed | |
| Branded traffic — current | Keywords export | 162,305 (53.4%) | Recomputed | |
| Branded change | Keywords export | +17,453 (+12.0%) | Recomputed | Brand query traffic strengthening |
| Non-branded — previous | Keywords export | 137,126 (48.6%) | Recomputed | |
| Non-branded — current | Keywords export | 141,492 (46.6%) | Recomputed | |
| Non-branded change | Keywords export | +4,366 (+3.2%) | Recomputed | Marginal NB gain — concentrated in specific breakouts |
| Keywords with AIO in SERP features (current) | Keywords export | 11,380 (37.9% of rows) | Recomputed | Snapshot of current SERP state; not historical |
| Traffic on AIO-overlap keywords — previous | Keywords export | 106,466 (37.8%) | Recomputed | |
| Traffic on AIO-overlap keywords — current | Keywords export | 161,655 (53.2%) | Recomputed | |
| Traffic change on AIO-overlap keywords | Keywords export | +55,189 | Recomputed | See AIO note below |
| Traffic change on non-AIO keywords | Keywords export | −33,370 | Recomputed | |

**AIO interpretation note:** The keywords export reflects the *current* SERP state — it shows which keywords currently have an AI Overview. It does not show when those AI Overviews appeared or whether they were present during the decline or recovery. The observation is: *keywords that currently have AIO overlap with those that gained traffic across the comparison window.* Whether AI Overviews contributed to, coincided with, or were unrelated to those traffic changes cannot be determined from this export alone. The mechanism question requires manual SERP investigation and Wayback review.

#### Content-Type Traffic Trend (Keywords, 2024-08 → 2026-07)

| Content Type | Prev | Curr | Change | % |
|---|---|---|---|---|
| Homepage | 107,393 | 130,912 | +23,519 | +21.9% |
| Glossary | 46,175 | 56,252 | +10,077 | +21.8% |
| Tools/free | 2,915 | 12,033 | +9,118 | +312.8% |
| Blog | 84,852 | 72,900 | −11,952 | −14.1% |
| Other | 24,910 | 20,797 | −4,113 | −16.5% |
| Pricing | 8,459 | 5,624 | −2,835 | −33.5% |
| Platform/CRM | 5,722 | 4,218 | −1,504 | −26.3% |
| Locale | 1,552 | 1,061 | −491 | −31.6% |

### Organic Competitors (window inferred as ~2024-08 → 2026-07)

| Competitor | Previous Traffic | Current Traffic | Change |
|---|---|---|---|
| mailchimp.com | 728,340 | 853,732 | +17.2% |
| klaviyo.com | 173,463 | 224,558 | +29.5% |
| mailerlite.com | 93,092 | 109,747 | +17.9% |
| brevo.com | 42,400 | 43,906 | +3.5% |
| campaignmonitor.com | 62,241 | 56,774 | −8.8% |
| braze.com | 55,716 | 53,233 | −4.5% |

**Finding:** Major direct peers (Mailchimp, Klaviyo, Mailerlite) gained 17–30% during the same period. Category-wide contraction is insufficient to explain the decline at ActiveCampaign — a site-specific explanation is required. Note: keyword overlap between these competitors and ActiveCampaign is modest (Mailchimp: 1,838 common keywords, Klaviyo: 589); the comparison is directional, not categorical.

---

## Page-Level Findings

*Derived from per-page keyword exports and SERP overview data. Comparison window: 2024-08-01 → 2026-07-30.*

### `/glossary/email-campaign` — Major Gainer (+22,940 in cohort window)

**Page-level keyword summary:**
- 603 keyword rows; prev=1,024, curr=23,976 (+22,952)
- 508 keywords gained position; 11 lost; 274 dropped entirely; 77 new
- The gain is driven by a single keyword cluster: "email marketing campaigns" — multiple country/language variants of the same query, all recovering from positions 18–27 to position 1

**SERP data (email marketing campaigns, US):**
- Ahrefs classifies this as position 1 with Type: "AI Overview, Thumbnail" — AC's page appears as a cited source within the AIO block
- Organic position: 4
- AC is therefore appearing in two places on the SERP: cited within the AIO (position 1) and ranking organically (position 4)

**SERP data (email marketing campaigns, US):**
- Ahrefs classifies this as position 1 with Type: "AI Overview, Thumbnail" — AC's page appears as a cited source within the AIO block
- Organic position: 4
- AC is therefore appearing in two places on the SERP: cited within the AIO (position 1) and ranking organically (position 4)

**Content comparison (old: Sep 2023 snapshot vs. current):**
- Old page title: "What is an Email Campaign?" New page title: "What is an Email Marketing Campaign?"
- Old format: thin Q&A glossary. ~6 short FAQ questions, each 2–4 sentences. Definition: "An email campaign is one email (or a series of email) sent to achieve a specific goal for the marketer." Related terms block at bottom. Minimal word count.
- Current format: comprehensive educational guide. Sections: full definition, "How email campaigns fit into your marketing strategy," "Types of email campaigns" (7 distinct types), "What makes an email campaign effective" (segmentation, clarity, ease of action), "Building your first email campaign" (7-step process), "Common email campaign mistakes" (5 mistakes), FAQs (4 questions). Includes Ducks Unlimited case study citation.
- **Verdict: Major content rewrite confirmed.** The page was substantially expanded between Sep 2023 and current. The transformation is from thin FAQ to a full educational resource — a qualitatively different content format. Word count appears roughly 8–10× the original.

**Observation:** A major visible-content rewrite occurred between September 2023 and August 2026 — the page went from a thin FAQ to a comprehensive educational guide. Page expansion is a plausible contributor to the ranking improvement, but the September 2023 and August 2026 snapshots are the only available comparison points; the rewrite could have occurred at any point in that nearly three-year window. Timing relative to the ranking recovery is not established.

**Updated classification:** Recovery candidate. Major rewrite confirmed; timing relative to ranking recovery unresolved. AI Substitutability: Low-Medium — the query is definitional but AC is being cited *within* the AIO (not replaced by it), indicating the page is functioning as a primary source in the AI summary layer.

---

### `/pricing` — Loser (−2,418 in cohort window, −2,835 in keyword data)

**Page-level keyword summary:**
- 1,579 keyword rows; prev=8,957, curr=7,433 (−1,524)
- 1,107 keywords gained position; 14 lost; **1,057 dropped entirely** (keywords leaving the index)
- Top queries ("activecampaign pricing", "active campaign pricing") still ranking at position 1 — rankings held
- Traffic loss on branded pricing queries while holding position 1

**SERP data (activecampaign pricing):**
- AC pricing page: position 1 (organic) with sitelinks
- Position 2: People also ask — "How much does ActiveCampaign cost?" (diverts intent-satisfied clicks)
- Position 3: help.activecampaign.com overview page (AC's own docs competing internally)
- Position 4: AI Overview — cites help docs and third-party review sites; **does not cite the pricing page itself**
- Positions 5–12: emailtooltester, emailvendorselection, flowium, encharge, systeme.io, imnights, Reddit

**Content comparison (old: Mar 2024 snapshot vs. current):**
- Old headline: "Grow Your Business with ActiveCampaign." Standard 4-tier plan structure. Simple feature matrix. 870+ integrations mention. Classic SaaS pricing page format.
- Current headline: "Autonomous marketing plans." Significant structural changes: new plan names, entirely new WhatsApp pricing dimension (new pricing tracks for WhatsApp-only, Email+WhatsApp), "Active Intelligence" as a recurring feature throughout, 30-day money-back guarantee added, FAQ section added. Page is substantially more complex — three separate pricing tables (Email, WhatsApp, Email+WhatsApp combined) where the old page had one.
- **Verdict: Major structural and content change confirmed.** The pricing page was significantly restructured. The old page was a simple tier comparison. The current page reflects a repositioning toward "autonomous marketing" and adds a new product dimension (WhatsApp).

**Observation:** The pricing page holds position 1 but is surrounded by intent-satisfying SERP features: PAA at position 2, AIO at position 4 citing help docs and review sites (not the pricing page), and review sites at positions 5–12. These features are consistent with click interception and intent diversion. However, the current SERP state does not establish *when* these features appeared relative to the decline, or whether they were the cause. The 1,057 dropped keywords require query-level replacement analysis to identify what currently holds those positions — that step has not been completed. Separately, the page underwent a major structural overhaul (new pricing dimensions, rebranding) during the cohort period; the relationship between those changes and the peripheral keyword loss is not established.

**Updated classification:** Decline candidate. Current SERP conditions (PAA, AIO, review-site dominance) are consistent with click interception and intent diversion despite stable position-1 ranking. Historical causation — whether SERP features, page changes, or other factors drove the keyword decline — remains unconfirmed.

---

### `/blog/sales-development-representative` — Near-Complete Collapse (−2,352 in cohort window)

**Page-level keyword summary:**
- 716 keyword rows; prev=2,198, curr=7 (−2,191 — 99.7% traffic loss)
- 711 keywords completely dropped from Google index
- "sales development representative" (position 1 → 0), "what is a sales development representative" (position 1 → 0), "sdr meaning sales" (position 7 → 0) — all primary queries lost

**Content comparison (old: May 2024 snapshot vs. current):**
- Old page: Title "Sales Development Representative (SDR): Definition and What the Job Is Like." Author: Ernie Santeralli. Published May 2, 2024 (Wayback republish date; original 2022). Sections: What is an SDR, Where do SDRs fit, What does an SDR do, SDR skills, Tips for success. Content includes bullet lists of responsibilities, CRM screenshots, inline CTAs.
- Current page: Same title, same author, same sections, same structure, same examples, same CRM screenshots. Published date shown as September 12, 2022 (original). No meaningful content differences identified.
- **Verdict: Content unchanged.** The near-complete SERP abandonment (2,198 → 7 keywords) happened to an unmodified page.

**Observation:** Google stopped ranking this page for virtually every query it previously held — and a visible page rewrite did not cause that decline. However, the absence of a content change does not rule out other causes: competitors may have improved, freshness expectations may have shifted, intent-matching source preferences may have changed, or internal link support may have changed. To distinguish between Algorithmic Reassessment, competitive displacement, and source-type preference shift, the current SERPs for the major lost queries ("sales development representative," "what is a sales development representative," "sdr meaning") should be inspected to identify what now occupies those positions. The pattern is consistent with algorithmic deprioritization of vendor-blog definitional content in favor of career sources or AI answers, but this remains a candidate explanation, not a confirmed cause.

**Updated classification:** Decline candidate. Near-complete SERP abandonment of unchanged content confirmed. High AI Substitutability — definitional career/job content is among the most AI-answerable query types. Leading mechanism candidate: Algorithmic Reassessment affecting content type or source preference. Requires current SERP replacement analysis to distinguish from competitive displacement.

---

### `/blog/company-slogans` — Mixed (−6,343 cohort window; +8,911 recovery window)

**Page-level keyword summary:**
- 6,906 keyword rows; prev=16,771, curr=25,767 (+8,996)
- 6,132 keywords gained position; 251 lost; 4,108 dropped
- Primary gain: "slogans" moved from position 3 → 1 across multiple country variants (+1,160, +892, +356)
- 86.9% of current traffic from keywords where AIO is currently present in SERP features

**SERP data (company slogans, US):**
- Position 1: Organic — activecampaign.com/blog/company-slogans
- No AIO listed for this query
- This page ranks #1 without AIO competition on its primary branded query

**Note:** No Wayback PDF uploaded for this page. Content comparison not completed. The cohort-window dip and recovery pattern remain unexplained. Wayback review deferred.

**Observation:** The page gained primarily by improving from position 3 to position 1 on "slogans" variants — a ranking improvement, not an AIO-driven result. The high AIO overlap in keyword data (86.9%) reflects the broader keyword set including many long-tail queries; the primary traffic driver ("company slogans") has no AIO. The cohort-window decline (−6,343) followed by recovery (+8,911) suggests the page dipped and recovered — possibly a volatility event, possibly a deliberate ranking experiment by Google. Content comparison (Wayback) still pending for this page.

---

### `Email Subject Line Generator` — URL Migration (not traffic loss)

**Finding from SERP data:** The tool was migrated from `/free-marketing-tools/subject-line-generator` (old URL) to `/tools/subject-line-generator` (current URL). The SERP data confirms `/tools/subject-line-generator` is live and ranking at position 7 for "email subject line generator." The old URL's traffic appearing as prev=2,169, curr=0 in the Top Pages export is a URL migration artifact — the page still exists under a new path.

**SERP context (email subject line generator):**
- Positions 1–6 occupied by AI-native tools (yamm, copy.ai, omnisend, stensul, mailmeteor, jasper.ai)
- AC tool at position 7
- No AIO present on this query

**Observation:** The current SERP confirms AI-native tools occupy positions 1–6 today. Competitive Displacement by AI-native tools is the leading candidate for the position loss, but current SERP state does not establish whether that competitive structure caused the *historical* decline or developed after it. The tool exists and ranks — this is a positioning and competitive story, not a content disappearance. Historical timing unconfirmed.

---

### `/platform/sales-crm` — CRM Page (−924 on "active campaign crm" keyword)

**SERP data (active campaign crm):**
- Position 1: Organic — activecampaign.com/platform/sales-crm
- Position 2: AI Overview — cites AC's own sales-crm page, about page, pricing page, plus external review sites
- Position 3: People also ask — "Does ActiveCampaign have a CRM?", "Is it a good CRM?", "What are the top 3 CRM systems?"
- Positions 4–12: organic results including review sites and AC blog posts

**Content comparison (old: Aug 2024 snapshot vs. current):**
- Old headline: "Optimize your workflow and close deals faster." Subhead: "Automate meaningful outreach across the entire sales cycle." Features emphasized: track/manage/automate, pipelines, notifications, task creation, deal updates. Traditional CRM automation positioning. "180k customers."
- Current headline: "Your CRM for growth, backed by autonomous marketing." New AI-first positioning: "Active Intelligence" analysis, "win probability," "autonomous marketing." FAQ section added. G2 14,000+ reviews. New positioning as AI-driven CRM rather than automation CRM.
- **Verdict: Significant content and positioning rewrite confirmed.** The CRM page was repositioned from automation-centric to AI/autonomous marketing-centric. This aligns with AC's broader product pivot. The page now emphasizes Active Intelligence, predictive win probability, and autonomous workflows rather than pipeline management and task automation.

**Observation:** The CRM page holds position 1 and is cited in the AIO at position 2. Current SERP conditions are consistent with AIO click-through reduction — the AIO answers core intent without requiring a click. The content rewrite moved the page toward AI-driven positioning; whether this helped, hurt, or was neutral for traditional CRM queries is not established. Historical causation unconfirmed.

---

## Wayback Comparison — Completed

*Source: Quinn uploaded PDF snapshots of five archived pages. Comparison completed against live pages fetched 2026-08-04.*

| Page | Archive Date | Content Changed? | Key Finding |
|------|-------------|-----------------|-------------|
| `/glossary/email-campaign` | Sep 2023 | **Yes — major rewrite** | Old: thin FAQ (6 Q&A pairs, ~300 words). New: full educational guide (7 sections, 8–10× word count, types, strategy, case study). Rewrite occurred at some point in the Sep 2023 → Aug 2026 interval. Timing relative to ranking recovery not established by available snapshots. |
| `/pricing` | Mar 2024 | **Yes — major restructure** | Old: simple 4-tier comparison. New: 3 separate pricing tables (Email, WhatsApp, Email+WhatsApp), new plan names, "Autonomous marketing" branding, Active Intelligence features throughout, 30-day guarantee, FAQ section. Page complexity increased significantly. |
| `/platform/sales-crm` | Aug 2024 | **Yes — positioning rewrite** | Old: automation-centric CRM ("optimize workflow and close deals faster"). New: AI-first positioning ("autonomous marketing," "win probability," Active Intelligence). Core features retained but reframed around AI. |
| `/blog/sales-development-representative` | May 2024 | **No — content unchanged** | Same title, author, sections, examples, screenshots, and structure. Near-complete SERP abandonment (2,198 → 7 keywords) happened to an unmodified page. |
| `/tools/subject-line-generator` | Nov 2025 | **No content change; URL already migrated** | By Nov 2025, URL was already at `/tools/subject-line-generator` (migration predates this snapshot). Content identical to current. Competitive landscape (AI tools at positions 1–6) is the relevant change, not page content. |

### Wayback Findings — Interpretive Summary

**Glossary/email-campaign:** A major visible-content rewrite occurred between September 2023 and August 2026. The old page was thin and definitional; the new page is substantive and structured in a way that supports both organic ranking and AIO citation. Page expansion is a plausible recovery driver, but the available snapshots — nearly three years apart — do not establish when the rewrite happened relative to the ranking improvement. The rewrite could have preceded, coincided with, or followed the ranking recovery. Treat as a supporting candidate, not a confirmed cause.

**Pricing:** Structural changes were extensive and predate the cohort period. The pricing decline (−2,835 on keyword data) is more likely driven by SERP feature displacement (PAA + AIO + review-site consolidation) than by the page changes themselves — the page still holds position 1 on primary branded queries. However, the increase in page complexity may have reduced relevance signals for peripheral queries.

**Sales-CRM:** Page was repositioned before or during the cohort period. Holds position 1 and is cited in AIO — the rewrite did not harm rankings. Traffic decline on "active campaign crm" queries is consistent with AIO click-through capture rather than ranking loss.

**SDR blog:** Strongest evidence of algorithmic deprioritization. Google stopped ranking an unchanged page for nearly all of its keywords. This is not a content failure — it is a structural shift in how Google serves definitional career/job queries. The query type (SDR definition, SDR meaning) is among the most AI-answerable and least click-dependent in the portfolio.

**Subject line generator:** The migration (from `/free-marketing-tools/` to `/tools/`) was complete before the Nov 2025 snapshot. The current competitive position (position 7 behind AI-native tools) reflects competitive displacement in the query space rather than a page quality issue.

---

## Data Quality Warnings

1. **Two Top Pages comparison windows.** File A (~Dec 2025 previous) = recovery window; File B (~Jan 2025 previous) = cohort window. Comparison dates are inferred from homepage previous traffic matched to Performance History — not stated in the file. Do not present File A metrics as cohort-window figures or vice versa.

2. **Keywords export cap hit at 30,000 rows.** Long-tail traffic underrepresented. All keyword-derived figures are scoped to the top 30,000 keywords and qualified as such.

3. **AIO overlap is a current-state observation, not a historical record.** The keywords export shows which queries currently have an AI Overview — it cannot tell us when those overviews appeared, whether they were present during the decline period, or whether AIO interception caused or followed the traffic changes. The AIO paradox (AIO-overlap keywords gaining traffic) is consistent with multiple interpretations. The Wayback content comparisons are now partially complete but do not resolve the AIO timing question — historical AIO state cannot be inferred from current SERP snapshots or archived page content.

4. **Strong RD growth (+25.4%) weighs against broad domain-level link loss as the primary explanation.** This does not fully eliminate link profile changes at the page level or for specific content types.

5. **Category-wide contraction is insufficient to explain the decline.** Major direct peers gained 17–30% in the same window. A site-specific explanation is required. This is not equivalent to confirming a specific mechanism — multiple site-specific causes remain possible (algorithmic quality signal, content mix, SERP feature displacement, competitive positioning shift).

6. **Homepage normalization verified.** `http://www.activecampaign.com/` (prev=1,120, curr=0) was merged with the https homepage under canonical normalization. Post-normalization homepage: prev=136,261, curr=121,236.

7. **Subject line generator classified as URL migration, not traffic loss — but calculations are unadjusted.** The `/free-marketing-tools/subject-line-generator` prev=2,169, curr=0 in Top Pages is a URL migration artifact. The tool now lives at `/tools/subject-line-generator`, confirmed by SERP data and the Nov 2025 Wayback snapshot. However, the current Gross Gain, Gross Loss, New-URL count, Lost URL count, Tools/free content-type totals, and Offset Rate figures are computed from unadjusted exports — the old URL contributes to Gross Loss / Lost URL count and the new URL contributes to New-URL gain. A fully adjusted calculation would merge these as a continuing asset. The migration pair is a single confirmed case; the company-level story is unlikely to change materially, but adjusted figures should be computed before locking the calculation log for record generation. Flagged for v0.2.

8. **Glossary content type is internally bifurcated.** One page (`/glossary/email-campaign`) accounts for 22,790 of 36,766 total glossary gross gain in File B — 62% of all glossary gains. Other glossary pages are predominantly declining (−27,405 gross loss). "Glossary" as a content type is not uniformly recovering — one page is doing the work.

9. **Blog content type includes multiple content subtypes.** Several of the largest blog losers are generic, highly AI-answerable pages. The observation is that some of the largest individual losers have high AI-substitutability. Whether this pattern holds across the full blog cohort should be confirmed in the Portfolio Durability Analysis, not assumed from these top-10 examples alone.

10. **Competitors window not confirmed.** Inferred as consistent with keywords (2024-08 to 2026-07). Confirm before using for exact competitive sizing.

---

## Readiness Status

**Readiness Status:** Ready for Record Generation

**Evidence Confidence:**
- Observational (what happened): High — trajectory, cohort-window decline, trough, recovery onset, content-type bifurcation, and page-level ranking movements all supported by multiple sources.
- Causal (why it happened): Medium — Wayback comparison eliminated a visible content-change cause for the SDR collapse and confirmed a major rewrite occurred for the glossary page. But it did not establish the timing of the glossary rewrite relative to the ranking recovery, did not confirm historical AIO effects, and did not resolve the pricing or subject-line-generator mechanism questions. Multiple page-level mechanisms appear to be operating simultaneously.

**Confidence by Conclusion:**

| Finding | Confidence |
|---------|-----------|
| Net decline over cohort window (−12.6%) | High |
| Trough: Dec 2025 at 230,498 | High |
| Decline onset: Jul 2025 | High |
| Partial recovery from trough (+24.4%) | High |
| Recovery is highly concentrated (top 2 pages = 49% of gross gain) | High |
| Strong RD growth (+25.4%) | High |
| Category-wide contraction insufficient to explain decline | High |
| Blog content net-negative over cohort window | High |
| Glossary gain concentrated in single page | High |
| Pricing traffic declining while holding position 1 (SERP feature displacement) | High |
| SDR page — near-complete SERP abandonment of unchanged content | High |
| Major rewrite confirmed for glossary/email-campaign; timing relative to recovery unresolved | Medium |
| Subject line generator — URL migration confirmed; competitive displacement by AI tools (current SERP) | High / Medium |
| CRM page — repositioned to AI/autonomous framing; holds position 1; cited in AIO | High |
| Primary company-level mechanism: pending Portfolio Durability Analysis | Low — premature to lock |
| Glossary rewrite as causal driver of ranking recovery | Low-Medium — plausible candidate; timing not established |
| SDR collapse caused by algorithmic deprioritization of unchanged definitional content | Medium — consistent pattern; replacement analysis not completed |
| AIO interception as mechanism for pricing/CRM traffic loss | Low-Medium — current SERP consistent; historical AIO state unconfirmed |
| Specific Google update alignment | Low — update calendar cross-reference not completed |

**What can be supported:**
- Full portfolio overview (cohort window): total URLs, gross gain/loss, offset rate, top-page concentration
- Recovery window metrics: gross gain/loss, concentration of recovery, offset rate
- Content-type breakdown: blog, glossary, tools, pricing, platform directional analysis
- Branded/non-branded split (keyword export, scoped)
- Competitive positioning (site-specific decline while major peers gain)
- Trajectory annotation (peak, trough, decline onset, recovery onset)
- Page-level SERP context and content comparison for 5 priority pages
- Content rewrite as correlate of glossary/email-campaign recovery (medium-high confidence)
- Algorithmic deprioritization of unchanged definitional content (SDR page — high confidence)
- URL migration confirmed and classified for subject line generator
- Pricing and CRM pages: structural changes confirmed; primary mechanism is SERP feature displacement, not content quality

**What cannot be supported without additional data:**
- Timing of glossary rewrite relative to ranking recovery — requires an intermediate Wayback snapshot between Sep 2023 and the ranking movement date
- AIO interception as confirmed *historical* mechanism — requires AIO archive, not available from current export
- Historical cause of 1,057 dropped pricing keywords — requires query-level replacement analysis
- Current SERP replacement for lost SDR queries — requires manual SERP inspection to distinguish Algorithmic Reassessment from competitive displacement
- Subject line generator historical decline timing — competitive structure may have developed before or after the traffic loss
- Company-slogans page Wayback comparison — PDF not uploaded
- Company-level primary mechanism — premature to assign before Portfolio Durability Analysis tests whether SDR-style abandonment repeats across the decline cohort; current evidence shows multiple mechanisms operating simultaneously (rewrite-associated recovery, stable-ranking CTR compression, unchanged-content abandonment, URL migration, competitive displacement)

---

*Analysis completed: 2026-08-04 (v0.1r) | Wayback findings incorporated: 2026-08-04 (v0.1s) | Calibration corrections: 2026-08-04 (v0.1t) | Status: Ready for v0.2 Record Generation*
