import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: spacing.md,
    paddingBottom: 15,
    position: "relative",
    overflow: "visible",
    minHeight: 363,
    borderRadius: 32,
  },
  backButton: {
    marginBottom: spacing.md,
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: "#FFFFFF66",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
    alignSelf: "flex-start",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    color: "rgba(22, 27, 51, 0.5)",
    marginBottom: 4,
  },
  title: {
    fontSize: 25,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
    letterSpacing: -0.5,
    width: "50%",
    marginBottom: spacing.md,
    zIndex: 2,
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
    zIndex: 2,
    overflow: "hidden",
  },
  tagText: {
    fontSize: 10,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
  },
  illustration: {
    position: "absolute",
    right: -20,
    top: 85,
    width: 281,
    height: 292,
    zIndex: 1,
  },
});
