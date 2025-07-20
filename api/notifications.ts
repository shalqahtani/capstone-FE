import instance from ".";

const send = async (provider: string,receiver: string,itemType: string,itemId:any,message:string) => {
  const { data } = await instance.post("notifications/send", {
    provider,
    receiver,itemType,itemId,message
  });
  return data;
};

const getNotifications = async () => {
  const { data } = await instance.get("notifications/get");
  return data;
};
export { getNotifications, send };

