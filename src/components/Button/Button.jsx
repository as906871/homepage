import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Button = ({
  text = 'Learn More',
  showArrow = true,
  onClick,
  className = '',
  href,
}) => {
  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`
        inline-flex items-center gap-2
        px-6 py-2
        rounded-full
        text-black text-sm font-medium
        shadow-sm
        transition-all duration-200
        hover:shadow-md
        active:scale-95
        ${className}
      `}
      style={{
        background:
          'linear-gradient(90deg, #C18C2C 0%, #FCF38A 50%, #C18C2C 100%)',
      }}
    >
      {text}

      {showArrow && (
        <FiArrowRight className="text-sm" />
      )}
    </Tag>
  )
}

export default Button