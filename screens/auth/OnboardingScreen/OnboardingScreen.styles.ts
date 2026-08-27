import { colors } from "@/theme/colors";
import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    overflow: "visible",
    paddingBottom: 0,
    minHeight: 770,
  },

  header: {
    alignItems: "center",
    position: "relative",
    marginTop: spacing.xl,
    marginBottom: spacing.md,
    minHeight: 150,
    overflow: "visible",
    zIndex: 1,
  },

  backgroundArch: {
    position: "absolute",
    top: -80,
    left: -50,
    width: 500,
    height: 500,
    zIndex: 0,
  },

  logoBadge: {
    width: 78,
    height: 78,
    borderRadius: radii.full,
    backgroundColor: "#FFFFFF",
    borderWidth: 8,
    borderColor: "#F0F4F8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.xs,
    zIndex: 2,
  },

  logoIcon: {
    width: 38,
    height: 38,
  },

  brandName: {
    fontSize: typography.fontSize.xxl,
    fontFamily: typography.fonts.medium,
    color: colors.primary,
    letterSpacing: -0.3,
    zIndex: 2,
  },

  cardSection: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    position: "relative",
    marginTop: 45,
    zIndex: 2,
    overflow: "visible",
  },

  pinkCard: {
    position: "absolute",
    top: -105,
    width: "62%",
    height: 120,
    backgroundColor: "#F2D1D0",
    transform: [{ rotate: "-7.95deg" }],
    paddingTop: 19,
    paddingLeft: spacing.xl,
    zIndex: 1,
    borderWidth: 7,
    borderColor: "#FFFFFF",
    borderRadius: 24,
  },

  pinkCardText: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.medium,
    color: "#010000",
  },

  bulbIcon: {
    position: "absolute",
    right: 16,
    top: -100,
    width: 29,
    height: 29,
    zIndex: 10,
    transform: [{ rotate: "10deg" }],
  },

  limeCard: {
    position: "absolute",
    top: -38,
    width: "85%",
    height: 110,
    backgroundColor: "#DFF28A",
    borderRadius: 24,
    transform: [{ rotate: "7.47deg" }],
    paddingTop: spacing.xl,
    paddingLeft: spacing.xl,
    zIndex: 2,
    borderWidth: 7,
    borderColor: "#FFFFFF",
  },

  limeCardText: {
    fontSize: typography.fontSize.md,
    fontFamily: typography.fonts.medium,
    color: "#01000080",
  },

  blueCard: {
    width: "100%",
    backgroundColor: "#CADDF7",
    borderRadius: 29,
    paddingHorizontal: 28,
    paddingTop: spacing.xxl,
    paddingBottom: spacing.lg,
    minHeight: 350,
    zIndex: 3,
    position: "relative",
    overflow: "visible",
    borderWidth: 7,
    borderColor: "#FFFFFF",
    transform: [{ rotate: "-1.71deg" }],
    marginTop: 15,
  },

  starIcon: {
    position: "absolute",
    left: 7,
    top: -17,
    width: 23,
    height: 23,
    zIndex: 5,
  },

  cardTitle: {
    fontSize: 30,
    fontFamily: typography.fonts.medium,
    color: "#010000",
    letterSpacing: -0.5,
    marginBottom: 4,
  },

  badgeTextContainer: {
    backgroundColor: "#71A6EE",
    alignSelf: "flex-start",
    paddingHorizontal: spacing.sm,
    paddingVertical: 1,
    borderRadius: radii.full,
    marginBottom: spacing.md,
  },

  badgeText: {
    color: "#FFFFFF",
    fontFamily: typography.fonts.medium,
    fontSize: 30,
    letterSpacing: -0.4,
  },

  cardSubtitle: {
    fontSize: 14,
    color: "#1C274C90",
    lineHeight: 19,
    letterSpacing: -0.3,
    width: "70%",
    fontFamily: typography.fonts.regular,
  },

  dotsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 35,
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
    right: -20,
    bottom: -20,
    width: 235,
    height: 235,
    zIndex: 4,
  },

  actions: {
    width: "100%",
    gap: 5,
  },

  loginButton: {
    borderColor: colors.primary,
    backgroundColor: "#FFFFFF",
  },
});
