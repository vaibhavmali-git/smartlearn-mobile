import { LearningProgressCard } from "@/components/learn/LearningProgressCard/LearningProgressCard";
import { colors, spacing } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { BlurView } from "expo-blur";
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
  progressPercentage: number;
}

export function LearnHeader({
  title,
  subtitle,
  lessonCount,
  durationString,
  themeColor,
  illustration,
  progressPercentage,
}: LearnHeaderProps) {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: themeColor,
          paddingTop: insets.top + spacing.md,
        },
      ]}
    >
      <Pressable style={styles.backButton} onPress={() => router.back()}>
        <HugeiconsIcon
          icon={ArrowLeft02Icon}
          size={24}
          color="#010000"
          strokeWidth={2}
        />
      </Pressable>

      <Text style={styles.subtitle}>{subtitle}</Text>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.metaTags}>
        <BlurView intensity={10} tint="default" style={styles.tag}>
          <Ionicons name="book-outline" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{lessonCount} lessons</Text>
        </BlurView>

        <BlurView intensity={10} tint="default" style={styles.tag}>
          <Ionicons name="time-outline" size={14} color={colors.primary} />
          <Text style={styles.tagText}>{durationString}</Text>
        </BlurView>
      </View>

      <Image
        source={illustration}
        style={styles.illustration}
        contentFit="contain"
      />

      <LearningProgressCard percentage={progressPercentage} />
    </View>
  );
}
