import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: spacing.lg,
    paddingHorizontal: spacing.xl,
    position: "relative",
  },
  timelineContainer: {
    width: 50,
    alignItems: "center",
    marginRight: spacing.sm,
  },
  line: {
    position: "absolute",
    top: 50,
    bottom: -spacing.lg,
    width: 3,
    backgroundColor: "#E5E7EB",
    zIndex: 0,
  },
  lineActive: {
    backgroundColor: "#72A95F",
  },
  circleIndicator: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
    zIndex: 1,
    borderWidth: 2,
    borderColor: "#E5E7EB",
  },
  circleCompleted: {
    backgroundColor: "#72A95F",
    borderColor: "#72A95F",
  },
  circleCurrent: {
    borderColor: "#72A95F",
    borderWidth: 3,
  },
  circleText: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },

  card: {
    flex: 1,
    borderRadius: radii.xl,
    padding: spacing.lg,
  },
  cardLocked: {
    opacity: 0.5,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xs,
  },
  title: {
    fontSize: typography.fontSize.lg,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },
  durationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  durationText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.medium,
    color: "rgba(22, 27, 51, 0.6)",
  },
  description: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.regular,
    color: "rgba(22, 27, 51, 0.6)",
    marginBottom: spacing.md,
    lineHeight: 20,
  },
  actionRow: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: colors.surface,
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: radii.full,
    gap: 6,
  },
  actionText: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },
});
