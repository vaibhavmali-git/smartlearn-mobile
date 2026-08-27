import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EEF4FC",
    borderRadius: 28,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    overflow: "hidden",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
    marginBottom: spacing.md,
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
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fonts.bold,
  },
  illustration: {
    position: "absolute",
    right: -10,
    top: -10,
    width: 140,
    height: 140,
    opacity: 0.9,
  },
  pickSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginTop: spacing.sm,
  },
  pickTitle: {
    color: colors.primary,
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.semiBold,
    marginBottom: spacing.xs,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  metaText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.medium,
  },
  progressSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },
  progressText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.medium,
  },
  playButton: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: colors.primary,
  },
});
