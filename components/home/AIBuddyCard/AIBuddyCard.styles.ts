import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAF1F9",
    borderRadius: 27,
    paddingTop: 14,
    marginBottom: spacing.xl,
  },

  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 9,
    paddingHorizontal: spacing.sm,
  },

  buddyIcon: {
    width: 46,
    height: 47,
    marginBottom: 10,
  },

  textView: {
    flex: 1,
    gap: 4,
  },

  buddyLabel: {
    color: "#708892",
    fontSize: 11,
    fontFamily: typography.fonts.regular,
  },

  buddyMessage: {
    color: "#010000",
    fontSize: 14,
    fontFamily: typography.fonts.medium,
  },

  illustration: {
    position: "absolute",
    right: 24,
    top: -13,
    width: 85.5,
    height: 119.1,
  },

  bulb: {
    position: "absolute",
    right: 14,
    top: 15,
    width: 32,
    height: 32,
  },

  pickSection: {
    overflow: "hidden",
    borderRadius: 24,
    marginHorizontal: 2,
    marginVertical: 2,
  },

  pickBlur: {
    ...StyleSheet.absoluteFillObject,
  },

  pickContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingVertical: 12,
    paddingHorizontal: 20,
    gap: 40,
  },

  pickTitle: {
    color: "#010000",
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    marginBottom: 6,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },

  metaItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  metaText: {
    color: colors.text.secondary,
    fontSize: typography.fontSize.xs,
  },

  progressSection: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 9,
    gap: spacing.sm,
  },

  progressText: {
    color: colors.text.secondary,
    fontSize: 12,
    fontFamily: typography.fonts.regular,
  },

  percentageText: {
    color: "#121111",
    fontFamily: typography.fonts.regular,
  },

  playButton: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },

  progressRing: {
    position: "absolute",
  },

  playIcon: {
    marginLeft: 3,
  },
});
