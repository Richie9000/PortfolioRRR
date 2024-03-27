import React from 'react'
import { Breakpoint } from 'react-socks'
import ShirtMarkUp from './ShirtMarkUp';


const Home = () => {
  return (
    <div>
    <Breakpoint small down>
     <Paragraph margin="40px" />
     <ShirtMarkUp height="50vh"/>
    </Breakpoint>
    <Breakpoint medium up>
     <Paragraph/>
     <ShirtMarkUp height="80vh"/>
    </Breakpoint>
    </div>
  )
}

const Paragraph = ({margin}) => {
  return (
    <div style={{margin}}>
      Hi my name is RRR, I'm a software developer focused on 3D.
      If you need help with 3D web pages, let me know.
      You can see some of my work. If you like it, send me a message.
    </div>
  );
};

export default Home