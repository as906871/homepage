import React from "react";
import { faqData } from "../../data/Data";
import Accordion from "../../hooks/Accordian";

const FAQSection = () => {
  const items = faqData.map((f) => ({
    title: f.question,
    content: f.answer,
  }));

  return (
    <section className="bg-[#F5EFE4] py-12 px-4 mt-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion items={items} defaultOpen={0} />
      </div>
    </section>
  );
};

export default FAQSection;