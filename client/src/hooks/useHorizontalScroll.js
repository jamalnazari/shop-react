import { useRef, useCallback } from "react";

export function useHorizontalScroll(step = 300) {
  const scrollRef = useRef(null);

  const scrollBy = useCallback(
    (direction) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction * step,
          behavior: "smooth",
        });
      }
    },
    [step]
  );

  return {
    scrollRef,
    scrollNext: () => scrollBy(1),
    scrollPrev: () => scrollBy(-1),
  };
}
