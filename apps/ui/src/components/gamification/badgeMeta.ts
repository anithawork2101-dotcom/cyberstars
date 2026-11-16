import type { TFunction } from 'i18next';
import { LESSONS_PER_TIER, PROJECTS_PER_TIER, type BadgeRef } from '@cyberstars/shared/badges';

// Frame metal per badge level: 0 First Steps, then Bronze, Silver, Gold, Platinum, Diamond, Legend
export const TIERS = [
  { dark: '#4a3db8', mid: '#6c5ce7', light: '#b7aefc' },
  { dark: '#6e4322', mid: '#c27c45', light: '#f2c194' },
  { dark: '#6b717c', mid: '#c3c8d0', light: '#ffffff' },
  { dark: '#8f6410', mid: '#e8b23a', light: '#fff0b3' },
  { dark: '#4f7d8c', mid: '#9fd0dc', light: '#effcff' },
  { dark: '#1d6fa8', mid: '#45b8ee', light: '#c9f2ff' },
  { dark: '#8a1f5c', mid: '#e0468f', light: '#ffc2e0' },
];

// Tier names for levels 1..6, one per frame in BadgeEmblem; beyond that the level, as the page's language shortens it.
const TIER_KEYS = ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'legend'];

// name is the course's title, the part's, or for a project badge its language's
export function badgeLabel(t: TFunction, badge: BadgeRef, name: string): string {
  if (badge.kind === 'part') return name;
  if (badge.kind === 'complete') return t('gamification.complete');
  const project = badge.kind === 'project';
  if (badge.level === 0) {
    return project
      ? t('gamification.firstProject', { language: name })
      : t('gamification.firstSteps', { course: name });
  }
  const tierKey = TIER_KEYS[badge.level - 1];
  const tier = tierKey ? t(`gamification.${tierKey}`) : t('level.short', { n: badge.level });
  return project
    ? t('gamification.projectTier', { language: name, tier })
    : t('gamification.tier', { course: name, tier });
}

export function badgeDescription(t: TFunction, badge: BadgeRef, name: string): string {
  if (badge.kind === 'part') return t('gamification.partDesc', { part: name });
  if (badge.kind === 'complete') return t('gamification.completeDesc', { course: name });
  if (badge.kind === 'project') {
    return badge.level === 0
      ? t('gamification.firstProjectDesc', { language: name })
      : t('gamification.projectTierDesc', {
          language: name,
          count: badge.level * PROJECTS_PER_TIER,
        });
  }
  if (badge.level === 0) return t('gamification.firstStepsDesc', { course: name });
  return t('gamification.tierDesc', { course: name, count: badge.level * LESSONS_PER_TIER });
}
