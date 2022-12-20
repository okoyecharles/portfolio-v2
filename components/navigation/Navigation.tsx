import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";

const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );
  const sectionActiveFor = (arr: any[]) => 
    arr.includes(currentSection.name) ? 'active' : '';

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
    <header ref={headerRef} className={sticky ? "header sticky" : "header"}>
      <nav className="navigation" aria-label="Navigation">
        <div className="logo"><Logo /></div>
        <ul className="navigation__links">
          <li>
            <a
              href="#content"
              className={sectionActiveFor(["hero"])}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={sectionActiveFor(["about"])}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#featured"
              className={sectionActiveFor(["featured", "projects"])}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              className={sectionActiveFor(["testimonials"])}
            >
              Testimonials
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={sectionActiveFor(["contact"])}
            >
              Contact
            </a>
          </li>
          <li className="navigation__linkResume">
            <a href="/resume.pdf" rel="noreferrer noopener" target={'_blank'}>
              <button tabIndex={-1}>Resume</button>
            </a>
          </li>
          <li aria-label="Toggle dark mode">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={(checked) => {
                toggleDarkMode(setDarkMode, checked);
              }}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
