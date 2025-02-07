import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript } from "react-icons/si";

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-xl rounded-lg shadow-xl bg-white overflow-hidden">
      <img className="w-full h-56 object-cover" src={project.image} alt={project.name} />
      <div className="p-6">
        <h3 className="text-3xl font-semibold text-gray-800">{project.name}</h3>
        <div className="flex gap-2 mt-4">
          {project.stack.map((tech) => (
            <div className="flex items-center bg-gray-200 rounded-full px-4 py-1 text-sm text-gray-700">
              <tech.icon className="mr-2" />
              {tech.name}
            </div>
          ))}
        </div>
        <p className="text-gray-600 mt-4">{project.description}</p>
        <div className="flex justify-between items-center mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400"
          >
            Live Link
          </a>
          <button
            onClick={() => window.location.href = `#project-details-${project.id}`}
            className="text-cyan-500 font-semibold"
          >
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
