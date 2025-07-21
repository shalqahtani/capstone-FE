import { collect, fetchItemsByType } from "@/api/items";
import AuthContext from "@/context/AuthContext";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useContext } from "react";
import {
  FlatList,
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";



export default function Receive() {
  const { type } = useLocalSearchParams();
  const capitalizedType = type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1);
  const getLatLongFromLocation = (locationString: string) => {
  const match = locationString.match(/Lat:\s*(-?\d+(\.\d+)?),\s*Lon:\s*(-?\d+(\.\d+)?)/);
  if (!match) return null;
  const lat = parseFloat(match[1]);
  const lon = parseFloat(match[3]);
  return { lat, lon };
};
  const { user, isAuthenticated } = useContext(AuthContext);

const {
  data: items,
  isFetching,
  isError,
  refetch,
} = useQuery({
  queryKey: ["items", type],
  queryFn: () => fetchItemsByType(type as string),
  refetchOnWindowFocus: true, // <-- add this line
  refetchOnMount: true,       // <-- add this line for extra safety
});
    useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );
  const mcollect = useMutation({
    mutationKey: ["collect"],
    mutationFn: ({ provider,receiver,itemType,itemId,message}: { provider: string;receiver: string;itemType: string;itemId: string;message: string;}) =>
    collect(provider,receiver,itemType,itemId,message),
    onSuccess: () => {
    alert("Collected item successfully!");
  },
  onError: (err) => {
    alert("Failed to collect. Please try again.");
    console.error(err);
  },
});
  return (
  <View style={styles.container}>
      {/* <View style={styles.header}> */}
        <Text style={styles.title}>Collect {capitalizedType}</Text>
      {/* </View> */}

      <FlatList
        data={items}
        keyExtractor={(item) => item._id}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
<View style={styles.card}>
  <View style={styles.cardLeft}>
    <Text style={styles.badge}>Tender</Text>
    <Text style={styles.textLabel}>Details: {item.details}</Text>
    <Text style={styles.textLabel}>Quantity: {item.quantity}</Text>
    <Text style={styles.textLabel}>Address: {item.address}</Text>
    <Text style={styles.textLabel}>Location: {item.location}</Text>
    <Text style={styles.textLabel}>Phone: {item.contact}</Text>

    {/* Call Button */}
    <Text
      style={styles.linkButton}
      onPress={() =>
        Linking.openURL(`tel:${item.contact.length === 8 ? `+965${item.contact}` : item.contact}`)
      }
    >
      <MaterialIcons name="call" size={20} color="#047e57" /> Call
    </Text>

    {/* WhatsApp Button */}
    <Text
      style={styles.linkButton}
      onPress={() =>
        Linking.openURL(`https://wa.me/${item.contact.length === 8 ? `965${item.contact}` : item.contact}`)
      }
    >
      <FontAwesome name="whatsapp" size={20} color="#25D366" /> WhatsApp
    </Text>
    {item.location && getLatLongFromLocation(item.location) && (
  <Text
    style={styles.linkButton}
    onPress={() => {
      const coords = getLatLongFromLocation(item.location);
      if (coords) {
        Linking.openURL(`https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lon}`);
      }
    }}
  >
    <MaterialIcons name="location-on" size={20} color="#f44336" /> View on Map
  </Text>
    )}
  </View>

  <View style={styles.cardRight}>
    {item.image && (
      <Image source={{ uri: item.image }} style={styles.cardImage} />
    )}
    
    <TouchableOpacity
      style={styles.collectButton}
      onPress={() =>
        
        // isAuthenticated && user &&
        mcollect.mutate(
          { provider: item.provider, receiver: user?._id as string,itemType: type as string, itemId: item._id, 
            message: `${user?.email as string} collected ${item.details} from you.` })
    }
    >
      <MaterialIcons name="check-circle" size={20} color="#fff" />
      <Text style={styles.collectButtonText}>Collect</Text>
    </TouchableOpacity>
      </View>
    </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
cardRight: {
  justifyContent: "space-between",
  alignItems: "center",
},
collectButton: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#047e57",
  paddingVertical: 6,
  paddingHorizontal: 10,
  borderRadius: 6,
  marginTop: 8,
},
collectButtonText: {
  color: "#fff",
  fontSize: 14,
  marginLeft: 6,
  fontWeight: "600",
},

  container: { flex: 1, backgroundColor: "#e9f5f1" },
  header: {
    backgroundColor: "#047e57",
    paddingVertical: 24,
    alignItems: "center",
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  linkButton: {
  fontSize: 14,
  color: "#047e57",
  marginTop: 4,
  textDecorationLine: "underline",
},

    title: {
    fontSize: 26,
    fontWeight: "bold",
    paddingTop: 10,
    color: "#047e57",
    // marginBottom: 12,
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  listContent: {
    padding: 16,
    paddingBottom: 100,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardLeft: {
    flex: 1,
    paddingRight: 8,
  },
  cardImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  badge: {
    backgroundColor: "#d0ece4",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
    fontSize: 13,
    color: "#045e3a",
  },
  talkButton: {
    backgroundColor: "#d8f5ec",
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    alignSelf: "flex-start",
    marginBottom: 6,
  },
  talkButtonText: {
    fontSize: 14,
    color: "#045e3a",
  },
  textLabel: {
    fontSize: 13,
    color: "#333",
    marginBottom: 2,
  },
});
