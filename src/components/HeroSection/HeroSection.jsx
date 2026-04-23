import React, { useState, useEffect } from 'react'
import Button from '../Button'
import { slides } from '../../data/Data'

const HeroSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative w-full overflow-hidden" style={{ height: '660px' }}>
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${s.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)',
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-8xl mx-auto px-8 lg:px-16 w-full">
          <div className="max-w-[580px]">
            <h1
              className="font-serif font-bold text-white leading-tight mb-3"
              style={{ fontSize: '42px', lineHeight: '1.15', whiteSpace: 'pre-line' }}
            >
              {slides[current].heading}
            </h1>

            <p className="text-white text-sm font-normal mb-3 opacity-90">
              {slides[current].subheading}
            </p>

            <p className="text-gray-300 text-sm leading-relaxed mb-8 max-w-[660px]">
              {slides[current].description}
            </p>
             <Button text="Learn More" variant="gold" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-5 left-0 right-0 flex justify-center gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '22px' : '10px',
              height: '10px',
              background: i === current ? '#D4A84B' : 'rgba(255,255,255,0.45)',
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection