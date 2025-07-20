
import { Stack } from "expo-router";

export default function Layout() {
  return <Stack  screenOptions={{headerShown: true,
        headerStyle: { backgroundColor: "#047e57",borderBottomWidth: 0

         },
        headerTintColor: "#ffffff",headerBackVisible: false, title: "",
         headerBackButtonDisplayMode: "minimal",
        headerTitleStyle: { color: "#ffffff" },
      }}>
        {/* <Slot /> */}
      </Stack>;

}