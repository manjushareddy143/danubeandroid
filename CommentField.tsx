 "use client";

import { forwardRef } from "react";

const MAX_LENGTH = 140;

interface CommentFieldProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: () => void;
  showError: boolean;
  errorMessage?: string;
  label?: string;
  placeholder?: string;
  rows?: number;
  id?: string;
  maxLength?: number;
}

const CommentField = forwardRef<HTMLTextAreaElement, CommentFieldProps>(
  (
    {
      value,
      onChange,
      onBlur,
      showError,
      errorMessage = "Please enter a comment before submitting.",
      label = "Comment",
      placeholder = "Write your comment here…",
      rows = 5,
      id = "comment-input",
      maxLength = MAX_LENGTH,
    },
    ref
  ) => {
    const isEmpty = value.trim().length === 0;
    const currentLength = value.length;
    const isOverLimit = currentLength > maxLength;
    const remaining = maxLength - currentLength;

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      if (e.target.value.length > maxLength) return;
      onChange(e);
    };

    const wrapperClass = [
      "textarea-wrapper",
      showError || isOverLimit ? "error" : "",
      !isEmpty ? "has-value" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const charCountClass = [
      "char-count",
      isOverLimit ? "over" : remaining <= 20 ? "warning" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div className="field-group">
        {/* Label */}
        <label className="field-label" htmlFor={id}>
          {label}{" "}
          <span className="required" aria-hidden="true">*</span>
        </label>

        {/* Textarea — no counter inside */}
        <div className={wrapperClass}>
          <textarea
            id={id}
            ref={ref}
            className="comment-textarea"
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
            onBlur={onBlur}
            rows={rows}
            maxLength={maxLength}
            aria-required="true"
            aria-invalid={showError || isOverLimit}
            aria-describedby={[showError ? `${id}-error` : "", `${id}-count`]
              .filter(Boolean)
              .join(" ")}
          />
        </div>

        {/* Footer row: counter (left) + error (right) */}
        <div className="field-footer">
          <span
            id={`${id}-count`}
            className={charCountClass}
            aria-live="polite"
            aria-label={`${currentLength} of ${maxLength} characters used`}
          >
            {currentLength}/{maxLength}
          </span>

          <p
            id={`${id}-error`}
            className={`error-message ${showError ? "visible" : ""}`}
            role="alert"
            aria-live="assertive"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
              <path
                d="M12 8v4M12 16h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            {errorMessage}
          </p>
        </div>
      </div>
    );
  }
);

CommentField.displayName = "CommentField";

export default CommentField;
