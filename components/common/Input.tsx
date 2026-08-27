import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import React, { useState } from "react";
import {
    StyleProp,
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    TextStyle,
    View,
    ViewStyle,
} from "react-native";

export interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export function Input({
  label,
  error,
  leftIcon,
  rightIcon,
  containerStyle,
  inputStyle,
  onFocus,
  onBlur,
  ...rest
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focused,
          Boolean(error) && styles.errorInput,
        ]}
      >
        {leftIcon ? <View style={styles.iconContainer}>{leftIcon}</View> : null}

        <TextInput
          placeholderTextColor="#708892"
          style={[styles.input, inputStyle]}
          onFocus={(e) => {
            setIsFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            onBlur?.(e);
          }}
          {...rest}
        />

        {rightIcon ? (
          <View style={styles.iconContainer}>{rightIcon}</View>
        ) : null}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: spacing.md,
  },

  label: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.medium,
    color: colors.text.primary,
    marginBottom: spacing.xs,
    fontFamily: typography.fonts.medium,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#C9D1D5",
    borderRadius: radii.xl,
    paddingHorizontal: spacing.md,
    height: 56,
  },

  focused: {
    borderColor: colors.primary,
    borderWidth: 1.5,
  },

  errorInput: {
    borderColor: colors.error,
    borderWidth: 1.5,
  },

  input: {
    flex: 1,
    height: "100%",
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.regular,
    color: "#010000",
    paddingVertical: 0,
  },

  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: spacing.xs,
  },

  errorText: {
    fontSize: typography.fontSize.xs,
    color: colors.error,
    marginTop: spacing.xxs,
    marginLeft: spacing.xs,
  },
});
