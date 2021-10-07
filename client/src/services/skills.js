import api from "./apiConfig";

export const getAllSkills = async () => {
  const res = await api.get("/skills");
  return res.data;
};

export const getOneSkill = async (skillID) => {
  const res = await api.get(`/skills/${skillID}`);
  return res.data;
};

export const deleteSkill = async (skillID) => {
  const res = await api.delete(`/skills/${skillID}`);
  return res.data;
};

export const addSkill = async (skillData) => {
  const res = await api.post("/skills", { skill: skillData });
  return res.data;
};

export const updateSkill = async (skillID, skillData) => {
  const res = await api.put(`/skills/${skillID}`, { skill: skillData });
  return res.data;
};
