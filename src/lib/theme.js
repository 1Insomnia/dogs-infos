import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("light.base", "dark.base")(props),
    },
  }),
};

const colors = {
  primary: {
    light: "#2c7a7b",
    dark: "#4fd1c5",
  },
  light: {
    light: "#f4ede4",
    base: "#f0e7db",
  },
  dark: {
    light: "#313134",
    base: "#202023",
  },
  highlight: {
    blue: "#5287eb",
    pink: "#eb5db4",
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
  body: "'Inter'",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ colors, config, styles, fonts });

export default theme;
