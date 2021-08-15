import { getAllProjects } from "../../services/projects";
import { useState, useEffect } from "react";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import "./Projects.css";

export default function Projects({ user }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await getAllProjects();
      setProjects(allProjects);
    };
    fetchProjects();
  }, []);
  return (
    <div id="projects">
      <h1 className="projects-title">My Projects</h1>
      <div id="my-projects">
      {projects.map((project) => (
        <div className="project" key={project.id}>
          <img className="project-img" src={project.image} alt={project.name} />
          <ProjectButtons
            deployedURL={project.deployed_url}
            githubURL={project.github_url}
            user={user}
            projectID={project.id}
          />
        </div>
      ))}
      </div>
    </div>
  );
}
