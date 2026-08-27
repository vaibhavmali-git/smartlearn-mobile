import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EBF4FC",
    borderRadius: 36,
    padding: spacing.xl,
    marginBottom: spacing.xxl,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },
  title: {
    fontSize: typography.fontSize.xxl,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.medium,
    color: colors.text.secondary,
    marginTop: 4,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCEBFA",
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radii.full,
    gap: 4,
  },
  dropdownText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },
  filtersRow: {
    flexDirection: "row",
    marginBottom: spacing.xxl,
    gap: spacing.sm,
  },
  filterPill: {
    paddingHorizontal: spacing.md,
    paddingVertical: 10,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
  },
  filterPillActive: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: typography.fontSize.sm,
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
    height: 180,
    paddingHorizontal: spacing.xs,
    marginBottom: spacing.md,
  },
  barCol: {
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1,
    height: "100%",
  },
  bar: {
    width: "70%",
    backgroundColor: "#D1DFEF",
    borderRadius: radii.full,
  },
  barActive: {
    backgroundColor: colors.primary,
  },
  bubble: {
    position: "absolute",
    top: -30,
    backgroundColor: "rgba(255,255,255,0.3)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: radii.full,
  },
  bubbleText: {
    fontSize: 10,
    fontFamily: typography.fonts.bold,
    color: colors.surface,
  },
  chartDaysRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: spacing.xs,
  },
  chartDayText: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
    flex: 1,
    textAlign: "center",
  },
});
