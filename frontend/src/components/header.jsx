import React from "react";
import { useTheme } from "@/context/theme-provider";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header class="text-gray-600 body-font border-b-2 dark:text-slate-300">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Fake News Classifier</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base ">
          <Link to="/" class="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link to="/about" class="mr-5 hover:text-gray-900">
            About
          </Link>
        </nav>
        <Button onClick={toggleTheme} variant="themeSwitch">
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </div>
    </header>
  );
};

// <div className="flex justify-end p-3 bg-navbar border-b-2 border-slate-700">
//   <Button onClick={toggleTheme} variant = "themeSwitch">
//     {theme === "dark" ? "☀️" : "🌙"}
//   </Button>
// </div>

{
  /* <header class="text-gray-600 body-font border-b-2 dark:text-slate-300">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row">
        <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 dark:text-slate-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span class="ml-3 text-xl">Fake News Classifier</span>
        </a>
        <nav class="md:ml-auto flex flex-wrap items-center text-base ">
          <Link to="/" class="mr-5 hover:text-gray-900">Home</Link>
          <Link to="/about" class="mr-5 hover:text-gray-900">About</Link>
        </nav>
        <Button onClick={toggleTheme} variant = "themeSwitch">
          {theme === "dark" ? "☀️" : "🌙"}
        </Button>
      </div>
    </header> */
}
