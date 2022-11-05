import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import toggleDarkMode from "../utils/darkModeHelper";

const MobileNavigation = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  function handleNavToggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
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
      <nav className="m_navigation">
        <div className="logo">Logo</div>
        <DarkModeSwitch
          checked={isDarkMode}
          onChange={(checked) => {
            toggleDarkMode(setDarkMode, checked);
          }}
        />
        <button
          className={
            isActive ? "m_navigation__toggle active" : "m_navigation__toggle"
          }
          onClick={handleNavToggle}
        >
          <div className="hamburger"></div>
        </button>
        <ul className="m_navigation__links">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Projects</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavigation;
