export interface StreakData {
  current: number;
  target: number;
  activeDays: string[];
  currentDay: string;
}

export interface SkillData {
  day: string;
  value: number;
  isHighest: boolean;
}

export const MOCK_STREAK: StreakData = {
  current: 3822,
  target: 5000,
  activeDays: ["Mon", "Tue", "Wed", "Thu"],
  currentDay: "Thu",
};

export const MOCK_SKILL_PROGRESS: Record<string, SkillData[]> = {
  letters: [
    { day: "Mon", value: 80, isHighest: false },
    { day: "Tue", value: 60, isHighest: false },
    { day: "Wed", value: 55, isHighest: false },
    { day: "Thu", value: 90, isHighest: true },
    { day: "Fri", value: 45, isHighest: false },
    { day: "Sat", value: 30, isHighest: false },
    { day: "Sun", value: 65, isHighest: false },
  ],

  colors: [
    { day: "Mon", value: 30, isHighest: false },
    { day: "Tue", value: 50, isHighest: false },
    { day: "Wed", value: 80, isHighest: true },
    { day: "Thu", value: 60, isHighest: false },
    { day: "Fri", value: 40, isHighest: false },
    { day: "Sat", value: 20, isHighest: false },
    { day: "Sun", value: 50, isHighest: false },
  ],

  animals: [
    { day: "Mon", value: 35, isHighest: false },
    { day: "Tue", value: 55, isHighest: false },
    { day: "Wed", value: 70, isHighest: true },
    { day: "Thu", value: 50, isHighest: false },
    { day: "Fri", value: 45, isHighest: false },
    { day: "Sat", value: 25, isHighest: false },
    { day: "Sun", value: 60, isHighest: false },
  ],
};
