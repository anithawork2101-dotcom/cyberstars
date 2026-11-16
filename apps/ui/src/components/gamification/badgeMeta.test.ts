import { describe, it, expect } from 'vitest';
import type { TFunction } from 'i18next';
import { badgeLabel, badgeDescription } from './badgeMeta';

const t = ((key: string, opts?: Record<string, unknown>) =>
  opts ? `${key} ${JSON.stringify(opts)}` : key) as unknown as TFunction;

const course = (level: number) => ({ kind: 'course' as const, key: 'c', level });

describe('badgeLabel', () => {
  it('names levels 1 to 6 by their frame', () => {
    const tiers = [1, 2, 3, 4, 5, 6].map((lvl) => badgeLabel(t, course(lvl), 'C'));
    expect(tiers).toEqual(
      ['bronze', 'silver', 'gold', 'platinum', 'diamond', 'legend'].map(
        (k) => `gamification.tier ${JSON.stringify({ course: 'C', tier: `gamification.${k}` })}`,
      ),
    );
  });

  it('falls back to the level number past Legend', () => {
    expect(badgeLabel(t, course(7), 'C')).toBe(
      `gamification.tier ${JSON.stringify({ course: 'C', tier: `level.short ${JSON.stringify({ n: 7 })}` })}`,
    );
  });

  it('names a project badge by its language and a part by its title', () => {
    expect(badgeLabel(t, { kind: 'project', key: 'c', level: 0 }, 'C')).toBe(
      `gamification.firstProject ${JSON.stringify({ language: 'C' })}`,
    );
    expect(badgeLabel(t, { kind: 'part', key: 'station-home', level: 3 }, 'Station Home')).toBe(
      'Station Home',
    );
    expect(badgeLabel(t, { kind: 'complete', key: 'web-dev', level: 6 }, 'Web')).toBe(
      'gamification.complete',
    );
  });
});

describe('badgeDescription', () => {
  it('counts 10 lessons a course tier and 3 projects a project tier', () => {
    expect(badgeDescription(t, course(2), 'C')).toBe(
      `gamification.tierDesc ${JSON.stringify({ course: 'C', count: 20 })}`,
    );
    expect(badgeDescription(t, { kind: 'project', key: 'c', level: 2 }, 'C')).toBe(
      `gamification.projectTierDesc ${JSON.stringify({ language: 'C', count: 6 })}`,
    );
  });
});
