import { provideItemsByType } from "@/api/items";
import { useMutation } from "@tanstack/react-query";
import * as ImagePicker from "expo-image-picker";
import * as Location from "expo-location"; // ✅ Location import
import { useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const backgroundImage = require("../../../../images/IMG-20250707-WA0015.jpg");

export default function Provide() {
  const { type } = useLocalSearchParams();
  const capitalizedType = type?.toString().charAt(0).toUpperCase() + type?.toString().slice(1);

  const [details, setDetails] = useState("");
  const [quantity, setQuantity] = useState("");
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState("");


  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:["images"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled && result.assets && result.assets.length > 0 && result.assets[0].uri) {
      
    console.log("Registering with image: result.assets[0].uri", result.assets[0].uri);
      setImage(result.assets[0].uri); // Only set the URI string
    }
  };

  // ✅ Get current location function
  const getCurrentLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      alert("Permission to access location was denied");
      return;
    }

    let locationData = await Location.getCurrentPositionAsync({});
    const coords = locationData.coords;
    const locationString = `Lat: ${coords.latitude.toFixed(6)}, Lon: ${coords.longitude.toFixed(6)}`;
    setLocation(locationString);
  };
  const mprovide = useMutation({
    mutationKey: ["provide"],
    mutationFn: ({ type, data }: { type: string; data: any}) =>

    provideItemsByType(type, data,image||""),
   onSuccess: () => {
    alert("Donation submitted successfully!");
  },
  onError: (err) => {
    console.log(image);
    alert("Failed to donate. Please try again.");
    console.error(err);
  },
});
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.overlay}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={{ flex: 1, width: "100%" }}
        >
          <ScrollView contentContainerStyle={styles.formContainer}>
            <Text style={styles.title}>Donate {capitalizedType}</Text>
            <Text style={styles.subtitle}>
              Enter item details, location, and upload a picture.
            </Text>
    
            <TextInput
              style={styles.input}
              placeholder="Details about the item you want to donate"
              value={details}
              onChangeText={setDetails}
              multiline
  numberOfLines={4}
            />

            <TextInput
              style={styles.input}
              placeholder="Quantity"
              keyboardType="numeric"
              value={quantity}
              onChangeText={setQuantity}
            />

            <TextInput
              style={styles.input}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />
            <TextInput
  style={styles.input}
  placeholder="Phone Number"
  keyboardType="phone-pad"
  value={phoneNumber}
  onChangeText={setPhoneNumber}
/>

            
              {/* ✅ Button to get current location */}
 
{/* <TouchableOpacity style={styles.uploadButton} onPress={handleImagePick}>
              <Text style={styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity> */}
                       <TouchableOpacity style={styles.uploadButton} onPress={getCurrentLocation}>
              <Text style={styles.uploadText}>Use Current Location</Text>
            </TouchableOpacity>
            <TextInput
              style={styles.input}
              placeholder="Location"
              value={location}
              onChangeText={setLocation}
            />

          

            <TouchableOpacity style={styles.uploadButton} onPress={handleImagePick}>
              <Text style={styles.uploadText}>Upload Photo</Text>
            </TouchableOpacity>

            {image && (
              <Image source={{ uri: image }} style={styles.previewImage} />
            )}

<TouchableOpacity
  style={styles.submitButton}
  onPress={() => {
    if (!details || !quantity || !address || !location || !phoneNumber) {
      alert("Please fill in all required fields.");
      return;
    }

    const data = {
      details,
      quantity,
      address,
      location,
      contact: phoneNumber
    };

    mprovide.mutate({ type: type as string, data});
  }}
>
  <Text style={styles.submitText}>Donate</Text>
</TouchableOpacity>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    paddingTop: 50,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.85)",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    alignItems: "center",
    paddingBottom: 60,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#047e57",
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#333",
    marginBottom: 24,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 14,
    borderRadius: 8,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 16,
  },
  locationButton: {
    backgroundColor: "#047e57",
    padding: 12,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  locationText: {
    color: "#fff",
    fontWeight: "bold",
  },
  uploadButton: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#047e57",
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },
  uploadText: {
    color: "#047e57",
    fontWeight: "bold",
  },
  previewImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  submitButton: {
    backgroundColor: "#047e57",
    paddingVertical: 16,
    borderRadius: 8,
    width: "100%",
    alignItems: "center",
  },
  submitText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
