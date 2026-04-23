import React from "react";
import TreatmentCard from "../TreatmentCard";
import { treatments } from "../../data/Data";

const TreatmentSection = () => {
  return (
    <section className="bg-[#F5EFE4] py-12">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-center text-[#1A1A1A] mb-12">
          Our Treatment Focus
        </h2>
        {treatments.map((t, i) => (
          <TreatmentCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
};

export default TreatmentSection;
