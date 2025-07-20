import instance from ".";

const send = async () => {
  const { data } = await instance.post("notifications/send");
  return data;
};

const getNotifications = async () => {
  const { data } = await instance.get("notifications/get");
  return data;
};
export { getNotifications, send };
