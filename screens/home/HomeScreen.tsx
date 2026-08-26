import { Button } from "@/components/common/Button";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./HomeScreen.styles";

export function HomeScreen() {
  const { user, logout } = useAuth();

  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.badge}>
            <Ionicons
              name="checkmark-done-circle"
              size={36}
              color={colors.pastel.limeDark}
            />
          </View>
          <Text style={styles.greeting}>
            Hello, {user?.name || "Explorer"}!
          </Text>
          <Text style={styles.sessionInfo}>Active Session: {user?.email}</Text>

          <Button
            title="Log out"
            variant="outline"
            onPress={logout}
            style={styles.logoutButton}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
