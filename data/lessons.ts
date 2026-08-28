export interface Category {
  id: string;
  name: string;
}

export interface CategoryWithCount extends Category {
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
  { id: "all", name: "All" },
  { id: "letters", name: "Letters" },
  { id: "colors", name: "Colors" },
  { id: "shapes", name: "Shapes" },
  { id: "animals", name: "Animals" },
];

export const LESSONS: Lesson[] = [
  // Colors — 4 lessons
  {
    id: "colors_1",
    categoryId: "colors",
    title: "Learn colors with objects",
    subtitle: "Colors",
    lessonCount: 12,
    durationMinutes: 10,
    backgroundColor: "#E5CDFF",
    iconName: "color-palette-outline",
  },
  {
    id: "colors_2",
    categoryId: "colors",
    title: "Explore bright colors",
    subtitle: "Colors",
    lessonCount: 8,
    durationMinutes: 8,
    backgroundColor: "#E5D9F8",
    iconName: "color-palette-outline",
  },
  {
    id: "colors_3",
    categoryId: "colors",
    title: "Match colors around you",
    subtitle: "Colors",
    lessonCount: 10,
    durationMinutes: 12,
    backgroundColor: "#E5D9F8",
    iconName: "color-palette-outline",
  },
  {
    id: "colors_4",
    categoryId: "colors",
    title: "Fun with primary colors",
    subtitle: "Colors",
    lessonCount: 9,
    durationMinutes: 10,
    backgroundColor: "#E5D9F8",
    iconName: "color-palette-outline",
  },

  // Letters — 3 lessons
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
  {
    id: "letters_2",
    categoryId: "letters",
    title: "Practice uppercase letters",
    subtitle: "Letters",
    lessonCount: 20,
    durationMinutes: 15,
    backgroundColor: "#EDF9B8",
    iconName: "text-outline",
  },
  {
    id: "letters_3",
    categoryId: "letters",
    title: "Discover lowercase letters",
    subtitle: "Letters",
    lessonCount: 20,
    durationMinutes: 15,
    backgroundColor: "#EDF9B8",
    iconName: "text-outline",
  },

  // Shapes — 2 lessons
  {
    id: "shapes_1",
    categoryId: "shapes",
    title: "Discover fun shapes",
    subtitle: "Shapes",
    lessonCount: 10,
    durationMinutes: 10,
    backgroundColor: "#DDEBFF",
    iconName: "shapes-outline",
  },
  {
    id: "shapes_2",
    categoryId: "shapes",
    title: "Match shapes around you",
    subtitle: "Shapes",
    lessonCount: 8,
    durationMinutes: 12,
    backgroundColor: "#DDEBFF",
    iconName: "shapes-outline",
  },

  // Animals — 3 lessons
  {
    id: "animals_1",
    categoryId: "animals",
    title: "Meet the animals",
    subtitle: "Animals",
    lessonCount: 12,
    durationMinutes: 10,
    backgroundColor: "#FFE2D5",
    iconName: "paw-outline",
  },
  {
    id: "animals_2",
    categoryId: "animals",
    title: "Learn animal sounds",
    subtitle: "Animals",
    lessonCount: 10,
    durationMinutes: 12,
    backgroundColor: "#FFE2D5",
    iconName: "paw-outline",
  },
  {
    id: "animals_3",
    categoryId: "animals",
    title: "Where animals live",
    subtitle: "Animals",
    lessonCount: 8,
    durationMinutes: 10,
    backgroundColor: "#FFE2D5",
    iconName: "paw-outline",
  },
];
