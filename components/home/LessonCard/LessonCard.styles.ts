import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 320,
    borderRadius: 32,
    padding: 13,
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
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  metaTags: {
    flexDirection: "row",
    gap: 2,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    paddingHorizontal: spacing.sm,
    paddingVertical: 12,
    borderRadius: radii.full,
    gap: 4,
  },
  tagText: {
    fontSize: 10,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
  },
  content: {
    marginTop: spacing.md,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    color: "rgba(1, 0, 0, 0.3)",
    marginBottom: 4,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    lineHeight: 32,
    letterSpacing: -0.5,
    width: "70%",
  },
  illustration: {
    position: "absolute",
    right: 40,
    bottom: 33,
    width: 145,
    height: 145,
    zIndex: -1,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF66",
    padding: 9,
    borderRadius: radii.full,
    marginTop: "auto",
    overflow: "hidden",
  },
  actionText: {
    fontSize: 18,
    fontFamily: typography.fonts.medium,
    color: "#073647",
    marginLeft: 12,
  },
  playIcon: {
    width: 40,
    height: 40,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
  },
});
