import React, { Suspense, useState } from 'react'
import { Breakpoint } from 'react-socks'
import ShirtMarkUp from './ShirtMarkUp';
import RobotMarkUp from './RobotMarkUp';

import WHMarkUp from './WHMarkUp';




const Home = ({ language }) => {
  return (
    <div>
    <Breakpoint small down>
     <Paragraph margin="40px" language={language}/>
     <RobotMarkUp height="50vh"/>
    </Breakpoint>
    <Breakpoint medium up>
  <div style={{display:"flex", width:"100%", justifyContent: "space-between"}}>
    <div style={{width: "50%"}}>
      <Paragraph margin="5vh 1vh 1vh 1vh" width="100%" language={language} />
      <WHMarkUp height="60vh" width="100%"/>
    </div>
    <ShirtMarkUp height="80vh" width="50vw"/>   
  </div>
</Breakpoint>
    </div>
  )
}

const Paragraph = ({ margin, width, language }) => {


  const englishText = `
    Hi my name is RRR, I'm a software developer focused on 3D.
    If you need help with 3D web pages, let me know.
    You can see some of my work. If you like it, send me a message.
  `;

  const spanishText = `
    Hola, mi nombre es RRR, soy un desarrollador de software especializado en 3D.
    Si necesitas ayuda con páginas web en 3D, házmelo saber.
    Puedes ver algunos de mis trabajos. Si te gustan, envíame un mensaje.
  `;

  return (
    <div style={{ margin, width }}>
      <div>{language === 'english' ? englishText : spanishText}</div>
     
    </div>
  );
};



export default Home