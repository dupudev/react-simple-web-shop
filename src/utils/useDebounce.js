import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
  const regexValue = new RegExp(value, 'gi');

  const [debounceValue, setDebounceValue] = useState(regexValue);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(regexValue);
    }, delay);

    return () => clearTimeout(handler);
  }, [value]);

  return debounceValue;
};

export default useDebounce;
