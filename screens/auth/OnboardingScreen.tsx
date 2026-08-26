import { Button } from "@/components/common/Button";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { colors } from "@/theme/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./OnboardingScreen.styles";

interface OnboardingScreenProps {
  onNavigateToSignUp: () => void;
  onNavigateToLogin: () => void;
}

export function OnboardingScreen({
  onNavigateToSignUp,
  onNavigateToLogin,
}: OnboardingScreenProps) {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.logoBadge}>
            <Ionicons name="book-outline" size={30} color={colors.primary} />
          </View>
          <Text style={styles.brandName}>SmartLearn</Text>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.promoCard}>
            <Text style={styles.cardTitle}>Personalized</Text>
            <View style={styles.badgeTextContainer}>
              <Text style={styles.badgeText}>Learning</Text>
            </View>
            <Text style={styles.cardSubtitle}>
              Lessons adapt to your child&apos;s pace, focusing on what they
              need most.
            </Text>
          </View>
        </View>

        <View style={styles.actions}>
          <Button
            title="Sign up"
            variant="primary"
            onPress={onNavigateToSignUp}
          />
          <Button
            title="Log in"
            variant="outline"
            style={styles.loginButton}
            onPress={onNavigateToLogin}
          />
        </View>
      </View>
    </ScreenContainer>
  );
}
