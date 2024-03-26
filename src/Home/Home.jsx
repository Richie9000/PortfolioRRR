import React from 'react'
import { Breakpoint } from 'react-socks'

const Home = () => {
  return (
    <div>
    <Breakpoint small down>
     <Paragraph margin="40px" />
    </Breakpoint>
    <Breakpoint medium up>
     <Paragraph/>
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