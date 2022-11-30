import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem id={idx} title={project.title} image={project.image} Deployed={project.Deployed}/>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;