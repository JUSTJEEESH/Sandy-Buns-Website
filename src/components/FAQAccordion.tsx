"use client";

import { useState } from "react";
import { faqItems } from "@/lib/faqData";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="max-w-2xl mx-auto space-y-3">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="bg-cream rounded-xl border border-sand overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full text-left px-6 py-4 flex items-center justify-between gap-4"
            aria-expanded={openIndex === index}
          >
            <span className="font-body text-driftwood font-semibold text-base">
              {item.question}
            </span>
            <span
              className={`text-ocean text-xl flex-shrink-0 transition-transform duration-200 ${
                openIndex === index ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="font-body text-text-body/80 text-sm leading-relaxed">
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
