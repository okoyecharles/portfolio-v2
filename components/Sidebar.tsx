import React from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideBar: React.FC = () => {
  return (
    <nav className="sidebar" aria-roledescription="side navigation">
      <ul className="sidebar__links">
          <li className="sidebar__item" title="Twitter">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/OkoyeCharles_"
            >
              <FaTwitter />
              <div className="sidebar__label">
                <span>Twitter</span>
              </div>
            </a>
          </li>
          <li className="sidebar__item" title="Github">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/OkoyeCharles"
            >
              <FaGithub />
            </a>
          </li>
          <li className="sidebar__item" title="LinkedIn">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/charles-k-okoye/"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="sidebar__item" title="AngelList">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/charles-k-okoye"
            >
              <FaAngellist />
            </a>
          </li>
          <li className="sidebar__item" title="Gmail">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:okoyecharles509@gmail.com"
            >
              <SiGmail />
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default SideBar;
