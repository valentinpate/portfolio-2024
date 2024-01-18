import './style.css'
import './clear.css'
import './dark.css'
import { useContext } from 'react'
import { DarkMode } from '../context/DarkMode'

function Project({ name, img, front, back, desc, link, repo }){
    const {dark} = useContext(DarkMode)
    function langMap(param){
        if(param == null){
            return <h3>param</h3>
        }else{
            param.map((p)=>{
                return <img src={p} alt="" />
            })
        }
    }
    return(
        <div className="project">
            <div className={dark ? "dots dark-font" : "dots"}>
                <h1>░░░░░░░░░░░░░░░░░░░░░░░░</h1>
            </div>
            <div className={dark ? "project-box text-center position-relative dark-project-box" : "project-box text-center position-relative clear-project-box"}>
                <h1>{name}</h1>
                <div className="project-image">
                    {img.map((i)=>{
                        return <img src={i} alt="" />
                    })}
                </div>
                <div className="languages">
                    <div className="front">
                        <h3 className="uppercase">Front</h3>
                        <div className="front-lang">
                            {front.map((f)=>{
                                return <img src={f} alt="" />
                            })}
                        </div>
                    </div>
                    <div class="back">
                        <h3 className="uppercase">Back</h3>
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
                <p className="exp-desc proj-desc">{desc}</p>
                <div className="links">
                    <div className="original">
                        <h3 className="uppercase">Diseño original</h3>
                        <a href={link} className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-file-earmark"></i></a>
                    </div>
                    <div className="github">
                        <h3 className="uppercase">Repositorio de GitHub</h3>
                        <a href={repo} className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-github"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;