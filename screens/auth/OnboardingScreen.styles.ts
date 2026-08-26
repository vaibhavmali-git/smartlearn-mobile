import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    paddingVertical: spacing.md,
    overflow: "visible",
  },

  header: {
    alignItems: "center",
    marginTop: spacing.xl,
    position: "relative",
    zIndex: 1,
    paddingTop: spacing.lg,
  },
  backgroundArch: {
    position: "absolute",
    top: -30,
    width: width,
    height: 180,
    zIndex: 0,
    opacity: 0.6,
  },
  logoBadge: {
    width: 68,
    height: 68,
    borderRadius: radii.full,
    backgroundColor: "#F4F7FB",
    borderWidth: 5,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xs,
    zIndex: 2,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  logoIcon: {
    width: 34,
    height: 34,
  },
  brandName: {
    fontSize: typography.fontSize.xxl,
    fontWeight: typography.fontWeight.heavy,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.3,
    zIndex: 2,
  },

  cardSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    marginTop: 110,
    marginBottom: spacing.xl,
    zIndex: 2,
    overflow: "visible",
  },

  pinkCard: {
    position: "absolute",
    top: -105,
    width: "70%",
    height: 120,
    backgroundColor: "#FCD8D4",
    borderRadius: radii.xl,
    transform: [{ rotate: "-5deg" }],
    paddingTop: spacing.lg,
    alignItems: "center",
    zIndex: 1,
  },
  pinkCardText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
  },

  bulbIcon: {
    position: "absolute",
    right: 30,
    top: -100,
    width: 36,
    height: 36,
    zIndex: 10,
    transform: [{ rotate: "15deg" }],
  },

  limeCard: {
    position: "absolute",
    top: -45,
    width: "85%",
    height: 110,
    backgroundColor: "#E2F378",
    borderRadius: radii.xl,
    transform: [{ rotate: "4deg" }],
    paddingTop: spacing.md,
    paddingLeft: spacing.xl,
    zIndex: 2,
  },
  limeCardText: {
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.medium,
    color: colors.primary,
    opacity: 0.8,
  },

  blueCard: {
    width: "100%",
    backgroundColor: "#D7E8FC",
    borderRadius: 32,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    minHeight: 280,
    zIndex: 3,
    position: "relative",
    overflow: "visible",
  },
  starIcon: {
    position: "absolute",
    left: -12,
    top: 25,
    width: 24,
    height: 24,
    zIndex: 5,
  },
  cardTitle: {
    fontSize: 32,
    fontWeight: typography.fontWeight.heavy,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  badgeTextContainer: {
    backgroundColor: "#6FA8F5",
    alignSelf: "flex-start",
    paddingHorizontal: spacing.md,
    paddingVertical: 4,
    borderRadius: radii.full,
    marginBottom: spacing.md,
  },
  badgeText: {
    color: "#FFFFFF",
    fontWeight: typography.fontWeight.bold,
    fontFamily: typography.fonts.bold,
    fontSize: typography.fontSize.xl,
    letterSpacing: -0.2,
  },
  cardSubtitle: {
    fontSize: typography.fontSize.md,
    color: "#4B5563",
    lineHeight: 22,
    width: "60%",
    fontWeight: typography.fontWeight.regular,
    fontFamily: typography.fonts.regular,
  },

  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    gap: 8,
  },
  dotActive: {
    width: 24,
    height: 8,
    backgroundColor: colors.primary,
    borderRadius: radii.full,
  },
  dotInactive: {
    width: 8,
    height: 8,
    backgroundColor: "#B4C9E2",
    borderRadius: radii.full,
  },

  illustration: {
    position: "absolute",
    right: -10,
    bottom: -15,
    width: 180,
    height: 180,
    zIndex: 4,
  },

  actions: {
    width: "100%",
    gap: spacing.sm,
    paddingBottom: spacing.xs,
  },
  loginButton: {
    borderColor: colors.primary,
    backgroundColor: "#FFFFFF",
  },
});
