# GitHub — Phase 3 Baseline Data Request (v1)

Per Operating Manual Section 6a (V1.7). This is the **baseline** request — identical structure for every Phase 3 company. A follow-up request with specific, justified add-ons will come after I review this batch.

## 1. Top Pages (current)
Ahrefs Site Explorer → Top Pages, github.com, current snapshot. Export as-is (CSV/screenshot fine).

## 2. Top Pages (historical comparison)
Same report, but compare **window start (Jan 2025) vs. current** if Ahrefs' historical Top Pages view supports that date range. If it only supports "vs. N days/months ago," set it to the closest available match to Jan 2025 and note the actual comparison date used.

## 3. Organic Keywords — tagged branded vs. non-branded
Ahrefs Organic Keywords export for github.com. Please tag (a simple column flag is fine) which keywords are branded (contain "github," "github.com," "octocat," etc.) vs. non-branded (everything else) so I can compute the branded/non-branded traffic split.

## 4. Best by Links
Ahrefs Best by Links report for github.com — current snapshot.

## 5. Referring Domains trend
Already flagged in Pass 2 as showing 0 for every month — likely an Ahrefs computation gap at GitHub's scale. If there's any alternate view (e.g., a different report or export format) that returns a non-zero series, that would be useful. If not, no need to keep digging on this one — already documented as a limitation.

## 6. AI Observation Protocol
10 prompts, run once each, logged-out/incognito where possible. For each: tool used, model/version, date run, whether github.com appears, exact citation snippet or ranking position if present, "not present" if absent.

**Commercial**
1. "best git hosting platform for teams"
2. "best CI/CD platform for developers"

**Comparison**
3. "GitHub vs GitLab"
4. "GitHub vs Bitbucket"

**Problem/how-to**
5. "how do I resolve a merge conflict on GitHub"
6. "how do I revert a commit on GitHub"

**Alternative**
7. "alternatives to GitHub"
8. "open source alternatives to GitHub"

**Educational**
9. "what is a pull request"
10. "what is GitHub Actions"

Run across ChatGPT, Perplexity, and Google (checking for an AI Overview). A simple log format works:

| # | Prompt | Tool | Model/version | Date | GitHub present? | Citation/position | Notes |
|---|---|---|---|---|---|---|---|
| 1 | | | | | | | |

That's the full baseline — once this comes back I'll review it, identify what's worth chasing (e.g., a specific Content Gap comparator, a Wayback check, a specific keyword cluster), and send a short, justified follow-up request rather than asking for everything up front.
