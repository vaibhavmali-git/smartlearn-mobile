import { BlurView } from "expo-blur";
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

      <View style={styles.headerRow}>
        <Image
          source={require("@/assets/icons/logo-ai-buddy.png")}
          style={styles.buddyIcon}
          contentFit="contain"
        />
        <View style={styles.textView}>
          <Text style={styles.buddyLabel}>Your A.i coach</Text>
          <Text style={styles.buddyMessage}>Hi there!</Text>
        </View>
      </View>

      <View style={styles.messageSection}>
        <BlurView intensity={12} tint="default" style={styles.messageBlur} />
        <View style={styles.messageContent}>
          <Text style={styles.messageText}>
            I&apos;m your AI Buddy. Let&apos;s make today&apos;s learning even
            better! What should we practice?
          </Text>
        </View>
      </View>
    </View>
  );
}
