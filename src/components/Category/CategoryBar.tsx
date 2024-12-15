import React from 'react';

const categories = [
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
];

export default function CategoryBar() {
  return (
    <div className="flex gap-3 overflow-x-auto p-4 scrollbar-hide">
      {categories.map((category) => (
        <button
          key={category}
          className="px-4 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full whitespace-nowrap text-sm"
        >
          {category}
        </button>
      ))}
    </div>
  );
}