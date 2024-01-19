import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';

function Contact() {
    const {dark} = useContext(DarkMode)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [about, setAbout] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState("Por favor, rellene todos los campos en caso de que usted quiera enviar un mail.")

    function send(e){
        e.preventDefault()
        setSent("Su mensaje ha sido enviado.")
    }
  return(
    <section className="contact" id="Cont">
        <div className="title">
            <h1>Contacto</h1>
            <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
        </div>
        <div className="media">
            <a href="https://github.com/valentinpate" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-github"></i></a>
            <a href="https://vercel.com/v-pates-projects" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-triangle-fill"></i></a>
        </div>
        <form onSubmit={send} className={dark ? "form dark-project-box" : "form clear-project-box"}>
            <div className="form-section">
                <label htmlFor="">E-mail</label>
                <input type="text" className={dark ? "dark-input" : "clear-input"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div className="form-section">
                <label htmlFor="">Nombre</label>
                <input type="text" className={dark ? "dark-input" : "clear-input"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div className="form-section">
                <label htmlFor="">Asunto</label>
                <input type="text" className={dark ? "dark-input" : "clear-input"} value={about} onChange={(e)=>{setAbout(e.target.value)}}/>
            </div>
            <div className="form-section">
                <label htmlFor="">Mensaje</label>
                <textarea name="" id="" cols="30" rows="10" className={dark ? "dark-input" : "clear-input"} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
            </div>
            <p><b>{sent}</b></p>
            <button>Enviar</button>
        </form>
    </section>
  )
}

export default Contact;