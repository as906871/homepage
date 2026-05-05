import React from 'react'

const QuoteSection = () => {
  return (
    <div style={{ width: '100%', position: 'relative' }}>
      <div style={{ lineHeight: 0, display: 'block', width: '100%' }}>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'clamp(45px, 5vw, 80px)' }}
        >
          <path
            d="M0,60
               C60,20 120,100 180,60
               C240,20 300,100 360,60
               C420,20 480,100 540,60
               C600,20 660,100 720,60
               C780,20 840,100 900,60
               C960,20 1020,100 1080,60
               C1140,20 1200,100 1260,60
               C1320,20 1380,100 1440,60
               L1440,120 L0,120 Z"
            fill="#000000"
          />
        </svg>
      </div>

      <div style={{ backgroundColor: '#000000' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
          <span
            style={{
              display: 'block',
              color: '#C9A84C',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontFamily: 'Georgia, "Times New Roman", serif',
              lineHeight: 0.9,
            }}
          >
            "
          </span>
          <p
            style={{
              margin: 0,
              fontFamily: 'Georgia, "Times New Roman", serif',
              color: '#ffffff',
              fontSize: 'clamp(13px, 1.9vw, 24px)',
              fontStyle: 'italic',
              fontWeight: 400,
              lineHeight: 1.65,
            }}
          >
            "We help people living with and experiencing difficult times"
          </p>
        </div>
      </div>

      <div style={{ lineHeight: 0, display: 'block', width: '100%' }}>
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: 'clamp(45px, 5vw, 80px)' }}
        >
          <path
            d="M0,60
               C60,100 120,20 180,60
               C240,100 300,20 360,60
               C420,100 480,20 540,60
               C600,100 660,20 720,60
               C780,100 840,20 900,60
               C960,100 1020,20 1080,60
               C1140,100 1200,20 1260,60
               C1320,100 1380,20 1440,60
               L1440,0 L0,0 Z"
            fill="#000000"
          />
        </svg>
      </div>

    </div>
  )
}

export default QuoteSection