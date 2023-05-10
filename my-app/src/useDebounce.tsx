import React, { useState, useEffect } from "react";

const useDebounce = (searchValue: string | null, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState<string | null>(
    searchValue
  );
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(searchValue);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [searchValue, delay]);

  return debouncedValue;
};

export default useDebounce;
