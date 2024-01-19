import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { useContext, useState } from "react"
import { DarkMode } from "../../context/DarkMode"
import moreSkills from "../moreSkills"

function Skills(){
    const {dark} = useContext(DarkMode)
    const [skill, setSkill] = useState("fjs")
    const [display, setDisplay] = useState(moreSkills.fjs)
    console.log(moreSkills)
    
    function show(param){
        setSkill(param)
        setDisplay(moreSkills[param])
    }

    return(
        <>
            <div className="other-buttons">
                <button className={skill == "fjs" ? "clicked-button" : "other-button"} value="fjs" onClick={(e)=>{show(e.target.value)}}>+ Framework JS</button>
                <button className={skill == "fcss" ? "clicked-button" : "other-button"} value="fcss" onClick={(e)=>{show(e.target.value)}}>+ Framework CSS</button>
                <button className={skill == "db" ? "clicked-button" : "other-button"} value="db" onClick={(e)=>{show(e.target.value)}}>+ Bases de datos</button>
                <button className={skill == "oth" ? "clicked-button" : "other-button"} value="oth" onClick={(e)=>{show(e.target.value)}}>+ Editores de imagen - audio/vídeo</button>
                <button className={skill == "eng" ? "clicked-button" : "other-button"} value="eng" onClick={(e)=>{show(e.target.value)}}>+ Inglés</button>
            </div>
            <div className={dark ? "others dark-project-box" : "others clear-project-box"}>
                <div class="other">
                    {display.map((s)=>{
                        if(s === "Nivel B2 de Inglés (FCE)"){
                            return <h3>{s}</h3>
                        }else{
                            return <img src={s} alt=""></img>
                        }
                    })}
                </div>
            </div>
    </>
    )
}

export default Skills;