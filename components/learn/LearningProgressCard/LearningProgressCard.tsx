import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./LearningProgressCard.styles";

interface LearningProgressCardProps {
  percentage: number;
}

export function LearningProgressCard({
  percentage,
}: LearningProgressCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require("@/assets/icons/logo-ai-buddy.png")}
          style={styles.buddyIcon}
          contentFit="contain"
        />
        <View>
          <Text style={styles.buddyLabel}>Your A.i buddy</Text>
          <Text style={styles.buddyMessage}>
            You&apos;re learning great today!
          </Text>
        </View>
      </View>

      <View style={styles.progressCircle}>
        <Text style={styles.progressText}>{percentage}%</Text>
      </View>
    </View>
  );
}
