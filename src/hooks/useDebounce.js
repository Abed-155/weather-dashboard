import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  const debounceCallback = (...arg) => {
    if (timeoutIdRef.current) {
      clearTimeout(timeoutIdRef.current);
    }

    timeoutIdRef.current = setTimeout(() => {
      callback(...arg);
    }, delay);
  };

  return debounceCallback;
};

export default useDebounce;
