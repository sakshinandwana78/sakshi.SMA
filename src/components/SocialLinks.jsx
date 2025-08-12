import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import LayoutSection from "./LayoutSection";
const SocialLinks = () => {
  const social = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com/yourprofile",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaTwitter />,
      href: "https://twitter.com/yourprofile",
      label: "Twitter",
      color: "hover:text-blue-400",
    },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/yourprofile",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/yourprofile",
      label: "GitHub",
      color: "hover:text-gray-900",
    },
  ];

  return (
    <LayoutSection id="connect" className="bg-white text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Connect with Us on Social Media
      </h2>
      <div className="flex justify-center gap-12 text-5xl text-gray-700">
        {social.map(({ icon, href, label, color }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className={`${color} transition-colors`}
          >
            {icon}
          </a>
        ))}
      </div>
    </LayoutSection>
  );
};

export default SocialLinks;
