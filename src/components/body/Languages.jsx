import "../style.css"
import "../clear.css"
import "../dark.css"

function Languages(){
    return(
        <div className="languages">
            <h2>Habilidades y herramientas de trabajo</h2>
            <h3>Front-end</h3>
            <div className="front">
                <div className="skills">
                    <img src="/img/program/frontend/html.png" alt="" />
                    <img src="/img/program/frontend/css.png" alt="" />
                    <img src="/img/program/frontend/js.png" alt="" />
                    <img src="/img/program/frontend/react.png" alt="" />
                    <img src="/img/program/frontend/vite.svg" alt="" />
                </div>
                <div className="frameworks">
                    <h4>Frameworks de CSS</h4>
                    <div class="skills">
                        <img src="/img/program/frontend/bootstrap.png" alt="" />
                        <img src="/img/program/frontend/bulma.png" alt="" />
                        <img src="/img/program/frontend/materialize.png" alt="" />
                    </div>
                </div>
            </div>
            <h3>Back-end</h3>
            <div className="back">
                <div className="skills">
                    <img src="/img/program/backend/node.png" alt="" />
                    <img src="/img/program/backend/express.png" alt="" />
                    <img src="/img/program/backend/ejs.svg" alt="" />
                </div>
                <div className="db">
                    <h4>Bases de datos</h4>
                    <div class="skills">
                        <img src="/img/program/backend/mongo.png" alt="" />
                        <img src="/img/program/backend/sql.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="others">
                <h3>Plataformas</h3>
                <div className="platforms">
                    <div className="skills">
                        <img src="/img/program/platforms/github.png" alt="" />
                        <img src="/img/program/platforms/vercel.svg" alt="" />
                        <img src="/img/program/platforms/neocities.png" alt="" />
                    </div>
                </div>
                <h3>Otras herramientas</h3>
                <div className="tools">
                    <div className="skills">
                        <img src="/img/program/others/vegas.png" alt="" />
                        <img src="/img/program/others/premiere.png" alt="" />
                        <img src="/img/program/others/pixlr.svg" alt="" />
                    </div>
                </div>
            </div>
            <h3>Idiomas</h3>
            <div className="skills">
                <img src="/img/program/others/cambridge.png" alt="" />
                <h4>Inglés: CEFR Level B2. FCE rendido en 2019.</h4>
            </div>
        </div>
    )
}

export default Languages;