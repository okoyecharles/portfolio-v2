import { useTrail, animated, config } from "@react-spring/web";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import socialLinks from "../../db/social_links";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";

const MobileNavigation = () => {
  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );
  const sectionActiveFor = (arr: any[]) => 
    arr.includes(currentSection.name) ? 'active' : '';

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
      friction: 130
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
        <div className="logo"><Logo /></div>
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
              key={i}
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
            <a href="#content" className={sectionActiveFor(['hero'])} onClick={handleNavToggle}>Home</a>
          </li>
          <li>
            <a href="#about" className={sectionActiveFor(['about'])} onClick={handleNavToggle}>About</a>
          </li>
          <li>
            <a href="#featured" className={sectionActiveFor(['featured', 'projects'])} onClick={handleNavToggle}>Projects</a>
          </li>
          <li>
            <a href="#testimonials" className={sectionActiveFor(['testimonials'])} onClick={handleNavToggle}>Testimonials</a>
          </li>
          <li>
            <a href="#contact" className={sectionActiveFor(['contact'])} onClick={handleNavToggle}>Contact</a>
          </li>
          <li className="navigation__linkResume">
            <a href="/resume.pdf" rel="noreferrer noopener" target={'_blank'}>
              <button tabIndex={-1}>Resume</button>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MobileNavigation;
