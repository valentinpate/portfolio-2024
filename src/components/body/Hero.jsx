import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useContext, useEffect } from 'react';
import Header from '../parts/Header';
import { Translation } from '../../context/Translation';

function Hero() {
    const {dark, set} = useContext(DarkMode)
    const {t, i18n, language, setLanguage} = useContext(Translation)

    useEffect(()=>{
        i18n.changeLanguage(language)
    },[language,i18n]) //useEffect así evitamos if

  return(
    <section id="Hero">
        <Header/>
        <div className="options not-burger">
            <select className={dark ? "dark-select" : "clear-select"} value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
                    <option value="es">Español</option>
                    <option value="en">English</option>
            </select>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={set}/>
                <label className={dark ? "form-check-label dark-font" : "form-check-label"} for="flexCheckDefault">{t("hero.hero-dark-mode")}</label>
            </div>
        </div>
        <div className="hero">
            <img src="/test.jpg" alt="" className="photo" />
            <div className={dark ? "hero-content dark-font" : "hero-content"}>
                <h1>Valentín Pate</h1>
                <h2>{t("hero.hero-stack")}</h2>
                <div className="Argentina">
                    <h3>Buenos Aires, Argentina</h3>
                    <img src="/img/arg.png" alt="" className="flag" />
                </div>
                <h4>{t("hero.hero-welcome")}</h4>
            </div>
        </div>
        <div className={dark ? "separator dark-font" : "separator"}>
            <h1>~~~~~~~~~~~~<span>~</span></h1>
        </div>
    </section>
  )
}

export default Hero;