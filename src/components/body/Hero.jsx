import '../clear.css';
import '../dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';
import Header from '../Header';

function Hero() {
    const {dark, setDark} = useContext(DarkMode)
    function set(){
        setDark(!dark)
    }
  return(
    <section id="Hero">
        <Header/>
        <div className="options">
            <select className={dark ? "dark-select" : "clear-select"} name="language" id="language">
                    <option value="es">Español</option>
                    <option value="en">English</option>
            </select>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={set}/>
                <label className={dark ? "form-check-label dark-font" : "form-check-label"} for="flexCheckDefault">Modo oscuro</label>
            </div>
        </div>
        <div className="hero">
            <img src="/test.jpg" alt="" className="photo" />
            <div className={dark ? "hero-content dark-font" : "hero-content"}>
                <h1>Valentín Pate</h1>
                <h2>Programador Web Full Stack</h2>
                <div className="Argentina">
                    <h3>Buenos Aires, Argentina</h3>
                    <img src="/img/arg.png" alt="" className="flag" />
                </div>
                <h4>Bienvenidx a mi portfolio.</h4>
            </div>
        </div>
        <div className={dark ? "separator dark-font" : "separator"}>
            <h1>~~~~~~~~~~~~<span>~</span></h1>
        </div>
    </section>
  )
}

export default Hero;