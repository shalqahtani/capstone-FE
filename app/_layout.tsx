// app/_layout.tsx or wherever your root layout is
import { getToken, getUser } from "@/api/storage"; // <- Ensure you store user after login
import AuthContext from "@/context/AuthContext";
import colors from "@/data/styling/colors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export interface User {
  email: string;
  language: string;
  _id: string;
}

export default function RootLayout() {


  const queryClient = new QueryClient();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
 const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const checkToken = async () => {
      const token = await getToken();
      const userData = await getUser(); // fetch stored user
      if (token && userData) {
        setIsAuthenticated(true);
        setUser(JSON.parse(userData));
      } else {
        setIsAuthenticated(false);
        setUser(null);
        router.replace("/login");
      }
    };
    checkToken();
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated, user, setUser }}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: colors.primary }}>
          <QueryClientProvider client={queryClient}>
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="choose-language" />
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
