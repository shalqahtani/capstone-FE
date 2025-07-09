// we will create a functions responsible for calling the auth endpoints

import instance from ".";
import { storeToken } from "./storage";

//register
const register = async (username: string, password: string, image: string) => {
  const formData = new FormData();
  formData.append("username", username);
  formData.append("password", password);
  formData.append("image", {
    name: "image.jpg",
    uri: image,
    type: "image/jpeg",
  } as any);

  const { data } = await instance.post(
    "mini-project/api/auth/register",
    formData
  );
  //responce (token)
  if (data.token) {
    await storeToken(data.token);
  }
  return data;
};

//login
const login = async (username: string, password: string) => {
  const { data } = await instance.post("mini-project/api/auth/login", {
    username,
    password,
  });
  if (data.token) {
    await storeToken(data.token);
  }
  return data;
};
export { login, register };
