import React from "react";
import AppProvider from "./context";
import Employees from "./pages/Employees/Employees";

const App = () => {
  return (
    <AppProvider>
      <Employees />
    </AppProvider>
  );
};

export default App;
