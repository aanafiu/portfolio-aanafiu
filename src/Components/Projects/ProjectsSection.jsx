import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiExpress, SiMongodb, SiJavascript } from "react-icons/si";
import project1 from "../../assets/project1.png"
import project2 from "../../assets/project2.png"
import project3 from "../../assets/project3.png"

import ProjectDetails from "./ProjectDetails"; // Assuming you have a ProjectDetails component

const projects = [
  {
    id: 1,
    name: "MediCamp",
    image: `${project1}`,
    description: "A MERN stack project description. For Managing Medical Camp",
    stack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JavaScript", icon: SiJavascript },
    ],
    mainTechStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    challenges: "Admin, User Dashboard, Payment Method Integration",
    futurePlans: "Future Plan 1: Add SSL Commerce.",
    liveLink: "https://mongo-medicamp.web.app/",
    githubLink: "https://github.com/aanafiu/mongo-medicamp",
  },
  {
    id: 2,
    name: "Volunteer Lagbe?",
    image: `${project2}`,
    description: "A MERN stack project description. For Managing Volunteer Posts",
    stack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JavaScript", icon: SiJavascript },
    ],
    mainTechStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    challenges: "ShadCn Tailwind Implementation",
    futurePlans: "Future Plan 1: Add SSL Commerce.",
    liveLink: "https://mongo-volunteer-lagbe.web.app/",
    githubLink: "https://github.com/aanafiu/firebase-volunteer-lagbe",
  },
  {
    id: 3,
    name: "Coupon Letters",
    image: `${project3}`,
    description: "A MERN stack project description. For Selling Coupons",
    stack: [
      { name: "React", icon: FaReact },
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "JavaScript", icon: SiJavascript },
    ],
    mainTechStack: "MERN Stack (MongoDB, Express, React, Node.js)",
    challenges: "Firebase Integration",
    futurePlans: "Future Plan 1: Add SSL Commerce.",
    liveLink: "https://reactfirebase-coupon-letters.web.app/about",
    githubLink: "https://github.com/aanafiu/reactfirebase-coupon-letters",
  },
  
];

const ProjectsSection = () => {
  return (
    <div className="container mx-auto my-20 px-4">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-12">&lt; My Projects &gt;</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {projects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectDetails project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
