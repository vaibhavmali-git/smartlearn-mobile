import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./AIBuddyCard.styles";

export function AIBuddyCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/illustrations/learning-girl-illustration.svg")}
        style={styles.illustration}
        contentFit="contain"
      />

      <View style={styles.headerRow}>
        <Image
          source={require("@/assets/icons/logo-ai-buddy.svg")}
          style={styles.buddyIcon}
          contentFit="contain"
        />
        <View>
          <Text style={styles.buddyLabel}>Your A.i buddy</Text>
          <Text style={styles.buddyMessage}>Youre learning great today!</Text>
        </View>
      </View>

      <View style={styles.pickSection}>
        <View>
          <Text style={styles.pickTitle}>Todays pick: Shapes</Text>
          <View style={styles.metaRow}>
            <View style={styles.metaItem}>
              <Ionicons
                name="book-outline"
                size={14}
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
          <Text style={styles.progressText}>20% complete</Text>
          <Pressable style={styles.playButton}>
            <Ionicons
              name="play"
              size={20}
              color={colors.primary}
              style={{ marginLeft: 3 }}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
