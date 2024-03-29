import './App.css';
import Hero from './components/body/Hero';
import Intro from './components/body/Intro';
import Exp from './components/body/Exp';
import Contact from './components/body/Contact';
import { DarkMode } from './context/DarkMode';
import { Translation } from './context/Translation';
import { useState } from 'react';
import {useTranslation} from "react-i18next"

function App() {
  const [dark, setDark] = useState(false)
  const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState("es")
  const [sent, setSent] = useState(t("contact.contact-sent-usestate.sent-init"))

  function set(){
    setDark(!dark)
  }

  let body = document.querySelector("body")
  
  if(dark){ 
    body.style.backgroundColor="#705523" 
  }else{
    body.style.backgroundColor="#ececa9"
  }

  return (
    <Translation.Provider value={{t, i18n, language, setLanguage, sent, setSent}}>
      <DarkMode.Provider value={{dark, set}}>
        <Hero/>
        <Intro/>
        <Exp/>
        <Contact/>
      </DarkMode.Provider>
    </Translation.Provider>
  );
}

export default App;
