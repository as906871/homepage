import React from 'react'
import FAQ from '../FAQ'
import Button from '../Button'
import { faqs } from '../../data/Data'

const FAQSection = () => {
  return (
    <section className="bg-[#F5EFE0] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-[#1A1A1A] mb-12">
          Frequently asked questions
        </h2>

        <div className="mb-10">
          {faqs.map((faq, i) => (
            <FAQ key={i} {...faq} />
          ))}
        </div>

        <div className="flex justify-center">
          <Button text="See all FAQ" variant="gold" />
        </div>
      </div>
    </section>
  )
}

export default FAQSection
