import { describe, it, expect } from 'vitest';
import { badgeId, courseBadges, projectBadges, GOLD, LEGEND } from './badges.js';

const slugs = (n: number, prefix = 'l') =>
  new Set(Array.from({ length: n }, (_, i) => `${prefix}${i}`));

describe('courseBadges', () => {
  it('gives First Steps, then a badge per 10 lessons', () => {
    const badges = courseBadges('python', 60, slugs(25));
    expect(badges.map((b) => b.level)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    expect(badges.filter((b) => b.earned).map((b) => b.level)).toEqual([0, 1, 2]);
  });

  it('keeps one tier on a course shorter than 10 lessons', () => {
    expect(courseBadges('trees-graphs', 8, slugs(0)).map((b) => b.level)).toEqual([0, 1]);
  });

  it('stops the tiers at 40 on a course with parts, then gives a badge per part and one for all', () => {
    const parts = [
      { key: 'home', lessons: [...slugs(43)] },
      { key: 'crew', lessons: [...slugs(20, 'c')] },
    ];
    const badges = courseBadges('web-dev', 375, slugs(43), parts);
    expect(badges.map((b) => [b.kind, b.key, b.level, b.earned])).toEqual([
      ['course', 'web-dev', 0, true],
      ['course', 'web-dev', 1, true],
      ['course', 'web-dev', 2, true],
      ['course', 'web-dev', 3, true],
      ['course', 'web-dev', 4, true],
      ['part', 'home', GOLD, true],
      ['part', 'crew', GOLD, false],
      ['complete', 'web-dev', LEGEND, false],
    ]);
  });

  it('gives the last badge once every part is done', () => {
    const parts = [{ key: 'home', lessons: ['a', 'b'] }];
    const badges = courseBadges('web-dev', 2, new Set(['a', 'b']), parts);
    expect(badges.at(-1)).toEqual({
      kind: 'complete',
      key: 'web-dev',
      level: LEGEND,
      earned: true,
    });
  });
});

describe('projectBadges', () => {
  it('gives First Project, then a badge per 3 projects of the language', () => {
    const badges = projectBadges('python', 6);
    expect(badges.map((b) => b.level)).toEqual([0, 1, 2, 3]);
    expect(badges.filter((b) => b.earned).map((b) => b.level)).toEqual([0, 1, 2]);
    expect(projectBadges('c', 0).some((b) => b.earned)).toBe(false);
  });
});

describe('badgeId', () => {
  it('tells a project badge from a course badge of the same key', () => {
    expect(badgeId({ kind: 'course', key: 'python', level: 0 })).not.toBe(
      badgeId({ kind: 'project', key: 'python', level: 0 }),
    );
  });
});
