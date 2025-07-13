import { Link, useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Choose() {
  const { type } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1)}</Text>
      <Text style={styles.subtitle}>Would you like to provide or receive {type}?</Text>
      <View style={styles.buttonRow}>
        <Link href={`/(protected)/(tabs)/(home)/provide?type=${type}`}>
          <TouchableOpacity style={styles.buttonGreen}>
            <Text style={styles.buttonWhiteText}>Provide</Text>
          </TouchableOpacity>
        </Link>
        <Link href={`/(protected)/(tabs)/(home)/receive?type=${type}`}>
          <TouchableOpacity style={styles.buttonGreen}>
            <Text style={styles.buttonWhiteText}>Receive</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 16 },
  subtitle: { fontSize: 18, color: "#333", marginBottom: 32 },
  buttonRow: { flexDirection: "row", gap: 24 },
  buttonGreen: {
    backgroundColor: "#047e57",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginHorizontal: 8,
    minWidth: 140,
    alignItems: "center",
  },
  buttonWhiteText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});