import { useEffect, useRef } from "react";

const useIntersectionObserver = (
  elementRef: React.MutableRefObject<null> | undefined,
  callback: () => void,
  margin = "35%"
  ) => {
  if (!elementRef) return;

  const viewed = useRef(false);

  // Define options that modifies behaviour of observer
  const options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: `0px 0px -${margin}`,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // call callback function when component enters screen
      if (entry.isIntersecting && !viewed?.current) {
        viewed.current = true;
        callback();
      }
    }, options);

    if (elementRef.current) observer.observe(elementRef.current);
    return () => {
      if (elementRef.current) observer.unobserve(elementRef.current);
    };
  }, []);
};

export default useIntersectionObserver;