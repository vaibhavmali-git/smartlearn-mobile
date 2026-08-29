import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme/colors";
import { useFonts } from "expo-font";
import { Slot, useRouter, useSegments } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { styles } from "./_layout.styles";

SplashScreen.preventAutoHideAsync();

function NavigationGuard() {
  const { isAuthenticated, isLoading } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (isLoading) return;

    const inAuthGroup = segments[0] === "(auth)";

    if (!isAuthenticated && !inAuthGroup) {
      router.replace("/(auth)");
    } else if (isAuthenticated && inAuthGroup) {
      router.replace("/(tabs)");
    }
  }, [isAuthenticated, isLoading, segments, router]);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return <Slot />;
}

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    InterDisplay_400Regular: require("../assets/fonts/InterDisplay-Regular.ttf"),
    InterDisplay_500Medium: require("../assets/fonts/InterDisplay-Medium.ttf"),
    InterDisplay_600SemiBold: require("../assets/fonts/InterDisplay-SemiBold.ttf"),
    InterDisplay_700Bold: require("../assets/fonts/InterDisplay-Bold.ttf"),
    InterDisplay_900Black: require("../assets/fonts/InterDisplay-Black.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationGuard />
    </AuthProvider>
  );
}
