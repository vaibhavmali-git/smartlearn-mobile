import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../HomeHeader/HomeHeader.styles";

interface HomeHeaderProps {
  userName: string;
}

export function HomeHeader({ userName }: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <View style={styles.profileSection}>
        <Image
          source={require("@/assets/icons/avatar.png")}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greetingText}>Hello {userName} 👋</Text>
          <Text style={styles.nameText}>Good Morning</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.langButton}>
          <Image
            source={require("@/assets/icons/flag.png")}
            style={styles.flag}
          />
          <Text style={styles.langText}>English</Text>
          <Ionicons name="chevron-down" size={12} color={colors.primary} />
        </Pressable>
        <View style={styles.bellBadge}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.primary}
          />
          <View style={styles.notificationDot} />
        </View>
      </View>
    </View>
  );
}
