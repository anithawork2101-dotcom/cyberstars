import { useId } from 'react';
import type { BadgeRef } from '@cyberstars/shared/badges';
import { courseGlyph, partGlyph } from './courseGlyphs';
import { TIERS } from './badgeMeta';

function hexPoints(r: number): string {
  return [0, 1, 2, 3, 4, 5]
    .map((i) => {
      const a = (Math.PI / 3) * i - Math.PI / 2;
      return `${(r * Math.cos(a)).toFixed(1)},${(r * Math.sin(a)).toFixed(1)}`;
    })
    .join(' ');
}

const OUTER = hexPoints(47);
const INNER = hexPoints(40);

interface BadgeEmblemProps {
  badge: BadgeRef;
  size?: number;
}

// Algorithm courses (algo-*) reuse their base course's symbol plus a flowchart decision pip,
// project badges their language's symbol plus a cube pip, a part the page it builds
export function BadgeEmblem({ badge, size = 56 }: BadgeEmblemProps) {
  // useId's separators (colons in older React) don't belong in url(#...)
  const gradientId = `badge${useId().replace(/[^a-zA-Z0-9]/g, '')}`;
  const tier = TIERS[Math.min(badge.level, TIERS.length - 1)];
  const algo = badge.kind === 'course' && badge.key.startsWith('algo-');
  const pip = algo || badge.kind === 'project';
  const glyph = badge.kind === 'part' ? partGlyph(badge.key) : courseGlyph(badge.key);
  const metal = `url(#${gradientId})`;

  return (
    <svg width={size} height={size} viewBox="-50 -50 100 100" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={tier.light} />
          <stop offset="0.45" stopColor={tier.mid} />
          <stop offset="1" stopColor={tier.dark} />
        </linearGradient>
      </defs>
      <polygon points={OUTER} fill={metal} />
      <polygon points={INNER} fill="var(--surface)" />
      <polygon points={INNER} fill={tier.mid} opacity="0.08" />
      <g
        transform={pip ? 'translate(-3 -3)' : undefined}
        color={tier.light}
        fill="none"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {glyph}
      </g>
      {pip && (
        <>
          <circle cx="31" cy="31" r="15" fill="var(--bg)" />
          <circle cx="31" cy="31" r="12.5" fill={metal} />
          <path
            d={
              algo
                ? 'M31 24 L38 31 L31 38 L24 31 Z'
                : 'M31 23.5 L37.5 27 L37.5 35 L31 38.5 L24.5 35 L24.5 27 Z M24.5 27 L31 30.5 L37.5 27 M31 30.5 V38.5'
            }
            fill="none"
            stroke="var(--bg)"
            strokeWidth={algo ? 2.6 : 2.2}
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}
