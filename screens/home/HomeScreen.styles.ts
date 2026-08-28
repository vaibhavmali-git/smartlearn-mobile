import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xxl,
  },
  card: {
    backgroundColor: colors.surface,
    borderRadius: radii.xxl,
    padding: spacing.xl,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: colors.border.light,
  },
  badge: {
    width: 60,
    height: 60,
    borderRadius: radii.full,
    backgroundColor: colors.pastel.limeLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },
  greeting: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.bold,
    color: colors.text.primary,
    marginBottom: spacing.xxs,
  },
  sessionInfo: {
    fontSize: typography.fontSize.sm,
    color: colors.text.secondary,
    marginBottom: spacing.xl,
  },
  logoutButton: {
    width: "100%",
  },

  sectionTitle: {
    fontSize: 26,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    marginBottom: spacing.md,
  },
  carousel: {
    marginHorizontal: -spacing.md,
  },

  carouselContent: {
    paddingHorizontal: spacing.md,
    paddingRight: spacing.xl,
    gap: 10,
  },
});
