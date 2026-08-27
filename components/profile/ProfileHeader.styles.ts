import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: spacing.xxl,
    backgroundColor: "#F8F9FC",
    borderRadius: 36,
    marginBottom: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  avatarContainer: {
    width: 96,
    height: 96,
    borderRadius: radii.full,
    backgroundColor: colors.pastel.amber,
    marginBottom: spacing.md,
    borderWidth: 4,
    borderColor: colors.surface,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: radii.full,
  },
  name: {
    fontSize: 24,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    marginBottom: 4,
  },
  email: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.medium,
    color: colors.text.secondary,
  },
});
