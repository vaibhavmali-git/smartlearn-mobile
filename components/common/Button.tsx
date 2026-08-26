import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import React from "react";

import {
    ActivityIndicator,
    Pressable,
    StyleProp,
    StyleSheet,
    Text,
    View,
    ViewStyle,
} from "react-native";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  testID?: string;
}

export function Button({
  title,
  onPress,
  variant = "primary",
  size = "lg",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  style,
  testID,
}: ButtonProps) {
  const isInteractive = !disabled && !loading;

  return (
    <Pressable
      testID={testID}
      onPress={onPress}
      disabled={!isInteractive}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        disabled && styles.disabled,
        pressed && isInteractive && styles[`${variant}Pressed`],
        style,
      ]}
      accessibilityRole="button"
      accessibilityState={{ disabled: !isInteractive, busy: loading }}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? colors.onPrimary : colors.primary}
        />
      ) : (
        <View style={styles.content}>
          {leftIcon ? <View style={styles.leftIcon}>{leftIcon}</View> : null}
          <Text
            style={[
              styles.text,
              styles[`${variant}Text`],
              styles[`${size}Text`],
              disabled && styles.disabledText,
            ]}
          >
            {title}
          </Text>
          {rightIcon ? <View style={styles.rightIcon}>{rightIcon}</View> : null}
        </View>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  leftIcon: {
    marginRight: spacing.xs,
  },
  rightIcon: {
    marginLeft: spacing.xs,
  },
  text: {
    fontFamily: typography.fonts.semiBold,
    fontWeight: typography.fontWeight.semiBold,
  },

  // Sizes
  size_sm: {
    height: 38,
    paddingHorizontal: spacing.md,
  },
  size_md: {
    height: 48,
    paddingHorizontal: spacing.xl,
  },
  size_lg: {
    height: 56,
    paddingHorizontal: spacing.xxl,
  },
  smText: {
    fontSize: typography.fontSize.sm,
  },
  mdText: {
    fontSize: typography.fontSize.md,
  },
  lgText: {
    fontSize: typography.fontSize.lg,
  },

  // Variants
  primary: {
    backgroundColor: colors.primary,
  },
  primaryPressed: {
    backgroundColor: colors.primaryLight,
    opacity: 0.9,
  },
  primaryText: {
    color: colors.onPrimary,
  },

  secondary: {
    backgroundColor: colors.surfaceSubtle,
  },
  secondaryPressed: {
    backgroundColor: colors.border.light,
  },
  secondaryText: {
    color: colors.text.primary,
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  outlinePressed: {
    backgroundColor: "rgba(22, 27, 51, 0.05)",
  },
  outlineText: {
    color: colors.primary,
  },

  ghost: {
    backgroundColor: "transparent",
  },
  ghostPressed: {
    backgroundColor: "rgba(22, 27, 51, 0.05)",
  },
  ghostText: {
    color: colors.primary,
  },

  // Disabled State
  disabled: {
    backgroundColor: colors.surfaceSubtle,
    borderColor: "transparent",
    opacity: 0.6,
  },
  disabledText: {
    color: colors.text.disabled,
  },
});
