import React from 'react'

const QuoteSection = () => {
  return (
    <div className="relative">

      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: '50px' }}
        >
          <path
            d="M0,0
               C45,60 90,60 135,30
               C180,0 225,60 270,30
               C315,0 360,60 405,30
               C450,0 495,60 540,30
               C585,0 630,60 675,30
               C720,0 765,60 810,30
               C855,0 900,60 945,30
               C990,0 1035,60 1080,30
               C1125,0 1170,60 1215,30
               C1260,0 1305,60 1350,30
               C1395,10 1440,30 1440,30
               L1440,60 L0,60 Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>

      <div className="bg-[#1A1A1A] py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-[#C9A84C] text-5xl font-serif leading-none block mb-2">"</span>
          <p className="font-serif text-white text-xl md:text-2xl font-medium italic leading-relaxed">
            We help people living with and experiencing difficult times
          </p>
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none">
        <svg
          viewBox="0 0 1440 60"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
          preserveAspectRatio="none"
          style={{ height: '50px' }}
        >
          <path
            d="M0,60
               C45,0 90,0 135,30
               C180,60 225,0 270,30
               C315,60 360,0 405,30
               C450,60 495,0 540,30
               C585,60 630,0 675,30
               C720,60 765,0 810,30
               C855,60 900,0 945,30
               C990,60 1035,0 1080,30
               C1125,60 1170,0 1215,30
               C1260,60 1305,0 1350,30
               C1395,50 1440,30 1440,30
               L1440,0 L0,0 Z"
            fill="#1A1A1A"
          />
        </svg>
      </div>

    </div>
  )
}

export default QuoteSection