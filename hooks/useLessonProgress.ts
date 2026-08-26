import { COURSE_DETAILS } from "@/data/courseDetails";
import { CourseDetails } from "@/types/lesson";
import { useEffect, useState } from "react";

export function useLessonProgress(lessonId: string) {
  const [course, setCourse] = useState<CourseDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setCourse(COURSE_DETAILS[lessonId] || null);
      setIsLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [lessonId]);

  return {
    course,
    isLoading,
  };
}
