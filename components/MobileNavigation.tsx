import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
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
          <li className="social-links" aria-label="social-links">
            <a
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/OkoyeCharles_"
            >
              <FaTwitter />
            </a>
            <a
              title="Github"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/OkoyeCharles"
            >
              <FaGithub />
            </a>
            <a
              title="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/charles-k-okoye/"
            >
              <FaLinkedinIn />
            </a>
            <a
              title="AngelList"
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/charles-k-okoye"
            >
              <FaAngellist />
            </a>
            <a
              title="Gmail"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:okoyecharles509@gmail.com"
            >
              <SiGmail />
            </a>
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
