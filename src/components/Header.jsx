import './style.css'
import './clear.css';
import './dark.css'
import { DarkMode } from '../context/DarkMode';
import { useState, useContext } from 'react';

function Header() {
    const {dark} = useContext(DarkMode)
  return(
    <header className={dark ? "dark-header" : "clear-header"}>
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
            <a href="#Intro">Introducción</a>
            <a href="#Exp">Experiencia</a>
            <a href="">Contacto</a>
        </nav>
        <img src={dark ? "/logo_end_darkmode.png" : "/logo_end.png"} alt="Logo" className="logo" />
    </header>
  )
}

export default Header;