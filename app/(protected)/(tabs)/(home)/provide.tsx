import { useLocalSearchParams } from "expo-router";
import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

const images = require("../../../../images/IMG-20250707-WA0015.jpg");

export default function Provide() {
  const { type } = useLocalSearchParams();

  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Provide {type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1)}</Text>
        <Text style={styles.subtitle}>Enter item details, location, and upload picture.</Text>
        {/* Add form for providing item here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, backgroundColor: "rgba(255,255,255,0.7)", justifyContent: "center", alignItems: "center" },
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, color: "#333" },
});
