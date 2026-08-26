import { colors, radii, spacing, typography } from "@/theme";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const CARD_WIDTH = width * 0.75;

export const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    height: 320,
    borderRadius: 36,
    padding: spacing.xl,
    marginRight: spacing.md,
    justifyContent: "space-between",
    overflow: "hidden",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: "rgba(255,255,255,0.4)",
    alignItems: "center",
    justifyContent: "center",
  },
  metaTags: {
    flexDirection: "row",
    gap: spacing.xs,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingHorizontal: spacing.sm,
    paddingVertical: 6,
    borderRadius: radii.full,
    gap: 4,
  },
  tagText: {
    fontSize: typography.fontSize.xs,
    fontFamily: typography.fonts.semiBold,
    color: colors.primary,
  },
  content: {
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.semiBold,
    color: "rgba(22, 27, 51, 0.4)",
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    lineHeight: 32,
    letterSpacing: -0.5,
    width: "90%",
  },
  illustration: {
    position: "absolute",
    right: -20,
    bottom: 50,
    width: 180,
    height: 180,
    zIndex: -1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: radii.full,
    marginTop: "auto",
  },
  actionText: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
  },
  playIcon: {
    width: 32,
    height: 32,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
});
