import colors from "@/data/styling/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.primary,
          borderTopColor: colors.primary,
          height: 60,
          paddingTop: 10,
          paddingBottom: 0,
          marginBottom: 0,
        },
        //tabBarPosition: "top",
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
         tabBarShowLabel: false,
      }}
    >

      <Tabs.Screen
        name="(tabs)/(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/(notifications)"
        options={{
          title: "Notifications",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="notifications" color={color} size={30} />
          ),
        }}
      />
      <Tabs.Screen
        name="(tabs)/(profile)"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
          ),
        }}
      />
        <Tabs.Screen
        name="(tabs)/(settings)"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" color={color} size={30} />
          ),
        }}
      />
    </Tabs>
    
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
