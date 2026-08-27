import { radii } from "@/theme/radii";
import { spacing } from "@/theme/spacing";
import { typography } from "@/theme/typography";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#FFFFFF",
    paddingTop: spacing.md,
    paddingBottom: spacing.md,
  },

  backButton: {
    width: 48,
    height: 48,
    borderRadius: radii.full,
    backgroundColor: "#F1F1F190",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 36,
  },

  content: {
    width: "100%",
  },

  header: {
    marginBottom: 40,
  },

  title: {
    fontSize: 26,
    fontFamily: typography.fonts.medium,
    letterSpacing: -0.6,
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 15,
    fontFamily: typography.fonts.regular,
    lineHeight: 26,
  },

  form: {
    width: "100%",
  },

  field: {
    width: "100%",
  },

  label: {
    fontSize: 15,
    fontFamily: typography.fonts.regular,
    color: "#000000",
    marginBottom: 14,
  },

  submitButton: {
    marginTop: 24,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    paddingTop: 40,
  },

  footerText: {
    fontSize: 15,
    fontFamily: typography.fonts.regular,
    color: "#708892",
  },

  footerAction: {
    fontSize: 15,
    fontFamily: typography.fonts.medium,
    marginLeft: 4,
  },
});
