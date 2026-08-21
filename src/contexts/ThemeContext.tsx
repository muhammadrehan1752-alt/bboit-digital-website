import { createContext, useContext, useEffect, useState } from "react";

type Theme = "default" | "midnight" | "light";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    const saved = localStorage.getItem("bboit-theme");
    return (saved as Theme) || "default";
  });

  useEffect(() => {
    localStorage.setItem("bboit-theme", theme);
    
    // Remove all theme classes first
    document.documentElement.classList.remove("theme-midnight", "theme-light");
    
    if (theme === "midnight") {
      document.documentElement.classList.add("theme-midnight");
    } else if (theme === "light") {
      document.documentElement.classList.add("theme-light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
