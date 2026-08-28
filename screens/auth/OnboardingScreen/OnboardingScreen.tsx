import { Button } from "@/components/common/Button";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { Image } from "expo-image";
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
    <ScreenContainer scrollable={false} backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={require("@/assets/illustrations/abstract-background-shape.svg")}
            style={styles.backgroundArch}
            contentFit="contain"
          />

          <View style={styles.logoBadge}>
            <Image
              source={require("@/assets/icons/logo_book.svg")}
              style={styles.logoIcon}
              contentFit="contain"
            />
          </View>

          <Text style={styles.brandName}>SmartLearn</Text>
        </View>

        <View style={styles.cardSection}>
          <View style={styles.pinkCard}>
            <Text style={styles.pinkCardText}>Instant Feedback</Text>
          </View>

          <Image
            source={require("@/assets/icons/logo-bulb.png")}
            style={styles.bulbIcon}
            contentFit="contain"
          />

          <View style={styles.limeCard}>
            <Text style={styles.limeCardText}>Fun Games & Activities</Text>
          </View>

          <View style={styles.blueCard}>
            <Image
              source={require("@/assets/icons/logo-star.svg")}
              style={styles.starIcon}
              contentFit="contain"
            />

            <Text style={styles.cardTitle}>Personalized</Text>

            <View style={styles.badgeTextContainer}>
              <Text style={styles.badgeText}>Learning</Text>
            </View>

            <Text style={styles.cardSubtitle}>
              Lessons adapt to your childs pace, focusing on what they need
              most.
            </Text>

            <View style={styles.dotsContainer}>
              <View style={styles.dotActive} />
              <View style={styles.dotInactive} />
              <View style={styles.dotInactive} />
            </View>

            <Image
              source={require("@/assets/illustrations/personalized-learning-illustration.svg")}
              style={styles.illustration}
              contentFit="contain"
            />
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
