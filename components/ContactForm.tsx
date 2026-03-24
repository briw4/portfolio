"use client";

import { useState } from "react";

export default function ContactForm() {
  const [message, setMessage] = useState("");
  const maxChars = 500;

  const wordCount = message.trim()? message.trim().split(/\s+/).length: 0;

  function handleMessageChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value.slice(0, maxChars);
    setMessage(value);
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  }
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      <input
        type="email"
        placeholder="Your email"
        className="border border-gray-300 rounded-lg px-4 py-2"
      />

      <textarea
        placeholder="Your message"
        value={message}
        onChange={handleMessageChange}
          className="w-full h-90 border-2 border-black rounded-lg px-4 py-1 resize-none overflow-y-auto break-words whitespace-pre-wrap"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>{wordCount} words</span>
        <span>{message.length}/{maxChars} characters</span>
      </div>

      <button className="bg-black text-white rounded-lg py-2">
        Send
      </button>
    </form>
  );
}