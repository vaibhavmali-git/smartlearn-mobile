import { SkillProgressCard } from "@/components/analytics/SkillProgressCard/SkillProgressCard";
import { StreakCard } from "@/components/analytics/StreakCard/StreakCard";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAnalytics } from "@/hooks/useAnalytics";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./AnalyticsScreen.styles";

export function AnalyticsScreen() {
  const {
    streak,
    skillCategories,
    activeCategory,
    setActiveCategory,
    chartData,
  } = useAnalytics();

  return (
    <ScreenContainer scrollable hasTabBar>
      <View style={styles.header}>
        <Text style={styles.title}>Analytics</Text>
        <View style={styles.bellBadge}>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={colors.primary}
          />
          <View style={styles.notificationDot} />
        </View>
      </View>

      <StreakCard data={streak} />

      <SkillProgressCard
        categories={skillCategories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        chartData={chartData}
      />
    </ScreenContainer>
  );
}
