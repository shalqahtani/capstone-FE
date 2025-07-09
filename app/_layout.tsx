import { getToken } from "@/api/storage";
import AuthContext from "@/context/AuthContext";
import colors from "@/data/styling/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      if (token) {
        setIsAuthenticated(true);
      }
    };
    checkToken();
  }, []);
  //Missed Logout part
  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
          <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="(auth)" />
              <Stack.Screen name="(protected)" />
            </Stack>
          </QueryClientProvider>
          <StatusBar barStyle={"light-content"} />
        </SafeAreaView>
      </SafeAreaProvider>
    </AuthContext.Provider>
  );
}
