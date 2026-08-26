import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "space-between",
    paddingVertical: spacing.xl,
  },
  header: {
    alignItems: "center",
    marginTop: spacing.lg,
  },
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: radii.full,
    backgroundColor: colors.pastel.blueLight,
    borderWidth: 1.5,
    borderColor: colors.pastel.blue,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.sm,
  },
  brandName: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
  },
  cardSection: {
    paddingHorizontal: spacing.sm,
  },
  promoCard: {
    backgroundColor: colors.pastel.blueLight,
    borderRadius: radii.xxl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.pastel.blue,
  },
  cardTitle: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.heavy,
    color: colors.text.primary,
    lineHeight: typography.fontSize.display * typography.lineHeight.tight,
  },
  badgeTextContainer: {
    backgroundColor: colors.pastel.blueDark,
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xxs,
    borderRadius: radii.md,
    marginTop: spacing.xs,
  },
  badgeText: {
    color: colors.onPrimary,
    fontWeight: typography.fontWeight.bold,
    fontSize: typography.fontSize.lg,
  },
  cardSubtitle: {
    fontSize: typography.fontSize.md,
    color: colors.text.secondary,
    marginTop: spacing.md,
    lineHeight: typography.fontSize.md * typography.lineHeight.relaxed,
  },
  actions: {
    gap: spacing.sm,
  },
  loginButton: {
    borderColor: colors.border.medium,
  },
});
