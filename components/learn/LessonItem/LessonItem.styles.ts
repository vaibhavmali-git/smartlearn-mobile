import { colors, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: spacing.md,
    marginBottom: 8,
    position: "relative",
  },
  timelineContainer: {
    position: "absolute",
    left: spacing.md,
    top: 0,
    bottom: -spacing.lg,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    flex: 1,
    borderRadius: 24,
    padding: 15,
    marginLeft: 70,
  },
  lineTop: {
    position: "absolute",
    width: 4,
    backgroundColor: "#E8E8E8",
    top: 0,
    bottom: "50%",
    marginBottom: 28,
  },
  lineBottom: {
    position: "absolute",
    width: 4,
    backgroundColor: "#E8E8E8",
    top: "50%",
    bottom: 0,
    marginTop: 28,
  },
  lineActive: {
    backgroundColor: "#72A95F",
  },
  circleIndicator: {
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },

  circleCompletedOuter: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#72A95F",
    alignItems: "center",
    justifyContent: "center",
  },
  circleCompletedInner: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#72A95F",
    borderWidth: 3,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },

  progressSvg: {
    position: "absolute",
    top: 0,
    left: 0,
  },
  circleCurrentInner: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
  },

  circleLockedOuter: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#F0F0F0",
    borderWidth: 3,
    borderColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
  },

  circleText: {
    fontSize: 20,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
  },
  circleTextLocked: {
    fontSize: 20,
    fontFamily: typography.fonts.medium,
  },

  cardContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.sm,
  },
  title: {
    fontSize: 16,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    flex: 1,
    lineHeight: 26,
  },
  durationPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF61",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  durationText: {
    fontSize: 10,
    fontFamily: typography.fonts.semiBold,
    color: "#073647",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
    color: "#01000080",
    lineHeight: 18,
    flex: 1,
    marginRight: spacing.sm,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 2,
    paddingVertical: 3,
    borderRadius: 24,
    gap: 8,
  },
  actionText: {
    fontSize: 10,
    fontFamily: typography.fonts.medium,
    color: "#073647",
    paddingLeft: 8,
  },
});
