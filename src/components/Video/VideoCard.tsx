import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Video } from '../../types/video';

interface VideoCardProps {
  video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/watch/${video.id}`);
  };

  return (
    <div className="flex flex-col cursor-pointer" onClick={handleClick}>
      <div className="relative pb-[56.25%]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="mt-2 flex gap-3">
        <div className="w-9 h-9 rounded-full bg-gray-200 flex-shrink-0"></div>
        <div>
          <h3 className="font-medium line-clamp-2">{video.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
          <div className="text-sm text-gray-600">
            <span>{video.views}</span>
            <span className="mx-1">•</span>
            <span>{video.timestamp}</span>
          </div>
        </div>
      </div>
    </div>
  );
}