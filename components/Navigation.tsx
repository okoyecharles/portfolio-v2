import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Navigation = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setSticky(entry.intersectionRatio < 1);
        console.log(entry.intersectionRatio);
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
      <nav className="navigation">
        <div className="logo">Logo</div>
        <ul className="navigation__links">
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/'>About</Link>
          </li>
          <li>
            <Link href='/'>Projects</Link>
          </li>
          <li>
            <Link href='/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
