import React from "react";
import Button from "../Button/Button";

const FounderSection = () => {
  return (
    <section className="relative bg-[#F7EED9] pt-16 sm:pt-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 relative z-10 pb-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative z-10 w-full md:w-auto flex justify-center md:justify-start">
            <div
              className="
              rounded-2xl overflow-hidden shadow-md
              w-full max-w-[420px]
              sm:max-w-[500px]
              md:max-w-[520px]
            "
            >
              <img
                src="https://media.istockphoto.com/id/1270790502/photo/medical-concept-of-indian-beautiful-female-doctor-with-note-book.webp?a=1&b=1&s=612x612&w=0&k=20&c=fg_7luuQzYkY9AOwJDtX817uZTIDoFdKgTVG-kIf7BA="
                alt="Lakeisha Appleton"
                className="w-full h-[240px] sm:h-[300px] md:h-[320px] lg:h-[320px] object-cover object-top"
              />
            </div>
          </div>

          <div
            className="
              relative flex-1
              rounded-[16px]
              mt-6 md:mt-0
              md:-ml-8 lg:-ml-16 xl:-ml-20
              px-6 sm:px-10 md:px-14 lg:px-20 xl:px-36
              py-8 md:py-12
            "
            style={{
              background: "#F7EED9",
              border: "2px solid #DAA520",
            }}
          >
            <div className="flex flex-col justify-center h-full">
              <div className="max-w-[520px] mx-auto md:mx-0">
                <h2 className="font-serif text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-semibold text-black mb-2">
                  Meet The Founder
                </h2>

                <p className="font-serif text-[18px] sm:text-[20px] md:text-[24px] font-semibold text-black mb-1">
                  Lakeisha Appleton
                </p>

                <p className="text-[13px] sm:text-[14px] text-[#C18C2C] font-medium mb-3">
                  FNP-C, PMHNP- BC
                </p>

                <p className="text-gray-700 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed mb-8">
                  "Mental health problems don't define who you are. They are
                  something you experience. You walk in the rain and you feel
                  the rain, but, importantly, YOU ARE NOT THE RAIN." — Matt Haig
                </p>
              </div>
            </div>

            <Button text="Learn More →" variant="gold" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          className="w-full h-[60px] sm:h-[80px]"
          preserveAspectRatio="none"
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
    </section>
  );
};

export default FounderSection;