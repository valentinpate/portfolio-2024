import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { useState, useContext } from 'react';
import emailjs from "@emailjs/browser"
import Footer from '../parts/Footer';

function Contact() {
    const {dark} = useContext(DarkMode)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [sent, setSent] = useState("Por favor, rellene todos los campos en caso de que usted quiera enviar un mail.")

    function send(e){
        setSent("Enviando...")
        e.preventDefault()
        if(name == "" || email == "" || subject == "" || message == ""){
            setSent("¡No olvide rellenar todos los campos para que el mail sea enviado!")
        }else{
            emailjs.sendForm("service_i9lnaug", "template_eryyf5k", e.target, "GRGTWVL0w40udYlyW").then(
                (result)=>{
                 setSent("Su mensaje ha sido enviado. Muchas gracias por contactarse.")
                 console.log(result)
                },
                (error)=>{
                 setSent(error)
                }
             )
        }
    }

  return(
    <>
        <section className="contact" id="Cont">
            <div className="title">
                <h1>Contacto</h1>
                <button className={dark ? "dark-title-btn" : "clear-title-btn"} onClick={()=>{window.scrollTo(0,0)}} title="Ir al inicio"><i class="bi bi-arrow-up-short"></i></button>
            </div>
            <div className="media">
                <a href="https://github.com/valentinpate" target="_blank" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-github"></i></a>
                <a href="https://vercel.com/v-pates-projects" target="_blank" className={dark ? "proj-link dark-title-btn" : "proj-link clear-title-btn"}><i class="bi bi-triangle-fill"></i></a>
            </div>
            <form onSubmit={send} className={dark ? "form dark-form" : "form clear-form"}>
                <div className="form-section">
                    <label htmlFor="">E-mail</label>
                    <input type="text" name="user_email" className={dark ? "dark-input" : "clear-input"} value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>
                <div className="form-section">
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="user_name" className={dark ? "dark-input" : "clear-input"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-section">
                    <label htmlFor="">Asunto</label>
                    <input type="text" name="user_subject" className={dark ? "dark-input" : "clear-input"} value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                </div>
                <div className="form-section">
                    <label htmlFor="">Mensaje</label>
                    <textarea name="message" id="" cols="30" rows="10" className={dark ? "dark-input" : "clear-input"} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <p className="send-disclaimer">{sent}</p>
                <button className="send-btn">Enviar</button>
            </form>
        </section>
        <Footer/>
    </>
    
  )
}

export default Contact;