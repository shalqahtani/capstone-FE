import { MaterialIcons } from "@expo/vector-icons";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const images = require("../../../../images/IMG-20250707-WA0008.jpg");

export default function Choose() {
  const { type } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={images}
        style={StyleSheet.absoluteFill}
        imageStyle={{ width: "110%", height: "110%", objectFit: "cover" }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            {type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1)}
          </Text>
          <Text style={styles.subtitle}>
            Would you like to donate or collect {type}?
          </Text>
          <View style={styles.buttonRow}>
            <Link href={`/(protected)/(tabs)/(home)/provide?type=${type}`} asChild>
              <TouchableOpacity style={styles.buttonGreen}>
                <MaterialIcons name="volunteer-activism" color={"#fff"} size={50} />
                <Text style={styles.buttonWhiteText}>Donate</Text>
              </TouchableOpacity>
            </Link>
            <Link href={`/(protected)/(tabs)/(home)/receive?type=${type}`} asChild>
              <TouchableOpacity style={styles.buttonGreen}>
                <MaterialIcons name="shopping-bag" color={"#fff"} size={50} />
                <Text style={styles.buttonWhiteText}>Collect</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0)",
    paddingTop: 250,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
  },
  backText: {
    color: "#047e57",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 6,
  },
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