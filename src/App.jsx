import './App.css';
import Hero from './components/body/Hero';
import Intro from './components/body/Intro';
import Exp from './components/body/Exp';
import Contact from './components/body/Contact';
import { DarkMode } from './context/DarkMode';
import { useState } from 'react';

function App() {
  const [dark, setDark] = useState(false)
  let body = document.querySelector("body")
  if(dark){ 
    body.style.backgroundColor="#705523" 
  }else{
    body.style.backgroundColor="#ececa9"
  }

  return (
    <DarkMode.Provider value={{dark, setDark}}>
      <Hero/>
      <Intro/>
      <Exp/>
      <Contact/>
    </DarkMode.Provider>
  );
}

export default App;
