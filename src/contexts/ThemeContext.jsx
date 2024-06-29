import { createContext, useState } from "react";

const ThemeContext = createContext ({
    theme: 'light',
    toggleTheme: () => {},
})

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');
  
    const toggleTheme = () => {
      setTheme(theme === 'dark'? 'light' : 'dark');
    };
  
    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
  export { ThemeProvider, ThemeContext };