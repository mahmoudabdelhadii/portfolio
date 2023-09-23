import "./App.css";
import Nav from "./components/Nav";
import { createContext, useState } from "react";

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')
        .matches;
export const ThemeContext = createContext(null as any);

function App() {
  const [theme, setTheme] = useState(prefersDark?"dark":"light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        
          <Nav onChange={toggleTheme} checked={theme === "dark"} />
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;