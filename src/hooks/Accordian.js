import React, { useRef, useEffect, useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const AccordionItem = ({
  title,
  content,
  isOpen,
  onClick,
  activeColor = "#C9A84C",
  textColor = "black",
}) => {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#C9A84C]">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-4"
      >
        <span
          className="text-[15px] sm:text-[16px] font-medium flex items-center gap-2"
          style={{ color: isOpen ? activeColor : textColor }}
        >
          {isOpen ? <FiMinus /> : <FiPlus />}
          {title}
        </span>
      </button>

      <div
        style={{
          height,
          transition: "height 0.35s ease",
          overflow: "hidden",
        }}
      >
        <div ref={contentRef}>
          <p className="text-gray-600 text-sm leading-relaxed pb-4 pl-6 pr-2">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

const Accordion = ({
  items,
  defaultOpen = 0,
  activeColor,
  textColor,
}) => {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  return (
    <div>
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          title={item.title}
          content={item.content}
          isOpen={openIndex === i}
          onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
          activeColor={activeColor}
          textColor={textColor}
        />
      ))}
    </div>
  );
};

export default Accordion;