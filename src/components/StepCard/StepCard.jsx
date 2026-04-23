import React from 'react'

const StepCard = ({ number, icon, label }) => {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-14 h-14 rounded-full border-2 border-[#C9A84C]/40 flex items-center justify-center">
        <span className="text-[#C9A84C] text-2xl">{icon}</span>
      </div>
      <p className="text-[#C9A84C] text-xs font-bold tracking-widest">{number}</p>
      <p className="text-white text-xs font-medium leading-snug max-w-[100px]">{label}</p>
    </div>
  )
}

export default StepCard
