import api from "./index";

export const getFurnitureItems = async () => {
  return api.get("/api/items/furniture");
};

export const provideFurniture = async (data: any) => {
  return api.post("/api/items/furniture", data);
};

export const getReceptorFurniture = async () => {
  return api.get("/api/items/furniture/receptor");
};
