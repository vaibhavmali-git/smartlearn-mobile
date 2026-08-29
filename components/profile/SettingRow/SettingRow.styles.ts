import { typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#F1F1F180",
    borderRadius: 22,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  dangerCard: {
    backgroundColor: "#FFE9E9",
    borderColor: "#FFE9E9",
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
  },
  iconBadge: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  dangerIconBadge: {
    backgroundColor: "#FFFFFF80",
  },
  label: {
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    color: "#010000",
  },
  dangerLabel: {
    color: "#E53935",
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  value: {
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    color: "#708892",
  },
});
