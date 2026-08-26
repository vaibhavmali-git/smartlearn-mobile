import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    paddingVertical: spacing.xl,
  },
  header: {
    alignItems: "center",
    marginBottom: spacing.xxl,
  },
  iconBadge: {
    width: 68,
    height: 68,
    borderRadius: radii.full,
    backgroundColor: colors.pastel.lavenderLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  title: {
    fontSize: typography.fontSize.display,
    fontWeight: typography.fontWeight.heavy,
    color: colors.text.primary,
  },
  form: {
    width: "100%",
    marginBottom: spacing.xl,
  },
  submitButton: {
    marginTop: spacing.sm,
  },
  disclaimer: {
    fontSize: typography.fontSize.xs,
    color: colors.text.secondary,
    textAlign: "center",
    marginTop: spacing.lg,
    lineHeight: typography.fontSize.xs * typography.lineHeight.normal,
  },
  link: {
    color: colors.text.primary,
    fontWeight: typography.fontWeight.bold,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: spacing.xl,
  },
  footerText: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
  },
  footerAction: {
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.bold,
    color: colors.primary,
    marginLeft: spacing.xxs,
  },
});
