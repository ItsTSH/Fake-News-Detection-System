import React from "react";
import { useTheme } from "@/context/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="text-gray-600 body-font border-b-2 py-4 dark:text-slate-300 flex">
      <div className = "container flex flex-wrap flex-col md:flex-row mx-6">
        <div className = "flex title-font font-medium items-center text-gray-800 dark:text-slate-400">
          <Link to="/" className = "ml-1 text-xl">Fake News Classification</Link>
        </div>
      </div>
      <nav className = "md:ml-auto mr-6 flex items-center justify-end">
        <Link to="/" className="mr-5 hover:text-gray-900 dark:hover:text-white">Home</Link>
        <Link to="/about" className="mr-5 hover:text-gray-900 dark:hover:text-white">About</Link>
        <Button onClick={toggleTheme} variant = "themeSwitch">
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </nav>
    </header>
  );
};
