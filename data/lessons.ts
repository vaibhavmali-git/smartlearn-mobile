export interface LessonNode {
  id: string;
  title: string;
  description: string;
  durationMinutes: number;
  status: "completed" | "current" | "locked";
}

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
  backgroundColor: string;
  iconName: any;
  illustration: any;
  progressPercentage: number;
  nodes: LessonNode[];
}

export const CATEGORIES: Category[] = [
  { id: "all", name: "All" },
  { id: "letters", name: "Letters" },
  { id: "colors", name: "Colors" },
  { id: "shapes", name: "Shapes" },
  { id: "animals", name: "Animals" },
];

export const LESSONS: Lesson[] = [
  {
    id: "colors_1",
    categoryId: "colors",
    title: "Learn colors with objects",
    subtitle: "Colors",
    backgroundColor: "#E5CDFF",
    iconName: "color-palette-outline",
    illustration: require("@/assets/illustrations/colors-learning-illustration.svg"),
    progressPercentage: 20,
    nodes: [
      {
        id: "colors_1_1",
        title: "Meet the basic colors",
        description: "Discover red, blue, yellow and other basic colors",
        durationMinutes: 5,
        status: "completed",
      },
      {
        id: "colors_1_2",
        title: "Colors around us",
        description: "Find familiar objects and identify their colors",
        durationMinutes: 8,
        status: "current",
      },
      {
        id: "colors_1_3",
        title: "Match the colors",
        description: "Match objects with their correct colors",
        durationMinutes: 7,
        status: "locked",
      },
      {
        id: "colors_1_4",
        title: "Color mixing",
        description: "Discover what happens when colors are mixed",
        durationMinutes: 10,
        status: "locked",
      },
    ],
  },

  {
    id: "letters_1",
    categoryId: "letters",
    title: "Learn ABC with fun sounds",
    subtitle: "Letters",
    backgroundColor: "#DCEA8F",
    iconName: "text-outline",
    illustration: require("@/assets/illustrations/personalized-learning-illustration.svg"),
    progressPercentage: 12,
    nodes: [
      {
        id: "letters_1_a",
        title: "A for Apple",
        description: "Learn the sound of A and objects that start with A",
        durationMinutes: 2,
        status: "completed",
      },
      {
        id: "letters_1_b",
        title: "B for Ball",
        description: "Recognize the letter B and its phonetic sound",
        durationMinutes: 3,
        status: "current",
      },
      {
        id: "letters_1_c",
        title: "C for Cat",
        description: 'Learn the "C" sound with fun animations',
        durationMinutes: 10,
        status: "locked",
      },
      {
        id: "letters_1_d",
        title: "D for Dog",
        description: "Hear and repeat the D sound",
        durationMinutes: 5,
        status: "locked",
      },
      {
        id: "letters_1_e",
        title: "E for Elephant",
        description: "Learn the E sound with fun examples",
        durationMinutes: 10,
        status: "locked",
      },
    ],
  },

  {
    id: "shapes_1",
    categoryId: "shapes",
    title: "Discover fun shapes",
    subtitle: "Shapes",
    backgroundColor: "#99C2FF",
    iconName: "shapes-outline",
    illustration: require("@/assets/illustrations/letters-learning-illustration.svg"),
    progressPercentage: 20,
    nodes: [
      {
        id: "shapes_1_1",
        title: "Meet the circle",
        description: "Learn to recognize circles around you",
        durationMinutes: 5,
        status: "completed",
      },
      {
        id: "shapes_1_2",
        title: "Meet the square",
        description: "Discover squares and where to find them",
        durationMinutes: 5,
        status: "current",
      },
      {
        id: "shapes_1_3",
        title: "Meet the triangle",
        description: "Learn about triangles through fun examples",
        durationMinutes: 7,
        status: "locked",
      },
    ],
  },

  {
    id: "animals_1",
    categoryId: "animals",
    title: "Meet the animals",
    subtitle: "Animals",
    backgroundColor: "#FFD2BE",
    iconName: "paw-outline",
    illustration: require("@/assets/illustrations/learning-girl-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "animals_1_1",
        title: "Farm animals",
        description: "Meet some common animals found on a farm",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "animals_1_2",
        title: "Wild animals",
        description: "Discover animals that live in the wild",
        durationMinutes: 8,
        status: "locked",
      },
      {
        id: "animals_1_3",
        title: "Animal homes",
        description: "Learn where different animals live",
        durationMinutes: 7,
        status: "locked",
      },
    ],
  },

  {
    id: "colors_2",
    categoryId: "colors",
    title: "Explore bright colors",
    subtitle: "Colors",
    backgroundColor: "#E5CDFF",
    iconName: "color-palette-outline",
    illustration: require("@/assets/illustrations/personalized-learning-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "colors_2_1",
        title: "Bright and dark colors",
        description: "Learn to recognize bright and dark colors",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "colors_2_2",
        title: "Find bright colors",
        description: "Find bright colors in everyday objects",
        durationMinutes: 7,
        status: "locked",
      },
    ],
  },

  {
    id: "letters_2",
    categoryId: "letters",
    title: "Practice uppercase letters",
    subtitle: "Letters",
    backgroundColor: "#DCEA8F",
    iconName: "text-outline",
    illustration: require("@/assets/illustrations/letters-learning-illustration.svg"),
    progressPercentage: 15,
    nodes: [
      {
        id: "letters_2_1",
        title: "Meet the uppercase letters",
        description: "Learn how uppercase letters look and sound",
        durationMinutes: 5,
        status: "completed",
      },
      {
        id: "letters_2_2",
        title: "Match uppercase letters",
        description: "Match letters with their correct sounds",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "letters_2_3",
        title: "Practice writing letters",
        description: "Practice writing common uppercase letters",
        durationMinutes: 8,
        status: "locked",
      },
      {
        id: "letters_2_4",
        title: "Find the hidden letters",
        description: "Spot the uppercase letters hiding in fun pictures",
        durationMinutes: 6,
        status: "locked",
      },
      {
        id: "letters_2_5",
        title: "Connect the uppercase dots",
        description: "Draw lines from A to Z to reveal a surprise shape",
        durationMinutes: 7,
        status: "locked",
      },
      {
        id: "letters_2_6",
        title: "Uppercase master challenge",
        description: "Test your new skills with a fun letter quiz",
        durationMinutes: 10,
        status: "locked",
      },
    ],
  },

  {
    id: "shapes_2",
    categoryId: "shapes",
    title: "Match shapes around you",
    subtitle: "Shapes",
    backgroundColor: "#99C2FF",
    iconName: "shapes-outline",
    illustration: require("@/assets/illustrations/colors-learning-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "shapes_2_1",
        title: "Find the shapes",
        description: "Find different shapes in everyday objects",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "shapes_2_2",
        title: "Shape matching",
        description: "Match objects with their correct shapes",
        durationMinutes: 8,
        status: "locked",
      },
    ],
  },

  {
    id: "animals_2",
    categoryId: "animals",
    title: "Learn animal sounds",
    subtitle: "Animals",
    backgroundColor: "#FFD2BE",
    iconName: "paw-outline",
    illustration: require("@/assets/illustrations/personalized-learning-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "animals_2_1",
        title: "Farm animal sounds",
        description: "Learn the sounds of familiar farm animals",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "animals_2_2",
        title: "Wild animal sounds",
        description: "Listen and identify wild animal sounds",
        durationMinutes: 8,
        status: "locked",
      },
    ],
  },

  {
    id: "colors_3",
    categoryId: "colors",
    title: "Match colors around you",
    subtitle: "Colors",
    backgroundColor: "#E5CDFF",
    iconName: "color-palette-outline",
    illustration: require("@/assets/illustrations/learning-girl-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "colors_3_1",
        title: "Color matching",
        description: "Match objects that have the same color",
        durationMinutes: 8,
        status: "current",
      },
      {
        id: "colors_3_2",
        title: "Color challenge",
        description: "Test what you know about colors",
        durationMinutes: 10,
        status: "locked",
      },
    ],
  },

  {
    id: "letters_3",
    categoryId: "letters",
    title: "Discover lowercase letters",
    subtitle: "Letters",
    backgroundColor: "#DCEA8F",
    iconName: "text-outline",
    illustration: require("@/assets/illustrations/learning-girl-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "letters_3_1",
        title: "Meet lowercase letters",
        description: "Discover the lowercase alphabet",
        durationMinutes: 5,
        status: "current",
      },
      {
        id: "letters_3_2",
        title: "Match lowercase letters",
        description: "Match lowercase letters with sounds",
        durationMinutes: 6,
        status: "locked",
      },
    ],
  },

  {
    id: "animals_3",
    categoryId: "animals",
    title: "Where animals live",
    subtitle: "Animals",
    backgroundColor: "#FFD2BE",
    iconName: "paw-outline",
    illustration: require("@/assets/illustrations/letters-learning-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "animals_3_1",
        title: "Animals on the farm",
        description: "Discover where farm animals live",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "animals_3_2",
        title: "Animals in the jungle",
        description: "Explore the homes of jungle animals",
        durationMinutes: 8,
        status: "locked",
      },
    ],
  },

  {
    id: "colors_4",
    categoryId: "colors",
    title: "Fun with primary colors",
    subtitle: "Colors",
    backgroundColor: "#E5CDFF",
    iconName: "color-palette-outline",
    illustration: require("@/assets/illustrations/colors-learning-illustration.svg"),
    progressPercentage: 0,
    nodes: [
      {
        id: "colors_4_1",
        title: "Red, blue and yellow",
        description: "Learn the three primary colors",
        durationMinutes: 6,
        status: "current",
      },
      {
        id: "colors_4_2",
        title: "Primary color games",
        description: "Practice identifying primary colors",
        durationMinutes: 8,
        status: "locked",
      },
    ],
  },
];
