import React from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const images = require("../images/IMG-20250707-WA0010.jpg");

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
  background: { flex: 1,
    resizeMode: "cover",
    width: "100%",
    height: "100%", },
  container: { backgroundColor: "rgba(255,255,255,0.8)", padding: 32, borderRadius: 16 ,marginTop:450},
  title: { color: "#047e57", fontSize: 18, fontWeight: "bold", marginBottom: 24, textAlign: "center" },
  button: { backgroundColor: "#047e57", padding: 12, borderRadius: 8, marginVertical: 8 },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "bold" },
});
