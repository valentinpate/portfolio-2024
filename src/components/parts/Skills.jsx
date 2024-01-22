import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { useContext, useState } from "react"
import { DarkMode } from "../../context/DarkMode"
import moreSkills from "../moreSkills"
import { Translation } from '../../context/Translation';

function Skills(){
    const {dark} = useContext(DarkMode)
    const {t} = useContext(Translation)
    const [skill, setSkill] = useState("fjs")
    const [display, setDisplay] = useState(moreSkills.fjs)
    
    function show(param){
        setSkill(param)
        setDisplay(moreSkills[param])
    }

    return(
        <>
            <div className="other-buttons">
                <button className={skill == "fjs" ? "clicked-button" : "other-button"} value="fjs" onClick={(e)=>{show(e.target.value)}}>{t("exp.skills.framework-js")}</button>
                <button className={skill == "fcss" ? "clicked-button" : "other-button"} value="fcss" onClick={(e)=>{show(e.target.value)}}>{t("exp.skills.framework-css")}</button>
                <button className={skill == "db" ? "clicked-button" : "other-button"} value="db" onClick={(e)=>{show(e.target.value)}}>{t("exp.skills.db")}</button>
                <button className={skill == "oth" ? "clicked-button" : "other-button"} value="oth" onClick={(e)=>{show(e.target.value)}}>{t("exp.skills.editors")}</button>
                <button className={skill == "eng" ? "clicked-button" : "other-button"} value="eng" onClick={(e)=>{show(e.target.value)}}>{t("exp.skills.english")}</button>
            </div>
            <div className={dark ? "others dark-project-box" : "others clear-skills"}>
                <div class="other">
                    {display.map((s)=>{
                        if(s === "Nivel B2 de Inglés (FCE)"){
                            return <h3>{t("exp.skills.fce")}</h3>
                        }else{
                            return <img src={s} alt="Skill"></img>
                        }
                    })}
                </div>
            </div>
    </>
    )
}

export default Skills;