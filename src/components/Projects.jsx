import { projects } from "../constants";

const Projects = () => {
  return (
    <div className="bg-[#eaeaea] py-2">
      <h3 className="mt-7 text-[28px] md:text-4xl text-center">Some of my past projects</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-8 rounded-2xl">
        {projects.map((projects) => {
          return (
            <div
              className="flex mx-8 flex-col items-center rounded-md shadow-2xl gap-4 my-4 md:p-4 lg:min-w-[25%]"
              key={projects.title}
            >
              <img src={projects.imgURL} alt={projects.title}/>
              <div className="flex flex-col gap-3 p-3 md:p-0">
                <div className="flex flex-col gap-4">
                  <h6 className="text-xl">{projects.title}</h6>
                  <p className="text-[#4b5156] line-clamp-3">{projects.intro}</p>
                </div>
                <div className="flex justify-between w-full">
                  <a
                    className="text-[#17a2b8]"
                    target="_blank"
                    rel="noreferrer"
                    href={projects.liveDemo}
                  >
                    Live Demo
                  </a>
                  <a
                    className="text-[#17a2b8]"
                    target="_blank"
                    rel="noreferrer"
                    href={projects.sourceCode}
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
