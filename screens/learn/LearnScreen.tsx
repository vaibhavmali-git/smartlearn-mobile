import { Button } from "@/components/common/Button";
import { LearnHeader } from "@/components/learn/LearnHeader";
import { LearningProgressCard } from "@/components/learn/LearningProgressCard";
import { LessonItem } from "@/components/learn/LessonItem";
import { useLessonProgress } from "@/hooks/useLessonProgress";
import { colors } from "@/theme";
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
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center" },
        ]}
      >
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (!course) {
    return (
      <View
        style={[
          styles.container,
          { justifyContent: "center", alignItems: "center", padding: 20 },
        ]}
      >
        <Text
          style={{
            fontFamily: "Inter_700Bold",
            fontSize: 20,
            color: colors.primary,
            marginBottom: 20,
          }}
        >
          Course not found
        </Text>
        <Button title="Go Back" onPress={() => router.back()} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <LearnHeader
          title={course.title}
          subtitle={course.subtitle}
          lessonCount={course.lessonCount}
          durationString={course.durationString}
          themeColor={course.themeColor}
        />

        <LearningProgressCard percentage={course.progressPercentage} />

        <View style={styles.listContainer}>
          {course.nodes.map((node, index) => (
            <LessonItem
              key={node.id}
              node={node}
              index={index}
              isLast={index === course.nodes.length - 1}
              onPress={() => console.log(`Start lesson: ${node.id}`)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
