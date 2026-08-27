import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  listContent: {
    gap: spacing.sm,
    paddingRight: spacing.xl,
  },
  pill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: colors.border.light,
    backgroundColor: colors.surface,
    gap: 6,
  },
  pillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  iconWrapper: {
    width: 20,
    alignItems: "center",
  },
  text: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.semiBold,
    color: colors.primary,
  },
  textActive: {
    color: colors.onPrimary,
  },
  countBadge: {
    backgroundColor: colors.surfaceSubtle,
    borderRadius: radii.full,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  countBadgeActive: {
    backgroundColor: "rgba(255,255,255,0.2)",
  },
  countText: {
    fontSize: 10,
    fontFamily: typography.fonts.bold,
    color: colors.text.secondary,
  },
  countTextActive: {
    color: colors.onPrimary,
  },
});
