import { createContext, useContext, useState } from "react"

const ThemeContext = createContext();
const UpdateThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useUpdateTheme() {
  return useContext(UpdateThemeContext);
}

export function ThemeProvider({children}) {
  const [darkTheme, setDarkTheme] = useState(false);

  function changeTheme() {
    setDarkTheme(darkTheme => !darkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <UpdateThemeContext.Provider value={changeTheme}>
        {children}
      </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  )
}