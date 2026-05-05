import React from "react";

const Testimonial = ({ quote, name, company, initials, active = false }) => {
  return (
    <div
      className={`
        flex flex-col overflow-hidden rounded-2xl bg-white
        transition-all duration-500 ease-in-out select-none
        ${active
          ? "scale-[1.04] shadow-md opacity-80"
          : "scale-[0.94] shadow-md opacity-60"
        }
      `}
    >
      <div className="flex-1 p-7">
        <span className="block font-serif text-[4.5rem] leading-[0.6] text-[#C9A84C] mb-4 select-none">
          “
        </span>
        <p className="text-[0.9rem] leading-[1.78] text-gray-500">
          “{quote}”
        </p>
      </div>
      <div className="flex items-center gap-3 px-5 py-3.5 bg-[#C18C2C]">
        <div className="
          w-12 h-12 rounded-full border-[3px] border-white flex-shrink-0
          bg-gradient-to-br from-[#e8d9bf] to-[#c9a56e]
          flex items-center justify-center
          text-white font-bold text-sm
        ">
          {initials}
        </div>
        <div>
          <p className="font-bold text-[0.95rem] text-white leading-snug">{name}</p>
          <p className="text-xs text-white/80 mt-0.5">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;