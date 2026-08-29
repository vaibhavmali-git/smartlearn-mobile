import { Button } from "@/components/common/Button";
import { LearnHeader } from "@/components/learn/LearnHeader/LearnHeader";
import { LessonItem } from "@/components/learn/LessonItem/LessonItem";
import { useLessonProgress } from "@/hooks/useLessonProgress";
import { colors } from "@/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React from "react";
import {
    ActivityIndicator,
    ScrollView,
    StatusBar,
    Text,
    View,
} from "react-native";
import { styles } from "./LearnScreen.styles";

interface LearnScreenProps {
  lessonId: string;
}

export function LearnScreen({ lessonId }: LearnScreenProps) {
  const router = useRouter();
  const { course, isLoading } = useLessonProgress(lessonId);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.loadingContainer]}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!course) {
    return (
      <View style={[styles.container, styles.emptyStateContainer]}>
        <Text style={styles.emptyStateText}>Course not found</Text>

        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  const lessonCount = course.nodes.length;

  const durationMinutes = course.nodes.reduce(
    (total, node) => total + node.durationMinutes,
    0,
  );

  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  const durationString =
    hours > 0 ? `${hours} hr ${minutes} min` : `${minutes} min`;

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <LearnHeader
          title={course.title}
          subtitle={course.subtitle}
          lessonCount={lessonCount}
          durationString={durationString}
          themeColor={course.backgroundColor}
          illustration={course.illustration}
          progressPercentage={course.progressPercentage}
        />

        <View style={styles.listContainer}>
          {course.nodes.map((node, index) => {
            const nextNode = course.nodes[index + 1];
            return (
              <LessonItem
                key={node.id}
                node={{ ...node, backgroundColor: course.backgroundColor }}
                index={index}
                isLast={index === course.nodes.length - 1}
                nextNodeStatus={nextNode ? nextNode.status : undefined}
                onPress={() => console.log(`Start lesson: ${node.id}`)}
              />
            );
          })}
        </View>
      </ScrollView>

      <LinearGradient
        colors={[
          "rgba(255, 255, 255, 0)",
          "rgba(255, 255, 255, 0.3)",
          "#FFFFFF",
        ]}
        style={styles.bottomGradient}
        pointerEvents="none"
      />
    </View>
  );
}
