import React from "react";
import StepCard from "../StepCard";
import Button from "../Button";
import { steps } from "../../data/Data";

const StepsSection = () => {
  return (
    <section className="bg-[#000000] py-16 px-4">
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
            <div key={i} className="relative flex justify-center">
              <StepCard {...s} />

              {i < steps.length - 1 && (
                <div
                  className="
          hidden md:block
          absolute
          top-5
          left-[60%]
          w-[80%]
          border-t border-dashed border-[#C9A84C]/40
        "
                />
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
