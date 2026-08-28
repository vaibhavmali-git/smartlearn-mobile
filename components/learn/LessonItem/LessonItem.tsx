import { CourseNode } from "@/types/lesson";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./LessonItem.styles";

interface LessonItemProps {
  node: CourseNode;
  index: number;
  isLast: boolean;
  nextNodeStatus?: "completed" | "current" | "locked";
  onPress: () => void;
}

const PASTEL_COLORS = ["#F4EFD7", "#FFE9E9", "#D7EAF8", "#E5CDFF"];

export function LessonItem({
  node,
  index,
  isLast,
  nextNodeStatus,
  onPress,
}: LessonItemProps) {
  const isCompleted = node.status === "completed";
  const isCurrent = node.status === "current";
  const isLocked = node.status === "locked";

  const actionText = isCompleted
    ? "Replay"
    : isCurrent
      ? "Continue"
      : "Start Lesson";

  const cardColor = PASTEL_COLORS[index % PASTEL_COLORS.length];

  const progressPercent = 0.3;
  const circleSize = 56;
  const strokeWidth = 4;
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressStrokeDashoffset = circumference * (1 - progressPercent);

  const renderTimelineIndicator = () => {
    if (isCompleted) {
      return (
        <View style={styles.circleIndicator}>
          <View style={styles.circleCompletedOuter}>
            <View style={styles.circleCompletedInner}>
              <Ionicons name="checkmark" size={24} color="#FFFFFF" />
            </View>
          </View>
        </View>
      );
    }

    if (isCurrent) {
      return (
        <View style={styles.circleIndicator}>
          <Svg
            width={circleSize}
            height={circleSize}
            style={styles.progressSvg}
          >
            <Circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
            />
            <Circle
              cx={circleSize / 2}
              cy={circleSize / 2}
              r={radius}
              stroke="#72A95F"
              strokeWidth={strokeWidth}
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={progressStrokeDashoffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${circleSize / 2} ${circleSize / 2})`}
            />
          </Svg>
          <View style={styles.circleCurrentInner}>
            <Text style={styles.circleText}>{index + 1}</Text>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.circleIndicator}>
        <View style={styles.circleLockedOuter}>
          <Text style={styles.circleTextLocked}>{index + 1}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.timelineContainer}>
        {index > 0 && (
          <>
            {isCompleted ? (
              <View style={[styles.lineTop, styles.lineActive]} />
            ) : isCurrent ? (
              <View style={[styles.lineTop, styles.lineActive]} />
            ) : (
              <View style={styles.lineTop} />
            )}
          </>
        )}

        {renderTimelineIndicator()}

        {!isLast && (
          <>
            {isCompleted && nextNodeStatus === "completed" ? (
              <View style={[styles.lineBottom, styles.lineActive]} />
            ) : isCompleted && nextNodeStatus === "current" ? (
              <View style={[styles.lineBottom, styles.lineActive]} />
            ) : isCurrent && nextNodeStatus === "locked" ? (
              <LinearGradient
                colors={["#72A95F", "#B8D4AD", "#D5D5D5", "#F0F0F0"]}
                style={styles.lineBottom}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
              />
            ) : isLocked ? (
              <View style={styles.lineBottom} />
            ) : (
              <View style={[styles.lineBottom, styles.lineActive]} />
            )}
          </>
        )}
      </View>

      <Pressable
        style={[styles.card, { backgroundColor: cardColor }]}
        onPress={onPress}
        disabled={isLocked}
      >
        <View style={styles.cardContent}>
          <View style={styles.cardTop}>
            <Text style={styles.title} numberOfLines={2}>
              {node.title}
            </Text>
            <View style={styles.durationPill}>
              <Ionicons name="time-outline" size={12} color="073647" />
              <Text style={styles.durationText}>
                {node.durationMinutes} min
              </Text>
            </View>
          </View>
          <View style={styles.bottomRow}>
            <Text style={styles.description} numberOfLines={2}>
              {node.description}
            </Text>

            <View style={styles.actionButton}>
              <Text style={styles.actionText}>{actionText}</Text>
              <Ionicons name="play-circle" size={26} color="#161A34" />
            </View>
          </View>
        </View>
      </Pressable>
    </View>
  );
}
