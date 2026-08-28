import { colors, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./LearnHeader.styles";

interface LearnHeaderProps {
  title: string;
  subtitle: string;
  lessonCount: number;
  durationString: string;
  themeColor: string;
  illustration: any;
}

export function LearnHeader({
  title,
  subtitle,
  lessonCount,
  durationString,
  themeColor,
  illustration,
}: LearnHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: themeColor, paddingTop: insets.top + spacing.md },
      ]}
    >
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color={colors.primary} />
      </Pressable>

      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>

      <View style={styles.metaTags}>
        <View style={styles.tag}>
          <Ionicons name="book-outline" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{lessonCount} lessons</Text>
        </View>
        <View style={styles.tag}>
          <Ionicons name="time-outline" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{durationString}</Text>
        </View>
      </View>

      <Image
        source={illustration}
        style={styles.illustration}
        contentFit="contain"
      />
    </View>
  );
}
