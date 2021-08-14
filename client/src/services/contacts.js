import api from "./apiConfig";

export const getAllMessages = async () => {
  const res = await api.get("/contacts");
  return res.data;
};

export const getOneMessage = async (id) => {
  const res = await api.get(`/contacts/${id}`);
  return res.data;
};

export const deleteMessage = async (id) => {
  await api.delete(`/contacts/${id}`);
};

export const createMessage = async (contactData) => {
  const res = await api.post("/contacts", { contact: contactData });
  return res.data;
};
