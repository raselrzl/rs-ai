"use client";
import { useEffect, useRef } from "react";

type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onEnter: () => void;
  disabled: boolean;
};

export function AutoResizeTextarea({
  value,
  onChange,
  onEnter,
  disabled,
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [value]);

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={onChange}
      placeholder="Ask something..."
      rows={1}
      onKeyDown={(e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          onEnter();
        }
      }}
      disabled={disabled}
      className="w-full bg-gray-50 outline-none text-black placeholder-gray-400 rounded-l-2xl px-4 py-2 resize-none overflow-hidden"
    />
  );
}
