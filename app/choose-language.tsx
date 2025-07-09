import React from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";

const images = require("../images/IMG-20250707-WA0005.jpg");

export default function ChooseLanguage() {
  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Language</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>العربية</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: "center", alignItems: "center" },
  container: { backgroundColor: "rgba(255,255,255,0.8)", padding: 32, borderRadius: 16 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 24, textAlign: "center" },
  button: { backgroundColor: "#2a9d8f", padding: 16, borderRadius: 8, marginVertical: 8 },
  buttonText: { color: "#fff", fontSize: 18, fontWeight: "bold" },
});
