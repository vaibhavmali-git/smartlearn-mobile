import { CATEGORIES, LESSONS } from "@/data/lessons";
import { useMemo, useState } from "react";

export function useHomeData() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = useMemo(() => {
    return CATEGORIES.map((category) => {
      const count =
        category.id === "all"
          ? LESSONS.length
          : LESSONS.filter((lesson) => lesson.categoryId === category.id)
              .length;

      return {
        ...category,
        count,
      };
    });
  }, []);

  const filteredLessons = useMemo(() => {
    if (activeCategory === "all") {
      return LESSONS;
    }

    return LESSONS.filter((lesson) => lesson.categoryId === activeCategory);
  }, [activeCategory]);

  return {
    categories,
    activeCategory,
    setActiveCategory,
    lessons: filteredLessons,
    todaysPick: LESSONS[0],
  };
}
