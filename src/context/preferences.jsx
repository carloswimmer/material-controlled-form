import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

const PreferencesContext = createContext({
  darkMode: true,
  toggleDarkMode: () => {},
});

export const PreferencesProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((mode) => !mode);
  }, []);

  const value = useMemo(
    () => ({
      darkMode,
      toggleDarkMode,
    }),
    [darkMode, toggleDarkMode]
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
};

export const usePreferences = () => {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error("usePreferences must be used within a PreferencesProvider");
  }

  return context;
};
