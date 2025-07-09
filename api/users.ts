import instance from ".";

const me = async () => {
  const { data } = await instance.post("users");
  return data;
};

const getAllUsers = async () => {
  const { data } = await instance.get("users");
  return data;
};
export { getAllUsers, me };
