import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#047e57", borderBottomWidth: 0 }, //here code
        headerTintColor: "#ffffff",
        headerBackVisible: false,
        title: "",
        headerBackButtonDisplayMode: "minimal",
        headerTitleStyle: { color: "#ffffff" },
      }}
    >
      <Stack.Screen
        name="/(protected)/(tabs)/(home)"
        options={{
          headerShown: false,
          headerBackVisible: false,
          gestureEnabled: false,
          headerTitle: "Home",
        }}
      />
      {/* <Slot /> */}
    </Stack>
  );
}
