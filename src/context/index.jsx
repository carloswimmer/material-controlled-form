import React from "react";

import { PreferencesProvider } from "./preferences";
import { ThemeProvider } from "./theme";

const AppProvider = ({ children }) => {
  return (
    <PreferencesProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </PreferencesProvider>
  );
};

export default AppProvider;
