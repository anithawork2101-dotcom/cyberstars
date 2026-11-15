import { describe, it, expect } from 'vitest';
import { renderToString } from 'react-dom/server';
import '../i18n';
import { StaticPage } from './StaticPages';
import type { Page, View } from './pages';

const draw = (view: View, extra: Partial<Page> = {}) =>
  renderToString(
    <StaticPage
      page={{
        path: '/x',
        lang: 'en',
        title: '',
        description: '',
        alternates: { en: '/x' },
        breadcrumb: [],
        view,
        ...extra,
      }}
    />,
  );

describe('the static pages', () => {
  it('draws a lesson with plain code, its trail and the lessons beside it', () => {
    const html = draw(
      {
        kind: 'lesson',
        title: 'Booleans',
        text: 'Use **True**\n\n```py\nprint(True)\n```',
        previous: { path: '/lesson/python/if', label: 'If' },
        next: { path: '/lesson/python/loops', label: 'Loops' },
      },
      {
        breadcrumb: [
          { path: '/courses', label: 'Courses' },
          { path: '/courses/python', label: 'Python' },
          { path: '/lesson/python/booleans', label: 'Booleans' },
        ],
        alternates: { en: '/lesson/python/booleans', ro: '/ro/lesson/python/booleans' },
      },
    );
    expect(html).toContain('<h1>Booleans</h1>');
    expect(html).toContain('<code class="language-py">print(True)');
    expect(html).toContain('<a href="/courses/python">Python</a>');
    expect(html).not.toContain('<a href="/lesson/python/booleans">Booleans</a>');
    expect(html).toContain('href="/lesson/python/if" rel="prev"');
    expect(html).toContain('href="/lesson/python/loops" rel="next"');
    expect(html).toContain('href="/ro/lesson/python/booleans"');
  });

  it('draws the lists as links, in the page language', () => {
    const link = { path: '/courses/python', label: 'Python', description: 'Start here' };
    expect(draw({ kind: 'courses', courses: [link] })).toContain(
      '<a href="/courses/python">Python</a><p>Start here</p>',
    );
    const ro = draw({ kind: 'algorithms', courses: [] }, { lang: 'ro' });
    expect(ro).toContain('<h1>Algoritmi</h1>');
    expect(ro).toContain('<a href="/ro/courses">');
    expect(draw({ kind: 'almanac', articles: [link] })).toContain('<h1>Almanac</h1>');
  });

  it('draws a course and a challenge list with every entry', () => {
    const lessons = [{ path: '/lesson/c/print', label: 'Print' }];
    expect(draw({ kind: 'course', name: 'C', description: 'Low level', lessons })).toContain(
      '<ol><li><a href="/lesson/c/print">Print</a></li></ol>',
    );
    expect(
      draw({ kind: 'challenges', name: 'C Algorithms', description: '', challenges: lessons }),
    ).toContain('<h1>C Algorithms</h1>');
  });

  it('draws an article paragraph by paragraph', () => {
    const html = draw({
      kind: 'article',
      article: {
        slug: 'ada',
        cat: '',
        tag: '',
        title: 'Ada',
        excerpt: '',
        fullText: 'One\n\nTwo',
        author: '',
        readTime: '',
        emoji: '',
      },
    });
    expect(html).toContain('<article><h1>Ada</h1><p>One</p><p>Two</p></article>');
  });

  it('draws a project with its steps and the projects beside it', () => {
    const html = draw(
      {
        kind: 'project',
        title: 'League Table',
        text: 'Read the results.\n\n## Read all the lines\n\n```text\nA 2-1 B\n```',
        next: { path: '/projects/python/month-calendar', label: 'Wall Calendar' },
      },
      {
        breadcrumb: [
          { path: '/projects', label: 'Projects' },
          { path: '/projects/python', label: 'Python Projects' },
          { path: '/projects/python/league-table', label: 'League Table' },
        ],
      },
    );
    expect(html).toContain('<h1>League Table</h1>');
    expect(html).toContain('<h2>Read all the lines</h2>');
    expect(html).toContain('<a href="/projects/python">Python Projects</a>');
    expect(html).toContain('href="/projects/python/month-calendar" rel="next"');
    expect(html).not.toContain('rel="prev"');
  });

  it('draws the project lists as links', () => {
    const link = { path: '/projects/c', label: 'C Projects', description: 'Close to the machine' };
    expect(draw({ kind: 'projects', languages: [link] })).toContain(
      '<h1>Projects</h1><ul><li><a href="/projects/c">C Projects</a><p>Close to the machine</p>',
    );
    expect(
      draw({ kind: 'projectSet', name: 'C Projects', description: 'Bytes', projects: [link] }),
    ).toContain('<h1>C Projects</h1><p>Bytes</p>');
  });

  it('lists the projects in the header of the English pages only', () => {
    expect(draw({ kind: 'courses', courses: [] })).toContain('<a href="/projects">Projects</a>');
    expect(draw({ kind: 'courses', courses: [] }, { lang: 'ro' })).not.toContain('/projects');
  });

  it('leaves the landing page to the app', () => {
    expect(draw({ kind: 'landing' })).not.toContain('<h1>');
  });
});
