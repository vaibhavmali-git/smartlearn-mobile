import { radii, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EAF1F9",
    borderRadius: 25,
    paddingVertical: 11,
    paddingHorizontal: 14,
    marginBottom: 8,
    gap: 14,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 2,
  },
  name: {
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    color: "#010000",
  },
  email: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
    color: "#708892",
  },
});
