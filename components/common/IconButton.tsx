import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { shadows } from "@/theme/shadows";
import React from "react";
import { Pressable, StyleProp, StyleSheet, ViewStyle } from "react-native";

export type IconButtonVariant = "default" | "surface" | "primary" | "ghost";
export type IconButtonSize = "sm" | "md" | "lg";

export interface IconButtonProps {
  icon: React.ReactNode;
  onPress: () => void;
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  accessibilityLabel: string;
}

export function IconButton({
  icon,
  onPress,
  variant = "surface",
  size = "md",
  disabled = false,
  style,
  accessibilityLabel,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        styles[`size_${size}`],
        variant === "surface" && shadows.subtle,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
    >
      {icon}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.full,
  },
  size_sm: {
    width: 36,
    height: 36,
  },
  size_md: {
    width: 44,
    height: 44,
  },
  size_lg: {
    width: 52,
    height: 52,
  },
  surface: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  default: {
    backgroundColor: colors.surfaceSubtle,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  ghost: {
    backgroundColor: "transparent",
  },
  pressed: {
    opacity: 0.75,
    transform: [{ scale: 0.96 }],
  },
  disabled: {
    opacity: 0.4,
  },
});
