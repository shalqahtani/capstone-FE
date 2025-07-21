import axios from "axios";
import { getToken } from "./storage";
const instance = axios.create({
  baseURL: "http://localhost:8002/",
});

//Athourization
instance.interceptors.request.use(async (req) => {
  const token = await getToken();
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});
export default instance;
