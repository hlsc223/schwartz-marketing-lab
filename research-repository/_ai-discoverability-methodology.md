# AI Discoverability Methodology

Current thresholds and protocols for the AI Discoverability section of company records. This document carries the operational definitions so the schema stays stable as measurement approaches evolve.

**Version:** V2.0 | **Effective:** 2026-07-11

---

## AI Visibility Strength — Current Thresholds

| Strength | Definition |
|----------|-----------|
| **High** | Brand appears in ≥40% of tested prompts, or appears consistently across 3+ AI engines. |
| **Medium** | Brand appears in 15–40% of tested prompts, or appears on some engines but not others. |
| **Low** | Brand appears in <15% of tested prompts, or only sporadically. |
| **Unknown** | Insufficient data to classify. |

**Important:** these thresholds assume a reasonably representative prompt set. A result of 43% from 50 prompts is not equivalent to 43% from 500 prompts. Always document prompt set size, composition, and engine coverage in the Coverage section of the record so classifications remain interpretable as the methodology evolves.

---

## What Constitutes a Representative Prompt Set

A prompt set is reasonably representative when it covers:

- **Multiple prompt categories** — at minimum, informational and commercial. Branded prompts alone are insufficient.
- **Multiple engines** — at minimum, ChatGPT and one other major engine (Claude, Gemini, Perplexity, or equivalent).
- **Sufficient volume** — at minimum, 20 prompts per category. Fewer than 10 total prompts is insufficient for any classification above Unknown.
- **Relevance** — prompts should reflect queries a real prospect or user in the company's category would ask, not generic brand-name queries.

---

## Handling Prompt Set Changes Over Time

When a company record is updated with a new AI discoverability measurement and the prompt set has changed materially (different size, composition, or engine mix):

1. Note the change in the Coverage section of the new measurement.
2. Do not directly compare the new citation rate to the old rate as if they are equivalent.
3. Use "Trend Compared To" to specify what the trend is relative to.
4. If the prompt sets are too different to compare, set AI Discoverability Trend = Unknown and explain in the Historical Amendments entry.

---

## Threshold Change Protocol

When these thresholds change:

1. Increment the methodology version number.
2. Update the table above with new thresholds and the date they took effect.
3. Flag any records classified under the previous thresholds as "Needs Revalidation" in the index.
4. Update the repository methodology changelog in `README.md`.

---

## Changelog

| Version | Date | Change |
|---------|------|--------|
| V2.0 | 2026-07-11 | Initial thresholds established. High ≥40%, Medium 15–40%, Low <15%. |
