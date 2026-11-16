import { PROJECTS, type ProjectLanguage } from './projects.js';

// Badges are derived from progress, never stored, so the client and the
// server's public profile share these rules. A course earns First Steps, then
// one badge per 10 lessons. A course split into parts (Web Development) stops
// those at 40, inside its first part, then earns a badge per finished part and
// one for finishing them all. A project language earns First Project, then one
// badge per 3 finished projects.
type BadgeKind = 'course' | 'part' | 'complete' | 'project';

// key is the course, the part or the project language; level is the frame
// (0 the first badge, then Bronze, Silver, Gold, Platinum, Diamond, Legend)
export interface BadgeRef {
  kind: BadgeKind;
  key: string;
  level: number;
}

export interface BadgeState extends BadgeRef {
  earned: boolean;
}

export const GOLD = 3;
export const LEGEND = 6;
export const LESSONS_PER_TIER = 10;
const PARTS_TIER_CAP = 4;
export const PROJECTS_PER_TIER = 3;

export function badgeId(b: BadgeRef): string {
  return `${b.kind}:${b.key}:${b.level}`;
}

interface Part {
  key: string;
  lessons: readonly string[];
}

// done holds the slugs of the course's finished lessons
export function courseBadges(
  courseKey: string,
  total: number,
  done: ReadonlySet<string>,
  parts?: readonly Part[],
): BadgeState[] {
  const tiers = Math.max(1, Math.floor(total / LESSONS_PER_TIER));
  const maxLevel = parts ? Math.min(tiers, PARTS_TIER_CAP) : tiers;
  const badges: BadgeState[] = [
    { kind: 'course', key: courseKey, level: 0, earned: done.size >= 1 },
  ];
  for (let level = 1; level <= maxLevel; level++) {
    badges.push({
      kind: 'course',
      key: courseKey,
      level,
      earned: done.size >= level * LESSONS_PER_TIER,
    });
  }
  if (!parts) return badges;
  const finished = parts.map((p) => p.lessons.every((slug) => done.has(slug)));
  parts.forEach((p, i) =>
    badges.push({ kind: 'part', key: p.key, level: GOLD, earned: finished[i] }),
  );
  badges.push({ kind: 'complete', key: courseKey, level: LEGEND, earned: finished.every(Boolean) });
  return badges;
}

// done counts the language's finished projects
export function projectBadges(language: ProjectLanguage, done: number): BadgeState[] {
  const total = PROJECTS.filter((p) => p.language === language).length;
  const badges: BadgeState[] = [{ kind: 'project', key: language, level: 0, earned: done >= 1 }];
  for (let level = 1; level <= Math.floor(total / PROJECTS_PER_TIER); level++) {
    badges.push({
      kind: 'project',
      key: language,
      level,
      earned: done >= level * PROJECTS_PER_TIER,
    });
  }
  return badges;
}
