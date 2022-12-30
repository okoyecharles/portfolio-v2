import { useSpring, a } from "@react-spring/web";
import React, { useEffect } from "react";
import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import socialLinks from "../../db/social_links";

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
    <a.aside
      className="sidebar"
      aria-roledescription="social links"
      style={spring}
    >
      <ul className="sidebar__links">
        {socialLinks.map((link, index) => (
          <li className="sidebar__item" key={index}>
            <a
              title={link.title}
              target="_blank"
              rel="noopener noreferrer"
              href={link.href}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </a.aside>
  );
};

export default SideBar;
