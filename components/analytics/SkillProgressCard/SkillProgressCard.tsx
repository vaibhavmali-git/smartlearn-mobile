import { SkillData } from "@/data/analytics";
import { Category } from "@/data/lessons";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./SkillProgressCard.styles";

interface SkillProgressCardProps {
  categories: Category[];
  activeCategory: string;
  onSelectCategory: (id: string) => void;
  chartData: SkillData[];
}

export function SkillProgressCard({
  categories,
  activeCategory,
  onSelectCategory,
  chartData,
}: SkillProgressCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <View>
          <Text style={styles.title}>Skill progress</Text>
          <Text style={styles.subtitle}>Avg improvement this week</Text>
        </View>
        <View style={styles.dropdown}>
          <Text style={styles.dropdownText}>This Week</Text>
          <Ionicons name="chevron-down" size={14} color={colors.primary} />
        </View>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      >
        <View style={styles.filtersRow}>
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <Pressable
                key={cat.id}
                style={[styles.filterPill, isActive && styles.filterPillActive]}
                onPress={() => onSelectCategory(cat.id)}
              >
                <Text
                  style={[
                    styles.filterText,
                    isActive && styles.filterTextActive,
                  ]}
                >
                  {cat.name}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

      <View style={styles.chartContainer}>
        {chartData.map((data, index) => (
          <View key={index} style={styles.barCol}>
            <View
              style={[
                styles.bar,
                { height: `${data.value}%` },
                data.isHighest && styles.barActive,
              ]}
            >
              {data.isHighest && (
                <View style={styles.bubble}>
                  <Text style={styles.bubbleText}>+30%</Text>
                </View>
              )}
            </View>
          </View>
        ))}
      </View>

      <View style={styles.chartDaysRow}>
        {chartData.map((data, index) => (
          <Text key={index} style={styles.chartDayText}>
            {data.day}
          </Text>
        ))}
      </View>
    </View>
  );
}
