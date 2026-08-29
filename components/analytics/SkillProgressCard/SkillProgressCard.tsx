import { SkillData } from "@/data/analytics";
import { Category } from "@/data/lessons";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import Svg, { Defs, Pattern, Rect } from "react-native-svg";
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
          <Ionicons name="chevron-down" size={14} color="#073647" />
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
        {chartData.map((data, index) => {
          const barHeight = data.value;
          return (
            <View key={index} style={styles.barCol}>
              {data.isHighest ? (
                <>
                  <View style={styles.bubble}>
                    <Text style={styles.bubbleText}>+30%</Text>
                  </View>
                  <View
                    style={[
                      styles.bar,
                      styles.barActive,
                      { height: `${barHeight}%` },
                    ]}
                  />
                </>
              ) : (
                <View style={[styles.bar, { height: `${barHeight}%` }]}>
                  <Svg
                    width="42"
                    height="100%"
                    style={styles.stripedPattern}
                    preserveAspectRatio="none"
                  >
                    <Defs>
                      <Pattern
                        id={`diagonalStripes-${index}`}
                        patternUnits="userSpaceOnUse"
                        width="5"
                        height="4"
                        patternTransform="rotate(1)"
                      >
                        <Rect x="0" y="0" width="1" height="4" fill="#1E3A5F" />
                      </Pattern>
                    </Defs>
                    <Rect
                      x="0"
                      y="0"
                      width="42"
                      height="100%"
                      fill={`url(#diagonalStripes-${index})`}
                      rx="16"
                      ry="16"
                    />
                  </Svg>
                </View>
              )}
            </View>
          );
        })}
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
