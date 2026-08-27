import { IconButton } from "@/components/common/IconButton";
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
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
          style={styles.avatar}
        />
        <View>
          <Text style={styles.greetingText}>Hello {userName} 👋</Text>
          <Text style={styles.nameText}>Good Morning</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <Pressable style={styles.langButton}>
          <Text style={styles.langText}>🇬🇧 English</Text>
          <Ionicons name="chevron-down" size={14} color={colors.primary} />
        </Pressable>
        <IconButton
          icon={
            <Ionicons
              name="notifications-outline"
              size={22}
              color={colors.primary}
            />
          }
          onPress={() => {}}
          size="md"
          accessibilityLabel="Notifications"
        />
      </View>
    </View>
  );
}
