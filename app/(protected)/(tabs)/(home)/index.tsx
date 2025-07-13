import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
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
            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={() => { setType("clothes"); setStep("choose"); }}
            >
              <MaterialIcons name="checkroom" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Clothes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={() => { setType("food"); setStep("choose"); }}
            >
              <MaterialIcons name="restaurant" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Food</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonWhite}
              onPress={() => { setType("furniture"); setStep("choose"); }}
            >
              <MaterialIcons name="weekend" color={"#047e57"} size={50} />
              <Text style={styles.buttonGreenText}>Furniture</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  // Choose screen
  if (step === "choose") {
    return (
      <View style={styles.overlay}>
        <Text style={styles.title}>{type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        <Text style={styles.subtitle}>Would you like to provide or receive {type}?</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => setStep("provide")}
          >
            <Text style={styles.buttonWhiteText}>Provide</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonGreen}
            onPress={() => setStep("receive")}
          >
            <Text style={styles.buttonWhiteText}>Receive</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Provide screen
  if (step === "provide") {
    return (
      <View style={styles.overlay}>
        <Text style={styles.title}>Provide {type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        <Text style={styles.subtitle}>Enter item details, location, and upload picture.</Text>
        {/* Add your form here */}
        <TouchableOpacity style={styles.buttonWhite} onPress={() => setStep("home")}>
          <Text style={styles.buttonGreenText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  // Receive screen
  if (step === "receive") {
    return (
      <View style={styles.overlay}>
        <Text style={styles.title}>Available {type.charAt(0).toUpperCase() + type.slice(1)}</Text>
        {/* Render list of available items here */}
        <TouchableOpacity style={styles.buttonWhite} onPress={() => setStep("home")}>
          <Text style={styles.buttonGreenText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, color: "#333", marginBottom: 32 },
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 24,
    gap: 24,
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonWhite: {
    backgroundColor: "#fff",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 140,
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
    fontSize: 16,
    color: "#333",
    textAlign: "center",
    marginBottom: 24,
    paddingHorizontal: 16,
  },
});
