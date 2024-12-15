import React, { useState } from 'react';
import { CommentForm } from './CommentForm';
import { CommentList } from './CommentList';
import { useComments } from '../../hooks/useComments';

interface CommentsProps {
  videoId: string;
}

export default function Comments({ videoId }: CommentsProps) {
  const [comment, setComment] = useState('');
  const { comments, addComment } = useComments(videoId);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(comment);
      setComment('');
    }
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <CommentForm
        comment={comment}
        onChange={setComment}
        onSubmit={handleSubmit}
        onCancel={() => setComment('')}
      />
      <CommentList comments={comments} />
    </div>
  );
}