import { spacing, typography } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EAF1F9",
    borderRadius: 27,
    paddingTop: 14,
    marginBottom: spacing.xl,
    position: "relative",
  },
  backgroundArch: {
    position: "absolute",
    top: -20,
    right: -10,
    width: 140,
    height: 140,
    opacity: 0.1,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: spacing.md,
  },
  buddyIcon: {
    width: 46,
    height: 47,
  },
  textView: {
    flex: 1,
    gap: 4,
  },
  buddyLabel: {
    color: "#708892",
    fontSize: 11,
    fontFamily: typography.fonts.regular,
  },
  buddyMessage: {
    color: "#010000",
    fontSize: 16,
    fontFamily: typography.fonts.medium,
  },
  messageSection: {
    overflow: "hidden",
    borderRadius: 24,
    marginHorizontal: 2,
    marginVertical: 2,
  },
  messageBlur: {
    ...StyleSheet.absoluteFillObject,
  },
  messageContent: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  messageText: {
    color: "#010000",
    fontSize: 14,
    fontFamily: typography.fonts.medium,
    lineHeight: 22,
  },
});
