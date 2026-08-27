import { User } from "@/types/auth";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ProfileHeader.styles";

export function ProfileHeader({ user }: { user: User | null }) {
  if (!user) return null;

  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  );
}
