"use client";
import { useState, ReactNode } from "react";

export function FaqItem({ question, children }: { question: string, children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-surface-container-lowest rounded-lg shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <button
        className="faq-toggle w-full p-space-lg text-left flex items-center justify-between gap-space-md hover:bg-light-cyan/30 transition-colors"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-headline-sm text-headline-sm text-jet-black">{question}</span>
        <span className={`material-symbols-outlined text-secondary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>expand_more</span>
      </button>
      {isOpen && (
        <div className="faq-content px-space-lg pb-space-lg font-body-md text-body-md text-on-surface-variant">
          {children}
        </div>
      )}
    </div>
  );
}
