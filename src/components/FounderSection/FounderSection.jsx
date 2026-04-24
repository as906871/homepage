import React from "react";
import Button from "../Button/Button";

const FounderSection = () => {
  return (
    <section
      className="relative pt-20 px-4 overflow-hidden"
      style={{ background: "#EFE6D2" }} 
    >
      <div className="max-w-5xl mx-auto relative z-10 pb-24">
        <div className="relative flex flex-col md:flex-row items-center">

          <div className="relative z-10 flex-shrink-0">
            <div
              className="overflow-hidden rounded-2xl shadow-md"
              style={{ width: "320px", height: "340px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=600&q=80"
                alt="Lakeisha Appleton"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div
            className="relative z-0 flex-1 rounded-[24px] px-10 md:px-14 py-10 md:-ml-10"
            style={{
              background: "#F5EFE4",
              border: "2px solid #C18C2C",
              minHeight: "360px"
            }}
          >
            <h2 className="font-serif text-[32px] font-semibold text-[#000000] mb-2">
              Meet The Founder
            </h2>

            <p className="font-serif text-[20px] font-semibold text-[#000000] mb-1">
              Lakeisha Appleton
            </p>

            <p
              className="text-sm font-medium mb-5"
              style={{ color: "#C18C2C" }}
            >
              FNP-C, PMHNP- BC
            </p>

            <p className="text-gray-700 text-[15px] leading-relaxed mb-8 max-w-[420px]">
              "Mental health problems don't define who you are. They are
              something you experience. You walk in the rain and you feel the
              rain, but, importantly, YOU ARE NOT THE RAIN." — Matt Haig
            </p>

            <Button text="Learn More" variant="gold" />

          </div>
        </div>
      </div>

     <div className="absolute bottom-0 left-0 w-full">
<div className="absolute bottom-0 left-0 w-full">
  <svg
    viewBox="0 0 1440 120"
    className="w-full"
    preserveAspectRatio="none"
    style={{ height: "80px" }}
  >
    <path
      d="M0,60
         C60,100 120,20 180,60
         C240,100 300,20 360,60
         C420,100 480,20 540,60
         C600,100 660,20 720,60
         C780,100 840,20 900,60
         C960,100 1020,20 1080,60
         C1140,100 1200,20 1260,60
         C1320,100 1380,20 1440,60
         L1440,120 L0,120 Z"
      fill="#F5EFE4"
    />
  </svg>
</div>
</div>
    </section>
  );
};

export default FounderSection;