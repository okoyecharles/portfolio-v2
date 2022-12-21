import { a, useSpring } from "@react-spring/web";
import React, { useEffect } from "react";

const initialStroke = (stroke: number) => ({
  strokeDasharray: stroke,
  strokeDashoffset: stroke,
});
const endStroke = () => ({
  strokeDashoffset: 0,
});

const Logo = () => {
  const cSpring = useSpring({
    from: initialStroke(151.3169403076172),
    to: endStroke(),
  });

  const [verticalHSpring, api1] = useSpring(() => ({
    ...initialStroke(83)
  }));

  const [curvedHSpring, api2] = useSpring(() => ({
    ...initialStroke(71.51106262207031),
  }));

  const [dotSpring, api3] = useSpring(() => ({
    y: -100,
    config: {
      tension: 200,
      friction: 15
    },
  }));

  useEffect(() => {
    setTimeout(() => {api1.start(endStroke())}, 300);
    setTimeout(() => {api2.start(endStroke())}, 500);
    setTimeout(() => {api3.start({ y: 0 })}, 700);
  }, []);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169"
      height="95"
      viewBox="0 0 169 95"
      fill="none"
    >
      <g id="logo-img">
        <a.g id="periodGroup" style={dotSpring}>
          <circle id="period" cx="155.982" cy="72" r="12" />
          <circle
            id="period-shadow"
            cx="155.982"
            cy="75"
            r="8"
          />
        </a.g>
        <g id="initial">
          <mask
            id="mask0_1_2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="85"
            y="32"
            width="49"
            height="52"
          >
            <a.path
              id="curved-h"
              style={curvedHSpring}
              d="M94.4821 53C97.4821 41.5 124.482 35 124.482 54.5C124.482 61 124.482 77 124.482 84"
              stroke="black"
              stroke-width="19"
            />
          </mask>
          <g mask="url(#mask0_1_2)">
            <path
              id="curved-h-mask"
              d="M112.342 33.3C115.782 33.3 119.142 34 122.422 35.4C125.702 36.8 128.402 39.02 130.522 42.06C132.642 45.06 133.702 49.02 133.702 53.94V84H115.462V56.94C115.462 53.42 114.662 50.78 113.062 49.02C111.502 47.22 109.362 46.32 106.642 46.32C104.842 46.32 103.122 46.8 101.482 47.76C99.8421 48.68 98.5021 50 97.4621 51.72C96.4621 53.4 95.9621 55.34 95.9621 57.54L96.1169 55.5L95.9621 42C96.4021 40.68 97.3821 39.36 98.9021 38.04C100.462 36.68 102.402 35.56 104.722 34.68C107.082 33.76 109.622 33.3 112.342 33.3Z"
            />
          </g>
          <mask
            id="mask1_1_2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="77"
            y="1"
            width="20"
            height="83"
          >
            <a.path
              id="vertical-h"
              style={verticalHSpring}
              d="M86.9821 1V84"
              stroke="#0070F3"
              stroke-width="19"
            />
          </mask>
          <g mask="url(#mask1_1_2)">
            <path
              id="vertical-h-mask"
              d="M86.9821 1V84"
              stroke-width="19"
            />
          </g>
          <mask
            id="mask2_1_2"
            style={{ maskType: "alpha" }}
            maskUnits="userSpaceOnUse"
            x="1"
            y="1"
            width="72"
            height="86"
          >
            <a.path
              id="c"
              style={cSpring}
              d="M67.9821 18L60.4821 15L53.9821 13.5L47.4821 12C41.9821 11 26.396 11.7721 17.9821 25.5C8.48211 41 12.1096 53.845 16.4821 61C21.9821 70 39.4821 85.5 67.9821 70"
              stroke="black"
              stroke-width="20"
            />
          </mask>
          <g mask="url(#mask2_1_2)">
            <path
              id="c-mask"
              d="M45.9021 67.68C49.5821 67.68 52.9221 67.14 55.9221 66.06C58.9621 64.98 61.2221 63.92 62.7021 62.88L70.3821 78.12C68.5021 79.72 65.2821 81.34 60.7221 82.98C56.2021 84.62 50.8221 85.44 44.5821 85.44C38.7421 85.44 33.2621 84.42 28.1421 82.38C23.0221 80.34 18.5021 77.48 14.5821 73.8C10.7021 70.08 7.64211 65.74 5.40211 60.78C3.20211 55.78 2.10211 50.36 2.10211 44.52C2.10211 38.68 3.20211 33.26 5.40211 28.26C7.60211 23.22 10.6421 18.84 14.5221 15.12C18.4421 11.4 22.9621 8.52 28.0821 6.48C33.2421 4.4 38.7421 3.36 44.5821 3.36C50.8221 3.36 56.2021 4.18 60.7221 5.82C65.2821 7.46 68.5021 9.08 70.3821 10.68L62.7021 25.92C61.2221 24.84 58.9621 23.78 55.9221 22.74C52.9221 21.66 49.5821 21.12 45.9021 21.12C41.8221 21.12 38.2621 21.76 35.2221 23.04C32.1821 24.28 29.6421 26 27.6021 28.2C25.5621 30.4 24.0421 32.88 23.0421 35.64C22.0421 38.4 21.5421 41.3 21.5421 44.34C21.5421 47.42 22.0421 50.36 23.0421 53.16C24.0421 55.92 25.5621 58.4 27.6021 60.6C29.6421 62.8 32.1821 64.54 35.2221 65.82C38.2621 67.06 41.8221 67.68 45.9021 67.68Z"
              fill="#0070F3"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Logo;
