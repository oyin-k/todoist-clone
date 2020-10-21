import React, { useState } from "react";
import { Header } from "./components/layouts/Header";
import { Content } from "./components/layouts/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);

  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <main
          className={darkMode ? "darkmode" : undefined}
          data-testid="application"
        >
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Content />
        </main>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
