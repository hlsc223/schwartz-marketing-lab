// Shared JSON-LD schema builders.
// Keeping these centralized means every page sources schema from the same
// place instead of hand-writing JSON-LD per page, which is how the old
// Replit site ended up shipping pages with no schema at all despite it
// being "done" on paper.

export const SITE_NAME = 'Schwartz Marketing Lab';
export const SITE_URL = 'https://schwartzmarketinglab.com';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description:
      'Schwartz Marketing Lab helps B2B brands get found in AI search, Google, and modern discovery — through AEO, SEO, content strategy, and authority building.',
    sameAs: [
      // Add verified social/profile URLs here (LinkedIn, etc.) when confirmed.
    ],
  };
}

export function personSchema(opts: {
  name: string;
  jobTitle: string;
  description: string;
  sameAs?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.description,
    worksFor: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    sameAs: opts.sameAs ?? [],
  };
}

export function articleSchema(opts: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.headline,
    description: opts.description,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified ?? opts.datePublished,
    url: opts.url,
    author: {
      '@type': 'Person',
      name: opts.authorName ?? 'Quinn Schwartz',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
  };
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}
