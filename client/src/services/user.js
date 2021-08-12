import api from "./apiConfig"

export const login = async (userData) => {
  const res = await api.post("/users/login", { user: userData });
  const { token } = res.data;
  if (token) {
    localStorage.setItem("authToken", token);
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    return res.data.user;
  }
};


export const logout = () => {
  localStorage.removeItem("authToken");
  api.defaults.headers.common.authorization = null;
};
