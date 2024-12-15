import React from 'react';
import { Link } from 'react-router-dom';
import { videos } from '../../data/videos';
import { useIsMobile } from '../../hooks/useIsMobile';

interface RelatedVideosProps {
  currentVideoId: string;
}

export default function RelatedVideos({ currentVideoId }: RelatedVideosProps) {
  const isMobile = useIsMobile();
  const relatedVideos = videos.filter(video => video.id !== currentVideoId);

  return (
    <div className={`space-y-4 ${isMobile ? 'pb-20' : ''}`}>
      <h2 className="text-lg font-semibold mb-4">Related Videos</h2>
      {relatedVideos.map(video => (
        <Link
          key={video.id}
          to={`/watch/${video.id}`}
          className="flex gap-2 hover:bg-gray-100 rounded-lg p-2"
        >
          <div className="relative w-40 flex-shrink-0">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-medium line-clamp-2">{video.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
            <div className="text-sm text-gray-600">
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span>{video.timestamp}</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}