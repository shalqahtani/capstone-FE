import instance from "./index";
import { send } from "./notifications";

export const provideItemsByType = async (itemType: string,itemData:any,image:string) => {
  const formData = new FormData();
  formData.append("details", itemData.details);
  formData.append("quantity", itemData.quantity);
  formData.append("address", itemData.address);
  formData.append("location", itemData.location);
  formData.append("contact", itemData.contact);
formData.append("image", {
  uri: image,              // file:///... path
  name:  'photo.jpg',
  type:  'image/jpeg',
} as any);
    const { data } = await instance.post(`${itemType}/provide`,formData
  );
  console.log("Data sent to server:", data);
  return data;
};

export const fetchItemsByType = async (itemType: string) => {
    const { data } = await instance.get(`${itemType}/receptor`);
  return data;
};
export const fetchMyDonations = async (itemType: string) => {
  
    const { data } = await instance.get(`${itemType}/donations`);
  return data;
};
export const fetchMyCollections = async (itemType: string) => {
    const { data } = await instance.get(`${itemType}/collections`);
  return data;
};
export const collect = async (provider:string,receiver: string,itemType: string,itemId: string,message: string ) => {
console.log("Collecting item:", { provider, receiver, itemType, itemId, message });
  if (!provider || !receiver || !itemType || !itemId) {
    throw new Error("Missing required parameters for collection");  
  }
  console.log("Parameters are valid:", { provider, receiver, itemType, itemId });
  const { data } = await instance.post(`${itemType}/collect`, {
    itemId,
    receiver,
  }).then(() => {
    // Send notification after successful collection;
    return send(
      provider,
      receiver,
      itemType,
      itemId,
      message,
    );
  });
  return data;
};