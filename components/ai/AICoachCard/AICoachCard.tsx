import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./AICoachCard.styles";

export function AICoachCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/illustrations/abstract-background-shape.svg")}
        style={styles.backgroundArch}
        contentFit="contain"
      />
      <View style={styles.row}>
        <View style={styles.buddyIconContainer}>
          <Image
            source={require("@/assets/icons/logo-ai-buddy.svg")}
            style={styles.buddyIcon}
            contentFit="contain"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Hi there!</Text>
          <Text style={styles.message}>
            I&apos;m your AI Buddy. Let&apos;s make today&apos;s learning even
            better! What should we practice?
          </Text>
        </View>
      </View>
    </View>
  );
}
