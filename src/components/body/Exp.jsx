import '../style.css'
import '../clear.css';
import '../dark.css'
import proj from '../proj';
import Project from '../Project';
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';

function Exp(){
    const {dark} = useContext(DarkMode)
    const arrayIMG = ["/img/projects/hc1.png","/img/projects/hc2.png"]
    const arrayF = ["/img/program/frontend/html.png","/img/program/frontend/css.png"]
    const arrayB = null
    const lorem = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum debitis natus, qui sapiente, incidunt optio facilis consequatur tenetur suscipit ut dolores quibusdam asperiores quae aliquam, illum quas! Perferendis, possimus repellendus.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum debitis natus, qui sapiente, incidunt optio facilis consequatur tenetur suscipit ut dolores quibusdam asperiores quae aliquam, illum quas! Perferendis, possimus repellendus."
    const url1= "https://www.unq.edu.ar/carrera/32-tecnicatura-universitaria-en-programacion-informatica/"
    const url2= "https://icons.getbootstrap.com/icons/file-earmark/"
    return(
        <section className={dark ? "experience dark-font" : "experience"} id="Exp">
            <div className="title">
                <h1>Experiencia</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <p className="exp-desc">En esta sección se mostrarán distintos proyectos web de los que he aprendido y crecido tanto en la teoría como en la práctica, desarrollados por mí tanto de forma individual como en equipo con mi experiencia y conocimientos.</p>
            <div className="projects">
                <Project name="Mario" img={arrayIMG} front={arrayF} back={arrayB == null ? " " : arrayB } desc={lorem} link={url1} repo={url2}/>
            </div>
            
        </section>
    )
}

export default Exp;