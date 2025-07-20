import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const background = require("../../../../images/IMG-20250707-WA0015.jpg");

const Settings = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        style={StyleSheet.absoluteFill}
        imageStyle={{ resizeMode: "cover" }}
      />

      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>Settings</Text>

          {/* Settings Options */}
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>Language</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Donations</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Collections</Text>
          </TouchableOpacity>

          {/* Contact Button */}
          {/* <TouchableOpacity style={styles.contactBtn}>
            <Text style={styles.contactBtnText}>Contact Us</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0)",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    backgroundColor: "#047e57",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 24,
  },
  option: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 20,
    width: "100%",
    marginBottom: 16,
  },
  optionText: {
    fontSize: 16,
    color: "#333",
  },
  contactBtn: {
    backgroundColor: "#004d3b",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 20,
    width: "100%",
    alignItems: "center",
  },
  contactBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Settings;
