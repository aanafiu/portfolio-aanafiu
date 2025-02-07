import React from "react";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Science in CSE",
    institution: "National University Of Bangladesh",
    duration: "2022 - Present (6th Semester)",
    icon: <FaUniversity />,
    bgColor: "from-blue-500/50 to-navtext/50",
    result: "CGPA - 3.52",
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Mirpur Cantonment Public School & College",
    duration: "2018 - 2020",
    icon: <FaGraduationCap />,
    bgColor: "from-green-500/50 to-navtext/50",
    result: "GPA - 5"
  },
  {
    id: 3,
    degree: "Secondary School Certificate (SSC)",
    institution: "Ahsania Mission College",
    duration: "2016 - 2018",
    icon: <FaSchool />,
    bgColor: "from-cyan-500/50 to-navtext/50",
    result: "GPA - 5"
  },
];

const experienceData = [
  {
    id: 1,
    role: "Social Media Manager",
    company: "Programming Club, Tejgaon College",
    duration: "2023 - Present",
    icon: <FaBriefcase />,
    bgColor: "from-navtext/50 to-blue-500/50",
    discription: "Maintaining Social Media is only by Title. Arranging Contests on Online Judges(Toph, HackerRank) or Taking Class On Workshop On C Lang in the Club"
  },
  {
    id: 2,
    role: "App Owner",
    company: "HandCash",
    duration: "2018 - 2019",
    icon: <FaBriefcase />,
    bgColor: "from-navtext/50 to-green-500/50",
    discription: "It was an Earning App. Where People can earn money through doing simple tasks. About 1000+ Downloaded On Playstore and 200 User Uses it regularly"
  },
];

const EducationAndExperience = () => {
  return (
    <div className="py-10 px-6">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 text-navtext">
       &lt; Education & Experience &gt;
      </h2>
      <div className="flex flex-col md:flex-row w-full justify-center items-start sm:space-x-10 space-y-10 sm:space-y-0">
        {/* Education Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-navtext mb-6">Education</h3>
          <div className="relative">
            <div className="border-l-4 border-navtext absolute left-6 top-0 h-full hidden sm:block"></div>
            {educationData.map((edu) => (
              <div key={edu.id} className="mb-8 flex items-start">
                <div className="bg-gradient-to-r text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg mr-6 sm:ml-6 sm:mr-0 relative z-10">
                  {edu.icon}
                </div>
                <div
                  className={`bg-gradient-to-r ${edu.bgColor} p-5 pl-10 rounded-lg shadow-lg w-full max-w-md text-white transform transition duration-300 hover:scale-105`}
                >
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <p className="text-lg opacity-90">{edu.institution}</p>
                  <p className="text-lg mt-2 opacity-80">{edu.duration}</p>
                  <p className="text-base font-bold mt-2 opacity-80">{edu.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-3xl font-bold text-navtext mb-6">Experience</h3>
          <div className="relative">
            <div className="border-l-4 border-navtext absolute left-6 top-0 h-full hidden sm:block"></div>
            {experienceData.map((exp) => (
              <div key={exp.id} className="mb-8 flex items-start">
                <div className="bg-gradient-to-r text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg mr-6 sm:ml-6 sm:mr-0 relative z-10">
                  {exp.icon}
                </div>
                <div
                  className={`bg-gradient-to-r ${exp.bgColor}  p-5 pl-10 rounded-lg shadow-lg w-full max-w-md text-white transform transition duration-300 hover:scale-105`}
                >
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-lg opacity-90">{exp.company}</p>
                  <p className="text-lg  opacity-80">{exp.duration}</p>
                  <p className="text-base mt-2 opacity-90">{exp.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndExperience;
