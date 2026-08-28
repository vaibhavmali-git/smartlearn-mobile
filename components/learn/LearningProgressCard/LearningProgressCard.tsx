import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./LearningProgressCard.styles";

interface LearningProgressCardProps {
  percentage: number;
}

const CIRCLE_SIZE = 38;
const STROKE_WIDTH = 3;
const RADIUS = (CIRCLE_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export function LearningProgressCard({
  percentage,
}: LearningProgressCardProps) {
  const progress = Math.min(Math.max(percentage, 0), 100);

  const strokeDashoffset = CIRCUMFERENCE - (progress / 100) * CIRCUMFERENCE;

  return (
    <BlurView intensity={60} tint="light" style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require("@/assets/icons/logo-ai-buddy.png")}
          style={styles.buddyIcon}
          contentFit="contain"
        />

        <View style={styles.textView}>
          <Text style={styles.buddyLabel}>Your A.i buddy</Text>

          <Text style={styles.buddyMessage}>
            You&apos;re learning great today!
          </Text>
        </View>
      </View>

      <View style={styles.circleWrapper}>
        <View style={styles.progressCircle}>
          <Svg
            width={CIRCLE_SIZE}
            height={CIRCLE_SIZE}
            style={styles.progressSvg}
          >
            <Circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              stroke="#D9D9D9"
              strokeWidth={STROKE_WIDTH}
              fill="none"
            />

            <Circle
              cx={CIRCLE_SIZE / 2}
              cy={CIRCLE_SIZE / 2}
              r={RADIUS}
              stroke="#72A95F"
              strokeWidth={STROKE_WIDTH}
              fill="none"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              rotation="-90"
              origin={`${CIRCLE_SIZE / 2}, ${CIRCLE_SIZE / 2}`}
            />
          </Svg>

          <Text style={styles.progressText}>{progress}%</Text>
        </View>
      </View>
    </BlurView>
  );
}
