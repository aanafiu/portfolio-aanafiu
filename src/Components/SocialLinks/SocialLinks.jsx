import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";

const SocialLinks = () => {
  const socialMedia = [
    { id: 1, name: "GitHub", icon: <FaGithub />, link: "https://github.com/aanafiu" },
    { id: 2, name: "LinkedIn", icon: <FaLinkedin />, link: "https://linkedin.com/in/aanafiu" },
    { id: 3, name: "Twitter", icon: <FaTwitter />, link: "https://twitter.com/aanafiu" },
    { id: 4, name: "Facebook", icon: <FaFacebook />, link: "https://facebook.com/abdullaal.nafiu" },
    { id: 5, name: "Codeforces", icon: <SiCodeforces />, link: "https://codeforces.com/profile/break_end" },
  ];

  return (
    <div className="flex flex-row md:flex-col justify-center space-x-5 md:space-x-0 md:space-y-6 my-6">
      {socialMedia.map(({ id, name, icon, link }) => (
        <a
          key={id}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 text-white bg-cyan-300/30 rounded-full transition duration-300 transform hover:shadow-2xl hover:shadow-navtext hover:scale-110 hover:bg-gradient-to-r from-green-400 to-blue-500 shadow-lg"
        >
          <span className="text-2xl">{icon}</span>
          <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-navtext text-sm rounded-lg px-3 py-1 left-20 md:left-16 shadow-lg whitespace-nowrap">
            {name}
          </span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
