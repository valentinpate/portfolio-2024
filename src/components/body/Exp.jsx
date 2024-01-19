import '../style.css'
import '../clear.css';
import '../dark.css'
import proj from '../proj';
import Project from '../Project';
import Skills from './Skills';
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
            <p className="exp-desc">En esta sección se mostrarán distintos proyectos web de los que he aprendido y crecido tanto en la teoría como en la práctica, desarrollados por mí tanto de forma individual como en equipo con mi experiencia y conocimientos.</p>
            {proj.map((p)=>{
                return <Project name={p.name} img={p.img} front={p.front} back={p.back == null ? " " : p.back} desc={p.desc} link={p.link} repo={p.repo} deploy={p.deploy}/>
            })}
            <div className={dark ? "dots dark-font" : "dots"}>
                <h1>░░░░░░░░░░░░░░░░░░░░░░░░</h1>
            </div>
            <div className="title">
                <h1>Otras habilidades</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <div className="others">
                <div class="frameworks-js"> 
                {/* poner bordes */}
                    <h4>Framework JS</h4>
                    <img src="/img/program/frontend/vite.svg" alt="" />
                </div>
                <div className="frameworks-css">
                    <h4>Framework CSS</h4>
                    <img src="/img/program/frontend/bootstrap.png" alt="" />
                    <img src="/img/program/frontend/bulma.png" alt="" />
                    <img src="/img/program/frontend/materialize.png" alt="" />
                </div>
                <div className="db">
                    <h4>Bases de datos</h4>
                    <img src="/img/program/backend/sql.png" alt="" />
                </div>
                <div className="tools">
                    <h4>Otros</h4>
                    <img src="/img/program/others/vegas.png" alt="" />
                    <img src="/img/program/others/premiere.png" alt="" />
                    <img src="/img/program/others/pixlr.svg" alt="" />
                </div>
                <div className="other">
                    <h4>Nivel B2 en Inglés</h4>
                    <img src="/img/program/others/cambridge.png" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Exp;