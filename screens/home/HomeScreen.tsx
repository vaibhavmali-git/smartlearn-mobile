import { ScreenContainer } from "@/components/common/ScreenContainer";
import { AIBuddyCard } from "@/components/home/AIBuddyCard";
import { CategoryFilter } from "@/components/home/CategoryFilter";
import { HomeHeader } from "@/components/home/HomeHeader";
import { LessonCard } from "@/components/home/LessonCard";
import { useAuth } from "@/hooks/useAuth";
import { useHomeData } from "@/hooks/useHomeData";
import React from "react";
import { ScrollView, Text } from "react-native";
import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const { user } = useAuth();
  const { categories, activeCategory, setActiveCategory, lessons } =
    useHomeData();

  return (
    <ScreenContainer scrollable backgroundColor="#F8F9FC">
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
        contentContainerStyle={styles.carousel}
      >
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            onPress={() => console.log(`Navigate to learn/${lesson.id}`)}
          />
        ))}
      </ScrollView>
    </ScreenContainer>
  );
}
