import { spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 15,
    marginBottom: 12,
  },
  cardTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.sm,
  },
  titleWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginRight: spacing.sm,
  },
  iconBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#FFFFFF80",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    flex: 1,
    lineHeight: 22,
  },
  durationPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF61",
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 4,
  },
  durationText: {
    fontSize: 10,
    fontFamily: typography.fonts.semiBold,
    color: "#073647",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
    color: "#01000080",
    lineHeight: 18,
    flex: 1,
    marginRight: spacing.sm,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-end",
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 3,
    paddingVertical: 3,
    borderRadius: 24,
    gap: 8,
  },
  actionText: {
    fontSize: 10,
    fontFamily: typography.fonts.medium,
    color: "#073647",
    paddingLeft: 8,
  },
});
