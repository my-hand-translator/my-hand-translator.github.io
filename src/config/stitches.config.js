import { createStitches } from "@stitches/react";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
  createStitches({
    theme: {
      colors: {
        primary: "#264653",
        secondary: "#2a9d8f",
        tertiary: "#e9c46a",
        quaternary: "#f4a261",
        quinary: "#e76f51",
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
