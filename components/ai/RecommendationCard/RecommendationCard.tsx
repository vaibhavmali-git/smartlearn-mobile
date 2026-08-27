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
    <Pressable style={styles.card} onPress={onPress}>
      <View
        style={[
          styles.iconBadge,
          { backgroundColor: recommendation.themeColor },
        ]}
      >
        <Ionicons
          name={recommendation.iconName}
          size={20}
          color={colors.primary}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>{recommendation.title}</Text>
        <Text style={styles.subtitle}>{recommendation.subtitle}</Text>
      </View>

      <View style={styles.durationContainer}>
        <Ionicons name="flash" size={12} color={colors.warning} />
        <Text style={styles.durationText}>
          {recommendation.durationMinutes}m
        </Text>
      </View>
    </Pressable>
  );
}
