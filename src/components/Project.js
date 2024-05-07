import React from "react";
import ProjectCard from "./ProjectCard";
import framekart from "../assets/img/framecart.png";
import itskills from "../assets/img/itskills.png";

const Project = () => {
  let index = 0;
  const projects = ["Frame Kart", "Miracle IT Skills"];
  const links = [
    "https://framekarts.com/home-page",
    "http://www.miracleitskills.com/",
  ];
  const image = [framekart, itskills];
  return (
    <div className="my-5" id="project">
      <div className="heading">
      <h5 className="title-left text-3xl font-bold p-3 text-center">
            Projects
          </h5>
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
