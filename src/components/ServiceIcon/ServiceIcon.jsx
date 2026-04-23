import React from 'react'

const ServiceIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-3 group cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-[#F5EFE0] flex items-center justify-center shadow-sm group-hover:bg-[#C9A84C] transition-all duration-300">
        <span className="text-[#C9A84C] text-2xl group-hover:text-white transition-colors duration-300">
          {icon}
        </span>
      </div>
      <span className="text-xs text-center font-medium text-[#1A1A1A] max-w-[80px] leading-snug">{label}</span>
    </div>
  )
}

export default ServiceIcon
