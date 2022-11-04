import React from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const SideBar: React.FC = () => {
  return (
    <nav className="sidebar" aria-roledescription="side navigation">
      <ul className="sidebar__links">
          <li className="sidebar__item">
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
          <li className="sidebar__item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/OkoyeCharles"
            >
              <FaGithub />
              <div className="sidebar__label">
                <span>Github</span>
              </div>
            </a>
          </li>
          <li className="sidebar__item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/charles-k-okoye/"
            >
              <FaLinkedinIn />
              <div className="sidebar__label">
                <span>LinkedIn</span>
              </div>
            </a>
          </li>
          <li className="sidebar__item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://angel.co/u/charles-k-okoye"
            >
              <FaAngellist />
              <div className="sidebar__label">
                <span>AngelList</span>
              </div>
            </a>
          </li>
          <li className="sidebar__item">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:okoyecharles509@gmail.com"
            >
              <SiGmail />
              <div className="sidebar__label">
                <span>Gmail</span>
              </div>
            </a>
          </li>
      </ul>
    </nav>
  );
};

export default SideBar;
