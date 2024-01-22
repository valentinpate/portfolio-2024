import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';
import { Translation } from '../../context/Translation';

function Footer() {
    const {dark} = useContext(DarkMode)
    const {t} = useContext(Translation)
  return(
    <footer className={dark ? "dark-font" : ""}>
        <p>&copy; Valentín Pate 2024 - {t("exp.project-page.original")}</p>
        {/* para diseño original podemos usar {t("exp.project-page.original")} */}
        {/* <a href="">Ir al repositorio de este portfolio</a> */}
    </footer>
  )
}

export default Footer;