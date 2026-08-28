import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    marginHorizontal: -spacing.lg,
    paddingHorizontal: spacing.lg,
  },

  listContent: {
    gap: 7,
    paddingRight: spacing.xl,
  },

  pill: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 44,
    paddingHorizontal: 4,
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: "#0000000D",
    backgroundColor: colors.surface,
    gap: 11,
  },

  pillActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  categoryContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },

  iconWrapper: {
    width: 32,
    height: 34,
    alignItems: "center",
    justifyContent: "center",
  },

  text: {
    fontSize: 12,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    includeFontPadding: false,
  },

  textActive: {
    color: colors.onPrimary,
  },

  countBadge: {
    width: 34,
    height: 34,
    borderRadius: radii.full,
    backgroundColor: "#F4F3F380",
    alignItems: "center",
    justifyContent: "center",
  },

  countBadgeActive: {
    backgroundColor: colors.surface,
  },

  countText: {
    fontSize: 12,
    lineHeight: 16,
    fontFamily: typography.fonts.regular,
    color: "#6A8282",
    includeFontPadding: false,
  },

  countTextActive: {
    color: "#010000",
  },

  allText: {
    marginLeft: 12,
    marginRight: 4,
  },
});
