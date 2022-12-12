import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";

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
        <div className="logo">Logo</div>
        <ul className="navigation__links">
          <li>
            <Link
              href="/"
              className={sectionActiveFor(["hero"])}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={sectionActiveFor(["about"])}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className={sectionActiveFor(["projects", "featured"])}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={sectionActiveFor(["contact"])}
            >
              Contact
            </Link>
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
