import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBF4FC",
    borderRadius: 32,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: spacing.xxl,
    // minHeight: 480,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
    color: "#708892",
    marginTop: 6,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF4A",
    paddingHorizontal: 13,
    paddingVertical: 12,
    borderRadius: 24,
    gap: 6,
    minWidth: 100,
    marginRight: -5,
  },
  dropdownText: {
    fontSize: 10,
    fontFamily: typography.fonts.semiBold,
    color: "#073647",
  },
  filtersRow: {
    flexDirection: "row",
    marginBottom: 18,
    gap: 2,
    paddingRight: spacing.md,
    marginTop: 8,
  },
  filterPill: {
    paddingHorizontal: 18,
    paddingVertical: 13,
    borderRadius: radii.full,
    backgroundColor: "#ffffff1f",
    borderWidth: 1,
    borderColor: "#0000000D",
  },
  filterPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 12,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
  },
  filterTextActive: {
    color: colors.onPrimary,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 204,
    // paddingHorizontal: 16,
    marginBottom: 13,
    gap: 4,
  },
  barCol: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
  },
  bar: {
    width: 42,
    borderRadius: radii.full,
    overflow: "hidden",
  },
  barActive: {
    backgroundColor: colors.primary,
  },
  barStriped: {
    backgroundColor: "transparent",
  },
  bubble: {
    position: "absolute",
    top: 7,
    backgroundColor: "#8DA8C4",
    width: 34,
    height: 34,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  bubbleText: {
    fontSize: 9,
    fontFamily: typography.fonts.semiBold,
    color: colors.surface,
  },
  chartDaysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 9,
  },
  chartDayText: {
    fontSize: 12,
    fontFamily: typography.fonts.medium,
    color: "#010000",

    flex: 1,
    textAlign: "center",
    paddingBottom: 7,
  },
  stripedPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: radii.full,
  },
});
