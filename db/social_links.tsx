import { FaAngellist, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const socialLinks = [
  {
    title: "Twitter",
    href: "https://twitter.com/OkoyeCharles_",
    icon: <FaTwitter />,
  },
  {
    title: "Github",
    href: "https://github.com/okoyecharles",
    icon: <FaGithub />,
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/charles-k-okoye/",
    icon: <FaLinkedinIn />,
  },
  {
    title: "AngelList",
    href: "https://angel.co/u/charles-k-okoye",
    icon: <FaAngellist />,
  },
  {
    title: "Gmail",
    href: "mailto:okoyecharles509@gmail.com",
    icon: <SiGmail />,
  },
];
export default socialLinks;
export type socialLinksType = typeof socialLinks;

