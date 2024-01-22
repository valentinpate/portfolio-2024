import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import proj from '../proj';
import Project from '../parts/Project';
import Skills from '../parts/Skills';
import { DarkMode } from '../../context/DarkMode';
import { Translation } from '../../context/Translation';
import { useState, useContext } from 'react';

function Exp(){
    const {dark} = useContext(DarkMode)
    const {t} = useContext(Translation)

    const descriptions = {
        one: t("exp.projects.proj-desc1"),
        two: t("exp.projects.proj-desc2"),
        three: t("exp.projects.proj-desc3")
    }

    return(
        <section className={dark ? "experience dark-font" : "experience"} id="Exp">
            <div className="title">
                <h1>{t("header.nav-exp")}</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <p className="exp-desc" style={{marginBottom:"2em"}}>{t("exp.exp-desc")}</p>
            {proj.map((p)=>{
                return (
                    <>
                        <Project name={p.name} img={p.img} front={p.front} back={p.back == null ? " " : p.back} desc={descriptions[p.desc]} link={p.link} repo={p.repo} deploy={p.deploy}/>
                        <div className={dark ? "dots dark-font" : "dots"}>
                            <h1>░░░░░░░░░░░░░░░░░░░░░░░░</h1>
                        </div>
                    </>

                )
            })}
            <h2 style={{marginBottom:"2em"}}>{t("exp.exp-more-skills")}</h2>
            <Skills/>
            <div className={dark ? "separator dark-font" : "separator"}>
                <h1>~~~~~~~~~~~~<span>~</span></h1>
            </div>
        </section>
    )
}

export default Exp;