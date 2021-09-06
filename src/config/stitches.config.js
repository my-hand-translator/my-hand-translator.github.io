import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary: "#737373",
        secondary: "#1d8ff2",
        tertiary: "#1a6dd9",
        quaternary: "#f2f2f2",
        quinary: "#f2b988",
      },
    },
    media: {
      medium: "(max-width: 768px)",
      large: "(max-width: 1024px)",
    },
    utils: {
      marginX: value => ({ marginLeft: value, marginRight: value }),
    },
  });
