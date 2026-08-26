import { TextStyle } from "react-native";

export const typography = {
  fontSize: {
    xs: 11,
    sm: 13,
    md: 15,
    lg: 17,
    xl: 20,
    xxl: 24,
    display: 30,
    hero: 36,
  },
  fontWeight: {
    regular: "400" as TextStyle["fontWeight"],
    medium: "500" as TextStyle["fontWeight"],
    semiBold: "600" as TextStyle["fontWeight"],
    bold: "700" as TextStyle["fontWeight"],
    heavy: "800" as TextStyle["fontWeight"],
  },
  lineHeight: {
    tight: 1.15,
    normal: 1.3,
    relaxed: 1.5,
  },
} as const;

export type Typography = typeof typography;
