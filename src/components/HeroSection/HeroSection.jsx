import React, { useState, useEffect } from "react";
import Button from "../Button";
import { slides } from "../../data/Data";

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "580px" }}
    >
      {slides.map((s, i) => (
        <img
          src={s.image}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full">
          <div className="max-w-[720px]">
            <h1
              className="
          font-serif
          text-white
          font-medium
          leading-[1.1]
          mb-4
          text-[28px]
          sm:text-[38px]
          md:text-[48px]
          lg:text-[58px]
        "
            >
              {slides[current].heading}
            </h1>

            <p
              className="
          text-white
          font-medium
          mb-3
          text-[16px]
          sm:text-[18px]
          md:text-[20px]
          opacity-90
        "
            >
              {slides[current].subheading}
            </p>

            <p
              className="
          text-gray-200
          leading-relaxed
          mb-8
          text-[14px]
          sm:text-[16px]
          md:text-[18px]
          max-w-[640px]
        "
            >
              {slides[current].description}
            </p>

            <Button text="Learn More" variant="gold" />
          </div>
        </div>
      </div>
      <div
        className="
    absolute bottom-8 z-10 flex gap-3
    
    left-12
    sm:left-24
    md:left- 36
    lg:left-48
  "
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className="transition-all duration-300 hover:scale-110"
            style={{
              width: i === current ? "16px" : "16px",
              height: i === current ? "16px" : "16px",
              background: i === current ? "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50%, #C18C2C 100%" : "rgba(255,255,255,0.45)",
              clipPath: "polygon(50% 0%, 85% 15%, 100% 50%, 75% 90%, 25% 90%, 0% 50%, 15% 15%)"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
