import { MOCK_RECOMMENDATIONS } from "@/data/aiRecommendations";

export function useAI() {
  return {
    recommendations: MOCK_RECOMMENDATIONS,
  };
}
