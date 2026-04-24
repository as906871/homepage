import React, { useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const FAQ = ({ question, answer, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-gray-300 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 text-left group"
      >
        <span className="text-[#000000] font-semibold text-sm md:text-base leading-snug group-hover:text-[#C9A84C] transition-colors duration-200">
          {question}
        </span>
        <span className="flex-shrink-0 mt-0.5 text-[#C9A84C]">
          {open ? <FiMinus size={18} /> : <FiPlus size={18} />}
        </span>
      </button>

      {open && (
        <div className="mt-3 pl-0 pr-8">
          <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default FAQ
