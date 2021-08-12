import { getAllProjects } from "../../services/projects";
import { useState, useEffect } from "react";
export default function Projects() {

  const [projects, setProjects] = useState([])

  useEffect(()=> {
    const fetchProjects = async() => {
      const allProjects = await getAllProjects()
      setProjects(allProjects)
    }
    fetchProjects();
  }, [])
  return (
  <div>
    <h1>My Projects</h1>
    {projects.map((project)=>(
      <img src={project.image}/>
    ))}
  </div>
  )
}