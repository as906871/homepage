import React from "react";
import ServiceIcon from "../ServiceIcon";
import Button from "../Button";
import { services, whyReasons } from "../../data/Data";
import { FiPlus, FiMinus } from "react-icons/fi";

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

      <div className="bg-[#EFE6D2] py-20 px-4 mt-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-14 items-start">
          <div className="w-full md:w-[420px] flex-shrink-0">
            <div className="relative w-full">
              <div
                className="
        absolute
        top-[12px]
        left-[12px]
        w-full
        h-full
        border-r-2
        border-b-2
        border-[#C9A84C]
      "
              />

              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=600&q=80"
                alt="Why Ada Psychiatry"
                className="
        relative
        w-full
        h-[380px]
        object-cover
        bg-white
      "
              />
            </div>
          </div>

          <div className="flex-1">
            <h2
              className="
        font-serif
        text-[30px] md:text-[36px]
        font-semibold
        text-[#000000]
        leading-[1.25]
        mb-6
      "
            >
              Why Should You Choose <br />
              Ada Psychiatry?
            </h2>

            <div className="mt-6 max-w-[520px]">
              {whyReasons.map((r, i) => (
                <div key={i} className="border-b border-[#C9A84C]">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
                    className="w-full flex items-center justify-between py-4 text-left"
                  >
                    <span
                      className={`text-sm font-medium ${
                        openIndex === i ? "text-[#C9A84C]" : "text-[#000000]"
                      }`}
                    >
                      {openIndex === i ? "—" : "+"} {r.title}
                    </span>
                    <span className="text-[#C9A84C] text-lg">
                      {openIndex === i ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>

                  {openIndex === i && (
                    <p className="text-gray-600 text-sm pb-4 leading-relaxed pl-4">
                      {r.description}
                    </p>
                  )}
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
