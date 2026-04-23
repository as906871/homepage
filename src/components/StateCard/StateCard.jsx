import React from 'react'

const StateCard = ({ image, state, type }) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div
        className="w-60 h-48 md:w-[350px] md:h-48 bg-cover bg-center rounded-t-full overflow-hidden shadow-md"
        style={{ backgroundImage: `url(${image})` }}
      />
      <p className="font-serif text-lg font-semibold text-[#1A1A1A]">{state}</p>
      <p className="text-gray-500 text-xs">{type}</p>
    </div>
  )
}

export default StateCard
