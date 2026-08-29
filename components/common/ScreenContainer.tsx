import { colors } from "@/theme/colors";
import { spacing } from "@/theme/spacing";
import React from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StatusBar,
    StyleProp,
    StyleSheet,
    TouchableWithoutFeedback,
    View,
    ViewStyle,
} from "react-native";
import {
    SafeAreaView,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

export interface ScreenContainerProps {
  children: React.ReactNode;
  scrollable?: boolean;
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  statusBarStyle?: "light-content" | "dark-content";
  keyboardVerticalOffset?: number;
  hasTabBar?: boolean;
}

export function ScreenContainer({
  children,
  scrollable = true,
  backgroundColor = colors.surface,
  style,
  contentContainerStyle,
  statusBarStyle = "dark-content",
  keyboardVerticalOffset = Platform.OS === "ios" ? 0 : 0,
  hasTabBar = false,
}: ScreenContainerProps) {
  const insets = useSafeAreaInsets();

  const baseBottomPadding = insets.bottom > 0 ? insets.bottom : spacing.md;
  const bottomPadding = hasTabBar ? baseBottomPadding + 90 : baseBottomPadding;

  return (
    <SafeAreaView
      style={[styles.safeArea, { backgroundColor }, style]}
      edges={["top"]}
    >
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={backgroundColor}
        translucent={Platform.OS === "android"}
      />
      <KeyboardAvoidingView
        style={styles.keyboardAvoid}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={keyboardVerticalOffset}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          {scrollable ? (
            <ScrollView
              style={styles.scroll}
              contentContainerStyle={[
                styles.scrollContent,
                { paddingBottom: bottomPadding },
                contentContainerStyle,
              ]}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
              bounces={Platform.OS === "ios"}
            >
              {children}
            </ScrollView>
          ) : (
            <View
              style={[
                styles.staticContent,
                { paddingBottom: bottomPadding },
                contentContainerStyle,
              ]}
            >
              {children}
            </View>
          )}
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  keyboardAvoid: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: spacing.md,
  },
  staticContent: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
});
