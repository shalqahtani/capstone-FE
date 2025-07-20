import instance from ".";

const me = async () => {
  const { data } = await instance.post("users/profile");
  return data;
};

const getSettings = async () => {
  const { data } = await instance.get("users/settings");
  return data;
};


export { getSettings, me };
