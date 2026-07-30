# Schwartz Marketing Lab — Design & Development Requirements

This file governs all work on this Astro website. Follow these rules on every page, component, and edit — including new pages built from scratch.

---

## Text Color — LOCKED REQUIREMENT

**Body text and subheads must be dark and stark. Do not use low-opacity foreground values on descriptive text.**

### Rules

| Text type | Minimum opacity | Notes |
|---|---|---|
| Body copy (Lora), intro paragraphs, descriptions | **0.85 minimum** | Prefer 0.90 |
| Subheads, section labels | **0.90 minimum** | Most should be full `hsl(var(--foreground))` |
| Supporting/meta text (dates, tags, supplementary) | **0.70 minimum** | Use sparingly |
| True de-emphasis (eyebrow labels, quiet UI metadata) | 0.45–0.55 acceptable | Only for genuinely secondary UI chrome |

### What this means in practice

- `hsl(var(--foreground) / 0.62)` → **NOT ALLOWED** for body text or subheads
- `hsl(var(--foreground) / 0.68)` → **NOT ALLOWED** for body text or subheads
- `hsl(var(--foreground) / 0.75)` → **NOT ALLOWED** for body text
- `hsl(var(--foreground) / 0.85)` → minimum acceptable for body text
- `hsl(var(--foreground) / 0.90)` → preferred for body text
- `hsl(var(--foreground))` → preferred for subheads and anything that reads as a headline

This rule applies to **every new page built**, every component edited, and every template used. Do not default to low-opacity values because a design mockup uses them. The rule overrides mockups.

---

## Typography

- **Heading font**: `var(--font-heading)` = Switzer
- **Body font**: `var(--font-body)` = Lora (serif)
- Body text: Lora, 16–17px, line-height 1.7–1.75
- Intro/lead paragraphs: Lora, 17px, max-width ~560px

---

## Color Tokens

- `hsl(var(--background))` = cream `#FAF7F1`
- `hsl(var(--foreground))` = near-black `#171717`
- `hsl(var(--cobalt))` = brand blue `#4269E2`
- `hsl(var(--muted-foreground))` = for truly secondary UI text only

---

## Layout

- Max content width: 1100–1120px
- Horizontal padding: `clamp(24px, 5vw, 64px)`
- Use CSS variables from `global.css`, not hardcoded hex values where a token exists

---

## Components

- Header and Footer come from `Layout.astro` — never rebuild them on individual pages
- Grain texture background: use the `grain` SVG data URI pattern (see existing pages for the snippet)

---

## Build Verification

- Run `npm run build` after every change before considering work done
- Zero build errors required before committing
