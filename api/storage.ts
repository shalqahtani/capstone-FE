import { deleteItemAsync, getItemAsync, setItemAsync } from "expo-secure-store";
import { Platform } from "react-native";
const storeToken = async (data: any) => {
  try {
    if (Platform.OS === "web") {
      await localStorage.setItem("token", data.token);
      await localStorage.setItem("user", JSON.stringify(data.user));
    } else {
      // mobile
      await setItemAsync("token", data.token);
      await setItemAsync("user", JSON.stringify(data.user));
    }
  } catch (error) {
    console.error("Error storing token:", error);
  }
};

const getToken = async () => {
  try {
    if (Platform.OS === "web") {
      return await localStorage.getItem("token");
    } else {
      // mobile
      return await getItemAsync("token");
    }
  } catch (error) {
    console.error("Error getting token:", error);
  }
};
const getUser = async () => {
  try {
    if (Platform.OS === "web") {
      return await localStorage.getItem("user");
    } else {
      // mobile
      return await getItemAsync("user");
    }
  } catch (error) {
    console.error("Error getting token:", error);
  }
};
const deleteToken = async () => {
  try {
    if (Platform.OS === "web") {
      await localStorage.removeItem("token");
      await localStorage.removeItem("user");
    } else {
      // mobile
      await deleteItemAsync("token");
      await deleteItemAsync("user");
    }
  } catch (error) {
    console.error("Error deleting token:", error);
  }
};

/*const logout = async() => {
  {await AsyncStorage.clear();
    navigate.reset({
      Index:0,
      routes:[{name: 'Login'}],
    });
  
  } catch (error){
    Alert.alert('Error', 'Something went wrong during logout.');
  }
  };
  return logout;*/
export { deleteToken, getToken, getUser, storeToken };

