import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const images = require("../images/IMG-20250707-WA0010.jpg");

export default function Settings() {
  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.overlay}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.subtitle}>Change language, notifications, and more.</Text>
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
