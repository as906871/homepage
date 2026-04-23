import React from "react";

const Testimonial = ({ quote, name, company, avatar, active = false }) => {
  return (
    <div
      className={`rounded-2xl  flex flex-col justify-between transition-all duration-300 min-h-[200px] ${
        active
          ? "bg-white shadow-xl border border-gray-100 scale-100"
          : "bg-white/60 shadow-sm scale-95 opacity-70"
      }`}
    >
      <div className="p-4">
        <div className="text-[#C9A84C] text-4xl font-serif leading-none mb-3">
          "
        </div>
        <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-1">
          {quote}
        </p>
      </div>
      <div
        className={`flex items-center gap-3 rounded-br-2xl rounded-bl-2xl p-3 ${active ? "bg-[#C9A84C]" : "bg-gray-100"}`}
      >
        <img
          src={avatar}
          alt={name}
          className="w-10 h-10 rounded-full object-cover border-2 border-white"
        />
        <div>
          <p
            className={`font-semibold text-sm ${active ? "text-white" : "text-gray-800"}`}
          >
            {name}
          </p>
          <p
            className={`text-xs ${active ? "text-white/80" : "text-gray-500"}`}
          >
            {company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
