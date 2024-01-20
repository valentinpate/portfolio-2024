import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';

function Footer() {
    const {dark} = useContext(DarkMode)
  return(
    <footer className={dark ? "dark-font" : ""}>
        <p>&copy; Valentín Pate 2024</p>
    </footer>
  )
}

export default Footer;