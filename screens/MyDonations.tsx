import { fetchMyDonations } from '@/api/items'; // Create this API helper
import { useQuery } from '@tanstack/react-query';
import { useLocalSearchParams } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function MyDonations() {
    
      const { type } = useLocalSearchParams();
  const { data, isLoading } = useQuery({
    queryKey: ['my-donations',type],
    queryFn: () => fetchMyDonations(type as string),
  });

  if (isLoading) return <Text>Loading...</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>My Donations</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <View style={styles.card}>
  <View style={styles.cardLeft}>
    <Text style={styles.badge}>Tender</Text>
    <Text style={styles.textLabel}>Details: {item.details}</Text>
    <Text style={styles.textLabel}>Quantity: {item.quantity}</Text>
    <Text style={styles.textLabel}>Address: {item.address}</Text>
    <Text style={styles.textLabel}>Location: {item.location}</Text>
    <Text style={styles.textLabel}>Phone: {item.contact}</Text>

  </View>


    </View>
    
    
    }
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
