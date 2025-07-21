import { register } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../../data/styling/colors";
import useT from "@/utils/useT";

const Register = () => {
  const t = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
      setImage(result.assets[0].uri);
    }
  };

  const images = require("../../images/IMG-20250707-WA0010.jpg");

  const mregister = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(email, password, image || ""),
    onSuccess: () => {
      router.navigate("/login");
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={images}
        style={StyleSheet.absoluteFill}
        imageStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0)",
          padding: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", padding: 20, marginTop: 100 }}>
          <Text
            style={{
              color: colors.white,
              fontSize: 24,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            {t("register")}
          </Text>
          <Text style={{ color: colors.primary, fontSize: 16 }}>
            {t("createAccount")}
          </Text>

          <TextInput
            style={{
              backgroundColor: "rgba(4, 126, 87, 0.2)",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            value={email}
            onChangeText={setEmail}
            placeholder={t("email")}
          />

          <TextInput
            style={{
              backgroundColor: "rgba(4, 126, 87, 0.2)",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            value={password}
            onChangeText={setPassword}
            placeholder={t("password")}
            secureTextEntry
          />

          {image && (
            <Image
              source={{ uri: image }}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                marginTop: 10,
              }}
            />
          )}
          <TouchableOpacity style={{ marginTop: 20 }} onPress={pickImage}>
            <Text style={{ color: colors.primary, fontSize: 16 }}>
              {t("uploadProfileImage")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: "center",
            }}
            onPress={() => mregister.mutate()}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {t("register")}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20, alignItems: "center" }}>
            <Text style={{ color: colors.primary, fontSize: 16 }}>
              {t("alreadyHaveAccount")}{" "}
              <Text
                style={{ color: colors.primary, fontWeight: "bold" }}
                onPress={() => router.navigate("/(auth)/login")}
              >
                {t("login")}
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  previewImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
});
