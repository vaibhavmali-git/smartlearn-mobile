import { LESSONS } from "@/data/lessons";
import { useEffect, useState } from "react";

export function useLessonProgress(lessonId: string) {
  const [course, setCourse] = useState(
    LESSONS.find((lesson) => lesson.id === lessonId) || null,
  );

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      const lesson = LESSONS.find((item) => item.id === lessonId);

      setCourse(lesson || null);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [lessonId]);

  return {
    course,
    isLoading,
  };
}
