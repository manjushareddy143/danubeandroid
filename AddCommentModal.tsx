 "use client";

import { useEffect, useRef, useState } from "react";
import CommentField from "./CommentField";
import { AddCommentModalProps } from "../types";

export default function AddCommentModal({
  isOpen,
  onClose,
  onSubmit,
}: AddCommentModalProps) {
  const [comment, setComment] = useState("");
  const [touched, setTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isEmpty = comment.trim().length === 0;
  const showError = touched && isEmpty;
  const isSubmitDisabled = isEmpty || isSubmitting;

  // Reset state & auto-focus textarea on open
  useEffect(() => {
    if (isOpen) {
      setComment("");
      setTouched(false);
      setIsSubmitting(false);
      setTimeout(() => textareaRef.current?.focus(), 80);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  const handleSubmit = async () => {
    setTouched(true);
    if (isEmpty) return;

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 700)); // replace with real API call
    onSubmit(comment.trim());
    setIsSubmitting(false);
    onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={handleBackdropClick} role="presentation">
      <div
        className="modal-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Close */}
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M2 2l12 12M14 2L2 14"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-icon" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h2 id="modal-title" className="modal-title">
              Add Comment
            </h2>
            <p className="modal-subtitle">Share your thoughts</p>
          </div>
        </div>

        {/* ── CommentField component ── */}
        <CommentField
          ref={textareaRef}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          onBlur={() => setTouched(true)}
          showError={showError}
        />

        {/* Actions */}
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose} type="button">
            Cancel
          </button>
          <button
            className={[
              "btn-submit",
              isSubmitDisabled ? "disabled" : "",
              isSubmitting ? "loading" : "",
            ]
              .filter(Boolean)
              .join(" ")}
            onClick={handleSubmit}
            disabled={isSubmitDisabled}
            type="button"
            aria-disabled={isSubmitDisabled}
          >
            {isSubmitting ? (
              <>
                <span className="spinner" aria-hidden="true" />
                Submitting…
              </>
            ) : (
              <>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Submit
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
