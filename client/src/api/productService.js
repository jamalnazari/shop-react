import api from "./client";

const BASE = import.meta.env.VITE_API_URL || "http://localhost:3001";

export const productService = {
  getAll: () => api.get("/products").then((res) => res.data),

  getById: (id) => api.get(`/products/${id}`).then((res) => res.data),

  getByCategory: (category) =>
    api.get("/products", { params: { category } }).then((res) => res.data),

  create: (product) => api.post("/products", product).then((res) => res.data),

  delete: (id) => api.delete(`/products/${id}`),

  buildImageUrl: (category, imageName) =>
    `${BASE}/${category}/${imageName}.png`,
};
