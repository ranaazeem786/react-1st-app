import React from 'react';
import Myname from './myname.js';
import Myqualification from './qualification.js';
import Study from './study.js';
import Contact from './contact.js';

function App() {
   return (
    <div>
      <Myname myname="Azeem Ahmad" />
      <Myqualification qualif="MBA and LLB "/>
      <Study inst="PIAIC" student= "CNC and React"></Study>
      <Contact mycontact="+92-300-8665352" myemail="ranaazeem786@hotmail.com" />
      <p>by profession i am a Corporate Banker and i am trying to generate a new income streem thats why i am also trying to develop new skills.</p>
    </div>
   )
   
}

export default App;
