import { SignUpScreen } from "@/screens/auth/SignUpScreen/SignUpScreen";
import { useRouter } from "expo-router";

export default function SignUpRoute() {
  const router = useRouter();

  return (
    <SignUpScreen onNavigateToLogin={() => router.push("/(auth)/login")} />
  );
}
