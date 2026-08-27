import { AICoachCard } from "@/components/ai/AICoachCard/AICoachCard";
import { RecommendationCard } from "@/components/ai/RecommendationCard/RecommendationCard";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAI } from "@/hooks/useAI";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { styles } from "./AICoachScreen.styles";

export function AICoachScreen() {
  const { recommendations } = useAI();

  return (
    <ScreenContainer scrollable={false} hasTabBar backgroundColor="#F8F9FC">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.header}>
          <Text style={styles.title}>AI Coach</Text>
          <Text style={styles.subtitle}>Your personal learning buddy</Text>
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
