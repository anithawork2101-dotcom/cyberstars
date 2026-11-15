import type { ComponentType } from 'react';
import type { FeatureKey } from '@cyberstars/shared/features';
import {
  AlgorithmsPicture,
  CoursesPicture,
  LinuxPicture,
  ProjectsPicture,
  TutorPicture,
  WebPicture,
} from './FeaturePictures';

// The parts of CyberStars the landing page shows under What's inside, in order,
// each with its picture. Messages, connections and the leaderboard stay off it;
// Web Development and the projects come right after the courses, each marked
// Coming soon while in preview and New for a while once launched (FEATURE_FLAGS).
export const FEATURES: [string, ComponentType][] = [
  ['courses', CoursesPicture],
  ['web', WebPicture],
  ['projects', ProjectsPicture],
  ['algorithms', AlgorithmsPicture],
  ['linux', LinuxPicture],
  ['tutor', TutorPicture],
];

// The parts that are a feature behind a flag, by the flag's key
export const FEATURE_FLAGS: Partial<Record<string, FeatureKey>> = {
  web: 'webDevelopment',
  projects: 'projects',
};

// The parts whose picture needs more room than the middle column: Web
// Development's code and site side by side
export const WIDE_PICTURES = new Set(['web']);

// The id a row is scrolled to by, from the chapters at the side of the page
export const featureId = (key: string) => `feature-${key}`;
