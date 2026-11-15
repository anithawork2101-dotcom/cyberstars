import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { courses } from '@cyberstars/content/curriculum';
import { PREVIEW_FEATURES } from '@cyberstars/shared/features';
import {
  lessonStatement,
  listCourses,
  listPages,
  listProjects,
  PROJECT_LANGUAGES_TEXT,
  readLesson,
  readProject,
  searchLessons,
} from './tutor-tools.service.js';
import { PROJECTS } from '@cyberstars/shared/projects';

describe('searchLessons', () => {
  it('finds the Python for loop lesson by its name', () => {
    const hits = searchLessons('for loops python');
    expect(hits[0]).toEqual({
      title: expect.any(String),
      course: 'Python',
      kind: 'lesson',
      link: '/lesson/python/for',
    });
  });

  it('finds an algorithm challenge and says it is one', () => {
    expect(searchLessons('caesar cipher')).toContainEqual(
      expect.objectContaining({ kind: 'challenge', link: '/lesson/algo-python/caesar-cipher' }),
    );
  });

  it('matches Romanian words with or without diacritics', () => {
    const withMarks = searchLessons('buclă for').map((h) => h.link);
    expect(withMarks).toContain('/lesson/python/for');
    expect(searchLessons('bucla for').map((h) => h.link)).toEqual(withMarks);
  });

  it('returns at most six results', () => {
    expect(searchLessons('print').length).toBeLessThanOrEqual(6);
  });

  it('returns nothing for a query made only of little words', () => {
    expect(searchLessons('how is the')).toEqual([]);
    expect(searchLessons('?!')).toEqual([]);
  });
});

describe('readLesson', () => {
  it('reads a lesson statement in the asked language', () => {
    const ro = readLesson('algo-python', 'caesar-cipher', 'ro');
    expect(ro).toMatchObject({ kind: 'challenge', link: '/lesson/algo-python/caesar-cipher' });
    expect(ro!.statement).toContain('Caesar');
    expect(ro!.statement).not.toEqual(readLesson('algo-python', 'caesar-cipher', 'en')!.statement);
  });

  it('names the lesson as the page does in that language', () => {
    expect(readLesson('algo-python', 'caesar-cipher', 'ro')!.title).toBe(
      'Medium · Cifrul lui Cezar',
    );
    expect(readLesson('algo-python', 'caesar-cipher', 'en')!.title).toBe('Medium · Caesar Cipher');
    expect(searchLessons('cezar', 'ro')[0].title).toBe('Medium · Cifrul lui Cezar');
  });

  it('refuses a slug the curriculum does not list before reading any file', () => {
    expect(readLesson('python', '../../../package', 'en')).toBeNull();
    expect(readLesson('python', 'for-solution', 'en')).toBeNull();
  });

  it('refuses a course that does not exist', () => {
    expect(readLesson('nope', 'for', 'en')).toBeNull();
  });
});

describe('lessonStatement', () => {
  it("reads the lesson's title and its statement in the asked language", () => {
    const ro = lessonStatement('algo-python', 'caesar-cipher', 'ro');
    expect(ro!.title).toEqual(expect.any(String));
    expect(ro!.statement).toEqual(readLesson('algo-python', 'caesar-cipher', 'ro')!.statement);
  });

  it('reads a multi-language lesson in the language asked, Python without one', () => {
    const java = lessonStatement('trees-graphs', 'trees', 'en', 'java')!.statement;
    const python = lessonStatement('trees-graphs', 'trees', 'en')!.statement;
    expect(java).toContain('public class Main');
    expect(python).toContain('def __init__');
    expect(python).not.toContain('public class Main');
  });

  it('refuses a slug the curriculum does not list before reading any file', () => {
    expect(lessonStatement('python', '../../../package', 'en')).toBeNull();
    expect(lessonStatement('python', 'for-solution', 'en')).toBeNull();
  });
});

describe('listPages', () => {
  const links = (map: ReturnType<typeof listPages>) => map.pages.map((p) => p.link);

  // The leaderboard stands in for a preview page, whichever features are launched
  const launched = PREVIEW_FEATURES.leaderboard;
  beforeEach(() => {
    PREVIEW_FEATURES.leaderboard = true;
  });
  afterEach(() => {
    PREVIEW_FEATURES.leaderboard = launched;
  });

  it('leaves preview pages and the Admin page out for a student on prod', () => {
    const map = listPages('USER', true);
    expect(links(map)).toContain('/settings');
    expect(links(map)).not.toContain('/leaderboard');
    expect(links(map)).not.toContain('/admin');
    expect(links(map)).toContain('/laniakea');
  });

  it('lists preview pages on dev, still without Admin for a student', () => {
    const map = listPages('USER', false);
    expect(links(map)).toContain('/leaderboard');
    expect(links(map)).not.toContain('/admin');
  });

  it('lists everything for an admin on prod', () => {
    const map = listPages('ADMIN', true);
    expect(links(map)).toContain('/leaderboard');
    expect(links(map)).toContain('/admin');
  });

  it('lists the courses along with the pages', () => {
    expect(listPages('USER', true).courses).toEqual(listCourses());
  });

  it('lists Projects once launched, and only to those let in while in preview', () => {
    const launchedProjects = PREVIEW_FEATURES.projects;
    try {
      PREVIEW_FEATURES.projects = false;
      expect(links(listPages('USER', true))).toContain('/projects');
      PREVIEW_FEATURES.projects = true;
      expect(links(listPages('USER', true))).not.toContain('/projects');
      expect(links(listPages('ADMIN', true))).toContain('/projects');
    } finally {
      PREVIEW_FEATURES.projects = launchedProjects;
    }
  });
});

describe('listCourses', () => {
  it('links each course to its own page, and algorithms to their list', () => {
    const list = listCourses();
    expect(list).toContainEqual(
      expect.objectContaining({ title: 'Python', link: '/courses/python' }),
    );
    expect(list).toContainEqual(
      expect.objectContaining({ title: 'C Algorithms', link: '/algorithms/c' }),
    );
  });

  it('says what each course teaches and how many lessons it has', () => {
    const java = listCourses().find((c) => c.title === 'Java')!;
    expect(java.about).toBe(courses.find((c) => c.key === 'java')!.description);
    expect(java.lessons).toBeGreaterThan(0);
  });
});

describe('listCourses, once Web Development is launched', () => {
  it('names Web Development with its lessons and its page', () => {
    const launchedWeb = PREVIEW_FEATURES.webDevelopment;
    expect(launchedWeb).toBe(false);
    expect(listCourses()).toContainEqual(
      expect.objectContaining({ title: 'Web Development', link: '/courses/web-dev' }),
    );
    expect(searchLessons('html headings').map((h) => h.link)).toContainEqual(
      expect.stringMatching(/^\/lesson\/web-dev\//),
    );
  });
});

describe('listProjects', () => {
  it('lists every project with its language, difficulty and page, without its steps', () => {
    const list = listProjects()!;
    expect(list).toHaveLength(PROJECTS.length);
    expect(list).toContainEqual({
      title: 'League Table',
      language: 'python',
      difficulty: 'easy',
      link: '/projects/python/league-table',
      about: expect.stringContaining('league table'),
    });
  });

  it("lists one language's projects when given one, however it is written", () => {
    const linux = listProjects('linux')!;
    expect(linux.length).toBeGreaterThan(0);
    expect(linux.every((p) => p.language === 'linux')).toBe(true);
    expect(listProjects(' Linux ')).toEqual(linux);
  });

  it('says so for a language with no projects, rather than listing none', () => {
    expect(listProjects('rust')).toBeNull();
  });
});

describe('listPages, on Projects', () => {
  it('names every project language and XP value from the catalog', () => {
    const projects = listPages('ADMIN', true).pages.find((p) => p.link === '/projects')!;
    expect(projects.about).toContain(PROJECT_LANGUAGES_TEXT);
    expect(projects.about).toContain('100, 150 or 200 XP');
  });
});

describe('readProject', () => {
  it("reads a project's statement and steps, never its solution", () => {
    const project = readProject('Python', 'league-table')!;
    expect(project.title).toBe('League Table');
    expect(project.steps).toContain('Read all the lines');
    expect(project.statement).toContain('Lions 2-1 Tigers');
    expect(project.statement).not.toMatch(/^def |^import /m);
  });

  it('reads nothing for a project the catalog does not list', () => {
    expect(readProject('python', 'league-table-solution')).toBeNull();
    expect(readProject('python', '../python/league-table')).toBeNull();
    expect(readProject('rust', 'league-table')).toBeNull();
  });

  it('reads every project whole', () => {
    for (const p of PROJECTS) {
      const statement = readProject(p.language, p.slug)!.statement;
      expect(statement.length).toBeGreaterThan(0);
      expect(statement.length).toBeLessThan(12_000);
    }
  });
});
