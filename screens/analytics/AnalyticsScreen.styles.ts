import { radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 28,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    letterSpacing: -0.5,
  },
  bellBadge: {
    width: 44,
    height: 44,
    borderRadius: radii.full,
    backgroundColor: "#F0EFEF66",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  notificationDot: {
    position: "absolute",
    top: 10,
    right: 12,
    width: 8,
    height: 8,
    backgroundColor: "#F22138",
    borderRadius: radii.full,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
});
