import React from 'react';
import { ThumbsUp, ThumbsDown, Share2, Download } from 'lucide-react';

interface VideoActionsProps {
  likes: number;
  onLike: () => void;
}

export function VideoActions({ likes, onLike }: VideoActionsProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onLike}
        className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200"
      >
        <ThumbsUp size={20} />
        <span>{likes}</span>
      </button>
      <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <ThumbsDown size={20} />
      </button>
      <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Share2 size={20} />
        <span>Share</span>
      </button>
      <button className="flex items-center gap-1 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <Download size={20} />
        <span>Download</span>
      </button>
    </div>
  );
}