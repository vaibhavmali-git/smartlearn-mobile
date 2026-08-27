import { OnboardingScreen } from "@/screens/auth/OnboardingScreen/OnboardingScreen";
import { useRouter } from "expo-router";

export default function OnboardingRoute() {
  const router = useRouter();

  return (
    <OnboardingScreen
      onNavigateToSignUp={() => router.push("/(auth)/signup")}
      onNavigateToLogin={() => router.push("/(auth)/login")}
    />
  );
}
