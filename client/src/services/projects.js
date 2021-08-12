import api from "./apiConfig"

export const getAllProjects = async() => {
  const res = await api.get("/projects")
  return res.data
}

export const getOneProject = async(projectID) => {
  const res = await api.get(`/projects/${projectID}`)
  return res.data
}

export const deleteProject = async (projectID) => {
  await api.delete(`/project/${projectID}`)
}

export const addProject = async (projectData)=> {
  const res = await api.post("/projects", { project: projectData })
  return res.data
}

export const updateProject = async (projectID, projectData) => {
  const res = await api.put(`/projects/${projectID}`, { project: projectData})
  return res.data
}

