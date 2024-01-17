import './style.css'
import './clear.css';
import './dark.css'
import { DarkMode } from '../context/DarkMode';
import { useState, useContext } from 'react';

function Header() {
    const {dark, setDark} = useContext(DarkMode)
  return(
    <header className={dark ? "dark-header" : "clear-header"}>
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
            <a href="#Intro">Introducción</a>
            <a href="">Experiencia</a>
            <a href="">Conocimiento</a>
            <a href="">Contacto</a>
        </nav>
        {/* Idioma English / Español */}
    </header>
  )
}

export default Header;