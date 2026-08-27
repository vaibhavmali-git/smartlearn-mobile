import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 34,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.medium,
    color: colors.text.secondary,
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
    marginBottom: spacing.md,
    marginTop: spacing.md,
  },
  scrollContent: {
    paddingBottom: spacing.xxl,
  },
});
