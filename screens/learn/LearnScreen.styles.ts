import { colors } from "@/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  emptyStateContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  emptyStateText: {
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    color: colors.primary,
    marginBottom: 20,
  },
  listContainer: {
    paddingTop: 20,
    paddingBottom: 40,
  },
  bottomGradient: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 120,
  },
});
