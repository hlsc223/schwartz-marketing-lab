# Schwartz Marketing Lab — Brand Design System

## Colors

### Core Palette

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Background (Cream) | `#FAF7F1` | `hsl(40, 47%, 96%)` | Page background, primary surface |
| Card (Deep Cream) | `#E8E3D3` | `hsl(46, 28%, 88%)` | Elevated surfaces, tinted sections |
| Foreground (Charcoal) | `#171717` | `hsl(0, 0%, 9%)` | All body text, headings, borders |
| Cobalt | `#4269E2` | `hsl(226, 73%, 58%)` | Primary accent — CTAs, links, highlights |
| Cobalt Deep | `#2F53C7` | `hsl(226, 60%, 48%)` | Cobalt hover/active state |

### Accent Palette (Use Sparingly)

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| Violet | `#7C5CFF` | `hsl(258, 70%, 62%)` | Occasional accent, not primary UI |
| Green | `#319760` | `hsl(150, 50%, 38%)` | Occasional accent, not primary UI |
| Navy | `#1A2547` | `hsl(222, 46%, 19%)` | Legacy token, retained for compatibility |

### Opacity Variants

These are derived from Foreground and Cobalt using opacity — not separate hex values:

| Usage | Value |
|-------|-------|
| Section borders / hairlines | `hsl(0, 0%, 9%, 0.07–0.10)` |
| Muted body text | `hsl(0, 0%, 9%, 0.55–0.65)` |
| Metadata / fine print | `hsl(0, 0%, 9%, 0.38–0.45)` |
| Cobalt decorative (e.g. large quote marks) | `hsl(226, 73%, 58%, 0.10–0.15)` |
| Act II background tint | `hsl(0, 0%, 9%, 0.028)` |

---

## Typography

### Typefaces

| Role | Family | Weights | Source |
|------|--------|---------|--------|
| Heading / Display | **Switzer** | 400, 500, 700, 900 | Fontshare CDN or self-hosted `.woff2` in `public/fonts/switzer/` |
| Body / Serif | **Lora** | 400, 500, 600 | Google Fonts / `@fontsource/lora` |

### CSS Font Tokens

```css
--font-heading: 'Switzer', 'Inter', system-ui, sans-serif;
--font-body:    'Lora', Georgia, serif;
```

---

## Type Scale

### Headings

| Level | Size | Weight | Letter-spacing | Font |
|-------|------|--------|----------------|------|
| Page headline (H1) | `clamp(44px, 6vw, 72px)` | 900 | -0.04em | Switzer |
| Section heading (H2) | `clamp(28px, 3.5vw, 42px)` | 900 | -0.03em | Switzer |
| Finding / subsection label (H3) | `clamp(22px, 3vw, 36px)` | 900 | -0.03em | Switzer |
| Form / card headline | `clamp(22px, 2.8vw, 30px)` | 900 | -0.03em | Switzer |

### Body & Supporting Text

| Level | Size | Weight | Line-height | Font |
|-------|------|--------|-------------|------|
| Lead / subhead (hero) | 17–18px | 400 | 1.75 | Lora | `foreground / 0.75` |
| Body copy | 16–17px | 400 | 1.80–1.85 | Lora |
| Supporting / secondary | 14–15px | 400 | 1.78 | Lora |
| Methodology / fine print | 13–14px | 400 | 1.65–1.85 | Lora |

### Labels & Metadata

| Level | Size | Weight | Letter-spacing | Transform | Font |
|-------|------|--------|----------------|-----------|------|
| Section eyebrow | 10px | 700 | 0.24–0.26em | uppercase | Switzer |
| Chapter number / finding number | 9px | 700 | 0.22em | uppercase | Switzer |
| Fine print / credibility strip | 9px | 700 | 0.12–0.16em | uppercase | Switzer |

---

## Usage Rules

### Color

- **Cobalt is the only interactive color.** All CTAs, links, active states, and highlights use cobalt (`#4269E2`) or cobalt-deep (`#2F53C7`) on hover.
- **Foreground at reduced opacity** handles all muted text — never a separate grey hex value.
- **Violet and Green are accent-only** — sparingly, never for UI controls.
- **Background is #FAF7F1**, not pure white. It matches the report's printed cream surface.

### Typography

- **Switzer for everything structural** — headings, labels, eyebrows, buttons, metadata.
- **Lora for everything narrative** — body copy, pull quotes, subheads, supporting text.
- **Eyebrows are always 9–10px / uppercase / wide letter-spacing** — they identify sections, never lead with content.
- **Heading letter-spacing is always negative** (-0.03em to -0.04em) — tighter than browser default.
- **Line-height in body copy is generous** (1.75+) — this is a reading-first design system.

### Hierarchy in Practice

The brand has five legible levels when scanning a page:

1. **Eyebrow** — 10px Switzer uppercase cobalt — locates the reader
2. **Section heading** — 28–42px Switzer 900 — the scan anchor
3. **Label / sublevel** — 22–36px Switzer 900 — subordinate headline
4. **Body** — 16–17px Lora — narrative/evidence
5. **Metadata** — 9–13px Switzer uppercase — dates, sources, fine print

Skipping levels breaks the hierarchy. Using a label-weight font for body copy breaks the serif/sans distinction that defines the brand voice.

---

## Design Tokens (CSS)

```css
:root {
  /* Surfaces */
  --background:        40 47% 96%;   /* #FAF7F1 — cream */
  --foreground:         0  0%  9%;   /* #171717 — charcoal */
  --card:              46 28% 88%;   /* #E8E3D3 — deep cream */
  --card-foreground:    0  0%  9%;

  /* Primary */
  --primary:          226 73% 58%;   /* #4269E2 — cobalt */
  --primary-foreground: 40 47% 96%;  /* cream on cobalt */

  /* Accent shortcuts */
  --cobalt:           226 73% 58%;   /* #4269E2 */
  --cobalt-deep:      226 60% 48%;   /* #2F53C7 */
  --violet:           258 70% 62%;   /* #7C5CFF */
  --green:            150 50% 38%;   /* #319760 */
  --navy:             222 46% 19%;   /* #1A2547 */

  /* Typography */
  --font-heading: 'Switzer', 'Inter', system-ui, sans-serif;
  --font-body:    'Lora', Georgia, serif;
}
```

---

## Texture

A subtle paper-grain noise texture is applied site-wide via `body::before` at `opacity: 0.22` with `mix-blend-mode: multiply`. This lifts the cream background off flat-color and gives the site its printed, editorial feel. Do not remove it.

---

*Last updated: 2026-07-29*
