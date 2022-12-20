import { useSpring, a } from "@react-spring/web";
import React, { useEffect } from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideBar: React.FC = () => {
  const [spring, api] = useSpring(() => ({
    from: {
      opacity: 0,
    },
    config: {
      tension: 200,
      friction: 28,
    },
  }));

  useEffect(() => {
    api.start({
      opacity: 1,
    });
  }, []);

  return (
    <a.aside className="sidebar" aria-roledescription="social links" style={spring}>
      <ul className="sidebar__links">
        <li className="sidebar__item">
          <a
            title="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/OkoyeCharles_"
          >
            <FaTwitter />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            title="Github"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/OkoyeCharles"
          >
            <FaGithub />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            title="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/charles-k-okoye/"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            title="AngelList"
            target="_blank"
            rel="noopener noreferrer"
            href="https://angel.co/u/charles-k-okoye"
          >
            <FaAngellist />
          </a>
        </li>
        <li className="sidebar__item">
          <a
            title="Gmail"
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:okoyecharles509@gmail.com"
          >
            <SiGmail />
          </a>
        </li>
      </ul>
    </a.aside>
  );
};

export default SideBar;
