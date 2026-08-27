import { MOCK_SKILL_PROGRESS, MOCK_STREAK } from "@/data/analytics";
import { CATEGORIES } from "@/data/lessons";
import { useState } from "react";

export function useAnalytics() {
  const [activeCategory, setActiveCategory] = useState<string>("letters");

  // Filter out 'all' from categories for the skill progress filters
  const skillCategories = CATEGORIES.filter((c) => c.id !== "all");

  const chartData =
    MOCK_SKILL_PROGRESS[activeCategory] || MOCK_SKILL_PROGRESS["letters"];

  return {
    streak: MOCK_STREAK,
    skillCategories,
    activeCategory,
    setActiveCategory,
    chartData,
  };
}
