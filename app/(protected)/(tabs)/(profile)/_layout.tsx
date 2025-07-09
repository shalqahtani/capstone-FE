import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
const images = require("../../../../images/IMG-20250707-WA0006.jpg");
const MyProfile = () => {
  const [image, setImage] = useState<string | null>(null);

  // Dummy user data
  const user = {
    name: "John Doe",
    email: "john.doe@email.com",
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.overlay}>
        {/* <Text style={styles.title}>Profile</Text> */}
        <Text style={styles.subtitle}>Username : Shahad</Text>
        {/* Add navigation to Provide/Receptor pages here */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: { flex: 1, height: "100%", width: "100%", resizeMode: "cover" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0)",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 40,
    padding: 24,
    borderRadius: 16,
    marginHorizontal: 16,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, color: "#333" },
});

export default MyProfile;
