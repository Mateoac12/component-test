import { createContext, useEffect, useState } from "react"
import { IThemeProvider, IThemeContext } from "./ThemeProvider.types"

export const ThemeContext = createContext<IThemeContext>({ theme: "light", setTheme: () => {} })

const ThemeProvider = ({ children }: IThemeProvider) => {
  const [theme, setTheme] = useState<IThemeContext['theme']>("light")

  useEffect(() => {
    const bodyElement = document.querySelector("body")
    bodyElement!.dataset.colorSchema = theme
  }, [theme])

  return <ThemeContext.Provider value={{ theme, setTheme }}>
    { children }
  </ThemeContext.Provider>
}

export default ThemeProvider