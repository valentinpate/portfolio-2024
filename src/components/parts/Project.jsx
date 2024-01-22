import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { useContext } from 'react'
import { DarkMode } from '../../context/DarkMode'
import { Translation } from '../../context/Translation'

function Project({ name, img, front, back, desc, link, repo, deploy }){
    const {dark} = useContext(DarkMode)
    const {t} = useContext(Translation)
    return(
        <div className="project">
            <div className={dark ? "project-box text-center position-relative dark-project-box" : "project-box text-center position-relative clear-project-box"}>
                <h2><b>{name}</b></h2>
                <div className="project-image">
                    {img.map((i)=>{
                        return <img src={i} alt="" />
                    })}
                </div>
                <div className="languages">
                    <div className="front">
                        <h4 className="uppercase" style={{fontWeight:"600"}}>Front</h4>
                        <div className="front-lang">
                            {front.map((f)=>{
                                return <img src={f} alt="" />
                            })}
                        </div>
                    </div>
                    <div class="back">
                        <h4 className="uppercase" style={{fontWeight:"600"}}>Back</h4>
                        {Array.isArray(back) && back.length > 0 ?
                         <div className="back-lang">
                            {back.map((b)=>{
                                return <img src={b} alt="" />
                            })}
                         </div> 
                         : 
                         <p>{back}</p>}
                    </div>
                </div>
                <p className="proj-desc">{desc}</p>
                <div className="links">
                    <div className="original">
                        <h4 className="uppercase">{t("exp.project-page.original")}</h4>
                        <a href={link} target="_blank" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-file-earmark"></i></a>
                    </div>
                    <div className="github">
                        <h4 className="uppercase">{t("exp.project-page.github")}</h4>
                        <a href={repo} target="_blank" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-github"></i></a>
                    </div>
                    <div className="deploy">
                        <h4 className="uppercase">Deploy</h4>
                        <a href={deploy} target="_blank" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-upload"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;