import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaCopyright,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiShadcnui,
  SiFirebase,
} from "react-icons/si";
import { MdCelebration } from "react-icons/md";

// Skills data with gradient colors for hover effect
const skills = [
  { name: "React.js", icon: <FaReact />, color: "from-blue-400 to-blue-600" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "from-teal-400 to-teal-600" },
  { name: "HTML", icon: <FaHtml5 />, color: "from-orange-400 to-orange-600" },
  { name: "CSS", icon: <FaCss3Alt />, color: "from-blue-500 to-blue-700" },
  { name: "ShadCn", icon: <SiShadcnui />, color: "from-gray-300 to-gray-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "from-green-500 to-green-700" },
  { name: "Express.js", icon: <SiExpress />, color: "from-gray-700 to-gray-900" },
  { name: "MongoDB", icon: <SiMongodb />, color: "from-green-600 to-green-800" },
  { name: "Git", icon: <FaGitAlt />, color: "from-red-500 to-red-700" },
  { name: "Firebase", icon: <SiFirebase />, color: "from-yellow-400 to-yellow-600" },
  { name: "C/C++", icon: <FaCopyright />, color: "from-purple-500 to-purple-700" },
  { name: "Social Media Marketing", icon: <MdCelebration />, color: "from-cyan-400 to-purple-600" },
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-center text-3xl sm:text-4xl md:text-5xl font-bold w-full my-5">
        <h1>&lt; Skills & Technologies &gt;</h1>
      </div>
      <div className="p-6 flex flex-wrap justify-center items-center gap-y-14 gap-x-5">
        {skills.map(({ name, icon, color }, index) => (
          <div
            key={index}
            className={`group relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 text-white border border-gray-400 rounded-lg transition duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-navtext hover:bg-gradient-to-r ${color}`}
          >
            <span className="text-3xl sm:text-4xl">{icon}</span>
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 text-navtext text-xs sm:text-sm rounded-lg px-3 py-1 bottom-[-30px] shadow-lg whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
