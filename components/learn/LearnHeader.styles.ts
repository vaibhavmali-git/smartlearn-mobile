import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.xl,
    paddingBottom: 70,
    position: "relative",
    overflow: "visible",
  },
  backButton: {
    marginBottom: spacing.md,
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: "rgba(255,255,255,0.6)",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.semiBold,
    color: "rgba(22, 27, 51, 0.5)",
    marginBottom: 4,
  },
  title: {
    fontSize: 32,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    lineHeight: 36,
    letterSpacing: -0.5,
    width: "60%",
    marginBottom: spacing.md,
    zIndex: 2,
  },
  metaTags: {
    flexDirection: "row",
    gap: spacing.sm,
    zIndex: 2,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.5)",
    paddingHorizontal: spacing.md,
    paddingVertical: 8,
    borderRadius: radii.full,
    gap: 6,
  },
  tagText: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.semiBold,
    color: colors.primary,
  },
  illustration: {
    position: "absolute",
    right: -20,
    top: 40,
    width: 220,
    height: 220,
    zIndex: 1,
  },
});
