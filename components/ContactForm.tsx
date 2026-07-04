"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

  const [status, setStatus] =useState("");
  const [loading, setloading] =useState(false);
  const [formData, setFormData] =useState({
    from_name: "",
    from_email:"",
    message:"",
  });

  const maxChars = 500;

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value}=e.target;
    if (name === "message"){
      const trimmedValue = value.slice(0,maxChars);
          setFormData((prev) => ({ ...prev, [name]: trimmedValue }));
          return;
  }
    setFormData((prev) => ({ ...prev, [name]: value }));
}
  async function sendEmail(e: React.FormEvent) {

    e.preventDefault()

    try{
      setStatus("sending ...")
      setloading(true);
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("Message sent")
    }catch (error){
      console.error(error);
      setStatus("Failed to send the message");
    }finally {
      setloading(false);
    }
  }

  return (
        <form onSubmit={sendEmail} className="flex flex-col gap-4">      
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
        <span>{formData.message.length}/{maxChars} characters</span>
      </div>
      
      <button type ="submit" disabled={loading} className="bg-sky-950 dark:text-cyan-200 rounded-lg py-2 transition-shadow duration-300 hover:shadow-[0_0_16px_4px_rgba(34,211,238,0.55)]">
        Send
      </button>
      {status && 
      (<div className="fixed top-5 right-5 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg border border-sky-800">
        {status}
        </div>
      )
      }
    </form>
  );
}