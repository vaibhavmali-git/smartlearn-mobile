import { AIRecommendation } from "@/data/aiRecommendations";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./RecommendationCard.styles";

interface RecommendationCardProps {
  recommendation: AIRecommendation;
  onPress: () => void;
}

export function RecommendationCard({
  recommendation,
  onPress,
}: RecommendationCardProps) {
  return (
    <Pressable
      style={[
        styles.card,
        { backgroundColor: recommendation.themeColor || "#F4EFD7" },
      ]}
      onPress={onPress}
    >
      <View style={styles.cardTop}>
        <View style={styles.titleWrapper}>
          <View style={styles.iconBadge}>
            <Ionicons
              name={recommendation.iconName}
              size={18}
              color={colors.primary}
            />
          </View>
          <Text style={styles.title} numberOfLines={1}>
            {recommendation.title}
          </Text>
        </View>

        <View style={styles.durationPill}>
          <Ionicons name="time-outline" size={12} color="#073647" />
          <Text style={styles.durationText}>
            {recommendation.durationMinutes} min
          </Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <Text style={styles.subtitle} numberOfLines={2}>
          {recommendation.subtitle}
        </Text>

        <View style={styles.actionButton}>
          <Text style={styles.actionText}>Practice</Text>
          <Ionicons name="play-circle" size={26} color="#161A34" />
        </View>
      </View>
    </Pressable>
  );
}
