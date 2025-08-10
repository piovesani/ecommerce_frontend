"use client";

import { useEffect, useState } from "react";

const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
] as const;

type Theme = typeof themes[number];

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const savedTheme = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="dropdown dropdown-bottom dropdown-left" title="Escolha um tema">
      <label tabIndex={0} className="btn m-1">
        {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </label>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-box w-52 max-h-60 overflow-y-auto"
      >
        <div className="join join-vertical w-full">
          {themes.map((t) => (
            <input
              key={t}
              type="radio"
              name="theme-buttons"
              className="btn theme-controller join-item"
              aria-label={t.charAt(0).toUpperCase() + t.slice(1)}
              value={t}
              checked={theme === t}
              onChange={() => changeTheme(t)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
