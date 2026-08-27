import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#D7E8FC",
    borderRadius: 32,
    padding: spacing.xl,
    marginBottom: spacing.xl,
    overflow: "hidden",
    position: "relative",
    minHeight: 160,
    justifyContent: "center",
  },
  backgroundArch: {
    position: "absolute",
    top: -20,
    right: -20,
    width: 150,
    height: 150,
    opacity: 0.1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md,
    zIndex: 2,
  },
  buddyIconContainer: {
    width: 64,
    height: 64,
    borderRadius: radii.full,
    backgroundColor: colors.surface,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  buddyIcon: {
    width: 36,
    height: 36,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: typography.fontSize.xl,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    marginBottom: 4,
  },
  message: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.medium,
    color: "rgba(22, 27, 51, 0.7)",
    lineHeight: 20,
  },
});
