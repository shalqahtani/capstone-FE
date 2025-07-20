import { deleteToken } from "@/api/storage";
import AuthContext from "@/context/AuthContext";
import { useQueryClient } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import React, { useContext } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const background = require("../../../../images/IMG-20250707-WA0015.jpg");

const Settings = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const logout = () => {
    deleteToken(); // <--- This to delete token
    queryClient.clear(); // Clear all cached queries
    setIsAuthenticated(false); // If using context
    router.push("/login");
  };
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
   <Link href="/choose/chooseItem?type=MyDonations" asChild>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Donations</Text>
          </TouchableOpacity>
</Link>

      <Link href="/choose/chooseItem?type=MyCollections" asChild>
          <TouchableOpacity style={styles.option}>
            <Text style={styles.optionText}>My Collections</Text>
          </TouchableOpacity>
</Link>
          <TouchableOpacity style={styles.option} onPress={() => logout()} >
            <Text style={styles.optionText}>Logout</Text>
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
