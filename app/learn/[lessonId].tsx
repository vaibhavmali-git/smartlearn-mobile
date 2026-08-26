import { LearnScreen } from "@/screens/learn/LearnScreen";
import { useLocalSearchParams } from "expo-router";

export default function LearnRoute() {
  const { lessonId } = useLocalSearchParams<{ lessonId: string }>();

  if (!lessonId) return null;

  return <LearnScreen lessonId={lessonId} />;
}
