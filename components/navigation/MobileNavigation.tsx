import { useTrail, animated, config } from "@react-spring/web";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import socialLinks from "../../db/social_links";
import toggleDarkMode from "../../utils/darkModeHelper";

const MobileNavigation = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  function handleNavToggle() {
    setIsActive(!isActive);
  }

  const [trails, api] = useTrail(socialLinks.length, () => ({
    opacity: 0,
    y: 25,
    rotateX: '45deg',
    config: {
      mass: 5,
      tension: 2000,
      friction: 140
    }
  }))

  api.start({
    to: {
      opacity: isActive ? 1: 0,
      y: isActive ? 0 : 15,
      rotateX: isActive ? '0deg' : '45deg'
    }
  })

  useEffect(() => {
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("okoye-charles-web-config") || "{}")
        ?.darkMode
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setSticky(entry.intersectionRatio < 1);
      },
      { threshold: 1 }
    );

    if (headerRef.current) observer.observe(headerRef.current);

    return function () {
      if (headerRef.current) observer.unobserve(headerRef.current);
    };
  }, []);

  return (
    <header className={sticky ? "header sticky" : "header"} ref={headerRef}>
      <nav className="m_navigation" aria-label="Navigation">
        <div className="logo">Logo</div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked) => {
            toggleDarkMode(setDarkMode, checked);
          }}
        />
        <button
          aria-label="Open Navigation Menu"
          className={
            isActive ? "m_navigation__toggle active" : "m_navigation__toggle"
          }
          onClick={handleNavToggle}
        >
          <div className="hamburger"></div>
        </button>
        <ul className="m_navigation__links">
          <li className="social-links" aria-label="social-links">{
            trails.map((style, i) => (
              <animated.a
              title={socialLinks[i].title}
              target="_blank"
              rel="noopener noreferrer"
              href={socialLinks[i].href}
              style={{
                perspective: '3d',
                ...style
              }}
              >
                {socialLinks[i].icon}
              </animated.a>
            ))
          }
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavigation;
