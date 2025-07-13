import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View
} from "react-native";

const images = require("../../../../images/IMG-20250707-WA0015.jpg");

const Settings = () => {
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
    <View style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={images}
        style={StyleSheet.absoluteFill}
        imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <View style={styles.overlay}>
        {/* <Text style={styles.title}>Clothes Section</Text>
        <Text style={styles.subtitle}>Provide or Receive Clothes</Text> */}
        {/* Add navigation to Provide/Receptor pages here */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
    objectFit: "cover", // for web
  },
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

export default Settings;
