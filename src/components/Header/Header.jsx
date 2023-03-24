import { useTheme, useUpdateTheme } from '../ThemeContext';
import { Switch } from "@mui/material";
import styles from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const [SWdropdown, setSWdropdown] = useState(false);

  const isDarkTheme = useTheme();
  const changeTheme = useUpdateTheme();
  
  const styleHeader = {
    backgroundColor: isDarkTheme ? "#20232a" : "#a8a8a8",
    color: isDarkTheme ? "#fff" : "#20232a",
  }

  function handleSWclick(){
    setSWdropdown(SWdropdown => !SWdropdown);
  }

  return (
    <header style={styleHeader} className={styles["header"]}>
        <nav>
          <NavLink style={styleHeader} to="/" className={styles["link"]}>Home</NavLink>
          <NavLink style={styleHeader} to="/counter" className={styles["link"]}>Counter</NavLink>
          <div className={styles["dropdown"]}>
            <button
              style={styleHeader}
              onClick={handleSWclick}>Star wars</button>

            {SWdropdown && (
              <ul
                style={styleHeader}
                className={styles["menu"]}>
                <li>
                  <NavLink
                  style={styleHeader}
                  to="/SWpeople"
                  className={styles["menuItem"]}>SW people</NavLink>
                </li>

                <li>
                  <NavLink
                  style={styleHeader}
                  to="/SWplanets"
                  className={styles["menuItem"]}>SW planets</NavLink>
                </li>

                <li>
                  <NavLink
                  style={styleHeader}
                  to="/SWstarships"
                  className={styles["menuItem"]}>SW starships</NavLink>
                </li>
              </ul>
            )}
          
          </div>
        </nav>

        <div className={styles["changeTheme"]}>
          <Switch onChange={changeTheme} />
          <p>Change theme</p>
        </div>
      </header>
  )
}

export { Header };