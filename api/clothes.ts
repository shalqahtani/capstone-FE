import api from "./index";

export const getClothesItems = async () => {
  return api.get("/api/items/clothes");
};

export const provideClothes = async (data: any) => {
  return api.post("/api/items/clothes", data);
};

export const getReceptorClothes = async () => {
  return api.get("/api/items/clothes/receptor");
};
