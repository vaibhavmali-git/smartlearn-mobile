import { Category } from "@/data/lessons";
import { colors } from "@/theme";
import { PawPrintIcon, ShapesIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import { Image } from "expo-image";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./CategoryFilter.styles";

interface CategoryWithCount extends Category {
  count: number;
}

interface CategoryFilterProps {
  categories: CategoryWithCount[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
}

const getCategoryIcon = (id: string, isActive: boolean) => {
  const color = isActive ? colors.onPrimary : colors.primary;

  switch (id) {
    case "letters":
      return (
        <Image
          source={require("@/assets/icons/logo-letters.png")}
          style={{ width: 18, height: 18, tintColor: color }}
          contentFit="contain"
        />
      );

    case "colors":
      return (
        <Image
          source={require("@/assets/icons/logo-paintboard.png")}
          style={{ width: 18, height: 18, tintColor: color }}
          contentFit="contain"
        />
      );

    case "shapes":
      return (
        <HugeiconsIcon
          icon={ShapesIcon}
          size={18}
          color={color}
          strokeWidth={2}
        />
      );

    case "animals":
      return (
        <HugeiconsIcon
          icon={PawPrintIcon}
          size={18}
          color={color}
          strokeWidth={2}
        />
      );

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
            <View style={styles.categoryContent}>
              {cat.id !== "all" && (
                <View style={styles.iconWrapper}>
                  {getCategoryIcon(cat.id, isActive)}
                </View>
              )}

              <Text
                style={[
                  styles.text,
                  cat.id === "all" && styles.allText,
                  isActive && styles.textActive,
                ]}
              >
                {cat.name}
              </Text>
            </View>

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
