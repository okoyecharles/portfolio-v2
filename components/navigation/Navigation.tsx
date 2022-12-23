import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import { a, useTrail } from "@react-spring/web";
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

  const [springs, api] = useTrail(6, () => ({
    opacity: 0,
    y: -50,
    config: {
      tension: 350,
      friction: 40,
    },
  }));

  useEffect(() => {
    // Set darkmode
    setDarkMode(
      !!JSON.parse(localStorage?.getItem("okoye-charles-web-config") || "{}")
        ?.darkMode
    );
    // Start navlinks animation
    api.start({
      opacity: 1,
      y: 0,
    });

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
          <a.li style={springs[0]}>
            <Link
              href="#content"
              className={sectionActiveFor(["hero"])}
              scroll={false}
            >
              Home
            </Link>
          </a.li>
          <a.li style={springs[1]}>
            <Link
              href="#about"
              className={sectionActiveFor(["about"])}
              scroll={false}
            >
              About
            </Link>
          </a.li>
          <a.li style={springs[2]}>
            <Link
              href="#featured"
              className={sectionActiveFor(["featured", "projects"])}
              scroll={false}
            >
              Projects
            </Link>
          </a.li>
          <a.li style={springs[3]}>
            <Link
              href="#testimonials"
              className={sectionActiveFor(["testimonials"])}
              scroll={false}
            >
              Testimonials
            </Link>
          </a.li>
          <a.li style={springs[4]}>
            <Link
              href="#contact"
              className={sectionActiveFor(["contact"])}
              scroll={false}
            >
              Contact
            </Link>
          </a.li>
          <a.li className="navigation__linkResume" style={springs[5]}>
            <Link
              href="/assets/resume.pdf"
              rel="noreferrer noopener"
              target={"_blank"}
              download
            >
              <button tabIndex={-1}>Resume</button>
            </Link>
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
