import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import toggleDarkMode from "../../utils/darkModeHelper";

const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    setDarkMode(
      !!JSON.parse(localStorage?.getItem('okoye-charles-web-config') || '{}')?.darkMode
    )
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
    <header
      ref={headerRef}
      className={sticky ? "header sticky" : "header"}
    >
      <nav className="navigation" aria-label="Navigation">
        <div className="logo">Logo</div>
        <ul className="navigation__links">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/projects'>Projects</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
          <li aria-label="Toggle dark mode">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={(checked) => {toggleDarkMode(setDarkMode, checked)}}
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
