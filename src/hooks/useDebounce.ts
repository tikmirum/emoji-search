import { useState, useEffect } from 'react';

type useDebounceProps = {
  value: string;
  delay: number;
};

export const useDebounce = ({ value, delay }: useDebounceProps) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
