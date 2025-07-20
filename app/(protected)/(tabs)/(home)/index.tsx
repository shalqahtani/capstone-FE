import { MaterialIcons } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const images = require("../../../../images/IMG-20250707-WA0008.jpg");

export default function Home() {
  const [step, setStep] = useState<"home" | "choose" | "provide" | "receive">("home");
  const [type, setType] = useState<string>("");
  
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerBackVisible: false, // <-- hides the back button
      gestureEnabled: false,    // <-- disables swipe back gesture (optional)
    });
  }, [navigation]);
  // Home screen
  if (step === "home") {
    return (
 <View style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={images}
        style={StyleSheet.absoluteFill}
        imageStyle={{ width: "110%", height: "110%", objectFit: "cover" }}
      />
      <View style={styles.overlay}>
        <Text style={styles.description}>
          Welcome! This app helps you donate or collect food, clothes, and furniture for free. 
          Join our community to give or receive essentials and make a positive impact!
        </Text>
        <View style={styles.buttonContainer}>
          <Link href="/(protected)/(tabs)/(home)/choose?type=clothes" asChild>
            <TouchableOpacity style={styles.buttonWhite}>
              <MaterialIcons name="checkroom" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Clothes</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(protected)/(tabs)/(home)/choose?type=food" asChild>
            <TouchableOpacity style={styles.buttonWhite}>
              <MaterialIcons name="restaurant" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Food</Text>
            </TouchableOpacity>
          </Link>
          <Link href="/(protected)/(tabs)/(home)/choose?type=furniture" asChild>
            <TouchableOpacity style={styles.buttonWhite}>
              <MaterialIcons name="weekend" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Furniture</Text>
            </TouchableOpacity>
          </Link>
        </View>
        {/* <Text style={styles.title}>Clothes Section</Text>
        <Text style={styles.subtitle}>Provide or Receive Clothes</Text> */}
        {/* Add navigation to Provide/Receptor pages here */}
      </View>
    </View>
    );
  }

  return null;
}

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
  subtitle: { fontSize: 18, color: "#333", marginBottom: 32 },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    gap: 0,
  },
  buttonGreen: {
    backgroundColor: "#047e57",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 140,
    alignItems: "center",
  },
  buttonGreenText: {
    color: "#047e57",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonWhite: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 100,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#047e57",
  },
  buttonWhiteText: {
    color: "#047e57",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 18,
    color: "#047e57",
    textAlign: "center",
    marginTop: 400,
    marginBottom: 32,
    marginHorizontal: 24,
    fontWeight: "500",
  },
});
