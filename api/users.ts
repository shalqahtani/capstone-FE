import instance from ".";

const me = async () => {
  const { data } = await instance.post("users/profile");
  return data;
};

const updateLang = async (lang:string) => {
  const { data } = await instance.post("users/settings",{lang});
  return data;
};


export { updateLang, me };
