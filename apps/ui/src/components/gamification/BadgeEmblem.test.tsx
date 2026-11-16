import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { BadgeEmblem } from './BadgeEmblem';

const course = (key: string, level: number) => ({ kind: 'course' as const, key, level });

const stops = (container: HTMLElement) =>
  [...container.querySelectorAll('stop')].map((s) => s.getAttribute('stop-color'));

describe('BadgeEmblem', () => {
  it('colours the frame by level and keeps the last frame past Legend', () => {
    const gold = render(<BadgeEmblem badge={course('python', 3)} />).container;
    const legend = render(<BadgeEmblem badge={course('python', 6)} />).container;
    const past = render(<BadgeEmblem badge={course('python', 9)} />).container;
    expect(stops(gold)).not.toEqual(stops(legend));
    expect(stops(past)).toEqual(stops(legend));
  });

  it("gives an algorithm course its language's symbol and the decision pip", () => {
    const plain = render(<BadgeEmblem badge={course('java', 1)} />).container;
    const algo = render(<BadgeEmblem badge={course('algo-java', 1)} />).container;
    expect(algo.querySelector('g')!.innerHTML).toBe(plain.querySelector('g')!.innerHTML);
    expect(plain.querySelectorAll('circle')).toHaveLength(0);
    expect(algo.querySelectorAll('circle')).toHaveLength(2);
  });

  it('falls back to a star for a course it has no symbol for', () => {
    const unknown = render(<BadgeEmblem badge={course('rust', 0)} />).container;
    const python = render(<BadgeEmblem badge={course('python', 0)} />).container;
    expect(unknown.querySelector('g')!.innerHTML).not.toBe(python.querySelector('g')!.innerHTML);
    expect(unknown.querySelector('g path')).not.toBeNull();
  });

  it('points each frame at its own gradient', () => {
    const { container } = render(
      <>
        <BadgeEmblem badge={course('c', 1)} />
        <BadgeEmblem badge={course('c', 2)} />
      </>,
    );
    const ids = [...container.querySelectorAll('linearGradient')].map((g) => g.id);
    expect(new Set(ids).size).toBe(2);
    const fills = [...container.querySelectorAll('polygon:first-of-type')].map((p) =>
      p.getAttribute('fill'),
    );
    expect(fills).toEqual(ids.map((id) => `url(#${id})`));
  });

  it("gives a project badge its language's symbol and a pip unlike an algorithm's", () => {
    const plain = render(<BadgeEmblem badge={course('python', 1)} />).container;
    const algo = render(<BadgeEmblem badge={course('algo-python', 1)} />).container;
    const project = render(
      <BadgeEmblem badge={{ kind: 'project', key: 'python', level: 1 }} />,
    ).container;
    expect(project.querySelector('g')!.innerHTML).toBe(plain.querySelector('g')!.innerHTML);
    expect(project.querySelectorAll('svg > circle')).toHaveLength(2);
    expect(project.querySelector('svg > path')!.getAttribute('d')).not.toBe(
      algo.querySelector('svg > path')!.getAttribute('d'),
    );
  });

  it('draws each part by the page it builds, and the course finished with its own symbol', () => {
    const home = render(
      <BadgeEmblem badge={{ kind: 'part', key: 'station-home', level: 3 }} />,
    ).container;
    const wiki = render(
      <BadgeEmblem badge={{ kind: 'part', key: 'station-wiki', level: 3 }} />,
    ).container;
    const done = render(
      <BadgeEmblem badge={{ kind: 'complete', key: 'web-dev', level: 6 }} />,
    ).container;
    const web = render(<BadgeEmblem badge={course('web-dev', 0)} />).container;
    expect(home.querySelector('g')!.innerHTML).not.toBe(wiki.querySelector('g')!.innerHTML);
    expect(done.querySelector('g')!.innerHTML).toBe(web.querySelector('g')!.innerHTML);
    expect(home.querySelectorAll('svg > circle')).toHaveLength(0);
  });
});
