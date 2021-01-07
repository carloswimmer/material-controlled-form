import React, { useMemo } from "react";

import { CssBaseline } from "@material-ui/core";
import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from "@material-ui/core/styles";

import { usePreferences } from "./preferences";

export const ThemeProvider = ({ children }) => {
  const context = usePreferences();

  if (!context) {
    throw new Error("ThemeProvider must be used within a PreferencesProvider");
  }

  const { darkMode } = context;

  const theme = useMemo(() => {
    return createMuiTheme({
      palette: {
        type: darkMode ? "dark" : "light",
        primary: {
          main: darkMode ? "#00bcd4" : "#836D4D",
        },
        text: {
          primary: darkMode ? "#00bcd4" : "#836D4D",
        },
      },
      typography: {
        fontFamily: ["Open Sans", "sans-serif"],
      },
    });
  }, [darkMode]);

  return (
    <MuiThemeProvider theme={theme}>
      {children}
      <CssBaseline />
    </MuiThemeProvider>
  );
};
