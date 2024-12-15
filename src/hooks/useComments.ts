import { useState } from 'react';
import { Comment } from '../types/comment';

export function useComments(videoId: string) {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      username: 'User 1',
      content: 'Great video! Very informative.',
      timestamp: '2 days ago',
      videoId,
    },
    {
      id: '2',
      username: 'User 2',
      content: 'Thanks for sharing this!',
      timestamp: '1 day ago',
      videoId,
    },
  ]);

  const addComment = (content: string) => {
    const newComment: Comment = {
      id: String(Date.now()),
      username: 'Current User',
      content,
      timestamp: 'Just now',
      videoId,
    };
    setComments([newComment, ...comments]);
  };

  return { comments, addComment };
}