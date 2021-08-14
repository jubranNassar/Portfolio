import api from "./apiConfig";

export const getAllSkills = async () => {
  const res = await api.get("/skills");
  return res.data;
};
