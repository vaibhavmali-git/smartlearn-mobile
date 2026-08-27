import { LoginScreen } from "@/screens/auth/LoginScreen/LoginScreen";
import { useRouter } from "expo-router";

export default function LoginRoute() {
  const router = useRouter();

  return (
    <LoginScreen
      onNavigateToSignUp={() => router.push("/(auth)/signup")}
      onNavigateBack={() => router.replace("/(auth)")}
    />
  );
}
