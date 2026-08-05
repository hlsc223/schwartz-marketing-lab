# Evidence Parsing Rules — Extended Reference

Supplementary rules for the S.LAB Company Analysis skill. Load this file when you encounter edge cases not covered in SKILL.md.

---

## Ahrefs Export Edge Cases

### Encoding
Ahrefs Top Pages exports are typically UTF-16 encoded. If reading with Python:
```python
df = pd.read_csv('file.csv', encoding='utf-16', sep='\t')
```

### Column name variations
Ahrefs UI and export column names vary by export type and date:
- Current period traffic may be labeled "Traffic", "Current traffic", or "Estimated traffic"
- Previous period traffic may be labeled "Previous traffic", "Traffic (prev)", or similar
- Always inspect column headers before writing parsing logic

### Country filter
Ahrefs estimates are country-scoped by default. Confirm whether the export is Global or US-only — mixing scopes invalidates comparisons.

### "Top Pages" vs "Domain Overview" exports
- **Top Pages export:** URL-level rows, suitable for Gross Gain/Loss/Offset Rate calculations
- **Domain Overview:** property-level summary figures; use only for starting/ending totals if no Top Pages export available — mark as "Ahrefs Dashboard" in Data Provenance

---

## GSC Export Edge Cases

### Date range alignment
Chart.csv and Pages.csv may cover different date ranges depending on how the export was configured. Verify the date coverage of each file before using figures in comparison.

### Impression vs. click divergence
Property-level divergence (impressions increasing while clicks decrease) is the primary signal for AIO interception in the absence of direct AIO testing. Document the direction and magnitude:
- impressions +X%, position Y→Z, CTR X%→Y%, clicks ±N%
- This pattern alone supports AIO Portfolio Susceptibility and Mechanism Confidence but does not confirm AIO Observed Effect = "Intercepted" without direct testing

### Branded position bias
Branded queries often anchor to position 1. A high average position (e.g., position 1.2) in the query export can be inflated by branded dominance. Note this when reporting overall average position.

---

## GA4 Export Edge Cases

### Multi-section exports
GA4 exports commonly contain multiple report types in a single file (e.g., daily active users, device breakdown, channel breakdown, event counts). Parse each section independently — do not mix rows from different report types.

### "Key event" vs. "conversion"
GA4 renamed "conversions" to "key events" in 2023. These are the same concept. If an export uses "conversions," it means the same thing as "key events."

### Channel attribution model
GA4 uses last-click attribution by default. Keep this in mind when comparing channels — email and direct traffic may be under-credited for assist roles. State the attribution model if known.

### Session count validation
Total sessions across all channels should sum to the property-level session count. If they don't, the export may be filtered or segmented. Document this.

---

## Domain Migration Edge Cases

### Two-domain scenario
Some companies run parallel GSC properties during a migration (e.g., gladly.com and gladly.ai both active). If only one property's data is available, document that the other property's performance during the overlap period is unknown.

### Migration ramp vs. baseline decline
When GSC data starts at zero after a domain migration, the initial growth phase reflects Google processing and indexing the new domain — not genuine organic performance improvement. This ramp should not be interpreted as a positive performance signal. State this explicitly when describing the Traffic Trajectory narrative.

### Ahrefs lag
Ahrefs typically lags 2–4 weeks behind real-time GSC data. For very recent data, the Ahrefs export may undercount the current period's estimated traffic.

---

## Calculation Edge Cases

### Gross Gain = 0
If no URLs showed positive traffic change, Gross Gain = 0 and Gross-Loss Offset Rate = N/A. Do not compute Offset Rate with a zero denominator.

### Rounding
Apply one consistent rounding rule across the Calculation Log. Standard: percentages to one decimal place, traffic numbers to whole numbers, rates to two decimal places.

### Net Change reconciliation tolerance
Gross Gain − Gross Loss = Net Change is theoretically exact. In practice, floating-point rounding across many URLs may produce a small discrepancy (typically <0.5%). If the discrepancy exceeds 1% of the Net Change value, investigate — it may indicate a filtering or scope mismatch between starting and ending URL populations.

### Traffic Change % for domain migrations
When the study window includes a migration ramp from zero, Traffic Change % using study-window-start as the denominator will be misleading (undefined or astronomically large). Use peak-to-current for the primary Traffic Change figure; document study-window-start-to-current separately and explain the limitation.

---

## Controlled Vocabulary Reminders

These field values are locked. Do not paraphrase or invent new values:

**Record Status:** Draft / Verified / Final / Needs Revalidation
**Migration Validation Stage:** N/A — new record / Migrated — not revalidated / Metrics revalidated / Narrative revalidated / Fully revalidated
**Data Provenance:** Ahrefs Export / Ahrefs Dashboard / Ahrefs Export + Semrush / Ahrefs Export + Similarweb / Full: +GSC+GA4 / Mixed — see Source Files
**Calculation Verified:** Yes — all key metrics reproduced from source / Partial — some metrics reproduced / No — figures carried from prior analysis
**Traffic Trajectory:** Continuous Acceleration / Steady Growth / Growth then Pullback / Early Peak then Plateau / Early Peak then Decline / Decline then Recovery / Flat / Steady Decline / Volatile
**Primary Mechanism:** Algorithm Update / Algorithmic Reassessment / AI Cannibalization / AI Overview Interception / Competitive Displacement / Content Quality / Demand Expansion / Search Demand Shift / Technical / Mixed (Phase-dependent) / Unknown — see `governance/mechanism-taxonomy.md` for definitions and decision rules
**AIO Presence Observed:** Yes / No / Not tested
**AIO Observed Effect:** Intercepted / Resistant / Mixed / No conclusion / Not tested
**Commercial Alignment:** High / Medium / Low / Mixed / Unknown
