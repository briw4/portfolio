"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] =useState({
    from_name: "",
    from_email:"",
    message:"",
  });
  const maxChars = 500;

  const wordCount = formData.message.trim()? formData.message.trim().split(/\s+/).length: 0;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value}=e.target;
    if (name === "message"){
      const trimmedValue = value.slice(0,maxChars);
          setFormData((prev) => ({ ...prev, [name]: trimmedValue }));
          const textarea = e.target as HTMLTextAreaElement;
          e.target.style.height = "auto";
          e.target.style.height = `${e.target.scrollHeight}px`;
          return;
  }
      setFormData((prev) => ({ ...prev, [name]: value }));

}
  return (
    <form className="flex flex-col gap-4">
      <input
        type="text"
        name="from_name"
        placeholder="Your name"
        value={formData.from_name}
        onChange={handleChange}
        required
        className="border dark:border-sky-950 rounded-lg px-4 py-2"
      />

      <input
        type="email"
        name="from_email"
        placeholder="Your email"
        value={formData.from_email}
        onChange={handleChange}
        required
        className="border dark:border-sky-950 rounded-lg px-4 py-2"
      />

      <textarea
        name="message"
        placeholder="Your message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full h-90 border-2 dark:border-sky-950 rounded-lg px-4 py-1 resize-none overflow-y-auto break-words whitespace-pre-wrap"
      />

      <div className="mt-2 flex justify-between text-sm text-gray-500">
        <span>{wordCount} words</span>
        <span>{formData.message.length}/{maxChars} characters</span>
      </div>

      <button className="bg-sky-950 dark:text-cyan-200 rounded-lg py-2">
        Send
      </button>
    </form>
  );
}