import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Receive() {
  const { type } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available {type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1)}</Text>
      {/* Render list of available items based on type */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
});