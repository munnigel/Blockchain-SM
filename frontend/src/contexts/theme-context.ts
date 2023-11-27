import { createContext } from "react"


export const DarkModeContext = createContext({
    darkMode: 'light',
    setDarkMode: (darkMode: string) => {}
})