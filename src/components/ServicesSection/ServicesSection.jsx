import React from "react";
import ServiceIcon from "../ServiceIcon";
import Button from "../Button";
import { services, whyReasons } from "../../data/Data";
import { FiPlus, FiMinus } from "react-icons/fi";
import whyShould from "../../assets/whyShould.svg";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <section id="services" className="bg-[#F5EFE4]">
      <div className="py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold text-[#000000] mb-12">
            Our Services
          </h2>
          <div className="flex flex-wrap justify-center gap-10 mb-12">
            {services.map((s, i) => (
              <ServiceIcon key={i} icon={s.icon} label={s.label} />
            ))}
          </div>

          <Button text="View our services →" variant="gold" />
        </div>
      </div>

      <div className="bg-[#F7EED9] py-12 sm:py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          <div className="w-full lg:min-w-[550px] lg:max-w-[620px] flex-shrink-0">
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full border-r-2 border-b-2 border-[#C9A84C]" />
              <img
                src={whyShould}
                alt="Why Ada Psychiatry"
                className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] object-cover"
              />
            </div>
          </div>

          <div className="flex-1 w-full">
            <h2 className="font-serif text-[26px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-tight text-black mb-6">
              Why Should You Choose <br className="hidden sm:block" />
              Ada Psychiatry?
            </h2>

            <div className="max-w-[560px]">
              {whyReasons.map((item, i) => (
                <div key={i} className="border-b border-[#C9A84C]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-4"
                  >
                    <span
                      className={`text-[15px] sm:text-[16px] font-medium flex items-center gap-2 ${
                        openIndex === i ? "text-[#C9A84C]" : "text-black"
                      }`}
                    >
                      {openIndex === i ? <FiMinus /> : <FiPlus />}
                      {item.title}
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
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
