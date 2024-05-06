import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  let index = 0;
  const projects = ["Frame Kart", "Miracle IT Skills"];
  const links = [
    "https://framekarts.com/home-page",
    "http://www.miracleitskills.com/",
  ];
  const image = [
    "http://127.0.0.1:5500/kuldeep/assets/img/framecart.png",
    "http://127.0.0.1:5500/kuldeep/assets/img/itskills.png",
  ];
  return (
    <div className="my-5" id="project">
      <div className="heading">
        <h1 className="text-center text-3xl font-serif" style={{ margin: 10 }}>
          Projects
        </h1>
      </div>

      {/* Project Cards */}
      <div className="flex gap-10 justify-center m-4 flex-wrap ">
        {projects.map((project) => {
          return (
            <ProjectCard
              link={links[index]}
              heading={project}
              image={image[index++]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
