import React from 'react';
import { Comment } from '../../types/comment';

interface CommentListProps {
  comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
  return (
    <div className="space-y-4">
      {comments.map((comment) => (
        <div key={comment.id} className="flex gap-4">
          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-medium">{comment.username}</p>
              <span className="text-sm text-gray-500">{comment.timestamp}</span>
            </div>
            <p className="mt-1">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}