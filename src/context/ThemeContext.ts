import React from "react";

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined,
);

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}
