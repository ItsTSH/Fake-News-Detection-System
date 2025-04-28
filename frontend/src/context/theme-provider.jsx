"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
      const storedTheme = localStorage.getItem("theme");
      if(storedTheme){
        setTheme(storedTheme);
        document.documentElement.classList.toggle("dark", storedTheme === "dark");
        document.documentElement.classList.add("transition-colors", "duration-400");
      }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark"? "light": "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        document.documentElement.classList.add("transition-colors", "duration-400");
        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      );
};

export const useTheme = () => useContext(ThemeContext);