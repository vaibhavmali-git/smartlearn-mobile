import { Category } from "@/data/lessons";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./CategoryFilter.styles";

interface CategoryFilterProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const getCategoryIcon = (id: string, isActive: boolean) => {
  const color = isActive ? colors.onPrimary : colors.primary;
  switch (id) {
    case "letters":
      return (
        <Text style={{ color, fontSize: 14, fontWeight: "bold" }}>Aa</Text>
      );
    case "colors":
      return <Ionicons name="color-palette-outline" size={16} color={color} />;
    case "shapes":
      return <Ionicons name="shapes-outline" size={16} color={color} />;
    case "animals":
      return <Ionicons name="paw-outline" size={16} color={color} />;
    default:
      return null;
  }
};

export function CategoryFilter({
  categories,
  activeCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={styles.listContent}
    >
      {categories.map((cat) => {
        const isActive = activeCategory === cat.id;
        return (
          <Pressable
            key={cat.id}
            style={[styles.pill, isActive && styles.pillActive]}
            onPress={() => onSelectCategory(cat.id)}
          >
            {cat.id !== "all" && (
              <View style={styles.iconWrapper}>
                {getCategoryIcon(cat.id, isActive)}
              </View>
            )}
            <Text style={[styles.text, isActive && styles.textActive]}>
              {cat.name}
            </Text>
            <View
              style={[styles.countBadge, isActive && styles.countBadgeActive]}
            >
              <Text
                style={[styles.countText, isActive && styles.countTextActive]}
              >
                {cat.count.toString().padStart(2, "0")}
              </Text>
            </View>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}
