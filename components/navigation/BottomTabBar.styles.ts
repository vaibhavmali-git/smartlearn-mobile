import { colors, radii, shadows } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: radii.full,
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    ...shadows.floating,
  },
  tabItem: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
  },
  tabItemActive: {
    backgroundColor: colors.primary,
  },
});
