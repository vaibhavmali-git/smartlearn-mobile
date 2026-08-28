import { colors, radii, spacing, typography } from "@/theme";

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF66",
    borderRadius: 25,
    padding: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
    overflow: "hidden",
    marginTop: 20,
  },

  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.sm,
  },

  buddyIcon: {
    width: 46,
    height: 47,
  },

  buddyLabel: {
    color: "#01000080",
    fontSize: 12,
    fontFamily: typography.fonts.regular,
  },

  textView: {
    gap: 4,
  },

  buddyMessage: {
    color: "#010000",
    fontSize: 14,
    fontFamily: typography.fonts.medium,
  },

  progressCircle: {
    width: 38,
    height: 38,
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.surface,
  },

  progressSvg: {
    position: "absolute",
  },

  progressText: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
    color: colors.primary,
  },

  circleWrapper: {
    width: 47,
    height: 47,
    backgroundColor: "rgba(244, 243, 243, 0.7)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: radii.full,
  },
});
