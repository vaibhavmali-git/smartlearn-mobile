import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBF4FC",
    borderRadius: 36,
    padding: 28,
    marginBottom: spacing.xxl,
    minHeight: 480,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fonts.regular,
    color: "#7A92B0",
    marginTop: 4,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#D5E6F7",
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: radii.full,
    gap: 6,
    minWidth: 100,
  },
  dropdownText: {
    fontSize: 14,
    fontFamily: typography.fonts.semiBold,
    color: colors.primary,
  },
  filtersRow: {
    flexDirection: "row",
    marginBottom: 32,
    gap: 12,
    paddingRight: spacing.md,
  },
  filterPill: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: radii.full,
    backgroundColor: "#F5FAFF",
    borderWidth: 1,
    borderColor: "#D5E6F7",
  },
  filterPillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 15,
    fontFamily: typography.fonts.semiBold,
    color: colors.primary,
  },
  filterTextActive: {
    color: colors.onPrimary,
  },

  chartContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    height: 200,
    paddingHorizontal: 16,
    marginBottom: 16,
    gap: 4,
  },
  barCol: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
  },
  bar: {
    width: 32,
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
    top: -8,
    backgroundColor: "#8DA8C4",
    width: 52,
    height: 52,
    borderRadius: 26,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  bubbleText: {
    fontSize: 11,
    fontFamily: typography.fonts.semiBold,
    color: colors.surface,
  },
  chartDaysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    gap: 4,
  },
  chartDayText: {
    fontSize: 15,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
    flex: 1,
    textAlign: "center",
  },
  stripedPattern: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: radii.full,
  },
});
