import { colors } from "./colors";
import { radii } from "./radii";
import { shadows } from "./shadows";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
  spacing,
  radii,
  shadows,
} as const;

export type Theme = typeof theme;
export * from "./colors";
export * from "./radii";
export * from "./shadows";
export * from "./spacing";
export * from "./typography";
