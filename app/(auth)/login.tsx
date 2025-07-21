import { login } from "@/api/auth";
import colors from "@/data/styling/colors";
import { useMutation } from "@tanstack/react-query";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import useT from "@/utils/useT";

const Index = () => {
  const t = useT();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const images = require("../../images/IMG-20250707-WA0010.jpg");

  const mlogin = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(username, password),
    onSuccess: () => {
      router.navigate("/");
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
          marginTop: 100,
          padding: 40,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "100%", padding: 20 }}>
          {/* <Text style={{ color: colors.primary, fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
            {t("login")}
          </Text> */}
          {/* <Text style={{ color: colors.primary, fontSize: 16 }}>
            {t("loginToAccount")}
          </Text> */}

          <TextInput
            style={{
              backgroundColor: "rgba(4, 126, 87, 0.2)",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder={t("username")}
            value={username}
            onChangeText={setUsername}
          />

          <TextInput
            style={{
              backgroundColor: "rgba(4, 126, 87, 0.2)",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
            }}
            placeholder={t("password")}
            value={password}
            secureTextEntry
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={{
              backgroundColor: colors.primary,
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: "center",
            }}
            onPress={() => mlogin.mutate()}
          >
            <Text
              style={{
                color: colors.white,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              {t("login")}
            </Text>
          </TouchableOpacity>

          <Text style={{ color: colors.primary, fontSize: 16, marginTop: 20 }}>
            {t("dontHaveAccount")}{" "}
            <Text
              style={{ color: colors.primary, fontWeight: "bold" }}
              onPress={() => router.navigate("/(auth)/register")}
            >
              {t("register")}
            </Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({});
