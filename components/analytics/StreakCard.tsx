import { StreakData } from "@/data/analytics";
import { Image } from "expo-image";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./StreakCard.styles";

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export function StreakCard({ data }: { data: StreakData }) {
  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Your streak</Text>
        <View style={styles.countContainer}>
          <Text style={styles.currentCount}>{data.current}</Text>
          <Text style={styles.targetCount}>/{data.target}</Text>
        </View>
      </View>

      <View>
        <View style={styles.progressTrack}>
          <View style={styles.progressFill} />

          <View style={styles.tickMarksContainer}>
            {DAYS.map((day) => {
              const isActive = data.activeDays.includes(day);
              return (
                <View
                  key={`tick-${day}`}
                  style={
                    isActive ? styles.tickMarkActive : styles.tickMarkInactive
                  }
                />
              );
            })}
          </View>

          <View style={styles.fireIconContainer}>
            <Image
              source={require("@/assets/icons/logo-streak-fire.svg")}
              style={styles.fireIcon}
              contentFit="contain"
            />
          </View>
        </View>

        <View style={styles.daysRow}>
          {DAYS.map((day) => {
            const isCurrent = day === data.currentDay;
            const isActive = data.activeDays.includes(day);
            return (
              <Text
                key={day}
                style={[
                  styles.dayText,
                  isActive && styles.dayTextActive,
                  isCurrent && styles.dayTextCurrent,
                ]}
              >
                {day}
              </Text>
            );
          })}
        </View>
      </View>

      <View style={styles.footerRow}>
        <Image
          source={require("@/assets/icons/logo-ai-buddy.svg")}
          style={styles.buddyIcon}
          contentFit="contain"
        />
        <Text style={styles.closeText}>×</Text>
      </View>
    </View>
  );
}
