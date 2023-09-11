import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import { a, useSpring, useTrail, useTransition } from "@react-spring/web";
import Link from "next/link";

const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );
  const sectionActiveFor = (arr: any[]) =>
    arr.includes(currentSection.name) ? "active" : "";

  const navItems = [
    <Link href="#content" className={sectionActiveFor(["hero"])} scroll={false} key={1}>
      Home
    </Link>,
    <Link href="#about" className={sectionActiveFor(["about"])} scroll={false} key={2}>
      About
    </Link>,
    <Link
      href="#featured"
      className={sectionActiveFor(["featured", "projects"])}
      scroll={false}
      key={3}
    >
      Projects
    </Link>,
    <Link
      href="#testimonials"
      className={sectionActiveFor(["testimonials"])}
      scroll={false}
      key={4}
    >
      Testimonials
    </Link>,
    <Link
      href="#contact"
      className={sectionActiveFor(["contact"])}
      scroll={false}
      key={5}
    >
      Contact
    </Link>,
  ];

  const [spring, api] = useSpring(
    () => ({
      opacity: 0,
      config: {
        tension: 350,
        friction: 40,
      },
    }),
    []
  );

  useEffect(() => {
    // Set darkmode
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("okoye-charles-web-config") || "{}")
        ?.darkMode
    );
    // Start navItems animation
    api({ opacity: 1 });

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
      api.stop();
    };
  }, []);

  return (
    <header ref={headerRef} className={sticky ? "header sticky" : "header"}>
      <nav className="navigation" aria-label="Navigation">
        <div className="logo">
          <Logo />
        </div>
        <ul className="navigation__links">
          {navItems.map((item, i) => (
            <a.li style={spring} key={i}>
              {item}
            </a.li>
          ))}
          <a.li style={spring} className='navigation__linkResume'>
            <a
              href="https://docs.google.com/document/u/0/export?format=pdf&id=1HPTjzeOiol5kBT6HqDzHMYCGdFKZMU3NXzy-ZvtjMr4"
              rel="noreferrer noopener"
              target={"_blank"}
              download
            >
              <button tabIndex={-1}>Resume</button>
            </a>
          </a.li>
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
