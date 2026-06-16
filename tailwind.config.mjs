// Ported directly from the legacy Replit repo's tailwind.config.ts.
// Differences from the original, and why:
//   - `content` points at this project's src/ tree instead of client/src.
//   - `darkMode` omitted: the legacy site's dark mode was never wired to a
//     toggle reachable from the homepage; no dark-mode UI exists on the
//     pages in scope, so there is nothing to port yet.
//   - `corePlugins.preflight: false`: see astro.config.mjs comment — every
//     other already-shipped page depends on this project's own global.css
//     reset, so Tailwind's Preflight stays off to avoid regressing pages
//     outside the homepage-parity scope.
//   - `tailwindcss-animate` / `@tailwindcss/typography` plugins omitted:
//     grepped every homepage component (Hero, Navbar, TestimonialsSection,
//     ServicesSection, CaseStudiesSection, FaqSection, Footer) and neither
//     plugin's classes (accordion-*, prose-*) are used by any of them.
//   - `fontFamily.sans`/`serif` point at --font-display / --font-body
//     instead of --font-sans / --font-serif / --font-mono. The legacy
//     config references --font-sans/--font-serif/--font-mono, but those
//     variables are never defined anywhere in the legacy :root block (only
//     --font-display and --font-body are) — a pre-existing inconsistency
//     in the source repo. Mapping to the tokens that actually exist (and
//     match what every component visually expects: `font-sans` for
//     headlines/labels in Switzer/Inter, `font-serif` for body copy in
//     Lora) is a deliberate fix, not a silent deviation — flagged here and
//     in the migration write-up.
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      borderRadius: {
        lg: '.5625rem',
        md: '.375rem',
        sm: '.1875rem',
      },
      colors: {
        background: 'hsl(var(--background) / <alpha-value>)',
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        border: 'hsl(var(--border) / <alpha-value>)',
        input: 'hsl(var(--input) / <alpha-value>)',
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
          foreground: 'hsl(var(--popover-foreground) / <alpha-value>)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        ring: 'hsl(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['var(--font-display)'],
        serif: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
};
