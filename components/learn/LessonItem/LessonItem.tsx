import { colors } from "@/theme";
import { CourseNode } from "@/types/lesson";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./LessonItem.styles";

interface LessonItemProps {
  node: CourseNode;
  index: number;
  isLast: boolean;
  onPress: () => void;
}

export function LessonItem({ node, index, isLast, onPress }: LessonItemProps) {
  const isCompleted = node.status === "completed";
  const isCurrent = node.status === "current";
  const isLocked = node.status === "locked";

  const actionText = isCompleted
    ? "Replay"
    : isCurrent
      ? "Continue"
      : "Start Lesson";

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        {!isLast && (
          <View style={[styles.line, isCompleted && styles.lineActive]} />
        )}

        <View
          style={[
            styles.circleIndicator,
            isCompleted && styles.circleCompleted,
            isCurrent && styles.circleCurrent,
          ]}
        >
          {isCompleted ? (
            <Ionicons name="checkmark" size={24} color="#FFFFFF" />
          ) : (
            <Text style={styles.circleText}>{index + 1}</Text>
          )}
        </View>
      </View>

      <Pressable
        style={[
          styles.card,
          { backgroundColor: node.backgroundColor },
          isLocked && styles.cardLocked,
        ]}
        onPress={onPress}
        disabled={isLocked}
      >
        <View style={styles.headerRow}>
          <Text style={styles.title}>{node.title}</Text>
          <View style={styles.durationRow}>
            <Ionicons
              name="time-outline"
              size={14}
              color="rgba(22, 27, 51, 0.6)"
            />
            <Text style={styles.durationText}>{node.durationMinutes} min</Text>
          </View>
        </View>

        <Text style={styles.description}>{node.description}</Text>

        {!isLocked && (
          <View style={styles.actionRow}>
            <Text style={styles.actionText}>{actionText}</Text>
            <Ionicons name="play-circle" size={24} color={colors.primary} />
          </View>
        )}

        {isLocked && node.backgroundColor !== "#F5F5F5" && (
          <View style={styles.actionRow}>
            <Text style={styles.actionText}>{actionText}</Text>
            <Ionicons name="play-circle" size={24} color={colors.primary} />
          </View>
        )}
      </Pressable>
    </View>
  );
}
