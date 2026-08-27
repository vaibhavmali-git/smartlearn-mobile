import { colors, radii, spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    marginTop: spacing.sm,
    marginBottom: spacing.xl,
  },
  title: {
    fontSize: 34,
    fontFamily: typography.fonts.heavy,
    color: colors.primary,
    letterSpacing: -0.5,
  },
  sectionTitle: {
    fontSize: typography.fontSize.sm,
    fontFamily: typography.fonts.bold,
    color: colors.text.muted,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: spacing.md,
    marginTop: spacing.lg,
    marginLeft: spacing.xs,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(22, 27, 51, 0.5)",
    justifyContent: "center",
    padding: spacing.xl,
  },
  modalContent: {
    backgroundColor: colors.surface,
    borderRadius: radii.xl,
    padding: spacing.xl,
  },
  modalTitle: {
    fontSize: typography.fontSize.xl,
    fontFamily: typography.fonts.bold,
    color: colors.primary,
    marginBottom: spacing.lg,
  },
  modalActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: spacing.sm,
    marginTop: spacing.md,
  },
});
