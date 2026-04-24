import React from 'react'
import StateCard from '../StateCard'
import { states } from '../../data/Data'


const StatesSection = () => {
  return (
    <section className="bg-[#F5EFE0] pt-10 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-[#000000] mb-14">
          Now Accepting Patients In The<br />Following States
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-20">
          {states.map((s, i) => (
            <StateCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatesSection
