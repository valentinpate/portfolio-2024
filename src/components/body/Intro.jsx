import '../css/style.css'
import '../css/clear.css'
import '../css/dark.css'
import { useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'
import { Translation } from '../../context/Translation'

function Intro(){
    const {dark} = useContext(DarkMode)
    const {t} = useContext(Translation)
    return(
    <section className={dark ? "intro dark-font" : "intro"} id="Intro">
        <div className="intro-intro">
            <div className="title">
                <h1>{t("header.nav-intro")}</h1>
                <button className={dark ? "dark-title-btn no-responsive-p" : "clear-title-btn no-responsive-p"} onClick={()=>{window.scrollTo(0,0)}} title={t("intro.intro-top")}><i class="bi bi-arrow-up-short"></i></button>
                <p className="yes-responsive-p" style={{fontSize:"2.5em"}}><i class="bi bi-arrow-down-short"></i></p>
            </div>
            <p>{t("intro.intro-age")}</p>
            <p>{t("intro.intro1")}</p>
            <p>{t("intro.intro2")}</p>
            <p>{t("intro.intro3")}</p>
        </div>
        <div className={dark ? "separator dark-font" : "separator"}>
            <h1>~~~~~~~~~~~~<span>~</span></h1>
        </div>
    </section>
    )
}

export default Intro;