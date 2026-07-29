# S.LAB Research Project #1 — Scrunch AI Citation Validation Study
## Prompt Set v1 (49 prompts, 14 companies)

**Purpose:** Test whether content patterns identified via traffic analysis (Phase 3 deep dives) are reflected in current AI citation behavior. Tests RQ1 (do content-led growers get cited for the same content that drove growth?), RQ2 (what content types are most commonly cited across the cohort?), RQ3 (where do traffic-growth and AI-citation behavior diverge?).

**Execution rules:** Run each prompt once by default. Rerun only on a genuinely surprising result relative to the deep-dive evidence — confirms or disconfirms, not arbitrary. Record per prompt: cited (Y/N), page cited, content type (closed list below), notable mismatch, single-run vs. rerun-confirmed. Aggregate observed counts only — never report implied rates. Scope conclusions to the specific AI engine(s) tested.

**Closed content-type taxonomy:** Glossary Page · Blog/Educational Article · Collection/Category Page · Product Feature Page · Interactive Tool/Calculator · Product/Integration Page · Comparison Page · Homepage · Pricing Page · Documentation · N/A (no single owned asset / open category test)

**Note on Optional Comparison Prompts:** Navan↔Ramp is a single shared prompt (listed once, under Ramp) — running it twice would inflate the count without adding evidence. GitHub and CloudBees have no Optional Comparison Prompt because their own deep dives name no direct competitor (only category-table peers) — forcing one would not be evidence-based.

---

### Developer Tools / DevOps

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 1 | GitHub | Category | "What is a Git repository?" | N/A — open test | N/A | GitHub has no owned content lever (75% of top current-traffic pages are viral third-party repos, not GitHub content). Tests whether GitHub gets cited at all for a core category query despite the -72.0% decline. |
| 2 | GitHub | Commercial | "What's the best platform for hosting and managing source code repositories?" | N/A — open test | N/A | Tests AI citation in a buying-evaluation context for GitHub's core product category. |
| 3 | GitHub | Comparison | "GitHub Actions vs CircleCI: which is better for CI/CD?" | N/A — open test | N/A | Named pairing from the dedicated GitHub vs. CircleCI Comparative Synthesis brief — decline vs. recovery in the same category, directly relevant to RQ3. |
| 4 | CircleCI | Growth Asset | "What are the different deployment strategies and which one should I choose?" | `/blog/deployment-strategies-types-trade-offs-and-how-to-choose/` | Blog/Educational Article | Confirmed dominant growth page (31.5% of current top-page traffic) behind CircleCI's recovery. Direct RQ1 test. |
| 5 | CircleCI | Category | "What is a CI/CD pipeline?" | N/A — open test | N/A | Broad category query for Dev Tools/DevOps. |
| 6 | CircleCI | Commercial | "What are the best CI/CD tools for software teams?" | N/A — open test | N/A | Buying-evaluation query for CircleCI's core category. |
| 7 | CircleCI | Comparison | "How does CircleCI compare to GitLab CI and Bitbucket Pipelines?" | N/A — open test | N/A | GitLab and Bitbucket are explicitly named in CircleCI's own deep dive as its closest direct competitors. |
| 8 | Harness | Growth Asset | "What is a DevOps pipeline?" | `/blog/what-is-a-devops-pipeline-stages-benefits-and-ci-cd-explained` | Blog/Educational Article | The single largest gaining page (~61% of net Top Pages gain), holding position 1 across dozens of keyword variants even where Google shows an AI Overview — the cohort's strongest keyword-level AI-resistance evidence. High-value RQ1 test. |
| 9 | Harness | Category | "What is continuous delivery?" | N/A — open test | N/A | Broad category query distinct from the growth-asset query above. |
| 10 | Harness | Commercial | "What's the best CI/CD platform for enterprise software delivery?" | N/A — open test | N/A | Buying-evaluation query. |
| 11 | CloudBees | Growth Asset | "How do I delete a local and remote git branch?" | `/blog/git-delete-branch-how-to-for-both-local-and-remote` | Blog/Educational Article | Dominant gainer (+14,023 traffic, ~35% of net gain) via a ranking breakthrough on an existing page. Important caveat carried into analysis: this is generic, brand-agnostic developer content — CloudBees's own commercial/Jenkins pages lost ground in the same window, so a citation here would NOT indicate commercial discoverability. |
| 12 | CloudBees | Category | "What is continuous integration?" | N/A — open test | N/A | Broad category query. |
| 13 | CloudBees | Commercial | "What's the best Jenkins alternative for CI/CD?" | N/A — open test | N/A | Directly tests the RQ3 mismatch flagged in the deep dive: CloudBees's Jenkins-specific commercial pages declined/vanished from rankings over the study window even as generic git content grew. |

### Customer Support / Help Desk

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 14 | Freshworks | Growth Asset | "How do I check if a website is down right now?" | `/website-monitoring/is-it-down/` | Product Feature Page | Explicitly flagged in the deep dive as "exactly the kind of single-fact lookup query AI answer engines... are well-suited to answer directly without a click-through" — the cohort's cleanest direct AI-interception decliner test. Note: this is a secondary contributor (13.6% of the "lost ranking" bucket), not the dominant cause of Freshworks's decline (the Dec 2025 "Dew" redesign is) — don't overstate if cited or not cited. |
| 15 | Freshworks | Category | "What is help desk software?" | N/A — open test | N/A | Broad category query. |
| 16 | Freshworks | Commercial | "What are the best help desk and customer support platforms?" | N/A — open test | N/A | Buying-evaluation query. |

### Customer Success

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 17 | Gainsight | Growth Asset | "How do you calculate Net Promoter Score (NPS)?" | NPS-calculator interactive resource (gainsight.com) | Interactive Tool/Calculator | Representative of Gainsight's broad-based, non-branded content growth (+174.5%, the defensible non-contaminated figure). Chosen over the Skilljar acquisition pages because it tests the content-led portion of growth, which is independently replicable; the Skilljar mechanism is a one-time acquisition event, not a content pattern. |
| 18 | Gainsight | Category | "What is customer success software?" | N/A — open test | N/A | Shared category query with Akita (same category) — intentional, supports RQ2 cross-company aggregation. |
| 19 | Gainsight | Commercial | "What are the best customer success platforms for SaaS companies?" | N/A — open test | N/A | Shared commercial query with Akita — intentional, tests whether a mid-sized player (Gainsight) and a small player (Akita) get cited differently for the same buying query (RQ3). |
| 20 | Akita | Growth Asset | "What are the steps to a successful customer onboarding process?" | `/blog/steps-to-successful-customer-onboarding/` | Blog/Educational Article | The page that drove a ranking breakthrough from position ~70-100 to top-3 across dozens of keyword variants, with zero backlinks — the cleanest "content quality, not links" mechanism in the cohort. |
| 21 | Akita | Category | "What is customer success software?" | N/A — open test | N/A | Same query as Gainsight #18 — see rationale there. |
| 22 | Akita | Commercial | "What are the best customer success platforms for SaaS companies?" | N/A — open test | N/A | Same query as Gainsight #19. Akita is a small company; testing whether it surfaces at all alongside a larger category peer is itself an informative RQ3 result regardless of outcome. |

### Sales Intelligence / Sales Engagement

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 23 | ZoomInfo | Growth Asset | "What is a go-to-market strategy?" | `pipeline.zoominfo.com/sales/go-to-market-strategy` | Blog/Educational Article | ZoomInfo is a non-content-driven grower (the +154.7% headline is largely a programmatic profile-page artifact); per the frozen mechanism branch, this targets the real, pre-existing, multi-year content hub (`pipeline.zoominfo.com`) as the substitute. |
| 24 | ZoomInfo | Category | "What is sales intelligence software?" | N/A — open test | N/A | Broad category query. |
| 25 | ZoomInfo | Commercial | "What are the best sales intelligence platforms for B2B sales teams?" | N/A — open test | N/A | Buying-evaluation query. |
| 26 | ZoomInfo | Comparison | "How does ZoomInfo compare to Cognism for sales intelligence?" | N/A — open test | N/A | Cognism is ZoomInfo's confirmed direct competitor (dedicated Comparison Brief); Cognism declined -52.2% in the same window — a useful RQ3 contrast pairing. |

### Marketing Automation

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 27 | Braze | Growth Asset | "What is AI marketing automation?" | `/resources/articles/ai-marketing-automation` | Blog/Educational Article | **Caveat:** the deep dive does not name a single dominant top-traffic article among Braze's 20+ gaining `/resources/articles/` pages — growth here is broad-based, not concentrated on one identifiable page. This AI-topic-cluster page is named in the deep dive and is a real, verified asset, but is described as a "modest" contributor, not the literal top page. Flagging this explicitly per the project's no-invented-facts rule rather than presenting it as the single growth driver. |
| 28 | Braze | Category | "What is marketing automation software?" | N/A — open test | N/A | Broad category query. |
| 29 | Braze | Commercial | "What are the best marketing automation platforms for mobile apps?" | N/A — open test | N/A | Buying-evaluation query, mobile-specific to reflect Braze's positioning. |
| 30 | Braze | Comparison | "How does Braze compare to ActiveCampaign for marketing automation?" | N/A — open test | N/A | ActiveCampaign is Braze's confirmed direct competitor (dedicated Comparison Brief); ActiveCampaign declined -16.1% in the same window. |

### HR / People Operations

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 31 | Rippling | Growth Asset | "What is a remote job?" | `/glossary/remote-job` | Glossary Page | Rippling's largest glossary gainer (83→9,046 traffic) — the cohort's first AI-Overview-resistance corroborating case. Direct RQ1 test of whether AI citation tracks this specific traffic pattern. |
| 32 | Rippling | Category | "What is an HRIS system?" | N/A — open test | N/A | Broad category query. |
| 33 | Rippling | Commercial | "What's the best all-in-one HR and payroll software?" | N/A — open test | N/A | Buying-evaluation query. |
| 34 | Rippling | Comparison | "How does Rippling compare to Paylocity for HR and payroll?" | N/A — open test | N/A | Paylocity is Rippling's confirmed direct competitor (dedicated Comparison Brief); Paylocity declined -31.8% in the same window. |

### Finance / Spend Management

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 35 | Navan | Growth Asset | "What is travel and expense management?" | `/resources/glossary/what-is-travel-expense-management` | Glossary Page | Named gainer page from Navan's broad, internationally-distributed glossary content cluster (the dominant driver, ~96% of net non-branded gain); chosen over consumer-travel glossary pages (e.g., "what is aisle seat") as the most commercially representative named asset. |
| 36 | Navan | Category | "What is corporate travel management software?" | N/A — open test | N/A | Broad category query. |
| 37 | Navan | Commercial | "What's the best corporate travel and expense management platform?" | N/A — open test | N/A | Buying-evaluation query. |
| 38 | Ramp | Growth Asset | "How do I calculate mileage reimbursement?" | `/mileage-reimbursement-calculator` | Interactive Tool/Calculator | Named, distinct free-tool asset (8.8% of net gain) — a different content type than the glossary/blog pattern seen elsewhere, useful for RQ2's content-type aggregation. |
| 39 | Ramp | Category | "What is spend management software?" | N/A — open test | N/A | Broad category query. |
| 40 | Ramp | Commercial | "What's the best corporate card and expense management platform for startups?" | N/A — open test | N/A | Buying-evaluation query. |
| 41 | Ramp / Navan | Comparison | "How does Ramp compare to Navan for travel and expense management?" | N/A — open test | N/A | Confirmed pairing via the dedicated Navan vs. Ramp Comparison Brief (same category, within-cohort). Listed once (not duplicated under both companies) — Navan's content-only growth with no algorithm exposure vs. Ramp's Medium-High algorithm-update exposure on its long tail is a direct RQ3 test. |

### Security / Compliance

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 42 | Vanta | Growth Asset | "What is a risk management framework?" | `/collection/grc/risk-management-frameworks` | Collection/Category Page | Vanta's single largest gainer (480→21,462, ~45% of net Top Pages gain), ranking positions 1-9 across many high-volume queries mostly carrying an AI Overview feature. |
| 43 | Vanta | Category | "What is SOC 2 compliance?" | N/A — open test | N/A | Broad category query. |
| 44 | Vanta | Commercial | "What's the best SOC 2 compliance automation software?" | N/A — open test | N/A | Buying-evaluation query. |
| 45 | Vanta | Comparison | "How does Vanta compare to Drata and Secureframe for compliance automation?" | N/A — open test | N/A | Drata and Secureframe are explicitly named in Vanta's own deep dive as its two closest direct competitors, which moved in opposite directions (+24.1% / -35.2%) in the same window — a strong RQ3 test. |

### Product Analytics / Product Management

| # | Company | Prompt Type | Prompt Text | Target / Expected Page | Content Type | Rationale |
|---|---|---|---|---|---|---|
| 46 | PostHog | Growth Asset (substitute) | "What is the difference between churn rate and retention rate?" | `/product-engineers/churn-rate-vs-retention-rate` | Blog/Educational Article | PostHog is a non-content-driven grower (~95% of net gain traces to brand-search demand for "posthog" itself, at a constant ranking position — not a content or SEO achievement). Per the frozen mechanism branch, this targets PostHog's small secondary "product-engineers" content cluster as the mechanism-appropriate substitute, since there is no content-driven growth pattern to test directly. |
| 47 | PostHog | Category | "What is product analytics software?" | N/A — open test | N/A | Broad category query. |
| 48 | PostHog | Commercial | "What are the best product analytics tools for engineering teams?" | N/A — open test | N/A | Buying-evaluation query. |
| 49 | PostHog | Comparison | "How does PostHog compare to Mixpanel for product analytics?" | N/A — open test | N/A | Mixpanel is explicitly named in PostHog's own deep dive as its closest direct competitor (+84.8% growth, same "Continuous Acceleration" trajectory) — tests whether two same-shape growers get cited differently. |

---

## Summary by company (prompts run)

| Company | Growth Asset | Category | Commercial | Comparison | Total |
|---|---|---|---|---|---|
| GitHub | — (no owned asset) | 1 | 1 | 1 | 3 |
| CircleCI | 1 | 1 | 1 | 1 | 4 |
| Harness | 1 | 1 | 1 | — | 3 |
| CloudBees | 1 | 1 | 1 | — (no named competitor) | 3 |
| Freshworks | 1 | 1 | 1 | — (no named competitor) | 3 |
| Gainsight | 1 | 1 | 1 | — (no named competitor) | 3 |
| Akita | 1 | 1 | 1 | — (not a genuine buyer query) | 3 |
| ZoomInfo | 1 | 1 | 1 | 1 | 4 |
| Braze | 1 | 1 | 1 | 1 | 4 |
| Rippling | 1 | 1 | 1 | 1 | 4 |
| Navan | 1 | 1 | 1 | — (shared, listed under Ramp) | 3 |
| Ramp | 1 | 1 | 1 | 1 (shared with Navan) | 4 |
| Vanta | 1 | 1 | 1 | 1 | 4 |
| PostHog | 1 (substitute) | 1 | 1 | 1 | 4 |
| **Total** | | | | | **49** |

## Known caveats to carry into the citation analysis (not to be smoothed over)

- **GitHub** has no Growth Asset Prompt because no single owned content page explains its decline — its traffic loss is structural (third-party repo virality), not a content pattern an AI engine could "intercept." A non-citation here is expected and not informative about AI-displacement on its own.
- **Braze's** Growth Asset Prompt targets a named but secondary AI-topic-cluster page, not the literal top-traffic article, because no single dominant page was identified among its 20+ gaining articles in the deep dive.
- **CloudBees's** Growth Asset Prompt targets generic, brand-agnostic developer content (git branch deletion) — if cited, this would not indicate commercial discoverability, since the deep dive found CloudBees's actual commercial/Jenkins pages losing ground over the same window. This is the intended test, not an error.
- **PostHog's** Growth Asset Prompt is explicitly a substitute, not a test of the real growth driver (brand-search demand has no equivalent AI-citation test) — treat any result here as informative about PostHog's secondary content cluster only, not about its dominant growth mechanism.
- **Akita and Gainsight** share identical Category and Commercial prompts by design (same category, intentional cross-company test) — do not read this as a methodology error.
