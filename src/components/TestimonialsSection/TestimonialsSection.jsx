import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import Testimonial from "../Testimonial/Testimonial";
import { testimonials } from "../../data/Data";

const GAP = 24; 
const INTERVAL = 3500;

const TestimonialsSection = () => {
  const [active, setActive]           = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);
  const [cardWidth, setCardWidth]       = useState(300);

  const wrapperRef = useRef(null);
  const timerRef   = useRef(null);
  const total       = testimonials.length;

  const recalc = useCallback(() => {
    const w = window.innerWidth;
    const count = w >= 900 ? 3 : w >= 560 ? 2 : 1;
    setVisibleCount(count);
    if (wrapperRef.current) {
      const cw =
        (wrapperRef.current.offsetWidth - GAP * (count - 1)) / count;
      setCardWidth(cw);
    }
  }, []);

  useEffect(() => {
    recalc();
    window.addEventListener("resize", recalc);
    return () => window.removeEventListener("resize", recalc);
  }, [recalc]);

  const goTo = useCallback((idx) => {
    setActive((idx + total) % total);
  }, [total]);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % total);
    }, INTERVAL);
  }, [total]);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const translateX = (() => {
    if (visibleCount <= 2) return active * (cardWidth + GAP);
    const prev = (active - 1 + total) % total;
    return prev * (cardWidth + GAP);
  })();

  return (
    <section className="bg-[#F5EFE4] py-20 px-4 md:px-6">

      <h2 className="
        font-serif text-center font-semibold text-[#1a1a1a] mb-12
        text-[clamp(1.6rem,4vw,2.6rem)]
      ">
        What Our Patients Are Saying
      </h2>

      <div className="overflow-hidden max-w-[1100px] mx-auto" ref={wrapperRef}>
        <div
          className="flex"
          style={{
            gap: `${GAP}px`,
            transform: `translateX(-${translateX}px)`,
            transition: "transform 0.55s cubic-bezier(0.4,0,0.2,1)",
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              style={{ width: cardWidth, minWidth: cardWidth }}
            >
              <Testimonial {...t} active={i === active} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2.5 mt-9 flex-wrap">
        {testimonials.map((_, i) => (

           <button
            key={i}
             onClick={() => { goTo(i); startTimer(); }}
            className="transition-all duration-300 hover:scale-110"
            style={{
              width: i === active ? "16px" : "16px",
              height: i === active ? "16px" : "16px",
              background: i === active ? "linear-gradient(90deg, #C18C2C 0%, #FCF38A 50%, #C18C2C 100%" : "rgba(255,255,255,0.45)",
              clipPath: "polygon(50% 0%, 85% 15%, 100% 50%, 75% 90%, 25% 90%, 0% 50%, 15% 15%)"
            }}
          />
        ))}
      </div>

    </section>
  );
};

export default TestimonialsSection;