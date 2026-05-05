import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { faqData } from "../../data/Data";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F5EFE4] py-12 px-4 mt-4">
      <div className="max-w-4xl mx-auto">
        
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
          Frequently Asked Questions
        </h2>

        {faqData.map((item, i) => (
          <div key={i} className="border-b border-[#C9A84C]">
            
            <button
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              className="w-full flex items-center justify-between py-3"
            >
              <span
                className={`text-sm md:text-lg  flex items-center gap-2 ${
                  openIndex === i ? "text-[#000000] font-bold" : "text-black font-bold"
                }`}
              >
                {openIndex === i ? <FiMinus /> : <FiPlus />}
                {item.question}
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === i
                  ? "max-h-[200px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-600 text-sm leading-relaxed pb-4 pl-6 pr-2">
                {item.answer}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;