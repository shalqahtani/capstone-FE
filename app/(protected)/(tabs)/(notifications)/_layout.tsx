import { getNotifications } from "@/api/notifications";
import { useQuery } from "@tanstack/react-query";
import { useFocusEffect } from "expo-router";
import React, { useCallback } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View
} from "react-native";

const images = require("../../../../images/IMG-20250707-WA0009.jpg");

const Notification = () => {
//  const [notifications, setNotifications] = useState<string[]>([]);

const {
  data: notifications,
  isFetching,
  isError,
  refetch,
} = useQuery({
  queryKey: ["notifications"],
  queryFn: () => getNotifications(),
  refetchOnWindowFocus: true, // <-- add this line
  refetchOnMount: true,       // <-- add this line for extra safety
});
    useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch])
  );

  const renderItem = ({ item }: { item: string }) => (
    <View style={styles.notificationItem}>
      <Text style={styles.notificationText}>{item}</Text>
    </View>
  );

  return (
    <View style={{ flex: 1, position: "relative" }}>
      <ImageBackground
        source={images}
        style={StyleSheet.absoluteFill}
        imageStyle={{ width: "110%", height: "110%", resizeMode: "cover" }}
      />
      <View style={styles.overlay}>
        <Text style={styles.title}>Notifications</Text>
        {notifications&&notifications.length === 0 ? (
          <Text style={styles.subtitle}>Loading notifications...</Text>
        ) : (
          <FlatList
            data={notifications}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.list}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0)",
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 18,
    color: "#333",
    textAlign: "center",
  },
  list: {
    paddingTop: 20,
  },
 notificationItem: {
  backgroundColor: "#f0f0f0", // Light grey background
  padding: 16,
  marginVertical: 8,
  borderRadius: 10,
  elevation: 2,
},
  notificationText: {
    fontSize: 16,
    color: "#333",
  },
});

export default Notification;
