export interface Category {
  id: string;
  name: string;
  count: number;
}

export interface Lesson {
  id: string;
  categoryId: string;
  title: string;
  subtitle: string;
  lessonCount: number;
  durationMinutes: number;
  backgroundColor: string;
  iconName: any;
}

export const CATEGORIES: Category[] = [
  { id: "all", name: "All", count: 12 },
  { id: "letters", name: "Letters", count: 3 },
  { id: "colors", name: "Colors", count: 4 },
  { id: "shapes", name: "Shapes", count: 2 },
  { id: "animals", name: "Animals", count: 3 },
];

export const LESSONS: Lesson[] = [
  {
    id: "colors_1",
    categoryId: "colors",
    title: "Learn colors with objects",
    subtitle: "Colors",
    lessonCount: 12,
    durationMinutes: 10,
    backgroundColor: "#E5D9F8",
    iconName: "color-palette-outline",
  },
  {
    id: "letters_1",
    categoryId: "letters",
    title: "Learn ABC with fun sounds",
    subtitle: "Letters",
    lessonCount: 26,
    durationMinutes: 90,
    backgroundColor: "#EDF9B8",
    iconName: "text-outline",
  },
];
