import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

const SkipToContent = () => {
  const [focus, setFocus] = useState(false);
  const springs = useSpring({
    x: focus ? 5 : -200,
    y: 5,
    config: {
      tension: 180,
      friction: 17.5
    },
  });

  const handleFocus = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setFocus(true)
  }

  return (
    <animated.a href="#content" id="skip-to-content" aria-label="Skip to Content" style={springs} onFocus={handleFocus} onBlur={() => {setFocus(false)}}>Skip to Content</animated.a>
  )
}

export default SkipToContent