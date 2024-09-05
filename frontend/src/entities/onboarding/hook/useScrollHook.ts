import { useRef, useEffect, useCallback } from 'react';

const useScrollCount = (end: number, start: number = 0, duration: number = 3000, onComplete?: () => void) => {
  const dom = useRef<HTMLDivElement | null>(null);
  const stepTime = Math.abs(Math.floor(duration / (end - start))); // 1

  const handleScroll = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      const { current } = dom;

      if (entry.isIntersecting && current) {
        let currentNumber = start;
        const counter = setInterval(() => {
          currentNumber += 1;

          if (currentNumber === end) {
            clearInterval(counter);
            if (onComplete) {
              onComplete(); // 애니메이션 완료 시 콜백 함수 호출
            }
          }
          // You can update the DOM or state with the currentNumber here
          if (current) {
            current.textContent = currentNumber.toString();
          }
        }, stepTime);
      }
    },
    [end, start, stepTime, onComplete],
  );

  useEffect(() => {
    const { current } = dom;
    if (current) {
      const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: dom,
  };
};

export default useScrollCount;
