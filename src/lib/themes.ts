import type { Article } from '../data/articles';

// One colour per part of Sheridan's world, used across the site so visitors
// learn it once: money/Owly, running/RWRC, business/Nurture, charity/conservation.
export type Theme = 'money' | 'run' | 'biz' | 'impact' | 'neutral';

// Full class names written out so Tailwind keeps them in the build.
export const themeMark: Record<Theme, string> = {
  money: 'bg-money',
  run: 'bg-run-mark',
  biz: 'bg-biz',
  impact: 'bg-impact',
  neutral: 'bg-ink-faint',
};

export const themeTint: Record<Theme, string> = {
  money: 'bg-money-tint text-money',
  run: 'bg-run-tint text-run',
  biz: 'bg-biz-tint text-biz',
  impact: 'bg-impact-tint text-impact',
  neutral: 'bg-band text-ink-soft',
};

export const themeLabel: Record<Theme, string> = {
  money: 'Money',
  run: 'Running',
  biz: 'Business',
  impact: 'Impact',
  neutral: 'Other',
};

// Articles take the colour of the part of Sheridan's world they belong to.
// Slug overrides first (a software article about Owly is still a money piece),
// then the article's category.
const slugTheme: Record<string, Theme> = {
  'building-launching-owly-nz-debt-dashboard': 'money',
  'why-a-vcfo-built-a-debt-dashboard': 'money',
  'building-a-coaching-platform-airtable-zapier-strava': 'run',
  'case-study-run-with-run-club-brand': 'run',
  'civic-case-for-mass-participation-running-events': 'run',
};

const categoryTheme: Record<Article['category'], Theme> = {
  Finance: 'money',
  'Running & Training': 'run',
  Strategy: 'biz',
  Software: 'neutral',
  Design: 'neutral',
};

export function articleTheme(a: Pick<Article, 'slug' | 'category'>): Theme {
  return slugTheme[a.slug] ?? categoryTheme[a.category] ?? 'neutral';
}
