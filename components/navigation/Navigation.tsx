import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { storeType } from "../../redux/configureStore";
import toggleDarkMode from "../../utils/darkModeHelper";
import Logo from "./Logo";
import { a, useTrail } from "@react-spring/web";

const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  const [isDarkMode, setDarkMode] = useState<boolean>(false);
  const currentSection = useSelector(
    (store: storeType) => store.currentSection
  );
  const sectionActiveFor = (arr: any[]) =>
    arr.includes(currentSection.name) ? "active" : "";
  
  const springs = useTrail(6, {
    from: {
      opacity: 0,
      y: -50
    },
    to: {
      opacity: 1,
      y: 0
    },
    config: {
      tension: 370,
      friction: 40,
    },
  });

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
        <div className="logo">
          <Logo />
        </div>
        <ul className="navigation__links">
          <a.li style={springs[0]}>
            <a href="#content" className={sectionActiveFor(["hero"])}>
              Home
            </a>
          </a.li>
          <a.li style={springs[1]}>
            <a href="#about" className={sectionActiveFor(["about"])}>
              About
            </a>
          </a.li>
          <a.li style={springs[2]}>
            <a
              href="#featured"
              className={sectionActiveFor(["featured", "projects"])}
            >
              Projects
            </a>
          </a.li>
          <a.li style={springs[3]}>
            <a
              href="#testimonials"
              className={sectionActiveFor(["testimonials"])}
            >
              Testimonials
            </a>
          </a.li>
          <a.li style={springs[4]}>
            <a href="#contact" className={sectionActiveFor(["contact"])}>
              Contact
            </a>
          </a.li>
          <a.li className="navigation__linkResume" style={springs[5]}>
            <a href="/assets/resume.pdf" rel="noreferrer noopener" target={"_blank"} download>
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
