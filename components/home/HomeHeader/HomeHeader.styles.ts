import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: spacing.xl,
    marginTop: spacing.md,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 11,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    backgroundColor: colors.pastel.amber,
  },
  greetingText: {
    color: "#708892",
    fontSize: 13,
    fontFamily: typography.fonts.medium,
  },
  nameText: {
    color: colors.primary,
    fontSize: 15,
    fontFamily: typography.fonts.medium,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 7,
  },
  langButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0EFEF66",
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
    borderRadius: radii.full,
    gap: 4,
  },

  languageContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  flag: {
    width: 16,
    height: 16,
    resizeMode: "contain",
  },

  langText: {
    fontSize: 12,
    fontFamily: typography.fonts.regular,
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
