import { CATEGORIES, LESSONS } from "@/data/lessons";
import { useMemo, useState } from "react";

export function useHomeData() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredLessons = useMemo(() => {
    if (activeCategory === "all") return LESSONS;
    return LESSONS.filter((lesson) => lesson.categoryId === activeCategory);
  }, [activeCategory]);

  return {
    categories: CATEGORIES,
    activeCategory,
    setActiveCategory,
    lessons: filteredLessons,
    todaysPick: LESSONS[0],
  };
}
