import { radii, spacing, typography } from "@/theme";
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
    fontSize: 26,
    fontFamily: typography.fonts.medium,
    letterSpacing: -0.5,
  },
  bellBadge: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    backgroundColor: "#F0EFEF66",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 12,
    right: 15,
    width: 8,
    height: 8,
    backgroundColor: "#F22138",
    borderRadius: radii.full,
    borderWidth: 1.5,
    borderColor: "#FFFFFF",
  },
});
