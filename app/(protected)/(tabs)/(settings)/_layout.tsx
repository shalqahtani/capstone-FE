import { deleteToken } from "@/api/storage";
import { updateLang } from "@/api/users";
import AuthContext from "@/context/AuthContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link, router } from "expo-router";
import React, { useContext, useEffect } from "react";
import {
  ImageBackground,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
  I18nManager,
} from "react-native";
import useT from "@/utils/useT";

const background = require("../../../../images/IMG-20250707-WA0015.jpg");

const Settings = () => {
  const t = useT();
  const { lang, setLang, isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  const queryClient = useQueryClient();
  const logout = () => {
    deleteToken();
    queryClient.clear();
    setIsAuthenticated(false);
    router.push("/login");
  };
type Lang = "en" | "ar";
  const isArabic = lang === "ar";
  const toggleSwitch = () => {setLang(isArabic ? "en" : "ar");
    mChangeLang.mutate({ lang: isArabic ? "en" : "ar" });
  };
 const mChangeLang = useMutation({
    mutationKey: ["changeLang"],
    mutationFn: ({lang}: { lang: Lang}) =>  updateLang(lang),
    onSuccess: () => {
     setLang(isArabic ? "en" : "ar");
    },
  });
  useEffect(() => {
    I18nManager.forceRTL(lang === "ar");
  }, [lang]);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={background}
        style={StyleSheet.absoluteFill}
        imageStyle={{ resizeMode: "cover" }}
      />

      <View style={styles.overlay}>
        <View style={styles.card}>
          <Text style={styles.title}>{t("settings")}</Text>

          {/* Language Switch */}
          <View style={[styles.option, { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }]}>
            <Text style={styles.optionText}>{t("language")}</Text>
            <Text style={styles.optionText}>EN</Text>
            <Switch
              value={isArabic}
              onValueChange={toggleSwitch}
              thumbColor={isArabic ? "#047e57" : "#ccc"}
              trackColor={{ false: "#ccc", true: "#047e57" }}
            />
            <Text style={styles.optionText}>AR</Text>
          </View>

          <Link href="/choose/chooseItem?type=MyDonations" asChild>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>{t("myDonations")}</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/choose/chooseItem?type=MyCollections" asChild>
            <TouchableOpacity style={styles.option}>
              <Text style={styles.optionText}>{t("myCollections")}</Text>
            </TouchableOpacity>
          </Link>
          <TouchableOpacity style={styles.option} onPress={() => logout()} >
            <Text style={styles.optionText}>{t("logout")}</Text>
          </TouchableOpacity>
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
