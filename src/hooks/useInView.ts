import { RefObject, useCallback, useEffect, useState } from 'react';

export const useInView = (
  ref: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit
): boolean => {
  const [inView, setInView] = useState(false);

  const callback = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (inView !== entry.isIntersecting) {
        setInView(entry.isIntersecting);
      }
    },
    [inView]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(callback, options);

    ref.current && observer.observe(ref.current);

    return () => {
      ref.current && observer.unobserve(ref.current);
    };
  }, [callback, options]);

  return inView;
};
