import '../css/style.css'
import '../css/clear.css';
import '../css/dark.css'
import { DarkMode } from '../../context/DarkMode';
import { Translation } from '../../context/Translation'
import { useState, useContext } from 'react';
import emailjs from "@emailjs/browser"
import Footer from '../parts/Footer';

function Contact() {
    const {dark} = useContext(DarkMode)
    const {t, sent, setSent} = useContext(Translation)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")

    function send(e){
        setSent(t("contact.contact-sent-usestate.sending"))
        e.preventDefault()
        if(name == "" || email == "" || subject == "" || message == ""){
            setSent(t("contact.contact-sent-usestate.sent-warn"))
        }else{
            emailjs.sendForm("service_i9lnaug", "template_eryyf5k", e.target, "GRGTWVL0w40udYlyW").then(
                (result)=>{
                 setSent(t("contact.contact-sent-usestate.sent-done"))
                },
                (error)=>{
                 setSent(t("contact.contact-sent-usestate.sent-error"))
                }
             )
        }
    }

  return(
    <>
        <section className={dark ? "contact dark-font" : "contact"} id="Cont">
            <div className="title">
                <h1>{t("header.nav-cont")}</h1>
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
                    <label htmlFor="">{t("contact.contact-form.contact-form-name")}</label>
                    <input type="text" name="user_name" className={dark ? "dark-input" : "clear-input"} value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div className="form-section">
                    <label htmlFor="">{t("contact.contact-form.contact-form-subject")}</label>
                    <input type="text" name="user_subject" className={dark ? "dark-input" : "clear-input"} value={subject} onChange={(e)=>{setSubject(e.target.value)}}/>
                </div>
                <div className="form-section">
                    <label htmlFor="">{t("contact.contact-form.contact-form-message")}</label>
                    <textarea name="message" id="" cols="30" rows="10" className={dark ? "dark-input" : "clear-input"} value={message} onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                </div>
                <p className="send-disclaimer">{sent}</p>
                <button className="send-btn">{t("contact.contact-form.contact-form-send")}</button>
            </form>
        </section>
        <Footer/>
    </>
    
  )
}

export default Contact;