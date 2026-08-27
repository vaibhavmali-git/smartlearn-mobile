import { Lesson } from "@/data/lessons";
import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "../LessonCard/LessonCard.styles";

interface LessonCardProps {
  lesson: Lesson;
  onPress: () => void;
}

export function LessonCard({ lesson, onPress }: LessonCardProps) {
  return (
    <Pressable
      style={[styles.card, { backgroundColor: lesson.backgroundColor }]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <View style={styles.iconBadge}>
          {lesson.categoryId === "letters" ? (
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color: colors.primary,
              }}
            >
              Aa
            </Text>
          ) : (
            <Ionicons name={lesson.iconName} size={24} color={colors.primary} />
          )}
        </View>

        <View style={styles.metaTags}>
          <View style={styles.tag}>
            <Ionicons name="book-outline" size={12} color={colors.primary} />
            <Text style={styles.tagText}>{lesson.lessonCount} lessons</Text>
          </View>
          <View style={styles.tag}>
            <Ionicons name="time-outline" size={12} color={colors.primary} />
            <Text style={styles.tagText}>{lesson.durationMinutes} min</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>{lesson.subtitle}</Text>
        <Text style={styles.title}>{lesson.title}</Text>
      </View>

      <Image
        source={
          lesson.categoryId === "colors"
            ? require("@/assets/illustrations/colors-learning-illustration.svg")
            : require("@/assets/illustrations/letters-learning-illustration.svg")
        }
        style={styles.illustration}
        contentFit="contain"
      />

      <View style={styles.actionRow}>
        <Text style={styles.actionText}>Start learning</Text>
        <View style={styles.playIcon}>
          <Ionicons
            name="play"
            size={16}
            color={colors.primary}
            style={{ marginLeft: 3 }}
          />
        </View>
      </View>
    </Pressable>
  );
}
