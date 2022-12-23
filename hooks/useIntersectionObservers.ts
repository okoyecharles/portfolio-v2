import { useEffect } from "react";
import store from "../redux/configureStore";
import { updateCurrentSection } from "../redux/slices/current-section_slice";

const useIntersectionObservers = (sectionRefs: React.MutableRefObject<null>[]) => useEffect(() => {
  // Define options that modifies behaviour of observer
  const options: IntersectionObserverInit = {
    threshold: 0,
    root: null,
    rootMargin: "0px 0px -90%",
  };

  // Define observer that checks when section enters or leaves page
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          store.dispatch(updateCurrentSection(entry.target.className));
        }
      });
    },
    options
  );

  // Observe all sections
  sectionRefs.forEach((section) => {
    if (section?.current) {
      observer.observe(section.current);
    }
  });

  // Return cleanup function on section unmount
  return () => {
    sectionRefs.forEach((section) => {
      if (section?.current) observer.unobserve(section.current);
    });
  };
}, sectionRefs.map(sectionRef => sectionRef.current));

export default useIntersectionObservers;
