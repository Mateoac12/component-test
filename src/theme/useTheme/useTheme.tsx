import { useContext } from "react"
import { ThemeContext } from "../ThemeProvider/ThemeProvider"

const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  
  return {
    theme,
    toggleTheme
  }
}

export default useTheme