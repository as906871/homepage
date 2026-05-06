import React from "react";
import ServiceIcon from "../ServiceIcon";
import Button from "../Button";
import { services, whyReasons } from "../../data/Data";
import whyShould from "../../assets/whyShould.svg";
import Accordion from "../../hooks/Accordian";

const ServicesSection = () => {
  const accordionItems = whyReasons.map((item) => ({
    title: item.title,
    content: item.description,
  }));

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
              <Accordion
                items={accordionItems}
                defaultOpen={0}
                activeColor="#C9A84C"
                textColor="black"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;