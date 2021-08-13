import { getAllProjects } from "../../services/projects";
import { useState, useEffect } from "react";
import ProjectButtons from "../ProjectButtons/ProjectButtons";
import EditProject from "../../screens/EditProject/EditProject";


export default function Projects({user}) {

  const [projects, setProjects] = useState([])

  useEffect(()=> {
    const fetchProjects = async() => {
      const allProjects = await getAllProjects()
      setProjects(allProjects)
    }
    fetchProjects();
  }, [])
  return (
  <div id="my-projects">
    <h1>My Projects</h1>
    {projects.map((project)=>(
      <div>
      <img key={project.name} src={project.image} alt={project.name}/>
      <ProjectButtons deployedURL={project.deployed_url} githubURL={project.github_url} user={user} projectID={project.id}/>
      </div>
    ))}
  </div>
  )
}