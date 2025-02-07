const ProjectDetails = ({ project }) => {
  return (
    <div
      id={`project-details-${project.id}`}
      className="bg-cyan-300/30 text-navtext py-10 mb-10 flex flex-col justify-between rounded-xl shadow-xl h-full"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-6">
          {project.name}
        </h2>
        <img
          className="w-full max-w-xl mx-auto h-[250px] object-fill rounded-lg mb-6"
          src={project.image}
          alt={project.name}
        />
        <div className="text-lg mb-4">
          <p className="mb-2">
            <strong>Main Tech Stack:</strong> {project.mainTechStack}
          </p>
          <p className="mb-2">
            <strong>Description:</strong> {project.description}
          </p>
          <p className="mb-2">
            <strong>Challenges Faced:</strong> {project.challenges}
          </p>
          <p>
            <strong>Future Plans:</strong> {project.futurePlans}
          </p>
        </div>
        {/* Stack Icons in Badge Format */}
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-800 rounded-full px-4 py-1"
            >
              <tech.icon className="text-2xl" />
              <span className="text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-6">
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-400">
              Live Project
            </a>
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-6 py-2 rounded-full hover:bg-gray-700">
              GitHub Repository
            </a>
          </div>
    </div>
  );
};

export default ProjectDetails;
