import instance from "./index";

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