import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';

function Header() {
    const {dark, set} = useContext(DarkMode)
    const [burger, setBurger] = useState(false)
  return(
    <header className={dark ? "dark-header" : "clear-header"}>
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav className="header-nav not-burger">
            <a href="#Intro">Introducción</a>
            <a href="#Exp">Experiencia</a>
            <a href="#Cont">Contacto</a>
        </nav>
        <img src={dark ? "/logo_end_darkmode.png" : "/logo_end.png"} alt="Logo" className="logo not-burger" />
        <button onClick={()=>{setBurger(true)}} className={dark ? "burger dark-font" : "burger"}><i className="bi bi-list"></i></button>
        {burger && <div className={dark ? "burger-menu dark-burger-menu" : "burger-menu clear-burger-menu"}>
            <button onClick={()=>{setBurger(false)}} className={dark ? "burger-close dark-font" : "burger-close"}><i className="bi bi-x-lg"></i></button>
            <div className="burger-menu-options">
              <nav className="burger-nav">
                <a href="#Intro" onClick={()=>{setBurger(false)}}>Introducción</a>
                <a href="#Exp" onClick={()=>{setBurger(false)}}>Experiencia</a>
                <a href="#Cont" onClick={()=>{setBurger(false)}}>Contacto</a>
              </nav>
              <select className={dark ? "dark-select" : "clear-select"} name="language" id="language">
                    <option value="es">Español</option>
                    <option value="en">English</option>
              </select>
              <button onClick={()=>{set(); setBurger(false)}} className="dark-btn">{dark ? "Modo Oscuro" : "Modo Claro"}</button>
            </div>
          </div>}
    </header>
  )
}

export default Header;