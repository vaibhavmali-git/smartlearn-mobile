export interface AIRecommendation {
  id: string;
  title: string;
  subtitle: string;
  durationMinutes: number;
  themeColor: string;
  iconName: any;
}

export const MOCK_RECOMMENDATIONS: AIRecommendation[] = [
  {
    id: "rec_1",
    title: "Practice Letters",
    subtitle: 'Review the "D for Dog" lesson',
    durationMinutes: 5,
    themeColor: "#F4EFD7",
    iconName: "text-outline",
  },
  {
    id: "rec_2",
    title: "Review Colors",
    subtitle: "Quick recap of primary colors",
    durationMinutes: 3,
    themeColor: "#FFE9E9",
    iconName: "color-palette-outline",
  },
  {
    id: "rec_3",
    title: "Improve Shapes",
    subtitle: "You struggled with triangles!",
    durationMinutes: 7,
    themeColor: "#D7EAF8",
    iconName: "shapes-outline",
  },
  {
    id: "rec_4",
    title: "Farm Animal Sounds",
    subtitle: "Can you guess the animal by its sound?",
    durationMinutes: 6,
    themeColor: "#E5CDFF",
    iconName: "paw-outline",
  },
  {
    id: "rec_5",
    title: "Trace Lowercase Letters",
    subtitle: "Practice writing 'a', 'b', and 'c'",
    durationMinutes: 10,
    themeColor: "#F4EFD7",
    iconName: "pencil-outline",
  },
  {
    id: "rec_6",
    title: "Find Colors in Your Room",
    subtitle: "Interactive game to spot bright colors",
    durationMinutes: 8,
    themeColor: "#FFE9E9",
    iconName: "search-outline",
  },
];
