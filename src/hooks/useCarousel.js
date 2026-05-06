import { useState, useEffect, useRef, useCallback } from "react";

const useCarousel = ({ total = 0, interval = 3000, autoPlay = true }) => {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      setActive((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % total);
  }, [total]);

  const start = useCallback(() => {
    if (!autoPlay) return;
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, interval);
  }, [autoPlay, interval, next]);

  const stop = useCallback(() => {
    clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    start();
    return stop;
  }, [start, stop]);

  return {
    active,
    goTo,
    next,
    start,
    stop,
  };
};

export default useCarousel;