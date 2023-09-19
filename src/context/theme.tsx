import * as React from "react"
import { Toaster } from "react-hot-toast"

const ThemeContext = React.createContext<null>(null)
const useTheme = () => React.useContext(ThemeContext)

ThemeContext.displayName = "ThemeProvider"

interface ThemeProviderProps {
  children: React.ReactNode
}

function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={null}>
      {children}
      <Toaster />
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider, useTheme }
