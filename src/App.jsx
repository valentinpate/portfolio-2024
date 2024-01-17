import './App.css';
import Hero from './components/body/Hero';
import Intro from './components/body/Intro';
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
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum excepturi sit veniam nihil qui cum doloremque molestiae, quam aliquam ipsum maxime expedita quos reiciendis vel explicabo nostrum temporibus voluptate.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum excepturi sit veniam nihil qui cum doloremque molestiae, quam aliquam ipsum maxime expedita quos reiciendis vel explicabo nostrum temporibus voluptate.</h1>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem harum excepturi sit veniam nihil qui cum doloremque molestiae, quam aliquam ipsum maxime expedita quos reiciendis vel explicabo nostrum temporibus voluptate.</h1>
    </DarkMode.Provider>
  );
}

export default App;
