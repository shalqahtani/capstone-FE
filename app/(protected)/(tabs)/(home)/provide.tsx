import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const images = require("../../../../images/IMG-20250707-WA0015.jpg");

export default function ProvideClothes() {
  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Provide Clothes</Text>
        <Text style={styles.subtitle}>Enter item details, location, and upload picture.</Text>
        {/* Form for providing clothes goes here */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, resizeMode: "cover" },
  overlay: { flex: 1, backgroundColor: "rgba(255,255,255,0.7)", justifyContent: "center", alignItems: "center" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, color: "#333" },
});
