import { AICoachCard } from "@/components/ai/AICoachCard/AICoachCard";
import { RecommendationCard } from "@/components/ai/RecommendationCard/RecommendationCard";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAI } from "@/hooks/useAI";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./AICoachScreen.styles";

export function AICoachScreen() {
  const { recommendations } = useAI();

  return (
    <ScreenContainer scrollable hasTabBar>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>AI Coach</Text>
          </View>
          <View style={styles.bellBadge}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color={colors.primary}
            />
            <View style={styles.notificationDot} />
          </View>
        </View>

        <AICoachCard />

        <Text style={styles.sectionTitle}>Recommended Practice</Text>

        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            onPress={() => console.log(`Selected recommendation: ${rec.id}`)}
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
