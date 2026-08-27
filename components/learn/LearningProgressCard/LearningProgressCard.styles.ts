import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing.xl,
    marginTop: -45,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderRadius: radii.xl,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.5)",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  buddyIcon: {
    width: 44,
    height: 44,
  },
  buddyLabel: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.medium,
  },
  buddyMessage: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.bold,
  },
  progressCircle: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    borderWidth: 4,
    borderColor: "#72A95F",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },
  progressText: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },
});
