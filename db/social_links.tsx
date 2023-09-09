import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail, SiWellfound } from "react-icons/si";

const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/okoyecharlesk",
    icon: <FaTwitter />,
  },
  {
    title: "Gmail",
    href: "mailto:okoyecharles509@gmail.com",
    icon: <SiGmail />,
  },
  {
    title: "Github",
    href: "https://github.com/okoyecharles",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/okoyecharles",
    icon: <FaLinkedinIn />,
  },
  {
    title: "Wellfound",
    href: "https://wellfound.com/u/okoyecharles",
    icon: <SiWellfound />,
  },
];
export default socialLinks;
export type socialLinksType = typeof socialLinks;

