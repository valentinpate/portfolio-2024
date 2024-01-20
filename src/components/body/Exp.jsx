import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import proj from '../proj';
import Project from '../parts/Project';
import Skills from '../parts/Skills';
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';

function Exp(){
    const {dark} = useContext(DarkMode)
    
    return(
        <section className={dark ? "experience dark-font" : "experience"} id="Exp">
            <div className="title">
                <h1>Experiencia</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <p className="exp-desc" style={{marginBottom:"2em"}}>En esta sección se mostrarán distintos proyectos web de los que he aprendido y crecido tanto en la teoría como en la práctica, desarrollados por mí tanto de forma individual como en equipo con mi experiencia y conocimientos.</p>
            {proj.map((p)=>{
                return (
                    <>
                        <Project name={p.name} img={p.img} front={p.front} back={p.back == null ? " " : p.back} desc={p.desc} link={p.link} repo={p.repo} deploy={p.deploy}/>
                        <div className={dark ? "dots dark-font" : "dots"}>
                            <h1>░░░░░░░░░░░░░░░░░░░░░░░░</h1>
                        </div>
                    </>

                )
            })}
            <h2 style={{marginBottom:"2em"}}>Más habilidades</h2>
            <Skills/>
            <div className={dark ? "separator dark-font" : "separator"}>
                <h1>~~~~~~~~~~~~<span>~</span></h1>
            </div>
        </section>
    )
}

export default Exp;