import { colors, radii } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    position: "absolute",
    alignSelf: "center",
    flexDirection: "row",
    borderRadius: radii.full,
    paddingHorizontal: 5,
    paddingVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    gap: 1,
    overflow: "hidden",
    backgroundColor: "rgba(244, 243, 243, 0.8)",
  },

  tabItem: {
    width: 52,
    height: 52,
    borderRadius: radii.full,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },

  tabItemActive: {
    backgroundColor: colors.primary,
  },
});
