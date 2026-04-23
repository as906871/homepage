import React from "react";
import StepCard from "../StepCard";
import Button from "../Button";
import { steps } from "../../data/Data";

const StepsSection = () => {
  return (
    <section className="bg-[#1A1A1A] py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2
          className="
  font-serif
  text-3xl md:text-4xl
  font-semibold
  mb-12
  leading-snug
  bg-[linear-gradient(180deg,#C18C2C_0%,#FCF38A_50%,#C18C2C_100%)]
  bg-clip-text
  text-transparent
"
        >
          Four Simple Steps To <br />
          Get Started
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10 relative">
          {steps.map((s, i) => (
            <div key={i} className="relative">
              <StepCard {...s} />
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-7 left-[calc(50%+28px)] w-[calc(100%-16px)] border-t-2 border-dashed border-[#C9A84C]/30" />
              )}
            </div>
          ))}
        </div>

        <Button text="Schedule a Call" variant="gold" />
      </div>
    </section>
  );
};

export default StepsSection;
