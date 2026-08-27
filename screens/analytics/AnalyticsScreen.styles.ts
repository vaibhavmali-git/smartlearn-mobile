import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xl,
    paddingTop: spacing.sm,
  },
  title: {
    fontSize: 34,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  bellBadge: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: "#F8F9FC",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.border.light,
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: "#FF4B4B",
    borderRadius: radii.full,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
});
