"use client";

import { CommentCardProps } from "../types";

export default function CommentCard({ comment }: CommentCardProps) {
  const initial = comment.author[0].toUpperCase();

  return (
    <article className="comment-card">
      <div className="comment-meta">
        <div className="avatar" aria-hidden="true">
          {initial}
        </div>
        <span className="comment-author">{comment.author}</span>
        <time className="comment-date" dateTime={comment.date}>
          {comment.date}
        </time>
      </div>
      <p className="comment-text">{comment.text}</p>
    </article>
  );
}
