import React from "react";
import { Montserrat } from "next/font/google";
import NextLink, { type LinkProps } from "next/link";
import { createTheme, type ThemeOptions } from "@mui/material/styles";

// eslint-disable-next-line react/display-name
const LinkBehaviour = React.forwardRef(
  (props: LinkProps, ref: React.Ref<HTMLAnchorElement>) => (
    <NextLink ref={ref} {...props} />
  )
);

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const theme: ThemeOptions = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehaviour,
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#4CAF50",
    },
    secondary: {
      main: "#333333",
    },
    text: {
      primary: "#333333",
      secondary: "#4CAF50",
    },
  },
  typography: {
    fontFamily: montserrat.style.fontFamily,
  },
});
