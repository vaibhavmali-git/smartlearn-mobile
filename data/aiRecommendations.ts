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
    themeColor: "#D8F374",
    iconName: "text-outline",
  },
  {
    id: "rec_2",
    title: "Review Colors",
    subtitle: "Quick recap of primary colors",
    durationMinutes: 3,
    themeColor: "#D6EAF8",
    iconName: "color-palette-outline",
  },
  {
    id: "rec_3",
    title: "Improve Shapes",
    subtitle: "You struggled with triangles!",
    durationMinutes: 10,
    themeColor: "#FCD5CE",
    iconName: "shapes-outline",
  },
];
