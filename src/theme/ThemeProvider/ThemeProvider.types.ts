export interface IThemeProvider {
  children: React.ReactNode;
}

export interface IThemeContext {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}