import React from "react";

const StepCard = ({ number, icon, label }) => {
  return (
    <div className="flex flex-col items-center text-center relative">
      <div className="text-[#C9A84C] text-3xl mb-3">{icon}</div>

      <p
        className="
  text-[#C9A84C]
  text-[20px]
  font-serif
  font-bold
  tracking-[0.05em]
  leading-none
  mb-2
"
      >
        {number}
      </p>
      <p className="text-white text-sm max-w-[240px] leading-snug">{label}</p>
    </div>
  );
};

export default StepCard;
