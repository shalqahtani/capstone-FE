import { deleteToken } from "@/api/storage";
import { updateLang } from "@/api/users";
import AuthContext from "@/context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useContext } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const images = require("../images/IMG-20250707-WA0010.jpg");

export default function ChooseLanguage() {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    const { lang, setLang } = useContext(AuthContext);
type Lang = "en" | "ar";
    const queryClient = useQueryClient();
    const mChangeLang = useMutation({
    mutationKey: ["register"],
    mutationFn: ({lang}: { lang: Lang}) =>  updateLang(lang),
    onSuccess: () => {
     
      if (isAuthenticated) {                    
          deleteToken(); // <--- This to delete token
    queryClient.clear(); // Clear all cached queries
    setIsAuthenticated(false); // If using context
        router.navigate("../(settings)"); 
      }else {
        router.navigate("/login");
      }
    },
  });
  return (
    <ImageBackground source={images} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Language</Text>
        <TouchableOpacity style={styles.button}
        onPress={() =>{
        setLang("en");
        if(isAuthenticated) {
        mChangeLang.mutate(
          { lang: "en"});
        }else {
        router.navigate("/login");
      }
        }
          
         } >
          <Text style={styles.buttonText}>English</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}    
        
        onPress={() =>{
        setLang("ar");
        if(isAuthenticated) {
        mChangeLang.mutate(
          { lang: "ar"});
        }else {
        router.navigate("/login");
      }
        }
          
         } >
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
