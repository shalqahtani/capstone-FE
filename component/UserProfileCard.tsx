import colors from "@/data/styling/colors";
import { Image, Text, View } from "react-native";

interface UserProfileCardProps {
  imageUrl: string;
  email: string;
  username: string;
}

const UserProfileCard = ({
  imageUrl,
  email,
  username,
}: UserProfileCardProps) => {
  return (
    <View
      style={{
        padding: 20,
        margin: 10,
        backgroundColor: colors.secondary,
        borderRadius: 15,
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: imageUrl ? imageUrl : " ",
        }}
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          marginBottom: 15,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 8,
          color: colors.white,
        }}
      >
        {username ? username : "Dawood"}
      </Text>
      <Text
        style={{
          fontSize: 16,
          color: colors.white,
          fontWeight: "600",
          opacity: 0.8,
        }}
      >
        {email ? email : "dawood@gmail.com"}
      </Text>
    </View>
  );
};

export default UserProfileCard;
