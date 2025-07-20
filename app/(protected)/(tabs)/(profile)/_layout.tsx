import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const background = require("../../../../images/IMG-20250707-WA0006.jpg");

const MyProfile = () => {
  const [image, setImage] = useState<string | null>(null);

  const user = {
    name: "Shahad Al Qahtani",
    email: "shahad@gmail.com",
    phone: "999999999",
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
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
    // <ImageBackground source={background} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Profile</Text>

        {/* Profile Picture */}
        <TouchableOpacity onPress={pickImage} style={styles.avatarContainer}>
          {image ? (
            <Image source={{ uri: image }} style={styles.avatar} />
          ) : (
            <MaterialIcons name="person" size={100} color="#047e57" />
          )}
        </TouchableOpacity>

        {/* Profile Fields */}
        <View style={styles.inputBox}>
          <Text style={styles.inputText}>{user.name}</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputText}>{user.email}</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.inputText}>{user.phone}</Text>
        </View>

      </View>
    // </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.85)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#047e57",
    marginBottom: 20,
  },
  avatarContainer: {
    marginBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#047e57",
    width: 120,
    height: 120,
    backgroundColor: "#fff",
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  inputBox: {
    width: "100%",
    backgroundColor: "#fff",
    borderColor: "#047e57",
    borderWidth: 1.5,
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
  },
  inputText: {
    color: "#333",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default MyProfile;
