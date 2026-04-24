import React, { useState } from 'react'
import Testimonial from '../Testimonial'
import { testimonials } from '../../data/Data'


const TestimonialsSection = () => {
  const [active, setActive] = useState(1)

  // const prev = () => setActive((p) => (p - 1 + testimonials.length) % testimonials.length)
  // const next = () => setActive((p) => (p + 1) % testimonials.length)

  const getVisible = () => {
    const prev1 = (active - 1 + testimonials.length) % testimonials.length
    const next1 = (active + 1) % testimonials.length
    return [prev1, active, next1]
  }

  const visible = getVisible()

  return (
    <section className="bg-[#F5EFE4] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center text-[#000000] mb-12">
          What Our Patients Are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {visible.map((idx, pos) => (
            <Testimonial
              key={idx}
              {...testimonials[idx]}
              active={pos === 1}
            />
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === active ? 'bg-[#C9A84C] w-5' : 'bg-[#C9A84C]/30'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
