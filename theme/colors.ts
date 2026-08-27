export const colors = {
  primary: "#1C274C",
  primaryLight: "#2C3459",
  onPrimary: "#FFFFFF",

  background: "#F8F9FC",
  surface: "#FFFFFF",
  surfaceSubtle: "#F2F4F8",

  pastel: {
    lime: "#D8F374",
    limeDark: "#4A6B1A",
    limeLight: "#EDF9B8",
    lavender: "#E5D9F8",
    lavenderDark: "#5E35B1",
    lavenderLight: "#F3ECFC",
    blue: "#D6EAF8",
    blueDark: "#1E5E9E",
    blueLight: "#EDF5FD",
    peach: "#FCD5CE",
    peachDark: "#B23A2B",
    peachLight: "#FEEDE9",
    amber: "#FFE5A3",
    amberDark: "#9C6800",
  },

  success: "#2E7D32",
  warning: "#F59E0B",
  error: "#E53935",
  info: "#0288D1",

  text: {
    primary: "#161B33",
    secondary: "#6E7787",
    muted: "#9CA3AF",
    disabled: "#C4C8D0",
    inverse: "#FFFFFF",
  },

  border: {
    light: "#ECEEF2",
    medium: "#D8DCE4",
    focus: "#161B33",
  },

  overlay: "rgba(22, 27, 51, 0.4)",
  cardStroke: "rgba(22, 27, 51, 0.06)",
} as const;

export type Colors = typeof colors;
