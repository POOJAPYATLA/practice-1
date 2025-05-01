"use client";
import { useState } from "react";

export type FAQ = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  faqs: FAQ[];
};

export default function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => {
          const isOpen = activeIndex === index;
          return (
            <div
              key={index}
              className="border border-orange-100 bg-orange-50 rounded-md"
            >
              <button
                className={`w-full flex items-center justify-between p-4 font-medium text-left transition-colors ${
                  isOpen ? "bg-orange-100" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <span className="text-orange-600">{faq.question}</span>
                <span className="text-orange-600 text-xl">
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-4 pb-4 text-sm text-black font-medium bg-white">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
