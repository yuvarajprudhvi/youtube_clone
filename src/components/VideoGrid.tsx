import React from 'react';

interface Video {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  views: string;
  timestamp: string;
}

const videos: Video[] = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&q=80',
    title: 'Building a Modern Web Application',
    channel: 'Tech Channel',
    views: '120K views',
    timestamp: '2 days ago'
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80',
    title: 'Web Development Tutorial 2024',
    channel: 'Code Masters',
    views: '89K views',
    timestamp: '5 days ago'
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=500&q=80',
    title: 'Machine Learning Basics',
    channel: 'AI Academy',
    views: '250K views',
    timestamp: '1 week ago'
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&q=80',
    title: 'JavaScript Tips and Tricks',
    channel: 'JS Ninja',
    views: '180K views',
    timestamp: '3 days ago'
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      {videos.map((video) => (
        <div key={video.id} className="flex flex-col">
          <div className="relative pb-[56.25%]">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="mt-2">
            <h3 className="font-medium line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
            <div className="text-sm text-gray-600">
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}