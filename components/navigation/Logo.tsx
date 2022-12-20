import { animated, config, useSpring, useTrail } from "@react-spring/web";
import React, { useEffect, useRef } from "react";

const Logo = () => {
  const springs = useTrail(2, {
    from: {
      strokeDasharray: 164,
      strokeDashoffset: 164,
    },
    to: {
      strokeDashoffset: 0,
    },
    config: {
      duration: 750,
    }
  });

  const dotSpring = useSpring({
    from: {
      y: -100,
    },
    to: {
      y: 0
    },
    config: config.wobbly,
  })
  
  return (
    <svg
      width="169"
      height="111"
      viewBox="0 0 169 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="logo-img">
        <animated.g style={dotSpring} id="periodGroup">
          <circle id="period" cx="157" cy="85" r="12" fill="#0070F3" />
          <circle id="period-shadow" cx="157" cy="88" r="9" fill="#408EE9" />
        </animated.g>
        <g id="initial">
          <animated.mask
            id="mask0_1_2"
            style={{maskType: 'alpha', ...springs[1]}}
            maskUnits="userSpaceOnUse"
            x="78"
            y="14"
            width="58"
            height="84"
            >
            <path
              id="h"
              d="M88 14V68.5M88 98V68.5M88 68.5C95.4188 55 124.105 44.5 125.589 68.5C126.514 83.4708 125.589 93 125.589 98"
              stroke="black"
              strokeWidth="20"
              />
          </animated.mask>
          <g mask="url(#mask0_1_2)">
            <path
              id="h-mask"
              d="M113.36 46.3C116.8 46.3 120.16 47 123.44 48.4C126.72 49.8 129.42 52.02 131.54 55.06C133.66 58.06 134.72 62.02 134.72 66.94V97H116.48V69.94C116.48 66.42 115.68 63.78 114.08 62.02C112.52 60.22 110.38 59.32 107.66 59.32C105.86 59.32 104.14 59.8 102.5 60.76C100.86 61.68 99.52 63 98.48 64.72C97.48 66.4 96.98 68.34 96.98 70.54V97H78.68V14.44H96.98V55C97.42 53.68 98.4 52.36 99.92 51.04C101.48 49.68 103.42 48.56 105.74 47.68C108.1 46.76 110.64 46.3 113.36 46.3Z"
              fill="#0070F3"
              />
          </g>
          <animated.mask
            id="mask1_1_2"
            style={{maskType: 'alpha', ...springs[0]}}
            maskUnits="userSpaceOnUse"
            x="3"
            y="14"
            width="71"
            height="86"
            >
            <path
              id="c"
              d="M69 31L61.5 28L55 26.5L48.5 25C43 24 27.4139 24.7721 19 38.5C9.50001 54 13.1275 66.845 17.5 74C23 83 40.5 98.5 69 83"
              stroke="black"
              strokeWidth="20"
              />
          </animated.mask>
          <g mask="url(#mask1_1_2)">
            <path
              id="c-mask"
              d="M46.92 80.68C50.6 80.68 53.94 80.14 56.94 79.06C59.98 77.98 62.24 76.92 63.72 75.88L71.4 91.12C69.52 92.72 66.3 94.34 61.74 95.98C57.22 97.62 51.84 98.44 45.6 98.44C39.76 98.44 34.28 97.42 29.16 95.38C24.04 93.34 19.52 90.48 15.6 86.8C11.72 83.08 8.66 78.74 6.42 73.78C4.22 68.78 3.12 63.36 3.12 57.52C3.12 51.68 4.22 46.26 6.42 41.26C8.62 36.22 11.66 31.84 15.54 28.12C19.46 24.4 23.98 21.52 29.1 19.48C34.26 17.4 39.76 16.36 45.6 16.36C51.84 16.36 57.22 17.18 61.74 18.82C66.3 20.46 69.52 22.08 71.4 23.68L63.72 38.92C62.24 37.84 59.98 36.78 56.94 35.74C53.94 34.66 50.6 34.12 46.92 34.12C42.84 34.12 39.28 34.76 36.24 36.04C33.2 37.28 30.66 39 28.62 41.2C26.58 43.4 25.06 45.88 24.06 48.64C23.06 51.4 22.56 54.3 22.56 57.34C22.56 60.42 23.06 63.36 24.06 66.16C25.06 68.92 26.58 71.4 28.62 73.6C30.66 75.8 33.2 77.54 36.24 78.82C39.28 80.06 42.84 80.68 46.92 80.68Z"
              fill="#0070F3"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
