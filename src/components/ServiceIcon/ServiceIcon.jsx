import React from "react";

const ServiceIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-4 group cursor-pointer">
      <div
        className="w-20 h-20 rounded-full bg-[#F7EED9] flex items-center justify-center shadow-sm 
                  group-hover:bg-[#C9A84C] transition-all duration-300 p-3"
      >
        <img
          src={icon}
          alt={label}
          className="w-12 h-12 object-contain 
                 group-hover:brightness-0 group-hover:invert transition-all duration-300"
        />
      </div>

      <span className="text-md text-center font-semibold text-[#000000] max-w-[120px] leading-relaxed">
        {label}
      </span>
    </div>
  );
};

export default ServiceIcon;
