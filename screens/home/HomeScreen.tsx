import { ScreenContainer } from "@/components/common/ScreenContainer";
import { AIBuddyCard } from "@/components/home/AIBuddyCard/AIBuddyCard";
import { CategoryFilter } from "@/components/home/CategoryFilter/CategoryFilter";
import { HomeHeader } from "@/components/home/HomeHeader/HomeHeader";
import { LessonCard } from "@/components/home/LessonCard/LessonCard";
import { useAuth } from "@/hooks/useAuth";
import { useHomeData } from "@/hooks/useHomeData";
import { useRouter } from "expo-router";
import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const { user } = useAuth();
  const { categories, activeCategory, setActiveCategory, lessons } =
    useHomeData();
  const router = useRouter();

  return (
    <ScreenContainer scrollable hasTabBar>
      <HomeHeader userName={user?.name || "Explorer"} />

      <AIBuddyCard />

      <Text style={styles.sectionTitle}>Let&apos;s learn</Text>

      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.carousel}
        contentContainerStyle={styles.carouselContent}
      >
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onPress={() => router.push(`/learn/${lesson.id}`)}
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
