import React from 'react';

interface CommentFormProps {
  comment: string;
  onChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
}

export function CommentForm({ comment, onChange, onSubmit, onCancel }: CommentFormProps) {
  return (
    <form onSubmit={onSubmit} className="mb-6">
      <div className="flex gap-4">
        <div className="w-10 h-10 rounded-full bg-gray-200"></div>
        <input
          type="text"
          value={comment}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Add a comment..."
          className="flex-1 border-b border-gray-200 focus:border-blue-500 outline-none pb-2"
        />
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!comment.trim()}
          className="px-4 py-2 text-sm font-medium bg-blue-500 text-white rounded-full disabled:opacity-50"
        >
          Comment
        </button>
      </div>
    </form>
  );
}