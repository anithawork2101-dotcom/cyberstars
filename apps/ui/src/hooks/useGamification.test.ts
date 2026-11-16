import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import type { CourseProgress } from '@cyberstars/shared/progress';

const lesson = (slug: string, completed: boolean) => ({
  slug,
  title: slug,
  completed,
  completedAt: null,
  lastAccessedAt: null,
});
const progress = (courseKey: string, done: string[], all: string[]): CourseProgress => ({
  courseKey,
  completed: done.length,
  total: all.length,
  earnedXp: 0,
  totalXp: 0,
  lessons: all.map((slug) => lesson(slug, done.includes(slug))),
});

const WEB = ['a', 'b', 'c'];
let progressMap: Record<string, CourseProgress> = {};

vi.mock('../context/AuthContext', () => ({
  useAuth: () => ({ user: { role: 'USER' }, isLoggedIn: true, isLoading: false }),
}));
vi.mock('../context/CurriculumContext', () => ({
  useCurriculum: () => ({
    courses: [
      {
        key: 'web-dev',
        title: 'Web Development',
        description: '',
        lessons: WEB.map((slug, i) => ({ slug, title: slug, sortOrder: i + 1 })),
        parts: [
          { key: 'station-home', title: 'Station Home', lessons: ['a', 'b'] },
          { key: 'crew-directory', title: 'Crew Directory', lessons: ['c'] },
        ],
      },
    ],
    isLoading: false,
  }),
}));
vi.mock('../context/ProgressContext', () => ({
  useAllProgress: () => ({ progressMap, isLoading: false, refresh: vi.fn() }),
}));
vi.mock('../services/projectsService', () => ({ getCompletions: vi.fn() }));

const projectsService = await import('../services/projectsService');
const getCompletions = vi.mocked(projectsService.getCompletions);
const { useGamification } = await import('./useGamification');

const finished = (...slugs: string[]) =>
  slugs.map((slug) => ({ language: 'python' as const, slug, completedAt: '' }));

beforeEach(() => {
  vi.clearAllMocks();
  progressMap = { 'web-dev': progress('web-dev', ['a', 'b'], WEB) };
});

describe('useGamification badges', () => {
  it('earns a part once all its lessons are done, and the last badge only with every part', () => {
    getCompletions.mockResolvedValue([]);
    const { result } = renderHook(() => useGamification());
    const web = result.current.badges.filter((b) => b.kind !== 'project');
    expect(web.map((b) => [b.label, b.earned])).toEqual([
      ['Web Development First Steps', true],
      ['Web Development Bronze', false],
      ['Station Home', true],
      ['Crew Directory', false],
      ['Station Complete', false],
    ]);
  });

  it('adds project badges when the completions come, without announcing them as new', async () => {
    getCompletions.mockResolvedValue(finished('league-table', 'month-calendar', 'wordle-referee'));
    const { result } = renderHook(() => useGamification());
    await waitFor(() =>
      expect(result.current.badges.find((b) => b.id === 'project:python:1')?.earned).toBe(true),
    );
    expect(result.current.badges.find((b) => b.id === 'project:python:2')?.earned).toBe(false);
    await new Promise((r) => setTimeout(r, 0));
    expect(result.current.newBadge).toBeNull();
  });

  it('announces a badge earned after the page loaded', async () => {
    getCompletions.mockResolvedValue([]);
    const { result, rerender } = renderHook(() => useGamification());
    await waitFor(() => expect(getCompletions).toHaveBeenCalled());
    await new Promise((r) => setTimeout(r, 0));
    progressMap = { 'web-dev': progress('web-dev', WEB, WEB) };
    rerender();
    await waitFor(() => expect(result.current.newBadge?.label).toBe('Crew Directory'));
  });
});
