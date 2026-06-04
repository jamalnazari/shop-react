import api from "./client";

export const userService = {
  getAll: () => api.get("/users").then((res) => res.data),
};
