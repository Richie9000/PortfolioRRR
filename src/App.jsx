import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Shirt from './Home/Shirt'
import { Breakpoint, BreakpointProvider } from 'react-socks';


function App() {
 return(
  <div>
    <BreakpointProvider>
    <Navbar/>
    <Home/>
    </BreakpointProvider>
  </div>
 )
}

export default App
