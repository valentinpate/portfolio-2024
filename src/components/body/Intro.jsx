import '../style.css'
import '../clear.css'
import '../dark.css'
import { useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'
import Languages from './Languages'

function Intro(){
    const {dark, setDark} = useContext(DarkMode)
    return(
    <section className={dark ? "intro dark-font" : "intro"} id="Intro">
        <div className="intro-intro">
            <div className="title">
                <h1>Introducción</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <p>22 años.</p>
            <p>Programador web full stack de la Universidad Tecnológica Nacional (UTN) y estudiante de la tecnicatura en producción digital de la Universidad Nacional de Quilmes (UNQ).</p>
            <p>Siempre con ganas de aprender más en el vasto mundo de los developers y la programación. Empecé en el año 2022 armando pequeñas páginas web con HTML y CSS mientras cursaba en la materia de diseño web de la UNQ, en donde me di cuenta de que había entrado en un enorme mundo que me llamaba enormemente la atención. Al año siguiente ya estaba en la UTN aprendiendo a programar en JavaScript y leyendo sobre frameworks y bases de datos. Actualmente estoy trabajando en proyectos MERN (MongoDB + Express.js + React + Node.js) y practicando con APIs. </p>
            <p><b>Como otra habilidad a destacar, en 2019 rendí el examen First Certificate con una nota de 175, siendo nivel B2 en inglés.</b></p>
        </div>
        <div className={dark ? "separator dark-font" : "separator"}>
            <h1>~~~~~~~~~~~~<span>~</span></h1>
        </div>
    </section>
    )
}

export default Intro;