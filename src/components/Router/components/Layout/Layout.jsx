import { Outlet } from "react-router-dom";
import styles from './Layout.module.css'
import { useTheme } from '../../../ThemeContext'
import { Header } from "../../../Header";

function Layout() {
  const isDarkTheme = useTheme();

  const styleOutlet = {
    backgroundColor: isDarkTheme ? "#282c34" : "#fff",
    color: isDarkTheme ? "#fff" : "#282c34",
  }
  
  return (
    <div>
      <Header/>
      <div style={styleOutlet} className={styles["main"]}>
        <Outlet />
      </div>
    </div>
  )
}

export { Layout };