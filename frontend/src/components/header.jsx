import React from 'react'
import { useTheme } from "@/context/theme-provider";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="flex justify-end p-4">
      <Button onClick={toggleTheme} variant = "themeSwitch">
        {theme === "dark" ? "☀️" : "🌙"}
      </Button>
    </div>
  );
}
