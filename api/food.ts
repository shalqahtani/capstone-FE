import api from "./index";

export const getFoodItems = async () => {
  return api.get("/api/items/food");
};

export const provideFood = async (data: any) => {
  return api.post("/api/items/food", data);
};

export const getReceptorFood = async () => {
  return api.get("/api/items/food/receptor");
};
