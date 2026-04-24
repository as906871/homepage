import React from "react";
import Button from "../Button";

const TreatmentCard = ({ title, description, image, reverse = false }) => {
  return (
    <div
      className={`
        grid md:grid-cols-2
        items-start
        gap-x-12
        mb-28
      `}
    >
      <div
        className={`
          flex
          ${
            reverse
              ? "md:justify-end md:order-2"
              : "md:justify-start md:order-1"
          }
        `}
      >
        <div className="relative w-[270px] h-[270px]">
          <div
            className={`absolute ${!reverse ? "-bottom-2 -right-2" : "-bottom-2 -left-2"}  w-full h-full rounded-full border-[2px] border-[#C8973A]`}
          />

          <div className="w-full h-full rounded-full overflow-hidden relative z-10">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div
        className={`
          max-w-[460px]
          ${reverse ? "md:order-1 md:pr-2" : "md:order-2 md:pl-2"}
        `}
      >
        <h3 className="font-serif text-[30px] font-semibold text-[#000000] mb-4">
          {title}
        </h3>

        <p className="text-[#6B6B6B] text-[15px] leading-[1.9] mb-7">
          {description}
        </p>

        <Button text="Learn More" variant="gold" />
      </div>
    </div>
  );
};

export default TreatmentCard;
