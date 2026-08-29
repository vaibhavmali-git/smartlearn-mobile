import { User } from "@/types/auth";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./ProfileHeader.styles";

export function ProfileHeader({ user }: { user: User | null }) {
  if (!user) return null;

  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/icons/avatar.png")}
        style={styles.avatar}
      />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>
    </View>
  );
}
