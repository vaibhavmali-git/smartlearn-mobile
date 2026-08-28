import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import Svg, { Circle } from "react-native-svg";
import { styles } from "./AIBuddyCard.styles";

export function AIBuddyCard() {
  const percentage = 20;
  const progress = percentage / 100;
  const size = 52;
  const strokeWidth = 4;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/illustrations/learning-girl-illustration.svg")}
        style={styles.illustration}
        contentFit="contain"
      />

      <Image
        source={require("@/assets/icons/logo-bulb.png")}
        style={styles.bulb}
        contentFit="contain"
      />

      <View style={styles.headerRow}>
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

      <View style={styles.pickSection}>
        <BlurView intensity={12} tint="default" style={styles.pickBlur} />

        <View style={styles.pickContent}>
          <View>
            <Text style={styles.pickTitle}>Todays pick: Shapes</Text>

            <View style={styles.metaRow}>
              <View style={styles.metaItem}>
                <Ionicons
                  name="book-outline"
                  size={12}
                  color={colors.text.secondary}
                />
                <Text style={styles.metaText}>12 lessons</Text>
              </View>

              <Text style={styles.metaText}>•</Text>

              <View style={styles.metaItem}>
                <Ionicons
                  name="time-outline"
                  size={14}
                  color={colors.text.secondary}
                />
                <Text style={styles.metaText}>10 min</Text>
              </View>
            </View>
          </View>

          <View style={styles.progressSection}>
            <Text style={styles.progressText}>
              <Text style={styles.percentageText}>{percentage}%</Text> complete
            </Text>

            <Pressable style={styles.playButton}>
              <Svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                style={styles.progressRing}
              >
                <Circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke="#DCE6F0"
                  strokeWidth={strokeWidth}
                  fill="none"
                />

                <Circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  stroke={colors.primary}
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={`${circumference} ${circumference}`}
                  strokeDashoffset={circumference * (1 - progress)}
                  strokeLinecap="round"
                  rotation="-90"
                  origin={`${size / 2}, ${size / 2}`}
                />
              </Svg>

              <Ionicons
                name="play"
                size={18}
                color={colors.primary}
                style={styles.playIcon}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
