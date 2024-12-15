export const VIDEO_CATEGORIES = [
  'All',
  'Music',
  'Gaming',
  'Live',
  'News',
  'Sports',
  'Learning',
  'Fashion',
  'Beauty',
  'Science',
  'Technology',
] as const;

export type VideoCategory = typeof VIDEO_CATEGORIES[number];